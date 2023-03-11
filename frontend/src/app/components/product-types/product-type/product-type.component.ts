import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/models/models';
import { clone } from 'src/app/services';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss'],
    animations: [
        trigger(
            'enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(100%)', opacity: 0 }),
                animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1 }),
                animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 }))
            ])
        ]
        )
    ]
})
export class ProductTypeComponent implements OnInit {
    private objectName = 'producttype';
    private module = 'product-type';
    private modulePlural = 'product-types';
    public guid: string = '';
    public body: ProductType = new ProductType
    private cache: ProductType = new ProductType;
    public editable: boolean = true;
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
        if (select?.$guid) {
            this.body = new ProductType(clone(select));
        }

        this.cache = new ProductType(clone(this.body));
    }

    async submit() {
        if (this.form.valid) {
            const crud = await this.inertia.saveElement(this.objectName, this.body);
            if (crud?.$guid) {
                if (this.guid) {
                    this.ui.messageSuccess('Product type was successfully updated');
                    await this.init();
                } else {
                    this.ui.messageSuccess('Product type was successfully created');
                    this.router.navigate([`${this.module}/${crud.$guid}`]);
                }
            }
        } else {
            this.touch();
            this.ui.messageError('Please fill all required fields');
        }
    }

    restore() {
        this.body = new ProductType(clone(this.cache));
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
            return 'Product type name is required';
        }
        return null;
    }
}
