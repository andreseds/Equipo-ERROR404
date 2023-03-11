import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Subcategory } from 'src/app/models/models';
import { clone, thread } from 'src/app/services';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    private objectName = 'categories';
    private module = 'category';
    private modulePlural = 'categories';
    public guid: string = '';
    public body: Category = new Category
    private cache: Category = new Category;
    public searchSubcategory = '';
    public editable: boolean = true;
    public subcategoriesLoaded: boolean = true;
    public form!: FormGroup;

    constructor(private inertia: InertiaService,
                private ui: UiService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const params:any = this.activatedRoute.snapshot.params;
        this.guid = params.guid;

        if (this.guid) {
            await this.init();
        }
                
        this.form = new FormGroup({
            name: new FormControl([this.body.name, Validators.required]),
        });
    }

    async init() {
        const select = await this.inertia.getElement(this.objectName, this.guid, this.body.$$);
        console.log(select);
        if (select?.$guid) {
            this.body = new Category(clone(select));
        }

        this.cache = new Category(clone(this.body));
    }

    addSubcategory() {
        this.body.subcategories.push(new Subcategory);
        this.subcategoriesLoaded = false;
        thread((() => {
            this.subcategoriesLoaded = true;
        }).bind(this));
    }

    removeSubcategories() {
        if (this.guid) {
            for (const subcategory of (this.body.subcategories.filter((x: any) => x.$_select) as Array<any>)) {
                subcategory.$remove = true;
                delete subcategory.$_select;
            }
            this.body.subcategories = this.body.subcategories.filter((x: any) => !x.$remove || x.$guid);
        } else {
            this.body.subcategories = this.body.subcategories.filter((x: any) => !x.$_select);
        }
    }

    async submit() {
        if (this.form.valid) {
            const crud = await this.inertia.saveElement(this.objectName, this.body);
            if (crud?.$guid) {
                if (this.guid) {
                    this.ui.messageSuccess('Category was successfully updated');
                    await this.init();
                } else {
                    this.ui.messageSuccess('Category was successfully created');
                    this.router.navigate([`${this.module}/${crud.$guid}`]);
                }
            }
        } else {
            this.touch();
            this.ui.messageError('Please fill all required fields');
        }
    }

    restore() {
        this.body = new Category(clone(this.cache));
        this.editable = false;
    }

    list() {
        this.router.navigate([this.modulePlural]);
    }

    touch() {
        for (const k in this.form.controls) {
            this.form.controls[k].markAsTouched();
        }
    }

    hasError(field: string) {
        if (this.form.controls[field]?.touched && this.form.controls[field].errors && this.form.controls[field].errors?.['required']) {
            return 'Category name is required';
        }
        return null;
    }

    get hasSubcategoriesBulkAction() {
        return this.body.subcategories.filter((x: any) => x.$_select).length;
    }

    get subcategories() {
        return (this.body.subcategories || []).filter((x: any) => !x.$remove)
    }
}
