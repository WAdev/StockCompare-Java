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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LastWriteTriggerProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.FileModifiedTriggerProperty = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.LastWriteTriggerProperty);
  }
}(this, function(ApiClient, LastWriteTriggerProperty) {
  'use strict';




  /**
   * The FileModifiedTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileModifiedTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty
   * @class
   * @param filename
   * @param sampleInterval
   * @param agent
   */
  var exports = function(filename, sampleInterval, agent) {
    var _this = this;


    _this['filename'] = filename;
    _this['sampleInterval'] = sampleInterval;
    _this['agent'] = agent;

  };

  /**
   * Constructs a <code>FileModifiedTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty} The populated <code>FileModifiedTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventId')) {
        obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('sampleInterval')) {
        obj['sampleInterval'] = ApiClient.convertToType(data['sampleInterval'], 'Integer');
      }
      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('lastWrite')) {
        obj['lastWrite'] = LastWriteTriggerProperty.constructFromObject(data['lastWrite']);
      }
    }
    return obj;
  }

  /**
   * Id of the Event
   * @member {String} eventId
   */
  exports.prototype['eventId'] = undefined;
  /**
   * The fully qualified path and file name of the monitored file. Only characters included in the ASCII character set are supported.
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The interval (in seconds) with which the specified file is monitored
   * @member {Integer} sampleInterval
   */
  exports.prototype['sampleInterval'] = undefined;
  /**
   * The agent on which the Trigger work
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty} lastWrite
   */
  exports.prototype['lastWrite'] = undefined;




  return exports;
}));


