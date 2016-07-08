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
    root.IbmWorkloadSchedulerApi.OozieConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OozieConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OozieConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OozieConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OozieConnection
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
   * Constructs a <code>OozieConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OozieConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OozieConnection} The populated <code>OozieConnection</code> instance.
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
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('keyStoreFilePath')) {
        obj['keyStoreFilePath'] = ApiClient.convertToType(data['keyStoreFilePath'], 'String');
      }
      if (data.hasOwnProperty('keyStoreFilePassword')) {
        obj['keyStoreFilePassword'] = ApiClient.convertToType(data['keyStoreFilePassword'], 'String');
      }
      if (data.hasOwnProperty('verifyHostname')) {
        obj['verifyHostname'] = ApiClient.convertToType(data['verifyHostname'], 'Boolean');
      }
      if (data.hasOwnProperty('numberOfRetries')) {
        obj['numberOfRetries'] = ApiClient.convertToType(data['numberOfRetries'], 'Integer');
      }
      if (data.hasOwnProperty('retryIntervalSeconds')) {
        obj['retryIntervalSeconds'] = ApiClient.convertToType(data['retryIntervalSeconds'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The host name of the Oozie server.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The port number where the Oozie server is listening.
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The protocol for connecting to the Oozie server. Allowed values: http, https.
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * The user to be used for accessing the Oozie server.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password to be used for accessing the Oozie server.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The fully qualified path of the keystore file containing the private key that is used to make the connection.
   * @member {String} keyStoreFilePath
   */
  exports.prototype['keyStoreFilePath'] = undefined;
  /**
   * The password that protects the private key and is required to make the connection. This attribute is required only if you specify a keystore file path.
   * @member {String} keyStoreFilePassword
   */
  exports.prototype['keyStoreFilePassword'] = undefined;
  /**
   * If true the syntax of the Oozie server name, as featured in the keystore file, must match exactly the URL. If they do not match, no authorization is granted to access the server.
   * @member {Boolean} verifyHostname
   */
  exports.prototype['verifyHostname'] = undefined;
  /**
   * The number of times the program retries in case of connection failure. Default value is 0.
   * @member {Integer} numberOfRetries
   */
  exports.prototype['numberOfRetries'] = undefined;
  /**
   * The number of seconds the program waits before retrying in case of connection failure. Default value is 30.
   * @member {Integer} retryIntervalSeconds
   */
  exports.prototype['retryIntervalSeconds'] = undefined;




  return exports;
}));


