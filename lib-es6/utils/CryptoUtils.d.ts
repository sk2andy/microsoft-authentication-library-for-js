/**
 * @hidden
 */
export declare class CryptoUtils {
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    static createNewGuid(): string;
    /**
     * Decimal to Hex
     *
     * @param num
     */
    static decimalToHex(num: number): string;
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    static base64Encode(input: string): string;
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    static base64Decode(input: string): string;
    /**
     * deserialize a string
     *
     * @param query
     */
    static deserialize(query: string): any;
}
