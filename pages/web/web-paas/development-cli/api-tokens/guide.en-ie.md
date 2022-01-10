---
title: Authenticating with API tokens
slug: api-tokens
section: Cli
---

**Last updated 7th January 2022**



## Objective  

When setting up CI services and other automation tools,
you may want to allow them to use the Web PaaS CLI to carry out certain tasks.
Logging in via a browser is not an option in these cases.

To run the CLI from such a tool or on an app container, such as via a cron hook, set up an API token to authenticate.

## Create a machine user

For security reasons, we recommend creating a dedicated machine user to run automation tasks,
such as taking backups and triggering source operations.
We also strongly recommend creating a unique machine user for each project to be automated.

Like human users, every machine user account needs its own unique email address.

The machine user can be given a very restrictive set of [access permissions](../../administration-users) limited to just its needed tasks.
For example, backups require `Admin` access but no SSH key,
while checking out code from a CI server to run tests on it would require an SSH key but only `Viewer` access.

It will also show up in logs and activity streams as a separate entry from human users.

To add the user:

1\. In a terminal, run `webpaas user:add email@example.com`, replacing the email with the one for your machine user.

1\. (If not within a specific project) choose a project to add the user to.

1\. Press `enter` to make the user a viewer of the entire project.

1\. Assign the user the correct permissions for each environment type.

   (See the [users documentation](../../administration-users) for more on access levels.)
1\. Press `enter` to send the invitation.

1\. In your email, click the link in the invitation to accept and then follow the steps to create an account.


## Get a token

Once you have a machine user in place, you want to assign an API token to it.

To get an API token:

1\. As the machine user, open the management console.

1\. Click your username to open a menu and select **Account**. 

1\. Go to the **API Tokens** tab.

1\. Click **Create API Token**.


   ![The Create API Token button in the console](images/api-tokens-new.png "0.6")

1\. Enter a name to identify your token in the future if you have multiple tokens ("CLI automated" is one example).


   ![Creating an API token with the name 'CI tests'](images/api-tokens-name.png "0.6")

1\. Click **Copy** to copy the token to your clipboard.

   Make sure to store the key safely as you can't view the API token again.

   ![Viewing the API token after it's created](images/api-tokens-view.png "0.6")

## Use the API token to authenticate the CLI

Once you have the API token copied, you can use it for your automation tools.

### In another CI system

Set the token in an environment variable named `PLATFORMSH_CLI_TOKEN` on the system where the CLI will run.
Consult the documentation for your CI system to see how to do that.

> [!primary]  
> 
> If running CLI commands from any automated system,
> we urge you to use the `--no-wait` flag on any commands that may take more than a second or two to avoid blocking the process.
> 
> 

## On a Web PaaS environment

To allow the Web PaaS CLI to be run on an app container, such as via a cron hook, use the API token.
The CLI is able to auto-detect the current project and environment.

Set the token as the [top-level](../../development-variables#top-level-environment-variables) environment variable `env:PLATFORMSH_CLI_TOKEN`
either [through the management console](../../administration-web/configure-environment#variables) or via the CLI, like so:

```bash
webpaas variable:create -e <BRANCH_NAME> --level environment --name env:PLATFORMSH_CLI_TOKEN --sensitive true --value '<YOUR_API_TOKEN>'
```

> [!primary]  
> 
> It's important to include the `env:` so as to expose `$PLATFORMSH_CLI_TOKEN` on its own as a top level Unix environment variable,
> rather than as a part of `$PLATFORM_VARIABLES` like normal environment variables.
> 
> 

Second, add a build hook to your `.platform.app.yaml` file to download the CLI as part of the build process.

```yaml
hooks:
    build: |
        curl -fsS https://platform.sh/cli/installer | php
```

This will download the CLI to a known directory, `.platformsh/bin`,
which will be added to the PATH at runtime (via the .environment file).
Because the API token is available, the CLI will now be able to run authenticated commands,
acting as the user who created the token.

You can now call the CLI from within the shell on the app container or via a cron hook.

To run a cron only on the production environment, wrap it in an if-check on the `$PLATFORM_BRANCH` variable, like so:

```yaml
crons:
    backup:
        spec: '0 5 * * *'
        cmd: |
            if [ "$PLATFORM_ENVIRONMENT_TYPE" = production ]; then
                webpaas backup:create --yes --no-wait
            fi
```

> [!primary]  
> 
> If running CLI commands from any automated system, including a Web PaaS cron task,
> we urge you to use the `--no-wait` flag on any commands that may take more than a second or two to avoid blocking the process.
> Failure to do so may result in long deploy times and site downtime.
> 
> 
