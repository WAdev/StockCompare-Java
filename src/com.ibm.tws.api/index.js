/******************************************************************
	Licensed Materials - Property of IBM

	5698-WSE, 5725-U47, 5725-P65
	(C) Copyright IBM Corp. 2014-2015 All Rights Reserved.
	US Government Users Restricted Rights - Use, duplication,
	or disclosure restricted by GSA ADP Schedule Contract with
	IBM Corp.

*******************************************************************/

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ibm.tws.api/ApiClient', 'com.ibm.tws.api/com.ibm.tws.model/Agent', 'com.ibm.tws.api/com.ibm.tws.model/CloudantAction', 'com.ibm.tws.api/com.ibm.tws.model/CloudantBody', 'com.ibm.tws.api/com.ibm.tws.model/CloudantConnection', 'com.ibm.tws.api/com.ibm.tws.model/CloudantStep', 'com.ibm.tws.api/com.ibm.tws.model/CommandStep', 'com.ibm.tws.api/com.ibm.tws.model/CronProcess', 'com.ibm.tws.api/com.ibm.tws.model/CustomStep', 'com.ibm.tws.api/com.ibm.tws.model/DBCommand', 'com.ibm.tws.api/com.ibm.tws.model/DBConnection', 'com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/DatabaseStep', 'com.ibm.tws.api/com.ibm.tws.model/Error', 'com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileDeleteTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/FileTransferStep', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection', 'com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep', 'com.ibm.tws.api/com.ibm.tws.model/JavaStep', 'com.ibm.tws.api/com.ibm.tws.model/Jobstream', 'com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/MQConnection', 'com.ibm.tws.api/com.ibm.tws.model/MQOperation', 'com.ibm.tws.api/com.ibm.tws.model/MQStep', 'com.ibm.tws.api/com.ibm.tws.model/MQTTAction', 'com.ibm.tws.api/com.ibm.tws.model/MQTTConnection', 'com.ibm.tws.api/com.ibm.tws.model/MQTTStep', 'com.ibm.tws.api/com.ibm.tws.model/MonthlyTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData', 'com.ibm.tws.api/com.ibm.tws.model/OneTimeTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.model/OozieAction', 'com.ibm.tws.api/com.ibm.tws.model/OozieConnection', 'com.ibm.tws.api/com.ibm.tws.model/OozieStep', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation', 'com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep', 'com.ibm.tws.api/com.ibm.tws.model/Process', 'com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryInstance', 'com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary', 'com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection', 'com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep', 'com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData', 'com.ibm.tws.api/com.ibm.tws.model/RestAction', 'com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData', 'com.ibm.tws.api/com.ibm.tws.model/RestInput', 'com.ibm.tws.api/com.ibm.tws.model/RestfulStep', 'com.ibm.tws.api/com.ibm.tws.model/Step', 'com.ibm.tws.api/com.ibm.tws.model/StepHistoryInstance', 'com.ibm.tws.api/com.ibm.tws.model/SynchGroup', 'com.ibm.tws.api/com.ibm.tws.model/TimeData', 'com.ibm.tws.api/com.ibm.tws.model/Trigger', 'com.ibm.tws.api/com.ibm.tws.model/Variable', 'com.ibm.tws.api/com.ibm.tws.model/WeeklyTriggerProperty', 'com.ibm.tws.api/com.ibm.tws.api/AgentApi', 'com.ibm.tws.api/com.ibm.tws.api/ProcessApi', 'com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi', 'com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi', 'com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi', 'com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi', 'com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./com.ibm.tws.model/Agent'), require('./com.ibm.tws.model/CloudantAction'), require('./com.ibm.tws.model/CloudantBody'), require('./com.ibm.tws.model/CloudantConnection'), require('./com.ibm.tws.model/CloudantStep'), require('./com.ibm.tws.model/CommandStep'), require('./com.ibm.tws.model/CronProcess'), require('./com.ibm.tws.model/CustomStep'), require('./com.ibm.tws.model/DBCommand'), require('./com.ibm.tws.model/DBConnection'), require('./com.ibm.tws.model/DailyTriggerProperty'), require('./com.ibm.tws.model/DatabaseStep'), require('./com.ibm.tws.model/Error'), require('./com.ibm.tws.model/FileCreateTriggerProperty'), require('./com.ibm.tws.model/FileDeleteTriggerProperty'), require('./com.ibm.tws.model/FileModifiedTriggerProperty'), require('./com.ibm.tws.model/FileTransferStep'), require('./com.ibm.tws.model/JSR352JavaBatchAction'), require('./com.ibm.tws.model/JSR352JavaBatchConnection'), require('./com.ibm.tws.model/JSR352JavaBatchStep'), require('./com.ibm.tws.model/JavaStep'), require('./com.ibm.tws.model/Jobstream'), require('./com.ibm.tws.model/LastWriteTriggerProperty'), require('./com.ibm.tws.model/MQConnection'), require('./com.ibm.tws.model/MQOperation'), require('./com.ibm.tws.model/MQStep'), require('./com.ibm.tws.model/MQTTAction'), require('./com.ibm.tws.model/MQTTConnection'), require('./com.ibm.tws.model/MQTTStep'), require('./com.ibm.tws.model/MonthlyTriggerProperty'), require('./com.ibm.tws.model/MultipleTriggersData'), require('./com.ibm.tws.model/OneTimeTriggerProperty'), require('./com.ibm.tws.model/OozieAction'), require('./com.ibm.tws.model/OozieConnection'), require('./com.ibm.tws.model/OozieStep'), require('./com.ibm.tws.model/OpenWhiskConnection'), require('./com.ibm.tws.model/OpenWhiskOperation'), require('./com.ibm.tws.model/OpenWhiskStep'), require('./com.ibm.tws.model/Process'), require('./com.ibm.tws.model/ProcessHistoryInstance'), require('./com.ibm.tws.model/ProcessLibrary'), require('./com.ibm.tws.model/RemoteCommandConnection'), require('./com.ibm.tws.model/RemoteCommandStep'), require('./com.ibm.tws.model/RepeatTimeData'), require('./com.ibm.tws.model/RestAction'), require('./com.ibm.tws.model/RestAuthenticationData'), require('./com.ibm.tws.model/RestInput'), require('./com.ibm.tws.model/RestfulStep'), require('./com.ibm.tws.model/Step'), require('./com.ibm.tws.model/StepHistoryInstance'), require('./com.ibm.tws.model/SynchGroup'), require('./com.ibm.tws.model/TimeData'), require('./com.ibm.tws.model/Trigger'), require('./com.ibm.tws.model/Variable'), require('./com.ibm.tws.model/WeeklyTriggerProperty'), require('./com.ibm.tws.api/AgentApi'), require('./com.ibm.tws.api/ProcessApi'), require('./com.ibm.tws.api/ProcessHistoryApi'), require('./com.ibm.tws.api/ProcessLibraryApi'), require('./com.ibm.tws.api/SynchGroupApi'), require('./com.ibm.tws.api/TriggerFactoryApi'), require('./com.ibm.tws.api/UserPreferencesApi'));
  }
}(function(ApiClient, Agent, CloudantAction, CloudantBody, CloudantConnection, CloudantStep, CommandStep, CronProcess, CustomStep, DBCommand, DBConnection, DailyTriggerProperty, DatabaseStep, Error, FileCreateTriggerProperty, FileDeleteTriggerProperty, FileModifiedTriggerProperty, FileTransferStep, JSR352JavaBatchAction, JSR352JavaBatchConnection, JSR352JavaBatchStep, JavaStep, Jobstream, LastWriteTriggerProperty, MQConnection, MQOperation, MQStep, MQTTAction, MQTTConnection, MQTTStep, MonthlyTriggerProperty, MultipleTriggersData, OneTimeTriggerProperty, OozieAction, OozieConnection, OozieStep, OpenWhiskConnection, OpenWhiskOperation, OpenWhiskStep, Process, ProcessHistoryInstance, ProcessLibrary, RemoteCommandConnection, RemoteCommandStep, RepeatTimeData, RestAction, RestAuthenticationData, RestInput, RestfulStep, Step, StepHistoryInstance, SynchGroup, TimeData, Trigger, Variable, WeeklyTriggerProperty, AgentApi, ProcessApi, ProcessHistoryApi, ProcessLibraryApi, SynchGroupApi, TriggerFactoryApi, UserPreferencesApi) {
  'use strict';

  /**
   * Workload Scheduler - Application Lab API | IBM Workload Scheduler provides different sets of APIs. The Application Lab API is the simplest to use and is the main API used in the Bluemix environment. To use this API in the cloud environment, you need to know your tenant ID, which is shown either on the service management page or on the service credentials page. To use this API on cloud environments, you need to know your tenantId, reported in the service management page (dashboard), or in the service credentials page .<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var IbmWorkloadSchedulerApi = require('com.ibm.tws.api/index'); // See note below*.
   * var xxxSvc = new IbmWorkloadSchedulerApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new IbmWorkloadSchedulerApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['com.ibm.tws.api/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new IbmWorkloadSchedulerApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new IbmWorkloadSchedulerApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module com.ibm.tws.api/index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:com.ibm.tws.api/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Agent model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Agent}
     */
    Agent: Agent,
    /**
     * The CloudantAction model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CloudantAction}
     */
    CloudantAction: CloudantAction,
    /**
     * The CloudantBody model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CloudantBody}
     */
    CloudantBody: CloudantBody,
    /**
     * The CloudantConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CloudantConnection}
     */
    CloudantConnection: CloudantConnection,
    /**
     * The CloudantStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CloudantStep}
     */
    CloudantStep: CloudantStep,
    /**
     * The CommandStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CommandStep}
     */
    CommandStep: CommandStep,
    /**
     * The CronProcess model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CronProcess}
     */
    CronProcess: CronProcess,
    /**
     * The CustomStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/CustomStep}
     */
    CustomStep: CustomStep,
    /**
     * The DBCommand model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/DBCommand}
     */
    DBCommand: DBCommand,
    /**
     * The DBConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/DBConnection}
     */
    DBConnection: DBConnection,
    /**
     * The DailyTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/DailyTriggerProperty}
     */
    DailyTriggerProperty: DailyTriggerProperty,
    /**
     * The DatabaseStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/DatabaseStep}
     */
    DatabaseStep: DatabaseStep,
    /**
     * The Error model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Error}
     */
    Error: Error,
    /**
     * The FileCreateTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/FileCreateTriggerProperty}
     */
    FileCreateTriggerProperty: FileCreateTriggerProperty,
    /**
     * The FileDeleteTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/FileDeleteTriggerProperty}
     */
    FileDeleteTriggerProperty: FileDeleteTriggerProperty,
    /**
     * The FileModifiedTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/FileModifiedTriggerProperty}
     */
    FileModifiedTriggerProperty: FileModifiedTriggerProperty,
    /**
     * The FileTransferStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/FileTransferStep}
     */
    FileTransferStep: FileTransferStep,
    /**
     * The JSR352JavaBatchAction model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchAction}
     */
    JSR352JavaBatchAction: JSR352JavaBatchAction,
    /**
     * The JSR352JavaBatchConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchConnection}
     */
    JSR352JavaBatchConnection: JSR352JavaBatchConnection,
    /**
     * The JSR352JavaBatchStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/JSR352JavaBatchStep}
     */
    JSR352JavaBatchStep: JSR352JavaBatchStep,
    /**
     * The JavaStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/JavaStep}
     */
    JavaStep: JavaStep,
    /**
     * The Jobstream model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Jobstream}
     */
    Jobstream: Jobstream,
    /**
     * The LastWriteTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/LastWriteTriggerProperty}
     */
    LastWriteTriggerProperty: LastWriteTriggerProperty,
    /**
     * The MQConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQConnection}
     */
    MQConnection: MQConnection,
    /**
     * The MQOperation model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQOperation}
     */
    MQOperation: MQOperation,
    /**
     * The MQStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQStep}
     */
    MQStep: MQStep,
    /**
     * The MQTTAction model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQTTAction}
     */
    MQTTAction: MQTTAction,
    /**
     * The MQTTConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQTTConnection}
     */
    MQTTConnection: MQTTConnection,
    /**
     * The MQTTStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MQTTStep}
     */
    MQTTStep: MQTTStep,
    /**
     * The MonthlyTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MonthlyTriggerProperty}
     */
    MonthlyTriggerProperty: MonthlyTriggerProperty,
    /**
     * The MultipleTriggersData model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/MultipleTriggersData}
     */
    MultipleTriggersData: MultipleTriggersData,
    /**
     * The OneTimeTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OneTimeTriggerProperty}
     */
    OneTimeTriggerProperty: OneTimeTriggerProperty,
    /**
     * The OozieAction model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OozieAction}
     */
    OozieAction: OozieAction,
    /**
     * The OozieConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OozieConnection}
     */
    OozieConnection: OozieConnection,
    /**
     * The OozieStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OozieStep}
     */
    OozieStep: OozieStep,
    /**
     * The OpenWhiskConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskConnection}
     */
    OpenWhiskConnection: OpenWhiskConnection,
    /**
     * The OpenWhiskOperation model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskOperation}
     */
    OpenWhiskOperation: OpenWhiskOperation,
    /**
     * The OpenWhiskStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/OpenWhiskStep}
     */
    OpenWhiskStep: OpenWhiskStep,
    /**
     * The Process model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Process}
     */
    Process: Process,
    /**
     * The ProcessHistoryInstance model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/ProcessHistoryInstance}
     */
    ProcessHistoryInstance: ProcessHistoryInstance,
    /**
     * The ProcessLibrary model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/ProcessLibrary}
     */
    ProcessLibrary: ProcessLibrary,
    /**
     * The RemoteCommandConnection model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandConnection}
     */
    RemoteCommandConnection: RemoteCommandConnection,
    /**
     * The RemoteCommandStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RemoteCommandStep}
     */
    RemoteCommandStep: RemoteCommandStep,
    /**
     * The RepeatTimeData model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RepeatTimeData}
     */
    RepeatTimeData: RepeatTimeData,
    /**
     * The RestAction model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RestAction}
     */
    RestAction: RestAction,
    /**
     * The RestAuthenticationData model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RestAuthenticationData}
     */
    RestAuthenticationData: RestAuthenticationData,
    /**
     * The RestInput model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RestInput}
     */
    RestInput: RestInput,
    /**
     * The RestfulStep model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/RestfulStep}
     */
    RestfulStep: RestfulStep,
    /**
     * The Step model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Step}
     */
    Step: Step,
    /**
     * The StepHistoryInstance model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/StepHistoryInstance}
     */
    StepHistoryInstance: StepHistoryInstance,
    /**
     * The SynchGroup model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/SynchGroup}
     */
    SynchGroup: SynchGroup,
    /**
     * The TimeData model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/TimeData}
     */
    TimeData: TimeData,
    /**
     * The Trigger model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Trigger}
     */
    Trigger: Trigger,
    /**
     * The Variable model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/Variable}
     */
    Variable: Variable,
    /**
     * The WeeklyTriggerProperty model constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.model/WeeklyTriggerProperty}
     */
    WeeklyTriggerProperty: WeeklyTriggerProperty,
    /**
     * The AgentApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/AgentApi}
     */
    AgentApi: AgentApi,
    /**
     * The ProcessApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/ProcessApi}
     */
    ProcessApi: ProcessApi,
    /**
     * The ProcessHistoryApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/ProcessHistoryApi}
     */
    ProcessHistoryApi: ProcessHistoryApi,
    /**
     * The ProcessLibraryApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/ProcessLibraryApi}
     */
    ProcessLibraryApi: ProcessLibraryApi,
    /**
     * The SynchGroupApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/SynchGroupApi}
     */
    SynchGroupApi: SynchGroupApi,
    /**
     * The TriggerFactoryApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/TriggerFactoryApi}
     */
    TriggerFactoryApi: TriggerFactoryApi,
    /**
     * The UserPreferencesApi service constructor.
     * @property {module:com.ibm.tws.api/com.ibm.tws.api/UserPreferencesApi}
     */
    UserPreferencesApi: UserPreferencesApi
  };

  return exports;
}));
