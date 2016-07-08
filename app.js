/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require("body-parser");
var https = require("https");
// Include the node file module
var fs = require('fs');
var dateFormat = require("dateformat");
// create a new express server
var app = express();
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

if (process.env.VCAP_SERVICES && process.env.VCAP_SERVICES.WorkloadScheduler) {
	console.log("VCAP_S OK");
} else {
	console.log("VCAP_S MISSING");
}

//var ws = require('iws-light');
var IbmWorkloadAutomationApi = require('./src/com.ibm.tws.api/index.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.get('/getImages',function(req,resRest){
	
	fs.readdir(__dirname + "/public/uploads/", function(err, items) {
		//console.log(items);
		var json = JSON.stringify({ 
			files: items
		});
		
		resRest.end(json);
	});
	
});

app.post('/saveImage',function(req,resRest){
	
	var imageName = req.body.imageName;
	var imageData = req.body.imageData;

	//var imgData = JSON.parse(whiskResp).response.result.img;
	var base64Data = imageData.replace(/^data:image\/png;base64,/, "");
	
	fs.writeFile(__dirname + "/public/uploads/"+imageName+".png", base64Data, 'base64', function() {
	  //console.log(err);
	});

	resRest.end( JSON.stringify({} ) );
	
});

app.post('/preReq',function(req,resRest){
	//Write the code that will execute before the first step
	setTimeout(function() {
		resRest.end( JSON.stringify({} ) );
	}, 3000);

});

