import { Meteor } from 'meteor/meteor';
import {Producer} from "../../../imports/models/producers";
import {Producers} from "../../../imports/collections/producers";

Meteor.methods({
  addProducer(producer: Producer): boolean {
    const isExist = Producers.findOne({ name: producer['name'] });
    if (!isExist) {
      Producers.insert(producer);
      return true;
    }
    return false;
  },
  removeProducer(_id: string) {
    Producers.remove({
      _id
    });
  },
  getProducer(_id: string):Producer {
    return Producers.findOne({ _id });
  },
  getAllProducers() {
    return Producers.find({}).fetch();
  }
});
