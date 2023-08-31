---
title: Troubleshoot disks
slug: create-apps-troubleshoot-disks
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

{{% troubleshoot %}}

## Exceeding plan storage limit

Professional plans come with a default amount of storage that you can [change with your plan](../administration/pricing/_index.md).
The storage is allocated among your services and applications using the `disk` parameter in their configuration files.

You might accidentally set the sum of all `disk` parameters in the files to exceed your plans storage limit.
For example, by setting `disk: 4096` for a MySQL service in `{{< vendor/configfile "services" >}}`
and `disk: 4096` in `{{< vendor/configfile "app" >}}` for a plan with a 5&nbsp;GB storage limit.

In such cases, you get an error like the following:

```text
Error: Resources exceeding plan limit; disk: 8192.00MB > 5120.00MB; try removing a service, or add more storage to your plan
```

To fix the error, do one of the following:

* Lower the `disk` parameters to a value within your plan's storage limits.
  Note the [limits to downsizing disks](./app-reference.md#downsize-a-disk).
* Increase your plan's storage limits.
  This can only be done by people with the [manage plans permission](../administration/users.md#organization-permissions).

## Low disk space

If you have set up [health notifications](../integrations/notifications.md),
you may receive a notification of low disk space.

To solve this issue:

* [Check mount usage](./troubleshoot-mounts.md#disk-space-issues)
* [Check your database disk space](#check-your-database-disk-space) (if applicable)
* [Increase the available disk space](#increase-available-disk-space) (if necessary)

### Check your database disk space

To get approximate disk usage for a database, run the command `webpaas db:size`.
This returns an estimate such as the following:

```text
+----------------+-----------------+--------+
| Allocated disk | Estimated usage | % used |
+----------------+-----------------+--------+
| 1.0 GiB        | 520.3 MiB       | ~ 51%  |
+----------------+-----------------+--------+
```

Keep in mind that this estimate doesn't represent the exact real size on disk.
But if you notice that the usage percentage is high, you may need to increase the available space.

### Increase available disk space

If you find that your application or service is running out of disk space,
you can increase the available storage.

To increase the space available for applications and services,
use the `disk` keys in your `{{< vendor/configfile "app" >}}` and `{{< vendor/configfile "services" >}}` files.
The sum of all `disk` keys can't exceed the available storage in your plan.

If you need more storage to fit the sum of all `disk` keys, increase your plan's storage limits.
This can only be done by people with the [manage plans permission](../administration/users.md#organization-permissions).

## No space left on device

During the `build` hook, you may see the following error:

```text
W: [Errno 28] No space left on device: ...
```

This is caused by the amount of disk provided to the build container before deployment.
Application images are restricted to 4&nbsp;GB during build, no matter how much writable disk has been set aside for the deployed application.

Some build tools (yarn/npm) store cache for different versions of their modules.
This can cause the build cache to grow over time beyond the maximum.
Try [clearing the build cache](../development/troubleshoot.md#clear-the-build-cache) and [triggering a redeploy](../development/troubleshoot.md#force-a-redeploy).

If for some reason your application absolutely requires more than 4&nbsp;GB during build,
you can open a support ticket to have this limit increased.
