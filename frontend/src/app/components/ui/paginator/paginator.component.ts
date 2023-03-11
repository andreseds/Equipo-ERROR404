import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
    @Input() pagination: Pagination = new Pagination
    @Output() search: any = new EventEmitter<any>;

    constructor() { }

    ngOnInit(): void {
    }

    next() {
        this.pagination.page = parseInt(`${this.pagination.page}`) + 1;
        this.search.emit(this.pagination);
    }

    prev() {
        this.pagination.page = parseInt(`${this.pagination.page}`) - 1;
        this.search.emit(this.pagination);
    }

    goto(page: number) {
        this.pagination.page = page;
        this.search.emit(this.pagination);
    }
}
