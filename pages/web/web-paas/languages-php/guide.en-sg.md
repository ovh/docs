---
title: PHP
slug: languages-php
section: Languages
order: 4
---

**Last updated 2nd June 2022**


## Supported versions

| **Grid** | 
|----------------------------------|  
|  7.3 |  
|  7.4 |  
|  8.0 |  
|  8.1 |  


## Deprecated versions

| **Grid** | 
|----------------------------------|  
|  5.4 |  
|  5.5 |  
|  5.6 |  
|  7.0 |  
|  7.1 |  
|  7.2 |  

## Alternate start commands

PHP is most commonly run in a CGI mode, using PHP-FPM.
That's the default on Web PaaS.
However, you can also start alternative processes if desired,
such as if you're running an async PHP daemon, a thread-based worker process, or something similar.
To do so, specify an alternative start command in `platform.app.yaml`, similar to the following:

```yaml
web:
    commands:
        start: php run.php
    upstream:
            socket_family: tcp
            protocol: http
```

The above configuration executes the `run.php` script in the application root when the container starts using the PHP-CLI SAPI, ust before the deploy hook runs but does *not* launch PHP-FPM.

It also tells the front-controller (Nginx) to connect to your application via a TCP socket,
which is specified in the `PORT` environment variable.
Note that the start command _must_ run in the foreground.

If not specified, the effective default start command varies by PHP version:

- On PHP 5.x, it's `/usr/sbin/php5-fpm`.
- On PHP 7.0, it's `/usr/sbin/php-fpm7.0`.
- On PHP 7.1, it's `/usr/sbin/php-fpm7.1-zts`.
- On PHP 7.2, it's `/usr/sbin/php-fpm7.2-zts`.
- On PHP 7.3, it's `/usr/sbin/php-fpm7.3-zts`.
- On PHP 7.4, it's `/usr/sbin/php-fpm7.4-zts`.

While you can call it manually that's generally not necessary.
Note that PHP-FPM cannot run simultaneously along with another persistent process (such as ReactPHP or Amp).
If you need both, they have to run in separate containers.

## Expanded dependencies

In addition to the standard `dependencies` format,
it's also possible to specify alternative repositories for use by Composer.
The standard format:

```yaml
dependencies:
    php:
        "platformsh/client": "2.x-dev"
```

is equivalent to `composer require platform/client 2.x-dev`.
You can also specify explicit `require` and `repositories` blocks:

```yaml
dependencies:
    php:
        require:
            "platformsh/client": "2.x-dev"
        repositories:
            - type: vcs
              url: "git@github.com:platformsh/platformsh-client-php.git"
```

That would install `platformsh/client` from the alternate repository specified, as a global dependency.
In other words, it's equivalent to the following `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "vcs",
            "url":  "git@github.com:platformsh/platformsh-client-php.git"
        }
    ],
    "require": {
        "platformsh/client": "2.x-dev"
    }
}
```

That allows you to install a forked version of a global dependency from a custom repository.

## Build flavor

PHP images use the `composer` build flavor by default,
which runs `composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader` if a `composer.json` file is detected.

Note that by default, all PHP containers include the latest Composer 1.x release.
If you wish to use Composer 2.x, add it as a `dependency`:

```yaml
dependencies:
    php:
        composer/composer: '^2'
```

## OPcache preloading

From PHP 7.4, you can use OPcache preloading,
which allows you to load selected files into shared memory when PHP-FPM starts.
That means functions and classes in those files are always available and don't need to be autoloaded,
at the cost of any changes to those files requiring a PHP-FPM restart.

Since PHP-FPM restarts on each new deploy, this feature is a major win on Web PaaS and we recommend using it aggressively.

To enable preloading, add a `php.ini` value that specifies a preload script.
Any `php.ini` mechanism ini works,
but using a variable in `.platform.app.yaml` is the recommended approach:

```yaml
variables:
    php:
        opcache.preload: 'preload.php'
```

The `opcache.preload` value is evaluated as a file path relative your app configuration.
It may be any PHP script that calls `opcache_compile_file()`.

The following example preloads all `.php` files anywhere in the `vendor` directory:

```php
<?php
$directory = new RecursiveDirectoryIterator(getenv('PLATFORM_APP_DIR') . '/vendor');
$iterator = new RecursiveIteratorIterator($directory);
$regex = new RegexIterator($iterator, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH);

