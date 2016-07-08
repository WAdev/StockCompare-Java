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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData', 'com.ibm.tws.api/com.ibm.tws.model/TimeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RepeatTimeData'), require('./TimeData'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.MultipleTriggersData = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.RepeatTimeData, root.IbmWorkloadSchedulerApi.TimeData);
  }
}(this, function(ApiClient, RepeatTimeData, TimeData) {
  'use strict';




  /**
   * The MultipleTriggersData model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MultipleTriggersData</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MultipleTriggersData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData} The populated <code>MultipleTriggersData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('everydayatdata')) {
        obj['everydayatdata'] = ApiClient.convertToType(data['everydayatdata'], [TimeData]);
      }
      if (data.hasOwnProperty('repeatweeklydata')) {
        obj['repeatweeklydata'] = ApiClient.convertToType(data['repeatweeklydata'], [RepeatTimeData]);
      }
      if (data.hasOwnProperty('repeatdailydata')) {
        obj['repeatdailydata'] = ApiClient.convertToType(data['repeatdailydata'], [RepeatTimeData]);
      }
      if (data.hasOwnProperty('scheduleondata')) {
        obj['scheduleondata'] = ApiClient.convertToType(data['scheduleondata'], [TimeData]);
      }
    }
    return obj;
  }

  /**
   * The hours and minutes data to create schedules to run the process every day at the specified time
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/TimeData>} everydayatdata
   */
  exports.prototype['everydayatdata'] = undefined;
  /**
   * List of the repeat time data to create triggers that run weekly.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData>} repeatweeklydata
   */
  exports.prototype['repeatweeklydata'] = undefined;
  /**
   * List of the repeat time data to create triggers that run daily. Days property will not be used.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData>} repeatdailydata
   */
  exports.prototype['repeatdailydata'] = undefined;
  /**
   * List of the time data to create triggers that run once, at the time specified. Only hour and minutes values will be used.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/TimeData>} scheduleondata
   */
  exports.prototype['scheduleondata'] = undefined;




  return exports;
}));


