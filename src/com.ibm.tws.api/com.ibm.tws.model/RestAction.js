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
    root.IbmWorkloadSchedulerApi.RestAction = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestAction model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RestAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestAction</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RestAction
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>RestAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RestAction} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RestAction} The populated <code>RestAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('accept')) {
        obj['accept'] = ApiClient.convertToType(data['accept'], 'String');
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('outputFileName')) {
        obj['outputFileName'] = ApiClient.convertToType(data['outputFileName'], 'String');
      }
      if (data.hasOwnProperty('verifyHostname')) {
        obj['verifyHostname'] = ApiClient.convertToType(data['verifyHostname'], 'Boolean');
      }
      if (data.hasOwnProperty('queryParameters')) {
        obj['queryParameters'] = ApiClient.convertToType(data['queryParameters'], Object);
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], Object);
      }
      if (data.hasOwnProperty('jsonObjectResultQuery')) {
        obj['jsonObjectResultQuery'] = ApiClient.convertToType(data['jsonObjectResultQuery'], 'String');
      }
      if (data.hasOwnProperty('numOfRetries')) {
        obj['numOfRetries'] = ApiClient.convertToType(data['numOfRetries'], 'Integer');
      }
      if (data.hasOwnProperty('retryIntervalSeconds')) {
        obj['retryIntervalSeconds'] = ApiClient.convertToType(data['retryIntervalSeconds'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The uri for the call
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * What the call accept as response
   * @member {String} accept
   */
  exports.prototype['accept'] = undefined;
  /**
   * The content-type of the call
   * @member {String} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * The method of the call
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * The output file generated by the call
   * @member {String} outputFileName
   */
  exports.prototype['outputFileName'] = undefined;
  /**
   * Say if the hostname will be verified or not
   * @member {Boolean} verifyHostname
   */
  exports.prototype['verifyHostname'] = undefined;
  /**
   * The parameter to set in the query URL
   * @member {Object} queryParameters
   */
  exports.prototype['queryParameters'] = undefined;
  /**
   * The header of the call
   * @member {Object} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * The result of the call
   * @member {String} jsonObjectResultQuery
   */
  exports.prototype['jsonObjectResultQuery'] = undefined;
  /**
   * The number of retries, the step will try automatically, if the URI is not available, before exit with an error
   * @member {Integer} numOfRetries
   */
  exports.prototype['numOfRetries'] = undefined;
  /**
   * Interval between two retries, in seconds
   * @member {Integer} retryIntervalSeconds
   */
  exports.prototype['retryIntervalSeconds'] = undefined;




  return exports;
}));


