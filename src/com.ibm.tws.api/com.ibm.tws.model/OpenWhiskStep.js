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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OpenWhiskConnection'), require('./OpenWhiskOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.OpenWhiskStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.OpenWhiskConnection, root.IbmWorkloadSchedulerApi.OpenWhiskOperation);
  }
}(this, function(ApiClient, OpenWhiskConnection, OpenWhiskOperation) {
  'use strict';




  /**
   * The OpenWhiskStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OpenWhiskStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep
   * @class
   * @param agent
   * @param openWhiskConnection
   * @param openWhiskOperation
   */
  var exports = function(agent, openWhiskConnection, openWhiskOperation) {
    var _this = this;

    _this['agent'] = agent;
    _this['openWhiskConnection'] = openWhiskConnection;
    _this['openWhiskOperation'] = openWhiskOperation;
  };

  /**
   * Constructs a <code>OpenWhiskStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep} The populated <code>OpenWhiskStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('openWhiskConnection')) {
        obj['openWhiskConnection'] = OpenWhiskConnection.constructFromObject(data['openWhiskConnection']);
      }
      if (data.hasOwnProperty('openWhiskOperation')) {
        obj['openWhiskOperation'] = OpenWhiskOperation.constructFromObject(data['openWhiskOperation']);
      }
    }
    return obj;
  }

  /**
   * Agent name where the step will run.
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection} openWhiskConnection
   */
  exports.prototype['openWhiskConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation} openWhiskOperation
   */
  exports.prototype['openWhiskOperation'] = undefined;




  return exports;
}));


