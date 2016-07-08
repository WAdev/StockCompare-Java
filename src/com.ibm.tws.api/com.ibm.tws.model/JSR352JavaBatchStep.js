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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JSR352JavaBatchAction'), require('./JSR352JavaBatchConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.JSR352JavaBatchStep = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.JSR352JavaBatchAction, root.IbmWorkloadSchedulerApi.JSR352JavaBatchConnection);
  }
}(this, function(ApiClient, JSR352JavaBatchAction, JSR352JavaBatchConnection) {
  'use strict';




  /**
   * The JSR352JavaBatchStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JSR352JavaBatchStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>JSR352JavaBatchStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep} The populated <code>JSR352JavaBatchStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('jsr352JavaBatchConnection')) {
        obj['jsr352JavaBatchConnection'] = JSR352JavaBatchConnection.constructFromObject(data['jsr352JavaBatchConnection']);
      }
      if (data.hasOwnProperty('jsr352JavaBatchAction')) {
        obj['jsr352JavaBatchAction'] = JSR352JavaBatchAction.constructFromObject(data['jsr352JavaBatchAction']);
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
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection} jsr352JavaBatchConnection
   */
  exports.prototype['jsr352JavaBatchConnection'] = undefined;
  /**
   * @member {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction} jsr352JavaBatchAction
   */
  exports.prototype['jsr352JavaBatchAction'] = undefined;




  return exports;
}));


