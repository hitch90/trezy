import { Meteor } from 'meteor/meteor';
import { Category } from '../../../imports/models/categories';
import { Categories } from '../../../imports/collections/categories';

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
  updateCategory(category: Category) {
    Categories.update(
        {
          _id: category._id
        },
        {
          $set: {
            name: category.name,
            description: category.description,
            image: category.image,
            parent: category.parent,
          }
        }
    );
  },
  getCategory(_id: string): Category {
    return Categories.findOne({ _id });
  },
  getAllCategories() {
    return Categories.find({}).fetch();

  },

  getSubcategoriesCount(parent) {
    const subCat = Categories.find({ parent }).fetch();
    return subCat.length;
  },
  getSubcategories(parent) {
    return Categories.find({ parent }).fetch();
  },
  getMainCategories() {
    return Categories.find({ $or: [{ parent: '' }, { parent: null }] }).fetch();
  }
});
