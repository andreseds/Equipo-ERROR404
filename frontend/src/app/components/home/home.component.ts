import { Component, OnInit } from '@angular/core';
import { InertiaService } from '../../services/inertia.service';
import { BehaviorSubject } from 'rxjs';
import { clone } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public displayCreateTask: boolean = false;
    public selectedTask: any = null;
    public tags: any[] = [];
    public tasks: any[] = [];
    public group1: any[] = [];
    public group2: any[] = [];
    public group3: any[] = [];
    public group4: any[] = [];
    public tags$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(private inertia: InertiaService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        this.search();

        this.tags = (await this.inertia.getElements('tags', {
            title: '',
            description: ''
        }))?.map(x => x.tags);
        this.tags$.next(this.tags);
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
}