app.post('/createProcess',function(req,resRest){
	console.log("createProcess");
	var imageName = req.body.imageName;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var quotes = req.body.quotes;
	
	startDate = startDate.replace(/\//g, "-");
	endDate = endDate.replace(/\//g, "-");
	
	//Create WS process
	var urlStr;

	if (process && process.env.VCAP_SERVICES && process.env.VCAP_SERVICES.WorkloadScheduler) {
		vcapServices = JSON.parse(process.env.VCAP_SERVICES);

		urlStr = vcapServices.WorkloadScheduler[0].credentials.url;
	} else {
		//You can enter here your Workload Scheduler Service credential if you don't have a service binding
		var otps = { "userId": "yourWorkloadSchedluerServiceUserId",
        "password": "yourWorkloadSchedluerServicePassword",
        "url": "yourWorkloadSchedluerServiceURL"};
		urlStr = otps.url;
	}
	
	var url = require('url');
	var urlObj = url.parse(urlStr);
	
	var defaultClient = IbmWorkloadAutomationApi.ApiClient.instance;

	// Configure HTTP basic authorization: basicAuth
	var basicAuth = defaultClient.authentications['basicAuth'];

	basicAuth.username = urlObj.auth.split(":")[0];
	basicAuth.password = urlObj.auth.split(":")[1];
	defaultClient.basePath = urlObj.protocol +"//"+ urlObj.host + urlObj.pathname ;

	var agentApi = new IbmWorkloadAutomationApi.AgentApi()

	var tenantId = urlObj.query.split("tenantId=")[1].split("&")[0]; // {String} The id of the Tenant that is making the call

	var opts = { 
	  'engineOwner': urlObj.query.split("engineOwner=")[1], 
	  'engineName': urlObj.query.split("engineName=")[1].split("&")[0],
	  'encodedId': false
	};

	var callback = function(error, data, response) {
	  if (error) {
		console.error(error);
	  } else {
		console.log(data);
	  }
		resRest.end( JSON.stringify({} ) );
	}.bind(this);
	
	var cloudAgent = tenantId+"_CLOUD";
	
	var process = new IbmWorkloadAutomationApi.Process(); // Process | the Process to create
	process.name = imageName;
	process.objecttype = "Process";
	process.processlibraryid = 0;
	process.processstatus = false;
	process.enhancedprocess = false;
	process.nextruntime = "";
	process.lastrunresult = -1;
	process.lastmodifiedtimestamp = "";
	process.creationdate = "";
	process.steps = [];
	process.triggers = [];
	process.variables = [];
	process.jobstreams = [];
	process.variabletable = "";
	process.timezone = "";

	var step = new IbmWorkloadAutomationApi.Step(); // Step | the Step to create
	step.name = "";
	step.sequenceNumber = 1;
	step.jobDefinitionId = "";
	
	var restfulStep = new IbmWorkloadAutomationApi.RestfulStep(); // OpenWhiskStep | the OpenWhiskStep to create
	restfulStep.agent = cloudAgent;
	restfulStep.action = new IbmWorkloadAutomationApi.RestAction();
	restfulStep.action.uri = appEnv.url.replace("https","http")+"/preReq";
	restfulStep.action.method = "POST";
	restfulStep.action.accept ="application/json";
	restfulStep.action.contentType ="application/json";
	restfulStep.action.outputFileName="";
	restfulStep.action.queryParameters={};
	restfulStep.action.headers={};
	restfulStep.action.jsonObjectResultQuery="";
	restfulStep.authdata = new IbmWorkloadAutomationApi.RestAuthenticationData();
	restfulStep.authdata.username ="";
	restfulStep.authdata.password="";
	restfulStep.authdata.keyStoreFilePath="";
	restfulStep.authdata.keyStoreFilePassword="";
	restfulStep.input = new IbmWorkloadAutomationApi.RestInput();
	restfulStep.input.input="";
	restfulStep.input.isFile=false;
	
	step.restfulStep=restfulStep;
	process.steps.push(step);
	
	step = new IbmWorkloadAutomationApi.Step(); // Step | the Step to create
	step.name = "";
	step.sequenceNumber = 2;
	step.jobDefinitionId = "";
	
	var openWhiskStep = new IbmWorkloadAutomationApi.OpenWhiskStep(); // OpenWhiskStep | the OpenWhiskStep to create
	openWhiskStep.agent = cloudAgent;
	openWhiskStep.openWhiskConnection = new IbmWorkloadAutomationApi.OpenWhiskConnection();
	//You can enter here your openWhisk credentials
	openWhiskStep.openWhiskConnection.hostname = "openwhisk.ng.bluemix.net";
	openWhiskStep.openWhiskConnection.username = "yourOWuserName";
	openWhiskStep.openWhiskConnection.password = "yourOpenWhiskPassword";
	openWhiskStep.openWhiskConnection.namespace = "yourNameSpace";
	openWhiskStep.openWhiskConnection.numberOfRetries = 3;
	openWhiskStep.openWhiskConnection.retryIntervalSeconds = 30;
	openWhiskStep.openWhiskOperation = new IbmWorkloadAutomationApi.OpenWhiskOperation();
	openWhiskStep.openWhiskOperation.actionName = "stockDemo";
	var hostname = appEnv.url.replace("https","http").replace("https://","");
	var payload = {"quotes": JSON.parse(quotes), "startDate": startDate, "endDate" : endDate, hostname: hostname};
	openWhiskStep.openWhiskOperation.payload = JSON.stringify(payload);
	step.openWhiskStep=openWhiskStep;
	process.steps.push(step);

	var trigger = new IbmWorkloadAutomationApi.Trigger();
	trigger.triggerType = 'DailyTrigger';
	trigger.dailyProperty = new IbmWorkloadAutomationApi.DailyTriggerProperty();
	trigger.dailyProperty.frequency = 1;
	trigger.dailyProperty.dailySchedule = 1;
	process.triggers.push(trigger);
	
	// Retrieve openwhisk libraryName
	var libraryApi = new IbmWorkloadAutomationApi.ProcessLibraryApi();
	var procLibFound = false;
	var libraryName = "stockCompareApp";

	libraryApi.listProcessLibrary(tenantId, opts, function (err, processLibraries) {
		if(err){
			console.log('listProcessLibrary: ERROR getting process libraries...');
		} else {
		console.log(processLibraries.length);
			for (var i = 0; i < processLibraries.length; i++) {
				var processLibrary = processLibraries[i];

				if (processLibrary.name.toLowerCase() == libraryName.toLowerCase()) { // Open whisk library is found
					procLibFound = true;
					process.processlibraryid = processLibrary.id;
					var processApi = new IbmWorkloadAutomationApi.ProcessApi();
					processApi.createProcess(process, tenantId, opts, function(err3, data3) {
						if (err3){
							console.log ("createProcess: ERROR creating the process..."+JSON.stringify(err3) );
						} else {
							console.log ("createProcess: the process was created, enabling it...");
							processApi.toggleProcessStatus(data3.id, tenantId, opts, function(err4) {
								if (err4){
									console.log ("toggleProcessStatus: ERROR enabling the process...");
								} else {
									console.log ("runNowProcess: process created and enabled...");
									// Run the process
									processApi.runNowProcess(data3.id, tenantId, opts, function (err5) {
										if (err5) {
											console.log('runNowProcess: ERROR running the process...');
										}else{
											console.log('runNowProcess: the process is running ...');
											resRest.end( JSON.stringify({} ) );
										}
									}.bind(this));
								}
							}.bind(this));
						}
					}.bind(this));
					break;
				}
			}
			if (!procLibFound) { // Open whisk library was not found
				// Create openwhisk library
				var processLibrary = new IbmWorkloadAutomationApi.ProcessLibrary(); // ProcessLibrary | the ProcessLibrary to create
				processLibrary.name = libraryName;
				processLibrary.parentid = -1;
				libraryApi.createProcessLibrary(processLibrary, tenantId, opts, function (err2, data) {
					if (err2) {
						console.log('createProcessLibrary: ERROR creating process library...');
					}else{
						process.processlibraryid = data[0].id;
						var processApi = new IbmWorkloadAutomationApi.ProcessApi();
						processApi.createProcess(process, tenantId, opts, function(err3, data3) {
							if (err3){
								console.log ("createProcess: ERROR creating the process...");
							} else {
								console.log ("createProcess: the process was created, enabling it...");
								processApi.toggleProcessStatus(data3.id, tenantId, opts, function(err4) {
									if (err4){
										console.log ("toggleProcessStatus: ERROR enabling the process...");
									} else {
										console.log ("runNowProcess: process created and enabled...");
										// Run the process
										processApi.runNowProcess(data3.id, tenantId, opts, function (err5) {
											if (err5) {
												console.log('runNowProcess: ERROR running the process...');
											}else{
												console.log('runNowProcess: the process is running ...');
												resRest.end( JSON.stringify({} ) );
											}
										}.bind(this));
									}
								}.bind(this));
							}
						}.bind(this));
					}
				}.bind(this));
			}
		}
	}.bind(this));

});


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
