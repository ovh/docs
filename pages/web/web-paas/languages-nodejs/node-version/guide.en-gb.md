---
title: Manage Node.js versions
slug: node-version
section: Nodejs
---

**Last updated 31st August 2023**



## Objective  

Each {{< vendor/name >}}container image includes a specific language in a specific version.
A set of dependencies is also provided based on that language version.
This ensures that your application container is as small and efficient as possible.

Therefore, by default, when you use a {{< vendor/name >}} container image,
you use the Node.js version that's included in that image, if any.

If you want to use a different Node.js version, use a version manager to install it yourself.
You can use one of the following version managers:

- [Use `n`](#use-n)

- [Use `nvm`](#use-nvm)


Both of the recommendations use a `.nvmrc` file to specify the desired Node.js version.
You could also specify a different file or use [environment variables](../../development/variables/_index.md).

## Use `n`

The [`n` package](https://github.com/tj/n) works for various Unix-like systems,
including Windows Subsystem for Linux.

1\. Add the desired Node.js version to your environment using `.nvmrc`, `.n-node-version`, `.node-version`, or `package.json`.


> [!tabs]      

2\. Add it as a dependency:


```yaml {configFile="app"}
dependencies:
    nodejs:
        n: "*"
```

   Adding it as a dependency ensures it's cached for future builds.
3\. Set the location of the `n` files using the `N_PREFIX` environment variable:


```yaml {configFile="app"}
variables:
    env:
        N_PREFIX: /app/.global
```

4\. Install the specified version of Node.js in a [`build` hook](../../create-apps/hooks/hooks-comparison.md#build-hook):


```yaml {configFile="app"}
hooks:
    build: |
        # Exit the hook on any failure
        set -e

        # Install the version specified in the .nvmrc file
        n auto

        # Reset the location hash to recognize the newly installed version
        hash -r
```

Now your hooks should be able to use the specified version of Node.js.
You can verify this by running `node -v`.

Your final app configuration should look something like this:

```yaml {configFile="app"}
name: app
type: 'python:3.9'

dependencies:
    nodejs:
        n: "*"

variables:
    env:
        N_PREFIX: /app/.global

hooks:
    build: |
        # Exit the hook on any failure
        set -e

        # Install the version specified in the .nvmrc file
        n auto

        # Reset the location hash to recognize the newly installed version
        hash -r
```

## Use `nvm`

[Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm) is a bash script for managing Node.js versions.

You can use it to:

- Make a specific version available in the build and optionally the runtime container.

- Control the specific versions to be installed with [environment variables](../../development/variables/_index.md),

  meaning you can also have different versions in different environments.

To use `nvm`, follow these steps:

1\. Define which `nvm` version to use using an [environment variable](../../development/variables/_index.md).

   Add it to your [app configuration](../../create-apps/_index.md):

```yaml {configFile="app"}
variables:
    env:
        # Update for your desired NVM version.
        NVM_VERSION: v0.39.3
```

2\. Define your desired Node.js version using an environment variable.

   For your base version, set it in your app configuration:

```yaml {configFile="app"}
variables:
    env:
        # Update these for your desired NVM and Node versions.
        NVM_VERSION: v0.39.3
        NODE_VERSION: v18.14.2
```

   To get different versions in different environments, [set environment-specific variables](../../development/variables/set-variables.md#create-environment-specific-variables).

3\. Add a `.nvm` directory to your cache in your [build hook](../../create-apps/hooks/_index.md):


```yaml {configFile="app"}
hooks:
    build: |
        set -e
        unset NPM_CONFIG_PREFIX
        export NVM_DIR="$PLATFORM_APP_DIR/.nvm"

        # Link cache with app
        if [ ! -d "$PLATFORM_CACHE_DIR/.nvm" ]; then
            mkdir -p $PLATFORM_CACHE_DIR/.nvm
        fi
        ln -s $PLATFORM_CACHE_DIR/.nvm $NVM_DIR
```

> [!primary]  
> 
>    Instead of using a symlink between your cache and application directories,
>    you might need to copy the content of `$PLATFORM_CACHE_DIR/.nvm` into `$PLATFORM_APP_DIR/.nvm` manually.
>    To do so, run the following command:
> 
>    ```bash
>    rsync -av $PLATFORM_CACHE_DIR/.nvm $PLATFORM_APP_DIR
>    ```
> 
> 

4\. Use the cache directory and install based on the variables if not present:


```yaml {configFile="app"}
hooks:
    build: |
        ...
        # Check for Node.js version and install if not present
        if [ ! -d "$PLATFORM_CACHE_DIR/.nvm/versions/node/$NODE_VERSION" ]; then

            # Get nvm install script if correct version not present
            export NVM_INSTALL_FILE="${PLATFORM_CACHE_DIR}/nvm_${NVM_VERSION}_install.sh"
            if [ ! -f "$NVM_INSTALL_FILE" ]; then
                wget -nc -O "$NVM_INSTALL_FILE" "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh"
            fi

            # Install, automatically using NODE_VERSION
            bash $NVM_INSTALL_FILE
        fi

        # Activate nvm
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

        # Use the specified version
        nvm use "$NODE_VERSION"
```

5\. Optional: To use the specified Node.js version in the runtime container and not just the build,

   activate `nvm` via [script](../../development/variables/set-variables.md#set-variables-via-script):

```bash {location=".environment"}
unset NPM_CONFIG_PREFIX
export NVM_DIR="$PLATFORM_APP_DIR/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Your final app configuration should look something like the following:

```yaml
variables:
    env:
        # Update these for your desired NVM and Node versions.
        NVM_VERSION: v0.39.3
        NODE_VERSION: v18.14.2

hooks:
    build: |
        set -e
        unset NPM_CONFIG_PREFIX
        export NVM_DIR="$PLATFORM_APP_DIR/.nvm"

        # Link cache with app
        if [ ! -d "$PLATFORM_CACHE_DIR/.nvm" ]; then
            mkdir -p $PLATFORM_CACHE_DIR/.nvm
        fi
        ln -s $PLATFORM_CACHE_DIR/.nvm $NVM_DIR

        # Check for Node.js version and install if not present
        if [ ! -d "$PLATFORM_CACHE_DIR/.nvm/versions/node/$NODE_VERSION" ]; then

            # Get nvm install script if correct version not present
            export NVM_INSTALL_FILE="${PLATFORM_CACHE_DIR}/nvm_${NVM_VERSION}_install.sh"
            if [ ! -f "$NVM_INSTALL_FILE" ]; then
                wget -nc -O "$NVM_INSTALL_FILE" "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh"
            fi

            # Install, automatically using NODE_VERSION
            bash $NVM_INSTALL_FILE
        fi

        # Activate nvm
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

        # Use the specified version
        nvm use "$NODE_VERSION"
```
