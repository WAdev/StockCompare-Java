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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProcessLibrary'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.ProcessLibrary = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.ProcessLibrary);
  }
}(this, function(ApiClient, ProcessLibrary) {
  'use strict';




  /**
   * The ProcessLibrary model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProcessLibrary</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProcessLibrary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary} The populated <code>ProcessLibrary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('parentid')) {
        obj['parentid'] = ApiClient.convertToType(data['parentid'], 'Integer');
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [ProcessLibrary]);
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
   * The name of the library
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The owner of the library
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The id of the parent library. If the library is a root library, the value is -1.
   * @member {Integer} parentid
   */
  exports.prototype['parentid'] = undefined;
  /**
   * The list of the Library's children(Process or SynchGroup)
   * @member {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>} children
   */
  exports.prototype['children'] = undefined;
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


