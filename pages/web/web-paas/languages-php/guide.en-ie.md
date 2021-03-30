---
title: PHP
slug: languages-php
section: Languages
order: 4
---

**Last updated 26th March 2021**


## Supported versions

| **Grid** | 
|----------------------------------|  
|  7.3 |  
|  7.4 |  
|  8.0 |  


Note that as of PHP 7.1 we use the Zend Thread Safe (ZTS) version of PHP.

To specify a PHP container, use the `type` property in your `.platform.app.yaml`.


```yaml   
type: 'php:8.0'
```  


## Deprecated versions

The following versions are available but are not receiving security updates from upstream, so their use is not recommended.

| **Grid** | 
|----------------------------------|  
|  5.4 |  
|  5.5 |  
|  5.6 |  
|  7.0 |  
|  7.1 |  
|  7.2 |  

## Support libraries

While it is possible to read the environment directly from your application, it is generally easier and more robust to use the [`platformsh/config-reader`](https://github.com/platformsh/config-reader-php) Composer library which handles decoding of service credential information for you.

## Alternate start commands

PHP is most commonly run in a CGI mode, using PHP-FPM. That is the default on Web PaaS. However, you can also start alternative processes if desired, such as if you're running an Async PHP daemon, a thread-based worker process, etc. To do so, simply specify an alternative start command in `platform.app.yaml`, similar to the following:

```yaml
web:
    commands:
        start: php run.php
    upstream:
            socket_family: tcp
            protocol: http
```

The above configuration will execute the `run.php` script in the application root when the container starts using the PHP-CLI SAPI, just before the deploy hook runs, but will *not* launch PHP-FPM. It will also tell the front-controller (Nginx) to connect to your application via a TCP socket, which will be specified in the `PORT` environment variable. Note that the start command _must_ run in the foreground.

If not specified, the effective default start command varies by PHP version:

* On PHP 5.x, it's `/usr/sbin/php5-fpm`.
* On PHP 7.0, it's `/usr/sbin/php-fpm7.0`.
* On PHP 7.1, it's `/usr/sbin/php-fpm7.1-zts`.
* On PHP 7.2, it's `/usr/sbin/php-fpm7.2-zts`.
* On PHP 7.3, it's `/usr/sbin/php-fpm7.3-zts`.
* On PHP 7.4, it's `/usr/sbin/php-fpm7.4-zts`.

While you can call it manually that is generally not necessary. Note that PHP-FPM cannot run simultaneously along with another persistent process (such as ReactPHP or Amp). If you need both they will have to run in separate containers.

## Expanded dependencies

In addition to the standard `dependencies` format, it is also possible to specify alternative repositories for use by Composer.  The standard format like so:

```yaml
dependencies:
    php:
        "platformsh/client": "dev-master"
```

is equivalent to `composer require platform/client dev-master`.  However, you can also specify explicit `require` and `repositories` blocks:

```yaml
dependencies:
    php:
        require:
            "platformsh/client": "dev-master"
        repositories:
            - type: vcs
              url: "git@github.com:platformsh/platformsh-client-php.git"
```

That would install `platformsh/client` from the alternate repository specified, as a global dependency.  That is, it is equivalent to the following `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "vcs",
            "url":  "git@github.com:platformsh/platformsh-client-php.git"
        }
    ],
    "require": {
        "platformsh/client": "dev-master"
    }
}
```

That allows you to install a forked version of a global dependency from a custom repository.

## Opcache preloading

PHP 7.4 introduced a new feature called Opcache Preloading, which allows you to load selected files into shared memory when PHP-FPM starts.  That means functions and classes in those files are always available and do not need to be autoloaded, at the cost of any changes to those files requiring a PHP-FPM restart.  Since PHP-FPM restarts anyway when a new deploy happens this feature is a major win on Web PaaS, and we recommend using it aggressively.

To enable preloading, add a `php.ini` value that specifies a preload script.  Any [`php.ini` mechanism](ini) will work, but using a variable in `.platform.app.yaml` is the recommended approach:

```yaml
variables:
    php:
        opcache.preload: 'preload.php'
```

The `opcache.preload` value is evaluated as a file path relative to the application root (where `.platform.app.yaml` is), and it may be any PHP script that calls `opcache_compile_file()`.  The following example will preload all `.php` files anywhere in the `vendor` directory:

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
> Preloading all `.php` files may not be optimal for your application, and may even introduce errors.  Your application framework may provide recommendations or a pre-made presload script to use instead.  Determining an optimal preloading strategy is the user's responsibility.
> 

## FFI

PHP 7.4 introduced support for Foreign Function Interfaces (FFI), which allows user-space code to bridge to existing C-ABI-compatible libraries.  FFI is fully supported on Web PaaS.

Note: FFI is only intended for advanced use cases, and is rarely a net win for routine web requests.  Use with caution.

There are a few steps to leveraging FFI:

1\. Enable the FFI extension in `.platform.app.yaml`:

```yaml
runtime:
    extensions:
        - ffi
   ```

2\. Specify a [preload file](#opcache-preloading) in which you can call `FFI::load()`.  Using `FFI::load()` in preload will be considerably faster than loading the linked library on each request or script run.

3\. Ensure the library is available locally, but not in a web-accessible directory.  `.so` files may included in your repository, downloaded i your build hook, or compiled in your build hook.  If compiling C code, `gcc` is available by default.  If compiling Rust code, you can download the [Rust compiler in the build hook](https://doc.rust-lang.org/stable/book/ch01-01-installation.html).

4\. For running FFI from the command line, you will need to enable the opcache for command line scripts in addition to the preloader.  The standard pattern for the command would be `php -d opcache.preload="your-preload-script.php" -d opcache.enable_cli=true your-cli-script.php`.

A working [FFI example](https://github.com/platformsh-examples/php-ffi) is available online for both C and Rust.

## Debug PHP-FPM

If you want to inspect what's going on with PHP-FPM, you can install this [small CLI](https://github.com/wizaplace/php-fpm-status-cli):

```yaml
dependencies:
  php:
    wizaplace/php-fpm-status-cli: "^1.0"
```

Then when you are connected to your project over SSH you can run:

```shell
$ php-fpm-status --socket=unix://$SOCKET --path=/-/status --full
```

## Accessing services

To access various [services](../configuration-services) with PHP, see the following examples.  The individual service pages have more information on configuring each service.

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


## Runtime configuration

It is possible to change the PHP-FPM runtime configuration via the `runtime` block on your `.platform.app.yaml`. The PHP-FPM options below are configurable:

* `request_terminate_timeout` - The timeout for serving a single request after which the PHP-FPM worker process will be killed.  That is separate from the PHP runtime's `max_execution_time` ini option, which is preferred.  This option may be used if the PHP process is dying without cleaning up properly and causing the FPM process to hang.

```yaml
runtime:
    request_terminate_timeout: 300
```

## Project templates

A number of project templates for major PHP applications are available on GitHub. Not all of them are proactively maintained but all can be used as a starting point or reference for building your own website or web application.


### Gatsby with Drupal  

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
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

### Gatsby with Wordpress  

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and Wordpress for its backend. The `gatsby-source-wordpress` source plugin is used to pull data from Wordpress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Wordpress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Wordpress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Drupal 9  

<p>This template builds Drupal 9 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal9) on GitHub.

### Drupal 8 Multisite  

<p>This template builds Drupal 8 in a multisite configuration using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
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

### GovCMS 8  

<p>This template builds the Australian government's GovCMS Drupal 8 distribution using the Drupal Composer project for better flexibility.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>GovCMS is a Drupal distribution built for the Australian government, and includes configuration optimized for managing government websites.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-govcms8) on GitHub.

### Drupal 8  

<p>This template builds Drupal 8 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8) on GitHub.

### Backdrop  

<p>This template deploys a Backdrop CMS site, with the entire site committed to Git.  It comes configured for MariaDB, the most popular database used with Backdrop.  It supports a quick web installation to configure the site.</p>
<p>Backdrop is a PHP-based CMS, originally forked from Drupal 7.</p>
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/backdrop) on GitHub.

### Magento 2 Community Edition  

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

### Symfony 4  

<p>This template provides a basic Symfony 4 skeleton.  It comes pre-configured to use a MariaDB database using a Symfony-specific bridge library that runs during Composer autoload.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
<p>New projects should be built using Symfony 5, but this project is a reference for existing migrating sites.  Version 4 is the LTS support version.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony4) on GitHub.

