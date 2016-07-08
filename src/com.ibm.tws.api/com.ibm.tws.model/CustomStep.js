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
    root.IbmWorkloadSchedulerApi.CustomStep = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CustomStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomStep</code>.
   * The custom step, for supporting any step type
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CustomStep
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CustomStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CustomStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CustomStep} The populated <code>CustomStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('executorId')) {
        obj['executorId'] = ApiClient.convertToType(data['executorId'], 'String');
      }
      if (data.hasOwnProperty('parametersMap')) {
        obj['parametersMap'] = ApiClient.convertToType(data['parametersMap'], 'String');
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
   * The executor id of the step
   * @member {String} executorId
   */
  exports.prototype['executorId'] = undefined;
  /**
   * The parameters of the step. In json format
   * @member {String} parametersMap
   */
  exports.prototype['parametersMap'] = undefined;




  return exports;
}));


