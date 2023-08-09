import { Channel } from './channel';
export interface PresenceChannel extends Channel {
    here(callback: Function): PresenceChannel;
    joining(callback: Function): PresenceChannel;
    whisper(eventName: string, data: any): PresenceChannel;
    leaving(callback: Function): PresenceChannel;
}
