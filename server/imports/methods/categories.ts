import { Meteor } from 'meteor/meteor';
import {Category} from "../../../imports/models/categories";
import {Categories} from "../../../imports/collections/categories";

Meteor.methods({
  addCategory(category: Category): boolean {
    const isExist = Categories.findOne({ name: category['name'] });
    if (!isExist) {
      Categories.insert(category);
      return true;
    }
    return false;
  },
  removeCategory(_id: string) {
    Categories.remove({
      _id
    });
  },
  getCategory(_id: string):Category {
    return Categories.findOne({ _id });
  },
  getAllCategories() {}
});
