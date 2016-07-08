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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/RestAction', 'com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData', 'com.ibm.tws.api/com.ibm.tws.model/RestInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RestAction'), require('./RestAuthenticationData'), require('./RestInput'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.RestfulStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.RestAction, root.IbmWorkloadSchedulerApi.RestAuthenticationData, root.IbmWorkloadSchedulerApi.RestInput);
  }
}(this, function(ApiClient, RestAction, RestAuthenticationData, RestInput) {
  'use strict';




  /**
   * The RestfulStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RestfulStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestfulStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RestfulStep
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RestfulStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RestfulStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RestfulStep} The populated <code>RestfulStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = RestAction.constructFromObject(data['action']);
      }
      if (data.hasOwnProperty('authdata')) {
        obj['authdata'] = RestAuthenticationData.constructFromObject(data['authdata']);
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = RestInput.constructFromObject(data['input']);
      }
    }
    return obj;
  }

  /**
   * Agent name where the command will run
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RestAction} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData} authdata
   */
  exports.prototype['authdata'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RestInput} input
   */
  exports.prototype['input'] = undefined;




  return exports;
}));


