---
title: Manage Node.js versions
slug: nvm
section: Nodejs
---

**Last updated 7th January 2022**



## Objective  

You may have instances where you need to use a specific version of Node.js that isn't available in an application container.
For example, a container might have a long-term support version,
while you want the latest version.
Or you want to use specific Node.js version inside a container for another language, such as PHP.

In such cases, use [Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm)
to install the specific version you want to use.

You can:

* Add it to the build hook to make that version available in the build
* Control the specific versions to be installed with [environment variables](../../development-variables),
  meaning you can also have different versions in different environments
* Cache `nvm` so you don't need to download it each time

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
