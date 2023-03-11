import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/app/models/models';
import { Pagination } from 'src/app/models/pagination.model';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-product-types',
    templateUrl: './product-types.component.html',
    styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent implements OnInit {
    public productTypes: ProductType[] = [];
    private objectName = 'producttype';
    private module = 'product-type';
    public filter: any = {};
    public pagination: Pagination = new Pagination;

    constructor(private inertia: InertiaService,
        private router: Router,
        private ui: UiService) { }

    ngOnInit() {
        this.search();
    }

    create() {
        this.router.navigate([`${this.module}`])
    }

    read(guid: string) {
        this.router.navigate([`${this.module}/${guid}`])
    }

    search(pagination: Pagination = new Pagination) {
        this.pagination.page = pagination.page;
        this.inertia.getElements(this.objectName, (new ProductType).$$, this.$filter, this.pagination).then((({ data, pagination }) => {
            this.productTypes = data;
            this.pagination.refresh(pagination.count);
        }));
    }

    async remove() {
        const items: any = this.productTypes.filter((x: any) => x.$_select);
        for (const item of items) {
            item.$remove = true;
            delete item.$_select;
        }
        this.inertia.saveElement(this.objectName, items).then((res: any) => {
            if (res) {
                this.ui.messageSuccess('Product type deleted');
                this.search();
            }
        });
    }

    get $filter() {
        const _: any = {};
        if (this.filter.name) {
            _.name = [{ op: 'like', val: this.filter.name, con: 'and' }];
        }
        if (this.filter.description) {
            _.description = [{ op: 'like', val: this.filter.description, con: 'and' }];
        }
        return _;
    }

    get hasBulkAction() {
        return this.productTypes.filter((x: any) => x.$_select).length;
    }
}
