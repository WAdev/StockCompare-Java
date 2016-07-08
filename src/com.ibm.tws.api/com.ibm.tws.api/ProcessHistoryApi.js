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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryInstance', 'com.ibm.tws.api/com.ibm.tws.model/StepHistoryInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/Error'), require('../com.ibm.tws.model/ProcessHistoryInstance'), require('../com.ibm.tws.model/StepHistoryInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.ProcessHistoryApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Error, root.IbmWorkloadSchedulerApi.ProcessHistoryInstance, root.IbmWorkloadSchedulerApi.StepHistoryInstance);
  }
}(this, function(ApiClient, Error, ProcessHistoryInstance, StepHistoryInstance) {
  'use strict';

  /**
   * ProcessHistory service.
   * @module com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProcessHistoryApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelStep operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~cancelStepCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a step not yet performed by the process. 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} STEPID The ID of the step to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~cancelStepCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelStep = function(PROCESS_ID, INSTANCEID, STEPID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling cancelStep";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling cancelStep";
      }

      // verify the required parameter 'STEPID' is set
      if (STEPID == undefined || STEPID == null) {
        throw "Missing the required parameter 'STEPID' when calling cancelStep";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling cancelStep";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID,
        'STEPID': STEPID
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
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}/Steps/{STEPID}/Cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStepLog operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~getStepLogCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the output produced by one of the steps of any process that runs (process instance). 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} STEPID The ID of the step to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~getStepLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.getStepLog = function(PROCESS_ID, INSTANCEID, STEPID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling getStepLog";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling getStepLog";
      }

      // verify the required parameter 'STEPID' is set
      if (STEPID == undefined || STEPID == null) {
        throw "Missing the required parameter 'STEPID' when calling getStepLog";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getStepLog";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID,
        'STEPID': STEPID
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
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}/Steps/{STEPID}/Log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the killStep operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~killStepCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop a step.
     * Stop a step. that is running 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} STEPID The ID of the step to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~killStepCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.killStep = function(PROCESS_ID, INSTANCEID, STEPID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling killStep";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling killStep";
      }

      // verify the required parameter 'STEPID' is set
      if (STEPID == undefined || STEPID == null) {
        throw "Missing the required parameter 'STEPID' when calling killStep";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling killStep";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID,
        'STEPID': STEPID
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
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}/Steps/{STEPID}/Kill', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProcessHistory operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~listProcessHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the process run history
     * Get the history of the process identified by the ID.  
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} tenantId The ID of the tenant that is making the call.
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~listProcessHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryInstance>}
     */
    this.listProcessHistory = function(PROCESS_ID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling listProcessHistory";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling listProcessHistory";
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
      var returnType = [ProcessHistoryInstance];

      return this.apiClient.callApi(
        '/ProcessHistory/{PROCESS_ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSteps operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~listStepsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/StepHistoryInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The list of steps of a running instance.
     * Return the list of steps executed by the Process, identified by the ID.  
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} tenantId The ID of the tenant that is making the call.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.encodedId Set to true if the ID is encoded (Base64).
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~listStepsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/StepHistoryInstance>}
     */
    this.listSteps = function(PROCESS_ID, INSTANCEID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling listSteps";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling listSteps";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling listSteps";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID
      };
      var queryParams = {
      };
      var headerParams = {
        'encodedId': opts['encodedId'],
        'engineName': opts['engineName'],
        'engineOwner': opts['engineOwner'],
        'tenantId': tenantId
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [StepHistoryInstance];

      return this.apiClient.callApi(
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rerunStep operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~rerunStepCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rerun a step.
     * Rerun a step. of the process.  
     * @param {String} PROCESS_ID The ID of the step to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} STEPID The ID of the step to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.encodedId Set to true if the ID is encoded (Base64).
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~rerunStepCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rerunStep = function(PROCESS_ID, INSTANCEID, STEPID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling rerunStep";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling rerunStep";
      }

      // verify the required parameter 'STEPID' is set
      if (STEPID == undefined || STEPID == null) {
        throw "Missing the required parameter 'STEPID' when calling rerunStep";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling rerunStep";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID,
        'STEPID': STEPID
      };
      var queryParams = {
      };
      var headerParams = {
        'encodedId': opts['encodedId'],
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
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}/Steps/{STEPID}/Rerun', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startNowStep operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~startNowStepCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a step not yet  performed by the process. 
     * @param {String} PROCESS_ID The ID of the process to retrieve.
     * @param {String} INSTANCEID The ID of the instanceId to retrieve.
     * @param {String} STEPID The ID of the step to retrieve.
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi~startNowStepCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startNowStep = function(PROCESS_ID, INSTANCEID, STEPID, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'PROCESS_ID' is set
      if (PROCESS_ID == undefined || PROCESS_ID == null) {
        throw "Missing the required parameter 'PROCESS_ID' when calling startNowStep";
      }

      // verify the required parameter 'INSTANCEID' is set
      if (INSTANCEID == undefined || INSTANCEID == null) {
        throw "Missing the required parameter 'INSTANCEID' when calling startNowStep";
      }

      // verify the required parameter 'STEPID' is set
      if (STEPID == undefined || STEPID == null) {
        throw "Missing the required parameter 'STEPID' when calling startNowStep";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling startNowStep";
      }


      var pathParams = {
        'PROCESS_ID': PROCESS_ID,
        'INSTANCEID': INSTANCEID,
        'STEPID': STEPID
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
        '/ProcessHistory/{PROCESS_ID}/{INSTANCEID}/Steps/{STEPID}/StartNow', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
