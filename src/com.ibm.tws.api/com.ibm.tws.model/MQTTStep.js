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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/MQTTAction', 'com.ibm.tws.api/com.ibm.tws.model/MQTTConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MQTTAction'), require('./MQTTConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.MQTTStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.MQTTAction, root.IbmWorkloadSchedulerApi.MQTTConnection);
  }
}(this, function(ApiClient, MQTTAction, MQTTConnection) {
  'use strict';




  /**
   * The MQTTStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQTTStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQTTStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQTTStep
   * @class
   * @param agent
   * @param mqttConnection
   * @param mqttAction
   */
  var exports = function(agent, mqttConnection, mqttAction) {
    var _this = this;

    _this['agent'] = agent;
    _this['mqttConnection'] = mqttConnection;
    _this['mqttAction'] = mqttAction;
  };

  /**
   * Constructs a <code>MQTTStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQTTStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQTTStep} The populated <code>MQTTStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('mqttConnection')) {
        obj['mqttConnection'] = MQTTConnection.constructFromObject(data['mqttConnection']);
      }
      if (data.hasOwnProperty('mqttAction')) {
        obj['mqttAction'] = MQTTAction.constructFromObject(data['mqttAction']);
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
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQTTConnection} mqttConnection
   */
  exports.prototype['mqttConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQTTAction} mqttAction
   */
  exports.prototype['mqttAction'] = undefined;




  return exports;
}));


