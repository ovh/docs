---
title: Command line interface (CLI)
slug: administration-cli
section: Administration
order: 11
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

The CLI uses the git interface and the [{{< vendor/name >}} REST API](https://api.platform.sh/docs/) to accomplish tasks.
Its source code is hosted on [GitHub](https://github.com/platformsh/cli).

## 1. Install

{{< cli-installation >}}

## 2. Authenticate

To list and manage your projects, authenticate by running the following command:

```bash
platform
```

This process opens a browser tab for you to log in.
It also creates certificates on your computer for [SSH](../../development/ssh/_index.md).

Once you are logged in, a list of your projects appears, along with some tips for getting started.
If you experience authentication issues or want to force a login, run the command `webpaas login`.

## 3. Use

Now you can run actions on your projects such as branching and merging.
You can also simulate a local build of your codebase as if you were pushing a change to {{< vendor/name >}},
including your services and data.

Get a list of all available commands with:

```bash
webpaas list
```

To get more information on a specific command, preface it with `help`:

```bash
webpaas help get
```

You get output similar to the following:

```bash
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

When you are in an empty directory or a directory not associated with a specific {{< vendor/name >}} project,
if you run a command that requires a specific project and environment, you are prompted to select them.

For example, if you run the following command:

```bash
webpaas environment:info
```

You get the following output:

```bash
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
platform environment:info --project=my-project --environment=staging
```
* With environment variables:

```bash
export PLATFORM_PROJECT=my-project;
export PLATFORM_BRANCH=staging;
platform environment:info
```

In [multi-app](../../create-apps/multi-app/_index.md) projects, this applies also to selecting the right app
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
webpaas project:set-remote --project {{< variable "PROJECT_ID" >}}
```

Replace `{{< variable "PROJECT_ID" >}}` with the ID of your project.
You can find that in the Console or by running `webpaas projects` to list all accessible projects.

### Choose between the CLI and Git commands

Some CLI commands (especially many within the `environment` namespace) have some overlap with Git commands.
Generally, they offer more options than the Git commands alone.
For example, `webpaas push` offers options such as `--activate` (to activate an environment before pushing)
and `--no-wait` (so you can continue working without waiting for the push to complete).

For all of them, you don't need to configure a Git remote.
It's enough to have a project ID.

An example of how this affects commands is that when you run `webpaas merge`,
it doesn't affect your local codebase.
You don't even need the code locally.
The code is only merged between environments remotely.

### Customize the CLI

You can customize how the CLI operates and what it returns with a configuration file (`~/.platformsh/config.yaml`)
or environment variables.
For details, see the [customization instructions on GitHub](https://github.com/platformsh/legacy-cli#user-content-customization).

#### Automate repetitive tasks

You might want to use the CLI in a script to automate repetitive tasks such as synchronizing your files locally.
In such cases, you want to customize the CLI to bypass any confirmation questions.
You can set the answer to every question as `yes` using the `PLATFORMSH_CLI_NO_INTERACTION` environment variable.

For instance, to locally sync every mount point for your app named `app`, you could use this command:

```bash
export PLATFORM_PROJECT=my-project;
export PLATFORM_BRANCH=main;
export PLATFORMSH_CLI_NO_INTERACTION=1;
webpaas mount:download --all --app app --target local-backup
```

### Autocomplete commands

The CLI provides tab autocompletion for commands, options, and some values (your projects, valid regions).
To enable autocompletion, follow this step:

> [!tabs]      

### Run commands on your container

You can use the {{< vendor/name >}} CLI to run commands on your container.
You can use any command you've added in [dependencies](../../create-apps/app-reference.md#dependencies)
or a [hook](../../create-apps/app-reference.md#hooks).

The syntax looks like the following:

```bash
webpaas ssh -- {{< variable "COMMAND" >}} {{< variable "ARGUMENTS" >}}
```

For example, to run a specific Python script named `my-script.py` on your current environment,
run the following command:

```bash
webpaas ssh -- python my-script.py
```

Or to use [Drush](https://www.drush.org/latest/install/) to rebuild the cache on the `feature` environment,
run this command:

```bash
webpaas ssh -e feature -- drush -y cache-rebuild
```

### Update the CLI

To update to the latest version, use the same tool as for [installation](#1-install):

> [!tabs]      

## Upgrade from the legacy CLI

To upgrade from the legacy CLI, follow the [installation instructions](#1-install).
Once you've installed the latest version, the CLI guides you through removing the installed legacy CLI.
