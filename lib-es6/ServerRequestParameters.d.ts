import { Authority } from "./Authority";
import { AuthenticationParameters } from "./AuthenticationParameters";
import { StringDict } from "./MsalTypes";
import { Account } from "./Account";
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
export declare class ServerRequestParameters {
    authorityInstance: Authority;
    clientId: string;
    scopes: Array<string>;
    nonce: string;
    state: string;
    xClientVer: string;
    xClientSku: string;
    correlationId: string;
    responseType: string;
    redirectUri: string;
    promptValue: string;
    claimsValue: string;
    queryParameters: string;
    extraQueryParameters: string;
    readonly authority: string;
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    constructor(authority: Authority, clientId: string, scope: Array<string>, responseType: string, redirectUri: string, state: string);
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    populateQueryParams(account: Account, request: AuthenticationParameters, adalIdTokenObject?: any): void;
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    private validatePromptParameter;
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    private constructUnifiedCacheQueryParameter;
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    private addHintParameters;
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    private addSSOParameter;
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    private sanitizeEQParams;
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    static generateQueryParametersString(queryParameters: StringDict): string;
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    static isSSOParam(request: AuthenticationParameters): string | Account;
}
