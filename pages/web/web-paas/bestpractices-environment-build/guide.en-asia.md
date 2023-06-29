---
title: Environment variables
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Some applications have different "modes" that they can run in. That sometimes plays very well with Web PaaS, other times not.

## How build works

The Web PaaS build process is run independently of any given environment.  That's because the built application image is reusable in multiple environments.

During the build process, each application (defined by a `.platform.app.yaml` file) is built independently, and the output cached based on its Git tree ID.  That corresponds to a hash of the contents of all files in that directory.  The result is that a given application image is only ever rebuilt if something has changed.  If nothing in Git has changed, the corresponding application image can be reused.

That offers two key advantages.

1\. It improves build performance, as there is no need to rebuild images that are already cached.  (That skips downloading dependencies, generating code, compiling to binaries, generating CSS or JS files, etc.)

2\. In case of a fast-forward merge from a feature branch to production, the same application image can be reused.  That means what is deployed to production is not "similar to" what was in a testing branch but is the same exact bits on disk.  That is the closest it's possible to get to "staging is the same as production" and provides the best possible guarantee that the production deployment will be successful.


In order to achieve that, the build process can depend only on input reflected in the tree ID, that is, the files in Git.  The tree ID does not reflect the Git branch it is on, because a given commit may be on many branches at different times.  For that reason, Web PaaS also does not expose any branch-specific or environment-specific environment variables in the build process.  Using those as inputs to the build process would fail as soon as the application image is reused.

That is also why dependencies should be downloaded based on a lock file only, which should be committed to Git.  The lock file guarantees precisely what verions will be downloaded.  Downloading from a definition file (`composer.json`, `Pipfile`, `package.json`, etc.) may result in different dependency versions being installed at different times, and thus unpredictable results.

Similarly, while it is possible to download arbitrary additional files during the build process, we strongly recommend doing so only on pinned, fixed versions of a downloaded file, not a "latest" marker or similar.  Doing so could result in unpredictable build output.

## Environment-specific configuration

Once an application has been deployed, it has access to more environment variables.  That includes Web PaaS variables such as `PLATFORM_RELATIONSHIPS` and `PLATFORM_ROUTES` as well as any [variables](/pages/web/web-paas/development-variables) you define.  These variables can and will vary between environments, and your application is welcome to leverage them as appropriate.  You can access them directly or via the Web PaaS Configuration Reader libraries, which are available for a number of languages.

Many applications have some configuration that should vary between different environment types.  They generally break down into three categories.

1\. Service configuration for the database and such, which should always be read from `PLATFORM_RELATIONSHIPS`.

2\. Mode toggles, such as a "debug" mode, disabling certain caches, displaying more verbose errors, etc.

3\. API keys for remote services, especially payment gateways.


Ideally, the application will already come designed to read those values from environment variables.  If not, there is usually a way to manually bridge them.  For example, an application that has a PHP or Javascript configuration file can have that file modified to read the values from the environment at runtime rather than being written statically into the file.

There are several ways to set an environment variable.  Which one is preferred depends on the specific use case.

### Universal environment variables

For environment variables that should be consistent across all environments, the easiest place to set them is in the `.platform.app.yaml` file itself.  That way it can be versioned "just like code."

```yaml
variables:
    env:
        MY_ENV_VAR: "some value"
```

The `env:` prefix will expose `MY_ENV_VAR` as a Unix environment variable.  It will be accessible through your language's normal environment API.

### Dev/Prod environment variables

