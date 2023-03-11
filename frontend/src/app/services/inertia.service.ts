import { Injectable } from '@angular/core';
import { InertiaModel } from '../models/models';
import { Response } from '../models/response.model';
import { UiService } from './ui.service';

const endpoint = 'http://localhost:3001/smallstore';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IiRpZCI6MSwiJGd1aWQiOiJmOTkwZDgyMi1mZDIzLTQ5OWUtYjlkNy1iZDM3YzJjNTFmM2EiLCIkb3duZXIiOjAsInVzZXJuYW1lIjoic3lzdGVtIiwibGFuZyI6bnVsbCwidGltZXpvbmUiOm51bGwsIiRoYXNoIjoiLTE0OTM4MjQyMzAiLCJyb2xlcyI6W3sibWV0YSI6InN5c3RlbSIsIm5hbWUiOiJTeXN0ZW0iLCJfY3JlYXRlIjoxMCwiX3JlYWQiOjEwLCJfdXBkYXRlIjoxMCwiX2RlbGV0ZSI6MTB9XSwiJGdyb3VwRW5hYmxlZCI6dHJ1ZSwiJGdyb3VwIjpudWxsLCIkbWFwIjpbXX0sIm1vZCI6IiIsInRlbmFudCI6InNtYWxsc3RvcmUiLCJzZXNzaW9uSWQiOiJmNzc5MDE1YS0xODg5LTQyN2MtOTk2ZC05ZGE4ZTRhZDFhZWQiLCJpYXQiOjE2NjU4MDQwMjYsImV4cCI6MTY2NTkyNDAyNn0.pRUrcZCAxzRgaalkTlBJJQ_olKvNLkw7wjMTXxEV15I';

@Injectable({
    providedIn: 'root'
})
export class InertiaService {

    constructor(private ui: UiService) { }

    async saveElement(objectName: string, schema: any) {
        let res: Response = new Response;
        try {
            console.log(schema)
            const json = await fetch(`${endpoint}/api/crud/${objectName}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    schema
                })
            });
            res = new Response(await json.json());
        } catch (ex) {
            console.error(ex);
            res = new Response;
        } finally {
            if (res.object?.message?.error) {
                this.ui.messageError(res.object.message.error);
            }
        }
        return res.data(objectName);
    }

    async getElement(objectName: string, $guid: string, schema: any) {
        console.log(schema);
        let res = new Response;
        try {
            const json = (await fetch(`${endpoint}/api/select/${objectName}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    returnQuery: true,
                    schema: InertiaModel(objectName).$f({$guid: [{op: 'equals', val: $guid}]}, schema)
                })
            }));

            res = new Response(await json.json());
        } catch (ex) {
            console.error(ex);
            res = new Response;
        } finally {

        }
        return res.data(objectName);
    }

    async getElements(objectName: string, schema: any, filter: any = null, pagination: any = null) {
        console.log(schema, filter)
        let res = new Response;
        try {
            const json = (await fetch(`${endpoint}/api/select/${objectName}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    returnQuery: true,
                    schema: filter ? InertiaModel(objectName).$f(filter, schema) : schema,
                    pagination: pagination?.$
                })
            }));

            res = new Response(await json.json());
        } catch (ex) {
            console.error(ex);
            res = new Response;
        } finally {

        }
        return res.dataArray(objectName);
    }
}
