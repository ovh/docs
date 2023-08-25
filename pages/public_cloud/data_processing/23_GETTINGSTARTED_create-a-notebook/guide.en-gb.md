---
title: Notebooks for Apache Spark - Getting started
excerpt: Learn how to create Notebooks for Apache Spark
updated: 2023-04-26
---


> [!primary]
>
> The Notebooks for Apache Spark feature is in `alpha`. During the alpha-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, while this phase is not complete.
>

## Objective

The OVHcloud Data Processing Notebooks for Apache Spark service provides you Jupyter notebooks, linked to an Apache Spark environment totally configured that can be propagated to all nodes and executors without installation.

This guide will cover the creation of a new notebook from the OVHcloud Control Panel and the OVHcloud APIv6.

## Requirements

For the OVHcloud Control Panel:

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A Public Cloud user with the `administrator` role
- Data Processing activated (see [How to activate the Data Processing service](/pages/public_cloud/data_processing/30_HOWTO_activate_project) for details)

For the OVHcloud APIv6:

- [OVHcloud API credentials](/pages/public_cloud/data_processing/38_HOWTO_use-with-ovh-api)
- An OVHcloud account
- An activated Public Cloud project in your OVHcloud account (see [How to create a project](/pages/public_cloud/compute/create_a_public_cloud_project) and [How to activate the Data Processing service](/pages/public_cloud/data_processing/30_HOWTO_activate_project) for details)

## Definition

**Notebooks** are files which contain both computer code (e.g. Python) and rich text elements (paragraph, equations, figures, links, etc.). Notebooks are both human-readable documents containing the analysis description and the results (figures, tables, etc.) as well as executable files which can be run to perform data analysis. It's vastly used across the developer world, especially in the data and artificial intelligence fields.

The advantage compared to doing your own setup is that everything is already installed for you, and that you pay only for your notebooks while they are running.

Each notebook is linked to a **Public Cloud** project and specific hardware resources.

