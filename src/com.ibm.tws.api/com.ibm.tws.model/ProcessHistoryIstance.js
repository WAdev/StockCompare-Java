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
    if (!root.IbmWorkloadAutomationApi) {
      root.IbmWorkloadAutomationApi = {};
    }
    root.IbmWorkloadAutomationApi.ProcessHistoryIstance = factory(root.IbmWorkloadAutomationApi.ApiClient, root.IbmWorkloadAutomationApi.Process);
  }
}(this, function(ApiClient, Process) {
  'use strict';




  /**
   * The ProcessHistoryIstance model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryIstance
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProcessHistoryIstance</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryIstance
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ProcessHistoryIstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryIstance} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryIstance} The populated <code>ProcessHistoryIstance</code> instance.
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
      if (data.hasOwnProperty('scheduleddate')) {
        obj['scheduleddate'] = ApiClient.convertToType(data['scheduleddate'], 'String');
      }
      if (data.hasOwnProperty('completedsteps')) {
        obj['completedsteps'] = ApiClient.convertToType(data['completedsteps'], 'Integer');
      }
      if (data.hasOwnProperty('totalsteps')) {
        obj['totalsteps'] = ApiClient.convertToType(data['totalsteps'], 'Integer');
      }
      if (data.hasOwnProperty('elapsedtime')) {
        obj['elapsedtime'] = ApiClient.convertToType(data['elapsedtime'], 'Integer');
      }
      if (data.hasOwnProperty('internalid')) {
        obj['internalid'] = ApiClient.convertToType(data['internalid'], 'String');
      }
      if (data.hasOwnProperty('istancetype')) {
        obj['istancetype'] = ApiClient.convertToType(data['istancetype'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('encodedid')) {
        obj['encodedid'] = ApiClient.convertToType(data['encodedid'], 'String');
      }
      if (data.hasOwnProperty('originalprocess')) {
        obj['originalprocess'] = Process.constructFromObject(data['originalprocess']);
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
   * The start date of the step
   * @member {String} startdate
   */
  exports.prototype['startdate'] = undefined;
  /**
   * The date when the process was scheduled
   * @member {String} scheduleddate
   */
  exports.prototype['scheduleddate'] = undefined;
  /**
   * integer of the complete Steps
   * @member {Integer} completedsteps
   */
  exports.prototype['completedsteps'] = undefined;
  /**
   * integer of the total Steps
   * @member {Integer} totalsteps
   */
  exports.prototype['totalsteps'] = undefined;
  /**
   * The elapsed time from the start
   * @member {Integer} elapsedtime
   */
  exports.prototype['elapsedtime'] = undefined;
  /**
   * The internal id of the process
   * @member {String} internalid
   */
  exports.prototype['internalid'] = undefined;
  /**
   * Default istance type
   * @member {Integer} istancetype
   */
  exports.prototype['istancetype'] = undefined;
  /**
   * The jobstream id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The jobstream id
   * @member {String} encodedid
   */
  exports.prototype['encodedid'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/Process} originalprocess
   */
  exports.prototype['originalprocess'] = undefined;




  return exports;
}));


