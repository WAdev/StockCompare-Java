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
    root.IbmWorkloadAutomationApi.EventTriggerProperty = factory(root.IbmWorkloadAutomationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EventTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/EventTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EventTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/EventTriggerProperty
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EventTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/EventTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/EventTriggerProperty} The populated <code>EventTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventid')) {
        obj['eventid'] = ApiClient.convertToType(data['eventid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of the Event
   * @member {String} eventid
   */
  exports.prototype['eventid'] = undefined;




  return exports;
}));


