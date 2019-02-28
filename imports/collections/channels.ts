import { MongoObservable } from 'meteor-rxjs';

import { Channel } from '../models/channels';

export const Channels = new MongoObservable.Collection<Channel>('channels');
