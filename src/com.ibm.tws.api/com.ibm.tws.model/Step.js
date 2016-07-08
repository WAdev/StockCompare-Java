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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/CloudantStep', 'com.ibm.tws.api/com.ibm.tws.model/CommandStep', 'com.ibm.tws.api/com.ibm.tws.model/CustomStep', 'com.ibm.tws.api/com.ibm.tws.model/DatabaseStep', 'com.ibm.tws.api/com.ibm.tws.model/FileTransferStep', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep', 'com.ibm.tws.api/com.ibm.tws.model/JavaStep', 'com.ibm.tws.api/com.ibm.tws.model/MQStep', 'com.ibm.tws.api/com.ibm.tws.model/MQTTStep', 'com.ibm.tws.api/com.ibm.tws.model/OozieStep', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep', 'com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep', 'com.ibm.tws.api/com.ibm.tws.model/RestfulStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudantStep'), require('./CommandStep'), require('./CustomStep'), require('./DatabaseStep'), require('./FileTransferStep'), require('./JSR352JavaBatchStep'), require('./JavaStep'), require('./MQStep'), require('./MQTTStep'), require('./OozieStep'), require('./OpenWhiskStep'), require('./RemoteCommandStep'), require('./RestfulStep'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.Step = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.CloudantStep, root.IbmWorkloadSchedulerApi.CommandStep, root.IbmWorkloadSchedulerApi.CustomStep, root.IbmWorkloadSchedulerApi.DatabaseStep, root.IbmWorkloadSchedulerApi.FileTransferStep, root.IbmWorkloadSchedulerApi.JSR352JavaBatchStep, root.IbmWorkloadSchedulerApi.JavaStep, root.IbmWorkloadSchedulerApi.MQStep, root.IbmWorkloadSchedulerApi.MQTTStep, root.IbmWorkloadSchedulerApi.OozieStep, root.IbmWorkloadSchedulerApi.OpenWhiskStep, root.IbmWorkloadSchedulerApi.RemoteCommandStep, root.IbmWorkloadSchedulerApi.RestfulStep);
  }
}(this, function(ApiClient, CloudantStep, CommandStep, CustomStep, DatabaseStep, FileTransferStep, JSR352JavaBatchStep, JavaStep, MQStep, MQTTStep, OozieStep, OpenWhiskStep, RemoteCommandStep, RestfulStep) {
  'use strict';




  /**
   * The Step model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Step
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Step</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Step
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Step</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Step} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Step} The populated <code>Step</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('processId')) {
        obj['processId'] = ApiClient.convertToType(data['processId'], 'Integer');
      }
      if (data.hasOwnProperty('sequenceNumber')) {
        obj['sequenceNumber'] = ApiClient.convertToType(data['sequenceNumber'], 'Integer');
      }
      if (data.hasOwnProperty('jobDefinitionId')) {
        obj['jobDefinitionId'] = ApiClient.convertToType(data['jobDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('commandStep')) {
        obj['commandStep'] = CommandStep.constructFromObject(data['commandStep']);
      }
      if (data.hasOwnProperty('databaseStep')) {
        obj['databaseStep'] = DatabaseStep.constructFromObject(data['databaseStep']);
      }
      if (data.hasOwnProperty('customStep')) {
        obj['customStep'] = CustomStep.constructFromObject(data['customStep']);
      }
      if (data.hasOwnProperty('fileTransferStep')) {
        obj['fileTransferStep'] = FileTransferStep.constructFromObject(data['fileTransferStep']);
      }
      if (data.hasOwnProperty('javaStep')) {
        obj['javaStep'] = JavaStep.constructFromObject(data['javaStep']);
      }
      if (data.hasOwnProperty('jsr352JavaBatchStep')) {
        obj['jsr352JavaBatchStep'] = JSR352JavaBatchStep.constructFromObject(data['jsr352JavaBatchStep']);
      }
      if (data.hasOwnProperty('mqStep')) {
        obj['mqStep'] = MQStep.constructFromObject(data['mqStep']);
      }
      if (data.hasOwnProperty('mqttStep')) {
        obj['mqttStep'] = MQTTStep.constructFromObject(data['mqttStep']);
      }
      if (data.hasOwnProperty('oozieStep')) {
        obj['oozieStep'] = OozieStep.constructFromObject(data['oozieStep']);
      }
      if (data.hasOwnProperty('remoteCommandStep')) {
        obj['remoteCommandStep'] = RemoteCommandStep.constructFromObject(data['remoteCommandStep']);
      }
      if (data.hasOwnProperty('restfulStep')) {
        obj['restfulStep'] = RestfulStep.constructFromObject(data['restfulStep']);
      }
      if (data.hasOwnProperty('openWhiskStep')) {
        obj['openWhiskStep'] = OpenWhiskStep.constructFromObject(data['openWhiskStep']);
      }
      if (data.hasOwnProperty('cloudantStep')) {
        obj['cloudantStep'] = CloudantStep.constructFromObject(data['cloudantStep']);
      }
    }
    return obj;
  }

  /**
   * The id of the Step
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the step (Read-only)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The ID of the process the step belongs to
   * @member {Integer} processId
   */
  exports.prototype['processId'] = undefined;
  /**
   * The sequence number identifies the sequence of the step
   * @member {Integer} sequenceNumber
   */
  exports.prototype['sequenceNumber'] = undefined;
  /**
   * Internal. It identifies the associated job definition on the Workload Scheduler engine
   * @member {String} jobDefinitionId
   */
  exports.prototype['jobDefinitionId'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CommandStep} commandStep
   */
  exports.prototype['commandStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/DatabaseStep} databaseStep
   */
  exports.prototype['databaseStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CustomStep} customStep
   */
  exports.prototype['customStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/FileTransferStep} fileTransferStep
   */
  exports.prototype['fileTransferStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/JavaStep} javaStep
   */
  exports.prototype['javaStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep} jsr352JavaBatchStep
   */
  exports.prototype['jsr352JavaBatchStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQStep} mqStep
   */
  exports.prototype['mqStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/MQTTStep} mqttStep
   */
  exports.prototype['mqttStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OozieStep} oozieStep
   */
  exports.prototype['oozieStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep} remoteCommandStep
   */
  exports.prototype['remoteCommandStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/RestfulStep} restfulStep
   */
  exports.prototype['restfulStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep} openWhiskStep
   */
  exports.prototype['openWhiskStep'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/CloudantStep} cloudantStep
   */
  exports.prototype['cloudantStep'] = undefined;




  return exports;
}));


