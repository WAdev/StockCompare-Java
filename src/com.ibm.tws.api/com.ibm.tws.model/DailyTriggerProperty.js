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
    root.IbmWorkloadSchedulerApi.DailyTriggerProperty = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DailyTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DailyTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty
   * @class
   * @param frequency
   * @param dailySchedule
   */
  var exports = function(frequency, dailySchedule) {
    var _this = this;

    _this['frequency'] = frequency;
    _this['dailySchedule'] = dailySchedule;




  };

  /**
   * Constructs a <code>DailyTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty} The populated <code>DailyTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Integer');
      }
      if (data.hasOwnProperty('dailySchedule')) {
        obj['dailySchedule'] = ApiClient.convertToType(data['dailySchedule'], 'Integer');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('repeatEvery')) {
        obj['repeatEvery'] = ApiClient.convertToType(data['repeatEvery'], 'String');
      }
      if (data.hasOwnProperty('repeatUntil')) {
        obj['repeatUntil'] = ApiClient.convertToType(data['repeatUntil'], 'String');
      }
    }
    return obj;
  }

  /**
   * The frequency value
   * @member {Integer} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * The dailySchedule value. Possible values are: 1 for every days, 2 for working days, 3 for non working days
   * @member {Integer} dailySchedule
   */
  exports.prototype['dailySchedule'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The start date of the Trigger
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The end date of the Trigger
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * Repeat every option. Format is hh:mm
   * @member {String} repeatEvery
   */
  exports.prototype['repeatEvery'] = undefined;
  /**
   * Repeat every option. Format is hh:mm
   * @member {String} repeatUntil
   */
  exports.prototype['repeatUntil'] = undefined;




  return exports;
}));


