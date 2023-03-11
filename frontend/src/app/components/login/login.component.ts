import { Component, OnInit } from '@angular/core';
import { InertiaService } from '../../services/inertia.service';
import { LoginDto } from 'src/app/models/inertia.entity';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public username: string = '';
    public password: string = '';

    constructor(private inertia: InertiaService,
                private router: Router) { }

    ngOnInit(): void {
    }

    async login() {
        const result = await this.inertia.login(new LoginDto({
            username: this.username,
            password: this.password
        }));

        if (result) {
            this.router.navigate(['']);
        }
        console.log(result);
    }
}
