# Instructions on creating the repo
[Create the repo](https://help.github.com/articles/create-a-repo/) using your own Github account.
When you create don't add a README or LICENSE. This will make sure to initialize an empty repo

Open a command line and do the following. Where `MY_NEW_REPO_NAME_HERE` is the name of your github repo and `MY_NEW_REPO_URL` is the url generated when you create the new repo. 

```bash
# Clone the template repo to the local file system
git clone https://github.com/xmatters/xm-labs-template.git
# Change the directory name to avoid confusion and then cd into it
mv xm-labs-template MY_NEW_REPO_NAME_HERE  
cd MY_NEW_REPO_NAME_HERE
# We have to tell git that the place it needs to push is not where it came from
git remote set-url origin https://MY_NEW_REPO_URL.git
# Pust to the remote repo
git push -u origin master
```

Then, edit all your files and drop any new ones into the `MY_NEW_REPO_NAME_HERE` directory. Once you are finished, let Travis know and he will then fork it to the xMatters account and update the necessary links in the xM Labs main page. From there if you update your repo, those changes can be merged into the xMatters account repo and everything will be kept up to date!

# Template below:
---

# Jenkins
The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project. Check out the sweet video [here](media/mysweetvideo.mov). 

# Pre-Requisites
* Jenkins Instance with the http_request plugin installed.
* Jenkins Communication Plan (see files) imported into xMatters or created in xMatters.
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!

# Files
* [Jenkins.js](Jenkins.js) - The javascript file to be pasted into a Shared Library. Jenkins is limited to pushing 3 or 4 environmental variables via the http_request plugin.  This library reaches back into Jenkins via a GET command to extract additional information about the build. 
* [MySweetCommPlan.zip](MySweetCommPlan.zip) - The comm plan (if needed) that has all the coold scripts and email format and such. 

# Installation

## Jenkins set up
After installing the Jenkins http_request plugin, select a build and add build step.
<kbd>
<img src="images/http_request.png">
</kbd>


## xMatters set up
1. Create a new Shared Library or (In|Out)bound integration
2. Add this code here:
   ```
   var items = [];
   items.push( { "stuff": "value"} );
   console.log( 'Do stuff' );
   ```
   
# Testing
Be specific. What should happen to make sure this code works? What would a user expect to see?

# Troubleshooting
Optional section for how to troubleshoot. Especially anything in the source application that an xMatters developer might not know about. 
