---
title: How to debug jobs
slug: debug-jobs
excerpt: Tutorial about how to debug your jobs
section: Tutorials
order: 5
---
*Last updated 23rd February 2021.*

## Objective

This tutorial tries to give you some hints about how you could debug your jobs if things go wrong.

## Requirements

-   an **AI Training Job** you would like to start
-   the [OVHcloud AI CLI](../install-client) installed

## Which commands and arguments can I use to debug?

A lot of options and sub-commands are available in the ovhai tool.

To get a list of available sub-commands and arguments, just start run:

``` {.bash}
ovhai --help
```

further details on each sub-command can be accessed by:

``` {.bash}
ovhai <subcommand> --help
```

## Where to find the UUID of my job?

First you need the UUID of your job, so use:

``` {.bash}
ovhai job list
```

if your job is not listed, you may use:

``` {.bash}
$ ovhai job list -a
```

to list all jobs.

## My job is FAILED, but why?

### First, check the return-code / error-code of my job

You can find the return-code of your job by running:

``` {.bash}
ovhai job get <UUID>
```

your return-code is listed in the "Infos"-field in the "Status"-section:

``` {.bash}
Status:
  ...
  Infos:          Job failed with code 1
  ...
```

The following info is returned if there was an issue with downloading/pulling your image.
Check for typos and access issues if you try to access a non-public image.

``` {.bash}
  Infos:          Error image pull
```

### Check if there are any error-messages.

Your stdout (Output) and stderr (Error) messages can be read with:

``` {.bash}
ovhai job logs <UUID>
```

### Debug interactively

If above doesnt help you solving your issue, it may help running your job a bit more interactively.

To skip any "autostart" of your image, you may use a bash with infinite sleep and connect to this by SSH.

``` {.bash}
ovhai job run --ssh-public-keys ~/.ssh/id_rsa.pub <Image> -- bash -c 'sleep inf'
```

Verify you can connect to the SSH host by running the following command:

``` {.bash}
ssh <job-id>@gra.training.ai.cloud.ovh.net

Welcome to OVHcloud AI Training Jobs SSH
$
```

You may now start your commands and/or use the typical commandline utils to debug your issue within the container.

### Debug your Code

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

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
