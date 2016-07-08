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
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Trigger', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData', 'com.ibm.tws.api/com.ibm.tws.model/TimeData', 'com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ibm.tws.model/Trigger'), require('../com.ibm.tws.model/Error'), require('../com.ibm.tws.model/MultipleTriggersData'), require('../com.ibm.tws.model/TimeData'), require('../com.ibm.tws.model/RepeatTimeData'));
  } else {
    // Browser globals (root is window)
    if (!root.IbmWorkloadSchedulerApi) {
      root.IbmWorkloadSchedulerApi = {};
    }
    root.IbmWorkloadSchedulerApi.TriggerFactoryApi = factory(root.IbmWorkloadSchedulerApi.ApiClient, root.IbmWorkloadSchedulerApi.Trigger, root.IbmWorkloadSchedulerApi.Error, root.IbmWorkloadSchedulerApi.MultipleTriggersData, root.IbmWorkloadSchedulerApi.TimeData, root.IbmWorkloadSchedulerApi.RepeatTimeData);
  }
}(this, function(ApiClient, Trigger, Error, MultipleTriggersData, TimeData, RepeatTimeData) {
  'use strict';

  /**
   * TriggerFactory service.
   * @module com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TriggerFactoryApi. 
   * @alias module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi
   * @class
   * @param {module:com.ibm.tws.api/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ibm.tws.api/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createMultipleTriggers operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~createMultipleTriggersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Trigger>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates schedules. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData} body MultipleTriggersData
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~createMultipleTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:com.ibm.tws.api/com.ibm.tws.model/Trigger>}
     */
    this.createMultipleTriggers = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createMultipleTriggers";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Trigger];

      return this.apiClient.callApi(
        '/TriggerFactory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the everyDayAt operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~everyDayAtCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a schedule that repeats every day, at a specified time. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/TimeData} body The hours and minutes information to create the schedule to run the process every day at the specified time.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~everyDayAtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    this.everyDayAt = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling everyDayAt";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/TriggerFactory/everyDayAt', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repeatDaily operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatDailyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create trigger to run daily.
     * Create a schedule that runs every number of days. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData} body The RepeatDaily information to create the schedule. Days property is not used.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatDailyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    this.repeatDaily = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling repeatDaily";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/TriggerFactory/repeatDaily', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repeatEveryDay operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatEveryDayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a schedule that runs every day. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatEveryDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    this.repeatEveryDay = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/TriggerFactory/repeatEveryDay', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repeatWeekly operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatWeeklyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a schedule that runs weekly every number of weeks. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData} body The RepeatWeekly information to create the schedule.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~repeatWeeklyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    this.repeatWeekly = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling repeatWeekly";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/TriggerFactory/repeatWeekly', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleOn operation.
     * @callback module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~scheduleOnCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a trigger to run one time.
     * Create a schedule that makes the process run one time, at the specified time. 
     * @param {module:com.ibm.tws.api/com.ibm.tws.model/TimeData} body Time information to create a trigger that runs once, at the time specified. Only hour and minute values are allowed.
     * @param {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi~scheduleOnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    this.scheduleOn = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling scheduleOn";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/TriggerFactory/scheduleOn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
