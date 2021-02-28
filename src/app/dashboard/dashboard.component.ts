import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { BudgetComponent } from '../budget/budget.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
    //   styleUrls: ['./app.component.scss']
})
export class DashboardComponent {

    clientList: Client[] = [];

    @ViewChild(BudgetComponent) budgetComponent: BudgetComponent;

    addClientToBudget(e) {
        this.clientList.push(e)
        this.budgetComponent.clientData = this.clientList;
    }

    removeClientFromBudget(e) {
        const index = this.clientList.findIndex(c => c.id === e);
        if (index > -1) {
            this.clientList.splice(index, 1);
            this.budgetComponent.clientData = this.clientList;
        }
    }
}
