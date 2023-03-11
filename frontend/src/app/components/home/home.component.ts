import { Component, OnInit } from '@angular/core';
import { InertiaService } from '../../services/inertia.service';
import { BehaviorSubject } from 'rxjs';
import { clone } from 'src/app/services';

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
    public tags$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(private inertia: InertiaService) { }

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
            tasks_x_tags: [{
                tags: {
                    title: ''
                }
            }]
        }))?.map(x => x.tasks);
    }

    public tryCreateTask(): void {
        this.displayCreateTask = true;
        this.selectedTask = {
            title: '',
            priority: 5,
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
        }

        for (const tasksxTags of this.selectedTask.tasks_x_tags) {
            tasksxTags.$remove = true;
        }

        for (const $guid of this.selectedTask.tags) {
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
        item.$remove = true;
        const result = await this.inertia.saveElement('tasks', item);
        if (result) {
            this.inertia.ui.messageSuccess('Task deleted');
            this.displayCreateTask = false;

            this.search();
        } 
    }
}
