export declare class ScopeSet {
    /**
   * Check if there are dup scopes in a given request
   *
   * @param cachedScopes
   * @param scopes
   */
    static isIntersectingScopes(cachedScopes: Array<string>, scopes: Array<string>): boolean;
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    static containsScope(cachedScopes: Array<string>, scopes: Array<string>): boolean;
    /**
     * toLower
     *
     * @param scopes
     */
    static convertToLowerCase(scopes: Array<string>): Array<string>;
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    static removeElement(scopes: Array<string>, scope: string): Array<string>;
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    static parseScope(scopes: Array<string>): string;
}
