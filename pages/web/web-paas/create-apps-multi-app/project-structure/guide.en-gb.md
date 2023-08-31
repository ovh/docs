---
title: Choose a project structure
slug: project-structure
section: Multi-App
---

**Last updated 31st August 2023**



## Objective  

How you structure a project with multiple apps depends on how your code is organized
and what you want to accomplish.
For example, there are various ways you could set up the following multiple apps:

![Diagram of a project containing multiple apps](images/multiple-app.png "0.5")

Here are some example use cases and potential ways to organize the project:

| Use case                                                                                | Structure                                                                                            |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Separate basic apps that are worked on together.                                         | [Unified app configuration](#unified-app-configuration)                                              |
| One app depends on code from another app.                                                | [Nested directories](#nested-directories)                                                            |
| You want to keep configuration separate from code, such as through Git submodules. | [Configuration separate from code](#split-your-code-source-into-multiple-git-submodule-repositories) |
| You want multiple apps from the same source code.                                        | [Unified app configuration](#unified-app-configuration)                                              |
| You want to control all apps in a single location.                                       | [Unified app configuration](#unified-app-configuration)                                              |

## Unified app configuration

You can configure all your apps from a single file.
To do so, create a `{{< vendor/configfile "apps" >}}` and define each app as a key.

For example, if you have an API WebPaas backend with a Symfony API,
a Mercure Rocks server, and a Gatsby frontend,
you can organize your repository like this:

```txt
├── {{% vendor/configdir %}}
│   ├── {{% vendor/configfile "apps" "strip" %}}   <- Unified app configuration
│   ├── {{% vendor/configfile "routes" "strip" %}}
│   └── {{% vendor/configfile "services" "strip" %}}
├── admin
│   └── ...                 <- API WebPaas Admin app code
├── api-app
│   └── ...                 <- Bigfoot app code
├── gatsby
│   └── ...                 <- Gatsby app code
└── mercure
    └── ...                 <- Mercure Rocks app code
```

The `api` app is built from the `api-app` directory.</br>
The `admin` app is built from the `admin` directory.</br>
The `gatsby` app is built from the `gatsby` directory.</br>
The `mercure` app is built from the `mercure` directory.</br>
They all have different configurations for how they serve the files. For more details, see the [complete example file](https://github.com/platformsh-templates/bigfoot-multiapp/blob/multiapp-monolith/.platform/applications.yaml).

> [!primary]  
> 
> The `{{% vendor/configdir %}}` directory is located at the root, separate from your apps.
> It contains all the needed configuration files to set up the routing, services and behavior of each app.
> Since the code bases of your apps live in a different directory,
> you need to [change the source root of each app](#change-the-source-root-of-your-app).
> 
> To build multiple apps from the repository root, set `source.root` to `/`.
> This allows you to control all your apps in one place and even build multiple apps from the same source code.
> 
> 

To allow your apps to communicate with each other, define [relationships](./relationships.md).

Note that with this setup, when you amend the code of one of your apps,
the build image for your other apps can still be reused.

Once your repository is organized, you can use a configuration similar to the following:

```yaml {configFile="apps"}
api:
  type: php:8.2

  relationships:
    database: "database:postgresql"

  mounts:
    "/var/cache": "shared:files/cache"
    "/var/log": "shared:files/log"
    "/var/sessions": "shared:files/sessions"

  web:
    locations:
      "/":
        root: "public"
        passthru: '/index.php'
        index:
          - index.php
        headers:
          Access-Control-Allow-Origin: "*"

  hooks:
    build: |
      set -x -e
      curl -s https://get.symfony.com/cloud/configurator | bash
      symfony-build

    deploy: |
      set -x -e
      symfony-deploy

  source:
    root: api-app

admin:
  type: nodejs:16

  mounts:
    '/.tmp_platformsh': 'shared:files/tmp_platformsh'
    '/build': 'shared:files/build'
    '/.cache': 'shared:files/.cache'
    '/node_modules/.cache': 'shared:files/node_modules/.cache'

  web:
    locations:
      "/admin":
        root: "build"
        passthru: "/admin/index.html"
        index:
          - "index.html"
        headers:
          Access-Control-Allow-Origin: "*"

  hooks:
    build: |
      set -eu
      corepack yarn install --immutable --force
    post_deploy: |
      corepack yarn run build
  source:
    root: admin

gatsby:
  type: 'nodejs:18'

  mounts:
    '/.cache': { source: local, source_path: cache }
    '/.config': { source: local, source_path: config }
    '/public': { source: local, source_path: public }

  web:
    locations:
      '/site':
        root: 'public'
        index: [ 'index.html' ]
        scripts: false
        allow: true

  hooks:
    build: |
      set -e
      yarn --frozen-lockfile
    post_deploy: |
      yarn build --prefix-paths
  source:
    root: gatsby

mercure:
  type: golang:1.18

  mounts:
    'database': { source: local, source_path: 'database' }
    '/.local': { source: local, source_path: '.local' }
    '/.config': { source: local, source_path: '.config' }

  web:
    commands:
      start: ./mercure run --config Caddyfile.platform_sh

    locations:
      /:
        passthru: true
        scripts: false
        request_buffering:
          enabled: false
        headers:
          Access-Control-Allow-Origin: "*"

  hooks:
    build: |
      # Install Mercure using cache
      FILE="mercure_${MERCUREVERSION}_Linux_x86_64.tar.gz"
      if [ ! -f "$PLATFORM_CACHE_DIR/$FILE" ]; then
        URL="https://github.com/dunglas/mercure/releases/download/v${MERCUREVERSION}/$FILE"
        wget -O "$PLATFORM_CACHE_DIR/$FILE" $URL
      else
        echo "Found $FILE in cache, using cache"
      fi
      file $PLATFORM_CACHE_DIR/$FILE
      tar xvzf $PLATFORM_CACHE_DIR/$FILE

  source:
    root: mercure/.config
```

## Nested directories

When code bases are separate, changes to one app don't necessarily mean that the other apps in the project get rebuilt.
You might have a situation where app `main` depends on app `languagetool`, but `languagetool` doesn't depend on `main`.

In such cases, you can nest the dependency so the parent (`main`) gets rebuilt on changes to it or its children,
but the child (`languagetool`) is only rebuilt on changes to itself.

For example, you might have a Python app (`main`) that runs a script that requires Java code to be up to date.
But the Java app (`languagetool`) doesn't require updating when the Python app (`main`) is updated.
In that case, you can nest the Java app within the Python app:

```txt
├── {{% vendor/configdir %}}
│   ├── {{% vendor/configfile "apps" %}}
│   └── {{% vendor/configfile "routes" %}}
├── languagetool
│   └── main.java           <- Java app code
└── main.py                 <- Python app code
```

The Python app's code base includes all of the files at the top level (excluding the `{{% vendor/configdir %}}` directory)
*and* all of the files within the `languagetool` directory.
The Java app's code base includes only the files within the `languagetool` directory.

In this case, your `{{< vendor/configfile "apps" >}}` file must contain 2 entries, one for the `main` app and second one for the `languagetool` app.

> [!primary]  
> 
> The `{{% vendor/configdir %}}` directory is located at the root, separate from your apps.
> It contains all the needed configuration files to set up the routing, services and behavior of each app.
> Since the code base of the `languagetool` app lives in a different directory (`languagetool/`),
> you need to [change the source root](#change-the-source-root-of-your-app) of the `languagetool` app.
> 
> 

Once your repository is organized, you can use a configuration similar to the following:

```yaml {configFile="apps"}
main:
  type: 'python:3.11'
  ...
  
languagetool:
  type: 'java:17'
  source:
    root: 'languagetool'
  ...
```

## Split your code source into multiple Git submodule repositories

If you have different teams working on different code with different processes,
you might want each app to have its own repository.
Then you can build them together in another repository using [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

With this setup, your apps are kept separate from the top application.
Each app has its own [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) containing its code base.
All your apps are configured in a single `{{< vendor/configfile "apps" >}}` file.
So you could organize your [project repository](https://github.com/platformsh-templates/bigfoot-multiapp/tree/submodules-root-app-yaml) like this:

```text
├── {{% vendor/configdir %}}
│   ├── {{% vendor/configfile "apps" "strip" %}}
│   ├── {{% vendor/configfile "routes" "strip" %}}
│   └── {{% vendor/configfile "services" "strip" %}}
├── @admin      <-- API WebPaas Admin submodule
├── @api        <-- Bigfoot submodule
├── @gatsby     <-- Gatsby submodule
├── @mercure    <-- Mercure rocks submodule
└── .gitmodules
```

[Add the submodules using the Git CLI](../../development-submodules#clone-submodules-during-deployment).

Your `.gitmodules` file would define all the submodules like this:

```txt {location=".gitmodules"}
[submodule "admin"]
	path = admin
	url = https://github.com/platformsh-templates/bigfoot-multiapp-admin.git
[submodule "api"]
	path = api
	url = https://github.com/platformsh-templates/bigfoot-multiapp-api.git
[submodule "gatsby"]
	path = gatsby
	url = https://github.com/platformsh-templates/bigfoot-multiapp-gatsby.git
[submodule "mercure"]
	path = mercure
	url = https://github.com/platformsh-templates/bigfoot-multiapp-mercure.git
```

> [!primary]  
> 
> In this case, and any other case where your app configuration files are kept outside of the app directory,
> make sure you [change the source root](#change-the-source-root-of-your-app) for each of your apps.
> 
> 

## Change the source root of your app

When your app's code base and configuration file aren't located at the same directory level in your project repository,
you need to [define a root directory](../app-reference.md#root-directory) for your app.

To do so, add a new `source.root` property in your app configuration.

For example, to change the source root of the `admin` app
from the [unified app configuration](#unified-app-configuration) example project,
you could add the following configuration:

```yaml {configFile="apps"}
source:
    root: admin
```

The `source.root` path is relative to the repository root.
In this example, the `admin` app now treats the `admin` directory as its root when building.

If `source.root` isn't specified, it defaults to the same directory as the `{{< vendor/configfile "apps" >}}` (or `{{< vendor/configfile "app" >}}`) file itself.
