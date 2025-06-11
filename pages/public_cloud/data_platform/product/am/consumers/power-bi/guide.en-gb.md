---
title: "Plug Power BI to your ForePaaS"
updated: 2025-02-15
---

## Objective

Are you or your teammates already proficient with [Microsoft Power BI](https://powerbi.microsoft.com/en-us/getting-started-with-power-bi/)? If you want to use it as your analytics solution on top your ForePaaS data system, this guide is for you.

![pbi](images/powerbi-001.jpeg){.thumbnail}

> [!warning]
> The PowerBI connector requires a [query engine to be activated](/pages/public_cloud/data_platform/product/am/resources) on your Project.

The configuration is done in two parts. First you need to [configure the consumer on ForePaaS](/pages/public_cloud/data_platform/product/am/consumers/power-bi#configuration-on-forepaas) and then [configure the connector on Power BI Desktop](/pages/public_cloud/data_platform/product/am/consumers/power-bi#configuration-on-power-bi).

## Configuration on ForePaaS

If you haven't done so already, [add a new](/pages/public_cloud/data_platform/product/am/consumers/00-consumers-index#create-a-consumer) *Power BI* consumer in the Analytics Manager. Else, just edit it.

Since the ForePaaS connector for Power BI is still in beta release and not yet certified by Microsoft, you have to **download the extension**, either manually from [this link](https://hq.forepaas.io/am/consumers/power_bi/ForePaaS.mez) or from the interface shown below.

![pbi](images/powerbi-download.png){.thumbnail}

> [!primary]
> If you are interested in having the ForePaaS connector certified by Microsoft, please upvote the [idea on the Power BI Ideas page](https://ideas.powerbi.com/ideas/idea/?ideaid=c643dd77-1484-ec11-b820-501ac50a6ef7)!

Power BI users will have to be registered in a Project's Identity Access Manager (IAM) in order to access its data. They will only access the data associated to their [roles and groups](/pages/public_cloud/data_platform/product/iam/users/00-users-index).

You can **easily grant full access to a new Power BI user**, by going to [the *Grant permissions* section in the consumer options](/pages/public_cloud/data_platform/product/am/consumers/00-consumers-index#manage-permissions-for-a-consumer39s-users). 

For more fine-grained permissions, you can set specific [roles in the IAM](/pages/public_cloud/data_platform/product/iam/users/roles). The Power BI connector requires the following permissions:

- *Data Manager | Source | Read* and *Data Manager | Table | Read*: to import a table's data inside Power BI
- *Analytics Manager | Repository | Read*: to list queries
- *Analytics Manager | Query | ** : to import a query's results inside Power BI
- *Advanced Data Access Control | Read* : to access the data inside the Project

## Configuration on Power BI

Once you have [downloaded](https://hq.forepaas.io/am/consumers/power_bi/ForePaaS.mez) the connector *.MEZ* file, follow this procedure to use it on **Power BI Desktop**. 

### Allow your Power BI Desktop to use a custom connector

> [!primary]
> If you are interested in having the ForePaaS connector certified by Microsoft, please upvote the [idea on the Power BI Ideas page](https://ideas.powerbi.com/ideas/idea/?ideaid=c643dd77-1484-ec11-b820-501ac50a6ef7)!

Open *Power BI Desktop*. Click on **File** in the header.

![pbi](images/powerbi-install1.png){.thumbnail}

Open the **Options and settings** section, then select **Options**.

![pbi](images/powerbi-install2.png){.thumbnail}

Find the **Global > Security** section, then activate the following option: *(Not Recommended) Allow any extension to load without validation or warning*.

![pbi](images/powerbi-install3.png){.thumbnail}

This will allow you to get data from a source not yet certified by Microsoft, in this case ForePaaS.

Now, **close Power BI Desktop** for the changes to be applied.

### Install the connector

Create this folder in your user directory:

```
C:\Users\[Your_Windows_User_Name]\Documents\Microsoft Power BI Desktop\Custom Connectors
```

If the *Microsoft Power BI Desktop\Custom Connectors* folders don't exist, create them.

> [!warning]
> Make sure that the folders have exactly the same names as above, or you won't be able to find the ForePaaS connector inside Power BI Desktop.

Copy the connector *.MEZ* file that you have previously downloaded into this new directory. 

![pbi](images/powerbi-install4.png){.thumbnail}

You can now restart Power BI Desktop.

### Import your first data from ForePaaS

Click on **Get Data**.

![pbi](images/powerbi-get-data.png){.thumbnail}

Search for *ForePaaS*, and select the connector.

![pbi](images/powerbi-forepaas-connector.png){.thumbnail}

You now have to enter the URL of the ForePaaS Project you want to connect to. You can easily find this URL on the page of the consumer on the ForePaaS Platform.

![pbi](images/powerbi-dp-url-consumer.png){.thumbnail}

![pbi](images/powerbi-dp-url.png){.thumbnail}

If you are not yet authenticated to this ForePaaS Project, you will be asked to authenticate at this step. 

![pbi](images/powerbi-auth1.png){.thumbnail}

Use one of the [authentication methods](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index) activated for Power BI on your ForePaaS Project to sign in.

When you are successfully authenticated, press **connect** to continue.

![pbi](images/powerbi-auth2.png){.thumbnail}

At the moment, it is only possible to use the *Import* mode from Power BI - i.e. to import the data locally into your Power BI file before running queries (as opposed to the *DirectQuery* mode). The connector lets you import either:

- tables from the Data Manager
- [queries from the Analytics Manager](/pages/public_cloud/data_platform/product/am/queries/00-queries-index)

Choose one or multiple tables or queries to be imported into Power BI. 

> [!primary]
> We recommend you offload as much of the data processing to ForePaaS as it was engineered for this very purpose from the start, and heavy pre-processing can cause significant slowdowns in Power BI. Only the final aggregated tables or queries should be used in Power BI.

> [!warning]
> Make sure a [query engine](/pages/public_cloud/data_platform/product/am/resources) is activated on your ForePaaS Project or you won't be able to preview and import data from ForePaaS.

![pbi](images/powerbi-import.png){.thumbnail}

You can now create your first visualizations on your ForePaaS data using Power BI Desktop. 

> [!primary]
> If the data is updated on ForePaaS, graphs can be manually refreshed with the latest data by pressing the refresh button in the Power BI header. 

![pbi](images/powerbi-dashboard.png){.thumbnail}

## Go further

Join our [community of users](/links/community).