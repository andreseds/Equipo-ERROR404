import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/models';
import { clone } from 'src/app/services';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss'],
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
export class StoreComponent implements OnInit {
    private objectName = 'store';
    private module = 'product-store';
    private modulePlural = 'product-stores';
    public guid: string = '';
    public body: Store = new Store
    private cache: Store = new Store;
    public editable: boolean = true;
    public form!: FormGroup;

    constructor(private inertia: InertiaService,
        private ui: UiService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const params: any = this.activatedRoute.snapshot.params;
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
            this.body = new Store(clone(select));
        }

        this.cache = new Store(clone(this.body));
    }

    async submit() {
        if (this.form.valid) {
            const crud = await this.inertia.saveElement(this.objectName, this.body);
            if (crud?.$guid) {
                if (this.guid) {
                    this.ui.messageSuccess('Store was successfully updated');
                    await this.init();
                } else {
                    this.ui.messageSuccess('Store was successfully created');
                    this.router.navigate([`${this.module}/${crud.$guid}`]);
                }
            }
        } else {
            this.touch();
            this.ui.messageError('Please fill all required fields');
        }
    }

    restore() {
        this.body = new Store(clone(this.cache));
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
            return 'Store name is required';
        }
        return null;
    }
}
