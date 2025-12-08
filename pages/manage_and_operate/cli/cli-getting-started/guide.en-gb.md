---
title: Getting Started with OVHcloud CLI
excerpt: Find out about useful resources in order to use the official OVHcloud Command Line Interface (CLI)
updated: 2025-10-13
---

## Objective

The OVHcloud Command Line Interface (CLI) is a tool designed to interact with OVHcloud services directly from your terminal. It allows you to automate tasks, manage resources, and access OVHcloud APIs efficiently.

## Installation

To install the OVHcloud CLI, you can use the following command:

```sh
curl -fsSL https://raw.githubusercontent.com/ovh/ovhcloud-cli/main/install.sh | sh
```

It is also possible to install OVHcloud CLI using Homebrew:

```sh
brew install --cask ovh/tap/ovhcloud-cli
```

Alternatively, you can download the latest release from the [GitHub repository](https://github.com/ovh/ovhcloud-cli):

1. Visit the [releases page](https://github.com/ovh/ovhcloud-cli/releases).
1. Download the binary for your operating system (Linux, macOS, or Windows).
1. Unpack the archive and move the binary to a directory included in your `$PATH`.
1. Verify the installation:

```sh
ovhcloud version
```

## Authenticating the CLI

OVHcloud CLI requires authentication to be able to make API calls. There are several ways to define your credentials.

Check out the [authentication page](https://github.com/ovh/ovhcloud-cli/blob/main/doc/authentication.md) for further information about the configuration and the authentication means.

- Interactive login:

```sh
# Log in and create API credentials (interactive)
ovhcloud login
```

- Using a configuration file:

Default settings can be set using a configuration file named `.ovh.conf` and located in your `${HOME}` directory.
You can check [this guide](/pages/manage_and_operate/api/first-steps) to learn how to create API credentials.

Example of configuration file:

```ini
[default]
endpoint = ovh-eu

[ovh-eu]
application_key    = <application key>
application_secret = <application secret>
consumer_key       = <consumer key>

[ovh-cli]
default_cloud_project = <Public Cloud project ID>
```

- Using environment variables:

```sh
OVH_ENDPOINT=ovh-eu
OVH_APPLICATION_KEY=xxx
OVH_APPLICATION_SECRET=xxx
OVH_CONSUMER_KEY=xxx
OVH_CLOUD_PROJECT_SERVICE=<Public Cloud project ID> 
```

## Example Commands

Here are some basic commands to get started:

- **List your cloud projects**:

```sh
ovhcloud cloud project list
```

- **Show details of a specific project**:

```sh
ovhcloud cloud project get <PROJECT_ID>
```

- **List instances in a project**:

```sh
ovhcloud cloud instance list --cloud-project <PROJECT_ID>
```

- **Create a new instance**:

```sh
ovhcloud cloud instance create BHS5 --cloud-project <PROJECT_ID> --name my-instance --flavor-selector --image-selector --network.public --ssh-key.name <SSH_KEY_NAME>
```

> [!primary]
>
> **Note**: The `--project-id` option is not necessary if you defined a `default_cloud_project` in your configuration file, or if the `OVH_CLOUD_PROJECT_SERVICE` environment variable is defined.

For further information about the available commands, you can check the [complete documentation](https://github.com/ovh/ovhcloud-cli/blob/main/doc/ovhcloud.md).

## Product Coverage

Most products offer basic commands to list services, retrieve and edit their details. Some products already have more advanced coverage, for example: Baremetal, Public Cloud (Instances, Managed Kubernetes, Rancher, Storage, Network), VPS and IAM.

> [!primary]
>
> **Note**: The actions currently available in the CLI correspond to those offered by the main OVHcloud API. Actions specific to each product, accessible via their own APIs, are not yet covered, but will gradually be added depending on the product.

## Resources

- [OVHcloud CLI GitHub Repository](https://github.com/ovh/ovhcloud-cli)
- [CLI Documentation](https://github.com/ovh/ovhcli#readme)
- [API Reference](/links/console)