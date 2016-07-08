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
    root.IbmWorkloadSchedulerApi.Variable = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Variable model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/Variable
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/Variable
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/Variable} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/Variable} The populated <code>Variable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('variableidentifier')) {
        obj['variableidentifier'] = ApiClient.convertToType(data['variableidentifier'], 'Integer');
      }
      if (data.hasOwnProperty('variablevalue')) {
        obj['variablevalue'] = ApiClient.convertToType(data['variablevalue'], 'String');
      }
      if (data.hasOwnProperty('variablename')) {
        obj['variablename'] = ApiClient.convertToType(data['variablename'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('processid')) {
        obj['processid'] = ApiClient.convertToType(data['processid'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('objecttype')) {
        obj['objecttype'] = ApiClient.convertToType(data['objecttype'], 'String');
      }
      if (data.hasOwnProperty('textminchars')) {
        obj['textminchars'] = ApiClient.convertToType(data['textminchars'], 'String');
      }
      if (data.hasOwnProperty('textmaxchars')) {
        obj['textmaxchars'] = ApiClient.convertToType(data['textmaxchars'], 'String');
      }
      if (data.hasOwnProperty('textallowspaces')) {
        obj['textallowspaces'] = ApiClient.convertToType(data['textallowspaces'], 'String');
      }
      if (data.hasOwnProperty('textnotnull')) {
        obj['textnotnull'] = ApiClient.convertToType(data['textnotnull'], 'String');
      }
      if (data.hasOwnProperty('integermaxvalue')) {
        obj['integermaxvalue'] = ApiClient.convertToType(data['integermaxvalue'], 'String');
      }
      if (data.hasOwnProperty('integerminvalue')) {
        obj['integerminvalue'] = ApiClient.convertToType(data['integerminvalue'], 'String');
      }
      if (data.hasOwnProperty('optionsenabled')) {
        obj['optionsenabled'] = ApiClient.convertToType(data['optionsenabled'], 'String');
      }
    }
    return obj;
  }

  /**
   * The identifier of the variable
   * @member {Integer} variableidentifier
   */
  exports.prototype['variableidentifier'] = undefined;
  /**
   * The value of the variable
   * @member {String} variablevalue
   */
  exports.prototype['variablevalue'] = undefined;
  /**
   * The name of the variable
   * @member {String} variablename
   */
  exports.prototype['variablename'] = undefined;
  /**
   * The type of the variable
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The id of the task associated to the variable
   * @member {Integer} processid
   */
  exports.prototype['processid'] = undefined;
  /**
   * The description of the variable
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The object's type associated to the variable
   * @member {String} objecttype
   */
  exports.prototype['objecttype'] = undefined;
  /**
   * The minimum characters of the variable's text
   * @member {String} textminchars
   */
  exports.prototype['textminchars'] = undefined;
  /**
   * The maximum characters of the variable's text
   * @member {String} textmaxchars
   */
  exports.prototype['textmaxchars'] = undefined;
  /**
   * The allowed space for the variable's text
   * @member {String} textallowspaces
   */
  exports.prototype['textallowspaces'] = undefined;
  /**
   * Say if the text is null or not
   * @member {String} textnotnull
   */
  exports.prototype['textnotnull'] = undefined;
  /**
   * The max integer value that the variable can assume
   * @member {String} integermaxvalue
   */
  exports.prototype['integermaxvalue'] = undefined;
  /**
   * The min integer value that the variable can assume
   * @member {String} integerminvalue
   */
  exports.prototype['integerminvalue'] = undefined;
  /**
   * Let us know if there are options enabled
   * @member {String} optionsenabled
   */
  exports.prototype['optionsenabled'] = undefined;




  return exports;
}));


