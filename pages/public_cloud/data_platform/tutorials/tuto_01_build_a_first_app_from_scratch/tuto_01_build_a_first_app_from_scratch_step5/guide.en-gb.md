---
title: Build your analytics app from scratch on Data Platform - Expose through API
excerpt: ""
updated: 2023-11-01
---

## Deploy your first API

An API is crucial as it is the interface between the external world (namely your applications) and the rest of your Project (i.e. your Data Manager and queries). You will have to call this API when building your application, in the next and final tutorial.

![Project home](images/homepage-api.png)

### Create a new API

From your Project's home page, click on **+** inside the API module.

You will be able to choose between **an existing API template** from the internal *Data Platform Store*, or to **import your own code** by linking a Git repository.

Since you're just starting, we've made a simple NodeJS template just for you. Proceed by selecting the only template available: *API NodeJS*.

![API store](images/api-store-new.png)

Choose a name for your API, and enable the option **auto build** & **auto deploy**. This will download the source code of your API, automatically build it and deploy it for you.

![API settings](images/api-settings-new.png)

From there, give it a couple of seconds as the creation of the API may take a moment.

![API building home](images/api_building1.png)

When the deployment is complete, the **Open** button appears.

![API deployed](images/api_deployed.png)

When you open your API, you will land on the screen below confirming that your API is alive & healthy. It's that easy!

![API open](images/api_open.png)

The next and final step will consist of creating and deploying your first application on Data Platform in under 5 minutes.