### Pimcore  

<p>This template builds Pimcore 5 on Web PaaS.  It comes pre-installed with a MariaDB database connecting through Doctrine and Redis for caching via a custom configuration file.  It will self-install on the first deploy.</p>
<p>Pimcore is a Symfony-based Digital Experience Platform.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pimcore) on GitHub.

### TYPO3  

<p>This template builds the TYPO3 CMS for Web PaaS.  It comes pre-configured with MariaDB for storage and Redis for caching.  A command line installer will automatically initialize the site on first deploy.</p>
<p>TYPO3 is a PHP-based Content Management System</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/typo3) on GitHub.

### Symfony 3  

<p>This template provides a basic Symfony 3 skeleton.  It comes pre-configured to use a MariaDB database via a custom config file.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
<p>New projects should be built using Symfony 5, but this project is a reference for existing migrating sites.  Version 3 is the LTS support version.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.2<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony3) on GitHub.

### Symfony 5  

<p>This template provides a basic Symfony 5 skeleton.  It comes pre-configured to use a MariaDB database using a Symfony-specific bridge library that runs during Composer autoload.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony5) on GitHub.

### Opigno  

<p>This template builds the Opigno Drupal 8 distribution using the [Drupal Composer project](https://github.com/drupal-composer/drupal-project) for better flexibility.  It also includes configuration to use Redis for caching, although that must be enabled post-install in `.platform.app.yaml`.</p>
<p>Opigno is a Learning Management system built as a Drupal distribution.</p>
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-opigno) on GitHub.

