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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/OozieAction', 'com.ibm.tws.api/com.ibm.tws.model/OozieConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OozieAction'), require('./OozieConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.OozieStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.OozieAction, root.IbmWorkloadSchedulerApi.OozieConnection);
  }
}(this, function(ApiClient, OozieAction, OozieConnection) {
  'use strict';




  /**
   * The OozieStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/OozieStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OozieStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/OozieStep
   * @class
   * @param agent
   * @param oozieConnection
   * @param oozieAction
   */
  var exports = function(agent, oozieConnection, oozieAction) {
    var _this = this;

    _this['agent'] = agent;
    _this['oozieConnection'] = oozieConnection;
    _this['oozieAction'] = oozieAction;
  };

  /**
   * Constructs a <code>OozieStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/OozieStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/OozieStep} The populated <code>OozieStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('oozieConnection')) {
        obj['oozieConnection'] = OozieConnection.constructFromObject(data['oozieConnection']);
      }
      if (data.hasOwnProperty('oozieAction')) {
        obj['oozieAction'] = OozieAction.constructFromObject(data['oozieAction']);
      }
    }
    return obj;
  }

  /**
   * Agent name where the step will run
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OozieConnection} oozieConnection
   */
  exports.prototype['oozieConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OozieAction} oozieAction
   */
  exports.prototype['oozieAction'] = undefined;




  return exports;
}));


