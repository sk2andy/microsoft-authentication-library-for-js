"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Constants_1 = require("../utils/Constants");
var ClientAuthError_1 = require("./ClientAuthError");
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;
//# sourceMappingURL=ClientConfigurationError.js.map