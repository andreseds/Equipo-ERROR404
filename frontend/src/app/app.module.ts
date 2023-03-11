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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        WelcomeComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
