import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { take } from 'rxjs/operators';
import { BudgetService } from '../shared/services/budget.service';
import { Budget } from '../shared/models/budget.model';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

    public budgetData: Budget;

    // for displaying cost vs cost over time.
    public cost = 0;
    public totalCost = 0;

    public overBudget = false;
    public withinBudget = false;

    private _clientData: Client[];
    @Input() set clientData(data) {
        this._clientData = data;
        this.calculateBudget();
    }
    get clientData() {
        return this._clientData;
    }

    constructor(private budgetService: BudgetService) { }

    ngOnInit() {
        this.budgetService.getBudget().pipe(take(1)).subscribe((budget: Budget) => this.budgetData = budget);
    }

    calculateBudget() {
        this.cost = 0;

        this.overBudget = false;
        this.withinBudget = false;

        this.clientData.forEach(c => {
            this.cost += c.payScale;
        });

        this.totalCost = this.cost * this.budgetData.expectedTime;

        this.overBudget = this.totalCost > this.budgetData.maximumAmount;
        this.withinBudget = this.budgetData.expectedAmount <= this.totalCost && this.totalCost < this.budgetData.maximumAmount;
    }

    getStyle() {
        if (this.overBudget) {
            return 'addRed';
        } else if (this.withinBudget) {
            return 'addOrange';
        } else {
            return 'addGreen';
        }
    }
}
