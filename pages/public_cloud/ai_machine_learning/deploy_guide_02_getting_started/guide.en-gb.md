---
title: AI Deploy - Getting started
excerpt: Discover AI Deploy and unfold your first application
updated: 2024-05-29
---

> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

OVHcloud provides a set of managed AI tools designed for building your Machine Learning projects.

This guide explains how to get started with OVHcloud AI Deploy, covering the deployment of your first application using either the Control Panel (UI) or the [ovhai Command-Line Interface](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account

## Instructions

### Subscribe to AI Deploy

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `AI Deploy`{.action} in the left-hand navigation bar under **AI & Machine Learning**.

Click on the `Deploy an AI Deploy app`{.action} button and accept terms and conditions if any.

Once clicked, you will be redirected to the creation process detailed below.

![AI Deploy app subscribe](images/ai_app_subscribe.png){.thumbnail}

### Deploying your first application

#### Step 1: Select the location

Select where your AI Deploy app will be hosted, meaning the physical location.

> [!primary]
>
> OVHcloud provides multiple datacenters. You can find the capabilities for AI Deploy in the guide [AI Deploy capabilities](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities).
>

#### Step 2: Select the application to deploy

AI Deploy allows a user to deploy applications from two sources:

- From an OVHcloud catalog with already built-in AI models and applications.
- From your own Docker image, giving you the full flexibility to deploy what you want. This image can be stored on many types of registry ([OVHcloud Managed Private Registry](https://www.ovhcloud.com/en-gb/public-cloud/managed-private-registry/), [Docker Hub](https://hub.docker.com/), [GitHub packages](https://github.com/features/packages), ...) and the expected format is `<registry-address>/<image-identifier>:<tag-name>`.

In this tutorial, we will select an OVHcloud Docker image to deploy your first **AI Deploy app**.

Enter the name of the image: `ovhcom/ai-deploy-hello-world`

> [!primary]
>
> You can find this image on the [OVHcloud DockerHub](https://hub.docker.com/r/ovhcom/ai-deploy-hello-world). For more information about this Docker image, please check the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/apps/getting-started/flask/hello-world-api/Dockerfile).
>

![AI Deploy app subscribe](images/ai_app_image.png){.thumbnail}

The objective is to deploy and call a simple **Flask API** for a kind of *Hello World*. The API welcomes you on your first **AI Deploy app** by sending back `Hello` followed by the `name` you sent and the end of the sentence.

> [!primary]
>
> If you want to deploy your own image, you need to comply with a few rules like adding a specific user. Follow our [Build and use custom images](/pages/public_cloud/ai_machine_learning/training_tuto_02_build_custom_image) guide.
>

You can also provide a new Docker command, entrypoint by enabling the `Enter the Docker command to launch in the container` section. This will override the one of your Docker image, if existing.

#### Step 3: Assign compute resources and specify scaling strategy

An AI Deploy app needs compute resources to be deployed, from a minimum of one instance to a maximum of ten.
Each instance will be billed based on the amount of running time, whether you use your AI Deploy app.

Each node is composed of:

- CPU or GPU resources
- Local storage
- Network bandwidth

You can modify the **Resource Size** to adjust the amount of CPU or GPU cores, RAM and Network Bandwidth.

![AI Deploy app details](images/ai_app_gpus.png){.thumbnail}

Then you can modify the **Number of instances** on which your AI Deploy app will be deployed, according to the selected scaling strategy.

![AI Deploy app details](images/ai_app_scaling_strategies.png){.thumbnail}

**When to choose static scaling?**

The **static scaling** strategy allows you to choose the number of replicas on which the app will be deployed. For this method, the minimum number of replicas is **1** and the maximum is **10**.

- Static scaling can be used if you want to have fixed costs.
- This scaling strategy is also useful when your consumption or inference load are fixed.

**When to choose autoscaling?**

With the **autoscaling strategy**, it is possible to choose both the minimum number of replicas (1 by default) and the maximum number of replicas. **High availability** will measure the average resource usage across its replicas and add instances if this average exceeds the specified average usage percentage threshold. Conversely, it will remove instances when this average resource utilisation falls below the threshold. The monitored metric can either be `CPU` or `RAM` and the threshold is a percentage (integer between 1 and 100).

- You can use autoscaling if you have irregular or sawtooth inference loads.

More generally, a minimum of 2 instances are required to benefit from High Availability.

For our first deployment, we will select two instances.

#### Step 4: Attach containers (optional)

If your application is based on external data, such as scripts or models, you can upload this data to an Object Storage or a GitHub repository beforehand. 

This data can be mounted on your app during this step. Indeed, you will have the option to import some Object Storage or GitHub repositories, ensuring all required components are integrated for the successful operation of your AI application. You can attach as many volumes as you want to your app with various options.

You can also mount an Object Storage as an output folder for example, to retrieve the data generated by your application.

In both cases, you will have to specify:

- `Storage container` or `Git repository URL`: The name of the container to synchronise, or the GitHub repository URL (the one that ends by `.git`).
- `Mount directory`: The location in the app where the synced data is mounted.

There are also optional parameters:

- `Prefix`: Objects in the container are filtered on the basis of this prefix, only matching objects are synced.
- `Authorisation`: The permission rights on the mounted data. Available rights are **Read Only (ro)**, **Read Write (rw)**. Default value is rw.
- `Cache`: Whether the synced data should be added to the project cache. Data in the cache can be used by other apps without additional synchronization. To benefit from the cache, the new apps also need to mount the data with the cache option.

To learn more about data, volumes and permissions, check out the [data](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) page.

#### Step 5: Configure your AI Deploy app

First, choose a name for your AI Deploy app, or accept the automatically generated name if it meets your needs, to make it easier to manage all your apps.

Then, you have the option to add some Key/Value labels to filter or organize your AI Deploy app access.

As an example, add a label with **Key=owner** and **Value=elea**.

![AI Deploy app label](images/ai_app_labels.png){.thumbnail}

This will make the application accessible only to users who have the token associated with this label (key/value).

Moreover, the default exposed port for your app's URL is `8080`. However, if you are using a specific framework that requires a different port, you can override the default port and configure your application to use the desired alternative port.

![AI Deploy app configuration](images/ai_app_configuration.png){.thumbnail}

The last parameter to select is the **Access rule**. You can opt for unrestricted access (open to the internet) or secured access.

Unrestricted access means that everyone is authorized. Use this option carefully. Usually public access is used for tests, but not in production since everyone will be able to use your app.

On the other hand, a secured access will require credentials to access the app. Two options are available in this case:

- An AI Platform user. It can be seen as a user and password restriction. Quite simple but not a lot of granularity.
- An AI token (preferred solution). A token is very effective since you can link them with labels as we did in step 5 (**Key=owner**; **Value=elea**). For example, a token for a specific app ID, for a team, ...

We will select **Restricted Access** for this deployment.

#### Step 6: Review and launch your AI Deploy app

This final step is a summary about your AI Deploy app deployment. You can review the previously selected options and parameters.
Launch your AI Deploy app by clicking on `Deploy an AI Deploy app`{.action}

Congratulations, your first AI Deploy app is now running on production!

The same deployment process can be carried out with the `ovhai` CLI, which can be downloaded [here](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli). For more information, consult the [CLI - Launch an AI Deploy app](/pages/public_cloud/ai_machine_learning/cli_18_howto_deploy_app) documentation.

### Connect to your first AI Deploy app

AI Deploy can be your own Docker container or applications proposed by the OVHcloud ecosystem.

In this tutorial, we deployed a Flask API allowing us to return.
There is no web interface. What is given is an API endpoint that you can reach via HTTP.

#### Step 1: Check your AI Deploy app status

First, go check your app details and verify that your AI Deploy app has reached the **RUNNING** status. Please also verify that your labels are clearly mentioned.

In this example, we added the label **owner=elea** and two labels were automatically added by OVHcloud.

![AI Deploy app details](images/ai_app_details.png){.thumbnail}

#### Step 2: Generate a security token

During the AI Deploy apps deployment process, we selected "restricted access". To query your app, you first need a valid security token.

In your OVHcloud Control Panel left menu, go to the `AI Dashboard`{.action} in the `AI & Machine Learning`{.action} section. Select the `Users & tokens`{.action} tab.

Click on the `Create a token`{.action} button then fill in a name, a label selector, a role and region as below:

![AI Deploy app details](images/ai_app_token.png){.thumbnail}

A few explanations:

- **Label selector**: you can restrict the token granted by labels. You can note a specific id, a type, or any previously created label such as **owner=elea** in our case.
- **Role**: *AI Platform Operator* can read and manage your AI Deploy app. *AI Platform Read only* can only read your AI Deploy app.
- **Region**: tokens are regionalized. Select the region related to your AI Deploy app.

#### Generate your first cURL query

Now that your AI Deploy app is running and token generated, you are ready for your first query.

Since we are on restricted access, you will need to specify the authentication token in the header following this format:

```bash
-H "Authorization: Bearer $YOURTOKENHERE"
```

In our case, the exact cURL code is:

```bash
 curl --request POST
    --url https://9b5b651e-8514-43d0-ae68-af801771542f.app.gra.ai.cloud.ovh.net
    -H "Authorization: Bearer WixOC/dmSoK3d0YSd20UvLMzbSVxMTMosnz6FcBQOQDlqxAsR5BezCVKtYfu18e"
    --header 'Content-Type: application/json'
    --data ' "Elea" '
```

 Giving us

```bash
 "Hello Elea. Congratulations, you have launched your first AI App!"
```

If you see this message with the **name** you provided, you have successfully launched your first app!

#### Generate your first Python query

If you want to query this API with Python, this code sample with Python Request library may suit you:

``` python
import requests
import json
from requests.structures import CaseInsensitiveDict

url = "https://9b5b651e-8514-43d0-ae68-af801771542f.app.gra.ai.cloud.ovh.net"

headers = CaseInsensitiveDict()
headers = {'content-type': 'application/json',
           'Accept-Charset': 'UTF-8',
           'Authorization': 'Bearer WixOC/dmSoK3d0YSd20UvLMzbSVxMTMosnz6FcBQOQDlqxAsR5BezCVKtYfu18eC'}

data = "Elea"
j_data = json.dumps(data)

r = requests.post(url, data = j_data, headers = headers)

print(r.status_code)
print(r.text)
```

Result:

```bash
200
 "Hello Elea. Congratulations, you have launched your first AI App!"
```

That's it!

### Stop and delete your AI Deploy app

You have the flexibility to keep your AI Deploy app running for an indefinite period. At any time, you can easily stop your application, using either the UI (OVHcloud Control Panel) or the `ovhai` CLI.

> [!tabs]
> **Using the Control Panel (UI)**
>>
>> First, go to the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager).
>>
>> Then, select the `AI Deploy`{.action} section (in the AI & Machine Learning category) and access the details of your application by clicking on its UUID. 
>> 
>> Then, you will be able to click the `...`{.action} button, and stop your AI Deploy application.
>>
>> ![image](images/ai_app_stop.png){.thumbnail}
>>
>> Once stopped, your AI Deploy app will free up the previously allocated compute resources. Your endpoint is kept and if you restart your AI Deploy app, the same endpoint can be reused seamlessly.
>> Also, when you stop your app, you no longer book compute resources which means you don't have expenses for this part. Only expenses for attached storage may occur.
>>
>> If you want to completely **delete** your AI Deploy app, just click on the `delete`{.action} action.
>> Be sure to also delete your Object Storage data if you don't need it anymore, by going in the `Object Storage`{.action} section (in the Storage category).
>>
> **Using ovhai CLI**
>>
>> To follow this part, make sure you have installed the [ovhai CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli) on your computer or on an instance.
>>
>> You can easily stop your AI Deploy application using the following command:
>>
>> ```bash
>> ovhai app stop <APP_UUID>
>> ```
>>
>> Once stopped, your AI Deploy app will free up the previously allocated compute resources. Your endpoint is kept and if you restart your AI Deploy app, the same endpoint can be reused seamlessly.
>>
>> ```bash
>> ovhai app start <APP_UUID>
>> ```
>>
>> Also, when you stop your app, you no longer book compute resources which means you don't have expenses for this part. Only expenses for attached storage may occur.
>>
>> If you want to completely **delete** your AI Deploy app, just run the following command:
>>
>> ```bash
>> ovhai app delete <APP_UUID>
>> ```
>> 
>> Be sure to also delete your Object Storage data if you don't need it anymore. To do this, you will need to empty it first, then delete it:  
>>
>> ```bash
>> ovhai bucket object delete --all <object_storage_name>@<region>
>>
>> ovhai bucket delete <region> <object_storage_name>
>> ```

## Go further

- You can imagine deploying an AI model for sketch recognition thanks to **AI Deploy**. Refer to this [tutorial](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition).
- Do you want to use **Streamlit** in order to create an app? [Here it is](/pages/public_cloud/ai_machine_learning/deploy_tuto_02_flask).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback
Please feel free to send us your questions, feedback and suggestions to help our team improve the service on the OVHcloud [Discord server](https://discord.com/invite/KbrKSEettv)!
