---
title: Use the command line interface (CLI)
slug: development-cli
section: Development
order: 5
---

**Last updated 13th January 2022**


## Objective  

See how to use and manage your Web PaaS projects directly from your terminal. Anything you can do within the management console can be done with the CLI.


The CLI uses the git interface and the [Web PaaS REST API](https://api.platform.sh/docs/) to accomplish tasks.
Its source code is hosted on [GitHub](https://github.com/ovh/webpaas-cli).

## Before you begin

You need to have:

* PHP 5.5.9+
* Git
* A Bash-like shell

  On Windows, the best way to get Bash is through [Windows Subsystem for Linux](https://msdn.microsoft.com/en-gb/commandline/wsl/about).
  You can also use another Bash-compatible shell such as [Git Bash](https://gitforwindows.org/),
  which you might have installed with git.

For full requirements, see the [requirements on GitHub](https://github.com/ovh/webpaas-cli#requirements).

## 1. Install

Install the CLI using this command:

```bash
curl -fsS https://eu.cli.webpaas.ovhcloud.com/installer | php
```

If you run into issues or want to install manually, see the [installation instructions on GitHub](https://github.com/ovh/webpaas-cli#installation).

## 2. Authenticate

To see and manage projects, you need to be authenticated with Web PaaS
Run this command:

```bash
webpaas
```

You are asked to log in via a browser.
This process creates SSH certificates on your computer for secure connections.
(See more about [SSH connections](../development-ssh).)

Once you are logged in, a list of your projects appears, along with some tips for getting started.

If you experience authentication issues or want to force a login, run the command `webpaas login`.

## 3. Use

Now you can run actions on your projects such as branching and merging.
You can also simulate a local build of your codebase as if you were pushing a change to Web PaaS,
including your services and data.

To see all available commands, run `webpaas list`.
To get more information on a particular command, preface that command with `help`:

```bash
$ webpaas help get
Command: project:get
Aliases: get
Description: Clone a project locally

Usage:
 webpaas get [-e|--environment ENVIRONMENT] [--depth DEPTH] [--build] [-p|--project PROJECT] [--host HOST] [-i|--identity-file IDENTITY-FILE] [--] [<project>] [<directory>]

Arguments:
  project                            The project ID
  directory                          The directory to clone to. Defaults to the project title

Options:
  -e, --environment=ENVIRONMENT      The environment ID to clone. Defaults to the project default, or the first available
                                     environment
      --depth=DEPTH                  Create a shallow clone: limit the number of commits in the history
      --build                        Build the project after cloning
  -p, --project=PROJECT              The project ID or URL
      --host=HOST                    The project's API hostname
  -i, --identity-file=IDENTITY-FILE  An SSH identity (private key) to use
  -h, --help                         Display this help message
  -q, --quiet                        Do not output any message
  -V, --version                      Display this application version
  -y, --yes                          Answer "yes" to any yes/no questions; disable interaction
  -n, --no                           Answer "no" to any yes/no questions; disable interaction
  -v|vv|vvv, --verbose               Increase the verbosity of messages

Examples:
 Clone the project "abc123" into the directory "my-project":
   webpaas get abc123 my-project
```

### Select the right project and environment

When you are in an empty directory or a directory not associated with a specific Web PaaS project,
if you run a command that requires a specific project and environment, you are prompted to select them.

```bash
$ webpaas environment:info
Enter a number to choose a project:
  [0] My project (xb3pfo734qxbeg)
  [1] A great project (3p5fmol45kxp6)
  [2] An even better project (rjify4y564xaa)
> 
```

If your working directory is inside a local checkout of your project repository,
your project and environment are detected automatically.

You can always specify the project and environment in two ways:

* As arguments for the command:

```bash
$ webpaas environment:info --project=my-project --environment=staging
```
* With environment variables:

```bash
export PLATFORM_PROJECT=my-project;
export PLATFORM_BRANCH=staging;
platform environment:info
```

In [multi-app](../../configuration/app/multi-app.md) projects, this applies also to selecting the right app
(the environment variable would be `PLATFORM_APPLICATION_NAME`).

#### RootNotFoundException

If you check out a project via Git directly and not using the `webpaas get` command,
the CLI may be unable to determine what project it's in.
You might run a CLI command from within a project directory you've checked out and get an error like this:

```text
[RootNotFoundException] Project root not found. This can only be run from inside a project directory.
```

Then the CLI hasn't been able to determine the project to use.
To fix this, run:

```bash
webpaas project:set-remote <PROJECT_ID>
```

Replace `<PROJECT_ID>` with the ID of your project.
You can find that in the management console or by running `webpaas projects` to list all accessible projects.

### Choose between the CLI and Git commands

Some CLI commands (especially many within the `environment` namespace) have some overlap with Git commands.
Generally, they offer more options than the Git commands alone.
For example, `webpaas push` offers options such as `--activate` (to active an environment before pushing)
and `--no-wait` (so you can continue working without waiting for the push to complete).

For all of them, you don't need to configure a Git remote.
It's enough to have a project ID.

An example of how this affects commands is that when you run `webpaas merge`,
it doesn't affect your local codebase.
You don't even need the code locally.
The code is only merged between environments remotely.

### Customize the CLI

You can customize how the CLI operates and what it returns with a configuration file (`.platform/local/project.yaml`)
or environment variables.
For details, see the [customization instructions on GitHub](https://github.com/ovh/webpaas-cli#customization).

### Autocomplete commands

The CLI provides tab autocompletion for commands, options, and some values (your projects, valid regions).

Your system must include the `bash-completion` package or an equivalent.
This isn't available by default on macOS, but can be installed via `brew`.
Check your home directory and ensure that the file `~/.platformsh/autocompletion.sh` is being included by your shell.

If you experience issues, run `webpaas self:install` to attempt a reinstall of this utility.
