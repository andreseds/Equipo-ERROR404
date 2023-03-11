import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';

import { CategoryComponent } from './components/categories/category/category.component';
import { ProductComponent } from './components/products/product/product.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PaginatorComponent } from './components/ui/paginator/paginator.component';
import { MessageService } from 'primeng/api';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { SupplierComponent } from './components/suppliers/supplier/supplier-component/supplier-component.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { OrderStatesComponent } from './components/order-states/order-states.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ProductTypeComponent } from './components/product-types/product-type/product-type.component';
import { ProductAttributesComponent } from './components/product-attributes/product-attributes.component';
import { ProductAttributeComponent } from './components/product-attributes/product-attribute/product-attribute.component';
import { OrderStateComponent } from './components/order-states/order-state/order-state.component';
import { LocationComponent } from './components/locations/location/location.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoreComponent } from './components/stores/store/store.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        ProductComponent,
        ProductTypeComponent,
        SupplierComponent,
        NavbarComponent,
        CategoriesComponent,
        PaginatorComponent,
        SuppliersComponent,
        ProductsComponent,
        CustomersComponent,
        CustomerComponent,
        ProductTypesComponent,
        OrderStatesComponent,
        OrderStateComponent,
        LocationsComponent,
        ProductAttributesComponent,
        ProductAttributeComponent,
        LocationComponent,
        StoresComponent,
        StoreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        InputTextModule,
        InputTextareaModule,
        TableModule,
        DropdownModule,
        MultiSelectModule,
        MenubarModule,
        ToastModule,
        CheckboxModule,
        DialogModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
