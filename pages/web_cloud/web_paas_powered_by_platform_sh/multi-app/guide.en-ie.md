---
title: Multiple applications
updated: 2021-03-31
---

**Last updated 31st March 2021**



## Objective  

Web PaaS supports building multiple applications per project (for example RESTful web services with a front-end, or a main website and a blog).  For resource allocation reasons, however, that is not supported on Standard plan.

> [!primary]  
> This page only applies to Grid projects.  
> 

## Project structure

There are multiple ways to structure such a project, depending on the way your source code is organized and what your goal is.  All of these approaches may be used within a single project simultaneously, although it is often easier to maintain if you settle on just one approach for a given project.

![Multi-app](images/multiple-applications.png "0.5")

### Discrete code bases

If your project consists of a discrete code base for each application, the most straightforward approach is to put both code bases into a single project repository in separate directories.  Each will have its own `.platform.app.yaml` file, which will define how that particular application gets built, using the code in that directory.

For example, if you have a Drupal back end with an AngularJS front end you could organize the repository like this:

```bash
.git/
.platform/
drupal/
  .platform.app.yaml
  ...
angular/
  .platform.app.yaml
```

Each `.platform.app.yaml` file will define a single application container, and build code in that directory.  The `.platform` directory is outside of all of them and still defines additional services you require, as well as routes.

Note that disk paths in the `.platform.app.yaml` file are relative to the directory where that file lives by default.

This is the recommended approach for most configurations.

### Explicit `source.root`

As an alternative, you may specify a `source.root` key in a `.platform.app.yaml` file to override the "application root is where the file is" logic.  The `.platform.app.yaml` file may then live anywhere in the repository but use code from another directory.  Two separate `.platform.app.yaml` files may refer to the same directory if desired.

For example:

```yaml
# .platform.app.yaml

source:
    root: restapp
```

```bash
.platform/
main/
    .platform.app.yaml
.platform.app.yaml
restapp/
    # Your code here
```

In this case, the `.platform.app.yaml` file in `main` does not specify a `source.root`, and so will be built from the code in `main`.  The top-level `.platform.app.yaml` includes the YAML fragment above.  It will get built using the code in `restapp`, as if it were in that directory.

Note that disk parameters in the `.platform.app.yaml` file will be relative to the `source.root` directory if specified.  The `source.root` path is relative to the repository root.

The primary use case for this configuration is if the source code is pulled in as a [Git submodule](#submodules) or downloaded during the build phase.

### `applications.yaml`

It is possible to define an application in a `.platform/applications.yaml` file rather than in discrete `.platform.app.yaml` files.  The syntax is nearly identical, but the `source.root` key is required.  The `applications.yaml` file is then a YAML array of application definitions.

For example, the following `.platform/applications.yaml` file defines three applications:

```yaml
# .platform/applications.yaml
-   name: api

    type: golang:1.14
    source:
        root: apiapp
    hooks:
        build: |
            go build -o bin/app
    web:
        upstream:
            socket_family: tcp
            protocol: http
        commands:
            start: ./bin/app
        locations:
            /:
                allow: false
                passthru: true

-   name: main

    type: "php:7.4"
    source:
        root: mainapp
    web:
        locations:
            "/":
                root: "web"
                passthru: "/index.php"

-   name: admin

    type: "php:7.4"
    size: S
    source:
        root: mainapp
    web:
        locations:
            "/":
                root: "web"
                passthru: "/admin.php"
```

In this example, the `apiapp` directory will get built as a Go application while the `mainapp` directory will get built as two separate PHP applications, even though none of those directories has a `.platform.app.yaml` file.  The two PHP applications will use the same source code, but have different front controllers for the `admin` and `main` applications.  The `admin` instance will also be fixed at an `S` size container, while `main` will scale freely.

The primary use case for this configuration is defining multiple applications with different configuration off of the same source code, or when the source code is downloaded during the build phase.

## Submodules

Web PaaS supports Git submodules, so each application can be in a separate repository.  However, there is currently a notable limitation: the `.platform.app.yaml` files must be in the top-level repository. That means the project must be structured like this:

```text
.git/
.platform/
    routes.yaml
    services.yaml
app1/
    .platform.app.yaml
    app1-submodule/
        index.php
app2/
    .platform.app.yaml
    app2-submodule/
        index.php
```

This puts your applications' files at a different path relative to your `.platform.app.yaml` files.  The recommended way to handle that is to specify a `source.root` key in the `.platform.app.yaml` file and have it reference the submodule directory.

## Multi-app Routes

Every application, however it is defined, must have a unique `name` property.  The `routes.yaml` file may then refer to that application by name as an `upstream` for whatever route is appropriate.

For example, assuming this configuration from above:

```bash
.git/
.platform/
drupal/
  .platform.app.yaml
  ...
angular/
  .platform.app.yaml
```

The `.platform/routes.yaml` file can be structured like this:

```yaml
"https://backend.{default}/":
    type: upstream
    upstream: "drupal:http"
"https://{default}/":
    type: upstream
    upstream: "angular:http"
```

(This assumes your Drupal application is named `drupal` and your Angular front-end is named `angular`.)

Assuming a domain name of `example.com`, that will result in:

* `https://backend.example.com/` being served by the Drupal instance.
* `https://example.com/` being served by the AngularJS instance.

There is no requirement that an application be web-accessible.  If it is not specified in `routes.yaml` then it will not be web-accessible at all.  However, if you are building a non-routable application off of the same code base as another application, you should probably consider defining it as a [`worker`](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/workers) instead.  The net result is the same but it is much easier to manage.

## Relationships

In a multi-app configuration, applications by default cannot access each other.  However, they may declare a `relationships` block entry that references another application rather than a service.  In that case the endpoint is `http`.

However, be aware that circular relationships are not supported.  That is, application A cannot have a relationship to application B if application B also has a relationship to application A.  Such circular relationships are usually a sign that the applications should be coordinating through a shared data store, like a database, [RabbitMQ server](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/rabbitmq), or similar.

**Example:**

You have 2 applications, `app1` and `app2`. `app1` wants to connect to `app2` (for instance, if `app2` is a backend data API service).  In `app1/.platform.app.yaml` you would make a relationship to `app2` like so:

```yaml
relationships:
    app2: "app2:http"
```

Once committed and rebuilt, you will be able to access `app2` from `app1` via this url `http://app2.internal`. (e.g `curl http://app2.internal`). The relationships array will be updated within the `app1` container for the newly available `app2` relationship:

```bash
$ echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq
{
  "app2": [
    {
      "username": null,
      "scheme": "http",
      "service": "app2",
      "fragment": null,
      "ip": "169.254.254.97",
      "hostname": "yk4cdhknk6uqy7x2wdtyueqtei.app2.service._.eu-3.platformsh.site",
      "public": false,
      "cluster": "bt3bfggvvcqzg-master-7rqtwti",
      "host": "app2.internal",
      "rel": "http",
      "query": {},
      "path": null,
      "password": null,
      "type": "nodejs:14",
      "port": 80,
      "host_mapped": false
    }
  ]
}
```

Like all other relationships, `app2` will not be available to `app1` until after the build process has completed. 

> [!primary]  
> Note the `http`. The relationship is created within the internal network over port 80. HTTPS is not supported.
> 
