/*
 * Inbound script
 *
 *

//including the Jenkins shared library.
var Jenkins = require("Jenkins");

var data;

// If your data is posted as JSON
 data = JSON.parse(request.body);
console.log(JSON.stringify(data));

//Only Environment variables are available to be sent from Jenkins.  In order to
//get more information including the status of the build need to call a
//a GET back into Jenkins.
var response = JSON.parse(Jenkins.getBuildStatus(data.job_name));

//Parsing the JSON response of the GET to get the build status.
var buildstatusj = response.result;

//Retrieving the string value of the JSON build status.
var buildstatus = JSON.stringify(buildstatusj);
console.log("Build Status " + buildstatus);

// Parse data from incoming payload and construct the trigger object
trigger.properties.Name = data.job_name;
trigger.properties.Description = "Build " + data.build_number + "with status of " + buildstatus;


// Define recipients
var recipients = [];
// Add a recipient targeting a user or group
recipients.push({
    'targetName': 'DevOps'
});

// Add a recipient targeting specific devices
trigger.recipients = recipients;

// Post trigger to form
form.post(trigger);