foreach ($regex as $key => $file) {
    // This is the important part!
    opcache_compile_file($file[0]);
}
```

> [!primary]  
> 
> Preloading all `.php` files may not be optimal for your application and may even introduce errors.
> Your application framework may provide recommendations or a pre-made preload script to use instead.
> You have to determine the optimal preloading strategy for your situation.
> 
> 

#### Preloading and dependencies

Your preload script runs each time PHP-FPM restarts, including during your build.
This means it runs before your dependencies have been installed (such as with Composer).

If your preload script uses `require` for dependencies, it fails during the build
because the dependencies aren't yet present.

To resolve this, you have two options:

- Have your script `include` dependencies instead of `require` and fail gracefully if the dependencies aren't there.
- Enable preloading with a variable that [isn't available during the build](../../development-variables/#setting-variables). Then preloading happens only on deploy.

## FFI

PHP 7.4 introduced support for Foreign Function Interfaces (FFI),
which allows user-space code to bridge to existing C-ABI-compatible libraries.
FFI is fully supported on Web PaaS.

Note: FFI is only intended for advanced use cases, and is rarely a net win for routine web requests.
Use with caution.

There are a few steps to leveraging FFI:

1\. Enable the FFI extension in `.platform.app.yaml`:


```yaml
runtime:
    extensions:
        - ffi
```

2\. Specify a [preload file](#opcache-preloading) in which you can call `FFI::load()`.

Using `FFI::load()` in preload is considerably faster than loading the linked library on each request or script run.

3\. Ensure the library is available locally, but not in a web-accessible directory.

`.so` files may included in your repository, downloaded in your build hook, or compiled in your build hook.
If compiling C code, `gcc` is available by default.
If compiling Rust code, you can download the [Rust compiler in the build hook](https://doc.rust-lang.org/stable/book/ch01-01-installation.html).

4\. Running FFI from the command line. 

You need to enable the OPcache for command line scripts in addition to the preloader.
The standard pattern for the command would be `php -d opcache.preload="your-preload-script.php" -d opcache.enable_cli=true your-cli-script.php`.

A working [FFI example](https://github.com/platformsh-examples/php-ffi) is available online for both C and Rust.

## Debug PHP-FPM

If you want to inspect what's going on with PHP-FPM,
you can install this [small CLI](https://github.com/wizaplace/php-fpm-status-cli):

```yaml
dependencies:
    php:
        wizaplace/php-fpm-status-cli: "^1.0"
