import { Meteor } from 'meteor/meteor';
import { Channels } from '../../../imports/collections/channels';
import { Channel } from '../../../imports/models/channels';

Meteor.methods({
  addChannel(channel: Channel): boolean {
    const isExist = Channels.findOne({ id: channel['id'] });
    if (!isExist) {
      Channels.insert(channel);
      return true;
    }
    return false;
  },
  removeChannel(_id: string) {
    Channels.remove({
      _id
    });
  },
  getChannel(_id: string): Channel {
    return Channels.findOne({ _id });
  },
  getAllChannels(): Channel[] {
    return Channels.find({}).fetch();
  }
});
