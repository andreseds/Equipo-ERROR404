import { Injectable } from '@angular/core';
import { UiService } from './ui.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DefaultResponse, LoginDto, Pagination } from '../models/inertia.entity';

const endpoint = 'http://localhost:3000';
const TENANT_NAME = 'a6a5787d-7fac-4c57-8e04-686dc8a57408';

@Injectable({
    providedIn: 'root'
})
export class InertiaService {
    private _token: string = '';

    constructor(private http: HttpClient, private ui: UiService) { }

    public async login(loginDto: LoginDto) {
        try {
            const res: DefaultResponse = await this.http.post(`${endpoint}/auth/login/${TENANT_NAME}/clients`, loginDto).toPromise() as DefaultResponse;
            if (!res.status) {
                throw res.message;
            }
            this.token = res.object.data.accessToken;
            this.ui.messageSuccess('Welcome');
            return true;
        } catch (ex) {
            this.ui.messageError(<string>ex);
        }
        return false;
    }

    public async saveElement(objectName: string, schema: any): Promise<any> {
        try {
            const res: DefaultResponse = await this.http.post(`${endpoint}/api/crud/${objectName}`,
                {
                    schema,
                }, { headers: this.headers }).toPromise() as DefaultResponse;
            if (!res.status) {
                throw res.message;
            }
            return res.object.data;
        } catch (ex) {
            console.error(ex);
        }
        return null;
    }

    public async getElements(objectName: string, schema: any, orderBy?: any, pagination?: Pagination): Promise<any[]> {
        try {
            const res: DefaultResponse = await this.http.post(`${endpoint}/api/select/${objectName}`,
                {
                    schema,
                    returnQuery: true,
                    pagination,
                    orderBy
                }, { headers: this.headers }).toPromise() as DefaultResponse;
            if (!res.status) {
                throw res.message;
            }
            if (pagination) {
                pagination.update(res.object.pagination?.count);
            }
            if (res.object.data) {
                if (res.object.data instanceof Array) {
                    return res.object.data;
                } else {
                    return [res.object.data];
                }
            }
        } catch (ex) {
            console.error(ex);
        }
        return [];
    }
    
    private set token(value: string | null) {
        this._token = value ?? '';
        localStorage.setItem('accessToken', <string>value);
    }

    private get token(): string | null {
        if (!this._token) {
            this._token = localStorage.getItem('accessToken') ?? '';
        }
        return this._token;
    }

    public get isAuthenticated() {
        return this.token?.length;
    }

    private get headers(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` });
    }
}
