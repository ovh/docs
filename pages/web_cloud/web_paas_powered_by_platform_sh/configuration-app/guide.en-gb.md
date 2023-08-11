---
title: Your application
updated: 2021-03-26
---

**Last updated 26th March 2021**


## Objective  

You control your application and the way it will be built and deployed on Web PaaS via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.


![Applications](images/applications.png "0.50")

The `.platform.app.yaml` file is extremely flexible.  Depending on your needs it could be less than 10 lines long or over 100.  The only required keys are `name`, `type`, `disk`, and at least one "instance definition", either a `web` or `worker` block.  All others are optional.

Your application code can generate one or more application instances. Web instances can be accessed from the outside world, while workers cannot and just run a persistent background process. Otherwise they are very similar.

Different configuration properties can be applied to individual web and worker instances, or globally to all of them.  In the most typical case, with one web instance and no workers, it's common to just list each of the configuration directives below as a top-level property.  However, they can also be specified within the `web` or `worker` blocks to apply to just those instances.

The following properties apply only at the global level, and cannot be replicated inside an instance definition.

* [`name`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/name) *(required)* - Sets the unique name of the application container.
* [`type`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/type) *(required)* - Sets the container base image to use, including application language.
* [`timezone`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/timezone) - Sets the timezone of cron tasks in application container.
* [`build`, `dependencies`, and `hooks`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/build) - Control how the application gets compiled.  Note that this compilation happens before the application is copied into different instances, so any steps here will apply to all web and worker instances.
* [`cron`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/cron) - Defines scheduled tasks for the application.  Cron tasks will, technically, run as part of the web instance regardless of how many workers are defined.
* [`source.root`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/multi-app) - This nested value specifies the path where all code for the application lives.  It defaults to the directory where the `.platform.app.yaml` file is defined.  It is rarely needed except in advanced configurations.

The following properties can be set at the top level of the `.platform.app.yaml` file and apply to all application instances, or set within a given instance definition and apply just to that one.  If set in both places then the instance-specific one will take precedence, and completely replace the global one.  That is, if you want to make a change to just one sub-property of one of the following keys you need to replicate the entire block.

* [`size`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/size) - Sets an explicit sizing hint for the application.
* [`relationships`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/relationships) - Defines connections to other services and applications.
* [`access`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/access) - Restricts SSH access with more granularity than the management console.
* [`disk` and `mounts`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/storage) *(required)* - Defines writable file directories for the application.
* [`variables`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/variables) - Sets environment variables that control application behavior.
* [`firewall`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/firewall) - Defines outbound firewall rules for the application.

The `.platform.app.yaml` file needs at least one of the following to define an instance, but may define both.

* [`web`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/web) - Controls how the web application is served.
* [`worker`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/workers) - Defines alternate copies of the application to run as background processes.

## Available resources

Each web or worker instance is its own running container, which takes its own resources.  The `size` key allows some control over how many resources each container gets and if omitted the system will select one of a few fixed sizes for each container automatically.  All application and service containers are given resources out of a common pool defined by your plan size.  That means the more containers you define, the fewer resources each one will get and you may need to increase your plan size.

## Compression

Web PaaS does not compress any dynamic responses generated by your application due to a [well known security issue](https://en.wikipedia.org/wiki/BREACH_%28security_exploit%29).  While your application can compress its own response, doing so when the response includes any user-specific information, including a session cookie, opens up an attack vector over SSL/TLS connections.  For that reason we recommend against compressing any generated responses.

Requests for static files that are served directly by Web PaaS are compressed automatically using either gzip or brotli compression if:

* The request headers for the file support gzip or brotli.
* The file is served directly from disk by Web PaaS, not passed through your application.
* The file would be served with a cache expiration time in the future.
* The file type is one of: html, javascript, json, pdf, postscript, svg, css, csv, plain text, or XML.

Additionally, if a file with a ".gz" or ".br" extension exists that will be served instead for the appropriate compression type regardless of the file type.  That is, a request for `styles.css` that accepts a gzipped file (according to the request headers) will automatically return the contents of `styles.css.gz` if it exists.  This approach supports any file type and offers some CPU optimization, especially if the cache lifetime is short.

## Example configuration

An example of a minimalist `.platform.app.yaml` file for PHP, heavily commented, is below:

```yaml
# .platform.app.yaml

# The name of this application, which must be unique within a project.
name: 'app'

# The type key specifies the language and version for your application.
type: 'php:7.0'

# On PHP, there are multiple build flavors available. Pretty much everyone
# except Drupal 7 users will want the composer flavor.
build:
    flavor: composer

# The relationships of the application with services or other applications.
# The left-hand side is the name of the relationship as it will be exposed
# to the application in the PLATFORM_RELATIONSHIPS variable. The right-hand
# side is in the form `<service name>:<endpoint name>`.
relationships:
    database: 'mysqldb:mysql'

# The hooks that will be triggered when the package is deployed.
hooks:
    # Build hooks can modify the application files on disk but not access any services like databases.
    build: |
        rm web/app_dev.php
    # Deploy hooks can access services but the file system is now read-only.
    deploy: |
        app/console --env=prod cache:clear


# The size of the persistent disk of the application (in MB).
disk: 2048

# The 'mounts' describe writable, persistent filesystem mounts in the application.
# The keys are directory paths relative to the application root. The values are a
# mount definition. In this case, `web-files` is just a unique name for the mount.
mounts:
    'web/files':
        source: local
        source_path: 'web-files'

# The configuration of the application when it is exposed to the web.
web:
    locations:
        '/':
            # The public directory of the application relative to its root.
            root: 'web'
            # The front-controller script which determines where to send
            # non-static requests.
            passthru: '/app.php'
        # Allow uploaded files to be served, but do not run scripts.
        # Missing files get mapped to the front controller above.
        '/files':
            root: 'web/files'
            scripts: false
            allow: true
            passthru: '/app.php'
```

> [!primary]  
> This configuration file is specific to one application. If you have multiple applications inside your Git repository (such as a RESTful web service and a front-end, or a main web site and a blog), you need `.platform.app.yaml` at the root of each application. See the [Multi-app](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/multi-app) documentation.
> 


