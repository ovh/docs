---
title: AI Deploy - Troubleshooting
slug: deploy/debug-apps
excerpt: Find here all the most popular questions and answers to troubleshoot your issues
section: AI Deploy - Guides
order: 05
updated: 2023-03-30
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/debug-apps/'
---

**Last updated 30th March, 2023.**

## Objective

This page gives you a few hints on how to debug your apps if you encounter some issues.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- A [**Public Cloud** project](https://docs.ovh.com/es/public-cloud/create_a_public_cloud_project/)

## Building your app

### Best practices and mandatory guidelines to build your app

When you are deploying your own applications and models, some guidelines must be followed. We detail them in the guide [AI Deploy - Build & use custom Docker image](https://docs.ovh.com/es/publiccloud/ai/deploy/build-use-custom-image/).
Be particularly cautious about image requirements such as OVHcloud user and Docker architecture used. Otherwise, your deployment will end in `FAILED` status.

### Apps examples to follow

If you need some official examples, please follow this guide where we share the source code: [AI Deploy - Apps portfolio](https://docs.ovh.com/es/publiccloud/ai/deploy/apps-portfolio/).

### Test your app locally and in the cloud 

Before paying for cloud resources, feel free to test locally your Docker image. For that, simply install Docker on your local environment.

For the building step, as explained in the mandatory guidelines linked in the previous section, your Docker image has to support at least `linux/amd64` platform to be deployed correctly. Otherwise deployment will fail.

Then perform a `docker run` as follows:

```
# Build your Docker image for at least linux/amd64 architecture
docker buildx build --platform linux/amd64,linux/arm64 ...

# Run your Docker image as OVHcloud user
docker run --rm -it --user=42420:42420 <image-identifier>
```

This way, you will imitate the OVHcloud user. Once validated locally, you can deploy your app first with CPUs which are cheaper compared to GPUs.

## Deployments

### My deployment has failed

An AI Deploy app has a workflow in multiple steps, the `FAILED` status being one of them. This state happens when OVHcloud is unable to deploy your app, meaning the infrastructure side (backend) is working fine but something is broken on the image side. You can find more details about AI Deploy workflow on the [AI Deploy - Billing and lifecycle](https://docs.ovh.com/es/publiccloud/ai/deploy/billing/) page.

Main items to troubleshoot:

- Typography in your repository name, image or version name. Test deploying your image locally first.
- Your Docker image is not following mandatory guidelines, such as OVHcloud user. See [AI Deploy - Build & use custom Docker image](https://docs.ovh.com/es/publiccloud/ai/deploy/build-use-custom-image/).
- Your Docker image is in a private registry and you did not authorize OVHcloud to access it.
- You have reached your quotas in terms of CPUs or GPUs. You can check them via the OVHcloud Control Panel (Project Management / Quotas) or via the `ovhai CLI` command `ovhai me`.

If you are using `ovhai CLI`, you can get more more details about your command with the `ovhai debug` command, and `ovhai app logs <app_ID>` to download logs history.

### My deployment is in error

While a deployment in `FAILED` state is due to a problem on the image, repository, etc., an app in `ERROR` state can occur when AI Deploy in encountering an issue.

Try redeploying your app, and modify the targeted datacenter for example. 
As in the previous answer, when using our CLI you can get more more details about your command with the `ovhai debug` command, and `ovhai app logs <app_ID>` to download logs history.

If the issue persists, please contact our support teams.

### My Deployment seems very long

When AI Deploy initializes your app, the Docker image is pulled (downloaded) in our infrastructure and replicated over the replicas, if any. 
The larger the Docker image is, the longer it will take to be deployed on AI Deploy side.

Also, since we pull the data from a registry of your choice, if this particular registry is experiencing some issues or is restricted in terms of bandwidth or throughput, it may cause some slowness.

In an ideal situation, for a Docker image of approximately 1GB, without external data linked, it should take less than 10 minutes.

### My deployed app does not scale

AI Deploy provides manual scaling and autoscaling, allowing you to scale up or down based on triggers such as CPU or RAM usages.
Find more information on the official documentation about [scaling strategies](https://docs.ovh.com/es/publiccloud/ai/deploy/apps-deployments/).

If your app does not scale:

- Check if you deployed your app with manual or autoscaling.
- Verify triggers (CPU or RAM usage) and their value. By default the value is at 75%.
- Open the Monitoring dashboard of your app (Grafana dashboard is provided for each app) and check if the threshold has been reached. 
- Refer to the following load-testing tutorial which also provides a dashboard example to follow your scaling: [AI Deploy - How to load test your application with Locust](https://docs.ovh.com/es/publiccloud/ai/deploy/load-test-app/).


### My deployed app is very slow

Slowness may find its roots in multiple reasons. Indeed, each deployed app is the combination of software code and resources, such as compute and network.

If you are experiencing slowness, here are some actions to investigate:

- Open the Monitoring dashboard for your app (Grafana dashboard is provided for each app) and check if some resources are reaching 90/100%, such as RAM, CPU, GPU or network. You can also check the overall latency.
- If nothing is visible, it can be an issue between the client (where the query comes) and the deployed app. As an example, if you are contacting your apps from a geographically distant point, it will add latency. Try reducing the distances in your architecture.
- Your Docker image itself may be the root cause. Try running your Docker image locally, and query your app locally. Some apps might be heavy to run or not well optimized.

### My deployment has crashed

Like any cloud product, AI Deploy might experience hardware or software failures over time. To mitigate the risk on your side, please deploy your app on at least two replicas, allowing us to provide high availability. At this time, all replicas are in the same region, but it will prevent them from a physical server failure.

Another root cause may be your own Docker image, for example by writing an uncontrolled amount of data into your working directory.

We also recommend orchestrating your workflow with third party tools such as Airflow, Prefect, Dagster or Kestra, allowing you to relaunch an app once it has crashed.

If your app crashed and you are using `ovhai CLI`, you can get more information with `ovhai app logs <app_ID>` to download logs history.

### My data is not synchronized back

AI Deploy does not synchronize back your remote data. Please follow [official guidelines to build & use custom Docker image](https://docs.ovh.com/es/publiccloud/ai/deploy/build-use-custom-image/).

## Connectivity

### I don't understand how I can connect to my app

AI Deploy provides an HTTP endpoint for each deployed app. You can find your endpoint via the OVHcloud control panel (*Public Cloud / AI Deploy / My app / Access URL*), API or CLI.

An HTTP endpoint will look like this: `https://<unique_id>.app.gra.ai.cloud.ovh.net`

Your app will be directly exposed to this HTTP endpoint and linked to a port (by default, port 8080).

Depending on what you deployed, you then just have a REST endpoint or a Web interface. You can refer to our [Getting Started guide](https://docs.ovh.com/es/publiccloud/ai/deploy/getting-started/) for full explanations.

### I'm unable to connect (unauthorized)

When you deploy an app, you can opt for unrestricted access (open to the internet) or secured access.

While unrestricted access means that everyone is authorized, a secured access will require credentials. Two options are available:

- An AI user. It can be seen as a user and password restriction. Quite simple but not a lot of granularity.
- An AI token (preferred solution). A token is very effective since you can link them with labels. For example, a token for a specific app ID, for a team, ...

If you selected a restricted access, don't forget to [generate an applicative token](https://docs.ovh.com/es/publiccloud/ai/deploy/tokens/). 

### I need more than one port to be exposed

By design, AI Deploy links your app to one HTTP endpoint and one port (default is 8080). If you need more than one port, best practice is to split your deployment in multiple apps.
If you cannot afford it, you can tweak your HTTP endpoint as follows: `https://<unique_id>-<specific_port>.app.<region>.ai.cloud.ovh.net`.

For example, just add `-8000` after your unique ID and you will be routed to this specific port.

## Billing

### I don't understand how much it will cost to deploy an app

The AI Deploy pricing model is quite simple compared to competitors. You pay for the compute resources (CPUs/GPUs) during the lap of time you will use them.

- Basic example : If you deploy one app with 2 x GPU at 1 euro each for 6 hours, you will pay 12 euros at the end. (2 x 1€ x 6h), whatever the amount of calls or users received.

Prices are shown statically on our [official website](http://www.ovhcloud.com), inside our Public Cloud section. For a dynamic estimation, use the OVHcloud Control Panel. An estimation will be available before launching a deployment.

Also, for more detailed information, please refer to our [AI Deploy - Billing and lifecycle](https://docs.ovh.com/es/publiccloud/ai/deploy/billing/) page.

### I'm unable to get a "pay per call" deployment

So far, only a "pay per minute" model is available. We also share the ambition for a "pay per call" model, but it is not available for now.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)