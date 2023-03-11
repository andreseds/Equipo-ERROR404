import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/models';
import { Pagination } from 'src/app/models/pagination.model';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    public products: Product[] = [];
    private objectName = 'products';
    private module = 'product';
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
        this.inertia.getElements(this.objectName, (new Product).$$, this.$filter, this.pagination).then((({ data, pagination }) => {
            this.products = data;
            this.pagination.refresh(pagination.count);
        }));
    }

    async remove() {
        const items: any = this.products.filter((x: any) => x.$_select);
        for (const item of items) {
            item.$remove = true;
            delete item.$_select;
        }
        this.inertia.saveElement(this.objectName, items).then((res: any) => {
            if (res) {
                this.ui.messageSuccess('Product deleted');
                this.search();
            }
        });
    }

    get $filter() {
        const _: any = {};
        if (this.filter.name) {
            _.name = [{ op: 'like', val: this.filter.name, con: 'and' }];
        }
        if (this.filter.sku) {
            _.sku = [{ op: 'like', val: this.filter.sku, con: 'and' }];
        }
        if (this.filter.price) {
            _.price = [{ op: 'equals', val: this.filter.price, con: 'and' }];
        }
        if (this.filter.stock) {
            _['stock.actualqty'] = [{ op: 'equals', val: this.filter.stock, con: 'and' }];
        }
        return _;
    }

    get hasBulkAction() {
        return this.products.filter((x: any) => x.$_select).length;
    }
}
