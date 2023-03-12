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
    public preguntas1: any[] = ['Do you trust most people?','Do you tend to be a people-pleaser?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?'];
    public preguntas2: any[] = ['Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?'];
    public preguntas3: any[] = ['Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?','Do you trust most people?'];
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
            meta: 5,
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
        const box = [[0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,'Reformer'],
        [0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,'Helper'],
        [0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,'Achiever'],
        [0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,'Individualist'],
        [0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,'Investigator'],
        [0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,'Loyalist'],
        [0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,'Enthusiast'],
        [0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,'Challenger'],
        [1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,'Peacemaker']];

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
