---
title: Structure
slug: overview-structure
section: Overview
order: 2
---

**Last updated 24th June 2022**



## Objective  

Every application you deploy on Web PaaS is built as a **virtual cluster**,
containing a set of containers.
The default branch of your Git repository is always deployed as the production cluster.
Any other branch can be deployed as a development cluster.

By default, you can have up to three live development clusters at once,
but you can buy more on a per-project basis.

There are three types of containers within your cluster:

- one *router*
- one or more *application* containers
- zero or more *service* containers

All of those containers are managed by three special files in your Git repository:

- `.platform/routes.yaml`
- `.platform/services.yaml`
- `.platform.app.yaml`

In most cases, that means your repository looks like this:

```text
yourproject/
  .git/
  .platform/
    services.yaml
    routes.yaml
  .platform.app.yaml
  <your application files>
```

## Router

There is always exactly one router per cluster.

The router of a cluster is a single nginx process.
It's configured by the `routes.yaml` file.
It maps incoming requests to the appropriate application container
and provides basic caching of responses, if so configured.
It has no persistent storage.

## Service

Service containers are configured by the `services.yaml` file.

There may be zero or more service containers in a cluster,
depending on the `services.yaml` file.
For zero services, don't include the `services.yaml` file in your repository.

The code for a service is provided by Web PaaS in a pre-built container image,
along with a default configuration.
Depending on the service,
it may also include user-provided configuration in the `services.yaml` file.
Examples of services include MySQL/MariaDB, Redis, and RabbitMQ.

## Application

There always must be one application container in a cluster,
but there may be more.

Each application container corresponds to a `.platform.app.yaml` file in the repository.
If there are 3 `.platform.app.yaml` files, there are three application containers.
Application containers hold the code you provide via your Git repository.
Application containers are always built off of one of the Web PaaS-provided language-specific images,
such as `PHP 7.4`, `Node.js 14`, and `Python 3.7`.
It 's also possible to have multiple application containers running different languages or versions.

For typical applications, there is only one `.platform.app.yaml` file,
which is generally placed at the repository root.
