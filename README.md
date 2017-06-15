# Jenkins
The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project. Check out the sweet video [here](media/mysweetvideo.mov). 

# Pre-Requisites
* Jenkins Instance with the http_request plugin installed.
* Jenkins Communication Plan (see files) imported into xMatters or created in xMatters.
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!

# Files
* [JenkinsLibrary.js](Jenkins.js) - The javascript file to be pasted into a Shared Library. Jenkins is limited to pushing 3 or 4 environmental variables via the http_request plugin.  This library reaches back into Jenkins via a GET command to extract additional information about the build. 
* [Jenkins(1).zip](Jenkins(1).zip) - The comm plan (if needed) that has all the coold scripts and email format and such. 
* [JenkinsIB.js](JenkinsIB.js) - The javascript file to be pasted into the Inbound IB component.  This script calls the library.

# Installation

## Jenkins set up
After installing the Jenkins http_request plugin, select a build and add build step.
<kbd>
<img src="media/http_request.png">
</kbd>

And enter the information needed to point to xMatters.
<kbd>
<img src="media/build_step_part1.png">
</kbd>
<kbd>
<img src="media/build_step_part2.png">
</kbd>

See the below list for the required information:
URL: - This in an xMatters Inbound Integration URL.  See instructions on how to create. [Inbound Integration](https://help.xmatters.com/OnDemand/xmodwelcome/integrationbuilder/build-integrations.htm)
HTTP mode: POST
Pass build params to URL: Yes
Request Body: JSON formated body of Jenkins Environmental values available to the http_plugin.[Jenkins Set Environment Variables](https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project)



## xMatters set up
1. Import the Communication Plan (see files).  If this step is done you can skip steps 2 and 3.
2. Create a new Shared Library 
    Add this code here:
   ```
   var items = [];
   items.push( { "stuff": "value"} );
   console.log( 'Do stuff' );
3. Create (In|Out)bound integration
  Add this code here:
   ```
   var items = [];
   items.push( { "stuff": "value"} );
   console.log( 'Do stuff' );
   
   
# Testing
Be specific. What should happen to make sure this code works? What would a user expect to see?

# Troubleshooting
Optional section for how to troubleshoot. Especially anything in the source application that an xMatters developer might not know about. 
