---
title: Alternative Node.js install
updated: 2021-03-31
---

**Last updated 31st March 2021**


## How to use NVM to run different versions of Node.js

[Node Version Manager](https://github.com/creationix/nvm) or NVM is a tool for managing multiple versions of Node.js in one installation.

You can use NVM with any of our container types that have node installed to change or update the version. This may be useful, for example, where a container has a Long Term Release (LTS) version available, but you would like to use the latest.

Installing NVM is done in the build hook of your `.platform.app.yaml`, which some additional calls to ensure that environment variables are set correctly.

```yaml
variables:
    env:
        # Update these for your desired NVM and Node versions.
        NVM_VERSION: v0.36.0
        NODE_VERSION: v14.13.1

hooks:
    build: |
        unset NPM_CONFIG_PREFIX
        export NVM_DIR="$PLATFORM_APP_DIR/.nvm"
        # install.sh will automatically install NodeJS based on the presence of $NODE_VERSION
        curl -f -o- https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh | bash
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

And in a `.environment` file in the root of your project:

```bash
# This is necessary for nvm to work.
unset NPM_CONFIG_PREFIX
# Disable npm update notifier; being a read only system it will probably annoy you.
export NO_UPDATE_NOTIFIER=1
# This loads nvm for general usage.
export NVM_DIR="$PLATFORM_APP_DIR/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
