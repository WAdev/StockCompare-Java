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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LastWriteTriggerProperty'), require('./SizeTriggerProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadAutomationApi) {
      root.IbmWorkloadAutomationApi = {};
    }
    root.IbmWorkloadAutomationApi.FileLogTriggerProperty = factory(root.IbmWorkloadAutomationApi.ApiClient, root.IbmWorkloadAutomationApi.LastWriteTriggerProperty, root.IbmWorkloadAutomationApi.SizeTriggerProperty);
  }
}(this, function(ApiClient, LastWriteTriggerProperty, SizeTriggerProperty) {
  'use strict';




  /**
   * The FileLogTriggerProperty model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/FileLogTriggerProperty
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileLogTriggerProperty</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/FileLogTriggerProperty
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>FileLogTriggerProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/FileLogTriggerProperty} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/FileLogTriggerProperty} The populated <code>FileLogTriggerProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startdate')) {
        obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
      }
      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('sampleinterval')) {
        obj['sampleinterval'] = ApiClient.convertToType(data['sampleinterval'], 'String');
      }
      if (data.hasOwnProperty('matches')) {
        obj['matches'] = ApiClient.convertToType(data['matches'], 'String');
      }
      if (data.hasOwnProperty('doesnotmatches')) {
        obj['doesnotmatches'] = ApiClient.convertToType(data['doesnotmatches'], 'String');
      }
      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = SizeTriggerProperty.constructFromObject(data['size']);
      }
      if (data.hasOwnProperty('lastwrite')) {
        obj['lastwrite'] = LastWriteTriggerProperty.constructFromObject(data['lastwrite']);
      }
    }
    return obj;
  }

  /**
   * The start date of the Trigger
   * @member {String} startdate
   */
  exports.prototype['startdate'] = undefined;
  /**
   * The object type
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * The name of the file
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The sample interval of the Trigger
   * @member {String} sampleinterval
   */
  exports.prototype['sampleinterval'] = undefined;
  /**
   * If the Trigger match
   * @member {String} matches
   */
  exports.prototype['matches'] = undefined;
  /**
   * If the Trigger does not match
   * @member {String} doesnotmatches
   */
  exports.prototype['doesnotmatches'] = undefined;
  /**
   * The agent on which the Trigger work
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/SizeTriggerProperty} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty} lastwrite
   */
  exports.prototype['lastwrite'] = undefined;




  return exports;
}));


