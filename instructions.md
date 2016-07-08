Getting started with StockCompareExample
----------------------------------------------------
Welcome to the StockCompareExample application!
This sample application demonstrates how to write an application leveraging the Workload Scheduler service and OpenWhisk.

Perform the following five simple steps to starting playing with the StockCompareExample application on Bluemix:

a) Prepare your environment for IBM Bluemix - command line procedure
b) Customize the StockCompareExample application
c) Deploy the StockCompareExample application on Bluemix 
d) Access StockCompareExample app from the Bluemix dashboard


a) Preparing your environment for IBM Bluemix - command line procedure
------------------------------------------------------------------------
	1. Install the Cloud Foundry (cf) command-line tool:
			https://github.com/cloudfoundry/cli/releases
	2. Install Bluemix Command Line
			http://clis.ng.bluemix.net/ui/home.html
	3. Extract the package for this application and `cd` to it.

	3. Connect to Bluemix:
			bluemix api https://api.ng.bluemix.net

	4. Log into Bluemix:
			bluemix login -u <your_username> -o <your_organization> -s <your_workspace>

b)  Customize the StockCompareExample application
---------------------------------------------------------------------
	1.  Create your service Workload Scheduler on Bluemix
	
	2.	Upload your OpenWhisk action
			2.1	wsk action create --docker stockDemo wadev/stock-action-demo:1.0
			
	3.  Customize the source code with your data:
    		3.1 Bind your node.js runtime environment with the workload scheduler service. Alternatively, you can embed your credential into the app by customizing the JSON in app.js where you find the following comment
				//You can enter here your Workload Scheduler Service credential if you don't have a service binding
	       	3.2 Enter your OpenWhisk credentials in app.js (username, password, hostname, namespace) to run the demo action. You will find a JSON with this comment
				//You can enter here your openWhisk credentials
			3.4 Every time your stock compare graph is generated, an example prerequisite step is performed. This step consists of a POST to a REST API, but you can customize it were you find the following comments:
				//Example prerequiste step invokation
				and
				//Write the code that will execute before the first step
 
 
c) Deploy the StockCompareExample application on Bluemix 
------------------------------------------------------------------------	
	Deploy application
			customize your manifest.yml
			cf push mystockcompare
	


d) Access your app by entering the following URL into your browser:
---------------------------------------------------------------------

	mystockcompare.mybluemix.net

