import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthenticableGuard, LoginGuard } from 'src/guards/authenticable.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent, canActivate: [AuthenticableGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
