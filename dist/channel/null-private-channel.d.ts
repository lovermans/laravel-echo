import { NullChannel } from './null-channel';
export declare class NullPrivateChannel extends NullChannel {
    whisper(eventName: string, data: any): NullPrivateChannel;
}
