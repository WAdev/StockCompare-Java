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
    root.IbmWorkloadSchedulerApi.RepeatTimeData = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RepeatTimeData model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RepeatTimeData</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData
   * @class
   * @param from
   */
  var exports = function(from) {
    var _this = this;

    _this['from'] = from;



  };

  /**
   * Constructs a <code>RepeatTimeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData} The populated <code>RepeatTimeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Date');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Date');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Integer');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], ['Integer']);
      }
    }
    return obj;
  }

  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The start date of the Trigger
   * @member {Date} from
   */
  exports.prototype['from'] = undefined;
  /**
   * Time in ISO 8601 UTC with format yyyy-MM-dd'T'HH:mm:ss. It will be used the timezone set into the process or in the user preferences. The start date of the Trigger
   * @member {Date} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Default value is 1
   * @member {Integer} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * List of the days. Possible values are 1 for Monday, 2 for Tuesday and so on until 7 for Sunday. Required if creating a repeatWeekly trigger
   * @member {Array.<Integer>} days
   */
  exports.prototype['days'] = undefined;




  return exports;
}));


