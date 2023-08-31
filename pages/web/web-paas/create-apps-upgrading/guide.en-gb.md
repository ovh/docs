---
title: Upgrading
slug: create-apps-upgrading
section: Create-Apps
---

**Last updated 31st August 2023**


## Changes in version 2022.02

* The cron `cmd` syntax is now deprecated in favor of `commands`.
  Previous cron job definitions looked like this:

```yaml
crons:
    sendemails:
        spec: '*/7 * * * *'
        cmd: cd public && send-pending-emails.sh
```

  They should now be written like this:

```yaml
crons:
    sendemails:
        spec: '*/7 * * * *'
        commands:
            start: cd public && send-pending-emails.sh
```

  The new syntax offers greater flexibility and configuration.
  For more details, see the [full specification for cron jobs](./app-reference.md#crons).

## Changes in version 2019.05

* The `!archive` tag in YAML has been un-deprecated, and is now favored over the `!include` option. `!include` is still available for other include types (`yaml`, `binary`, and `string`).

## Changes in version 2017.11 (2017-11-09)

* The `!archive` tag in YAML files is now deprecated in favor of the more generic [`!include`](../overview/yaml/_index.md).
For example, the following `{{< vendor/configfile "services" >}}` snippet:

```yaml
mysearch:
    type: solr:6.3
    disk: 1024
    configuration:
        core_config: !archive "myconfdir"
```

    Can now be written as:

```yaml
mysearch:
    type: solr:6.3
    disk: 1024
    configuration:
        core_config: !include
            type: archive
            path: "myconfdir"
```

* The syntax for the `mounts` key in `{{< vendor/configfile "app" >}}` has changed.
Rather than a parsed string, the value of each mount is a [multi-key definition](./app-reference.md#mounts).
That is, the following example:

```yaml
mounts:
    "tmp": "shared:files/tmp"
    "logs": "shared:files/logs"
 ```

    Can now be written as:

```yaml
mounts:
    tmp:
        source: local
        source_path: tmp
    logs:
        source: local
        source_path: logs

```

## Changes in version 2016.6 (2016-11-18)

* Application containers now include the latest LTS version of Node.js, 6.9.1. The previously included version was 4.6.1.
* Composer was briefly called with `--no-dev`, but as of 2016-11-21 this change has been reverted, because of the unintended effect it had on projects using the Symfony framework.

## Changes in version 2016.5

As of October 2016, the default behaviour of the `expires` key, which controls
client-side caching of static files, has changed. Previously, if the key was
unset, the `Expires` and `Cache-Control` HTTP headers were left unset in the
response, which meant that client side caching behaviour was left undefined.

To ensure consistent behaviour that doesn't depend on which browser the client
is using, the new default behaviour is to set these headers to values that
disable client-side caching. This change only affects static files served
directly by the web server. Responses served from `passthru` URLs continue to use
whatever caching headers were set by the application..

To enable caching on your static files, make sure you include an `expires` key in your [web configuration](./app-reference.md), as shown below:

```yaml
web:
    locations:
        "/":
            root: "public"
            passthru: "/index.php"
            index:
                - index.php
            expires: 300
            scripts: true
            allow: true
            rules:
                \.mp4$:
                    allow: false
                    expires: -1
        "/sites/default/files":
            expires: 300
            passthru: true
            allow: true
```

## Changes in version 2016.4

As of July 2016, we no longer create default configuration files if one isn't provided.
The defaults we used to provide were tailored specifically for Drupal 7, which is now a legacy-support version with the release of Drupal 8 and not especially useful for non-Drupal or non-PHP sites.
They also defaulted to software versions that are no longer current and recommended.
Instead, you must provide your own `{{< vendor/configfile "app" >}}`, `{{< vendor/configfile "routes" >}}`, and `{{< vendor/configfile "services" >}}` files.

Additionally, a version for a language or service should always be specified as well. That allows you to control when you upgrade from one version to another without relying on a network default.

The previous default files, for reference, are:

### Application

```yaml
name: php
type: "php:5.4"
build:
    flavor: "drupal"
access:
    ssh: contributor
relationships:
    database: "mysql:mysql"
    solr: "solr:solr"
    redis: "redis:redis"
web:
    document_root: "/"
    passthru: "/index.php"
disk: 2048
mounts:
    "public/sites/default/files": "shared:files/files"
    "tmp": "shared:files/tmp"
    "private": "shared:files/private"
crons:
    drupal:
        spec: "*/20 * * * *"
        cmd: "cd public ; drush core-cron"
```

### Routes

```yaml
 "http://{default}/":
     type: upstream
     upstream: "php:http"
     cache:
         enabled: true
     ssi:
         enabled: false

 "http://www.{default}/":
     type: redirect
     to: "http://{default}/"
```

### Services

```yaml
 mysql:
     type: mysql:5.5
     disk: 2048

 redis:
     type: redis:2.8

 solr:
     type: solr:3.6
     disk: 1024
```

## Changes in version 2016.3

As we are aiming to always provide you more control and flexibility on how to deploy your applications, the `{{< vendor/configfile "app" >}}` format has been greatly improved. It is now way more flexible, and also much more explicit to describe what you want to do.

The `web` key is now a set of `locations` where you can define very precisely the behavior of each URL prefix.

Note, we no longer move your application from "/" to "public/" automatically if the new format is adopted.
If you are using Drupal, move all of your Drupal files into "public/" in the Git repository.

Old format:

```yaml
web:
    document_root: "/"
    passthru: "/index.php"
    index_files:
        - "index.php"
    expires: 300
    whitelist:
        - \.html$
```

New format:

```yaml
web:
    locations:
        "/":
            root: "public"
            passthru: "/index.php"
            index:
                - index.php
            expires: 300
            scripts: true
            allow: true
            rules:
                \.mp4$:
                    allow: false
                    expires: -1
        "/sites/default/files":
            expires: 300
            passthru: true
            allow: true
```

### Backward compatibility

We generally try to keep backward compatibility with previous configuration formats. Here is what happens if you don't upgrade your configuration:

```yaml
# The following parameters are automatically moved as a "/" block in the
# "locations" object, and are invalid if there is a valid "locations" block.
document_root: "/public"      # Converted to [locations][/][root]
passthru: "/index.php"        # Converted to [locations][/][passthru]
index_files:
    - index.php               # Converted to [locations][/][index]
whitelist: [ ]                # Converted to [locations][/][rules]
blacklist: [ ]                # Converted to [locations][/][rules]
expires: 3d                   # Converted to [locations][/][expires]
```

## Changes in version 2015.7

The `{{< vendor/configfile "app" >}}` configuration file now allows for a much clearer syntax, which you can (and should) start using now.

The old format had a single string to identify the `toolstack` you use:

```yaml
toolstack: "php:drupal"
```

The new syntax allows to separate the concerns of what language you are running
and the build process that is going to happen on deployment:

```yaml
type: php
build:
    flavor: drupal
```
Currently we only support `php` in the 'type' key. Current supported build
flavors are `drupal`, `composer` and `symfony`.

## Changes in version 2014.9

This version introduces changes in
the configuration files format. Most of the old configuration format is
still supported, but customers are invited to move to the new format.

For an example upgrade path, see the [Drupal 7.x branch of the
`platformsh-examples`
repository](https://github.com/platformsh-templates/drupal7/blob/master/.platform.app.yaml)
on GitHub.

Configuration items for PHP that previously was part of
`{{< vendor/configfile "services" >}}` are now moved into `{{< vendor/configfile "app" >}}`, which
gains the following top-level items:

-   `name`: should be `"php"`

-   `relationships`, `access` and `disk`: should be the same as the

    `relationships` key of PHP in `{{< vendor/configfile "services" >}}`

Note that there is now a sane default for `access` (SSH access to PHP is
granted to all users that have role "collaborator" and above on the
environment) so most customers can now just omit this key in
`{{< vendor/configfile "app" >}}`.

In addition, version 1.7.0 now has consistency checks for configuration
files and rejects `git push` operations that contain configuration
files that are invalid. In this case, just fix the issues as they are
reported, commit and push again.
