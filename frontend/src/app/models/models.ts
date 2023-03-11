import { clone } from "../services";

export var setJsonValue = (json: any, str: string, v: any): any => {
    console.log(str);
    if (!str) {
        return false;
    }
    try {
        if (json instanceof Array && str.split('.')?.length !== 2) {
            json = json[0];
        }
        const arr = str.split('.');
        const k = arr[0];
      
        if (arr.length > 1) {
            if (json[k] instanceof Array) {
                return setJsonValue(json[k][0], arr.slice(1).join('.'), v);
            } else {
                return setJsonValue(json[k], arr.slice(1).join('.'), v);
            }
        } else {
            json[k] = v;
            return true;
        }
    } catch (ex) {
        return false;
    }
} 

export var InertiaModel = (objectName: string): any => {
    switch (objectName) {
        case 'categories': {
            return new Category;
        } break;
        case 'subcategories': {
            return new Subcategory;
        } break;
        case 'products': {
            return new Product;
        } break;
        case 'producttype': {
            return new ProductType;
        } break;
        case 'store': {
            return new Store;
        } break;
        case 'attributes': {
            return new ProductAttributes;
        } break;
        case 'supplier': {
            return new Supplier;
        } break;
        case 'customers': {
            return new Customer;
        } break;
        case 'states': {
            return new OrderStates;
        } break;
        case 'country': {
            return new Country;
        } break;
    };
    return {};
}

export const BaseModel = class {
    public $guid: string = '';

    public $f(filter: any, body: any) {
        const _ = body || this.$;
        for (const k in filter) {
            setJsonValue(_, k, filter[k]);
        }
        return _;
    }

    public get $(): any {
        return null;
    }

    public get $$(): any {
        return null;
    }

    public get $$$(): any {
        return null;
    }

    public get $$$$(): any {
        return null;
    }
};

export interface ICountry {
    name: string;
    code: string;
    countrystate: Array<ICountryState>;
    $guid: string;
}

export class Country extends BaseModel implements ICountry {
    public name: string = '';
    public code: string = '';
    public countrystate: Array<CountryState> = [];

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            code: ''
        };
    }

    public override get $$$$() {
        return {
            name: '',
            code: '',
            countrystate: [{
                name: '',
                code: '',
                city: [{
                    name: '',
                    code: ''
                }]
            }]
        };
    }
}

export interface ICountryState {
    name: string;
    code: string;
    city: Array<City>;
    $guid: string;
}

export class CountryState extends BaseModel implements ICountryState {
    public name: string = '';
    public code: string = '';
    public city: Array<City> = [];

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            code: ''
        };
    }
}

export interface ICity {
    name: string;
    code: string;
    $guid: string;
}

export class City extends BaseModel implements ICity {
    public name: string = '';
    public code: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            code: ''
        };
    }
}

export interface IProductAttributes {
    name: string;
    description: string;
    $guid: string;
}

export class ProductAttributes extends BaseModel implements IProductAttributes {
    public name: string = '';
    public description: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            description: ''
        };
    }
}



export interface IStore {
    name: string;
    $guid: string;
}

export class Store extends BaseModel implements IStore {
    public name: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: ''
        };
    }
}

export interface IProduct_x_IProductType {
    $producttype: any
    producttype: IProductType
}

export class Product_x_ProductType implements IProduct_x_IProductType {
    public $producttype!: any;
    public producttype!: ProductType;
}

export interface IProductType {
    name: string;
    description: string;
    $guid: string;
}

export class ProductType extends BaseModel implements IProductType {
    public name: string = '';
    public description: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            description: ''
        };
    }
}

export interface IStock {
    actualqty: number;
    maxqty: number;
    minqty: number;
}

export class Stock extends BaseModel implements IStock {
    actualqty: number = 0;
    maxqty: number = 0;
    minqty: number = 0;

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            actualqty: '',
            maxqty: '',
            minqty: ''
        };
    }
}

export interface IProduct_x_ISubcategory {
    $subcategories: any
    subcategories: ISubcategory
}

export class Product_x_Subcategory implements IProduct_x_ISubcategory {
    public $subcategories!: any;
    public subcategories!: Subcategory;
}

export interface ISubcategory {
    name: string;
    description: string;
}

export class Subcategory extends BaseModel implements ISubcategory {
    public name: string = '';
    public description: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            name: '',
            description: ''
        };
    }

    public override get $$() {
        return {
            name: '',
            description: '',
            categories: {
                name: '',
                description: ''
            }
        };
    }
}

export interface ICategory {
    name: string;
    description: string;
    subcategories: Array<ISubcategory>;
    $guid: string;
}

export class Category extends BaseModel implements ICategory {
    public name: string = '';
    public description: string = '';
    public subcategories: Array<Subcategory> = [];

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $$(): any {
        return {
            name: '',
            description: '',
            subcategories: [{
                name: '',
                description: ''
            }]
        };
    }

    public override get $(): any {
        return {
            name: '',
            description: ''
        };
    }
};

export interface ISupplier {
    firstname: string;
    lastname: string;
    phone1: string;
    phone2: string;
    address: string;
    birthdate: string;
    dni: string;
    status: string;
    suppliertype: string;
    $guid: string;
}

