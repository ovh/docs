---
title: Cron jobs
slug: cron
section: App
updated: 2021-03-26
---

**Last updated 26th March 2021**



## Objective  

Cron jobs allow you to run scheduled tasks at specified times or intervals. The `crons` section of `.platform.app.yaml` describes these tasks and the schedule when they are triggered.  Each item in the list is a unique name identifying a separate cron job. Crons are started right after build phase.

It has a few subkeys listed below:

* **spec**: The [cron specification](https://en.wikipedia.org/wiki/Cron#CRON_expression). For example: `*/19 * * * *` to run every 19 minutes.
* **cmd**: The command that is executed, for example `cd public ; drush core-cron`

On Web PaaS Professional projects, cron runs may not trigger more frequently than every five (5) minutes.  If specified for a more frequent time, they will still trigger every 5 minutes.  On Enterprise and Elite plans crons may trigger as often as every one minute.

Additionally, a random offset is applied to all cron runs in order to minimize cron tasks running simultaneously.  The offset is a random number of seconds up to 5 minutes or the cron frequency, whichever is smaller.  The cron task will still run at the frequency specified, but may be offset.  For example, a cron job set to run every 9 minutes may run at 9, 18, 27, etc. minutes past the hour or up to 14, 23, 32, etc. minutes past the hour.  A nightly cron task for 3:00 am may run anywhere from 3:00 am to 3:05 am.

A single application container may have any number of cron tasks configured, but only one may be running at a time.  That is, if a cron task fires while another cron task is still running it will pause and then continue normally once the first has completed.  In general, it is a good idea to set crons to run on prime number minutes so that they fire simultaneously as rarely as possible.

Cron runs are executed using the dash shell, not the bash shell used by normal SSH logins. In most cases that makes no difference but may impact some more involved cron scripts.

If an application defines both a `web` instance and a `worker` instance, cron tasks will be run only on the `web` instance.

If running the cron task in a specific timezone that is different than UTC is required, you will need to [configure that timezone](../timezone) explicitly.

> [!primary]  
> Cron log output is captured in the at `/var/log/cron.log`.  See the [Log page](../../development-logs) for more information on logging.
> 

## How do I setup Cron for a typical Drupal site?

The following example runs Drupal's normal cron hook every 19 minutes, using Drush.  It also sets up a second cron task to run Drupal's queue runner on the aggregator_feeds queue every 7 minutes.

```yaml
crons:
    # Run Drupal's cron tasks every 19 minutes.
    drupal:
        spec: '*/19 * * * *'
        cmd: 'cd web ; drush core-cron'
    # But also run pending queue tasks every 7 minutes.
    # Use an odd number to avoid running at the same time as the `drupal` cron.
    drush-queue:
        spec: '*/7 * * * *'
        cmd: 'cd web ; drush queue-run aggregator_feeds'
```
