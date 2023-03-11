import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    constructor(private messageService: MessageService) { }

    messageSuccess(summary: string, detail: string = '') {
        this.messageService.add({severity: 'success', summary, detail});
    }

    messagesSuccess() {
        this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
        { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
    }

    messageError(summary: string, detail: string = '') {
        this.messageService.add({severity: 'error', summary, detail});
    }

    messageClear() {
        this.messageService.clear();
    }
}
