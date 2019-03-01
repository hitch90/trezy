import { Meteor } from 'meteor/meteor';
import { Producers } from '../../../imports/collections/producers';

Meteor.publish('producersList', function() {
  return Producers.find({});
});
