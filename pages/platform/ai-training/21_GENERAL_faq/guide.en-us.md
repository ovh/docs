---
title: FAQ
slug: faq
excerpt: Find the answers to the most frequently asked questions about OVHcloud AI Training
section: General
order: 1
---
*Last updated 29th October, 2020.*

## Objective

Here are the most frequently asked questions about AI Training.

### In which regions is the Private Registry solution available?

Private registry is currently available in Western Europe (GRA region).

### Do I need to master Docker to use AI Training?

It is not necessary to master Docker to use AI Training. A set of ready-to-use images is available on the [`ovhcom` organization of Dockerhub](https://hub.docker.com/u/ovhcom) to get you started. All images prefixed by `ai-training` are images to be used with this service. They usually include classic tools such as JupyterLab or VScode along with some Machine Learning framework such as PyTorch.

However, jobs in **AI Training** are basically Docker containers, so a practical understanding of Docker is required to fully benefit from the service.

### Is there an expected format for data to upload?

You can upload any file or directory to the OVHcloud Object Storage without any format constraints.

### Is it possible to update a running job?

It is not possible to update a running job. If you wish to change the specification of a **job**, you need to interrupt the current one and recreate it.

### How to fix file access permission errors?

Within a job, code and users have no root/sudo privileges. To have access to your files, make sure to mount your **data** object at a location available for non-root users. For preset images provided by OVHcloud it is recommended that the destination path is of the form `/workspace/<your-path>` to avoid such errors.

### Why did my job fail?

For more information about the failure of a job, start with retrieving the **job** ID with this command:

``` {.console}
$ovhai job list
```

Once you have your **job** ID, simply retrieve its information with:

``` {.console}
$ovhai job get <job-id>
```

For more information you should consult the **job** logs:

``` {.console}
$ovhai job logs <job-id>
```

The second information you have is the `stateInfo`, in which you can evaluate the error message, i.e. whether a command failed or the Docker image was not found.

### My job is in "pending" status, what does it mean?

You job might be in queue status for 2 main reasons:

-   You are using an external registry and the image is taking longer to pull. Potential resolution: wait a bit longer for the cluster to pull the external image or recompile the image on an [OVHcloud managed Registry](https://www.ovhcloud.com/en/public-cloud/managed-private-registry/).
-   The cluster is waiting for resources to be available. Potential resolution: try to launch the job with less resources or wait for resources to be available.

### Why can't I see my data volume in the container 

Depending on how you build you container, make sure that the mapping between your data (/workspace/mybucket for instance) is not already existing within your image.

### Why can't I access my UI?

Make sure you are exposing one of the accepted port listed [here](../capabilities/#available-ports-to-public-network).

### Why is the image not executed with the expected linux user?

For security purposes, we impersonate the linux default user which is `ovh` and group `ovh` with ids 42420:42420.
Building a docker with a directory associated to this user and group should help you.
You could use the following command to copy a local folder with the "ovh:ovh" rights.

``` {.console}
COPY --chown=42420:42420 my_local_folder my_folder_embeded_in_image
```

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/c/platform/ai-ml)
