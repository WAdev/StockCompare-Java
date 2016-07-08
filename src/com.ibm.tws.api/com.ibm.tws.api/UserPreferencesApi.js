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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.UserPreferencesApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Error);
  }
}(this, function(ApiClient, Error) {
  'use strict';

  /**
   * UserPreferences service.
   * @module com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserPreferencesApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTimezone operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~getTimezoneCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user time zone. 
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~getTimezoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.getTimezone = function(tenantId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getTimezone";
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/UserPreferences/timezone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setTimezone operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~setTimezoneCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the user time zone.. 
     * @param {String} body Time zone
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~setTimezoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.setTimezone = function(body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setTimezone";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling setTimezone";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/UserPreferences/timezone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTimezone operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~updateTimezoneCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the user time zone. 
     * @param {String} body Time zone
     * @param {String} tenantId The id of the Tenant that is making the call
     * @param {Object} opts Optional parameters
     * @param {String} opts.engineName The name of the engine to connect to. Leave default in cloud environments
     * @param {String} opts.engineOwner The owner of the engine definition. Leave default in cloud environments.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi~updateTimezoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.updateTimezone = function(body, tenantId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateTimezone";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling updateTimezone";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/UserPreferences/timezone', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
