---
title: Jobs
slug: jobs
excerpt: Learn the concept behind AI Training jobs
section: Concepts
order: 1
---
## Definition

A **job** in **AI Training powered by \$partner\_full** is the workload unit submitted to the cluster. A job runs as a docker container within OVHcloud infrastructure.

Each job is linked to a **Public Cloud** project and specifies an amount of resources to use to run the training task along with a docker image either publicly available, in the **AI Training** shared registry scoped to your project or the private registry of your choosing that you attached. For the latter, see [OVHcloud documentation on how to attach a private registry](../attach-private-registry).

## Considerations

> [!warning]
> * A job will run indefinitely until completion or manual interruption.

-   [Data](../data) can be attached to a job to serve either/both as input for your training workload or output (e.g. model weights).
-   The minimum resource requirement for a job is 1 GPU. If you do not customize you GPU resource request, the default requested is 1. CPU and Memory resources are not customizable.
-   Billing for **jobs** is minute based and starts at job initialization until completion. Each started minute is billed completely.
-   You can read further on job limitations [here](../capabilities).

## Under the hood

**Jobs** in **AI Training** are docker containers run in a kubernetes cluster.

## Going further

-   You can check the [OVHcloud documention on how to create a data](../create-data).
-   You can check the [OVHcloud documentation on how to submit a job](../submit-job)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/c/platform/ai-ml)
