import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Budget } from '../models/budget.model';
import { Client, ClientGroup } from '../models/client.model';

@Injectable({
    providedIn: 'root',
})
export class BudgetService {

    // Currently there is no implementation for a backend so this service mocks the API calls.
    getBudget(): Observable<Budget> {
        return this.getMockBudgetData();
    }

    private getMockBudgetData(): Observable<Budget> {
        return of({
            expectedAmount: 450,
            maximumAmount: 500,
            expectedTime: 3.5
        });
    }
}
