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
    root.IbmWorkloadSchedulerApi.Jobstream = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Jobstream model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Jobstream
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Jobstream</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Jobstream
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Jobstream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Jobstream} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Jobstream} The populated <code>Jobstream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processId')) {
        obj['processId'] = ApiClient.convertToType(data['processId'], 'Integer');
      }
      if (data.hasOwnProperty('jobstreamId')) {
        obj['jobstreamId'] = ApiClient.convertToType(data['jobstreamId'], 'String');
      }
      if (data.hasOwnProperty('jobstreamName')) {
        obj['jobstreamName'] = ApiClient.convertToType(data['jobstreamName'], 'String');
      }
      if (data.hasOwnProperty('jsInternalIdentifier')) {
        obj['jsInternalIdentifier'] = ApiClient.convertToType(data['jsInternalIdentifier'], 'Integer');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], Object);
      }
    }
    return obj;
  }

  /**
   * The identifier of the Process
   * @member {Integer} processId
   */
  exports.prototype['processId'] = undefined;
  /**
   * The identifier of the jobstream
   * @member {String} jobstreamId
   */
  exports.prototype['jobstreamId'] = undefined;
  /**
   * The name of the jobstream
   * @member {String} jobstreamName
   */
  exports.prototype['jobstreamName'] = undefined;
  /**
   * The internal identifier of the jobstream
   * @member {Integer} jsInternalIdentifier
   */
  exports.prototype['jsInternalIdentifier'] = undefined;
  /**
   * The type of the object
   * @member {Object} objectType
   */
  exports.prototype['objectType'] = undefined;




  return exports;
}));


