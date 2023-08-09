import { PresenceChannel } from './presence-channel';
import { SocketIoPrivateChannel } from './socketio-private-channel';
export declare class SocketIoPresenceChannel extends SocketIoPrivateChannel implements PresenceChannel {
    here(callback: Function): SocketIoPresenceChannel;
    joining(callback: Function): SocketIoPresenceChannel;
    whisper(eventName: string, data: any): SocketIoPresenceChannel;
    leaving(callback: Function): SocketIoPresenceChannel;
}
