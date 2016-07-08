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
    root.IbmWorkloadSchedulerApi.RestInput = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestInput model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RestInput
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestInput</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RestInput
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RestInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RestInput} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RestInput} The populated <code>RestInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('input')) {
        obj['input'] = ApiClient.convertToType(data['input'], 'String');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The input for the call, if isFile is true, is considered as a file name, that must be present on the agent filesystem
   * @member {String} input
   */
  exports.prototype['input'] = undefined;
  /**
   * If true use \"input\" as input as file name, and uses file content as input for the rest call. Otherwise uses input directly as input
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;




  return exports;
}));


