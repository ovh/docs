---
title: Philosophy
slug: overview-philosophy
section: Overview
order: 2
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} aims at reducing configuration and making developers more productive.
It abstracts your project infrastructure and manages it for you,
so you never have to configure services like a web server, a MySQL database, or a Redis cache from scratch again.

{{< vendor/name >}} is built on one main idea &mdash; your server infrastructure is part of your app,
so it should be version controlled along with your app.

Every branch you push to your Git repository can come with bug fixes,
new features, **and** infrastructure changes.
You can then test everything as an independent deployment,
including your application code and all of your services with a copy of their data
(database entries, search index, user files, etc.).

This allows you to preview exactly what your site would look like if you merged your changes to production.

## The basics

On {{< vendor/name >}}, a **project** is linked to a Git repository and is composed of one or more **apps**.
An app is a directory in your Git repository with a specific {{< vendor/name >}} configuration
and dedicated HTTP endpoints (via the `{{< vendor/configfile "app" >}}` file).

Projects are deployed in **environments**.
An environment is a standalone copy of your live app which can be used for testing,
Q&A, implementing new features, fixing bugs, and so on.

Every project you deploy on {{< vendor/name >}} is built as a *virtual cluster* containing a series of containers.
The main branch of your Git repository is always deployed as a production cluster.
Any other branch can be deployed as a staging or development cluster.

There are three types of containers within your cluster,
all configured by files stored alongside your code:

- The [*router*](../define-routes/_index.md), configured in `{{< vendor/configfile "routes" >}}`,

  is a single Nginx process responsible for mapping incoming requests to an app container,
  and to optionally provide HTTP caching.

- One or more [*apps*](../create-apps/_index.md), configured via `{{< vendor/configfile "app" >}}` files, holding the code of your project.


- Some optional [*services*](../add-services/_index.md), configured in `{{< vendor/configfile "services" >}}`,

  like MySQL/MariaDB, Elasticsearch, Redis, or RabbitMQ.
  They come as optimized pre-built images.

## The workflow

Every time you deploy a branch to {{< vendor/name >}}, the code is *built* and then *deployed* on a new cluster.

The [**build** process](../overview/build-deploy.md#build-steps) looks through the configuration files in your repository
and assembles the necessary containers.

The [**deploy** process](../overview/build-deploy.md#deploy-steps) makes those containers live, replacing the previous
versions, with no service downtime.

Depending on your needs, you can also [set up a **post-deploy** hook](#add-a-post-deploy-hook) to run after your app is deployed and your application container starts accepting traffic.
Adding a [`post-deploy` hook](../create-apps/hooks/hooks-comparison.md#post-deploy-hook) can be useful to run updates that don't require exclusive database access.
Note that if you're using [Gatsby](../guides/gatsby/headless/_index.md) to pull from a backend container on the same environment,
you need a `post-deploy` hook to successfully build and deploy your app.

### How your app is built

During the [build step](../overview/build-deploy.md#build-steps),
dependencies specified in `{{< vendor/configfile "app" >}}` are installed on application containers.

You can also customize the build step by providing a [`build` hook](../create-apps/hooks/hooks-comparison.md#build-hook) composed of one or more shell commands
that help create your production codebase.
That could be compiling TypeScript files, running some scripts,
rearranging files on disk, or whatever else you want.

Note that at this point all you have access to is the filesystem;
there are **no services or other databases available**.
Your live website is unaffected.

Once the build step is completed, the filesystem is frozen and a read-only container image is created.
That filesystem is the final build artifact.

### How your app is deployed

Before starting the [deployment](../overview/build-deploy.md#deploy-steps) of your app,
{{< vendor/name >}} pauses all incoming requests and holds them to avoid downtime.

Then, the current containers are stopped and the new ones are started.
{{< vendor/name >}} then opens networking connections between the various containers,
as specified in the configuration files.
The connection information for each service is available as [environment variables](../guides/symfony/environment-variables.md).

Similar to the build step, you can define a [deploy hook](../create-apps/hooks/hooks-comparison.md#deploy-hook) to prepare your app.
Your app has complete access to all services, but the filesystem where your code lives is now read-only.

Finally, {{< vendor/name >}} opens the floodgates and lets incoming requests through your newly deployed app.

### Add a post-deploy hook

You can add a [`post-deploy` hook](../create-apps/hooks/hooks-comparison.md#post-deploy-hook) to be run after the build and deploy steps.

Similar to the [`deploy` hook](../create-apps/hooks/hooks-comparison.md#deploy-hook),
the `post-deploy` hook only runs once your application container accepts requests.
So you can use it to run updates such as content imports or cache warmups that can be executed simultaneously with normal traffic.


During a redeploy, the `post-deploy` hook is the only hook that is run.

## Get support

If you're facing an issue with {{< vendor/name >}},
submit a [Support ticket](https://console.platform.sh/-/users/~/tickets/open).

## What's next?

To get a feeling of what working with {{< vendor/name >}} entails,
see the [Get Started](../get-started/_index.md) tutorial.
