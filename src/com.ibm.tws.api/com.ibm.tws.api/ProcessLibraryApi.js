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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/ProcessLibrary'), require('../com.ibm.tws.model/Error'), require('../com.ibm.tws.model/Process'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.ProcessLibraryApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.ProcessLibrary, root.IbmWorkloadSchedulerApi.Error, root.IbmWorkloadSchedulerApi.Process);
  }
}(this, function(ApiClient, ProcessLibrary, Error, Process) {
  'use strict';

  /**
   * ProcessLibrary service.
   * @module com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProcessLibraryApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~createProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a ProcessLibrary and return it 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary} body the ProcessLibrary to create
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~createProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>}
     */
    this.createProcessLibrary = function(body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createProcessLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling createProcessLibrary";
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
      var returnType = [ProcessLibrary];

      return this.apiClient.callApi(
        '/ProcessLibrary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~deleteProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Process.Libray. 
     * @param {String} PROCESS_LIBRARY_ID The ID of the processLibrary to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~deleteProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProcessLibrary = function(PROCESS_LIBRARY_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling deleteProcessLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling deleteProcessLibrary";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
      var accepts = ['application/json', 'mediatype/HTML'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the exportProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~exportProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export the list of processes of the ProcessLibrary in a json file.
     * @param {String} PROCESS_LIBRARY_ID The ID of the processLibrary to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~exportProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {File}
     */
    this.exportProcessLibrary = function(PROCESS_LIBRARY_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling exportProcessLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling exportProcessLibrary";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}/Export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~getProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the ProcessLibrary identified by the ID. 
     * @param {String} PROCESS_LIBRARY_ID The ID of the processLibrary to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~getProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>}
     */
    this.getProcessLibrary = function(PROCESS_LIBRARY_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling getProcessLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getProcessLibrary";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
      var returnType = [ProcessLibrary];

      return this.apiClient.callApi(
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessLibraryChildren operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~getProcessLibraryChildrenCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the list of the subprocess library of the Process Library specified by the ID. 
     * @param {String} PROCESS_LIBRARY_ID The ID of the Process Library parent to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~getProcessLibraryChildrenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>}
     */
    this.getProcessLibraryChildren = function(PROCESS_LIBRARY_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling getProcessLibraryChildren";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getProcessLibraryChildren";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
      var returnType = [ProcessLibrary];

      return this.apiClient.callApi(
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}/Children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~listProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the ProcessLibrary list. 
     * @param {String} tenantid The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~listProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary>}
     */
    this.listProcessLibrary = function(tenantid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantid' is set
      if (tenantid == undefined || tenantid == null) {
        throw "Missing the required parameter 'tenantid' when calling listProcessLibrary";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantid': tenantid
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProcessLibrary];

      return this.apiClient.callApi(
        '/ProcessLibrary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProcessesInLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~listProcessesInLibraryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Process>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the list of processes releated to the ProcessLibrary identified by the ID. 
     * @param {String} PROCESS_LIBRARY_ID The ID of the processLibrary to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~listProcessesInLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Process>}
     */
    this.listProcessesInLibrary = function(PROCESS_LIBRARY_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling listProcessesInLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling listProcessesInLibrary";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
      var returnType = [Process];

      return this.apiClient.callApi(
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}/Processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProcessLibrary operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~updateProcessLibraryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Process.Library. 
     * @param {String} PROCESS_LIBRARY_ID The ID of the processLibrary to retrieve.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary} body The ProcessLibrary to update.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi~updateProcessLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProcessLibrary = function(PROCESS_LIBRARY_ID, body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'PROCESS_LIBRARY_ID' is set
      if (PROCESS_LIBRARY_ID == undefined || PROCESS_LIBRARY_ID == null) {
        throw "Missing the required parameter 'PROCESS_LIBRARY_ID' when calling updateProcessLibrary";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateProcessLibrary";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling updateProcessLibrary";
      }


      var pathParams = {
        'PROCESS_LIBRARY_ID': PROCESS_LIBRARY_ID
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
        '/ProcessLibrary/{PROCESS_LIBRARY_ID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
