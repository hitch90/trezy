import { Meteor } from 'meteor/meteor';
import { Product } from '../../../imports/models/product';
import { Products } from '../../../imports/collections/products';

Meteor.methods({
  addProduct(product: Product): boolean {
    const isExist = Products.findOne({ name: product['name'] });
    if (!isExist) {
      Products.insert(product);
      return true;
    }
    return false;
  },
  removeProduct(_id: string) {
    Products.remove({
      _id
    });
  },
  getProduct(_id: string): Product {
    return Products.findOne({ _id });
  },
  getAllProducts() {}
});
