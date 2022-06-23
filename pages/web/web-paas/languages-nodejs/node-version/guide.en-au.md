---
title: Manage Node.js versions
slug: node-version
section: Nodejs
---

**Last updated 2nd June 2022**



## Objective  

You may need to use a specific version of Node.js that isn't available in an app container for a different language.
For example, a container might have a long-term support version, while you want the latest version.

In such cases, use a version manager to install the specific version you want to use.
You could use one of these:

- [Use `n`](#use-n)

- [Use `nvm`](#use-nvm)


Both of the recommendations use a `.nvmrc` file to specify the desired Node.js version.
You could also specify a different file or use [environment variables](../../development-variables).

### Use `n`

The [`n` package](https://github.com/tj/n) works for various Unix-like systems,
including Windows Subsystem for Linux.

**Step 1: Add the desired Node.js version to a `.nvmrc` file in your app root.**

```yaml 
location= ".nvmrc"
v16.13.2
```

**Step 2: Add it as a dependency.**

```yaml 
{location=".platform.app.yaml"}
dependencies:
    nodejs:
        n: "*"
```
Adding it as a dependency ensures it's cached for future builds.

**Step 3: Set the location for the Node.js version using the `N_PREFIX` environment variable.**


```yaml 
{location=".platform.app.yaml"}
variables:
    env:
        N_PREFIX: /app/.global
```

**Step 4: Install the specified version of Node.js in a [`build` hook](../../configuration-app/build/#build-hook).**


```yaml 
{location=".platform.app.yaml"}

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

```yaml 
{location=".platform.app.yaml"}

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
        hash -r0
```

### Use `nvm`

[Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm)

You can:

- Add it to the build hook to make that version available in the build.
- Control the specific versions to be installed with [environment variables](../../development-variables), meaning you can also have different versions in different environments.
- Cache `nvm` so you don't need to download it each time.


Add it to your `.platform.app.yaml` file:

```yaml
variables:
    env:
        # Update these for your desired NVM and Node versions.
        NVM_VERSION: v0.38.0
        NODE_VERSION: v14.17.6

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