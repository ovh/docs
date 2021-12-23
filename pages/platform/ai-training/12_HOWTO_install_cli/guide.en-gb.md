---
title: Install the CLI
slug: install-client
excerpt: Learn how to install the CLI to interact with AI Training
section: How to (with CLI)
order: 1
---

**Last updated 20th April, 2021.**

## Objective

This guide covers the installation of the **ovhai** CLI. The CLI is the recommended means of interaction with the **AI Training** service.

## Requirements

-   a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
-   **AI Training activated** for your account, see [how to submit a job Step 2](../submit-job)
-   a user for AI Training, see [how to create a user](../create-user)

## Instructions

### Step 1: Downloading the CLI

First download the CLI for the **AI Training** cluster location of your choice with the following link:

``` {.console}
https://cli.<region>.training.ai.cloud.ovh.net # region is the lowercase cluster location
```

After downloading the right zip for your platform, unzip it and add it to your `PATH`:

``` {.console}
unzip ovhai-<platform>.zip
mkdir -p $HOME/bin
mv ovhai $HOME/bin/ovhai
export PATH=$PATH:$HOME/bin/
```

### Step 2: Authenticating

Once the **ovhai** CLI is installed, you need to authenticate with the **AI Training** service.

``` {.console}
ovhai login
```

You have the choice between two methods to log in:

-   terminal: you can authenticate yourself from within the terminal.
-   browser: you will reach an authentication page similar to this:

![image](images/00_oauth2_login.png){.thumbnail}

Use the credentials of your **AI Training** user to log in.

### Step 3: Using the command line CLI

You can use the command `ovhai --help` to list available actions and `ovhai <action> --help` for more information about a specific action.

The documentation of the CLI is available at [CLI documentation](../overview-cli).

In addition, when performing any action in the **AI Training** section of the OVHcloud Control Panel you are provided with the equivalent command to get you started with the **ovhai CLI**.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
