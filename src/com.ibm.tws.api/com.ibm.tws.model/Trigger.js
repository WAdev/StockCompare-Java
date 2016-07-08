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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileDeleteTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/MonthlyTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/OneTimeTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/WeeklyTriggerProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DailyTriggerProperty'), require('./FileCreateTriggerProperty'), require('./FileDeleteTriggerProperty'), require('./FileModifiedTriggerProperty'), require('./MonthlyTriggerProperty'), require('./OneTimeTriggerProperty'), require('./WeeklyTriggerProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.Trigger = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.DailyTriggerProperty, root.IbmWorkloadSchedulerApi.FileCreateTriggerProperty, root.IbmWorkloadSchedulerApi.FileDeleteTriggerProperty, root.IbmWorkloadSchedulerApi.FileModifiedTriggerProperty, root.IbmWorkloadSchedulerApi.MonthlyTriggerProperty, root.IbmWorkloadSchedulerApi.OneTimeTriggerProperty, root.IbmWorkloadSchedulerApi.WeeklyTriggerProperty);
  }
}(this, function(ApiClient, DailyTriggerProperty, FileCreateTriggerProperty, FileDeleteTriggerProperty, FileModifiedTriggerProperty, MonthlyTriggerProperty, OneTimeTriggerProperty, WeeklyTriggerProperty) {
  'use strict';




  /**
   * The Trigger model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Trigger
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Trigger</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Trigger
   * @class
   * @param triggerType
   */
  var exports = function(triggerType) {
    var _this = this;



    _this['triggerType'] = triggerType;







  };

  /**
   * Constructs a <code>Trigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} The populated <code>Trigger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processId')) {
        obj['processId'] = ApiClient.convertToType(data['processId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('triggerType')) {
        obj['triggerType'] = ApiClient.convertToType(data['triggerType'], 'String');
      }
      if (data.hasOwnProperty('dailyProperty')) {
        obj['dailyProperty'] = DailyTriggerProperty.constructFromObject(data['dailyProperty']);
      }
      if (data.hasOwnProperty('monthlyProperty')) {
        obj['monthlyProperty'] = MonthlyTriggerProperty.constructFromObject(data['monthlyProperty']);
      }
      if (data.hasOwnProperty('weeklyProperty')) {
        obj['weeklyProperty'] = WeeklyTriggerProperty.constructFromObject(data['weeklyProperty']);
      }
      if (data.hasOwnProperty('oneTimeProperty')) {
        obj['oneTimeProperty'] = OneTimeTriggerProperty.constructFromObject(data['oneTimeProperty']);
      }
      if (data.hasOwnProperty('fileCreatedProperty')) {
        obj['fileCreatedProperty'] = FileCreateTriggerProperty.constructFromObject(data['fileCreatedProperty']);
      }
      if (data.hasOwnProperty('fileDeletedProperty')) {
        obj['fileDeletedProperty'] = FileDeleteTriggerProperty.constructFromObject(data['fileDeletedProperty']);
      }
      if (data.hasOwnProperty('fileModifiedProperty')) {
        obj['fileModifiedProperty'] = FileModifiedTriggerProperty.constructFromObject(data['fileModifiedProperty']);
      }
    }
    return obj;
  }

  /**
   * The identifier of the task on which the trigger works
   * @member {Integer} processId
   */
  exports.prototype['processId'] = undefined;
  /**
   * The name of the trigger
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The type of the trigger. Possible values are DailyTrigger, MonthlyTrigger, OnceTrigger, WeeklyTrigger, fileCreated, fileDeleted, fileModified.
   * @member {String} triggerType
   */
  exports.prototype['triggerType'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty} dailyProperty
   */
  exports.prototype['dailyProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MonthlyTriggerProperty} monthlyProperty
   */
  exports.prototype['monthlyProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/WeeklyTriggerProperty} weeklyProperty
   */
  exports.prototype['weeklyProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OneTimeTriggerProperty} oneTimeProperty
   */
  exports.prototype['oneTimeProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty} fileCreatedProperty
   */
  exports.prototype['fileCreatedProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/FileDeleteTriggerProperty} fileDeletedProperty
   */
  exports.prototype['fileDeletedProperty'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty} fileModifiedProperty
   */
  exports.prototype['fileModifiedProperty'] = undefined;




  return exports;
}));


