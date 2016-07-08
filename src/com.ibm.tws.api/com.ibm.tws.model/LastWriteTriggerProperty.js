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
    root.IbmWorkloadSchedulerApi.LastWriteTriggerProperty = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LastWriteTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LastWriteTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>LastWriteTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty} The populated <code>LastWriteTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('fromDate')) {
        obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
      }
      if (data.hasOwnProperty('toDate')) {
        obj['toDate'] = ApiClient.convertToType(data['toDate'], 'Date');
      }
      if (data.hasOwnProperty('onBeforeDate')) {
        obj['onBeforeDate'] = ApiClient.convertToType(data['onBeforeDate'], 'Date');
      }
      if (data.hasOwnProperty('onAfterDate')) {
        obj['onAfterDate'] = ApiClient.convertToType(data['onAfterDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The timezone of the Trigger
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The time (interval) at which the specified file was last modified. To be used in combination with todate.
   * @member {Date} fromDate
   */
  exports.prototype['fromDate'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The time (interval) at which the specified file was last modified. To be used in combination with fromdate
   * @member {Date} toDate
   */
  exports.prototype['toDate'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The time (on or before) at which the specified file was last modified
   * @member {Date} onBeforeDate
   */
  exports.prototype['onBeforeDate'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The time (on or after) at which the specified file was last modified
   * @member {Date} onAfterDate
   */
  exports.prototype['onAfterDate'] = undefined;




  return exports;
}));


