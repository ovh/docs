---
title: AI Apps - Getting started
slug: apps/getting-started
excerpt: Discover AI Apps and unfold your first application
section: AI Apps guides
order: 02
---

**Last updated 11th July 2022.**

## Objective

OVHcloud provides a set of managed AI tools designed for building your machine learning projects.

This guide explains how to get started with OVHcloud AI Apps by deploying your first application through the Control Panel.

## Requirements

- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- a [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account

## Instructions

### Subscribe to AI Apps

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `AI Apps`{.action} in the left-hand navigation bar under **AI & Machine Learning**.

Click on the `Deploy an AI App`{.action} button and accept terms and conditions if any.

Once clicked, you will be redirected to the creation process detailed below.

![AI Apps app subscribe](images/ai_app_subscribe.png){.thumbnail}

#### Step 1: Select the location

Select where your AI App will be hosted, meaning the physical location.

> [!primary]
>
> OVHcloud provides multiple datacenters. You can find the capabilities for AI Apps in the guide [AI Apps capabilities](https://docs.ovh.com/us/en/publiccloud/ai/apps/capabilities/).
>

#### Step 2: Select the application to deploy

AI Apps allows a user to deploy applications from two sources:

- From an OVHcloud catalog with already built-in AI models and applications.
- From your own Docker container, giving you the full flexibility to deploy what you want.

In this tutorial, we will select an OVHcloud Docker image to deploy your first **AI App**.

Enter the name of the image: `ovhcom/ai-deploy-hello-World`

> [!primary]
>
> You can find this image on the [OVHcloud DockerHub](https://hub.docker.com/r/ovhcom/ai-deploy-hello-world). For more information about this Docker image, please check the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/apps/getting-started/flask/hello-world-api/Dockerfile).
>

![AI App subscribe](images/ai_app_image.png){.thumbnail}

The objective is to deploy and call a simple **Flask API** for a kind of *Hello World*. The API welcomes you on your first **AI App** by sending back `Hello` followed by the `name` you sent and the end of the sentence.

> [!primary]
>
> If you want to deploy your own container, you need to comply with a few rules like adding a specific user. Follow our [Build and use custom images](https://docs.ovh.com/us/en/publiccloud/ai/training/build-use-custom-image/) guide.
>

#### Step 3: Assign compute resources

An AI App needs compute resources to be deployed, from a minimum of one instance to a maximum of ten.
Each instance will be billed based on the amount of running time, whether or not you use your AI App.

Each node is composed of:

- CPU or GPU resources
- Local storage
- Network bandwidth

You can modify the **Resource Size** to adjust the amount of CPU or GPU cores, RAM and Network Bandwidth.
Then you can modify the **Number of instances** on which your AI Apps will be deployed.

To benefit from High Availability, a minimum of 2 instances are required.

For our first deployment, we will select two instances.

#### Step 4: Configure your AI App

First, choose a name for your AI App or keep the automatically generated name.

Then, you have the option to add some Key/Value labels to filter or organize your AI App access.

As an example, add a label with **Key=owner** and **Value=elea**.

![AI App label](images/ai_app_labels.png){.thumbnail}

The last parameter to select is the **Access rule**.
Either you restrict your AI App access to selected tokens, or you allow any access.
Use this option carefully; usually a Public access is used for a test, but not in production since everyone will be able to use it.

We will select **Restricted Access** for this deployment.

#### Step 5: Review and launch your AI App

This final step is a summary about your AI App deployment. You can review the previously selected options and parameters.
Launch your AI App by clicking on `Deploy an AI App`{.action}

Congratulations, your first AI App is now running on production!

### Connect to your first AI App

AI Apps can be your own Docker container or applications proposed by the OVHcloud ecosystem.

In this tutorial, we deployed a Flask API allowing us to return.
There is no web interface. What is given is an API endpoint that you can reach via HTTP.

#### Step 1: Check your AI Apps status

First, go check your AI App details and verify that your AI App has a **running** status. Please also verify that your labels are clearly mentioned.

In this example, we added the label **owner=elea** and two labels were automatically added by OVHcloud.

![AI App details](images/ai_app_details.png){.thumbnail}

#### Step 2: Generate a security token

During the AI Apps deployment process, we selected "restricted access". To query your AI App, you first need a valid security token.

In your OVHcloud Control Panel, go to your AI Apps list. Select the **Token** tab.

Click on the `New token`{.action} button then fill in a name, a label selector, a role and region as below:

![AI App details](images/ai_app_token.png){.thumbnail}

A few explanations:

- **Label selector**: you can restrict the token granted by labels. You can note a specific id, a type, or any previously created label such as **owner=elea** in our case.
- **Role**: *AI Platform Operator* can read and manage your AI App. *AI Platform Read only* can only read your AI App.
- **Region**: tokens are regionalized. Select the region related to your AI App.

#### Generate your first curl query

Now that your AI App is running and token generated, you are ready for your first query.

You can find the cURL example in the bottom part of your AI App, with standard parameters and JSON output format.

Since we are on restricted access, you need to specify the authentication token in the header following this format:

```bash
-H "Authorization: Bearer $YOURTOKENHERE"
```

In our case, the exact cURL code is:

```bash
 curl --request POST
    --url https://9b5b651e-8514-43d0-ae68-af801771542f.app.gra.training.ai.cloud.ovh.net
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

url = "https://9b5b651e-8514-43d0-ae68-af801771542f.app.gra.training.ai.cloud.ovh.net"

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

That's it! To go further, you can imagine deploying an AI model thanks to AI Apps. Refer to this [tutorial](https://docs.ovh.com/us/en/publiccloud/ai/apps/tuto-gradio-sketch-recognition/).

### Stop and delete your AI App

You can keep your AI App running as long as you want. At any time, you may **stop** your application in your AI App details:

![AI App details](images/ai_app_stop.png){.thumbnail}

Once stopped, your AI App will free up the previously allocated compute resources. Your endpoint is kept and if you restart your AI App, the same endpoint can be reused seamlessly.
Also, when you stop your AI App, you don't book compute resources anymore which means you don't have expenses for this part. Only expenses for attached storage may occur.

If you want to completely **delete** your AI App, just click on the `delete`{.action} action.
Be sure to also delete your Object Storage data if you don't need it anymore.

## Feedback

Please feel free to send us your questions, feedback and suggestions to help our team improve the service on the OVHcloud [Discord server](https://discord.com/invite/KbrKSEettv)!
