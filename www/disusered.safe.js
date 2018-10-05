/**
 * disusered.safe.js
 *
 * @overview Easy to use cryptographic operations for Cordova.
 * @author Carlos Antonio; modified by Manuel Feller
 * @license MIT
*/

var exec = require('cordova/exec');

var safe = {
  /**
   * encrypt
   *
   * @param {String} path File URI
   * @param {String} password Password for encryption
   * @param {Function} success Success callback
   * @param {Function} error Failure callback
   * @returns {void}
   */
  encrypt: function(path, password, success, error) {
    if (!path || arguments.length === 0) return;
    exec(success, error, 'Safe', 'encrypt', [path, password]);
  },

  /**
   * decrypt
   *
   * @param {String} path File URI
   * @param {String} password Password for decryption
   * @param {Function} success Success callback
   * @param {Function} error Failure callback
   * @returns {void}
   */
  decrypt: function(path, password, success, error) {
    if (!path || arguments.length === 0) return;
    exec(success, error, 'Safe', 'decrypt', [path, password]);
  }

};

exports.safe = safe;
