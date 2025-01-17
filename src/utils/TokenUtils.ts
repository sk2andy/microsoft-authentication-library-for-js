// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { CryptoUtils } from "./CryptoUtils";
import { StringUtils } from './StringUtils';

/**
 * @hidden
 */
export class TokenUtils {

  /**
   * decode a JWT
   *
   * @param jwtToken
   */
  static decodeJwt(jwtToken: string): any {
    if (StringUtils.isEmpty(jwtToken)) {
      return null;
    }
    const idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
    const matches = idTokenPartsRegex.exec(jwtToken);
    if (!matches || matches.length < 4) {
      //this._requestContext.logger.warn("The returned id_token is not parseable.");
      return null;
    }
    const crackedToken = {
      header: matches[1],
      JWSPayload: matches[2],
      JWSSig: matches[3]
    };
    return crackedToken;
  }

  /**
   * Extract IdToken by decoding the RAWIdToken
   *
   * @param encodedIdToken
   */
  static extractIdToken(encodedIdToken: string): any {
    // id token will be decoded to get the username
    const decodedToken = this.decodeJwt(encodedIdToken);
    if (!decodedToken) {
      return null;
    }
    try {
      const base64IdToken = decodedToken.JWSPayload;
      const base64Decoded = CryptoUtils.base64Decode(base64IdToken);
      if (!base64Decoded) {
        //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
        return null;
      }
      // ECMA script has JSON built-in support
      return JSON.parse(base64Decoded);
    } catch (err) {
      //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
    }

    return null;
  }
}
