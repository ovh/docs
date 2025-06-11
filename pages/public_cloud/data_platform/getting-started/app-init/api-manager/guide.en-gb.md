---
title: "Deploy your first API"
updated: 2025-02-15
---

## Objective

An API is crucial as it is the interface between the external world (namely your applications) and the rest of your Project (i.e. your Data Manager and queries). You will have to call this API when building your application, in the next and final tutorial.

![Project home](images/homepage-api.png){.thumbnail}

## Create a new API

From your Project's home page, click on **+** inside the API module. 

You will be able to choose between **an existing API template** from the internal *Store*, or to **import your own code** by linking a Git repository.

Since you're just starting, we've made a simple NodeJS template just for you. Proceed by selecting the only template available: *API NodeJS*.

![API store](images/api-store-new.png){.thumbnail}

Choose a name for your API, and enable the option **auto build** & **auto deploy**. This will download the source code of your API, automatically build it and deploy it for you.

![API settings](images/api-settings-new.png){.thumbnail}

From there, give it a couple of seconds as the creation of the API may take a moment. Go grab a hot drink ☕ whilst the API finishes its build.

![API building home](images/api_building1.png){.thumbnail}

> [!primary]
> The Platform uses a **[blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment) deployment methodology** ensuring 100% availability of your data. You can therefore seamlessly create & deploy new versions of your API without risking any downtime!

When the deployment is complete, the **Open** button appears.

![API deployed](images/api_deployed.png){.thumbnail}

When you open your API, you will land on the screen below confirming that your API is alive & healthy. It's that easy!

[Learn more about your Project APIs](/pages/public_cloud/data_platform/technical/sdk/api/00-api-index)

![API open](images/api_open.png){.thumbnail}

The next and final step will consist of creating and deploying your first application on the Platform in under 5 minutes.

[Create your first app](/pages/public_cloud/data_platform/getting-started/app-init/app-manager)

## Go further

Join our [community of users](/links/community).