For variables that should vary between production and "other" environments, such as API gateway credentials, the most convenient approach is to set the "other" version as a [project-level variable](/pages/web/web-paas/development-variables#project-variables) (shared by all environments, and optionally accessible during build) and then override it just on the production branch (`master`).

1\. Set the project-level "dev mode" variable


```bash
webpaas variable:create --level project --name env:API_CREDS --value some_key_hash
```

    Note the `env:` prefix, which is what will create the variable as its own Unix environment variable. `API_CREDS` will now be available in all environments unless overridden on a specific environment.

2\. Set the production variable on the `master` branch


````bash
webpaas variable:create -e master --name env:API_CREDS --inheritable false --sensitive true --value some_other_hash_key
````

    The `--inheritable false` flag means the variable will be set on that one environment only, and will not be inherited by its child environments.  The child environments will get the project variable "dev mode" value instead.  You can, on an individual environment basis, set another alternate value if desired.

### Static file configuration

A few applications, unfortunately, require configuration values to be specified in a static, non-executable file (such as a `.ini`, `.xml`, or `.yaml` file) and do not support reading from environment variables.  These files cannot be populated at build time as environment-specific values are not available, but cannot be written to in deploy as the file system is read only.  That is a design flaw in the application, and you should file a bug with the application or framework author.

A possible workaround is to symlink the file to a writeable location, then use a deploy hook script to write files out to that file.  The details of this process will vary by the application, but an outline of this process is shown below.

First, create a non-web-accessible mount point in your `.platform.app.yaml` file:

```yaml
# .platform.app.yaml

mounts:
    /config:
        source: local
        source_path: config
```

Second, create a symbolic link from the config file the application wants to a location in that mount.  For example:

```bash
# From the application root...

ln -s config/db.yaml db.yaml
```

The above assumes that `db.yaml` in the root of the application is where the application expects to find its configuration file containing database credentials.  That will almost certainly be different for your application so modify it as appropriate.  Ensure that the `db.yaml` symbolic link is committed to Git.

The file `config/db.yaml` does not need to exist.  In fact, that directory should be empty in Git, as it will be created by the file mount.

Third, configure a script that will read from the environment configuration and write out `config/db.yaml`.  That script will run from the `deploy` hook, and can be written in whatever language you prefer.  A basic shell script version could look like this:

```bash
#!/bin/bash

# Empty out the file.
cat '' > config/db.yaml

# Use the jq library to extract database information from the
# PLATFORM_RELATIONSHIPS structure and write out each property
# as one line in the YAML file.  Your application almost certainly
# will need an alternate structure; this is only an example.

printf "host: %s\n" $(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].host") >> config/db.yaml
printf "port: %s\n" $(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].port") >> config/db.yaml
printf "name: %s\n" $(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].path") >> config/db.yaml
printf "user: %s\n" $(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].username") >> config/db.yaml
printf "pass: %s\n" $(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].password") >> config/db.yaml
```

Save the above script in a file named `export-config.sh`.  Then call it from the `deploy` hook in `.platform.app.yaml`:

```yaml
hooks:
    deploy: |
        bash export-config.sh
```

Now, when the application starts and attempts to parse `db.yaml`, the symbolic link will redirect it to the writeable `config/db.yaml` instead.  That file is written to on each deploy with updated information by your script.  The application will read the exported values and proceed as expected.

Again, this approach should be viewed as a workaround to the bug in the application that provides no better alternative for enviroment-sensitive configuration.

## Using `.env` files

Many applications have adopted a convention of using a file named `.env` in the application root for configuration.  Specifically, `.env` provides a place for fallback configuration in case an environment variable is not set.  An application that uses `.env` files correctly will, on startup, look for a `.env` file and map each value found there to an environment variable within the application, if and only if that environment variable is not already defined.

`.env` files are very useful for environment-variable-configured applications in local development, as they allow developers to avoid setting a global environment variable on their whole computer just to configure the application to talk to a local test database or similar.  However, `.env` files should not be used in production.  In production, the application should read directly from real environment variables.  That also means *the `.env` file should never be committed to Git*.  It should be explicitly excluded in `.gitignore` to avoid confusion, as its values will vary with every local developer's own computer.  A `.env` file should never be used on a Web PaaS environment.

## Variable mapping

If the application needs a different set of environment variable names than the variables set by Web PaaS (which is common for database connections) they can be mapped over from Web PaaS's variable names to those required by the application.  That can be done in the application with the help of the Config Reader libraries, if it offers a place to do so, or via a shell script.

For example, the following `.environment` script, located in the application root, will run automatically on every shell invocation (application startup or SSH login), and variables it exports will be visible to the application.  It uses the `jq` library, which is included in all application containers for this purpose.

```bash
# .environment

export APP_DATABASE_HOST=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].host")
export APP_DATABASE_PORT=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].port")
export APP_DATABASE_NAME=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].path")
export APP_DATABASE_USER=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].username")
export APP_DATABASE_PASSWORD=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].password")
```

