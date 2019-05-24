export declare class StorageService {
    private platformId;
    private configuration;
    constructor(platformId: Object, configuration: any);
    delete(key: string, storage?: any): void;
    get(key: string, storage?: any): any;
    getValue(key: string, storage?: any): any;
    decrypt(value: string): string;
    encrypt(value: string): string;
    set(key: string, value: any, storage?: any): void;
}
