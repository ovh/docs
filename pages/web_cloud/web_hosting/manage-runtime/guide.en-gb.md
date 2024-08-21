---
title: "Managing Cloud Web runtime software applications"
excerpt: "Find out how to manage your Web Hosting plan’s runtime software applications, and complete your projects successfully"
updated: 2022-07-27
---

## Objective

With a Cloud Web hosting plan, you can choose from a range of different coding languages to build your project. To complete your project successfully, you may need to use a particular runtime environment.

**Find out how to manage runtime environments in a Cloud Web hosting plan.**

## Requirements

- a [Cloud Web hosting plan](/links/web/hosting-cloud-web-offer)
- access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager)

## Instructions

With Cloud Web, you can pick from one or more runtime environments that are best adapted to your project. The runtime environment you choose will depend on the kind of project you want to set up. 

So if you have not done so yet, **please ensure that your project is compatible with your Cloud Web hosting plan**. The available coding languages are listed on the [product page](/links/web/hosting-cloud-web-offer). 

Once you have chosen the exact runtime environments you will use, you can start following the steps below.

### Step 1: Access the runtime environment management interface.

To access your Cloud Web hosting plan’s runtime environments, log in to the [OVHcloud Control Panel](/links/manager){.external}. Click `Web hosting`{.action} in the services bar on the left-hand side, then choose the name of the Cloud Web hosting plan concerned. Next, go to the `Runtime environments`{.action} tab.

The table that appears will list the runtime environments currently added to your Cloud Web hosting plan. Please note that a runtime environment will be created automatically when you set up your  hosting plan.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/tab-phpfpm7-4.png){.thumbnail}

### Step 2: Manage runtime environments.

There are several different ways you can manage the runtime environments on your Cloud Web hosting plan:

- [add or modify a runtime environment](./#21-add-or-modify-a-runtime-environment) (the maximum number of runtime environments will vary depending on the [plan you have selected](/links/web/hosting-cloud-web-offer){.external})
- define a runtime environment as a default choice
- delete a runtime environment

#### 2.1 Add or modify a runtime environment.

> [!primary]
>
> Before you modify a runtime environment, ensure that you do not make a website or application using it unavailable as a result. You can view the number of multisites that are based on your runtime environment using the `Number of linked multisites` column. In the `Multisite`{.action} tab, you can view the runtime environment used for each domain, using the Runtime software column in the table that appears.
>
> To allow the removal of a runtime environment, you must first delete the multisite entries that use the runtime environment.

To add or modify a runtime environment, go to the `Runtime environment`{.action} tab of the Cloud Web hosting plan concerned. Then:

- **if you want to add a runtime environment**, click `Actions`{.action} above the table, then `Add a runtime environment`{.action}
- **if you want to modify a runtime environment**, click on `...`{.action} to the right of the environment concerned, then `Modify`{.action}.

Enter the information requested in the popup window. Follow the remaining steps depending on the runtime environment you have selected:

- [PHP](./#php){.external} 
- [Node.js](./#nodejs){.external}
- [Ruby](./#ruby){.external} 
- [Python](./#python){.external} 

##### **PHP**

|Information|Description| 
|---|---| 
|Custom name|Enter a name that will distinguish this runtime environment from any other environments in the OVHcloud Control Panel.|  
|Runtime environment|Choose the new runtime environment you want.|  

Once you have entered this information, click `Confirm`{.action}. Please ensure that this runtime environment is definitely used by the multisites you want. To do this, continue to step three: [Link your runtime environment to a multisite](./#step-3-link-your-runtime-environment-to-a-multisite).

##### **Node.js**

|Information|Description| 
|---|---| 
|Custom name|Enter a name that will distinguish this runtime environment from any other environments in the OVHcloud Control Panel.|
|Runtime environment|Choose the new runtime environment you want.|
|Access path to public directory|Specify the directory in which static content will be hosted (the runtime environment will not run this content).|
|Application environment|Specify whether it is a "production", "test" or "development" environment. Please keep in mind that development environments behave differently from production and test environments, displaying errors directly in the web interface.|
|Application launch script|Name the script that will call the Node.js technology.|

Once you have entered this information, click `Confirm`{.action}. Please ensure that this runtime environment is definitely used by the multisites you want. To do this, continue to step three: [Link your runtime environment to a multisite](./#step-3-link-your-runtime-environment-to-a-multisite){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-nodejs8.png){.thumbnail}

##### **Ruby**

|Information|Description| 
|---|---| 
|Custom name|Enter a name that will distinguish this runtime environment from any other environments in the OVHcloud Control Panel.|
|Runtime environment|Choose the new runtime environment you want.|
|Access path to public directory|Specify the directory in which static content will be hosted (the runtime environment will not run this content).|
|Application environment|Specify whether it is a "production", "test" or "development" environment. Please keep in mind that development environments behave differently from production and test environments, displaying errors directly in the web interface.|
|Application launch script|Name the script that will call the Ruby runtime environment.|

Once you have entered this information, click `Confirm`{.action}. Please ensure that this runtime environment is definitely used by the multi-sites you want. To do this, continue to step three: [Link your runtime environment to a multisite](./#step-3-link-your-runtime-environment-to-a-multisite){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-ruby2-6.png){.thumbnail}

##### **Python**

|Information|Description| 
|---|---| 
|Custom name|Enter a name that will distinguish this runtime environment from any other environments in the OVHcloud Control Panel.|
|Runtime environment|Choose the new runtime environment you want.|
|Access path to public directory|Specify the directory in which static content will be hosted (the runtime environment will not run this content).|
|Application environment|Specify whether it is a "production", "test" or "development" environment. Please keep in mind that development environments behave differently from production and test environments, displaying errors directly in the web interface.|
|Application launch script|Name the script that will call the Python runtime environment.|

Once you have entered this information, click `Confirm`{.action}. Please ensure that this runtime environment is definitely used by the multi-sites you want. To do this, continue to step three: [Link your runtime environment to a multisite](./#step-3-link-your-runtime-environment-to-a-multisite){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-python3.png){.thumbnail}

### Step 3: Link the runtime environment to a multisite.

> [!primary]
> In our example, only PHP and Node.js environments have been created. In your project, you may be using Ruby or Python. In this case, the operations described below are
> applicable.
> 
> You can use two different runtime environments alongside each other depending on which [Cloud Web hosting plan](/links/web/hosting-cloud-web-offer){.external} you choose.
> 

Once you have the runtime environments you need for your project, make sure they are linked to your multisites. To do this, go to the `Multisite`{.action} tab of the Cloud Web hosting plan concerned. 

In the table, check if the displayed runtime environment is correct for the domains concerned in the Runtime software column. The names displayed correspond to the "custom name" you have defined.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/runtime-software-applications.png){.thumbnail}

If you want to modify a runtime environment associated with a multisite, click on the cogwheel icon to the right of the domain concerned, and click `Modify`{.action}.

Then select the environment next to `Runtime environment` in the popup window. As a reminder, the names displayed correspond to the "custom name" you have defined. The website or application accessible from the domain concerned must be compatible with the runtime environment you have chosen. 

Once you have selected it, follow the remaining steps.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/modify-a-domain-step-1.png){.thumbnail}

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community). 