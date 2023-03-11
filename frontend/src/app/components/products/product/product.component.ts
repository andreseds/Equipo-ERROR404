import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Category, Supplier, ProductType, Subcategory, Stock, Product_x_ProductType, Store } from 'src/app/models/models';
import { clone } from 'src/app/services';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
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
export class ProductComponent implements OnInit {
    private modulePlural = 'products';
    private objectName = 'products';
    private module = 'product';
    public guid: string = '';
    public body: Product = new Product
    public categories: Array<Category> = [];
    public suppliers: Array<Supplier> = [];
    public stores: Array<Store> = [];
    public productTypes: Array<ProductType> = [];
    public subcategories: Array<Subcategory> = [];
    public selectedCategory: string = '';
    public selectedSubcategories: any = [];
    public selectedProductType: any = [];
    public selectedSupplier: string = '';
    public selectedStore: string = '';
    public editable: boolean = true;
    private cache: Product = new Product;
    public form!: FormGroup;

    constructor(private inertia: InertiaService,
                private ui: UiService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const params:any = this.activatedRoute.snapshot.params;
        this.guid = params.guid;

        await this.loadCategories();
        await this.loadProductTypes();
        await this.loadSuppliers();
        await this.loadStores();

        await this.init();

        this.form = new FormGroup({
            name: new FormControl([this.body.name, Validators.required]),
            sku: new FormControl([this.body.sku, Validators.required]),
        });
    }

    async init() {
        if (this.guid) {
            const select = await this.inertia.getElement(this.objectName, this.guid, this.body.$$$);
            if (select?.$guid) {
                this.body = new Product(clone(select));
            }
        }

        const categoryGuid = this.body.categories?.$guid || null;
        if (categoryGuid) {
            this.selectedCategory = this.categories.find(x => x.$guid === categoryGuid)?.$guid || '';
            await this.changeCategory();
        }

        const supplierGuid = this.body.supplier?.$guid || null;
        if (supplierGuid) {
            this.selectedSupplier = this.suppliers.find(x => x.$guid === supplierGuid)?.$guid || '';
            await this.changeSupplier();
        }

        const storeGuid = this.body.store?.$guid || null;
        if (storeGuid) {
            this.selectedStore = this.stores.find(x => x.$guid === storeGuid)?.$guid || '';
            await this.changeStore();
        }

        if (this.body.product_x_subcategories?.length) {
            this.selectedSubcategories = [];
            for (const item of this.body.product_x_subcategories) {
                if (!(item as any)?.$guid) {
                    (item as any).$remove = true;
                }
                this.selectedSubcategories.push((item.subcategories as any)?.$guid);
            }
        }

        if (this.body.product_x_producttype?.length) {
            this.selectedProductType = [];
            for (const item of this.body.product_x_producttype) {
                if (!(item as any)?.$guid) {
                    (item as any).$remove = true;
                }
                this.selectedProductType.push((item.producttype as any)?.$guid);
            }
        }

        if (!this.body.stock) {
            this.body.stock = new Stock;
        }

        this.cache = new Product(clone(this.body));
    }

    async loadCategories() {
        const select = await this.inertia.getElements('categories', (new Category).$);
        if (select?.data?.length) {
            this.categories = select.data;
        }
    }

    async loadProductTypes() {
        const select = await this.inertia.getElements('producttype', (new ProductType).$);
        if (select?.data?.length) {
            this.productTypes = select.data;
        }
    }

    async loadSuppliers() {
        const select = await this.inertia.getElements('supplier', (new Supplier).$);
        if (select?.data?.length) {
            this.suppliers = select.data;
        }
    }

    async loadStores() {
        const select = await this.inertia.getElements('store', (new Store).$);
        if (select?.data?.length) {
            this.stores = select.data;
        }
    }

    async loadSubcategories(val: string) {
        const select = await this.inertia.getElements('subcategories', (new Subcategory).$$, {'categories.$guid': [{op: 'equals', val}]});
        this.subcategories = select?.data || [];
        const subcategories = this.subcategories.filter((y: any) => y.categories?.$guid === val);
        const subcategoryGuid = [];
        for (const subcategory of subcategories) {
            subcategoryGuid.push((subcategory as any).$guid);
        }
        this.changeSubcategory({value: subcategoryGuid, actualValue: null});
    }

