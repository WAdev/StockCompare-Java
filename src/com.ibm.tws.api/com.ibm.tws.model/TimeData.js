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
    root.IbmWorkloadSchedulerApi.TimeData = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TimeData model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/TimeData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TimeData</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/TimeData
   * @class
   * @param hours
   * @param minutes
   */
  var exports = function(hours, minutes) {
    var _this = this;




    _this['hours'] = hours;
    _this['minutes'] = minutes;
  };

  /**
   * Constructs a <code>TimeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/TimeData} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/TimeData} The populated <code>TimeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Integer');
      }
      if (data.hasOwnProperty('month')) {
        obj['month'] = ApiClient.convertToType(data['month'], 'Integer');
      }
      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient.convertToType(data['day'], 'Integer');
      }
      if (data.hasOwnProperty('hours')) {
        obj['hours'] = ApiClient.convertToType(data['hours'], 'Integer');
      }
      if (data.hasOwnProperty('minutes')) {
        obj['minutes'] = ApiClient.convertToType(data['minutes'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Accepted values are from 1970 on. Required for scheduleOn service
   * @member {Integer} year
   */
  exports.prototype['year'] = undefined;
  /**
   * Accepted values are from 1 to 12. Required for scheduleOn service
   * @member {Integer} month
   */
  exports.prototype['month'] = undefined;
  /**
   * Accepted values are from 1 to 31. Required for scheduleOn service
   * @member {Integer} day
   */
  exports.prototype['day'] = undefined;
  /**
   * Hours in 24 hours format.
   * @member {Integer} hours
   */
  exports.prototype['hours'] = undefined;
  /**
   * mm format
   * @member {Integer} minutes
   */
  exports.prototype['minutes'] = undefined;




  return exports;
}));


