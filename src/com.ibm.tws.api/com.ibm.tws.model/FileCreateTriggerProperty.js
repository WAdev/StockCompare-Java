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
    root.IbmWorkloadSchedulerApi.FileCreateTriggerProperty = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileCreateTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileCreateTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty
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
   * Constructs a <code>FileCreateTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty} The populated <code>FileCreateTriggerProperty</code> instance.
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




  return exports;
}));