You can create notebooks in the [OVHcloud Control Panel](#controlpanel) or use the [OVHcloud APIv6](#apiv6).

## Instructions

### OVHcloud Control Panel <a name="controlpanel"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Data Processing by clicking on `Data Processing`{.action} (1) in the left-hand menu and then click on `Create a notebook`{.action} (2).

![Create a Notebook 00](images/Creating-a-notebook00.png){.thumbnail}

In the Control Panel the name is generated automatically, remember it for later. Select a framework (1) and a region (2).

Then choose the notebook privacy setting (3). Be careful with your sensitive data in case you choose public access.

![Create a Notebook 01](images/Creating-a-notebook01.png){.thumbnail}

Now select the dimensioning necessary for the job:

(1) Select your notebook.

(2) Select the cluster size. The dimensioning of the cluster is proposed here as an indication and will become final only when the kernel is selected from JupyterLab.

(3) After configuring your notebook, check in the summary box at the top right that all information is correct.

(4) Then click on `Create your notebook`{.action} to create your notebook. 

![Create a Notebook 02](images/Creating-a-notebook02.png){.thumbnail}

You will be redirected to the notebook dashboard. There you will find information such as the notebook life cycle (1) and the notebook ID (2). 
To access your notebook, click on `JupyterLab`{.action} (3).

![Create a Notebook 03](images/Creating-a-notebook03.png){.thumbnail}

Once on the notebook, you will be able to choose the size of the cluster. If you want to find the cluster costs, refer to the dashboard of your notebook as explained in the previous step. 

![Create a notebook 04](images/Creating-a-notebook04.png){.thumbnail}

Now you can start to enter your code in the code section (1):

```python
print("Hello World")
```

Run the code by pressing the `▶️`{.action} button (2):

```bash
Hello World
```

Your code is executed in your browser. You can save your example by clicking `Save`{.action} in the `File` menu.

![Create a notebook 05](images/Creating-a-notebook05.png){.thumbnail}

To see all your active kernels, click on the "Terminals and running kernels" menu (3).

To change kernels, click on `Select kernel`{.action} (4) and select a new kernel (changing the cluster may include additional costs).

At the bottom left, a small summary (5) shows how many kernels are used with which cluster.

#### Stopping the Data Processing notebook

Go back to the OVHcloud Control Panel. In the `Data Processing`{.action} panel you can stop each notebook by clicking on `...`{.action}.

![Create a notebook 06](images/Creating-a-notebook06.png){.thumbnail}


### OVHcloud APIv6 <a name="apiv6"></a>

In the [OVHcloud APIv6](https://api.ovh.com/console/) you can find all the Data Processing endpoints in the `cloud` section. 

![Create a notebook 07](images/Creating-a-notebook07.png){.thumbnail}

Scroll down inside the `cloud` section until you reach the `/cloud/project/{serviceName}/dataProcessing/notebooks/...` endpoints.

Once you have expanded the section, you can try out the endpoints directly in the UI by clicking on them.

>[!primary]
>
> The "serviceName" parameter for each endpoint of the `cloud` section requires your Public Cloud project ID.

For further information about an endpoint, the `Response Class` tab under the `Execute`{.action} button shows what the API response will look like. Switch the tabs to display wrapper code examples.

![Create a notebook 08](images/Creating-a-notebook08.png){.thumbnail}

Before creating a notebook, you can list all the existing notebooks linked to a Public Cloud project by entering your Public cloud Project ID. This way, you can access all the notebook IDs related to your Public Cloud project.

![Create a notebook 09](images/Creating-a-notebook09.png){.thumbnail}

To create a new notebook, use the endpoint `/cloud/project/{service name}/dataProcessing/notebooks`. Specify the Public Cloud project ID (0) and fill in the other fields.
Define your `spark` notebook and choose a version (1). Define a name and region for your notebook (2).

Then click `Execute` to generate the notebook (3).

![Create a notebook 10](images/Creating-a-notebook10.png){.thumbnail}

Finally, you will be able to get several pieces of information including the ID and URL of the notebook. To access it, click on the URL and you will be redirected to the notebook as shown in step 1. 

![Create a notebook 11](images/Creating-a-notebook11.png){.thumbnail}

You can get notebook information at any time from the endpoint `Get notebook information` by entering the Public Cloud project ID. 

![Create a notebook 12](images/Creating-a-notebook12.png){.thumbnail}

You can also start or stop your notebook from the APIv6. This allows you to free up resources when you don't need them. 

![Create a notebook 13](images/Creating-a-notebook13.png){.thumbnail}

When you are done with your notebook, you can delete it with its Id to free the resources it uses. 

![Create a notebook 14](images/Creating-a-notebook14.png){.thumbnail}


### Considerations

- A notebook will run indefinitely until manually interrupted, meaning that it will be billed for this runtime.
- When you stop a Apache Spark notebook, you release the compute resources, but we keep the data from your workspace. It will be billed at the price of OVHcloud Object storage.
- Billing is per minute. Each started minute is due.

### Notebook lifecycle

During the lifetime of an Apache Spark notebook it will transition between the following statuses:

> [!primary]
>
> - Billing starts once a notebook is `Pending` and ends when its status switches to `Cancelling`.
> - Only notebooks in the states `Pending` and `In service` are included in the resource quota computation.
>


- `Pending`: The notebook is starting.
- `In service`: The notebook is running and can be accessed from your browser.
- `Cancelling`: The notebook is still running, but an interruption order was received.
- `Stopped`: The notebook is stopped. Compute resources are released.
- `Deleted`: The notebook data is fully deleted, no further payment is due.

## Go further

To go further and use the Apache Spark notebook, you can follow our tutorials:

- [wordcount-spark](/pages/public_cloud/data_processing/41_TUTORIAL_wordcount#objective)
- [Calculating π number with Apache Spark](/pages/public_cloud/data_processing/40_TUTORIAL_calculate_pi#objective)

Join our community of users on <https://community.ovh.com/en/>.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
