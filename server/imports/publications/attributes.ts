import { Meteor } from 'meteor/meteor';
import { Attributes } from '../../../imports/collections/attributes';

Meteor.publish('attributesList', function() {
  return Attributes.find({});
});
