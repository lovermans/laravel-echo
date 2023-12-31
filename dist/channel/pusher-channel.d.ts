import { EventFormatter } from '../util';
import { Channel } from './channel';
export declare class PusherChannel extends Channel {
    pusher: any;
    name: any;
    options: any;
    eventFormatter: EventFormatter;
    subscription: any;
    constructor(pusher: any, name: any, options: any);
    subscribe(): any;
    unsubscribe(): void;
    listen(event: string, callback: Function): PusherChannel;
    listenToAll(callback: Function): PusherChannel;
    stopListening(event: string, callback?: Function): PusherChannel;
    stopListeningToAll(callback?: Function): PusherChannel;
    subscribed(callback: Function): PusherChannel;
    error(callback: Function): PusherChannel;
    on(event: string, callback: Function): PusherChannel;
}
