---
title: Drupal7
updated: 2021-05-11
---



## Structure your files

Web PaaS is very flexible and allows you to structure your files as you wish within your Git repository, and will build your project based on how your files are organized.

Here are the three build modes that can be used:

-   **Profile**: Web PaaS builds your project like Drupal.org does for distributions.

-   **Project**: Web PaaS builds your make file using *drush make*. You don't need any Drupal core files nor any contributed modules, themes or libraries within your Git repository.

-   **Vanilla**: Web PaaS builds your project as it is in your Git repository. You can push all Drupal files and contributed modules, themes or libraries.


### Profile mode

If your repository contains a `.profile` file, Web PaaS builds your project in profile mode. This is similar to what Drupal.org does to build distributions. Everything you have in your repository will be copied to your `profiles/[name]` folder.

This build mode supports having a `project.make` file for your contributed modules, themes or libraries.

> [!primary]  
> When building as a profile, you **need a make file for Drupal core** called: `project-core.make`. See
> [drush make files](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks/frameworks-drupal7/drush).
> 

```text
.git/
project.make
project-core.make
my_profile.info
my_profile.install
my_profile.profile
modules/
  features/
    my_feature_01/
    ...
  custom/
    my_custom_module/
    ...
themes/
  custom/
    my_custom_theme/
    ...
libraries/
  custom/
    my_custom_libraries/
    ...
translations/
  ...
```

### Project mode

If your repository doesn't contain a `.profile` file, but contains a make file called: `project.make` (or even `drupal-org.make`), Web PaaS builds your project using Drush make. Everything you have in your repository will be copied to your `sites/default` folder.

```text
.git/
project.make
modules/
  features/
    my_feature_01/
    ...
  custom/
    my_custom_module/
    ...
themes/
  custom/
    my_custom_theme/
    ...
libraries/
  custom/
    my_custom_libraries/
    ...
translations/
  ...
```

### Vanilla mode

In Vanilla mode, Web PaaS just takes your repository as-is without any additional reorganization.  This is the behavior when there is no `.make` or `.profile` file, or when the build mode is set to `none` or `composer` rather than to `drupal`.

It's best to keep your docroot separate from your repository root, as that allows you to store private files outside of the docroot when needed.  For example, your repository layout will likely resemble the following:

```text
.git/
private/
web/
  index.php
  ... (other Drupal core files)
  sites/
    all/
      modules/
      themes/
    default/
```

If you already have a Drupal 7 site built from a `tar.gz` download from Drupal.org, this is likely the best path forward.

## Configuring Web PaaS for Drupal

The ideal `.platform.app.yaml` file will vary from project project, and you are free to customize yours as needed.  A recommended baseline Drupal 7 configuration is listed below, and can also be found in our [Drupal 7 template project](https://github.com/platformsh-templates/drupal7) or [Drupal 7 vanilla template project](https://github.com/platformsh-templates/drupal7-vanilla).

> [!primary]  
> Your database for Drupal must be named "database" in the `relationships`.
> 


```yaml   
# This file describes an application. You can have multiple applications
# in the same project.
#
# See https://docs.platform.sh/user_guide/reference/platform-app-yaml.html

# The name of this app. Must be unique within a project.
name: 'app'

# The runtime the application uses.
type: 'php:7.2'

# Configuration of the build of this application.
build:
  flavor: drupal

# The build-time dependencies of the app.
dependencies:
  php:
    "drush/drush": "^8.0"

# The relationships of the application with services or other applications.
#
# The left-hand side is the name of the relationship as it will be exposed
# to the application in the PLATFORM_RELATIONSHIPS variable. The right-hand
# side is in the form `<service name>:<endpoint name>`.
relationships:
    database: 'db:mysql'

# The configuration of app when it is exposed to the web.
web:
    # Specific parameters for different URL prefixes.
    locations:
        '/':
            # The folder from which to serve static assets, for this location.
            #
            # This is a filesystem path, relative to the application root.
            root: 'public'

            # How long to allow static assets from this location to be cached.
            #
            # Can be a time in seconds, or -1 for no caching. Times can be
            # suffixed with "s" (seconds), "m" (minutes), "h" (hours), "d"
            # (days), "w" (weeks), "M" (months, as 30 days) or "y" (years, as
            # 365 days).
            expires: 5m

            # Whether to forward disallowed and missing resources from this
            # location to the application.
            #
            # Can be true, false or a URI path string.
            passthru: '/index.php'

            # Deny access to static files in this location.
            allow: false

            # Rules for specific URI patterns.
            rules:
                # Allow access to common static files.
                '\.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$':
                    allow: true
                '^/robots\.txt$':
                    allow: true
                '^/sitemap\.xml$':
                    allow: true

        '/sites/default/files':
            # Allow access to all files in the public files directory.
            allow: true
            expires: 5m
            passthru: '/index.php'
            root: 'public/sites/default/files'

            # Do not execute PHP scripts.
            scripts: false

            rules:
                # Provide a longer TTL (2 weeks) for aggregated CSS and JS files.
                '^/sites/default/files/(css|js)':
                    expires: 2w

# The size of the persistent disk of the application (in MB).
disk: 2048

# The mounts that will be performed when the package is deployed.
mounts:
    '/public/sites/default/files':
        source: local
        source_path: 'files'
    '/tmp':
        source: local
        source_path: 'tmp'
    '/private':
        source: local
        source_path: 'private'
    '/drush-backups':
        source: local
        source_path: 'drush-backups'

# The hooks executed at various points in the lifecycle of the application.
hooks:
    # We run deploy hook after your application has been deployed and started.
    deploy: |
        set -e
        cd public
        drush -y updatedb

    # The configuration of scheduled execution.
crons:
    drupal:
        spec: '*/20 * * * *'
        cmd: 'cd public ; drush core-cron'

```  

