---
title: AI Training - Job concept
excerpt: Learn the concept behind AI Training jobs
updated: 2023-12-04
---

## Definition

A **job** in **AI Training** is the workload unit submitted to the cluster. A **job** runs as a Docker container within the OVHcloud infrastructure.

Each AI Training job is linked to a **Public Cloud** project and specifies an amount of resources to use to run the training task along with a Docker image either publicly available, in the **AI Training** shared registry scoped to your project or the private registry of your choosing that you added. For the latter, see the [OVHcloud documentation on how to add use and manage registries](gi_07_manage_registry1.).

## Considerations

> [!warning]
>
> An **AI Training** job runs continuously until manually interrupted by the user or until it is done, unless it exceeds **7 days of running**. It will then be automatically stopped. You can choose to automatically restart it using the `auto-restart` option (set this parameter to `True`). The job will then restart as is.
>

- [Data](gi_02_concepts_data1.) can be attached to a job to serve either/both as input for your training workload or output (e.g. model weights).
- If you do not customize your resource request, the default requested is 1 GPU. Memory is not customizable.
- [Billing](training_guide_08_billing_concept1.) for **jobs** is minute-based and starts from the beginning to the end of the job's `RUNNING` status. Each commenced minute is billed completely.
- You can read further on job limitations [here](training_guide_01_capabilities1.).

## Under the hood

**Jobs** in **AI Training** are Docker containers within the OVHcloud infrastructure.

## Job lifecycle

During its lifetime the job will transit between the following states:

> [!primary]
>
> Only the `RUNNING` time of the job **is billed**. For more information about jobs billing, refer to this [documentation](training_guide_08_billing_concept1.).
>

- `QUEUED`: The job run request is about to be processed.
- `INITIALIZING`: The job instance is created and the data is synchronized from the Object Storage. To know more about the data synchronisation check out the [Data How it works](gi_02_concepts_data#how-it-works.) section.
- `PENDING`: The job is being started.
- `RUNNING`: The job is running.
- `INTERRUPTING`: The job is still running but an interruption order was received and is about to be processed.
- `FINALIZING`: The job instance is deleted and the data is synchronized back to the Object Storage. To know more about the data synchronisation check out the [Data How it works](gi_02_concepts_data#how-it-works.) section.
- `DONE`: The job ended normally.
- `TIMEOUT`: The job is still running but is about to be interrupted because the timeout was reached.
- `INTERRUPTED`: The job is ended and was interrupted.
- `FAILED`: The job ended with an error, e.g. the process in the job finished with a non 0 exit code, Docker image could not be pulled, etc.
- `ERROR`: The job ended due to a backend error.

![image](status-diagram.svg){.thumbnail}

## Go further

- You can check the [OVHcloud documentation on how to create a data container](pcs_create_container1.).
- You can check the [OVHcloud documentation on how to submit a job](training_guide_02_howto_submit_job1.).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
