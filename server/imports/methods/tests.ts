import { Meteor } from 'meteor/meteor';

import { Tests } from '../../../imports/collections/tests';
import { Test } from '../../../imports/models/tests';

Meteor.methods({
  addTest(test: Test): boolean {
    const isExist = Tests.findOne({ link: test['link'] });
    if (!isExist) {
      Tests.insert({ ...test, added: Date.now() });
      return true;
    }
    return false;
  },
  getTestsForProduct(product: string, type: string) {
    return Tests.find({ product, type }).fetch();
  },
  removeTest(_id: string) {
    Tests.remove({
      _id
    });
  },
  getNewestTests() {
    return Tests.find({ $query: {}, $orderby: { added : -1 } }, {limit: 6} ).fetch();

  }
});
