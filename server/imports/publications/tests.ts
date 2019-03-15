import { Meteor } from 'meteor/meteor';

import { Tests } from '../../../imports/collections/tests';

Meteor.publish('testsList', function() {
  return Tests.find({});
});