### Nextcloud  

<p>This template builds Nextcloud on Web PaaS.  Nextcloud itself is downloaded on the fly during the build step, and pre-configured for use with MariaDB and Redis.  Add-on applications can be provided in a separate directory and will be merged into Nextcloud automatically during build.  (Self-update through the web interface is not supported.)</p>
<p>The admin user is created automatically during the first deploy, and its name and password will be available in the deploy log.  Be sure to check for it there so you can log in.</p>
<p>Nextcloud is a PHP-based groupware server with installable apps, file synchronization, and federated storage.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Nextcloud downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextcloud) on GitHub.

### Mautic  

<p>This template provides a basic Mautic installation.  It includes MariaDB for storage, which will be auto-selected during the installer.  It also includes a RabbitMQ queue server that may be enabled manually post-install.</p>
<p>Mautic is an Open Source marketing automation tool built on Symfony. </p>
  
#### Features
- PHP 7.2<br />  
- MariaDB 10.4<br />  
- RabbitMQ 3.7<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/mautic) on GitHub.

### Laravel  

<p>This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  The public files symlink is also replaced with a custom web path definition so it is unnecessary.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Laravel is an opinionated, integrated rapid-application-development framework for PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/laravel) on GitHub.

### Wordpress (Composer)  

<p>This template builds WordPress on Web PaaS using the <a href="https://github.com/johnpbloch/wordpress"><code>johnbolch/wordpress</code></a> "Composer Fork" of WordPress.  Plugins and themes should be managed with Composer exclusively.  A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials.  For local-only configuration you can use a `wp-config-local.php` file that gets excluded from Git.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-composer) on GitHub.

### Sculpin  

<p>This template provides a basic Sculpin skeleton.  All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Sculpin is a static site generator written in PHP and using the Twig templating engine.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/sculpin) on GitHub.

### Basic PHP  

<p>This template provides the most basic configuration for running a custom PHP project built with Composer.  It includes but doesn't make use of the Web PaaS `config-reader` library.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.</p>
<p>PHP is a high-performance scripting language especially well suited to web development.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/php) on GitHub.

