export class Pagination {
    lastPage: number = 1;
    arrayPage: Array<number> = [];
    count: number = 0;
    pageSize: number = 10;
    page: number = 0;

    constructor(page = 1, pageSize = 10) {
        this.page = page;
        this.pageSize = pageSize;
    }

    refresh(count: number) {
        this.count = count;
        this.arrayPage = [];
        this.lastPage = Math.ceil(count/this.pageSize);

        const counter = 2;
        const actual = this.page;
        for (let i = 1; i <= this.lastPage; i++) {
            let v = i - actual;
            if (v < 0) {
                v *= -1;
            }
            if (v <= counter) {
                this.arrayPage.push(i);
            }
        }
    }

    get $() {
        return {
            page: this.page,
            pageSize: this.pageSize
        }
    }
}
