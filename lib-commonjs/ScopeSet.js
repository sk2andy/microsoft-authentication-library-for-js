"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
   * Check if there are dup scopes in a given request
   *
   * @param cachedScopes
   * @param scopes
   */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;
//# sourceMappingURL=ScopeSet.js.map