```

Then when you are connected to your project over SSH, you can run:

```shell
$ php-fpm-status --socket=unix://$SOCKET --path=/-/status --full
```

## Accessing services

To access various [services](../configuration-services) with PHP, see the following examples.
The individual service pages have more information on configuring each service.

> [!tabs]      
> Elasticsearch     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/elasticsearch !}  
>> ```     
> Memcached     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/memcached !}  
>> ```     
> MongoDB     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/mongodb !}  
>> ```     
> MySQL     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/mysql !}  
>> ```     
> PostgreSQL     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/postgresql !}  
>> ```     
> RabbitMQ     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/rabbitmq !}  
>> ```     
> Redis     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/redis !}  
>> ```     
> Solr     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/solr !}  
>> ```     



[Composer library](https://github.com/platformsh/config-reader-php)

## Runtime configuration

It's possible to change the PHP-FPM runtime configuration via the `runtime` property in your app configuration.
See that reference for details on what can be changed.

## Project templates


### Gatsby with WordPress 

![image](images/gatsby.png)

This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and WordPress for its backend. The `gatsby-source-wordpress` source plugin is used to pull data from WordPress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.

Note that after you have completed the WordPress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.

Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for WordPress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Drupal 8 Multisite 

![image](images/drupal8.png)

<p>This template builds Drupal 8 in a multisite configuration using the "Drupal Recommended" Composer project. It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>It also includes instructions and a script to help with setting up additional multisite instances, although depending on your particular needs it may require some customization.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework capable of hosting multiple sites on a single code base.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Pre-configured for multiple sites<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-multisite) on GitHub.

### Backdrop 

![image](images/backdrop.png)

<p>This template deploys a Backdrop CMS site, with the entire site committed to Git.  It comes configured for MariaDB, the most popular database used with Backdrop.  It supports a quick web installation to configure the site.</p>
<p>Backdrop is a PHP-based CMS, originally forked from Drupal 7.</p>
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/backdrop) on GitHub.

### Nextcloud 

![image](images/nextcloud.png)

<p>This template builds Nextcloud on Web PaaS. Nextcloud itself is downloaded on the fly during the build step, and pre-configured for use with MariaDB and Redis.  Add-on applications can be provided in a separate directory and will be merged into Nextcloud automatically during build. (Self-update through the web interface is not supported.)</p>
<p>The admin user is created automatically during the first deploy, and its name and password will be available in the deploy log.  Be sure to check for it there so you can log in.</p>
<p>Nextcloud is a PHP-based groupware server with installable apps, file synchronization, and federated storage.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Nextcloud downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextcloud) on GitHub.

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

### TYPO3 

![image](images/typo3.png)

<p>This template builds the TYPO3 CMS for Web PaaS. It comes pre-configured with MariaDB for storage and Redis for caching. A command line installer will automatically initialize the site on first deploy.</p>
<p>TYPO3 is a PHP-based Content Management System</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/typo3) on GitHub.

### Basic PHP 

![image](images/basicphp.png)

<p>This template provides the most basic configuration for running a custom PHP project built with Composer. It includes but doesn't make use of the Web PaaS `config-reader` library.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.</p>
<p>PHP is a high-performance scripting language especially well suited to web development.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/php) on GitHub.

### WordPress (Bedrock) 

![image](images/wordpress.png)

<p>This template builds WordPress on Web PaaS using the Bedrock boilerplate by Roots with Composer. Plugins and themes should be managed with Composer exclusively. The only modifications made to the standard Bedrock boilerplate have been providing database credentials and main site url parameters via environment variables. With this configuration, the database is automatically configured such that the installer will not ask you for database credentials. While Bedrock provides support to replicate this configuration in a `.env` file for local development, an example Lando configuration file is included as the recommendated method to do so.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP, and Bedrock is a Composer-based WordPress boilerplate project with a slightly modified project structure and configuration protocol. </p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-bedrock) on GitHub.

### Laravel 

![image](images/laravel.png)

<p>This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  The public files symlink is also replaced with a custom web path definition so it is unnecessary. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Laravel is an opinionated, integrated rapid-application-development framework for PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/laravel) on GitHub.

### Sculpin 

![image](images/sculpin.png)

<p>This template provides a basic Sculpin skeleton.  All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Sculpin is a static site generator written in PHP and using the Twig templating engine.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/sculpin) on GitHub.

### WooCommerce (Bedrock) for Web PaaS 

<p>This template builds WordPress on Web PaaS using the Bedrock boilerplate by Roots with Composer. It includes WooCommerce and JetPack as dependencies, which when enabled will quickly allow you to create a store on WordPress.</p>
<p>Plugins and themes should be managed with Composer exclusively. The only modifications made to the standard Bedrock boilerplate have been providing database credentials and main site url parameters via environment variables. With this configuration, the database is automatically configured such that the installer will not ask you for database credentials. While Bedrock provides support to replicate this configuration in a <code>.env</code> file for local development, an example Lando configuration file is included as the recommendated method to do so.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP, and Bedrock is a Composer-based WordPress boilerplate project with a slightly modified project structure and configuration protocol. WooCommerce is an open-source eCommerce platform and plugin for WordPress.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-woocommerce) on GitHub.

### Drupal 9 

![image](images/drupal8.png)

<p>This template builds Drupal 9 using the "Drupal Recommended" Composer project. It is pre-configured to use MariaDB and Redis for caching. The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal9) on GitHub.

### Drupal 8 

![image](images/drupal8.png)

<p>This template builds Drupal 8 using the "Drupal Recommended" Composer project. It is pre-configured to use MariaDB and Redis for caching. The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8) on GitHub.

### GovCMS 8 

![image](images/drupal8.png)

<p>This template builds the Australian government's GovCMS Drupal 8 distribution using the Drupal Composer project for better flexibility. It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>GovCMS is a Drupal distribution built for the Australian government, and includes configuration optimized for managing government websites.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-govcms8) on GitHub.

### Pimcore 

![image](images/pimcore.png)

<p>This template builds Pimcore 5 on Web PaaS. It comes pre-installed with a MariaDB database connecting through Doctrine and Redis for caching via a custom configuration file. It will self-install on the first deploy.</p>
<p>Pimcore is a Symfony-based Digital Experience Platform.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pimcore) on GitHub.

### WordPress (Composer) 

![image](images/wordpress.png)

This template builds WordPress on Web PaaS using the <a href="https://github.com/johnpbloch/wordpress"><code>johnbloch/wordpress</code></a> "Composer Fork" of WordPress. Plugins and themes should be managed with Composer exclusively. A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials. For local-only configuration you can use a `wp-config-local.php` file that gets excluded from Git.

WordPress is a blogging and lightweight CMS written in PHP.
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-composer) on GitHub.

### Opigno 

![image](images/opigno.png)

This template builds the Opigno Drupal 8 distribution using the [Drupal Composer project](https://github.com/drupal-composer/drupal-project) for better flexibility.  It also includes configuration to use Redis for caching, although that must be enabled post-install in `.platform.app.yaml`.

Opigno is a Learning Management system built as a Drupal distribution.
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-opigno) on GitHub.

### Gatsby with Drupal 

![image](images/gatsby.png)

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal 8 for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Drupal installation and included a few articles, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- Node.js 12<br />  
- PHP 7.4<br/>  
- MariaDB 10.4<br/>  
- Redis 5.0<br/>  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Drupal<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-drupal) on GitHub.

### WordPress (Vanilla) for Web PaaS 

![image](images/wordpress.png)

<p>This template builds WordPress on Web PaaS, installing WordPress to a subdirectory instead of to the project root. It does not use a package management tool like Composer, and updating core, themes, and plugins should be done with care. A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-vanilla) on GitHub.