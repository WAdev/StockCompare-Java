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
    root.IbmWorkloadSchedulerApi.RemoteCommandConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoteCommandConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RemoteCommandConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection
   * @class
   * @param hostname
   * @param port
   * @param username
   * @param protocol
   */
  var exports = function(hostname, port, username, protocol) {
    var _this = this;

    _this['hostname'] = hostname;
    _this['port'] = port;
    _this['username'] = username;

    _this['protocol'] = protocol;
  };

  /**
   * Constructs a <code>RemoteCommandConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection} The populated <code>RemoteCommandConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
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
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ip of the server.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The port number of the remote computer where the command runs.
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The user name authorized to start a connection using the defined protocol.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password of the user. The password is encrypted when the job is created.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Allowed values: auto, ssh, windows, rsh, rexec.
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;




  return exports;
}));


