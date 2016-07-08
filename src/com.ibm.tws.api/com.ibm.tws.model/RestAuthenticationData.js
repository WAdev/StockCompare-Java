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
    root.IbmWorkloadSchedulerApi.RestAuthenticationData = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestAuthenticationData model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestAuthenticationData</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RestAuthenticationData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData} The populated <code>RestAuthenticationData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('keyStoreFilePath')) {
        obj['keyStoreFilePath'] = ApiClient.convertToType(data['keyStoreFilePath'], 'String');
      }
      if (data.hasOwnProperty('keyStoreFilePassword')) {
        obj['keyStoreFilePassword'] = ApiClient.convertToType(data['keyStoreFilePassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user that perform the call
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password of the user
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * No description avaible
   * @member {String} keyStoreFilePath
   */
  exports.prototype['keyStoreFilePath'] = undefined;
  /**
   * No description avaible
   * @member {String} keyStoreFilePassword
   */
  exports.prototype['keyStoreFilePassword'] = undefined;




  return exports;
}));


