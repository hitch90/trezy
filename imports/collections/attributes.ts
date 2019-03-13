import { MongoObservable } from 'meteor-rxjs';

import { Attribute } from '../models/attributes';

export const Attributes = new MongoObservable.Collection<Attribute>(
  'attributes'
);
