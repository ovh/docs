---
title: "Create a notebook"
updated: 2025-02-15
---

## Objective

> [!primary]
> **Please note:** This service is only available on the *Legacy ForePaaS Platform*.

To create a notebook instance, head to the **Notebook** section of the Machine Learning Manager.

![notebooks](images/main-page.png){.thumbnail}

Click on **New notebook** in the top-right.

![notebooks](images/create1.png){.thumbnail}

You have to choose a [container image](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html) for your Jupyter environment, i.e. the set of packages and dependencies you want to have for your new notebook. ForePaaS features several ready-to-run images which contain the most popular libraries for data analysis and data science. 

> [!primary]
> If you are new at creating notebooks, we recommend starting off with a *Data Science notebook*. It contains all the basic Python libraries for data exploration such as pandas, scipy, scikit-learn, matplotlib and much more!

![notebooks](images/create2.png){.thumbnail}

You can then configure your notebook further before it is created (and it is still possible to change those settings later on). Once you press **Create**, the server for the notebook will be initialized - with its specific environment and dedicated computing resources.

![notebooks](images/create3.png){.thumbnail}

The two main aspects to configure are:

* [Additional dependencies](/pages/public_cloud/data_platform/product/ml/notebooks/create#notebook-dependencies)
* [Resources](/pages/public_cloud/data_platform/product/ml/notebooks/create#notebook-resources)

## Notebook dependencies

Your notebook's image already comes with some default packages, which you can individually check in the image description in the marketplace. 

![notebooks](images/scipy-notebook.png){.thumbnail}

You can specify additional dependencies by clicking on the **Add** button in the *Dependencies* panel.

![notebooks](images/add-dep1.png){.thumbnail}

Simply choose the type of dependency and enter the name of the package to install in the server.

![notebooks](images/add-dep2.png){.thumbnail}

You can add several packages at once by pressing *Enter* every time, like tags.

![notebooks](images/add-dep3.png){.thumbnail}

## Notebook resources

Check out the dedicated sections to learn how to configure your new notebook's resources. It is suggested to configure them before confirming the creation of the notebook.

[Configure a notebook's resources](/pages/public_cloud/data_platform/product/ml/notebooks/00-notebooks-index#edit-resources)

## Go further

Join our [community of users](/links/community).