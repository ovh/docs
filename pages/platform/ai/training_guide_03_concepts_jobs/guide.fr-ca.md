---
title: "AI Training - Concept d'emploi (EN)"
slug: training/jobs
excerpt: Learn the concept behind AI Training jobs
section: AI Training - Guides
order: 03
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/training/jobs/'
---

**Last updated 18th May, 2021.**

## Definition

A **job** in **AI Training** is the workload unit submitted to the cluster. A **job** runs as a Docker container within OVHcloud infrastructure.

Each job is linked to a **Public Cloud** project and specifies an amount of resources to use to run the training task along with a Docker image either publicly available, in the **AI Training** shared registry scoped to your project or the private registry of your choosing that you added. For the latter, see the [OVHcloud documentation on how to add a private registry](https://docs.ovh.com/ca/fr/publiccloud/ai/training/add-private-registry).

## Considerations

> [!warning]
> * A job will run indefinitely until completion or manual interruption.

-   [Data](https://docs.ovh.com/ca/fr/publiccloud/ai/data) can be attached to a job to serve either/both as input for your training workload or output (e.g. model weights).
-   If you do not customise you resource request, the default requested is 1 GPU. Memory is not customisable.
-   Billing for **jobs** is minute-based and starts at job initialisation until completion. Each commenced minute is billed completely.
-   You can read further on job limitations [here](https://docs.ovh.com/ca/fr/publiccloud/ai/training/capabilities).

## Under the hood

**Jobs** in **AI Training** are Docker containers within OVHcloud infrastructure.

## Job lifecycle

During its lifetime the job will transition between the following statuses:

> [!primary]
> * Only jobs that reach the `RUNNING` status are billed. Billing starts with the `INITIALIZING` step and ends when the `FINALIZING` step starts.
> * Only jobs in states `QUEUED`, `INITIALIZING`, `PENDING` and `RUNNING` are included in the quota computation.

-   `QUEUED` the job run request is about to be processed
-   `INITIALIZING` the job instance is created and the data is synchronised from the Object Storage. To know more about the data synchronisation check out the [Data How it works](https://docs.ovh.com/ca/fr/publiccloud/ai/data/#how-it-works) section.
-   `PENDING` job is being started
-   `RUNNING` the job is running
-   `INTERRUPTING` the job is still running but an interruption order was received and is about to be processed
-   `FINALIZING` the job instance is deleted and the data is synchronised back to the Object Storage. To know more about the data synchronisation check out the [Data How it works](https://docs.ovh.com/ca/fr/publiccloud/ai/data/#how-it-works) section.
-   `DONE` the job ended normally
-   `TIMEOUT` the job is still running but is about to be interrupted because the timeout was reached
-   `INTERRUPTED` the job is ended and was interrupted
-   `FAILED` the job ended with an error, e.g. the process in the job finished with a non 0 exit code, Docker image could not be pulled, ...
-   `ERROR` the job ended due to a backend error

![image](images/status-diagram.svg){.thumbnail}

## Going further

-   You can check the [OVHcloud documentation on how to create a data container](https://docs.ovh.com/ca/fr/storage/pcs/create-container/).
-   You can check the [OVHcloud documentation on how to submit a job](https://docs.ovh.com/ca/fr/publiccloud/ai/training/submit-job)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
