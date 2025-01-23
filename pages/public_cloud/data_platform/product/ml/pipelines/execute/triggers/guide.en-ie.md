---
title: "Triggers"
updated: 2025-02-15
---

## Objective

Triggers allow you to schedule the automatic execution of your pipelines, such as generating the datasets or training models. 

![ml](images/triggers.png){.thumbnail}

* [Add a trigger to a pipeline](/pages/public_cloud/data_platform/product/ml/pipelines/execute/triggers#add-a-trigger-to-a-pipeline)
    *  [Trigger on a time schedule](/pages/public_cloud/data_platform/product/ml/pipelines/execute/triggers#trigger-on-a-time-schedule)

## Add a trigger to a pipeline

To create a trigger on a pipeline, go to the home page of the pipeline and press **Add**.

![ml-fpu](images/add-trigger1.png){.thumbnail}

You can choose a name and description for your trigger in the **Info** section.

![ml-fpu](images/add-trigger2.png){.thumbnail}

In the **Jobs** section, select the [pipeline jobs](/pages/public_cloud/data_platform/product/ml/pipelines/execute/00-execute-index#pipeline-jobs) that you want to trigger.

![ml-fpu](images/add-trigger3.png){.thumbnail}

Finally, in the **Trigger** section, select the condition for the trigger. When that condition is true, the jobs that you have previously selected will automatically be launched.

### Trigger on a time schedule

You can execute your pipeline on a time schedule by selecting *Cron* as the trigger type.

![ml-fpu](images/add-trigger4.png){.thumbnail}

> [!primary]
> Our engineering team is working hard to implement more trigger options soon. If you have a particular need, please drop us a note on our [roadmap portal](https://hq.forepaas.io/#/features)!

## Go further

Join our [community of users](/links/community).