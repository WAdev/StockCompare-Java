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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/CloudantAction', 'com.ibm.tws.api/com.ibm.tws.model/CloudantBody', 'com.ibm.tws.api/com.ibm.tws.model/CloudantConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudantAction'), require('./CloudantBody'), require('./CloudantConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.CloudantStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.CloudantAction, root.IbmWorkloadSchedulerApi.CloudantBody, root.IbmWorkloadSchedulerApi.CloudantConnection);
  }
}(this, function(ApiClient, CloudantAction, CloudantBody, CloudantConnection) {
  'use strict';




  /**
   * The CloudantStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CloudantStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CloudantStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CloudantStep
   * @class
   * @param cloudantConnection
   * @param cloudantAction
   * @param cloudantBody
   */
  var exports = function(cloudantConnection, cloudantAction, cloudantBody) {
    var _this = this;


    _this['cloudantConnection'] = cloudantConnection;
    _this['cloudantAction'] = cloudantAction;
    _this['cloudantBody'] = cloudantBody;
  };

  /**
   * Constructs a <code>CloudantStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CloudantStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CloudantStep} The populated <code>CloudantStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('cloudantConnection')) {
        obj['cloudantConnection'] = CloudantConnection.constructFromObject(data['cloudantConnection']);
      }
      if (data.hasOwnProperty('cloudantAction')) {
        obj['cloudantAction'] = CloudantAction.constructFromObject(data['cloudantAction']);
      }
      if (data.hasOwnProperty('cloudantBody')) {
        obj['cloudantBody'] = CloudantBody.constructFromObject(data['cloudantBody']);
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
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CloudantConnection} cloudantConnection
   */
  exports.prototype['cloudantConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CloudantAction} cloudantAction
   */
  exports.prototype['cloudantAction'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CloudantBody} cloudantBody
   */
  exports.prototype['cloudantBody'] = undefined;




  return exports;
}));


