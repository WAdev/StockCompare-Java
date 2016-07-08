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
    root.IbmWorkloadSchedulerApi.SynchGroup = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SynchGroup model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/SynchGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SynchGroup</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SynchGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup} The populated <code>SynchGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('concurrencylevel')) {
        obj['concurrencylevel'] = ApiClient.convertToType(data['concurrencylevel'], 'Integer');
      }
      if (data.hasOwnProperty('resourcedefinitionid')) {
        obj['resourcedefinitionid'] = ApiClient.convertToType(data['resourcedefinitionid'], 'String');
      }
      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The identifier of the synchGroup
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The concurrencylevel of the synchgroup
   * @member {Integer} concurrencylevel
   */
  exports.prototype['concurrencylevel'] = undefined;
  /**
   * The resourceDefinitionId of the jobstream
   * @member {String} resourcedefinitionid
   */
  exports.prototype['resourcedefinitionid'] = undefined;
  /**
   * The type of the object(Process or synchGroup)
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * The id of the item
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));


