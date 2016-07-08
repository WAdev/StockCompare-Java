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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/CronProcess', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/CronProcess'), require('../com.ibm.tws.model/Error'), require('../com.ibm.tws.model/Process'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.ProcessApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.CronProcess, root.IbmWorkloadSchedulerApi.Error, root.IbmWorkloadSchedulerApi.Process);
  }
}(this, function(ApiClient, CronProcess, Error, Process) {
  'use strict';

  /**
   * Process service.
   * @module com.ibm.tws.api/com.ibm.tws.api/ProcessApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProcessApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCronProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~createCronProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a process using a cron rule to generate triggers. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/CronProcess} body The CronProcess to create.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~createCronProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Process}
     */
    this.createCronProcess = function(body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createCronProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling createCronProcess";
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
      var returnType = Process;

      return this.apiClient.callApi(
        '/Process/CronProcess', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~createProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Process. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} body The Process to create.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~createProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Process}
     */
    this.createProcess = function(body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling createProcess";
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
      var returnType = Process;

      return this.apiClient.callApi(
        '/Process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~deleteProcessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Process. 
     * @param {String} PROCESS_ID The ID of the process to delete.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~deleteProcessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProcess = function(PROCESS_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling deleteProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling deleteProcess";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID
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
        '/Process/{PROCESS_ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~getProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Process identified by the ID. 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~getProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Process}
     */
    this.getProcess = function(PROCESS_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling getProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getProcess";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID
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
      var returnType = Process;

      return this.apiClient.callApi(
        '/Process/{PROCESS_ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~listProcessCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Process>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of the processes belonging to a certain library. No more of 1000 elements will be returned by this API. 
     * @param {String} processlibraryid The Library ID.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.processName The process name for filtering. When using this option, no processlibraryid must be specified.
     * @param {String} opts.sort Sort services based on name..
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {Integer} opts.startRange The index of the first element to retrieve. It is zero based.
     * @param {Integer} opts.endRange The index of the last element to retrieve. If the element does not exist, are retrieved elements from startRange to the maximum possible value.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~listProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Process>}
     */
    this.listProcess = function(processlibraryid, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processlibraryid' is set
      if (processlibraryid == undefined || processlibraryid == null) {
        throw "Missing the required parameter 'processlibraryid' when calling listProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling listProcess";
      }


      var pathParams = {
      };
      var queryParams = {
        'processlibraryid': processlibraryid,
        'processName': opts['processName'],
        'sort': opts['sort']
      };
      var headerParams = {
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId,
        'startRange': opts['startRange'],
        'endRange': opts['endRange']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Process];

      return this.apiClient.callApi(
        '/Process', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runNowProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~runNowProcessCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit the request to run the process immediately. 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~runNowProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.runNowProcess = function(PROCESS_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling runNowProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling runNowProcess";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/Process/{PROCESS_ID}/Actions/RunNow', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the toggleProcessStatus operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~toggleProcessStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable or disable a process. 
     * @param {String} PROCESS_ID The ID of the process to enable or disable.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~toggleProcessStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.toggleProcessStatus = function(PROCESS_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling toggleProcessStatus";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling toggleProcessStatus";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID
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
      var returnType = null;

      return this.apiClient.callApi(
        '/Process/{PROCESS_ID}/Actions/ToggleStatus', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProcess operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~updateProcessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Process. 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Process} body The Process to update.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi~updateProcessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProcess = function(PROCESS_ID, body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling updateProcess";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateProcess";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling updateProcess";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID
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
      var returnType = null;

      return this.apiClient.callApi(
        '/Process/{PROCESS_ID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
