---
title: "Pipeline Preferences"
updated: 2025-02-15
---

## Objective

Each ForePaaS pipeline possesses several execution settings which can be managed via the Preferences tab of the pipeline edition menu. 

![machinelearning](images/pipeline-preferences.png){.thumbnail}

Here are the main settings:

* [Pipeline information](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#pipeline-information)
* [Timeout options](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#timeout-options)
* [Environment options](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#environment-options)
    * [Resources](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#resources)
* [Reset datasets](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences#reset-datasets)

## Pipeline information

In the Informations box, you can set the name, description and tags for your pipeline. 

![machinelearning](images/pipeline-preferences-info.png){.thumbnail}

## Timeout options

The Execution Parameters box lets you set timeout and failure options.

**Timeout** is the runtime after which a job is interrupted if it hasn't finished. You can set a different runtime for all four possible jobs.

> [!warning]
> If a job fails while running a pipeline (i.e. several consecutive jobs), **the whole pipeline is interrupted and the next jobs will not be run**.

![machinelearning](images/pipeline-preferences-timeout.png){.thumbnail}

## Environment options

### Set an environment

The boxes on the right of the screen are the ones that relate to an environment, just like in a [DPE action](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index). By default, there is no environment applied and you can customize all settings within the Preferences page.  
If you want to harmonize the set of settings to all the pipelines you build, you can **specify them at the environment-level**. Go to Environment in the sidebar to create an environment, and apply it to each pipeline by specifying it in the Related Environment box in the pipeline's Preferences page.

![machinelearning](images/pipeline-preferences-env.png){.thumbnail}

### Resources

You can specify the resources dedicated to each kind of [machine learning jobs](/pages/public_cloud/data_platform/product/ml/pipelines/execute/00-execute-index#pipeline-jobs) in the Resources panel.

[How to scale pipelines](/pages/public_cloud/data_platform/product/ml/pipelines/execute/resources)

![machinelearning](images/pipeline-preferences-resources2.png){.thumbnail}

## Reset datasets

By default, pipelines are engineered so that the training and testing datasets never spill into each other over time, as ForePaaS manages the life-cycle of the data for you. However, you might want to occasionally reset your ML datasets, if corrupt or incorrect data leaked into your Testing set or if the structure of the training data changes radically.

You can decide to manually reset training, testing and validation datasets of a specific pipeline in its Preferences page by pressing this button:

![machinelearning](images/pipeline-preferences-reset.png){.thumbnail}

> [!primary]
> This **will not** reset the rest of your pipeline configuration such as the features choice, estimator and hyper-parameter tuning, or the generated models.

## Go further

Join our [community of users](/links/community).