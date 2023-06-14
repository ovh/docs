---
title: Data Integration - CLI - Installation
excerpt: Learn how to install the Data Integration CLI
updated: 2023-06-13
---

## Objective

This guide covers the installation of the **ovhdata-cli** command line interface (CLI). The CLI is the recommended means of interaction with the **Data Integration** service.

## Requirements

- An OVHcloud account with the associated credentials.
- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account.

## Instructions

### Step 1: Download the CLI

Download the CLI corresponding to your operating system.

``` {.console}
# Linux
curl -s https://github.com/ovh/ovhdata-cli/releases/latest/download/ovhdata-cli-linux-amd64
```

``` {.console}
# Mac
curl -s https://github.com/ovh/ovhdata-cli/releases/latest/download/ovhdata-cli-darwin-amd64
```

``` {.console}
# Windows
curl -s https://github.com/ovh/ovhdata-cli/releases/latest/download/ovhdata-cli-windows.exe
```

### Step 2: Installing the CLI

After downloading the right binary for your platform, add it to your `PATH`:

``` {.console}
mkdir -p $HOME/bin
mv ovhdata-cli-<os-build> $HOME/bin/ovhdata-cli
export PATH=$PATH:$HOME/bin/
```

### Step 3: Authenticating

Once the **ovhdata-cli** CLI is installed, you need to authenticate.

``` {.console}
ovhdata-cli login
```

The above command will open your browser and ask you to login.
Fill in your OCHcloud account credentials, submit and then click on continue:

![image](images/01_login.png){.thumbnail}

### Step 4: Creating API keys

Once authenticated on your browser you will have to create API keys.

- set the application name
- set the application description
- choose the validity period
- pick the following rights: GET, PUT, POST and DELETE all four on `/*`

![image](images/02_create_api_key.png){.thumbnail}

### Step 5: Completing the authentication

Go back to your terminal and use your newly created API keys to complete the CLI authentication process:

- first copy the `application key` from your browser and past it
- then copy the `secret key` from your browser and past it (it will consider as a password and will not be displayed)
- finally copy the `consumer key` from your browser and past it

You should receive a feedback message telling that you are now logged in.

### Step 6: Using the command line CLI

You can use the command `ovhdata-cli --help` to list generic CLI actions, `ovhdata-cli di --help` to list actions specific to the Data Integration service, and `ovhdata-cli di <action> --help` for more information about a specific action.

Please refer to the [CLI commands reference guide](/pages/platform/data-integration/guide_02_cli_commands_reference) for more information.

## We want your feedback!

Visit our [Discord server](https://discord.gg/ovhcloud). Ask questions, provide feedback and interact directly with the team that builds the Data Integration service.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
