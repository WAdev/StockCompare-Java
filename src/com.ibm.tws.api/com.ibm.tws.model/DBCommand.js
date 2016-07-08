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
    root.IbmWorkloadSchedulerApi.DBCommand = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DBCommand model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/DBCommand
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DBCommand</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/DBCommand
   * @class
   * @param type
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;



  };

  /**
   * Constructs a <code>DBCommand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/DBCommand} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/DBCommand} The populated <code>DBCommand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('sqlCommand')) {
        obj['sqlCommand'] = ApiClient.convertToType(data['sqlCommand'], 'String');
      }
      if (data.hasOwnProperty('procedureName')) {
        obj['procedureName'] = ApiClient.convertToType(data['procedureName'], 'String');
      }
      if (data.hasOwnProperty('procedureParams')) {
        obj['procedureParams'] = ApiClient.convertToType(data['procedureParams'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The command's type. Allowed values - StoredProcedures, SQLCommand
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Use this section to type an SQL statement. Database-specific commands, such as db2 describe table, are not supported. To separate instructions, use an empty line. Required if type is equal to SQLCommand
   * @member {String} sqlCommand
   */
  exports.prototype['sqlCommand'] = undefined;
  /**
   * The name of the StoredProcedure. Required if the type is equal to StoredProcedure
   * @member {String} procedureName
   */
  exports.prototype['procedureName'] = undefined;
  /**
   * The name of the StoredProcedure. Required if the type is equal to StoredProcedure
   * @member {Object.<String, String>} procedureParams
   */
  exports.prototype['procedureParams'] = undefined;




  return exports;
}));


