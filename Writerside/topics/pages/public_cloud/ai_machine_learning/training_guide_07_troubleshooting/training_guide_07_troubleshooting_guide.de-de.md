---
title: AI Training - Troubleshooting
excerpt: Tutorial about how to debug your jobs
updated: 2023-12-14
---

## Objective

This tutorial gives you some hints on how to debug your jobs if things go wrong.

## Requirements

-   An **AI Training Job** you would like to start
-   The [OVHcloud AI CLI](cli_10_howto_install_cli1.) installed

## Instructions

### What is an AI Training job and how to run one?

All steps for starting and working on AI Training are described in the [AI Training - Getting Started](training_guide_02_howto_submit_job1.) guide.

### How do I get my files back once I have finished training?

When you use AI Training, make sure to mount Object Storage containers to your job. You will need to back up your files on these volumes. Once your training job is complete (status is `DONE` ), your job should synchronise your data on the mounted Object Storage container(s).

If no volumes are mounted in the specified location, your files will be saved in the job's local and ephemeral storage, then deleted once the job is finished.

### Which commands and arguments can I use to debug?

A lot of options and sub-commands are available in the ovhai CLI tool. This is the recommended means of interaction with AI Solutions. To install it, follow the [CLI Installation guide](cli_10_howto_install_cli1.).

To get a list of available sub-commands and arguments, just start run:

``` {.bash}
ovhai --help
```

Further details on each sub-command can be accessed by:

``` {.bash}
ovhai <subcommand> --help
```

### Where can I find the UUID of my job?

The UUIDs of your projects appear in the Control Panel when you go to the `AI Training` section. 

You can also find them when you list your existing jobs, using the `ovhai` CLI with the following command:

``` {.bash}
ovhai job list
```

If your job is not listed, you may use this command to list all the jobs:

``` {.bash}
$ ovhai job list -a
```

### Why has my job FAILED?

#### First, check the return-code / error-code of your job

You can find the return-code of your job by running:

``` {.bash}
ovhai job get <UUID>
```

Your return-code is listed in the "Infos"-field in the "Status"-section:

``` {.bash}
Status:
  ...
  Infos:          Job failed with code 1
  ...
```

The following info is returned if there was an issue with downloading/pulling your image.
Check for typos in the image name and assess issues if you try to access a non-public image.

``` {.bash}
  Infos:          Error image pull
```

#### Check if there are any error-messages

Your stdout (Output) and stderr (Error) messages can be read with:

``` {.bash}
ovhai job logs <UUID>
```

Note that you can also consult them from the Control Panel, by going to `AI Training` > `Job UUID` > `Logs`.

#### Debug interactively

If the answers above don't help you to solve your issue, it may help running your job a bit more interactively.

To skip any "autostart" of your image, you may use a bash with infinite sleep and connect to this by SSH.

``` {.bash}
ovhai job run --ssh-public-keys ~/.ssh/id_rsa.pub <Image> -- bash -c 'sleep inf'
```

Verify you can connect to the SSH host by running the following command:

``` {.bash}
ssh <job-id>@gra.ai.cloud.ovh.net

Welcome to OVHcloud AI Training Jobs SSH
$
```

You may now start your commands and/or use the typical commandline utils to debug your issue within the container.

#### Debug your Code

The easiest way to debug your code may be using above interactive debug-session and run/compile your code interactively checking for:

-   error-messages
-   syntax errors
-   missing libs
-   wrong versions
-   ...

f.e. by running (parts) of your python-code with:

``` {.bash}
python -i
```

or using any other debugger

### Is it possible to update a running job?

It is not possible to update a running job. If you wish to change the specification of a **job**, you need to interrupt the current one and recreate it.

### How is the product billed?

During its lifetime the job should transit between the following statuses:`QUEUED`, `INITIALIZING`, `PENDING`, `RUNNING`, `INTERRUPTING`, `FINALIZING`, `DONE`.

Billing is minute-based and starts from the beginning until the end of the job's `RUNNING` status. Each commenced minute is billed completely. Jobs that do not reach the `RUNNING` state will not be billed.

The price will depend on the compute resources you use (CPUs and GPUs) and their running time. 

For more information about AI Training billing and pricing examples, please check the [AI Training - Billing and lifecycle](training_guide_08_billing_concept1.) guide.

### How long can I use my AI Training job?

An AI Training job runs continuously until manually interrupted by the user or until it is done, unless it exceeds **7 days of running**. It will then be automatically stopped. You can choose to automatically restart it using the `auto-restart` option (set this parameter to `True`). The job will then restart as is. To increase this 7-day limit, you will have to contact the support to ask for an upgrade of this quota for your Public Cloud project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. 