    async submit() {
        this.body.product_x_producttype = this.body.product_x_producttype.filter((x: any) => !(!x.$guid && x.$remove)); 
        if (this.form.valid) {
            const crud = await this.inertia.saveElement(this.objectName, this.body);
            if (crud?.$guid) {
                if (this.guid) {
                    this.ui.messageSuccess('Product was successfully updated');
                    await this.init();
                } else {
                    this.ui.messageSuccess('Product was successfully created');
                    this.router.navigate([`${this.module}/${crud.$guid}`]);
                }
            }
        } else {
            this.touch();
            this.ui.messageError('Please fill all required fields');
        }
    }

    changeCategory() {
        this.body.categories = this.categories.find(x => x.$guid === this.selectedCategory) || new Category;

        if (this.body.categories) {
            this.loadSubcategories(this.body.categories.$guid);
        }
    }

    changeSubcategory(ev: any) {
        const noChanges = this.body.product_x_subcategories.filter((x: any) => ev.value.find((y: any) => x.subcategories?.$guid === y));
        const toDelete = this.body.product_x_subcategories.filter((x: any) => !ev.value.find((y: any) => x.subcategories?.$guid === y));
        const toInsert = ev.value.filter((x: any) => !this.body.product_x_subcategories.find((y: any) => y.subcategories?.$guid === x && !y.$remove));
        for (const item of noChanges) {
            delete (item as any).$remove;
        }
        for (const item of toDelete) {
            if ((item as any).$guid) {
                (item as any).$remove = true;
            } else {
                this.body.product_x_subcategories = this.body.product_x_subcategories.filter((x: any) => x.$guid !== (item as any).$guid);
            }
        }
        for (const guid of toInsert) {
            const exists: any = this.body.product_x_subcategories.find((x: any) => x.subcategories?.$guid === guid);
            if (exists) {
                delete exists.$remove;
            } else {
                const product_x_subcategories: any = {
                    subcategories: this.subcategories.find((x: any) => x.$guid === guid)
                };
                if (product_x_subcategories.subcategories) {
                    this.body.product_x_subcategories.push(product_x_subcategories);
                }
            }
        }
    } 

    changeProductType(ev: any) {
        const noChanges = this.body.product_x_producttype.filter((x: any) => ev.value.find((y: any) => x.producttype?.$guid === y));
        const toDelete = this.body.product_x_producttype.filter((x: any) => !ev.value.find((y: any) => x.producttype?.$guid === y));
        const toInsert = ev.value.filter((x: any) => !this.body.product_x_producttype.find((y: any) => y.producttype?.$guid === x && !y.$remove));
        for (const item of noChanges) {
            delete (item as any).$remove;
        }
        for (const item of toDelete) {
            if ((item as any).$guid) {
                (item as any).$remove = true;
            } else {
                this.body.product_x_producttype = this.body.product_x_producttype.filter((x: any) => x.$guid !== (item as any).$guid);
            }
        }
        for (const guid of toInsert) {
            const exists: any = this.body.product_x_producttype.find((x: any) => x.producttype?.$guid === guid);
            if (exists) {
                delete exists.$remove;
            } else {
                const product_x_producttype: any = {
                    producttype: this.productTypes.find((x: any) => x.$guid === guid)
                };
                if (product_x_producttype.producttype) {
                    this.body.product_x_producttype.push(product_x_producttype);
                }
            }
        }
    } 

    changeSupplier() {
        this.body.supplier = this.suppliers.find(x => x.$guid === this.selectedSupplier) || new Supplier;
    }

    changeStore() {
        this.body.store = this.stores.find(x => x.$guid === this.selectedStore) || new Store;
    }

    addProductType() {
        (this.body.product_x_producttype as any).push({
            $producttype: new ProductType
        });
    }

    removeProductType(index: number) {
        (this.product_x_producttypeList[index] as any).$remove = true;
    }

    goto(url: string) {
        this.router.navigate([url])
    }
    
    restore() {
        this.body = new Product(clone(this.cache));
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
            return field + ' is required';
        }
        return null;
    }

    get product_x_producttypeList() {
        return this.body.product_x_producttype.filter(x => !(x as any).$remove);
    }
}
