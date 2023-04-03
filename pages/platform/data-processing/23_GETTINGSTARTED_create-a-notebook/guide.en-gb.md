---
title: Data Processing Notebooks - Getting started
slug: Data Processing Apache Spark notebooks/definition
excerpt: Learn how to create a Data Processing Notebook for Apache Spark
section: Getting started
order: 03
---

**Last updated 28th March, 2023.**

## Objective

The OVHcloud Data Processing Notebooks service provides you Jupyter notebooks, linked to an Apache Spark environnement totally configured that can be propagated to all nodes and executors 
without any needed installation. This guide will cover the creation of a new notebook.

## Requirements

- a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- a Public Cloud user with `administrator` role
- Data Processing activated (see [How to activate the Data Processing service](../activation){.external} for details.

## Definition
**Notebooks** are files which contain both computer code (e.g. python) and rich text elements (paragraph, equations, figures, links, etc…). Notebooks are both human-readable documents containing the analysis description and the results (figures, tables, etc..) as well as executable files which can be run to perform data analysis. It's vastly used across developer world, especially in the data and artificial intelligence fields.



The advantage compared to doing your own setup is that everything is already installed for you, and that you pay only for your notebooks while they are running.

Each notebook is linked to a **Public Cloud** project and specifies hardware resources along with a machine learning framework and an editor among those available.

You can create notebooks with the OVHcloud Control Panel (see below in this tutorial) or use the [OVHcloud APIv6]

## Instructions

### Step 1
Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the 'Public Cloud'{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Data Processing by clicking on (1)`Data Processing`{.action} in the left-hand menu and click on (2)`Créer un notebook`{.action}

![Create a Notebook 00](images/Creating-a-notebook00.png){.thumbnail}

On the `Control Panel` the name is randomly choosen, don't forget it.
Select the (1)framework you want and the (2)area.
select (3)notebook privacy, be careful with your sensitive data when you choose public access.

![Create a Notebook 01](images/Creating-a-notebook01.png){.thumbnail}

Now select the dimensioning necessary for the job:
(1) Select your notebook 
(2) Select the cluster size. The dimensioning of the cluster is proposed here as an indication and will be final only when the kernel is selected from JupyterLab.

(3) After configuring your notebook, check in the summary at the top left that all information is correct.
(4) then click on "create a notebook" to create your notebook. 

![Create a Notebook 02](images/creating-a-notebook02.png){.thumbnail}

You will be redirected on the notebook dashboard. There you will find information such as the notebook life cycle(1) or the notebook ID(2). 
To access your note, click on JupyterLab(3).

![Create a Notebook 03](images/creating-a-notebook03.png){.thumbnail}

Once on the notebook, you will be able to choose the size of the cluster. If you want a reminder of the costs of each driver, refer to the dashboard of your notebook as in the previous part. 

![Creating a notebook 04](images/creating-a-notebook04.png){.thumbnail}

Now you can start to enter your code in your code section:
```python
print("Hello World")
```

And run the code by pressing the `▶️`{.action} button:

```bash
Hello World
```
Your code is executed in your browser. You can save your example by clicking in the sub menu `Save`{.action} of the `File` menu.

### Step 2
  
## Go further







Join our community of users on <https://community.ovh.com/en/>.
