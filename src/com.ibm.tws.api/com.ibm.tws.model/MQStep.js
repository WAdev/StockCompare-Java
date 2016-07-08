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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/MQConnection', 'com.ibm.tws.api/com.ibm.tws.model/MQOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MQConnection'), require('./MQOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.MQStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.MQConnection, root.IbmWorkloadSchedulerApi.MQOperation);
  }
}(this, function(ApiClient, MQConnection, MQOperation) {
  'use strict';




  /**
   * The MQStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQStep
   * @class
   * @param agent
   * @param mqConnection
   * @param mqOperation
   * @param mqMessage
   */
  var exports = function(agent, mqConnection, mqOperation, mqMessage) {
    var _this = this;

    _this['agent'] = agent;
    _this['mqConnection'] = mqConnection;
    _this['mqOperation'] = mqOperation;
    _this['mqMessage'] = mqMessage;
  };

  /**
   * Constructs a <code>MQStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQStep} The populated <code>MQStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('mqConnection')) {
        obj['mqConnection'] = MQConnection.constructFromObject(data['mqConnection']);
      }
      if (data.hasOwnProperty('mqOperation')) {
        obj['mqOperation'] = MQOperation.constructFromObject(data['mqOperation']);
      }
      if (data.hasOwnProperty('mqMessage')) {
        obj['mqMessage'] = ApiClient.convertToType(data['mqMessage'], 'String');
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
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQConnection} mqConnection
   */
  exports.prototype['mqConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQOperation} mqOperation
   */
  exports.prototype['mqOperation'] = undefined;
  /**
   * The message to include in the request Request/Response or Publish IBM WebSphere MQ Operation.
   * @member {String} mqMessage
   */
  exports.prototype['mqMessage'] = undefined;




  return exports;
}));


