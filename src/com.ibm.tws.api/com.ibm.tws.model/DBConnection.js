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
    root.IbmWorkloadSchedulerApi.DBConnection = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DBConnection model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/DBConnection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DBConnection</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/DBConnection
   * @class
   * @param user
   * @param password
   * @param dbtype
   * @param dbname
   * @param hostname
   * @param port
   * @param jdbcjarpath
   */
  var exports = function(user, password, dbtype, dbname, hostname, port, jdbcjarpath) {
    var _this = this;

    _this['user'] = user;
    _this['password'] = password;
    _this['dbtype'] = dbtype;
    _this['dbname'] = dbname;
    _this['hostname'] = hostname;
    _this['port'] = port;
    _this['jdbcjarpath'] = jdbcjarpath;


  };

  /**
   * Constructs a <code>DBConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/DBConnection} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/DBConnection} The populated <code>DBConnection</code> instance.
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
      if (data.hasOwnProperty('dbtype')) {
        obj['dbtype'] = ApiClient.convertToType(data['dbtype'], 'String');
      }
      if (data.hasOwnProperty('dbname')) {
        obj['dbname'] = ApiClient.convertToType(data['dbname'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Integer');
      }
      if (data.hasOwnProperty('jdbcjarpath')) {
        obj['jdbcjarpath'] = ApiClient.convertToType(data['jdbcjarpath'], 'String');
      }
      if (data.hasOwnProperty('jdbcdriver')) {
        obj['jdbcdriver'] = ApiClient.convertToType(data['jdbcdriver'], 'String');
      }
      if (data.hasOwnProperty('jdbcconnectionstring')) {
        obj['jdbcconnectionstring'] = ApiClient.convertToType(data['jdbcconnectionstring'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user that order the operation
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The password that order the operation
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The type of the DB
   * @member {String} dbtype
   */
  exports.prototype['dbtype'] = undefined;
  /**
   * The name of the DB
   * @member {String} dbname
   */
  exports.prototype['dbname'] = undefined;
  /**
   * The host name of the DB
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * The port to connect on
   * @member {Integer} port
   */
  exports.prototype['port'] = undefined;
  /**
   * The path to the JDBC driver
   * @member {String} jdbcjarpath
   */
  exports.prototype['jdbcjarpath'] = undefined;
  /**
   * The name of the JDBC driver class. Required if type is equal to Custom Step
   * @member {String} jdbcdriver
   */
  exports.prototype['jdbcdriver'] = undefined;
  /**
   * The string that is used to connect to the database, containing database URL, username and password. Required if type is equal to Custom Step
   * @member {String} jdbcconnectionstring
   */
  exports.prototype['jdbcconnectionstring'] = undefined;




  return exports;
}));


