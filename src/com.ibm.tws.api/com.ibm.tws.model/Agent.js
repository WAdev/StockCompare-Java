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
    root.IbmWorkloadSchedulerApi.Agent = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Agent model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Agent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Agent</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Agent
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Agent} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Agent} The populated <code>Agent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the agent
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the agent
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The status of the agent
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The os running on the agent
   * @member {String} os
   */
  exports.prototype['os'] = undefined;




  return exports;
}));


