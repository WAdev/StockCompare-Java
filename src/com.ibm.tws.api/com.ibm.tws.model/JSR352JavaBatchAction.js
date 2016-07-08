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
    root.IbmWorkloadSchedulerApi.JSR352JavaBatchAction = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JSR352JavaBatchAction model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JSR352JavaBatchAction</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction
   * @class
   * @param applicationname
   */
  var exports = function(applicationname) {
    var _this = this;

    _this['applicationname'] = applicationname;






  };

  /**
   * Constructs a <code>JSR352JavaBatchAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction} The populated <code>JSR352JavaBatchAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationname')) {
        obj['applicationname'] = ApiClient.convertToType(data['applicationname'], 'String');
      }
      if (data.hasOwnProperty('modulename')) {
        obj['modulename'] = ApiClient.convertToType(data['modulename'], 'String');
      }
      if (data.hasOwnProperty('ejbcomponentname')) {
        obj['ejbcomponentname'] = ApiClient.convertToType(data['ejbcomponentname'], 'String');
      }
      if (data.hasOwnProperty('jobxmlname')) {
        obj['jobxmlname'] = ApiClient.convertToType(data['jobxmlname'], 'String');
      }
      if (data.hasOwnProperty('jobxmlfile')) {
        obj['jobxmlfile'] = ApiClient.convertToType(data['jobxmlfile'], 'String');
      }
      if (data.hasOwnProperty('jobxml')) {
        obj['jobxml'] = ApiClient.convertToType(data['jobxml'], 'String');
      }
      if (data.hasOwnProperty('jobparameters')) {
        obj['jobparameters'] = ApiClient.convertToType(data['jobparameters'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The name of the Java batch application to be started
   * @member {String} applicationname
   */
  exports.prototype['applicationname'] = undefined;
  /**
   * The name of the WAR file in which the Java batch application is packaged
   * @member {String} modulename
   */
  exports.prototype['modulename'] = undefined;
  /**
   * The name of the EJB component within the batch application EJB module. If specified, the job is submitted under the EJB component context. This attribute is required only when the module is an EJB module
   * @member {String} ejbcomponentname
   */
  exports.prototype['ejbcomponentname'] = undefined;
  /**
   * The name of the job specification language XML file that is used to submit the JSR 352 Java Batch job
   * @member {String} jobxmlname
   */
  exports.prototype['jobxmlname'] = undefined;
  /**
   * The full path and file name of the job XML file that is used to submit the JSR 352 Java Batch job. If you specify this parameter, the job XML instructions that you specify in the Job XML field are ignored at run time
   * @member {String} jobxmlfile
   */
  exports.prototype['jobxmlfile'] = undefined;
  /**
   * Enter the job XML instructions that you want to use at run time to submit the JSR 352 Java Batch job. The job XML instructions are validated when you save the IBM Workload Scheduler JSR 352 Java Batch job. The job XML instructions are ignored if a job XML file path is provided with the Job XML file parameter
   * @member {String} jobxml
   */
  exports.prototype['jobxml'] = undefined;
  /**
   * One or more parameters, and related values, that might be required by your JSR 352 Java Batch application. You can search a parameter in the list by specifying the parameter name in the filter box
   * @member {Object.<String, String>} jobparameters
   */
  exports.prototype['jobparameters'] = undefined;




  return exports;
}));


