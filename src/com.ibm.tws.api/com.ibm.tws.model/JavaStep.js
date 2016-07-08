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
    root.IbmWorkloadSchedulerApi.JavaStep = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JavaStep model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/JavaStep
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JavaStep</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/JavaStep
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>JavaStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/JavaStep} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/JavaStep} The populated <code>JavaStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('jarPath')) {
        obj['jarPath'] = ApiClient.convertToType(data['jarPath'], 'String');
      }
      if (data.hasOwnProperty('className')) {
        obj['className'] = ApiClient.convertToType(data['className'], 'String');
      }
      if (data.hasOwnProperty('parameterMap')) {
        obj['parameterMap'] = ApiClient.convertToType(data['parameterMap'], {'String': 'String'});
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
   * The path to the jar file
   * @member {String} jarPath
   */
  exports.prototype['jarPath'] = undefined;
  /**
   * The name of the class to use
   * @member {String} className
   */
  exports.prototype['className'] = undefined;
  /**
   * The step's name
   * @member {Object.<String, String>} parameterMap
   */
  exports.prototype['parameterMap'] = undefined;




  return exports;
}));


