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
    if (!root.IbmWorkloadAutomationApi) {
      root.IbmWorkloadAutomationApi = {};
    }
    root.IbmWorkloadAutomationApi.SizeTriggerProperty = factory(root.IbmWorkloadAutomationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SizeTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SizeTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SizeTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty} The populated <code>SizeTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('sizefrom')) {
        obj['sizefrom'] = ApiClient.convertToType(data['sizefrom'], 'String');
      }
      if (data.hasOwnProperty('sizeto')) {
        obj['sizeto'] = ApiClient.convertToType(data['sizeto'], 'String');
      }
      if (data.hasOwnProperty('lt')) {
        obj['lt'] = ApiClient.convertToType(data['lt'], 'String');
      }
      if (data.hasOwnProperty('gt')) {
        obj['gt'] = ApiClient.convertToType(data['gt'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of the Trigger
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * @member {String} sizefrom
   */
  exports.prototype['sizefrom'] = undefined;
  /**
   * @member {String} sizeto
   */
  exports.prototype['sizeto'] = undefined;
  /**
   * @member {String} lt
   */
  exports.prototype['lt'] = undefined;
  /**
   * @member {String} gt
   */
  exports.prototype['gt'] = undefined;




  return exports;
}));


