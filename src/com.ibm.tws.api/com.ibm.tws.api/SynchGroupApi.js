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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/SynchGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/Error'), require('../com.ibm.tws.model/SynchGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.SynchGroupApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Error, root.IbmWorkloadSchedulerApi.SynchGroup);
  }
}(this, function(ApiClient, Error, SynchGroup) {
  'use strict';

  /**
   * SynchGroup service.
   * @module com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SynchGroupApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the synchGroupDelete operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a SynchGroup 
     * @param {String} SYNCHGROUP_ID Id of synchgroup to fetch
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.processId Id of the process
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.synchGroupDelete = function(SYNCHGROUP_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'SYNCHGROUP_ID' is set
      if (SYNCHGROUP_ID == undefined || SYNCHGROUP_ID == null) {
        throw "Missing the required parameter 'SYNCHGROUP_ID' when calling synchGroupDelete";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupDelete";
      }


      var pathParams = {
        'SYNCHGROUP_ID': SYNCHGROUP_ID
      };
      var queryParams = {
        'processId': opts['processId']
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'mediatype/HTML'];
      var returnType = null;

      return this.apiClient.callApi(
        '/SynchGroup/{SYNCHGROUP_ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the synchGroupIdGet operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the SynchGroup identified by the SYNCHGROUP_ID 
     * @param {String} SYNCHGROUP_ID Id of synchgroup to fetch
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>}
     */
    this.synchGroupIdGet = function(SYNCHGROUP_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'SYNCHGROUP_ID' is set
      if (SYNCHGROUP_ID == undefined || SYNCHGROUP_ID == null) {
        throw "Missing the required parameter 'SYNCHGROUP_ID' when calling synchGroupIdGet";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupIdGet";
      }


      var pathParams = {
        'SYNCHGROUP_ID': SYNCHGROUP_ID
      };
      var queryParams = {
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SynchGroup];

      return this.apiClient.callApi(
        '/SynchGroup/{SYNCHGROUP_ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the synchGroupsGet operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The syncronization groups can be used to avoid two or more steps to run in parallel. Get the list of the SynchGroups 
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.processId Id of the process
     * @param {String} opts.synchGroupName Name of the synchGroup
     * @param {String} opts.synchGroupId Id of the synchGroup
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>}
     */
    this.synchGroupsGet = function(tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'processId': opts['processId'],
        'synchGroupName': opts['synchGroupName'],
        'synchGroupId': opts['synchGroupId']
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SynchGroup];

      return this.apiClient.callApi(
        '/SynchGroup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the synchGroupsPost operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new SynchGroups 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup} synchGroup The SynchGroup to create
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup>}
     */
    this.synchGroupsPost = function(synchGroup, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = synchGroup;

      // verify the required parameter 'synchGroup' is set
      if (synchGroup == undefined || synchGroup == null) {
        throw "Missing the required parameter 'synchGroup' when calling synchGroupsPost";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupsPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [SynchGroup];

      return this.apiClient.callApi(
        '/SynchGroup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the synchGroupsResourceLink operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsResourceLinkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new resource link for the ProcessIdList 
     * @param {String} SYNCHGROUP_ID Id of synchgroup to fetch
     * @param {String} body List of the Processes&#39;s id
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsResourceLinkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.synchGroupsResourceLink = function(SYNCHGROUP_ID, body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'SYNCHGROUP_ID' is set
      if (SYNCHGROUP_ID == undefined || SYNCHGROUP_ID == null) {
        throw "Missing the required parameter 'SYNCHGROUP_ID' when calling synchGroupsResourceLink";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling synchGroupsResourceLink";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupsResourceLink";
      }


      var pathParams = {
        'SYNCHGROUP_ID': SYNCHGROUP_ID
      };
      var queryParams = {
        'body': body
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'mediatype/HTML'];
      var returnType = null;

      return this.apiClient.callApi(
        '/SynchGroup/{SYNCHGROUP_ID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the synchGroupsUpdate operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the information of a SynchGroup response 
     * @param {String} SYNCHGROUP_ID Id of synchgroup to fetch
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup} body The SynchGroup to update
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi~synchGroupsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.synchGroupsUpdate = function(SYNCHGROUP_ID, body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'SYNCHGROUP_ID' is set
      if (SYNCHGROUP_ID == undefined || SYNCHGROUP_ID == null) {
        throw "Missing the required parameter 'SYNCHGROUP_ID' when calling synchGroupsUpdate";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling synchGroupsUpdate";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling synchGroupsUpdate";
      }


      var pathParams = {
        'SYNCHGROUP_ID': SYNCHGROUP_ID
      };
      var queryParams = {
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'mediatype/HTML'];
      var returnType = null;

      return this.apiClient.callApi(
        '/SynchGroup/{SYNCHGROUP_ID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
