---
title: Configure environments
slug: configure-environment
section: Web
---

**Last updated 31st August 2023**



## Objective  

From your project's main page in the Console, you can see all your environments as a list or a project tree:

![List of all environments as a tree](images/environments.png "0.5")

In this overview, the names of inactive environments are lighter.
Selecting an environment allows you to see details about it,
such as its [activity feed](#activity-feed), [services](#service-information),
[metrics](../../increase-observability/metrics/_index.md), and [backups](../../environments/backup.md).

## Activity Feed

When you access an environment in the Console, you can see its [activity feed](../../increase-observability/logs/access-logs.md#activity-logs).
This allows you to check which activities have happened or are currently happening on the selected environment:

![Environment activity list](images/activity.png "0.5")

You can filter activities by type (such as merge, sync, or redeploy).

## Actions on environments

Each environment offers ways to keep environments up to date with one another:

* [{{< icon branch >}} **Branch**](../../other/glossary.md#branch) to create a new child environment.
* [{{< icon merge >}} **Merge**](../../other/glossary.md#merge) to copy the current environment into its parent.
* [{{< icon sync >}} **Sync**](../../other/glossary.md#sync)
  to copy changes from its parent environment into the current environment.

There are also additional options:

* {{< icon settings >}} **Settings** to [configure the environment](#environment-settings).
* {{< icon more >}} **More** to get more options.
* **URLs** to access the deployed environment from the web.
* **SSH** to access your project using SSH.
* **Code**
  * **CLI** for the command to get your project set up locally with the [{{< vendor/name >}}CLI](../cli/_index.md).
  * **Git** for the command to clone the codebase via Git.
  
    If you're using {{< vendor/name >}} as your primary remote repository, the command clones from the project.
    If you have set up an [external integration](../../integrations/source/_index.md),
    the command clones directly from the integrated remote repository.

    If the project uses an external integration to a repository that you haven't been given access to,
    you can't clone until your access has been updated.
    See how to [troubleshoot source integrations](../../integrations/source/troubleshoot.md).

## Environment URL

When you access an environment in the Console, you can view its URL:

![Environment URL and details](images/env-url.png "0.25")

While the environment is loading in the Console, a `Waiting for URL...` message is displayed instead of the URL.
If this message isn't updated once your [default environment](../../environments/_index.md#default-environment)'s information is loaded,
follow these steps:

1\. Check that [you have defined routes](../../define-routes/_index.md) for your default environment.

2\. Verify that your [application](../../create-apps/app-reference.md), [services](../../add-services/_index.md), and [routes](../../define-routes/_index.md) configurations are correct.

3\. Check that your default environment is [active](../../environments/deactivate-environment.md#reactivate-an-environment).


## Environment settings

To access the settings of an environment, click {{< icon settings >}} **Settings** within that environment.

![Settings for an environment](images/env-settings.png "0.75")

### Environment name

Under **Environment name**, you can edit the name and type of your environment and view its parent environment:

![Environment status](images/env-name.png "0.5")

### Status

Under **Status**, you can check whether or not your environment is [active](../../other/glossary.md#active-environment).

![Environment status](images/env-status.png "0.5")

For non-Production environments, you can [change their status](../../environments/deactivate-environment.md).

### Outgoing emails

Under **Outgoing emails**, you can allow your environment to [send emails](../../development/email.md):

![Environment email](images/env-email.png "0.75")

### Hide from search engines

Under **Hide from search engines**, you can tell [search engines to ignore the site](../../environments/search-engine-visibility.md):

![Environment search](images/env-search.png "0.5")

### HTTP access control

Under **HTTP access control**, you can [control access to your environment using HTTP methods](../../environments/http-access-control.md):

![Settings control access with password and by IP](images/settings-basics-access-control.png "0.5")

### Variables

Under **Variables**, you can define [environment variables](../../development/variables/_index.md):

![Configure {{< vendor/name >}} environment variables](images/settings-variables-environment.png "0.6")

## Service information

For each environment, you can view information about how your routes, services, and apps are currently configured.

To do so, click **Services**.
By default, you see configured routes.

### Routes

The **Router** section shows a list of all the [routes configured on your environment](../../define-routes/_index.md).
You can see each route's type and check if caching and server side includes have been enabled for it:

![Services: routes](images/routes.png "0.5")

To view the configuration file where your routes are set up, click **Configuration**.

### Applications

To see detailed information about an app container,
select it in the tree or list on the left-hand side:

![Services: app overview](images/app-overview.png "0.5")

The **Overview** tab gives you information about your app.
You can see:

* The language version, the container size, the amount of persistent disk,
  the number of cron jobs, and the command to SSH into the container.
* A summary of [metrics for the environment](../../increase-observability/metrics/_index.md).
* All cron jobs with their name, frequency, and command.
* All workers with their name, size, amount of persistent disk, and command to SSH into the container.

To view [the configuration file where your app is set up](../../create-apps/), click **Configuration**.

### Services

To see detailed information about a [running service](../../add-services/_index.md),
select it in the tree or list on the left-hand side:

![Services: service overview](images/service-overview.png "0.5")

The **Overview** gives you information about the selected service.
You can see the service version, the container size, and the disk size, if you've configured a persistent disk.
You can also see a summary of [metrics for the environment](../../increase-observability/metrics/_index.md).

To view the configuration file where your services are set up, click **Configuration**.
