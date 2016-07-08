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
    root.IbmWorkloadSchedulerApi.CloudantAction = factory(root.IbmWorkloadSchedulerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CloudantAction model module.
   * @module com.ibm.tws.api/com.ibm.tws.model/CloudantAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CloudantAction</code>.
   * @alias module:com.ibm.tws.api/com.ibm.tws.model/CloudantAction
   * @class
   * @param type
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;












  };

  /**
   * Constructs a <code>CloudantAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ibm.tws.api/com.ibm.tws.model/CloudantAction} obj Optional instance to populate.
   * @return {module:com.ibm.tws.api/com.ibm.tws.model/CloudantAction} The populated <code>CloudantAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('databaseOperation')) {
        obj['databaseOperation'] = ApiClient.convertToType(data['databaseOperation'], 'String');
      }
      if (data.hasOwnProperty('databaseReplicationTargetName')) {
        obj['databaseReplicationTargetName'] = ApiClient.convertToType(data['databaseReplicationTargetName'], 'String');
      }
      if (data.hasOwnProperty('documentOperation')) {
        obj['documentOperation'] = ApiClient.convertToType(data['documentOperation'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentRevision')) {
        obj['documentRevision'] = ApiClient.convertToType(data['documentRevision'], 'String');
      }
      if (data.hasOwnProperty('attachmentOperation')) {
        obj['attachmentOperation'] = ApiClient.convertToType(data['attachmentOperation'], 'String');
      }
      if (data.hasOwnProperty('attachmentDocumentId')) {
        obj['attachmentDocumentId'] = ApiClient.convertToType(data['attachmentDocumentId'], 'String');
      }
      if (data.hasOwnProperty('attachmentDocumentRevision')) {
        obj['attachmentDocumentRevision'] = ApiClient.convertToType(data['attachmentDocumentRevision'], 'String');
      }
      if (data.hasOwnProperty('attachmentName')) {
        obj['attachmentName'] = ApiClient.convertToType(data['attachmentName'], 'String');
      }
      if (data.hasOwnProperty('attachmentContentType')) {
        obj['attachmentContentType'] = ApiClient.convertToType(data['attachmentContentType'], 'String');
      }
      if (data.hasOwnProperty('attachmentOutputFileName')) {
        obj['attachmentOutputFileName'] = ApiClient.convertToType(data['attachmentOutputFileName'], 'String');
      }
      if (data.hasOwnProperty('operationParameters')) {
        obj['operationParameters'] = ApiClient.convertToType(data['operationParameters'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The type of the Action to perform. Allowed values are: databaseOperation, databaseReplication, documentOperation, attachmentOperation
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Select the action to perform. Allowed values: CREATE1, READ1, DELETE1. Required if type is equal to databaseOperation
   * @member {String} databaseOperation
   */
  exports.prototype['databaseOperation'] = undefined;
  /**
   * Database that you want to synchronize. If the target database does not exist, it is created automatically, unless you specify. Required if the type is equal to databaseReplication
   * @member {String} databaseReplicationTargetName
   */
  exports.prototype['databaseReplicationTargetName'] = undefined;
  /**
   * Select the action to perform. Allowed values: CREATE, READ, DELETE, UPDATE. Required if type is equal to documentOperationString
   * @member {String} documentOperation
   */
  exports.prototype['documentOperation'] = undefined;
  /**
   * The document identifier. Required if type is equal to attachmentOperation
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * The document revision number. This attribute is required for the update and delete actions. For the delete action, it must be equal to the latest revision number. Required if type is equal to documentOperation
   * @member {String} documentRevision
   */
  exports.prototype['documentRevision'] = undefined;
  /**
   * Select the action to perform. Allowed values: CREATE/UPDATE, CREATE2, READ2, DELETE2. Required if type is equal to databaseOperation
   * @member {String} attachmentOperation
   */
  exports.prototype['attachmentOperation'] = undefined;
  /**
   * The document identifier. Required if type is equals to attachmentOperation
   * @member {String} attachmentDocumentId
   */
  exports.prototype['attachmentDocumentId'] = undefined;
  /**
   * The document revision number. This attribute is required for the update and delete actions. For the delete action, it must be equal to the latest revision number. Required if type is equal to attachmentOperation
   * @member {String} attachmentDocumentRevision
   */
  exports.prototype['attachmentDocumentRevision'] = undefined;
  /**
   * The name by which the attachment is associated with the document. For the update action, if the attachment does not exist, it is created automatically. For the create action, if the attachment already exists, it is updated automatically. Required if type is equal to attachmentOperation
   * @member {String} attachmentName
   */
  exports.prototype['attachmentName'] = undefined;
  /**
   * The attachment content type header. Required if type is equal to attachmentOperation
   * @member {String} attachmentContentType
   */
  exports.prototype['attachmentContentType'] = undefined;
  /**
   * For the read action, the name of the file where you want to receive the attachment
   * @member {String} attachmentOutputFileName
   */
  exports.prototype['attachmentOutputFileName'] = undefined;
  /**
   * The list of extra parameters that you can add for the read document and the database replication actions. Insert one or more parameters, and related values
   * @member {Object.<String, String>} operationParameters
   */
  exports.prototype['operationParameters'] = undefined;




  return exports;
}));


