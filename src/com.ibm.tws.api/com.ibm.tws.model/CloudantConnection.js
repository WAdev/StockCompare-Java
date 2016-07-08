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
    root.IbmWorkloadSchedulerApi.CloudantConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CloudantConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CloudantConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CloudantConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CloudantConnection
   * @class
   * @param user
   * @param password
   * @param account
   * @param databasename
   */
  var exports = function(user, password, account, databasename) {
    var _this = this;

    _this['user'] = user;
    _this['password'] = password;
    _this['account'] = account;
    _this['databasename'] = databasename;
  };

  /**
   * Constructs a <code>CloudantConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CloudantConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CloudantConnection} The populated <code>CloudantConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = ApiClient.convertToType(data['account'], 'String');
      }
      if (data.hasOwnProperty('databasename')) {
        obj['databasename'] = ApiClient.convertToType(data['databasename'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the user authorized to access the database
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The password that is associated with the user authorized to access the database
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The account that was created when you signed up on
   * @member {String} account
   */
  exports.prototype['account'] = undefined;
  /**
   * The database that you want to work with
   * @member {String} databasename
   */
  exports.prototype['databasename'] = undefined;




  return exports;
}));


