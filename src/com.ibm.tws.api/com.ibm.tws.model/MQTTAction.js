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
    root.IbmWorkloadSchedulerApi.MQTTAction = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MQTTAction model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQTTAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQTTAction</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQTTAction
   * @class
   * @param type
   * @param topic
   */
  var exports = function(type, topic) {
    var _this = this;

    _this['type'] = type;
    _this['topic'] = topic;


  };

  /**
   * Constructs a <code>MQTTAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQTTAction} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQTTAction} The populated <code>MQTTAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('topic')) {
        obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
      }
      if (data.hasOwnProperty('qos')) {
        obj['qos'] = ApiClient.convertToType(data['qos'], 'Integer');
      }
      if (data.hasOwnProperty('mqttMessage')) {
        obj['mqttMessage'] = ApiClient.convertToType(data['mqttMessage'], 'String');
      }
    }
    return obj;
  }

  /**
   * Allowed values: publish, subscribe
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The topic to subscribe to. Special characters and wildcard characters are supported that allow you to subscribe to multiple topics at once. Refer to the MQTT server documentation for the set of characters that are supported and the specific instructions about topic subscription.
   * @member {String} topic
   */
  exports.prototype['topic'] = undefined;
  /**
   * The quality of service. Defines how hard the server/client tries to ensure that a message is received. You can specify 0=The server/client delivers the message once, with no confirmation, 1=The server/client delivers the message at least once, with confirmation required, 2=The server/client delivers the message exactly once by using a four-way handshake. Default value is 0
   * @member {Integer} qos
   */
  exports.prototype['qos'] = undefined;
  /**
   * The message that you want to publish to a topic on the MQTT server. Required if type is equal to publish.
   * @member {String} mqttMessage
   */
  exports.prototype['mqttMessage'] = undefined;




  return exports;
}));


