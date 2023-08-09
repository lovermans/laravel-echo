import { EventFormatter } from '../util';
import { Channel } from './channel';
export declare class SocketIoChannel extends Channel {
    socket: any;
    name: any;
    options: any;
    eventFormatter: EventFormatter;
    events: any;
    private listeners;
    constructor(socket: any, name: string, options: any);
    subscribe(): void;
    unsubscribe(): void;
    listen(event: string, callback: Function): SocketIoChannel;
    stopListening(event: string, callback?: Function): SocketIoChannel;
    subscribed(callback: Function): SocketIoChannel;
    error(callback: Function): SocketIoChannel;
    on(event: string, callback: Function): SocketIoChannel;
    unbind(): void;
    protected unbindEvent(event: string, callback?: Function): void;
}
