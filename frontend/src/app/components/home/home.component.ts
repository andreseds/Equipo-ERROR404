import { Component, OnInit } from '@angular/core';
import { InertiaService } from '../../services/inertia.service';
import { BehaviorSubject } from 'rxjs';
import { clone } from 'src/app/services';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public ready: boolean = false;
    public displayCreateTask: boolean = false;
    public selectedTask: any = null;
    public tags: any[] = [];
    public tasks: any[] = [];
    public group1: any[] = [];
    public group2: any[] = [];
    public group3: any[] = [];
    public group4: any[] = [];
    public tags$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    public customer: any = null;
    public skip: boolean = false;
    public doingTest: number = 0;
    public preguntas1: any[] = ['Tiendes a confiar en la mayoria de la gente?','Complacer a los demás es importante para ti?','Los logros y el reconocimiento significan mucho para ti?','Vivir el momento ahora es mas importante que planificar lo que haras mañana?','Te describen a menudo como una persona intensa o intimidante?','Evitar una confrontacion es importante para ti?','El exito no es tan importante para ti?','Ser algo único o diferente para los demás es importante para ti?','Tener tu entorno bajo control es importante para ti?'];
    public preguntas2: any[] = ['Evitar cometer errores es importante para ti?','Ayudar a los demás te inspira a trabajar?','Tener éxito y objetivos hoy es importante para ti?','Necesitas expresar lo que te diferencia a los demás?','Comprender y analizar tus emociones es importante para ti?','Eres fuerte e independiente hoy?','Trabajas para demostrar que eres leal y comprometido con los demás?','Te gusta pensar con optimismo y positividad?','DEl poder y el autocontrol es importante para ti?'];
    public preguntas3: any[] = ['Te asocian con paz y calma frecuentemente?','Confías en una sola fuente de información si es verdadera?','Trabajas para que tus actos sean valorados por los demás?','Trabajas para ser productivo?','Hiciste algo creativo y original hoy?','Ser introspectivo y reflexivo es necesario para ti?','Eres autosuficiente ahora?','Trabajas para demostrar afecto a los demás?','Mañana será un buen día?'];
    public eneagrama: any[] = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

    constructor(private inertia: InertiaService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        await this.loadCustomer();

        await this.search();

        this.tags = (await this.inertia.getElements('tags', {
            title: '',
            description: ''
        }))?.map(x => x.tags);
        this.tags$.next(this.tags);

        this.ready = true;
    }

    public async loadCustomer() {
        const result = (await this.inertia.getElements('customers', {
            $creator: [{op: 'equals', val: (<any>jwt_decode(`${this.inertia.token}`)).user.$id}],
            meta: '',
            customers_x_tags: [{
                tags: {
                    title: ''
                }
            }]
        }))?.map(x => x.customers);

        if (result.length) {
            this.customer = result[0];
        } else {
            this.customer = {};
        }

        console.log(this.customer)
    }

    public async search(): Promise<void> {
        this.tasks = (await this.inertia.getElements('tasks', {
            title: '',
            description: '',
            expiration: '',
            meta: '',
            tasks_x_tags: [{
                tags: {
                    title: ''
                }
            }]
        }))?.map(x => x.tasks);

        for (const task of this.tasks) {
            task.$points = (new Date(task.expiration)).getTime() / parseInt(task.meta || '1');
            if (this.customer.meta) {
                console.log(this.customer?.meta);
                if (task.tasks_x_tags?.find((x: any) => x.tags?.$guid?.toLowerCase() === this.customer.meta.toLowerCase())) {
                    task.$points /= 1.1;
                }
            }
            task.expiration = task.expiration ? task.expiration.split('T')[0] : null;
        }

        this.tasks.sort((a, b) => {
            return a.$points > b.$points ? 1 : -1;
        });

        this.group1 = [];
        this.group2 = [];
        this.group3 = [];
        this.group4 = [];

        const chunkSize = 4;
        for (let i = 0; i < this.tasks.length; i += chunkSize) {
            const chunk = this.tasks.slice(i, i + chunkSize);

            if (i === 0) {
                this.group1.push(...chunk);
            } else if (i === chunkSize) {
                this.group2.push(...chunk);
            } else if (i === chunkSize + chunkSize) {
                this.group3.push(...chunk);
            } else {
                this.group4.push(...chunk);
            }
        }
        console.log(this.tasks)
    }

    public tryCreateTask(): void {
        this.displayCreateTask = true;
        this.selectedTask = {
            title: '',
            description: '',
            meta: 0,
            meta1: 0,
            expiration: null,
            tags: []
        }
    }

    public cancelCreateTask(): void {
        this.displayCreateTask = false;
    }

    public async saveTask(): Promise<void> {
        if (!this.selectedTask.tasks_x_tags) {
            this.selectedTask.tasks_x_tags = [];
        } else {
            this.selectedTask.tasks_x_tags = this.selectedTask.tasks_x_tags.filter((x: any) => x.$guid);
        }

        this.selectedTask.meta = `${this.selectedTask.meta || '1'}` 

        console.log(this.selectedTask.tasks_x_tags);

        for (let i = 0; i < this.selectedTask.tasks_x_tags.length; i++) {
            this.selectedTask.tasks_x_tags[i].$remove = true;
        }

        for (const $guid of (this.selectedTask.tags || [])) {
            const tags = this.tags.find(x => x.$guid === $guid);
            if (tags) {
                this.selectedTask.tasks_x_tags.push({
                    tags 
                });
            }
        }

        delete this.selectedTask.tags;

        const result = await this.inertia.saveElement('tasks', this.selectedTask);
        if (result) {
            this.inertia.ui.messageSuccess('Task saved');
            this.displayCreateTask = false;
            this.selectedTask = null;

            this.search();
        } 
    }

    public edit(item: any): void {
        this.displayCreateTask = true;
        console.log(this.displayCreateTask)
        this.selectedTask = clone(item);

        this.selectedTask.tags = [];
        for (const tasksxTags of (this.selectedTask.tasks_x_tags || [])) {
            this.selectedTask.tags.push(tasksxTags.tags?.$guid);
        }
    }

    public async delete(item: any): Promise<void> {
        for (const tasksxTags of (item.tasks_x_tags || [])) {
            tasksxTags.$remove = true;
            await this.inertia.saveElement('tasks_x_tags', tasksxTags);
        }

        item.tasks_x_tags = [];
        item.$remove = true;
        const result = await this.inertia.saveElement('tasks', item);
        if (result) {
            this.inertia.ui.messageSuccess('Task deleted');
            this.displayCreateTask = false;

            this.search();
        } 
    }

    public async logout(): Promise<void> {
        await this.inertia.logout();
        this.router.navigate(['login']);
    }

    public isEmptyOption(a: number, b: number): boolean {
        return this.eneagrama.slice(a, b).filter(x => x === null).length ? true : false;
    }

    async saveTest() {
        const box = [[0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,'Reformador'],
        [0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,'Ayudante'],
        [0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,'Triunfador'],
        [0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,'Individualista'],
        [0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,'Investigador'],
        [0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,'Leal'],
        [0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,'Entusiasta'],
        [0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,'Desafiante'],
        [1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,'Pacificador']];

        for (let m = 0; m < box.length; m++) {
            for (let n = 0; n < this.eneagrama.length; n++) {
                if (box[m][n] === this.eneagrama[n]) {
                    box[m][n] = 2;
                }        
            }
        }

        for (let m = 0; m < box.length; m++) {
            box[m] = box[m].filter(x => x === 2 || typeof x === 'string');
        }

        box.sort((a, b) => b.length - a.length);
        console.log(box)
        const personality = box[0][box[0].length - 1];
        this.customer.meta = personality;
        this.customer.customers_x_tags = [{
            tags: this.tags.find(x => x.$guid === personality)
        }]

        console.log(this.customer);

        await this.inertia.saveElement('customers', this.customer)
        await this.loadCustomer();
        this.skip = true;
    }
}
