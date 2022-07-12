---
title: CLI - Launch an AI Training job
slug: cli/run-job-cli
excerpt: Learn how to run an AI Training job using the CLI
section: Command Line Interface
order: 202
---

**Last updated 25th March, 2021.**

## Objective

This guide covers the submission of [**jobs**](https://docs.ovh.com/ca/en/publiccloud/ai/training/jobs) through the **ovhai** CLI.
To illustrate the submission we will iteratively build a command to run a notebook image `ovhcom/ai-training-transformers:3.1.0` with the Huggingface framework preinstalled.
This Docker image is freely available.

## Requirements

-   a working `ovhai` CLI [how to install ovhai CLI](https://docs.ovh.com/ca/en/publiccloud/ai/cli/install-client)

## Instructions

### job run

If you need any help while submitting a new job, run `ovhai job run --help`:

``` {.console}
USAGE:
    ovhai job run [FLAGS] [OPTIONS] [ARGS]

ARGS:
    <image>         Docker image
    <command>...    List of command arguments to pass to job. If some job arguments start with
                    '-' or '--' don't forget to add '--' as first argument to avoid interpreting
                    following ones as ovhai parameter. Example: `ovhai job run ubuntu -- bash -c
                    'echo $(date)'`

FLAGS:
    -h, --help             Prints help information
        --unsecure-http    HTTP services inside job will not require authentication to be accessed
                           from the outside
    -V, --version          Prints version information

OPTIONS:
    -c, --cpu <cpu>
            Number of CPUs (ignored if GPUs is specified)

    -p, --default-http-port <default-http-port>
            Port use as the default one to access HTTP service inside job

    -e, --env <name=value>...
            Environment variable to be set inside job

        --from <job_id>
            Re-use the same spec as given job uuid. Additional parameters will override this
            specification. Example: `ovhai job run --from <job_id> --gpu 2` will run the same spec
            as <job_id> with 2 gpus

    -g, --gpu <gpu>                                                       Number of GPUs
    -m, --gpu-model <gpu-model>                                           GPU model
    -i, --image <image>
    -l, --label <name=value>...
            Optional labels, only informative

    -n, --name <name>
            Optional name, only informative

    -o, --output <output>
            Command output format [default: yaml] [possible values: json, yaml]

    -r, --read-user <read-user>
            Optional user who will be authorize to access job api

    -s, --ssh-public-keys <ssh-public-key-file>...
            Enable the job ssh feature, specify each ssh public key files

    -t, --timeout <timeout>
            Maximum time to spend before killing the job (30s, 1h, ...)

    -v, --volume <container@region/prefix:mount_path:permission:cache>...
            Volumes mounted on the image. /prefix is optional [default: ""]. :permission is optional
            [default: ro] [possible values: ro, rw]. :cache is optional [default: "no-cache"]
            [possible values: cache, no-cache] and can only be set when permission is explicit
```

### Size your run

First you need to tweak the resources you need for your new run depending on your expected workload.

For example if you are on a data exploration step or designing your neural network to train you might start with a few vCPUs.
Once your experiment is ready switch over to using GPUs to train.

Flags `--cpu` and `--gpu` are exclusive, if GPU resources are specified then the CPU flag is ignored and the standard GPU to CPU ratio is applied.
You can find out more about these ratios in the [capabilities](https://docs.ovh.com/ca/en/publiccloud/ai/training/capabilities).

If you provision GPUs for your run you can also select the model of GPU you wish to use with the `--gpu-model` flag.
If this flag is not specified the default GPU model for the cluster on which you submit is used.
You can find out about the default GPU for your cluster with `ovhai capability` command.

The maximum amount of vCPUs or GPUs available depends on the GPU model and the cluster you are using.
You can find out about your cluster resources limitation with `ovhai capability`.

For this experiment we will deploy a notebook with 1 gpu of the default model

``` {.console}
ovhai job run --gpu 1 ovhcom/ai-training-transformers:3.1.0
```

> [!primary]
> * If no resource flag is specified the job will run with one unit of the default GPU model.
> * If both CPU and GPU flags are provided only the GPU one is considered

### Attaching volumes

This step assumes that you either have data in your OVHCloud Object Storage that you wish to use during your experiment or that you need to save your job results into the Object Storage.
To learn more about data, volumes and permission check out the [data](https://docs.ovh.com/ca/en/publiccloud/ai/data) page.

You can attach as many volumes as you want to your job with various options.
Let us go through those options and outline a few good practices with volume mounts.

The `--volume` flag is used to attach a container as a volume to the job.
The volume description sets the option for the volume and synchronisation process `<container@region/prefix:mount_path:permission:cache>`:
- `container` the container in OVHcloud Object Storage to synchronise
- `region` the Object Storage region on which the container is located
- `prefix` objects in the container are filtered on the base of this prefix, only matching objects are synced
- `mount_path` the location in the job where the synced data is mounted
- `permission` the permission rights on the mounted data. Available rights are **read only (ro)**, **read write (rw)** or **read write delete (rwd)**. Data mounted with **ro** permission is not synced back at the end of the job. Thus it avoids unnecessary synchronization delay on static data.
- `cache` whether the synced data should be added to the project cache. Available options are either `cache` or `no-cache`. Data in the cache can be used by other jobs without additional synchronisation, to benefit from the cache the new jobs also need to mount the data with the cache option.

Let's assume you have a team of datascientists working on the same input dataset but running each their own experiment.
In this case a good practice is to mount the input dataset with **ro** permission and cache activated for each experiment, the input data is synced only once and never synced back.
In addition, each of the experiment will yield specific results that should be stored in a dedicated container. For each job we would then mount an output container with **rw** permission and no cache. If a container does not exist yet in the object storage it is created during the data synchronization.

Assuming our data is located in the Gravelines Object Storage in a container named `dataset` the command would now be:

``` {.console}
ovhai job run --gpu 1 \
-v dataset@GRA:/workspace/dataset:ro:cache \
-v output@GRA:/workspace/output:rw \
ovhcom/ai-training-transformers:3.1.0
```

> [!primary]
> * Data in the cache is not persisted indefinitely. After a period of inactivity the data is emptied from the cache. Inactivity is defined as having no running jobs using the data in cache.

### Define your process

Once resources and volumes are set up you will now need to define the specificities of the process running within your job.
First you need a Docker image that you either built yourself or find freely available on a public repository such as DockerHub.
In our example we will use the notebook image `ovhcom/ai-training-transformers:3.1.0`.

You can tweak the behavior of your Docker image without having to rebuild it every time (like updating the number of epochs for a training run) by using the `--env` flag.
Using this you can simply set environment variables directly in your job, e.g:

``` {.console}
--env NB_EPOCHS=20
```

In our example we do not require any environment variable.

It is also possible to override the default CMD of Entrypoint of the Docker image, simply add the new command at the end of the job run request.
To make sure flags from your command are not interpreted as `ovhai` parameters you can prefix your command by `--`.
To simply print `Hello World` the command would be:

``` {.console}
ovhai job run ubuntu -- echo 'Hello World'
```

When a job is running a `job_url` is associated to it that allows you to access any service exposed in your job. By default, the exposed port for this url is the `8080`, in our case the Jupyter Notebook is directly exposed on `8080` and we do not need to override it.
However, if you are running an experiment and monitoring it with Tensorboard the default port should be `6006`, you can override the port with:

``` {.console}
--default-http-port 6006
```

### Extra options

A few other options are available for your jobs.

-   `--timeout` timeout after which the job will stop even if the process in the job did not end, helps you control your consumption
-   `--label` free labels to help you organize your jobs, labels are also used to scope `app_token`, learn more about `app_token` and how to create them [here](https://docs.ovh.com/ca/en/publiccloud/ai/cli/app-token-cli)
-   `--read-user` you can add a `read-user` to a job, a read user will only have access to the service exposed behind the `job_url`. The read-user must match with the username of an Openstack user with an `AI Training read` role.
-   `--ssh-public-keys` allows you to access your job through SSH, it is particularly useful to [setup a VSCode Remote](https://docs.ovh.com/ca/en/publiccloud/ai/training/vscode-remote-code)
-   `--from` run a job based on the specification of a previous one. All options will override the base job values. The `--image` is the flag used to override the image of the base job.

### Run a job

Finally, to submit a notebook job with 1 GPU, a dataset container and an output container we run

``` {.console}
ovhai job run --gpu 1 
-v dataset@GRA:/workspace/dataset:ro:cache 
-v output@GRA:/workspace/output:rw 
ovhcom/ai-training-transformers:3.1.0
```

You can then follow the progress of all your jobs using the following commands:

``` {.console}
ovhai job ls
```

If you want to fetch the specific job you just selected, retrieve its `ID` and then:

``` {.console}
ovhai job get <job-id>
```

For more information about the job and its lifecycle refer to the [jobs page](https://docs.ovh.com/ca/en/publiccloud/ai/training/jobs).

## Going further

To know more about the CLI and available commands to interact with your job check out the [overview of `ovhai`](https://docs.ovh.com/ca/en/publiccloud/ai/cli/overview-cli)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
