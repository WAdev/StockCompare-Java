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
    root.IbmWorkloadSchedulerApi.OpenWhiskConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OpenWhiskConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OpenWhiskConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection
   * @class
   * @param hostname
   * @param namespace
   */
  var exports = function(hostname, namespace) {
    var _this = this;

    _this['hostname'] = hostname;


    _this['namespace'] = namespace;


  };

  /**
   * Constructs a <code>OpenWhiskConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection} The populated <code>OpenWhiskConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
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
   * The ip of the server.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The user that order the operation.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password of the user.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The namespace to be used for accessing the OpenWhisk endpoint.
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;
  /**
   * The integer of retry that are allowed.
   * @member {Integer} numberOfRetries
   */
  exports.prototype['numberOfRetries'] = undefined;
  /**
   * Interval between two retries.
   * @member {Integer} retryIntervalSeconds
   */
  exports.prototype['retryIntervalSeconds'] = undefined;




  return exports;
}));


