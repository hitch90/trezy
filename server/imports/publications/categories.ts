import { Meteor } from 'meteor/meteor';
import {Categories} from "../../../imports/collections/categories";


Meteor.publish('categoriesList', function() {
  return Categories.find({});
});
