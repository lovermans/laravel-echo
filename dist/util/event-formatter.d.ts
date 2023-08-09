export declare class EventFormatter {
    private namespace;
    constructor(namespace: string | boolean);
    format(event: string): string;
    setNamespace(value: string | boolean): void;
}
