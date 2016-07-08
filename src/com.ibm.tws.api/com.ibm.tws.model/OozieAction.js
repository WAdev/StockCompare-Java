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
    root.IbmWorkloadSchedulerApi.OozieAction = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OozieAction model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OozieAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OozieAction</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OozieAction
   * @class
   * @param type
   * @param nodeName
   * @param jobTracker
   * @param jobUsername
   * @param libPath
   */
  var exports = function(type, nodeName, jobTracker, jobUsername, libPath) {
    var _this = this;

    _this['type'] = type;
    _this['nodeName'] = nodeName;
    _this['jobTracker'] = jobTracker;
    _this['jobUsername'] = jobUsername;
    _this['libPath'] = libPath;











  };

  /**
   * Constructs a <code>OozieAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OozieAction} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OozieAction} The populated <code>OozieAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('nodeName')) {
        obj['nodeName'] = ApiClient.convertToType(data['nodeName'], 'String');
      }
      if (data.hasOwnProperty('jobTracker')) {
        obj['jobTracker'] = ApiClient.convertToType(data['jobTracker'], 'String');
      }
      if (data.hasOwnProperty('jobUsername')) {
        obj['jobUsername'] = ApiClient.convertToType(data['jobUsername'], 'String');
      }
      if (data.hasOwnProperty('libPath')) {
        obj['libPath'] = ApiClient.convertToType(data['libPath'], 'String');
      }
      if (data.hasOwnProperty('customOozieProperties')) {
        obj['customOozieProperties'] = ApiClient.convertToType(data['customOozieProperties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Integer');
      }
      if (data.hasOwnProperty('pollingPeriod')) {
        obj['pollingPeriod'] = ApiClient.convertToType(data['pollingPeriod'], 'Integer');
      }
      if (data.hasOwnProperty('workflowPath')) {
        obj['workflowPath'] = ApiClient.convertToType(data['workflowPath'], 'String');
      }
      if (data.hasOwnProperty('mapperClass')) {
        obj['mapperClass'] = ApiClient.convertToType(data['mapperClass'], 'String');
      }
      if (data.hasOwnProperty('reducerClass')) {
        obj['reducerClass'] = ApiClient.convertToType(data['reducerClass'], 'String');
      }
      if (data.hasOwnProperty('inputDir')) {
        obj['inputDir'] = ApiClient.convertToType(data['inputDir'], 'String');
      }
      if (data.hasOwnProperty('outputDir')) {
        obj['outputDir'] = ApiClient.convertToType(data['outputDir'], 'String');
      }
      if (data.hasOwnProperty('jobCommand')) {
        obj['jobCommand'] = ApiClient.convertToType(data['jobCommand'], 'String');
      }
      if (data.hasOwnProperty('parametersOozieProperties')) {
        obj['parametersOozieProperties'] = ApiClient.convertToType(data['parametersOozieProperties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('optionOozieProperties')) {
        obj['optionOozieProperties'] = ApiClient.convertToType(data['optionOozieProperties'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The Oozie job types. Allowed values: workflow, mapReduce, pig, hive, sqoop
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The URL of the Hadoop name-node.
   * @member {String} nodeName
   */
  exports.prototype['nodeName'] = undefined;
  /**
   * The URL of the Hadoop job-tracker.
   * @member {String} jobTracker
   */
  exports.prototype['jobTracker'] = undefined;
  /**
   * The name of the user submitting the Hadoop job.
   * @member {String} jobUsername
   */
  exports.prototype['jobUsername'] = undefined;
  /**
   * The path in the Hadoop file system, where the jar files necessary to your Hadoop job reside.
   * @member {String} libPath
   */
  exports.prototype['libPath'] = undefined;
  /**
   * The additional properties, and related values of your job
   * @member {Object.<String, String>} customOozieProperties
   */
  exports.prototype['customOozieProperties'] = undefined;
  /**
   * The monitoring time. It determines for how long the job is monitored. At the end of the timeout interval the job fails. Default value is 7200 seconds
   * @member {Integer} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * The monitoring frequency. It determines how often the job is monitored. Default value is 15 seconds
   * @member {Integer} pollingPeriod
   */
  exports.prototype['pollingPeriod'] = undefined;
  /**
   * The path in the Hadoop file system, where the workflow application resides. Required if type is equal to workflow
   * @member {String} workflowPath
   */
  exports.prototype['workflowPath'] = undefined;
  /**
   * The map-task classname. Required if type is equal to mapReduce
   * @member {String} mapperClass
   */
  exports.prototype['mapperClass'] = undefined;
  /**
   * The reducer-task classname. Required if type is equal to mapReduce
   * @member {String} reducerClass
   */
  exports.prototype['reducerClass'] = undefined;
  /**
   * The map-task input directory. Required if type is equal to mapReduce
   * @member {String} inputDir
   */
  exports.prototype['inputDir'] = undefined;
  /**
   * The reduce-task output directory. Required if type is equal to mapReduce
   * @member {String} outputDir
   */
  exports.prototype['outputDir'] = undefined;
  /**
   * The actual command or script that you want to run with your job. Required if type is equal to pig or hive or sqoop.
   * @member {String} jobCommand
   */
  exports.prototype['jobCommand'] = undefined;
  /**
   * The parameters, and related values, that you are passing to your job. Used if type is equal to pig or hive or sqoop
   * @member {Object.<String, String>} parametersOozieProperties
   */
  exports.prototype['parametersOozieProperties'] = undefined;
  /**
   * The options that you are passing to your job. Used if type is equal to pig or hive or sqoop.
   * @member {Array.<String>} optionOozieProperties
   */
  exports.prototype['optionOozieProperties'] = undefined;




  return exports;
}));


