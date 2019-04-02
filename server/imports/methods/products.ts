import { Meteor } from 'meteor/meteor';
import { Product } from '../../../imports/models/product';
import { Products } from '../../../imports/collections/products';

Meteor.methods({
  addProduct(product: Product): boolean {
    const isExist = Products.findOne({ name: product['name'] });
    if (!isExist) {
      Products.insert({ ...product, added: Date.now() });
      return true;
    }
    return false;
  },
  updateProduct(product: Product) {
    Products.update(
      {
        _id: product._id
      },
      {
        $set: {
          _id: product._id,
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          attributes: product.attributes,
          producer: product.producer
        }
      }
    );
  },
  updateProductAttributes(attributes, _id) {
    Products.update(
      {
        _id
      },
      {
        $set: {
          attributes
        }
      }
    );
  },
  removeProduct(_id: string) {
    Products.remove({
      _id
    });
  },
  getProduct(_id: string): Product {
    return Products.findOne({ _id });
  },
  getAllProducts() {},
  getNewestProducts() {
    return Products.find(
      { $query: {}, $orderby: { added: -1 } },
      { limit: 10 }
    ).fetch();
  },
  getByCategoryProducts(category: string): Product[] {
    return Products.find({ category }).fetch();
  },
  getByProducerProducts(producer: string): Product[] {
    return Products.find({ producer }).fetch();
  },
  countByProducerProducts(producer: string): number {
    return Products.find({ producer }).fetch().length;
  }
});
