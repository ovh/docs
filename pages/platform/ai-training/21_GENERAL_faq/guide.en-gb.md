---
title: FAQ
slug: faq
excerpt: Find the answers to the most frequently asked questions about OVHcloud AI Training
section: General
order: 1
---
*Last updated 7th September, 2020.*

## Objective

Here are the most frequently asked questions about AI Training.

### In which regions is the Private Registry solution available?

AI Training cluster is currently available in Western Europe (GRA region).

### How to attach a data container from the command line?

This [guide](../create-data) covers the creation of a data object attached to an Object Storage container from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager). If you do not have access to the Control Panel or wish to directly create a data attached to an Object Storage from the command line you can use the following command:

``` {.console}
$cli data new <data-name> <local-data-path> --storage ovh --tags container=<container-name> --tags container-region=<container-region>
```

In the above command the `<local-data-path>` is optional. If you provide one, your local files are pushed in your newly created **data** object. You can then synchronise it simply like this:

``` {.console}
$cli data sync --direction to-object-storage <data-id>
```

Alternatively, if you want the data to be directly synced with the Object Storage you can provide the following flag upon creation: `--sync to-object-storage`. If the container does not exist, it will be created during the synchronisation.

### How to fix Forbidden errors?

From the command line upon login or when using some commands you might encounter Forbidden errors of this form:

``` {.console}
Error: http: 403 Forbidden
```

This means the Openstack user that you logged in with does not have the appropriate role for the requested action. If the error happens at login, it means your user is lacking the role `AI Training Operator`. If it happens after a `$cli data sync` command, it means you are missing the `ObjectStore operator` role. Ask your administrator to grant you the required roles from the `Public Cloud` Control Panel under `Project Management` &gt; `Users & Roles`.

For more information refer to the guide about [users](../users).

### Do I need to master Docker to use AI Training?

It is not necessary to master Docker to use AI Training. A set of ready-to-use images is available on the [`ovhcom` organization of Dockerhub](https://hub.docker.com/u/ovhcom) to get you started. All images prefixed by `ai-training` are images to be used with this service. They usually include classic tools such as JupyterLab or VScode along with some Machine Learning framework such as PyTorch.

However, jobs in **AI Training** are basically Docker containers, so a practical understanding of Docker is required to fully benefit from the service.

### Is there an expected format for data to push?

You can push any file or directory to a **data** object without any format constraints.

### Is it possible to update a running job?

It is not possible to update a running job. If you wish to change the specification of a **job**, you need to interrupt the current one and recreate it.

### How to fix file access permission errors?

Within a job, code and users have no root/sudo privileges. To have access to your files, make sure to mount your **data** object at a location available for non-root users. For preset images provided by OVHcloud it is recommended that the destination path is of the form `/workspace/<your-path>` to avoid such errors.

### How to delete a file from a data object?

You can delete a single file from a **data** object from the command line:

``` {.console}
$cli data content rm <data-id> <file-full-name>
```

### Why did my job fail?

For more information about the failure of a job, start with retrieving the **job** ID with this command:

``` {.console}
$cli job ls
```

Once you have your **job** ID, simply retrieve its information with:

``` {.console}
$cli job get <job-id>
```

Two pieces of information can help you find the reason of the failure. Firstly, if within the `runs` you have an `exitCode`, then it is the image that failed; for more information you should consult the **job** logs:

``` {.console}
$cli job log <job-id>
```

The second information you have is the `stateInfo`, in which you can evaluate the error message, i.e. whether a command failed or the Docker image was not found.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/c/platform/ai-ml)
