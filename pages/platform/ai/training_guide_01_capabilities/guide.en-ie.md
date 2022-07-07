---
title: AI Training - Capabilities and Limitations
slug: training/capabilities
excerpt: Find out about current capabilities and limitations of AI Training
section: AI Training guides
order: 01
---

**Last updated 20th April, 2021.**

## Capabilities and known limits

### Jobs resources and limitations

-   No duration limitation on job execution
-   No limitation on number of parallel execution

You can either choose the number of GPU or CPU for a job, not both.
By default, a job uses one GPU.
The memory resource is not customisable.

If you chose the number of GPU:

-   CPU, memory and local storage resources are not customisable but scaled linearly with each additional GPU.

If you chose the number of CPU:

-   Memory and local storage resource is not customisable but scaled linearly with each additional CPU.

Information about maximum number of CPU/GPU, memory per CPU/GPU and local storage are available with the `ovhai` CLI.

``` {.console}
ovhai capabilities flavor list
```

> [!primary]
> **Local storage** refers to a drive mounted on the node. It's limited and not the recommended way to handle data, see [OVHcloud documentation on data](https://docs.ovh.com/ie/en/publiccloud/ai/data)

### Available ports to public network

Each job has a public URL, by default this URL accesses the port 8080 of the job. The default port can be configured when you submit a new job.

You can also access other ports by appending them to the URL.

Job URL for accessing the default port (starting with the job's ID):

-   https://00000000-0000-0000-0000-000000000000.job.gra.training.ai.cloud.ovh.net

Job URL for accessing the port 9000 (starting with the job's ID followed by the port number):

-   https://00000000-0000-0000-0000-000000000000-9000.job.gra.training.ai.cloud.ovh.net

Only the HTTP layer is accessible.

### OVHcloud vRack

-   AI Training cannot use or access OVHcloud vRack.

### Available hardware for jobs

-   Nvidia V100S [pricing available here](https://www.ovhcloud.com/en/public-cloud/prices/#ai-machine-learning)

### Available regions for jobs

-   GRA (Gravelines in France)
-   BHS (Beauharnois in Canada)

### Available storage for data volumes

-   Public Cloud Object Storage (Any Region)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
