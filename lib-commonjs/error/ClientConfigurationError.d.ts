import { ClientAuthError } from "./ClientAuthError";
import { TelemetryOptions } from "../Configuration";
export declare const ClientConfigurationErrorMessage: {
    configurationNotSet: {
        code: string;
        desc: string;
    };
    invalidCacheLocation: {
        code: string;
        desc: string;
    };
    noStorageSupported: {
        code: string;
        desc: string;
    };
    noRedirectCallbacksSet: {
        code: string;
        desc: string;
    };
    invalidCallbackObject: {
        code: string;
        desc: string;
    };
    scopesRequired: {
        code: string;
        desc: string;
    };
    emptyScopes: {
        code: string;
        desc: string;
    };
    nonArrayScopes: {
        code: string;
        desc: string;
    };
    clientScope: {
        code: string;
        desc: string;
    };
    invalidPrompt: {
        code: string;
        desc: string;
    };
    invalidAuthorityType: {
        code: string;
        desc: string;
    };
    authorityUriInsecure: {
        code: string;
        desc: string;
    };
    authorityUriInvalidPath: {
        code: string;
        desc: string;
    };
    unsupportedAuthorityValidation: {
        code: string;
        desc: string;
    };
    b2cAuthorityUriInvalidPath: {
        code: string;
        desc: string;
    };
    claimsRequestParsingError: {
        code: string;
        desc: string;
    };
    emptyRequestError: {
        code: string;
        desc: string;
    };
    telemetryConfigError: {
        code: string;
        desc: string;
    };
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
export declare class ClientConfigurationError extends ClientAuthError {
    constructor(errorCode: string, errorMessage?: string);
    static createNoSetConfigurationError(): ClientConfigurationError;
    static createInvalidCacheLocationConfigError(givenCacheLocation: string): ClientConfigurationError;
    static createNoStorageSupportedError(): ClientConfigurationError;
    static createRedirectCallbacksNotSetError(): ClientConfigurationError;
    static createInvalidCallbackObjectError(callbackObject: object): ClientConfigurationError;
    static createEmptyScopesArrayError(scopesValue: string): ClientConfigurationError;
    static createScopesNonArrayError(scopesValue: string): ClientConfigurationError;
    static createClientIdSingleScopeError(scopesValue: string): ClientConfigurationError;
    static createScopesRequiredError(scopesValue: any): ClientConfigurationError;
    static createInvalidPromptError(promptValue: any): ClientConfigurationError;
    static createClaimsRequestParsingError(claimsRequestParseError: string): ClientConfigurationError;
    static createEmptyRequestError(): ClientConfigurationError;
    static createTelemetryConfigError(config: TelemetryOptions): ClientConfigurationError;
}
