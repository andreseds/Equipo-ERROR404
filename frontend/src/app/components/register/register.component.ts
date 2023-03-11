import { Component, OnInit } from '@angular/core';
import { InertiaService } from '../../services/inertia.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public username: string = '';
    public password: string = '';
    public confirmPassword: string = '';

    constructor(private inertia: InertiaService, private router: Router) { }

    async ngOnInit(): Promise<void> {

    }

    async register(): Promise<void> {
        const result = await this.inertia.register({
            username: this.username,
            password: this.password,
            confirmPassword: this.confirmPassword
        });

        if (result) {
            this.inertia.ui.messageSuccess('You have successfully registered, please login.')
            this.router.navigate(['login'])
        }
        console.log(result);
    }
}
