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
    if (!root.IbmWorkloadAutomationApi) {
      root.IbmWorkloadAutomationApi = {};
    }
    root.IbmWorkloadAutomationApi.ActionHistoryIstance = factory(root.IbmWorkloadAutomationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActionHistoryIstance model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/ActionHistoryIstance
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ActionHistoryIstance</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/ActionHistoryIstance
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ActionHistoryIstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/ActionHistoryIstance} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/ActionHistoryIstance} The populated <code>ActionHistoryIstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('startdate')) {
        obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
      }
      if (data.hasOwnProperty('elapsedtime')) {
        obj['elapsedtime'] = ApiClient.convertToType(data['elapsedtime'], 'Integer');
      }
      if (data.hasOwnProperty('originalaction')) {
        obj['originalaction'] = ApiClient.convertToType(data['originalaction'], Object);
      }
      if (data.hasOwnProperty('istancetype')) {
        obj['istancetype'] = ApiClient.convertToType(data['istancetype'], 'Integer');
      }
      if (data.hasOwnProperty('jobinteger')) {
        obj['jobinteger'] = ApiClient.convertToType(data['jobinteger'], 'Integer');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('returncode')) {
        obj['returncode'] = ApiClient.convertToType(data['returncode'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
    }
    return obj;
  }

  /**
   * Represent the status of the istance
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The start date of the action
   * @member {String} startdate
   */
  exports.prototype['startdate'] = undefined;
  /**
   * The elapsed time from the start
   * @member {Integer} elapsedtime
   */
  exports.prototype['elapsedtime'] = undefined;
  /**
   * The original action
   * @member {Object} originalaction
   */
  exports.prototype['originalaction'] = undefined;
  /**
   * Default istance type
   * @member {Integer} istancetype
   */
  exports.prototype['istancetype'] = undefined;
  /**
   * The integer of the job
   * @member {Integer} jobinteger
   */
  exports.prototype['jobinteger'] = undefined;
  /**
   * The action's target
   * @member {String} target
   */
  exports.prototype['target'] = undefined;
  /**
   * The action's id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The action's return code
   * @member {String} returncode
   */
  exports.prototype['returncode'] = undefined;
  /**
   * The action's type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Details about the action
   * @member {String} details
   */
  exports.prototype['details'] = undefined;




  return exports;
}));


