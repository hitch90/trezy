import { MongoObservable } from 'meteor-rxjs';


export const Personalization = new MongoObservable.Collection<any>('personalization');
