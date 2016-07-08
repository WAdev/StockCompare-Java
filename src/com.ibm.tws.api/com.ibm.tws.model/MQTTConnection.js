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
    root.IbmWorkloadSchedulerApi.MQTTConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MQTTConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQTTConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQTTConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQTTConnection
   * @class
   * @param server
   * @param port
   */
  var exports = function(server, port) {
    var _this = this;

    _this['server'] = server;
    _this['port'] = port;







  };

  /**
   * Constructs a <code>MQTTConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQTTConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQTTConnection} The populated <code>MQTTConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Integer');
      }
      if (data.hasOwnProperty('tlsVersion')) {
        obj['tlsVersion'] = ApiClient.convertToType(data['tlsVersion'], 'String');
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
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The host name of the workstation where MQTT server is installed.
   * @member {String} server
   */
  exports.prototype['server'] = undefined;
  /**
   * The TCP/IP port number of the workstation where MQTT server is listening.
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The version of the cryptographic protocols that you want to use. Allowed values: none, tlsv1, tlsv11, tlsv12
   * @member {String} tlsVersion
   */
  exports.prototype['tlsVersion'] = undefined;
  /**
   * The user to be used for accessing the MQTT server.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password to be used for accessing the MQTT server.
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
   * The unique identifier of the MQTT client that you use to communicate with your MQTT server. The Client Id is used by the server to store data that is related to the client. This field is required if IBM Internet of Things Foundation is your MQTT server.
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * Specifies the amount of time, in seconds, that the job waits for the connection to the MQTT server. Default is 30 seconds.
   * @member {Integer} timeout
   */
  exports.prototype['timeout'] = undefined;




  return exports;
}));


