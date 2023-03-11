//#region UTILS

export class Pagination {
    public page: number = 1;
    public pageSize: number = 10;
    public lastPage: number = 0;
    public count: number = 0;
    public arrayPages: number[] = [];

    public constructor(params: any = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>params)[property];
                }
            }
        }
    }

    public update(count: number, size: number = 2): void {
        this.arrayPages = [];
        this.count = count;
        this.lastPage = Math.ceil(this.count / this.pageSize);

        if (this.lastPage) {
            const actual = this.page;
            for (let i = 1; i <= this.lastPage; i++) {
                let v = i - actual;
                if (v < 0) {
                    v *= -1;
                }
                if (v <= size) {
                    this.arrayPages.push(i);
                }
            }
        }
    }
}

export class DefaultResponse {
    public object: any = null;
    public status: boolean = false;
    public message: string = '';
    
    constructor(params: any = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>params)[property];
                }
            }
        }
    }
}

export class BaseObject {
    $guid?: string;
    $hash?: string;
    $id?: number;
    $owner?: number;
    $chunk?: string;
    $createdOn?: string;
    $creator?: string;
    $rule?: string;
    $str?: string;
    $trash?: string;
    $updatedOn?: string;
    $updatedby?: string;
    
    constructor(params: any = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>params)[property];
                }
            }
        }
    }

    get updatedOn(): Date | null {
        return this.$updatedOn ? new Date(this.$updatedOn) : this.$createdOn ? new Date(this.$createdOn) : null;
    }
}

//#endregion

//#region DTO

export class ReadObjecstDto {
    public pagination: Pagination = new Pagination;
    public filters?: any;
    public orderBy?: any;

    constructor(params: any = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>params)[property];
                }
            }
        }
    }
}

export class LoginDto {
    public username: string = '';
    public password: string = '';
    public remember: boolean = false;

    constructor(params: any = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>params)[property];
                }
            }
        }
    }
}