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
    root.IbmWorkloadSchedulerApi.MQConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MQConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/MQConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MQConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/MQConnection
   * @class
   * @param server
   * @param port
   * @param queueManager
   * @param channel
   */
  var exports = function(server, port, queueManager, channel) {
    var _this = this;

    _this['server'] = server;
    _this['port'] = port;


    _this['queueManager'] = queueManager;
    _this['channel'] = channel;
  };

  /**
   * Constructs a <code>MQConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/MQConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/MQConnection} The populated <code>MQConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Integer');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('queueManager')) {
        obj['queueManager'] = ApiClient.convertToType(data['queueManager'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
    }
    return obj;
  }

  /**
   * The host name or IP address of the workstation where IBM WebSphere MQ is installed.
   * @member {String} server
   */
  exports.prototype['server'] = undefined;
  /**
   * The TCP/IP port number of the workstation where IBM WebSphere MQ is listening.
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The name of the user authorized to run the IBM WebSphere MQ commands on the IBM WebSphere MQ server.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password that is associated with the user that is authorized to run the IBM WebSphere MQ commands on the IBM WebSphere MQ server.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The name of the IBM WebSphere MQ queue manager.
   * @member {String} queueManager
   */
  exports.prototype['queueManager'] = undefined;
  /**
   * The name of the IBM WebSphere MQ channel.
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;




  return exports;
}));


