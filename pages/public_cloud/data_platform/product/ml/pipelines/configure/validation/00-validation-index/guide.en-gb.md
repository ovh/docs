---
title: "Model selection"
updated: 2025-02-15
---

## Objective

Model selection is the step in which you can **compare all trained models in the pipeline, especially over time**, and choose which one you want to deploy to production. The word **_model_** always refers to the combo of two elements: an *estimator and its parameters* fitted on *training data*. 

![machinelearning](images/pipeline-validation.png){.thumbnail}

Think of this step as a control center where you can come back at any time to monitor how well your deployed model is doing over time. If needed, you can switch it for another more accurate or efficient model.

> [!warning]
> A pipeline can store several trained models (they are all displayed on the Model Selection page) but only one can be deployed for predictions.

Here, you can:

* [Manage model versions](/pages/public_cloud/data_platform/product/ml/pipelines/configure/validation/00-validation-index#manage-versions)
* [Deploy a model](/pages/public_cloud/data_platform/product/ml/pipelines/configure/validation/00-validation-index#deploy-model)
* [Compare scores](/pages/public_cloud/data_platform/product/ml/pipelines/configure/validation/00-validation-index#scores)
* [Set up automatic deployment of models](/pages/public_cloud/data_platform/product/ml/pipelines/configure/validation/00-validation-index#set-up-automatic-deployment-of-models)

## Manage trained models

The main focus of this page is the **Generated models board**. It lists all models that have been fitted since the creation of the pipeline.  

> [!primary]
> Remember that not all combinations from the [hyper-parameter tuning step](/pages/public_cloud/data_platform/product/ml/pipelines/configure/tuning) are saved but only the one with the best validation score.

### Manage versions

For the moment, models' versions are identical to the version of the pipeline whose configuration was used to generate it. This ensures you have traceability over how every one of your predictions was made. 

All model versions that were saved over time are listed in the table. You can choose to download a specific model version by clicking the 📥 icon. 

![machinelearning](images/validation-download.png){.thumbnail}

### Deploy model

The model at the top with the green atom icon is the model that is currently deployed in your pipeline. This means that it is the model used to make inferences, using the specifications (i.e. consumers) listed in the [Deployment options step](/pages/public_cloud/data_platform/product/ml/pipelines/configure/deployment).  

![machinelearning](images/validation-deployed-model.png){.thumbnail}

You can choose to manually deploy another model of your choice by clicking on the **Play button** at the end of its line.

![machinelearning](images/validation-manually-deploy.png){.thumbnail}

### Scores

The Generated models list also display both the **validation score** (evaluated on the [Validation set](/pages/public_cloud/data_platform/product/ml/pipelines/configure/training/validation)) and the **testing score** (evaluated on the [Testing set](/pages/public_cloud/data_platform/product/ml/pipelines/configure/dataset/input#train-test-split)). By default, the testing score isn't calculated in order to minimize the resources used. You can choose to compute it manually by clicking on the **Refresh 🔄 button** in the *Testing Score* column.

![machinelearning](images/validation-manually-score.png){.thumbnail}

> [!primary]
> There is a cup  symbol next to the model with the best validation score to help you spot it more easily!

The default **scoring function** used in both columns is the *Highlight score*: it is the scoring function [you highlighted in the Training step](/pages/public_cloud/data_platform/product/ml/pipelines/configure/training/validation). To display the results with another scoring function, click on the dropdown menu at the top-right of the table and select a function among those you added in the Training step.

![machinelearning](images/validation-highlight-score.png){.thumbnail}

Finally, you can also compare the scores of several functions side by side for a specific model on its **details page**. Simply click on the **Stats  icon** at the end of the model's row to open it.

![machinelearning](images/validation-model-stats.png){.thumbnail}

## Set up automatic deployment of models

A key feature of the Model Selection step is the ability to configure the auto-deployment of models based on certain criteria. 

[Learn how to auto-deploy models](/pages/public_cloud/data_platform/product/ml/pipelines/configure/validation/auto-deploy)

## Go further

Join our [community of users](/links/community).