/*
 * MyLib Shared Library
 *
 *  This shared library is for interacting with Jenkins
 *
 *  Exposed methods:
 *    getBuildStatus - This does a GET call back into Jenkins to retrieve extended information about the build.
 *       jobname - string - jobname
 *
 *  Usage:
    If not included in the Installation, then some useage example(s) for making calls to the methods in this file

    //including the Jenkins shared library.
    var Jenkins = require("Jenkins");
    var response = JSON.parse(Jenkins.getBuildStatus(data.job_name));

 */

exports.getBuildStatus = function(jobname) {
    console.log("Get Build Status - " + jobname);
        // Prepare the HTTP request
    var request = http.request({
        'endpoint': 'Jenkins',
        'method': 'GET',
        'path': '/job/' + jobname + '/lastBuild/api/json',
        'headers': {
            'Content-Type': 'application/json',
            "authorization": "Basic [authorization token]"
        }
    });


    // Submit the request and capture the response
     var response = request.write();
     // Write the response to the activity stream
    return(response.body)
}
