import { Meteor } from 'meteor/meteor';
import {Products} from "../../../imports/collections/products";


Meteor.publish('productsList', function() {
  return Products.find({});
});
