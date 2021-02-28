import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client, ClientExperience, ClientGroup } from '../models/client.model';

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    // Currently there is no implementation for a backend so this service mocks the API calls.
    getClients(): Observable<Client[]> {
        return this.getMockClientData();
    }

    private getMockClientData(): Observable<Client[]> {
        return of([{
            id: 1,
            firstName: 'John',
            lastName: 'Johnson',
            username: 'Johnny11',
            dateCreated: new Date('11/17/98'),
            dateModified: new Date('09/14/17'),
            experience: ClientExperience.Senior,
            payScale: 37.00
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Johnson',
            username: 'Jane11',
            dateCreated: new Date('5/5/96'),
            dateModified: new Date('6/12/20'),
            experience: ClientExperience.Chief,
            payScale: 54.00
        },
        {
            id: 3,
            firstName: 'Peter',
            lastName: 'Parker',
            username: 'DefNotSpiderMan',
            dateCreated: new Date('7-6-18'),
            dateModified: new Date('5-17-19'),
            experience: ClientExperience.Novice,
            payScale: 22.00
        },
        {
            id: 4,
            firstName: 'Dinara',
            lastName: 'Catarine',
            username: 'DCatrine',
            dateCreated: new Date('4-3-19'),
            dateModified: new Date('4-3-19'),
            experience: ClientExperience.Associate,
            payScale: 37.00
        },
        {
            id: 5,
            firstName: 'Savannah',
            lastName: 'Kawacatoose',
            username: 'SKawacatoose',
            dateCreated: new Date('6-27-20'),
            dateModified: new Date('2-27-21'),
            experience: ClientExperience.Novice,
            payScale: 37.00
        },
        {
            id: 6,
            firstName: 'Asdis',
            lastName: 'Gildo',
            username: 'AGildo',
            dateCreated: new Date('12-14-20'),
            dateModified: new Date('12-14-20'),
            experience: ClientExperience.Intern,
            payScale: 22.00
        }]);
    }
}
