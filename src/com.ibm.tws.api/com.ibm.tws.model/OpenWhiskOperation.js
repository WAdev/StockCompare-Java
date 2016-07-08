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
    root.IbmWorkloadSchedulerApi.OpenWhiskOperation = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OpenWhiskOperation model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OpenWhiskOperation</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation
   * @class
   * @param payload
   */
  var exports = function(payload) {
    var _this = this;



    _this['payload'] = payload;
  };

  /**
   * Constructs a <code>OpenWhiskOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation} The populated <code>OpenWhiskOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionName')) {
        obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
      }
      if (data.hasOwnProperty('triggerName')) {
        obj['triggerName'] = ApiClient.convertToType(data['triggerName'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
    }
    return obj;
  }

  /**
   * The action's name. Required and mutual exclusive with triggerName.
   * @member {String} actionName
   */
  exports.prototype['actionName'] = undefined;
  /**
   * The name of the trigger. Required and mutual exclusive with actionName.
   * @member {String} triggerName
   */
  exports.prototype['triggerName'] = undefined;
  /**
   * The payload of the call.
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;




  return exports;
}));


