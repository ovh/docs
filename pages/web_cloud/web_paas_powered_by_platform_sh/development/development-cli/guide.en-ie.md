---
title: CLI (Command line interface)
updated: 2021-03-31
---



## Objective  

The CLI is the official tool to use and manage your Web PaaS projects directly from your terminal. Anything you can do within the management console can be done with the CLI.


Behinds the scenes it uses both the Git interface and our REST API. The source code of the CLI is hosted on [GitHub](https://github.com/ovh/webpaas-cli).



## Installation

You can install the CLI easily using this command:

```bash
curl -fsS https://eu.cli.webpaas.ovhcloud.com/installer | php
```

You can find the system requirements and more information in the [installation instructions on GitHub](https://github.com/ovh/webpaas-cli/blob/master/README.md#installation).

## Authentication

The [Web PaaS CLI](https://github.com/ovh/webpaas-cli) will authenticate you with Web PaaS and show your projects. Just type this command to start:

```bash
webpaas
```

You will be asked to log in via a browser.

When you are logged in, a list of your projects appears, along with some tips for getting started.

**Your command-line tools are now ready to use with Web PaaS.**

> [!primary]  
> Please consult [the full documentation on CLI Authentication](https://github.com/ovh/webpaas-cli#authentication) on the public CLI Github repository for further details.
> 

## Usage

The CLI uses Web PaaS API to trigger commands (*Branch, Merge...*) on your projects.

It's also very useful when you work locally since it can simulate a local build of your codebase as if you were pushing a change to Web PaaS.

Once you have the CLI installed, run `webpaas list` to see all of the available commands.

You can preface any command with `help` to see more information on how to use that command.

```bash
$ webpaas help domain:add
Command: domain:add
Description: Add a new domain to the project

Usage:
 domain:add [--project[="..."]] [--cert="..."] [--key="..."] [--chain="..."] [name]

Arguments:
 name                  The name of the domain

Options:
 --project             The project ID
 --cert                The path to the certificate file for this domain.
 --key                 The path to the private key file for the provided certificate.
 --chain               The path to the certificate chain file or files for the provided certificate. (multiple values allowed)
 --help (-h)           Display this help message
 --quiet (-q)          Do not output any message
 --verbose (-v|vv|vvv) Increase the verbosity of messages
 --version (-V)        Display this application version
 --yes (-y)            Answer "yes" to all prompts
 --no (-n)             Answer "no" to all prompts
 --shell (-s)          Launch the shell
```

## CLI features

Additional settings to control the operation of the Web PaaS CLI can be managed in the configuration file (`.platform/local/project.yaml`) or environment variables. See the [`README` for the CLI for details](https://github.com/ovh/webpaas-cli/blob/master/README.md#usage).

## Auto-selecting your project

When your shell's working directory is inside a local checkout of your project repository, the CLI will autodetect your project ID and environment so you don't need to list them as parameters each time.

In your home directory, for example, you need to provide the project ID as an argument each time:

```bash
$ webpaas project:info --project=acdefghijkl --environment=staging
```

You can instead get the same result with just:

```bash
$ cd myproject
$ webpaas project:info
```

You can also set a preferred project ID with the environment variables `PLATFORM_PROJECT`, `PLATFORM_BRANCH` and `PLATFORM_APPLICATION_NAME`.

```bash
export PLATFORM_PROJECT=acdefghijkl;
export PLATFORM_BRANCH=staging;
webpaas project:info
```

## Autocomplete on the command line

Once installed, the `webpaas` CLI tool provides tab auto-completion for commands, options, and even some values (your projects, valid regions).

> [!primary]  
> Your system must include the `bash-completion` package or equivalent. This is not available by default on OSX, but can be installed via `brew`. Check your home directory and ensure that the file `~/.platformsh/autocompletion.sh` is being included by your shell. `webpaas self:install` will attempt a reinstall of this utility if it's needed.
> 

## Installing the CLI on Windows 10

There are multiple ways to install the CLI on Windows 10. Web PaaS recommends using Bash for Windows (Windows Subsystem for Linux).

### Installing Bash for Windows

You can install Bash to use the CLI on a Windows 10, 64-bit machine. The Windows 10 Anniversary Update is needed to support Git.

To install Bash on Windows 10 Anniversary Edition you need to:

1\. Activate the Developer Mode in "Update & Security" in Windows Settings. This will prompt you to restart your computer.

2\. Activate the "Windows Subsystem for Linux (Beta)", under "Turn Windows features on or off" in the Programs and Features section of the Control Panel. Once again, you will need to restart your computer.

3\. In the Start Menu, search for the program "bash.exe", which will prompt you to install it from the Windows Store.


Bash is now installed.

You can read more on [WindowsCentral](https://www.windowscentral.com/how-install-bash-shell-command-line-windows-10).

Upon starting Bash, you will be asked to choose a username. According to the article, it doesn't have to be the same as your current username. However, if the username don't exist, the Linux system might not be able to create the Linux directory (depending on your permissions level). It is therefore recommended you use the same username for Linux as your Windows machine (provided your Windows user name isn't "Admin", as that will not be allowed).

Once Bash for Windows is installed, you can install the Web PaaS CLI with the same command as above:

```bash
curl -fsS https://eu.cli.webpaas.ovhcloud.com/installer | php
```
