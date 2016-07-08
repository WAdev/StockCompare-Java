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
    root.IbmWorkloadSchedulerApi.MQOperation = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MQOperation model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQOperation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQOperation</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQOperation
   * @class
   * @param type
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;




  };

  /**
   * Constructs a <code>MQOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQOperation} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQOperation} The populated <code>MQOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('requestQueue')) {
        obj['requestQueue'] = ApiClient.convertToType(data['requestQueue'], 'String');
      }
      if (data.hasOwnProperty('responseQueue')) {
        obj['responseQueue'] = ApiClient.convertToType(data['responseQueue'], 'String');
      }
      if (data.hasOwnProperty('waitSecs')) {
        obj['waitSecs'] = ApiClient.convertToType(data['waitSecs'], 'Integer');
      }
      if (data.hasOwnProperty('parameterMap')) {
        obj['parameterMap'] = ApiClient.convertToType(data['parameterMap'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Allowed values: requestResponse, publish, subscribe
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The name of the IBM WebSphere MQ queue where to send the request message. Required if type is equal to requestResponse.
   * @member {String} requestQueue
   */
  exports.prototype['requestQueue'] = undefined;
  /**
   * The name of the IBM WebSphere MQ queue where to receive the response message. Required if type is equal to requestResponse.
   * @member {String} responseQueue
   */
  exports.prototype['responseQueue'] = undefined;
  /**
   * The number of seconds to wait for the request/response operation to complete. Required if type is equal to requestResponse or subscribe
   * @member {Integer} waitSecs
   */
  exports.prototype['waitSecs'] = undefined;
  /**
   * The destination type option for the message to publish or subscribe. Allowed values for keys: MQQueue, MQTopic
   * @member {Object.<String, String>} parameterMap
   */
  exports.prototype['parameterMap'] = undefined;




  return exports;
}));


