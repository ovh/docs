---
title: Comparison of hooks
slug: hooks-comparison
section: Hooks
---

**Last updated 31st August 2023**



## Objective  

The following table presents the main differences among the three available hooks:

| Hook name     | Failures stop build | Variables available | Services available | Timeout | Run on `worker` instances | Writable directories | Blocks requests | Runs on all redeploys\* |
| ------------- | ------------------- |-------------------- | ------------------ | ------- | ------------------------- | -------------------- | --------------- | --------------- |
| `build`       | Yes                 | Build variables     | No                 | 1 hour  | Yes                       | `$PLATFORM_APP_DIR`, `$PLATFORM_CACHE_DIR`, and `/tmp` | No  | No  |
| `deploy`      | No                  | Runtime variables   | Yes                | None    | No                        | [Mounts](../app-reference.md#mounts)                   | Yes | No  |
| `post_deploy` | No                  | Runtime variables   | Yes                | None    | No                        | [Mounts](../app-reference.md#mounts)                   | No  | Yes |

\* All of the hooks run with changes to the code or environment.
This column indicates which hooks run on a redeploy without any code changes.

## Build hook

The `build` hook is run after any [build flavor](../app-reference.md#build).
During this hook, no services (such as a database) or any persistent file mounts are available
as the application hasn't yet been deployed.

The `build` hook can only use [environment variables](../../development/variables/use-variables.md#use-provided-variables)
that are available at build time.

During the `build` hook, there are three writeable directories:

- `$PLATFORM_APP_DIR`:

  This is where your code is checked out and is the working directory when the `build` hook starts.
  The contents of this directory after the build hook is the application that gets deployed.
- `$PLATFORM_CACHE_DIR`:

  This directory persists between builds, but isn't deployed as part of your application.
  It's a good place for temporary build artifacts that can be reused between builds.
  It's shared by all builds on all branches.
- `/tmp`:

  The temp directory is also useful for writing files that aren't needed in the final application,
  but it's wiped between each build.
  Note that `$PLATFORM_CACHE_DIR` is mapped to `/tmp`
  and together they offer about 8GB of free space.

The only constraint on what can be downloaded during a `build` hook is the disk space available for builds.
This is _not_ the `disk` specified in your [app configuration](../app-reference.md#top-level-properties).
If you exceed this limit, you receive a `No space left on device` error.
See how to [troubleshoot this error](../troubleshoot-disks.md#no-space-left-on-device).

The `build` hook runs only when the app or its runtime (variables and such) have changed.
Redeploys with no changes trigger only the `post_deploy` hook.
If you need the `build` hook to run, [manually trigger a build](../../development/troubleshoot.md#manually-trigger-builds).

Each hook is executed as a single script, so they're considered to have failed only if the final command in them fails.
To cause them to fail on the first failed command, add `set -e` to the beginning of the hook.
If a `build` hook fails for any reason, the build is aborted and the deploy doesn't happen.
Note that this only works for `build` hooks.
If other hooks fail, the deploy still happens.

### Timeout

Build hooks automatically time out if they run for 1 hour.
So if you accidentally add an unbroken loop, it gets cut off and you can continue with other activities.

## Deploy hook

The `deploy` hook is run after the app container has been started but before it has started accepting requests.
Note that the deploy hook only runs on [`web` instances](../app-reference.md#web),
not [`worker` instances](../app-reference.md#workers).

You can access other services at this stage (such as MySQL, Solr, Redis).
The disk where the application lives is read-only at this point.

This hook should be used when something needs to run once for all instances of an app when new code is deployed.
It isn't run when a host is restarted (such as during region maintenance),
so anything that needs to run each time an app starts (regardless of whether there's new code)
should go in the `start` key in [your `web` configuration](../app-reference.md#web-commands).
For example, clearing the cache for [ephemeral Redis](../../add-services/redis.md#ephemeral-redis).

Be aware: The deploy hook blocks the site accepting new requests.
If your `deploy` hook is only a few seconds,
incoming requests in that time are paused and continue when the hook is finished.
So it effectively appears as if the site just took a few extra seconds to respond.
If the hook takes too long, requests can't be held and appear as dropped connections.
Only run tasks in your deploy hook that have to be run exclusively,
such as database schema updates or some types of cache clear (those where the code must match what's on the disk).
A task that can safely run concurrently with new incoming requests should be run as a `post_deploy` hook instead.

After a Git push, in addition to the log shown in the activity log,
the execution of the `deploy` hook is logged in the [deploy log](../../increase-observability/logs/access-logs.md#container-logs).
For example:

```bash
[2022-03-01 08:27:25.495579] Launching command 'bash export-config.sh'.

🔥 Successfully cleared configuration
🚀 Added new configuration details
```

Your `deploy` hook is tied to commits in the same way as your builds.
Once a commit has been pushed and a new build image has been created,
the result of both the `build` and `deploy` hooks are reused until there is a new git commit.
Redeploys with no changes trigger only the `post_deploy` hook.
If you need the `deploy` hook to run, [manually trigger a build](../../development/troubleshoot.md#manually-trigger-builds).

## Post-deploy hook

The `post_deploy` hook functions exactly the same as the `deploy` hook,
but after the container is accepting connections.
It runs concurrently with normal incoming traffic.
That makes it well suited to any updates that don't require exclusive database access.

What's "safe" to run in a `post_deploy` hook vs. in a `deploy` hook varies by the application.
Often times content imports, some types of cache warmups, and other such tasks are good candidates for a `post_deploy` hook.

In addition to the activity log, the `post_deploy` hook logs to the [post-deploy log](../../increase-observability/logs/access-logs.md#container-logs).

The `post_deploy` hook is the only hook that runs during a redeploy.