export class Supplier extends BaseModel implements ISupplier {
    public firstname!: string;
    public lastname!: string;
    public phone1!: string;
    public phone2!: string;
    public address!: string;
    public birthdate!: string;
    public dni!: string;
    public status!: string;
    public suppliertype!: string;

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $$() {
        return {
            firstname: '',
            lastname: '',
            phone1: '',
            phone2: '',
            address: '',
            birthdate: '',
            dni: '',
            status: '',
            suppliertype: '',
            products: [{
                name: '',
                description: '',
                productcode: '',
                sku: '',
                price: '',
                iva: '',
                discount: ''
            }]
        };
    }

    public override get $() {
        return {
            firstname: '',
            lastname: '',
            phone1: '',
            phone2: '',
            address: '',
            birthdate: '',
            dni: '',
            status: '',
            suppliertype: ''
        };
    }
}

export interface IProduct {
    name: string;
    description: string;
    productcode: string;
    sku: string;
    price: number;
    iva: number;
    discount: number;
    supplier: ISupplier;
    categories: ICategory;
    product_x_producttype: Array<IProduct_x_IProductType>,
    product_x_subcategories: Array<IProduct_x_ISubcategory>,
    stock: IStock;
    $guid: string;
}

export class Product extends BaseModel implements IProduct {
    public name: string = '';
    public description: string = '';
    public productcode: string = '';
    public sku: string = '';
    public price: number = 0;
    public iva: number = 0;
    public discount: number = 0;
    public categories: Category = new Category;
    public supplier: Supplier = new Supplier;
    public store: Store = new Store;
    public stock: Stock = new Stock;
    public product_x_producttype: Array<Product_x_ProductType> = [];
    public product_x_subcategories: Array<Product_x_Subcategory> = [];

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                console.log(property);
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $$$$() {
        return {
            name: '',
            description: '',
            productcode: '',
            sku: '',
            price: '',
            iva: '',
            discount: '',
            store: {
                name: '',
            },
            stock: {
                actualqty: '',
                maxqty: '',
                minqty: ''
            },
            categories: {
                name: '',
                description: '',
                subcategories: [{
                    name: '',
                    description: ''
                }]
            },
            supplier: {
                firstname: '',
                lastname: '',
                phone1: '',
                phone2: '',
                address: '',
                birthdate: '',
                dni: '',
                status: '',
                suppliertype: ''
            },
            product_x_producttype: [{
                producttype: {
                    name: '',
                    description: ''
                }
            }],
            product_x_subcategories: [{
                subcategories: {
                    name: '',
                    description: ''
                }
            }]
        };
    }

    public override get $$$() {
        return {
            name: '',
            description: '',
            productcode: '',
            sku: '',
            price: '',
            iva: '',
            discount: '',
            store: {
                name: '',
            },
            stock: {
                actualqty: '',
                maxqty: '',
                minqty: ''
            },
            categories: {
                name: '',
                description: ''
            },
            supplier: {
                firstname: '',
                lastname: '',
                phone1: '',
                phone2: '',
                address: '',
                birthdate: '',
                dni: '',
                status: '',
                suppliertype: ''
            },
            product_x_producttype: [{
                producttype: {
                    name: '',
                    description: ''
                }
            }],
            product_x_subcategories: [{
                subcategories: {
                    name: '',
                    description: ''
                }
            }]
        };
    }

    public override get $$() {
        return {
            name: '',
            description: '',
            productcode: '',
            sku: '',
            price: '',
            iva: '',
            discount: '',
            store: {
                name: '',
            },
            stock: {
                actualqty: '',
                maxqty: '',
                minqty: ''
            },
            categories: {
                name: '',
                description: ''
            },
            supplier: {
                firstname: '',
                lastname: '',
                phone1: '',
                phone2: '',
                address: '',
                birthdate: '',
                dni: '',
                status: '',
                suppliertype: ''
            }
        };
    }

    public override get $() {
        return {
            name: '',
            description: '',
            productcode: '',
            sku: '',
            price: '',
            iva: '',
            discount: ''
        };
    }
}


export interface ICustomer {
    firstname: string;
    lastname: string;
    phone1: string;
    phone2: string;
    address: string;
    birthdate: string;
    dni: string;
    $guid: string;
}

export class Customer extends BaseModel implements ICustomer {
    public firstname!: string;
    public lastname!: string;
    public phone1!: string;
    public phone2!: string;
    public address!: string;
    public birthdate!: string;
    public dni!: string;

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $$() {
        return {
            firstname: '',
            lastname: '',
            phone1: '',
            phone2: '',
            address: '',
            birthdate: '',
            dni: ''
        };
    }

    public override get $() {
        return {
            firstname: '',
            lastname: '',
            phone1: '',
            phone2: '',
            address: '',
            birthdate: '',
            dni: ''
        };
    }
}

export interface IOrderStates {
    statename: string;
    $guid: string;
}

export class OrderStates extends BaseModel implements IOrderStates {
    public statename: string = '';

    constructor(body: any = null) {
        super();
        if (body) {
            for (const property in body) {
                (this as any)[property] = body[property];
            }
        }
    }

    public override get $() {
        return {
            statename: ''
        };
    }
}