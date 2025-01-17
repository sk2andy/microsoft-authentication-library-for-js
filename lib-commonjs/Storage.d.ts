import { AccessTokenCacheItem } from "./AccessTokenCacheItem";
import { CacheLocation } from "./Configuration";
/**
 * @hidden
 */
export declare class Storage {
    private static instance;
    private localStorageSupported;
    private sessionStorageSupported;
    private cacheLocation;
    constructor(cacheLocation: CacheLocation);
    setItem(key: string, value: string, enableCookieStorage?: boolean): void;
    getItem(key: string, enableCookieStorage?: boolean): string;
    removeItem(key: string): void;
    clear(): void;
    getAllAccessTokens(clientId: string, homeAccountIdentifier: string): Array<AccessTokenCacheItem>;
    removeAcquireTokenEntries(state?: string): void;
    private tokenRenewalInProgress;
    resetCacheItems(): void;
    setItemCookie(cName: string, cValue: string, expires?: number): void;
    getItemCookie(cName: string): string;
    getCookieExpirationTime(cookieLifeDays: number): string;
    clearCookie(): void;
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    static generateAcquireTokenAccountKey(accountId: any, state: string): string;
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    static generateAuthorityKey(state: string): string;
}
