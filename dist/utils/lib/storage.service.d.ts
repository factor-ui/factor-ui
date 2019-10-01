export declare class StorageService {
    private platformId;
    private configuration;
    memoryStorage: any;
    constructor(platformId: Object, configuration: any);
    delete(key: string, storage?: any): void;
    get(key: string, storage?: any): any;
    private getValue;
    private decrypt;
    private encrypt;
    set(key: string, value: any, storage?: any): void;
}
