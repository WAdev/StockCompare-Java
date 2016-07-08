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
    root.IbmWorkloadSchedulerApi.CommandStep = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommandStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CommandStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CommandStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CommandStep
   * @class
   * @param command
   * @param agent
   */
  var exports = function(command, agent) {
    var _this = this;

    _this['command'] = command;
    _this['agent'] = agent;







  };

  /**
   * Constructs a <code>CommandStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CommandStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CommandStep} The populated <code>CommandStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = ApiClient.convertToType(data['input'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = ApiClient.convertToType(data['output'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('workingDir')) {
        obj['workingDir'] = ApiClient.convertToType(data['workingDir'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * Command to execute, or script to run
   * @member {String} command
   */
  exports.prototype['command'] = undefined;
  /**
   * Agent name where the command will run
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * Stanrdard input
   * @member {String} input
   */
  exports.prototype['input'] = undefined;
  /**
   * Standard output
   * @member {String} output
   */
  exports.prototype['output'] = undefined;
  /**
   * Standard error
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Username to use to run the command
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Working directory of the process to run
   * @member {String} workingDir
   */
  exports.prototype['workingDir'] = undefined;
  /**
   * If the command contains a script, the content of file extension will drive how the system will run the script (for windows only)
   * @member {String} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * Password of the user
   * @member {String} password
   */
  exports.prototype['password'] = undefined;




  return exports;
}));


