import { IUri } from "../IUri";
import { ServerRequestParameters } from "../ServerRequestParameters";
/**
 * @hidden
 */
export declare class UrlUtils {
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    static createNavigateUrl(serverRequestParams: ServerRequestParameters): string;
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    static createNavigationUrlString(serverRequestParams: ServerRequestParameters): Array<string>;
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    private static translateclientIdUsedInScope;
    /**
     * Returns current window URL as redirect uri
     */
    static getDefaultRedirectUri(): string;
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    static replaceTenantPath(url: string, tenantId: string): string;
    static constructAuthorityUriFromObject(urlObject: IUri, pathArray: string[]): string;
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    static GetUrlComponents(url: string): IUri;
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    static CanonicalizeUri(url: string): string;
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    static endsWith(url: string, suffix: string): boolean;
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    static urlRemoveQueryStringParameter(url: string, name: string): string;
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    static getHashFromUrl(urlStringOrFragment: string): string;
}
