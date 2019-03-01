import { MongoObservable } from 'meteor-rxjs';

import {Producer} from "../models/producers";

export const Producers = new MongoObservable.Collection<Producer>(
  'producers'
);
