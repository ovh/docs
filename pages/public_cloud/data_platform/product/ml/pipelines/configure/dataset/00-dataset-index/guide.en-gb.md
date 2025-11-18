---
title: "Data preparation"
updated: 2025-02-15
---

## Objective

Data preparation is the first step to any machine learning process. It is the step during which you will **specify your data source and the rules according to which it is turned into ML datasets**.  
ML datasets are modeled and stored as tables that are automatically created in the Data Manager and fed with data from the source specified at the entry of your pipeline. Specifying the rows and columns of these tables is the gist of the data preparation step.

> [!warning]
> In order to better orchestrate data versioning, data can only be added to an ML dataset. You have the option to manually reset your ML datasets in your [pipeline preferences](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#reset-datasets).

![machinelearning](images/pipeline-dataset.png){.thumbnail}

Data preparation is usually the first step you need to parametrize since the rest of the pipeline should be designed according to this choice. To enter data preparation, click on **Dataset** on your pipeline's main page.

## Dataset generation

You can connect data from multiple sources - either within or outside of ForePaaS - at the entry point of your pipeline. This data must then be split into a train and a test dataset for the model to be fitted and evaluated.

[Manage source and train-test split](/pages/public_cloud/data_platform/product/ml/pipelines/configure/dataset/input)

## Feature engineering

Good data preparation means selecting the correct features for your model. Learn how to add variables to your X and Y sets, and how to execute basic checks on the data content.

[Manage your features](/pages/public_cloud/data_platform/product/ml/pipelines/configure/dataset/features)

## Go further

Join our [community of users](/links/community).