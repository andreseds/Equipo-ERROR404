import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LocationComponent } from './components/locations/location/location.component';
import { LocationsComponent } from './components/locations/locations.component';
import { OrderStateComponent } from './components/order-states/order-state/order-state.component';
import { OrderStatesComponent } from './components/order-states/order-states.component';
import { ProductAttributeComponent } from './components/product-attributes/product-attribute/product-attribute.component';
import { ProductAttributesComponent } from './components/product-attributes/product-attributes.component';
import { ProductTypeComponent } from './components/product-types/product-type/product-type.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { SupplierComponent } from './components/suppliers/supplier/supplier-component/supplier-component.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';

const routes: Routes = [
    { path: 'categories', component: CategoriesComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'category/:guid', component: CategoryComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/:guid', component: ProductComponent },
    { path: 'suppliers', component: SuppliersComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'supplier/:guid', component: SupplierComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer/:guid', component: CustomerComponent }, 
    { path: 'product-types', component: ProductTypesComponent },
    { path: 'product-type', component: ProductTypeComponent },
    { path: 'product-type/:guid', component: ProductTypeComponent }, 
    { path: 'product-attributes', component: ProductAttributesComponent },
    { path: 'product-attribute', component: ProductAttributeComponent },
    { path: 'product-attribute/:guid', component: ProductAttributeComponent }, 
    { path: 'product-stores', component: StoresComponent },
    { path: 'product-store', component: StoreComponent },
    { path: 'product-store/:guid', component: StoreComponent }, 
    { path: 'order-states', component: OrderStatesComponent },
    { path: 'order-state', component: OrderStateComponent },
    { path: 'order-state/:guid', component: OrderStateComponent }, 
    { path: 'locations', component: LocationsComponent },
    { path: 'location', component: LocationComponent },
    { path: 'location/:guid', component: LocationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
