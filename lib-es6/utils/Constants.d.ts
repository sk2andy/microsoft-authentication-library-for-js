import { CacheLocation } from "../Configuration";
/**
 * @hidden
 * Constants
 */
export declare class Constants {
    static readonly errorDescription: string;
    static readonly error: string;
    static readonly scope: string;
    static readonly clientInfo: string;
    static readonly clientId: string;
    static readonly idToken: string;
    static readonly adalIdToken: string;
    static readonly accessToken: string;
    static readonly expiresIn: string;
    static readonly sessionState: string;
    static readonly claims: string;
    static readonly msalClientInfo: string;
    static readonly msalError: string;
    static readonly msalErrorDescription: string;
    static readonly msalSessionState: string;
    static readonly tokenKeys: string;
    static readonly accessTokenKey: string;
    static readonly expirationKey: string;
    static readonly stateLogin: string;
    static readonly stateAcquireToken: string;
    static readonly stateRenew: string;
    static readonly nonceIdToken: string;
    static readonly userName: string;
    static readonly idTokenKey: string;
    static readonly loginRequest: string;
    static readonly loginError: string;
    static readonly renewStatus: string;
    static readonly urlHash: string;
    static readonly angularLoginRequest: string;
    static readonly msal: string;
    static readonly no_account: string;
    static readonly consumersUtid: string;
    static readonly upn: string;
    static readonly prompt_select_account: string;
    static readonly prompt_none: string;
    static readonly prompt: string;
    static readonly response_mode_fragment: string;
    static readonly resourceDelimiter: string;
    static readonly tokenRenewStatusCancelled: string;
    static readonly tokenRenewStatusCompleted: string;
    static readonly tokenRenewStatusInProgress: string;
    private static _popUpWidth;
    static popUpWidth: number;
    private static _popUpHeight;
    static popUpHeight: number;
    static readonly login: string;
    static readonly renewToken: string;
    static readonly unknown: string;
    static readonly homeAccountIdentifier: string;
    static readonly common: string;
    static readonly openidScope: string;
    static readonly profileScope: string;
    static readonly cacheLocationLocal: CacheLocation;
    static readonly cacheLocationSession: CacheLocation;
    static readonly interactionTypeRedirect: InteractionType;
    static readonly interactionTypePopup: InteractionType;
}
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
export declare const CacheKeys: {
    AUTHORITY: string;
    ACQUIRE_TOKEN_ACCOUNT: string;
};
export declare const AADTrustedHostList: {
    "login.windows.net": string;
    "login.chinacloudapi.cn": string;
    "login.cloudgovapi.us": string;
    "login.microsoftonline.com": string;
    "login.microsoftonline.de": string;
    "login.microsoftonline.us": string;
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
export declare const SSOTypes: {
    ACCOUNT: string;
    SID: string;
    LOGIN_HINT: string;
    ID_TOKEN: string;
    DOMAIN_HINT: string;
    ORGANIZATIONS: string;
    CONSUMERS: string;
    ACCOUNT_ID: string;
    HOMEACCOUNT_ID: string;
    LOGIN_REQ: string;
    DOMAIN_REQ: string;
};
/**
 * @hidden
 */
export declare const BlacklistedEQParams: string[];
export declare type InteractionType = "redirectInteraction" | "popupInteraction";
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
export declare const PromptState: {
    LOGIN: string;
    SELECT_ACCOUNT: string;
    CONSENT: string;
    NONE: string;
};
/**
 * MSAL JS Library Version
 */
export declare function libraryVersion(): string;
