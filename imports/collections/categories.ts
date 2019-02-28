import { MongoObservable } from 'meteor-rxjs';

import { Category } from '../models/categories';

export const Categories = new MongoObservable.Collection<Category>(
  'categories'
);
