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
    root.IbmWorkloadSchedulerApi.CloudantBody = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CloudantBody model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CloudantBody
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CloudantBody</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CloudantBody
   * @class
   * @param type
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;


  };

  /**
   * Constructs a <code>CloudantBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CloudantBody} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CloudantBody} The populated <code>CloudantBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('inputFileName')) {
        obj['inputFileName'] = ApiClient.convertToType(data['inputFileName'], 'String');
      }
      if (data.hasOwnProperty('inputContent')) {
        obj['inputContent'] = ApiClient.convertToType(data['inputContent'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of the Action to perform. Allowed values are: inputFileName, inputContent
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Specify the file where to take the content. Required if type is equals to inputFileName
   * @member {String} inputFileName
   */
  exports.prototype['inputFileName'] = undefined;
  /**
   * you must provide the document content in the input field. To create or update a document with an empty content, fill the input field with {}. Required if the type is equals to inputContent
   * @member {String} inputContent
   */
  exports.prototype['inputContent'] = undefined;




  return exports;
}));


