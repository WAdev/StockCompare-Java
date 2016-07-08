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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RemoteCommandConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.RemoteCommandStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.RemoteCommandConnection);
  }
}(this, function(ApiClient, RemoteCommandConnection) {
  'use strict';




  /**
   * The RemoteCommandStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RemoteCommandStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep
   * @class
   * @param agent
   * @param command
   * @param remoteCommandConnection
   */
  var exports = function(agent, command, remoteCommandConnection) {
    var _this = this;

    _this['agent'] = agent;
    _this['command'] = command;
    _this['remoteCommandConnection'] = remoteCommandConnection;


  };

  /**
   * Constructs a <code>RemoteCommandStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep} The populated <code>RemoteCommandStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('remoteCommandConnection')) {
        obj['remoteCommandConnection'] = RemoteCommandConnection.constructFromObject(data['remoteCommandConnection']);
      }
      if (data.hasOwnProperty('standardOutput')) {
        obj['standardOutput'] = ApiClient.convertToType(data['standardOutput'], 'String');
      }
      if (data.hasOwnProperty('standardError')) {
        obj['standardError'] = ApiClient.convertToType(data['standardError'], 'String');
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
   * The command that must run
   * @member {String} command
   */
  exports.prototype['command'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection} remoteCommandConnection
   */
  exports.prototype['remoteCommandConnection'] = undefined;
  /**
   * Specify the path and file name where the standard output for the command is to be saved. Specify either an absolute path name or a path name relative to the working directory. The file is overwritten each time the command produces a new output.
   * @member {String} standardOutput
   */
  exports.prototype['standardOutput'] = undefined;
  /**
   * Specify the path and file name where the standard error for the command is to be saved. Specify either an absolute path name or a path name relative to the working directory. The file is overwritten each time the command produces a new error.
   * @member {String} standardError
   */
  exports.prototype['standardError'] = undefined;




  return exports;
}));


