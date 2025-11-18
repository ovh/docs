---
title: "APP Manager Interface"
updated: 2025-02-15
---

## Objective

## Dashboard

In the management interface of an application, the *Preview* tab allows to monitor the life cycle of an application in an easy way.

![Dashboard](images/appmanager-dashboard.png){.thumbnail}

The screen is divided into 3 parts:

* The top block (green) shows some **indicators related to the resources used by the application**. These indicators are useful, for example, to know if it is necessary to increase the number of instances.

> [!warning]
> Stopping an application resets its DPU size to 1. Make sure to update the allocated resources accordingly every time you stop and start an app.

* The left block (yellow) indicates **the status of the active version** (in production). Some shortcuts are possible according to the state (New / Constructed / Deployed) of the version.

* The right block (blue) displays **different versions of the application**. The active version is displayed in blue. Different actions are possible for each version:
    * Synchronize / Download - action depending on the type of code source (ZIP file or GIT repository)
    * Duplicate version
    * Build this version
    * Deploy / Stop version
    * Open the building console
    * Remove version - requires the version not to be deployed

## Manage versions & deployments

![Project home](images/app_beforebuilding.png){.thumbnail}
You will arrive on the "Dashboard" of your application.
Here are three elements:

* __Summary__: status of your application once it has been deployed
* __Active__: status of your "active" version, that is to say, the one you are currently working on
* __Tags__: list of all the versions available in your application

![Project home](images/app_built.png){.thumbnail}
You can see more details about the version you just created using the arrow on the right of it.

![Project home](images/app_consolebuilding.png){.thumbnail}
Since you activated auto-build, it has already started. You can check the activity log by clicking on "Open Console".

![Project home](images/app_console.png){.thumbnail}
When it is done, you should see a last log "EndBuild success".

![Project home](images/app_deploy.png){.thumbnail}
To start the deployment, please click on "Deploy 1.0.0".

![Project home](images/app_deploying.png){.thumbnail}
Deployment starts and may take some time.

![Project home](images/app_afterdeploying.png){.thumbnail}
When the deployment is complete, the "Open" button appears. If you open your application, you should see this screen.

![Project home](images/app_open.png){.thumbnail}

You can now login with your "King" account or with a "ForePaaSID" account created directly within your IAM.

Your app is deployed? It's time to start building it and modifying it live! Check-out how to create beautiful applications with the *dashboard builder* tab.

[Next article: Dashboard](/pages/public_cloud/data_platform/product/app-manager/dashboard/00-dashboard-index)

## Go further

Join our [community of users](/links/community).