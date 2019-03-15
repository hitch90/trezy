import { MongoObservable } from 'meteor-rxjs';

import {Test} from "../models/tests";

export const Tests = new MongoObservable.Collection<Test>('tests');
