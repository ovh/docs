---
title: Custom Redis versions
slug: redis
section: Php
---

**Last updated 2nd June 2022**



## Objective  

Redis is a popular structured key-value service, supported by Web PaaS.  It's frequently used for caching.

The [PhpRedis](https://github.com/phpredis/phpredis) extension is available on Web PaaS's PHP container images.  However, the extension has been known to break its API between versions when removing deprecated functionality.  The version available on each application image is the latest available at the time that PHP version was built, which if your application is very sensitive to PhpRedis versions may not be ideal.

If the version of the PhpRedis extension available for your PHP version is not compatible with your application and upgrading your application is not feasible, you can use the script below as an alternative to download and compile a precise version of the extension on the fly.

Do *not* use this approach unless you really need to.  Using the provided PhpRedis extension is preferred in the vast majority of cases.

## Using the Redis builder script

1\. Copy the following script into a file named `install-redis.sh` in your app root


```bash
run() {
    # Run the compilation process.
    cd $PLATFORM_CACHE_DIR || exit 1;

    if [ ! -f "${PLATFORM_CACHE_DIR}/phpredis/modules/redis.so" ]; then
        ensure_source
        checkout_version "$1"
        compile_source
    fi

    copy_lib
    enable_lib
}

enable_lib() {
    # Tell PHP to enable the extension.
    echo "Enabling PhpRedis extension."
    echo -e "\nextension=${PLATFORM_APP_DIR}/redis.so" >> $PLATFORM_APP_DIR/php.ini
}

copy_lib() {
    # Copy the compiled library to the application directory.
    echo "Installing PhpRedis extension."
    cp $PLATFORM_CACHE_DIR/phpredis/modules/redis.so $PLATFORM_APP_DIR
}

checkout_version () {
    # Check out the specific Git tag that we want to build.
    git checkout "$1"
}

ensure_source() {
    # Ensure that the extension source code is available and up to date.
    if [ -d "phpredis" ]; then
        cd phpredis || exit 1;
        git fetch --all --prune
    else
        git clone https://github.com/phpredis/phpredis.git
        cd phpredis || exit 1;
    fi
}

compile_source() {
    # Compile the extension.
    phpize
    ./configure
    make
}

ensure_environment() {
    # If not running in a Web PaaS build environment, do nothing.
    if [ -z "${PLATFORM_CACHE_DIR}" ]; then
        echo "Not running in a Web PaaS build environment.  Aborting Redis installation."
        exit 0;
    fi
}

ensure_arguments() {
    # If no version was specified, don't try to guess.
    if [ -z $1 ]; then
        echo "No version of the PhpRedis extension specified.  You must specify a tagged version on the command line."
        exit 1;
    fi
}

ensure_environment
ensure_arguments "$1"
run "$1"
```

2\. Invoke that script from your build hook, specifying a version.  Any tagged version of the library is acceptable:


```yaml
hooks:
    build: |
        set -e
        bash install-redis.sh 5.1.1
```

3\. If you ever wish to change the version of PhpRedis you are using, update the build hook and clear the build cache: `webpaas project:clear-build-cache`.  The new version will *not* be used until you clear the build cache.


There is no need to declare the extension in the `runtime` block.  That is only for pre-built extensions.

## What the script does

1\. Downloads the PhpRedis source code.

2\. Checks out the version specified in the build hook.

3\. Compiles the extension.

4\. Copies the resulting `redis.so` file to your app root.

5\. Adds a line to the `php.ini` file in your app root to enable the extension, creating the file if necessary.


If the script does not find a `$PLATFORM_CACHE_DIR` directory defined, it exits silently.  That means if you run the build hook locally it will have no effect.
