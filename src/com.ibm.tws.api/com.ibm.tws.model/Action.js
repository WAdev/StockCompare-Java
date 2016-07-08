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
    if (!root.IbmWorkloadAutomationApi) {
      root.IbmWorkloadAutomationApi = {};
    }
    root.IbmWorkloadAutomationApi.Action = factory(root.IbmWorkloadAutomationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Action model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Action
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Action</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Action
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Action} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Action} The populated <code>Action</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('processid')) {
        obj['processid'] = ApiClient.convertToType(data['processid'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sequenceinteger')) {
        obj['sequenceinteger'] = ApiClient.convertToType(data['sequenceinteger'], 'Integer');
      }
      if (data.hasOwnProperty('jobdefinitionid')) {
        obj['jobdefinitionid'] = ApiClient.convertToType(data['jobdefinitionid'], 'String');
      }
      if (data.hasOwnProperty('actionidentifier')) {
        obj['actionidentifier'] = ApiClient.convertToType(data['actionidentifier'], 'Integer');
      }
      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('starttime')) {
        obj['starttime'] = ApiClient.convertToType(data['starttime'], 'Integer');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], Object);
      }
    }
    return obj;
  }

  /**
   * The user of the action
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The target of the action
   * @member {String} target
   */
  exports.prototype['target'] = undefined;
  /**
   * The type of the action
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The Process id that has performed the action
   * @member {Integer} processid
   */
  exports.prototype['processid'] = undefined;
  /**
   * The description of the action
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The name of the action
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The sequence integer of the action
   * @member {Integer} sequenceinteger
   */
  exports.prototype['sequenceinteger'] = undefined;
  /**
   * The id of the job that perform the action
   * @member {String} jobdefinitionid
   */
  exports.prototype['jobdefinitionid'] = undefined;
  /**
   * The action identifier
   * @member {Integer} actionidentifier
   */
  exports.prototype['actionidentifier'] = undefined;
  /**
   * The type of the action's object
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * The startTime of the action
   * @member {Integer} starttime
   */
  exports.prototype['starttime'] = undefined;
  /**
   * Is the JSON object with action's properties
   * @member {Object} properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));


