---
title: AI Deploy - App concept
excerpt: Learn the concept behind AI Deploy apps
updated: 2023-12-04
---

## Definition

An **app** in **AI Deploy** is the workload unit submitted to the cluster. An **app** runs as a Docker container within the OVHcloud infrastructure.

Each AI Deploy app is linked to a **Public Cloud** project and specifies an amount of resources to use to run the inference task along with a Docker image either publicly available, in the **AI Deploy** shared registry scoped to your project or the private registry of your choosing that you added. For the latter, see the [OVHcloud documentation on how to add, use and manage registries](gi_07_manage_registry1.).

## Considerations

> [!warning]
>
> An app will run indefinitely until manual interruption.
>

- [Data](gi_02_concepts_data1.) can be attached to an app to serve as input (e.g. model weights).
- If you do not customize your resource request, the default requested is 1 GPU (Tesla V100S). Memory is not customizable.
- [Scaling](deploy_guide_04_scaling_strategies1.) for applications depends on the chosen configuration. It can be **static** or **automatic**, and is based on a trigger threshold according to the metric chosen by the user.
- [Billing](deploy_guide_06_billing_concept1.) for **apps** is minute-based and applies during the `SCALING` and `RUNNING` states of the application. Each commenced minute is billed completely.
- You can read further on app limitations [here](deploy_guide_01_capabilities1.).

## Under the hood

**Apps** in **AI Deploy** are Docker containers within the OVHcloud infrastructure.

## App lifecycle

During its lifetime, the app will transit between the following states:

> [!primary]
>
> Only the `RUNNING` and `SCALING` time of the app **is billed**. For more information about apps billing, refer to this [documentation](deploy_guide_06_billing_concept1.).
>

- `QUEUED`: The app deployment request is about to be processed.
- `INITIALIZING`: The app is being started and, if any, the remote data is synchronized.
- `RUNNING`: The app is running, you can connect to it, compute resources (GPUs/CPUs) are allocated to your specific app and an HTTP endpoint is available.
- `SCALING`: The app deployment is scaling up or down, depending of the scaling configuration. While scaling, the app is still available if it was running before.
- `STOPPING`: The app is stopping, your compute resources are freed and ephemeral data is deleted.
- `STOPPED`: The app ended normally and you can restart it whenever you want or delete it.
- `FAILED`: The app ended in error, e.g. the Docker image is invalid (unreachable, built with Linux/ARM, etc).
- `ERROR`: The app ended due to a backend error (issue on OVHcloud side).
- `DELETING`: The app is being removed.
- `DELETED`: The app is fully deleted.

![image](apps_concept.svg){.thumbnail}

## Go further

- You can check the [OVHcloud documentation on how to create a data container](pcs_create_container1.).
- You can check the [OVHcloud documentation on how to submit an app](deploy_guide_02_getting_started1.).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
