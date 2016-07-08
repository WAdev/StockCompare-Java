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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Agent', 'com.ibm.tws.api/com.ibm.tws.model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/Agent'), require('../com.ibm.tws.model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.AgentApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Agent, root.IbmWorkloadSchedulerApi.Error);
  }
}(this, function(ApiClient, Agent, Error) {
  'use strict';

  /**
   * Agent service.
   * @module com.ibm.tws.api/com.ibm.tws.api/AgentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AgentApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/AgentApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listAgents operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/AgentApi~listAgentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Agent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the list of agents connected to the workload environment. 
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Sort services based on name..
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/AgentApi~listAgentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Agent>}
     */
    this.listAgents = function(tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling listAgents";
      }


      var pathParams = {
      };
      var queryParams = {
        'sort': opts['sort']
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
      var returnType = [Agent];

      return this.apiClient.callApi(
        '/Agent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
