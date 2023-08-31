---
title: Use build and deploy hooks
slug: create-apps-hooks
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

As your app goes through the [build and deploy process](../../overview/build-deploy.md),
you might want to run custom commands.
These might include compiling the app, setting the configuration for services based on variables, and rebuilding search indexes.
Do these tasks using one of [three hooks](./hooks-comparison.md).

The following example goes through each of these hooks for the [Next.js Drupal template](https://github.com/platformsh-templates/nextjs-drupal).
This template uses [Drupal](https://www.drupal.org/) as the headless CMS backend
and [Next.js](https://nextjs.org/) for the frontend.
It's largely based on the [Next.js for Drupal project](https://next-drupal.org/)

The example commands are somewhat simplified, but you can find them all in the [GitHub repository](https://github.com/platformsh-templates/nextjs-drupal).

In this case, you have [two apps](../multi-app/_index.md) and so two [`{{< vendor/configfile "app" >}}` configuration files](../_index.md).
Each file is in the folder for that app: `api` for Drupal and `client` for Next.js.
You run one hook for Drupal and two hooks for Next.js.

## Build dependencies

The Next.js app uses Yarn for dependencies, which need to be installed.
Installing dependencies requires writing to disk and doesn't need any relationships with other services.
This makes it perfect for a `build` hook.

In this case, the app has two sets of dependencies:

* For the main app
* For a script to test connections between the apps

Create your `build` hook to install them all:

1\. Create a `build` hook in your [app configuration](../app-reference.md):


```yaml {configfile="app" dir="client" }
hooks:
    build: |
        set -e
```

   The hook has two parts so far:

   * The `|` means the lines that follow can contain a series of commands.
     They aren't interpreted as new YAML properties.
   * Adding `set -e` means that the hook fails if _any_ of the commands in it fails.
     Without this setting, the hook fails only if its _final_ command fails.

     If a `build` hook fails for any reason, the build is aborted and the deploy doesn't happen.
     Note that this only works for `build` hooks.
     If other hooks fail, the deploy still happens.
2\. Install your top-level dependencies inside this `build` hook:


```yaml {configfile="app" dir="client"}
hooks:
    build: |
        set -e
        yarn --frozen-lockfile
```

   This installs all the dependencies for the main app.
3\. Copy the [testing script from the template](https://github.com/platformsh-templates/nextjs-drupal/tree/master/client/platformsh-scripts/test/next-drupal-debug).

   Copy the files in this directory into a `client/platformsh-scripts/test` directory.
   This script debugs the connection between Next.js and Drupal.
4\. In the hook, switch to the directory with the testing script.

   Each hook starts in the [app root](../app-reference.md#root-directory).
   In this case, the app root is `client`.
   To run commands from a different directory, you need to change directories (relative to the app root):

```yaml {configfile="app" dir="client"}
hooks:
    build: |
        set -e
        yarn --frozen-lockfile

        cd platformsh-scripts/test
```

5\. Install the dependencies for the testing script:


```yaml {configfile="app" dir="client"}
hooks:
    build: |
        set -e
        yarn --frozen-lockfile

        cd platformsh-scripts/test
        yarn --frozen-lockfile
```

Now all your Next.js dependencies are installed.

## Configure Drush and Drupal

The template uses [Drush](https://www.drush.org/latest/) to handle routine tasks.
For its configuration, Drush needs the URL of the site.
That means the configuration can't be done in the `build` hook.
During the `build` hook, the site isn't yet deployed and so there is no URL to use in the configuration.
(The [`PLATFORM_ROUTES` variable](../../development/variables/use-variables.md#use-provided-variables) isn't available.)

Add the configuration during the `deploy` hook.
This way you can access the URL before the site accepts requests (unlike in the `post_deploy` hook).

The script also prepares your environment to handle requests,
such as by [rebuilding the cache](https://www.drush.org/latest/commands/cache_rebuild/)
and [updating the database](https://www.drush.org/latest/commands/updatedb/).
Because these steps should be done before the site accepts request, they should be in the `deploy` hook.

All of this configuration and preparation can be handled in a bash script.

1\. Copy the [preparation script from the template](https://github.com/platformsh-templates/nextjs-drupal/blob/master/api/platformsh-scripts/hooks.deploy.sh)

   into a file called `hooks.deploy.sh` in a `api/platformsh-scripts` directory.
   Note that hooks are executed using the dash shell, not the bash shell used by SSH logins.
2\. Copy the [Drush configuration script form the template](https://github.com/platformsh-templates/nextjs-drupal/blob/master/api/drush/platformsh_generate_drush_yml.php)

   into a `drush/platformsh_generate_drush_yml.php` file.
3\. Set a [mount](../app-reference.md#mounts).

   Unlike in the `build` hook, in the `deploy` hook the system is generally read-only.
   So create a mount where you can write the Drush configuration:

```yaml {configfile="app" dir="api"}
mounts:
     /.drush:
         source: local
         source_path: 'drush'
```

4\. Add a `deploy` hook that runs the preparation script:


```yaml {configfile="app" dir="api"}
hooks:
    deploy: !include
        type: string
        path: platformsh-scripts/hooks.deploy.sh
```

   This `!include` syntax tells the hook to process the script as if it were included in the YAML file directly.
   This helps with longer and more complicated scripts.

## Get data from Drupal to Next.js

This Next.js app generates a static site.
Often, you would generate the site for Next.js in a `build` hook.
In this case, you first need to get data from Drupal to Next.js.

This means you need to wait until Drupal is accepting requests
and there is a relationship between the two apps.
So the `post_deploy` hook is the perfect place to build your Next.js site.

You can also redeploy the site every time content changes in Drupal.
On redeploys, only the `post_deploy` hook runs,
meaning the Drupal build is reused and Next.js is built again.
So you don't have to rebuild Drupal but you still get fresh content.

1\. Set a relationship for Next.js with Drupal.

   This allows the Next.js app to make requests and receive data from the Drupal app.

```yaml {configfile="app" dir="client"}
relationships:
    api: 'api:http'
```

2\. Set [mounts](../app-reference.md#mounts).

   Like the [`deploy` hook](#configure-drush-and-drupal), the `post_deploy` hook has a read-only file system.
   Create mounts for your Next.js files:

```yaml {configfile="app" dir="client"}
mounts:
    /.cache:
        source: local
        source_path: 'cache'
    /.next:
        source: local
        source_path: 'next'
    /.pm2:
        source: local
        source_path: 'pm2'
    deploy:
        source: service
        service: files
        source_path: deploy
```

3\. Add a `post_deploy` hook that first tests the connection between the apps:


```yaml {configfile="app" dir="client"}
hooks:
    post_deploy: |
        . deploy/platformsh.environment
        cd platformsh-scripts/test && yarn debug
```

   Note that you could add `set -e` here, but even if the job fails, the build/deployment itself can still be counted as successful.

4\. Then build the Next.js site:


```yaml {configfile="app" dir="client"}
hooks:
    post_deploy: |
        . deploy/platformsh.environment
        cd platformsh-scripts/test && yarn debug

        cd $PLATFORM_APP_DIR && yarn build
```

   The `$PLATFORM_APP_DIR` variable represents the app root and can always get you back there.

## Final hooks

You can find the complete [Drupal configuration](https://github.com/platformsh-templates/nextjs-drupal/blob/master/api/.platform.app.yaml)
and [Next.js configuration](https://github.com/platformsh-templates/nextjs-drupal/blob/master/client/.platform.app.yaml)
on GitHub.
The following shows only the parts necessary for the hooks.

### Drupal

```yaml {configfile="app" dir="api"}
# The name of this app. Must be unique within the project.
name: 'drupal'

# The runtime the app uses.
type: 'php:8.1'

dependencies:
    php:
        composer/composer: '^2'

# The relationships of the app with services or other apps.
relationships:
    database: 'db:mysql'
    redis: 'cache:redis'

# The hooks executed at various points in the lifecycle of the app.
hooks:
    deploy: !include
      type: string
      path: platformsh-scripts/hooks.deploy.sh

# The size of the persistent disk of the app (in MB).
disk: 2048

# The 'mounts' describe writable, persistent filesystem mounts in the app.
mounts:
    /.drush:
        source: local
        source_path: 'drush'
    /drush-backups:
        source: local
        source_path: 'drush-backups'
    deploy:
        source: service
        service: files
        source_path: deploy
```

### Next.js

```yaml {configfile="app" dir="client"}
# The name of this app, which must be unique within the project.
name: 'nextjs'

# The type key specifies the language and version for your app.
type: 'nodejs:14'

dependencies:
    nodejs:
        yarn: "1.22.17"
        pm2: "5.2.0"

build:
    flavor: none

relationships:
    api: 'api:http'

# The hooks that are triggered when the package is deployed.
hooks:
    build: |
        set -e
        yarn --frozen-lockfile # Install dependencies for the main app

        cd platformsh-scripts/test 
        yarn --frozen-lockfile # Install dependencies for the testing script
    # Next.js's build is delayed to the post_deploy hook, when Drupal is available for requests.
    post_deploy: |
        . deploy/platformsh.environment
        cd platformsh-scripts/test && yarn debug

        cd $PLATFORM_APP_DIR && yarn build

# The size of the persistent disk of the app (in MB).
disk: 512

mounts:
    /.cache:
        source: local
        source_path: 'cache'
    /.next:
        source: local
        source_path: 'next'
    /.pm2:
        source: local
        source_path: 'pm2'
    deploy:
        source: service
        service: files
        source_path: deploy
```
