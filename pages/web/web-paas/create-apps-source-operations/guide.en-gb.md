---
title: Source operations
slug: create-apps-source-operations
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

On {{< vendor/name >}}, you can run automated code updates through a feature called **source operations**.
Defined in your [app configuration](./_index.md), source operations let you specify commands
that can commit changes to your project's repository when called.

For example, you can set up a source operation to [automatically update your application dependencies](../tutorials/dependency-updates.md),
[update a site from an upstream repository](#update-a-site-from-an-upstream-repository-or-template),
or [revert to the last commit](#revert-to-the-last-commit) pushed to your Git repository.

To run your source operations, you can use the [{{< vendor/name >}} CLI](../administration/cli/_index.md) or the [Console](https://console.platform.sh).
If you want to run your source operations and update your code automatically,
you can also define [cron jobs](./app-reference.md#crons).

## How source operations work

When you trigger a source operation, the following happens in order:

1\. The current environment HEAD commit is checked out in Git.

   It doesn't have any remotes or tags defined in the project.
   It only has the current environment branch.

2\. Sequentially, for each app that has an operation bearing [the name](#define-a-source-operation)

   of the triggered source operation in its configuration,
   the operation command is run in the app container.
   The container isn't part of the environment's runtime cluster
   and doesn't require that the environment is running.

   The environment has all of the variables normally available during the build phase.
   These may be optionally overridden by the variables specified when the operation is run.

3\. If any new commits were created, they're pushed to the repository and the normal build process is triggered.


   If multiple apps in a single project both result in a new commit,
   there are two distinct commits in the Git history but only a single new build process.

## Define a source operation

A source operation requires two things:

- A name that must be unique within the application.

  The name is the key of the block defined under `source.operations` in your [app configuration](./app-reference.md#source).

- A `command` that defines what's run when the operation is triggered.


The syntax is similar to the following:

```yaml {configFile="app"}
source:
    operations:
        {{< variable "SOURCE_OPERATION_NAME" >}}:
            command: {{< variable "COMMAND" >}}
```

For example, to update a file from a remote location, you could define an operation like this:

```yaml {configFile="app"}
source:
    operations:
        update-file:
            command: |
                set -e
                curl -O https://example.com/myfile.txt
                git add myfile.txt
                git commit -m "Update remote file"
```

The name of the source operation in this case is `update-file`.

For more possibilities, see other [source operation examples](#source-operation-examples).

## Run a source operation

> [!tabs]      

After running a source operation, 
to apply the changes to your local development environment run the `git pull` command.

Note that you can [cancel pending or running source operations](../environments/cancel-activity.md).

## Use variables in your source operations

You can add [variables](../development/variables/_index.md) to the environment of the source operation.

Use the `env:` prefix to expose each of those variables as a Unix environment variable.
In this way, they're referenced by the source operation
and interpreted the same way as any other variable set in your project.

For example, you might want to have a `FILE` variable available with the value `example.txt`
to pass to a source operation similar to the following:

```yaml {configFile="app"}
source:
    operations:
        update-file:
            command: |
                set -e
                curl -O https://example.com/$FILE
                git add $FILE
                git commit -m "Update remote file"
```

Follow these steps to run the source operation:

> [!tabs]      

## Source integrations

If your project is using a [source integration](../integrations/source/_index.md),
any new commits resulting from a source operation are first pushed to your external Git repository.
Then the source integration pushes those commits to {{< vendor/name >}} and redeploys the environment.

When using a source integration,
you can't run source operations on environments created from pull or merge requests created on the external repository.

If you try running a source operation on a non-supported environment, you see the following error:

```text
[ApiFeatureMissingException] 
This project doesn't support source operations.
```

## Automated source operations using a cron job

You can use cron to automatically run your source operations.

Note that it’s best not to run source operations on your production environment,
but rather on a dedicated environment where you can test changes.

Make sure you have the [{{< vendor/name >}} CLI](../administration/cli/_index.md) installed
and [an API token](../administration/cli/api-tokens.md#2-create-an-api-token)
so you can run a cron job in your app container.

1\.  Set your API token as a top-level environment variable:


> [!tabs]      

> [!primary]  
> 
> Once you add the API token as an environment variable,
> anyone with [SSH access](../development/ssh/_index.md) can read its value.
> Make sure you carefully check your [user access on this project](../administration/users.md#manage-project-users).
> 
> 

2\.  Add a build hook to your app configuration to install the CLI as part of the build process:


```yaml {configFile="app"}
hooks:
    build: |
        set -e
        echo "Installing {{< vendor/name >}} CLI"
        curl -fsSL https://raw.githubusercontent.com/platformsh/cli/main/installer.sh | bash

        echo "Testing {{< vendor/name >}} CLI"
        platform
```

3\.  Then, to configure a cron job to automatically run a source operation once a day,

    use a configuration similar to the following:

```yaml {configFile="app"}
crons:
    update:
        # Run the code below every day at midnight.
        spec: '0 0 * * *'
        commands:
            start: |
                set -e
                webpaas sync -e development code data --no-wait --yes
                webpaas source-operation:run update-file --no-wait --yes
```

The example above synchronizes the `development` environment with its parent
and then runs the `update-file` source operation defined [previously](#define-a-source-operation).

## Source operation examples

### Update your application dependencies

You can set up a source operation and a cron job to [automate your dependency updates](../tutorials/dependency-updates.md).

### Update a site from an upstream repository or template

The following source operation syncronizes your branch with an upstream Git repository.

1\. [Add a project-level variable](../development/variables/set-variables.md#create-project-variables)

   named `env:UPSTREAM_REMOTE` with the Git URL of the upstream repository.
   That makes that repository available as a Unix environment variable in all environments,
   including in the source operation's environment.

   - Variable name: `env:UPSTREAM_REMOTE`
   - Variable example value: `https://github.com/platformsh/platformsh-docs`

2\. In your app configuration, define a source operation to fetch from that upstream repository:


```yaml {configFile="app"}
source:
    operations:
        upstream-update:
            command: |
                set -e
                git remote add upstream $UPSTREAM_REMOTE
                git fetch --all
                git merge upstream/main
```

3\. Now every time you run the `upstream-update` operation on a given branch,

   the branch fetches all changes from the upstream git repository
   and then merges the latest changes from the default branch in the upstream repository.
   If there’s a conflict merging from the upstream repository,
   the source operation fails and doesn't update from the upstream repository.

Run the `upstream-update` operation on a Development environment rather than directly on Production.

### Revert to the last commit

The following source operation reverts the last commit pushed to the Git repository.
This can be useful if you didn't properly test the changes of another operation
and you need to quickly revert to the previous state.

```yaml {configFile="app"}
source:
    operations:
        revert:
            command: |                
                git reset --hard HEAD~
```

Now every time you run the `revert` operation on a given branch,
the operation reverts to the last commit pushed to that branch.

### Update Drupal Core

The following source operation uses Composer to update Drupal Core:

```yaml {configFile="app"}
source:
    operations:
        update-drupal-core:
            command: |
                set -e
                composer update drupal/core --with-dependencies
                git add composer.lock
                git commit -m "Automated Drupal Core update."
```

`--with-dependencies` is used to also update Drupal Core dependencies.
Read more on how to [update Drupal Core via Composer on Drupal.org](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer).

Now every time you run the `update-drupal-core` operation, it updates Drupal Core.

### Download a Drupal extension

The following source operation downloads a Drupal extension.
You can define the Drupal extension by setting an `EXTENSION` variable
or [overriding it](#use-variables-in-your-source-operations) when running the source operation.

```yaml {configFile="app"}
source:
    operations:
        download-drupal-extension:
            command: |
                set -e
                composer require $EXTENSION
                git add composer.json
                git commit -am "Automated install of: $EXTENSION via Composer."
```

Now every time you run the `download-drupal-extension` operation, it downloads the defined extension.

If it's a new extension, after the source operation finishes,
you need to enable the new extension via the Drupal management interface or using Drush.


### Update Git submodules 

The following source operation updates all Git submodules recursively:

```yaml {configFile="app"}
source:
    operations:
        rebuild:
            command: |
                set -e
                git submodule update --init --recursive
                git submodule update --remote --checkout
                SHA=$(git submodule | awk -F' ' '{print $1}' | sed -s 's/+//g')
                echo -n "$SHA" > .sha
                git add uppler .sha
                git commit -m "Updating submodule to commit '$SHA'"
```

Now every time you run the `rebuild` operation, it updates the Git submodules.
