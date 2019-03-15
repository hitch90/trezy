import { Meteor } from 'meteor/meteor';

import {Personalization} from "../../../imports/collections/personalization";
import {Channels} from "../../../imports/collections/channels";
import {Products} from "../../../imports/collections/products";

Meteor.methods({
  setPersonalization(content: object) {
    const isExist = Personalization.findOne({ place: content['place'] });
    console.log(isExist);
    if (!isExist) {
      Personalization.insert(content);
      return true;
    } else {
      Personalization.update(
          {
            place: content['place']
          },
          {
            $set: {
              ...content
            }
          }
      );
      return true;

    }
  },
  getPersonalization(place: string) {
    return Personalization.findOne({place});
  }
});
