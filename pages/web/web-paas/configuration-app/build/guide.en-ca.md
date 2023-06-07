---
title: Build and deploy
updated: 2021-05-25
---

**Last updated 25th May 2021**



## Objective  

The `.platform.app.yaml` file provides a number of ways to control how an application gets turned from a directory in Git into a running application.  There are three blocks that control different parts of the process: the build flavor, dependencies, and hooks.  The build process will run the build flavor, then install dependencies, then run the user-provided build hook.  The deploy process will run the deploy hook.

## Build

The `build` defines what happens when building the application.  Its only property is `flavor`, which specifies a default set of build tasks to run. Flavors are language-specific.







In all languages, you can also specify a flavor of `none` (which is the default for any language other than PHP and Node.js); as the name suggests it will take no action at all. That is useful when you want complete control over your build steps, such as to run a custom Composer command or use an alternate Node.js package manager.

```yaml
build:
    flavor: none
```

## Build dependencies

It is also possible to install additional system-level dependencies as part of the build process.  These can be installed before the `build` hook runs using the native package manager for several web-focused languages.

Web PaaS supports pulling any dependencies for the following languages:

* PHP (via [Composer](https://getcomposer.org/))
* Python 2 and 3 (via [Pip](https://packaging.python.org/tutorials/installing-packages/))
* Ruby (via [Bundler](https://bundler.io/))
* Node.js (via [NPM](https://www.npmjs.com/))
* Java (via [Apache Maven](https://maven.apache.org/), [Gradle](https://gradle.org/), or [Apache Ant](https://ant.apache.org/))

### Python dependencies

Applications can have both Python 2 and Python 3 dependencies, using the version of each that is packaged with the most recent Debian distribution. The format of Python dependencies complies with [PEP 394](https://www.python.org/dev/peps/pep-0394/). That is, specifying a dependency in a `python` or `python2` block will use `pip2` and Python 2, while specifying a dependency in a `python3` block will use `pip3` and Python 3.

We suggest that you specify your dependencies with the specific version of Python you wish to use (i.e. either `python2` or `python3`), rather than with the generic `python` declaration, to ensure your application will function normally in the future if Debian's default version of Python changes.

### Specifying dependencies

Build dependencies are independent of the eventual dependencies of your application and are available in the `PATH` during the build process and in the runtime environment of your application.  Note that in many cases a given package can be installed either as a global dependency or as part of your application's own dependencies.  In such cases it's up to you which one to use.

You can specify those dependencies as shown below:

```yaml
dependencies:
  php: # Specify one Composer package per line.
    drush/drush: '8.0.0'
  python: # Specify one Python 2 package per line.
    behave: '*'
  python2: # Specify one Python 2 package per line.
    requests: '*'
  python3: # Specify one Python 3 package per line.
    numpy: '*'
  ruby: # Specify one Bundler package per line.
    sass: '3.4.7'
  nodejs: # Specify one NPM package per line.
    pm2: '^4.5.0'
```

Note that the package name format for each language is defined by the package manager used; similarly, the version constraint string will be interpreted by the package manager.  Consult the appropriate package manager's documentation for the supported formats.

## Hooks

Web PaaS supports three "hooks", or points in the deployment of a new version of an application that you can inject a custom script into.  Each runs at a different stage of the process.

Each hook is executed as a single script, so they will be considered failed only if the final command in them fails. To cause them to fail on the first failed command, add `set -e` to the beginning of the hook.  If a build hook fails for any reason then the build is aborted and the deploy will not happen.

The "home" directory for each hook is the application root. If your scripts need to be run from the doc root of your application, you will need to `cd` to it first; e.g.: `cd web`.

```yaml
hooks:
    build: |
        set -e
        cd web
        cp some_file.php some_other_file.php
    deploy: |
        update_schema.sh
    post_deploy: |
        set -e
        import_new_content.sh
        clear_cache.sh
```

The `|` character tells YAML that the lines that follow should be interpreted literally as a newline-containing string rather than as multiple lines of YAML properties.

Hooks are executed using the dash shell, not the bash shell used by normal SSH logins. In most cases that makes no difference but may impact some more involved scripts.

### Build hook

The `build` hook is run after the build flavor (if any).  At this point no services (such as a database) are available nor any persistent file mounts, as the application has not yet been deployed. Environment variables that exist only at runtime such as `PLATFORM_BRANCH`, `PLATFORM_DOCUMENT_ROOT` etc. are not available during this phase. The full list of build time and runtime variables is available on the [variables page](/pages/web/web-paas/development-variables#platformsh-provided-variables).  There are three writeable directories at this time:

* `$PLATFORM_APP_DIR` - This is where your code is checked out, and is the working directory when the build hook starts.  The contents of this directory after the build hook is what will be "the application" that gets deployed.  (This directory is always `/app`, but it's better to use the variable or rely on the working directory than to hard code that.)  Most of the time, this is the only directory you use.
* `$PLATFORM_CACHE_DIR` - This directory persists between builds, but is NOT deployed as part of your application.  It's a good place for temporary build artifacts, such as downloaded `.tar.gz` or `.zip` files, that can be reused between builds.  Note that it is shared by all builds on all branches, so if using the cache directory make sure your build code accounts for that.
* `/tmp` - The temp directory is also useful for writing files that are not needed in the final application, but it will be wiped between each build.

There are no constraints on what can be downloaded during your build hook except for the amount of disk available at that time. Independent of the mounted disk size you have allocated for deployment, build environments (the application plus the cache directory) and therefore application images are limited to 4 GB during the build phase. If you exceed this limit you will receive a `No space left on device` error. It is possible to increase this limit in certain situations, but it will be necessary to open a support ticket in order to do so. 

### Deploy hook

The `deploy` hook is run after the application container has been started, but before it has started accepting requests.  You can access other services at this stage (MySQL, Solr, Redis, etc.). The disk where the application lives is read-only at this point.  Note that the deploy hook will only run on a [`web`](../web) instance, not on a [`worker`](/pages/web/web-paas/configuration-app/workers) instance.

Be aware: The deploy hook blocks the site accepting new requests.  If your deploy hook is only a few seconds then incoming requests in that time are paused and will continue when the hook completes, effectively appearing as the site just took a few extra seconds to respond.  If it takes too long, however, requests cannot be held and will appear as dropped connections.  Only run tasks in your deploy hook that have to be run exclusively, such as database schema updates or some types of cache clear.  A post-deploy task that can safely run concurrently with new incoming requests should be run as a `post_deploy` hook instead.

After a Git push, in addition to the log shown in the activity log, you can see the results of the `deploy` hook in the `/var/log/deploy.log` file when logged in to the environment via SSH. It contains the log of the execution of the deployment hook. For example:

```bash
[2014-07-03 10:03:51.100476] Launching hook 'cd public ; drush -y updatedb'.

My_custom_profile  7001  Update 7001: Enable the WebPaas module.
Do you wish to run all pending updates? (y/n): y
Performed update: my_custom_profile_update_7001
'all' cache was cleared.
Finished performing updates.
```

### Post-Deploy hook

The `post_deploy` hook functions exactly the same as the `deploy` hook, but after the container is accepting connections.  That is, it will run concurrently with normal incoming traffic.  That makes it well suited to any updates that do not require exclusive database access.

What is "safe" to run in a `post_deploy` hook vs. in a `deploy` hook will vary by the application.  Often times content imports, some types of cache warmups, and other such tasks are good candidates for a `post_deploy` hook.

The `post_deploy` hook logs to its own file in addition to the activity log, `/var/log/post-deploy.log`.

## How do I compile Sass files as part of a build?

As a good example of combining dependencies and hooks, you can compile your Sass files.

Let's assume that your application has Sass source files in the `web/styles` directory. That directory also contains a `package.json` file for npm.

The following blocks will download a specific version of Sass, then during the build step will call a `build-css` npm script to proceed with the Sass files compilation. This assumes that you have a `build-css` npm script set up to run `sass`, be it with a tool such as webpack or using the binary directly.

```yaml
dependencies:
  nodejs:
    sass: "^1"

hooks:
  build: |
    npm install
    npm run build-css
```

## How can I run certain commands only on certain environments?

The `deploy` and `post_deploy` hooks have access to all of the same [environment variables](/pages/web/web-paas/development-variables) as the application does normally, which makes it possible to vary those hooks based on the environment.  A common example is to enable certain modules only in non-production environments.  Because the hook is simply a shell script we have full access to all shell scripting capabilities, such as `if/then` directives.

The following example checks the `$PLATFORM_BRANCH` variable to see if we're in a production environment (the `master` branch) or not.

```yaml
hooks:
    deploy: |
        if [ "$PLATFORM_BRANCH" = master ]; then
            # Run commands only when deploying on master
        else
            # Run commands only when deploying on dev environments
        fi
        # Commands to run regardless of the environment
```


