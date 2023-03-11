import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStates } from 'src/app/models/models';
import { Pagination } from 'src/app/models/pagination.model';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-order-states',
    templateUrl: './order-states.component.html',
    styleUrls: ['./order-states.component.scss']
})
export class OrderStatesComponent implements OnInit {
    public orderStates: OrderStates[] = [];
    private objectName = 'states';
    private module = 'order-state';
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
        this.inertia.getElements(this.objectName, (new OrderStates).$$, this.$filter, this.pagination).then((({ data, pagination }) => {
            this.orderStates = data;
            this.pagination.refresh(pagination.count);
        }));
    }

    async remove() {
        const items: any = this.orderStates.filter((x: any) => x.$_select);
        for (const item of items) {
            item.$remove = true;
            delete item.$_select;
        }
        this.inertia.saveElement(this.objectName, items).then((res: any) => {
            if (res) {
                this.ui.messageSuccess('Order state deleted');
                this.search();
            }
        });
    }

    get $filter() {
        const _: any = {};
        if (this.filter.statename) {
            _.statename = [{ op: 'like', val: this.filter.statename, con: 'and' }];
        }
        return _;
    }

    get hasBulkAction() {
        return this.orderStates.filter((x: any) => x.$_select).length;
    }
}
