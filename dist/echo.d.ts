import { Channel, PresenceChannel } from './channel';
export default class Echo {
    connector: any;
    options: any;
    constructor(options: any);
    channel(channel: string): Channel;
    connect(): void;
    disconnect(): void;
    join(channel: string): PresenceChannel;
    leave(channel: string): void;
    leaveChannel(channel: string): void;
    leaveAllChannels(): void;
    listen(channel: string, event: string, callback: Function): Channel;
    private(channel: string): Channel;
    encryptedPrivate(channel: string): Channel;
    socketId(): string;
    registerInterceptors(): void;
    registerVueRequestInterceptor(): void;
    registerAxiosRequestInterceptor(): void;
    registerjQueryAjaxSetup(): void;
    registerTurboRequestInterceptor(): void;
}
export { Channel, PresenceChannel };
