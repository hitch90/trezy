import { Meteor } from 'meteor/meteor';
import { Attribute } from '../../../imports/models/attributes';
import { Attributes } from '../../../imports/collections/attributes';

Meteor.methods({
  addAttribute(attribute: Attribute): boolean {
    const isExist = Attributes.findOne({ name: attribute['name'] });
    if (!isExist) {
      Attributes.insert(attribute);
      return true;
    }
    return false;
  },
  removeAttribute(_id: string) {
    Attributes.remove({
      _id
    });
  },
  getAttribute(_id: string): Attribute {
    return Attributes.findOne({ _id });
  },
  getAllAttributes() {}
});
