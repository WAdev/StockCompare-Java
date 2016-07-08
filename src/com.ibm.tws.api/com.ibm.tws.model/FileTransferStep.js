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
    root.IbmWorkloadSchedulerApi.FileTransferStep = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileTransferStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/FileTransferStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileTransferStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/FileTransferStep
   * @class
   * @param agent
   * @param protocol
   * @param operation
   * @param localFile
   * @param localUser
   * @param localPassword
   * @param remoteFile
   * @param remoteUser
   * @param remoteServer
   * @param binary
   * @param passiveMode
   */
  var exports = function(agent, protocol, operation, localFile, localUser, localPassword, remoteFile, remoteUser, remoteServer, binary, passiveMode) {
    var _this = this;

    _this['agent'] = agent;
    _this['protocol'] = protocol;
    _this['operation'] = operation;
    _this['localFile'] = localFile;
    _this['localUser'] = localUser;
    _this['localPassword'] = localPassword;
    _this['remoteFile'] = remoteFile;
    _this['remoteUser'] = remoteUser;

    _this['remoteServer'] = remoteServer;
    _this['binary'] = binary;
    _this['passiveMode'] = passiveMode;

  };

  /**
   * Constructs a <code>FileTransferStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/FileTransferStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/FileTransferStep} The populated <code>FileTransferStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('localFile')) {
        obj['localFile'] = ApiClient.convertToType(data['localFile'], 'String');
      }
      if (data.hasOwnProperty('localUser')) {
        obj['localUser'] = ApiClient.convertToType(data['localUser'], 'String');
      }
      if (data.hasOwnProperty('localPassword')) {
        obj['localPassword'] = ApiClient.convertToType(data['localPassword'], 'String');
      }
      if (data.hasOwnProperty('remoteFile')) {
        obj['remoteFile'] = ApiClient.convertToType(data['remoteFile'], 'String');
      }
      if (data.hasOwnProperty('remoteUser')) {
        obj['remoteUser'] = ApiClient.convertToType(data['remoteUser'], 'String');
      }
      if (data.hasOwnProperty('remotePassword')) {
        obj['remotePassword'] = ApiClient.convertToType(data['remotePassword'], 'String');
      }
      if (data.hasOwnProperty('remoteServer')) {
        obj['remoteServer'] = ApiClient.convertToType(data['remoteServer'], 'String');
      }
      if (data.hasOwnProperty('binary')) {
        obj['binary'] = ApiClient.convertToType(data['binary'], 'Boolean');
      }
      if (data.hasOwnProperty('passiveMode')) {
        obj['passiveMode'] = ApiClient.convertToType(data['passiveMode'], 'Boolean');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Integer');
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
   * The protocol that will be used
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * The operation that must be performed
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * The local file that we want to transfer
   * @member {String} localFile
   */
  exports.prototype['localFile'] = undefined;
  /**
   * The local user that order the operation
   * @member {String} localUser
   */
  exports.prototype['localUser'] = undefined;
  /**
   * The password of the local user
   * @member {String} localPassword
   */
  exports.prototype['localPassword'] = undefined;
  /**
   * The remote file that we want to transfer
   * @member {String} remoteFile
   */
  exports.prototype['remoteFile'] = undefined;
  /**
   * The remote user that order the operation
   * @member {String} remoteUser
   */
  exports.prototype['remoteUser'] = undefined;
  /**
   * The password of the remote user
   * @member {String} remotePassword
   */
  exports.prototype['remotePassword'] = undefined;
  /**
   * The ip of the server
   * @member {String} remoteServer
   */
  exports.prototype['remoteServer'] = undefined;
  /**
   * No description avaible
   * @member {Boolean} binary
   */
  exports.prototype['binary'] = undefined;
  /**
   * To set or not passive mode
   * @member {Boolean} passiveMode
   */
  exports.prototype['passiveMode'] = undefined;
  /**
   * To value of the timeout
   * @member {Integer} timeout
   */
  exports.prototype['timeout'] = undefined;




  return exports;
}));


