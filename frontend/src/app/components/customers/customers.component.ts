import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/models';
import { Pagination } from 'src/app/models/pagination.model';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    public customers: Customer[] = [];
    private objectName = 'customers';
    private module = 'customer';
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
        this.inertia.getElements(this.objectName, (new Customer).$, this.$filter, this.pagination).then((({ data, pagination }) => {
            this.customers = data;
            this.pagination.refresh(pagination.count);
        }));
    }

    async remove() {
        const items: any = this.customers.filter((x: any) => x.$_select);
        for (const item of items) {
            item.$remove = true;
            delete item.$_select;
        }
        this.inertia.saveElement(this.objectName, items).then((res: any) => {
            if (res) {
                this.ui.messageSuccess('Customer deleted');
                this.search();
            }
        });
    }

    get $filter() {
        const _: any = {};
        if (this.filter.name) {
            _.firstname = [{ op: 'bracked_in', con: 'and' }, { op: 'like', val: this.filter.name, con: 'or' }];
            _.lastname = [{ op: 'like', val: this.filter.name, con: 'or' }, { op: 'bracked_out' }];
        }
        if (this.filter.dni) {
            _.dni = [{ op: 'like', val: this.filter.dni, con: 'and' }];
        }
        if (this.filter.phone1) {
            _.phone1 = [{ op: 'like', val: this.filter.phone1, con: 'and' }];
        }
        return _;
    }

    get hasBulkAction() {
        return this.customers.filter((x: any) => x.$_select).length;
    }
}
