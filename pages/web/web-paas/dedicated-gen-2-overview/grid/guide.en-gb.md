---
title: Differences between Production and Development environments
slug: grid
section: Overview
order: 2
---

**Last updated 31st August 2023**



## Objective  

With {{% names/dedicated-gen-2 %}} plans, your Production and Staging environments are dedicated virtual machines,
while your Development environments run on the Grid, meaning shared redundant infrastructure.
This difference means a few configuration options and tools function differently in the different environments.

These differences should be gone with [{{% names/dedicated-gen-3 %}}](../../dedicated-gen-3/_index.md).

## Syncing data between environments

Because of the differences between {{% names/dedicated-gen-2 %}} and Grid environments,
basic [syncs](../../other/glossary.md#sync) and [merges](../../other/glossary.md#merge)
aren't available between Development environments and Production/Staging environments.
So you don't see working buttons with those options in the Console.

To transfer data between environments, backup your Production/Staging data and then synchronize Development data.
See how to [back up and transfer data](../../development/transfer-dedicated.md#synchronize-files-from-development-to-stagingproduction).

## Backups

Production environments are [backed up automatically](./backups.md).
For other environments, trigger a [manual backup](../../environments/backup.md).

## PHP

### Extensions

The following table shows all of the extensions that are enabled by default in each PHP version.
To add any other extension with a pre-existing package in the Debian Apt repository,
open a support ticket.

{{< php-extensions/dedicated >}}

### Configuration options

You can't use custom `php.ini` files on your Production/Staging environments.
You can still change all PHP options that can be changed at runtime.
For example, change the memory limit using `ini_set('memory_limit','1024M');`

For other PHP options, such as the following, open a support ticket:

* `max_execution_time`
* `max_input_time`
* `max_input_vars`
* `memory_limit`
* `post_max_size`
* `request_order`
* `upload_max_filesize`

### Xdebug

All {{% names/dedicated-gen-2 %}} clusters that have [Xdebug](../../languages/php/xdebug.md) enabled have a second PHP-FPM process.
This second process is used only when requests include the correct Xdebug key in a header.
So you can keep Xdebug always on and not worry about performance issues as it's ignored on most requests.

To obtain the key, open a support ticket.
Staging and Production environments have separate keys.
Set that key in the Xdebug helper for your browser.
Then whenever you have Xdebug enabled, the request uses the alternate development PHP-FPM process with Xdebug.

## Solr

On Grid environments, [Solr](../../add-services/solr.md) runs as a standalone instance.
On {{% names/dedicated-gen-2 %}} environments, it runs as [SolrCloud](https://solr.apache.org/guide/6_6/solrcloud.html):
a cluster of Solr servers to ensure high availability.
This shouldn't affect you most of the time, but may influence certain advanced use cases.

## Cron tasks interrupted by deploys

How [cron tasks](../../create-apps/app-reference.md#crons) interact with deploys changes based on the environment.

On Grid environments, a running cron task blocks a deploy until the cron is complete.
On {{% names/dedicated-gen-2 %}} environments, a deploy terminates a running cron task.

Specifically, when a deploy to either Production or Staging begins,
any active cron tasks are sent a `SIGTERM` message so that they can terminate gracefully.
If they're still running 2 seconds later, a `SIGKILL` message is sent to forcibly terminate the process.

So it's best to ensure your cron tasks can receive a `SIGTERM` message and terminate gracefully.

## Configuration & change management

You can't manage some configuration settings via YAML configuration files on {{% names/dedicated-gen-2 %}} environments.
In these cases, you need to open a support ticket.
You can have some settings different between Staging and Production environments.
It's assumed you want the settings the same, unless you state otherwise in the ticket.

The following settings require a support ticket:

* [Worker instances](../../create-apps/app-reference.md#workers)
* [Service configuration](../../add-services/_index.md)
* Relationships among services and apps
* Plan upsizing
* Increasing storage
* Allocating storage among mounts and services
* [PHP extensions](../../languages/php/extensions.md)
* Web server configuration (the [`web.locations` section of your app configuration](../../create-apps/app-reference.md#locations))


