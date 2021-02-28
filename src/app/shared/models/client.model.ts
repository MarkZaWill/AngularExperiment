
export enum ClientExperience {
    Unknown = 'Unknown',
    Intern = 'Intern',
    Associate = 'Associate',
    Novice = 'Novice',
    Senior = 'Senior',
    Principle = 'Principle',
    Chief = 'Chief'
}

export class Client {
    public id: number;
    public username: string;
    public firstName: string;
    public lastName: string;
    public dateCreated: Date;
    public dateModified: Date;
    public experience: ClientExperience;
    public payScale: number;

    constructor() {
        return {
            id: 0,
            username: '',
            firstName: '',
            lastName: '',
            dateCreated: new Date(),
            dateModified: new Date(),
            experience: ClientExperience.Unknown,
            payScale: 0
        }
    }
}

export class ClientGroup {
    public name: string;
    public clientList: Client[];
    public dateCreated: Date;
}

