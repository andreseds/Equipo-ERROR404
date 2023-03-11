export interface IResponse {
    code: number,
    object: any,
    status: boolean
}

export class Response implements IResponse {
    code: number = 0;
    object: any = null;
    status: boolean = false;

    constructor(_obj: any = {}) {
        if (_obj instanceof Array) {
            if (_obj.length) {
                _obj = _obj[0];
            } else {
                _obj = {};
            }
        }
        for (const k in _obj) {
            (this as any)[k] = _obj[k];
        }
    }

    data(objectName: string) {
        const _ = this.object?.data || {};
        console.log(_);
        return _[objectName] || null;
    }

    dataArray(objectName: string) {
        const data = [];
        let _ = this.object?.data || [];
        if (_ && !(_ instanceof Array)) {
            _ = [_];
        }
        for (const item of _) {
            data.push(item[objectName]);
        }
        return {data, pagination: this.object?.pagination};
    }
}
