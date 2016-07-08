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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Jobstream', 'com.ibm.tws.api/com.ibm.tws.model/Step', 'com.ibm.tws.api/com.ibm.tws.model/Trigger', 'com.ibm.tws.api/com.ibm.tws.model/Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Jobstream'), require('./Step'), require('./Trigger'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.Process = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Jobstream, root.IbmWorkloadSchedulerApi.Step, root.IbmWorkloadSchedulerApi.Trigger, root.IbmWorkloadSchedulerApi.Variable);
  }
}(this, function(ApiClient, Jobstream, Step, Trigger, Variable) {
  'use strict';




  /**
   * The Process model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Process
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Process</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Process
   * @class
   * @param name
   * @param processlibraryid
   */
  var exports = function(name, processlibraryid) {
    var _this = this;

    _this['name'] = name;

    _this['processlibraryid'] = processlibraryid;




















  };

  /**
   * Constructs a <code>Process</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Process} The populated <code>Process</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('processlibraryid')) {
        obj['processlibraryid'] = ApiClient.convertToType(data['processlibraryid'], 'Integer');
      }
      if (data.hasOwnProperty('processstatus')) {
        obj['processstatus'] = ApiClient.convertToType(data['processstatus'], 'Boolean');
      }
      if (data.hasOwnProperty('validfrom')) {
        obj['validfrom'] = ApiClient.convertToType(data['validfrom'], 'Date');
      }
      if (data.hasOwnProperty('validto')) {
        obj['validto'] = ApiClient.convertToType(data['validto'], 'Date');
      }
      if (data.hasOwnProperty('tagline')) {
        obj['tagline'] = ApiClient.convertToType(data['tagline'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('triggers')) {
        obj['triggers'] = ApiClient.convertToType(data['triggers'], [Trigger]);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [Step]);
      }
      if (data.hasOwnProperty('jobstreams')) {
        obj['jobstreams'] = ApiClient.convertToType(data['jobstreams'], [Jobstream]);
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], [Variable]);
      }
      if (data.hasOwnProperty('lastrunresult')) {
        obj['lastrunresult'] = ApiClient.convertToType(data['lastrunresult'], 'Integer');
      }
      if (data.hasOwnProperty('nextruntime')) {
        obj['nextruntime'] = ApiClient.convertToType(data['nextruntime'], 'Date');
      }
      if (data.hasOwnProperty('creationdate')) {
        obj['creationdate'] = ApiClient.convertToType(data['creationdate'], 'Date');
      }
      if (data.hasOwnProperty('lastmodifiedtimestamp')) {
        obj['lastmodifiedtimestamp'] = ApiClient.convertToType(data['lastmodifiedtimestamp'], 'String');
      }
      if (data.hasOwnProperty('lastrundate')) {
        obj['lastrundate'] = ApiClient.convertToType(data['lastrundate'], 'String');
      }
      if (data.hasOwnProperty('variabletable')) {
        obj['variabletable'] = ApiClient.convertToType(data['variabletable'], 'String');
      }
      if (data.hasOwnProperty('enhancedprocess')) {
        obj['enhancedprocess'] = ApiClient.convertToType(data['enhancedprocess'], 'Boolean');
      }
      if (data.hasOwnProperty('rerunaction')) {
        obj['rerunaction'] = ApiClient.convertToType(data['rerunaction'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The name of the Process. Can be up to 150 chars.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of Process.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Id of the ProcessLibrary which the Process refer to
   * @member {Integer} processlibraryid
   */
  exports.prototype['processlibraryid'] = undefined;
  /**
   * Identify the status of the Process. If the Process is active, is true, false otherwise.
   * @member {Boolean} processstatus
   */
  exports.prototype['processstatus'] = undefined;
  /**
   * The date from which the Process is valid. (ISO 8601 UTC)
   * @member {Date} validfrom
   */
  exports.prototype['validfrom'] = undefined;
  /**
   * The date until the Process is valid. (ISO 8601 UTC)
   * @member {Date} validto
   */
  exports.prototype['validto'] = undefined;
  /**
   * tagLine of the Process.
   * @member {String} tagline
   */
  exports.prototype['tagline'] = undefined;
  /**
   * The owner of the Process
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * List of the trigger active on the Process. In each Trigger one between DailyTriggerProperty, MonthlyTriggerProperty, WeeklyTriggerProperty, OneTimeTriggerProperty, FileCreateTriggerProperty, FileDeleteTriggerProperty, FileModifiedTriggerProperty must exists.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Trigger>} triggers
   */
  exports.prototype['triggers'] = undefined;
  /**
   * The step's list referred to the Process. At least one step is required to enable the Process.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Step>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * List of the jobstreams list referred to the Process. This is an internal information.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Jobstream>} jobstreams
   */
  exports.prototype['jobstreams'] = undefined;
  /**
   * List of the variables list referred to the Process.
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Variable>} variables
   */
  exports.prototype['variables'] = undefined;
  /**
   * The result of the last run
   * @member {Integer} lastrunresult
   */
  exports.prototype['lastrunresult'] = undefined;
  /**
   * The next runTime of the Process
   * @member {Date} nextruntime
   */
  exports.prototype['nextruntime'] = undefined;
  /**
   * The creationDate of the Process
   * @member {Date} creationdate
   */
  exports.prototype['creationdate'] = undefined;
  /**
   * The Timestamp of the last change
   * @member {String} lastmodifiedtimestamp
   */
  exports.prototype['lastmodifiedtimestamp'] = undefined;
  /**
   * The date of the last run of this Process
   * @member {String} lastrundate
   */
  exports.prototype['lastrundate'] = undefined;
  /**
   * The variable table referred to this Process. Internal information.
   * @member {String} variabletable
   */
  exports.prototype['variabletable'] = undefined;
  /**
   * To know if the Process is enhanced or not
   * @member {Boolean} enhancedprocess
   */
  exports.prototype['enhancedprocess'] = undefined;
  /**
   * Rerun action for this Process
   * @member {String} rerunaction
   */
  exports.prototype['rerunaction'] = undefined;
  /**
   * The timezone of the Process
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * The type of the object(Process or synchGroup)
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * The id of the item
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));


