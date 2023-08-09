import { SocketIoChannel } from './socketio-channel';
export declare class SocketIoPrivateChannel extends SocketIoChannel {
    whisper(eventName: string, data: any): SocketIoChannel;
}
