/******************************************************************
	Licensed Materials - Property of IBM

	5698-WSE, 5725-U47, 5725-P65
	(C) Copyright IBM Corp. 2014-2015 All Rights Reserved.
	US Government Users Restricted Rights - Use, duplication,
	or disclosure restricted by GSA ADP Schedule Contract with
	IBM Corp.

*******************************************************************/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ibm.tws.api/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.JSR352JavaBatchConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JSR352JavaBatchConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JSR352JavaBatchConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection
   * @class
   * @param hostname
   * @param port
   * @param protocol
   */
  var exports = function(hostname, port, protocol) {
    var _this = this;

    _this['hostname'] = hostname;
    _this['port'] = port;
    _this['protocol'] = protocol;







  };

  /**
   * Constructs a <code>JSR352JavaBatchConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection} The populated <code>JSR352JavaBatchConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Integer');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('keyStoreFilePath')) {
        obj['keyStoreFilePath'] = ApiClient.convertToType(data['keyStoreFilePath'], 'String');
      }
      if (data.hasOwnProperty('keyStorePassword')) {
        obj['keyStorePassword'] = ApiClient.convertToType(data['keyStorePassword'], 'String');
      }
      if (data.hasOwnProperty('verifyHostname')) {
        obj['verifyHostname'] = ApiClient.convertToType(data['verifyHostname'], 'Boolean');
      }
      if (data.hasOwnProperty('integerOfRetries')) {
        obj['integerOfRetries'] = ApiClient.convertToType(data['integerOfRetries'], 'Integer');
      }
      if (data.hasOwnProperty('retryIntervalSeconds')) {
        obj['retryIntervalSeconds'] = ApiClient.convertToType(data['retryIntervalSeconds'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The host name of the DB
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The port to connect on
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The protocol to use. Allowed values: https, http
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * The user that order the operation
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The password that order the operation
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The fully qualified path of the keystore file containing the private key that is used to make the connection
   * @member {String} keyStoreFilePath
   */
  exports.prototype['keyStoreFilePath'] = undefined;
  /**
   * The password that protects the private key and is required to make the connection. This attribute is required only if you specify a keystore file path
   * @member {String} keyStorePassword
   */
  exports.prototype['keyStorePassword'] = undefined;
  /**
   * Say if the hostname will be verified or not
   * @member {Boolean} verifyHostname
   */
  exports.prototype['verifyHostname'] = undefined;
  /**
   * The integer of retry that are allowed
   * @member {Integer} integerOfRetries
   */
  exports.prototype['integerOfRetries'] = undefined;
  /**
   * Interval between two retries
   * @member {Integer} retryIntervalSeconds
   */
  exports.prototype['retryIntervalSeconds'] = undefined;




  return exports;
}));


