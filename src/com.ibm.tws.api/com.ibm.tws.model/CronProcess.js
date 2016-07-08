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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Process'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.CronProcess = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Process);
  }
}(this, function(ApiClient, Process) {
  'use strict';




  /**
   * The CronProcess model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CronProcess
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CronProcess</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CronProcess
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CronProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CronProcess} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CronProcess} The populated <code>CronProcess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cronRule')) {
        obj['cronRule'] = ApiClient.convertToType(data['cronRule'], 'String');
      }
      if (data.hasOwnProperty('process')) {
        obj['process'] = Process.constructFromObject(data['process']);
      }
    }
    return obj;
  }

  /**
   * The cron expression with only the five time parameters that represents a set of times, without the command to execute (eg 10 22 * * 0-5)
   * @member {String} cronRule
   */
  exports.prototype['cronRule'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/Process} process
   */
  exports.prototype['process'] = undefined;




  return exports;
}));


