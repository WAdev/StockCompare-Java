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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/DBCommand', 'com.ibm.tws.api/com.ibm.tws.model/DBConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DBCommand'), require('./DBConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.DatabaseStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.DBCommand, root.IbmWorkloadSchedulerApi.DBConnection);
  }
}(this, function(ApiClient, DBCommand, DBConnection) {
  'use strict';




  /**
   * The DatabaseStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/DatabaseStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DatabaseStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/DatabaseStep
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DatabaseStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/DatabaseStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/DatabaseStep} The populated <code>DatabaseStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('dbConnection')) {
        obj['dbConnection'] = DBConnection.constructFromObject(data['dbConnection']);
      }
      if (data.hasOwnProperty('dbCommand')) {
        obj['dbCommand'] = DBCommand.constructFromObject(data['dbCommand']);
      }
    }
    return obj;
  }

  /**
   * Agent name where the command will run
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/DBConnection} dbConnection
   */
  exports.prototype['dbConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/DBCommand} dbCommand
   */
  exports.prototype['dbCommand'] = undefined;




  return exports;
}));


