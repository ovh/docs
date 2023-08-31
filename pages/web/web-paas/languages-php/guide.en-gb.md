---
title: PHP
slug: languages-php
section: Languages
order: 4
---

**Last updated 31st August 2023**


## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid and {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|----------------------------------------|------------------------------ |
| - 8.2  
- 8.1  
- 8.0 |

Note that from PHP versions 7.1 to 8.1, the images support the Zend Thread Safe (ZTS) version of PHP.

{{% language-specification type="php" display_name="PHP" %}}

{{% deprecated-versions %}}

| Grid and {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|----------------------------------------|------------------------------ |
| - 7.4  
- 7.3  
- 7.2  
- 7.1  
- 7.0  
- 5.6  
- 5.5  
- 5.4 |

## Usage example

Configure your app to use PHP on {{< vendor/name >}}.

### 1. Specify the version

Choose a [supported version](#supported-versions)
and add it to your [app configuration](../../create-apps/_index.md):


```yaml   
type: 'php:8.2'
```  


### 2. Serve your app

To serve your app, define what (and how) content should be served by setting the [`locations` parameter](../../create-apps/app-reference.md#locations).

Usually, it contains the two following (optional) keys:

- `root` for the document root,

  the directory to which all requests for existing `.php` and static files (such as `.css`, `.jpg`) are sent.
- `passthru` to [define a front controller](../../create-apps/web/php-basic.md#set-different-rules-for-specific-locations) to handle nonexistent files.

  The value is a file path relative to the [app root](../../create-apps/app-reference.md#root-directory).

> [!primary]  
> 
>   For enhanced security, when setting `passthru` to `true`, you might also want to add the following configuration:
> 
>   1. Set `scripts` to `false`.
>      This prevents PHP scripts from being executed from the specified location.
> 
>   2. Set `allow` to `false`.
>      By default, when PHP scripts aren't executed, their source code is delivered.
>      Setting `allow` to `false` allows you to keep the source code of your PHP scripts confidential.
> 
> 

Adjust the `locations` block to fit your needs.

In the following example, all requests made to your site's root (`/`) are sent to the `public` directory
and nonexistent files are handled by `app.php`:

```yaml {configFile="app"}
web:
    locations:
        '/':
            root: 'public'
            passthru: '/app.php'
```

See how to [create a basic PHP app with a front controller](../../create-apps/web/php-basic.md).
To have more control, you can define rules to specify which files you want to allow [from which location](../../create-apps/web/php-basic.md#set-different-rules-for-specific-locations).

### Complete example

A complete basic app configuration looks like the following:

```yaml {configFile="app"}
name: 'app'

type: 'php:8.2'

disk: 2048

web:
    locations:
        '/':
            root: 'public'
            passthru: '/app.php'
```

## Dependencies

Up to PHP version 8.1, it's assumed that you're using [Composer](https://getcomposer.org/) 1.x to manage dependencies.
If you have a `composer.json` file in your code, the default [build flavor is run](../../create-apps/app-reference.md#build):

```bash
composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
```

To use Composer 2.x on your project, either use PHP 8.2+ or, in your app configuration, add the following [dependency](../../create-apps/app-reference.md#dependencies):

```yaml {configFile="app"}
dependencies:
    php:
        composer/composer: '^2'
```

Adding a dependency to the [dependencies block](../../create-apps/app-reference.md#dependencies) makes it available globally.
So you can then use included dependencies as commands within your app container.
You can add multiple global dependencies to the dependencies block, such as [Node.js](../nodejs/_index.md#2-specify-any-global-dependencies).

If you want to have more control over Composer or if you don't want to use Composer at all, adapt the [build flavor](#change-the-build-flavor).
You can also use a [private, authenticated third-party Composer repository](./composer-auth.md).

### Change the build flavor

If you need more control over the dependency management,
you can either use your custom build flavor
or interact with Composer itself through [its environment variables](https://getcomposer.org/doc/03-cli.md#environment-variables).

You can remove the default build flavor and run your own commands for complete control over your build.
Set the build flavor to `none` and add the commands you need to your `build` hook, as in the following example:

```yaml {configFile="app"}
build:
    flavor: none

hooks:
    build: |
        set -e
        composer install --no-interaction --no-dev
```

That installs production dependencies with Composer but not development dependencies.
The same can be achieved by using the default build flavor and [adding the `COMPOSER_NO_DEV` variable](../../development/variables/set-variables.md).

See more on [build flavors](../../create-apps/app-reference.md#build).

### Alternative repositories

In addition to the standard `dependencies` format,
you can specify alternative repositories for Composer to use as global dependencies.
So you can install a forked version of a global dependency from a custom repository.

To install from an alternative repository:

1\. Set an explicit `require` block:


```yaml {configFile="app"}
dependencies:
    php:
        require:
            "platformsh/client": "2.x-dev"
```

   This is equivalent to `composer require platform/client 2.x-dev`.
2\. Add the repository to use:


```yaml {configFile="app"}
        repositories:
            - type: vcs
                url: "git@github.com:platformsh/platformsh-client-php.git"
```

That installs `platformsh/client` from the specified repository URL as a global dependency.

For example, to install Composer 2 and the `platform/client 2.x-dev` library from a custom repository,
use the following:

```yaml {configFile="app"}
dependencies:
    php:
        composer/composer: '^2'
        require:
            "platformsh/client": "2.x-dev"
        repositories:
            - type: vcs
                url: "git@github.com:platformsh/platformsh-client-php.git"
```

## Connect to services

The following examples show how to use PHP to access various [services](../../add-services/_index.md).
The individual service pages have more information on configuring each service.

> [!tabs]      

{{% config-reader %}}[PHP configuration reader library](https://github.com/platformsh/config-reader-php){{% /config-reader %}}

## PHP settings

You can configure your PHP-FPM runtime configuration by specifying the [runtime in your app configuration](../../create-apps/app-reference.md#runtime).

In addition to changes in runtime, you can also change the PHP settings.
Some commonly used settings are:

| Name | Default | Description |
|------|---------|-------------|
| `max_execution_time` | `300` | The maximum execution time, in seconds, for your PHP scripts and apps. A value of `0` means there are no time limits. |
| `max_file_uploads` | `20` | The maximum number of files that can be uploaded in each request. |
| `max_input_time` | `60` | The maximum time in seconds that your script is allowed to receive input (such as for file uploads). A value of `-1` means there are no time limits. |
| `max_input_vars` | `1000` | The maximum number of input variables that are accepted in each request. |
| `memory_limit` | `128M` | The memory limit, in megabytes, for PHP. Ensure that the PHP memory limit is set to a lower value than your environment's memory. |
| `post_max_size` | `64M` | The maximum size, in megabytes, per uploaded file. To upload larger files, increase the value. |
| `zend.assertions` | `-1` | Assertions are optimized and have no impact at runtime. Set assertions to `1` for your local development system. [See more on assertions](https://www.php.net/manual/en/regexp.reference.assertions). |
| `opcache.memory_consumption` | `64` | The number of megabytes available for [the OPcache](./tuning.md#opcache-preloading). For large apps with many files, increase this value. |
| `opcache.validate_timestamps` | `On` | If your app doesn't generate compiled PHP, you can [disable this setting](./tuning.md#disable-opcache-timestamp-validation). |

### Retrieve the default values

To retrieve the default PHP values, run the following [CLI command](../../administration/cli/_index.md):

```bash
webpaas ssh "php --info"
```

To get specific default values, use grep.
For example, to get the value for `opcache.memory_consumption`, run the following command:

```bash
webpaas ssh "php --info" | grep opcache.memory_consumption
```

### Retrieve the settings

To see the settings used on your environment:

1\.  Find the PHP configuration files with the following [CLI command](../../administration/cli/_index.md):


```bash
platform ssh "php --ini"
```

    The output is something like the following:

```bash
Configuration File (php.ini) Path: /etc/php/8.0-zts/cli
Loaded Configuration File:         /etc/php/8.0-zts/cli/php.ini
Scan for additional .ini files in: /etc/php/8.0-zts/cli/conf.d
Additional .ini files parsed:      (none)
```

2\.  Display the configuration file by adapting the following command with the output from step 1:


```bash
platform ssh "cat {{< variable "LOADED_CONFIGURATION_FILE_PATH" >}}"
```

### Customize PHP settings

For {{% names/dedicated-gen-2 %}}, see the [configuration options](../../dedicated-gen-2/overview/grid.md#configuration-options).

You can customize PHP values for your app in two ways.
The recommended method is to use variables.

> [!tabs]      

If you're using [PHP-CLI](#execution-mode),
you need to take into account the default settings of PHP-CLI when you customize your PHP settings.
The default settings of PHP-CLI can't be overwritten and are the following:

```text
max_execution_time=0
max_input_time=-1
memory_limit=-1
```

### Disable functions for security

A common recommendation for securing PHP installations is disabling built-in functions frequently used in remote attacks.
By default, {{< vendor/name >}} doesn't disable any functions.

If you're sure a function isn't needed in your app, you can disable it.

For example, to disable `pcntl_exec` and `pcntl_fork`, add the following to your [app configuration](../../create-apps/_index.md):

```yaml {configFile="app"}
variables:
    php:
        disable_functions: "pcntl_exec,pcntl_fork"
```

Common functions to disable include:

| Name | Description |
|------|-------------|
| `create_function` | This function has been replaced by anonymous functions and shouldn't be used anymore. |
| `exec`, `passthru`, `shell_exec`, `system`, `proc_open`, `popen` | These functions allow a PHP script to run a bash shell command. Rarely used by web apps except for build scripts that might need them. |
| `pcntl_*` | The `pcntl_*` functions are responsible for process management. Most of them cause a fatal error if used within a web request. Cron tasks or workers may need them. Most are usually safe to disable. |
| `curl_exec`, `curl_multi_exec` | These functions allow a PHP script to make arbitrary HTTP requests. If you're using HTTP libraries such as Guzzle, don't disable them. |
| `show_source` | This function shows a syntax highlighted version of a named PHP source file. Rarely useful outside of development. |

## Execution mode

PHP has two execution modes you can choose from:

- The command line interface mode (PHP-CLI) is the mode used for command line scripts and standalone apps.

  This is the mode used when you're logged into your container via SSH, for [crons](../../create-apps/app-reference.md#crons),
  and usually also for [alternate start commands](#alternate-start-commands).
  To use PHP-CLI, run your script with `php {{<variable "PATH_TO_SCRIPT" >}}`,
  where {{<variable "PATH_TO_SCRIPT" >}} is a file path relative to the [app root](../../create-apps/app-reference.md#root-directory).
- The Common Gateway Interface mode (PHP-CGI) is the mode used for web apps and web requests.

  This is the default mode when the `start` command isn't explicitly set.
  To use PHP-CGI, run your script with a symlink: `/usr/bin/start-php-app {{<variable "PATH_TO_SCRIPT" >}}`,
  where {{<variable "PATH_TO_SCRIPT" >}} is a file path relative to the [app root](../../create-apps/app-reference.md#root-directory).
  With PHP-CGI, PHP is run using the FastCGI Process Manager (PHP-FPM).

## Alternate start commands

To specify an alternative process to run your code, set a `start` command.
For more information about the start command, see the [web commands reference](../../create-apps/app-reference.md#web-commands).

By default, start commands use PHP-CLI.
Find out how and when to use each [execution mode](#execution-mode).

Note that the `start` command must run in the foreground and is executed before the [deploy hook](../../create-apps/hooks/hooks-comparison.md).
That means that PHP-FPM can't run simultaneously with another persistent process
such as [ReactPHP](https://github.com/platformsh-examples/platformsh-example-reactphp)
or [Amp](https://github.com/platformsh-examples/platformsh-example-amphp).
If you need multiple processes, they have to run in separate containers.

See some generic examples on how to use alternate start commands:

> [!tabs]      

## Foreign function interfaces

PHP 7.4 introduced support for [foreign function interfaces (FFIs)](https://en.wikipedia.org/wiki/Foreign_function_interface).
FFIs allow your PHP program to call routines or use services written in C or Rust.

Note: FFIs are only intended for advanced use cases.
Use with caution.

If you are using C code, you need `.so` library files.
Either place these files directly in your repository or compile them in a makefile using `gcc` in your [build hook](../../create-apps/hooks/hooks-comparison.md#build-hook).
Note: The `.so` library files shouldn't be located in a publicly accessible directory.

If you are compiling Rust code, use the build hook to [install Rust](https://doc.rust-lang.org/stable/book/ch01-01-installation.html).

To leverage FFIs, follow these steps:

1\.  [Enable and configure OPcache preloading](./tuning.md#enable-opcache-preloading).


2\.  Enable the FFI extension:


```yaml {configFile="app"}
runtime:
   extensions:
        - ffi
```

3\.  Make sure that your [preload script](./tuning.md#opcache-preloading) calls the `FFI::load()` function.

    Using this function in preload is considerably faster than loading the linked library on each request or script run.

4\.  If you are running FFIs from the command line,

    enable the preloader by adding the following configuration:

```yaml {configFile="app"}
variables:
    php:
        opcache.enable_cli: true
```

5\.  Run your script with the following command:


```bash
php {{<variable "CLI_SCRIPT" >}}
```

See [complete working examples for C and Rust](https://github.com/platformsh-examples/php-ffi).

## Project templates


### Drupal 10 

![image]()

<p>This template builds Drupal 10 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 8.1<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal10) on GitHub.

### GovCMS 9 

![image]()

<p>This template builds the Australian government's GovCMS Drupal 9 distribution using the Drupal Composer project for better flexibility.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>GovCMS is a Drupal distribution built for the Australian government, and includes configuration optimized for managing government websites.</p>
  
#### Features
- PHP 8.0<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal9-govcms9) on GitHub.

### Drupal 9 

![image](images/drupal8.png)

<p>This template builds Drupal 9 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 8.0<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal9) on GitHub.

### Laravel 

![image](images/laravel.png)

<p>This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  The public files symlink is also replaced with a custom web path definition so it is unnecessary.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Laravel is an opinionated, integrated rapid-application-development framework for PHP.</p>
  
#### Features
- PHP 8.0<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/laravel) on GitHub.

### Magento 2 Community Edition 

![image](images/magento2.png)

<p>This template builds Magento 2 CE on Web PaaS.  It includes additional scripts to customize Magento to run effectively in a build-and-deploy environment.  A MariaDB database and Redis cache server come pre-configured and work out of the box.  The installer has been modified to not ask for database information.  Background workers are run using a worker container rather than via cron.</p>
<p>Magento is a fully integrated ecommerce system and web store written in PHP.  This is the Open Source version.</p>
  
#### Features
- PHP 7.2<br />  
- MariaDB 10.2<br />  
- Redis 3.2<br />  
- Dedicated worker instance for background processing<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/magento2ce) on GitHub.

### Sylius 

![image]()

<p>This template builds a Sylius application for Web PaaS, which can be used as a starting point for developing complex e-commerce applications.</p>
<p>Sylius is a modern e-commerce solution for PHP, based on Symfony Framework.</p>
  
#### Features
- PHP 8.0<br />  
- MySQL 10.2<br />  
- Automatic TLS certificates<br />  
- composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/sylius) on GitHub.

### WordPress (Bedrock) 

![image]()

<p>This template builds WordPress on Web PaaS using the Bedrock boilerplate by Roots with Composer. Plugins and themes should be managed with Composer exclusively. The only modifications made to the standard Bedrock boilerplate have been providing database credentials and main site url parameters via environment variables. With this configuration, the database is automatically configured such that the installer will not ask you for database credentials. While Bedrock provides support to replicate this configuration in a `.env` file for local development, an example Lando configuration file is included as the recommendated method to do so.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP, and Bedrock is a Composer-based WordPress boilerplate project with a slightly modified project structure and configuration protocol. </p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-bedrock) on GitHub.

### WordPress (Composer) 

![image]()

<p>This template builds WordPress on Web PaaS using the <a href="https://github.com/johnpbloch/wordpress"><code>johnbloch/wordpress</code></a> "Composer Fork" of WordPress.  Plugins and themes should be managed with Composer exclusively.  A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials.  For local-only configuration you can use a `wp-config-local.php` file that gets excluded from Git.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- PHP 8.1<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-composer) on GitHub.

### WordPress (Vanilla) for Web PaaS 

![image]()

<p>This template builds WordPress on Web PaaS, installing WordPress to a subdirectory instead of to the project root. It does not use a package management tool like Composer, and updating core, themes, and plugins should be done with care. A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-vanilla) on GitHub.

### WooCommerce (Bedrock) for Web PaaS 

![image]()

<p>This template builds WordPress on Web PaaS using the Bedrock boilerplate by Roots with Composer. It includes WooCommerce and JetPack as dependencies, which when enabled will quickly allow you to create a store on WordPress.</p>
<p>Plugins and themes should be managed with Composer exclusively. The only modifications made to the standard Bedrock boilerplate have been providing database credentials and main site url parameters via environment variables. With this configuration, the database is automatically configured such that the installer will not ask you for database credentials. While Bedrock provides support to replicate this configuration in a <code>.env</code> file for local development, an example Lando configuration file is included as the recommendated method to do so.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP, and Bedrock is a Composer-based WordPress boilerplate project with a slightly modified project structure and configuration protocol. WooCommerce is an open-source eCommerce platform and plugin for WordPress.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-woocommerce) on GitHub.

