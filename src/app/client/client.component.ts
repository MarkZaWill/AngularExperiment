import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

@Component({
    selector: 'app-client-list',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    public clientData: Client[];
    public selectedClients: Client[] = [];
    public columns = ['select', 'firstName', 'lastName', 'experience', 'payScale'];

    @Output() addClientToBudgetEmitter: EventEmitter<Client> = new EventEmitter<Client>();
    @Output() removeClientFromBudgetEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.clientService.getClients().pipe(take(1)).subscribe((clients: Client[]) => this.clientData = clients);
    }

    checkClient(e: Client) {
        if (this.selectedClients.indexOf(e) === -1) {
            this.selectedClients.push(e);
            this.addClientToBudgetEmitter.emit(e);
        } else {
            this.selectedClients.splice(this.selectedClients.indexOf(e), 1);
            this.removeClientFromBudgetEmitter.emit(e.id);
        }
    }
}
