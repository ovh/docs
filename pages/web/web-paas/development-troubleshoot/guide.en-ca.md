---
title: Troubleshoot development
slug: development-troubleshoot
section: Development
order: 5
---

**Last updated 7th January 2022**


## Common tools

### Force a redeploy

There are times where you might want to trigger a redeployment of your application,
such as to update environment access for a new developer or add custom TLS certificates.
A redeploy reuses your built app and services.

To trigger a redeploy, follow these steps:

> [!tabs]      
> In the console     
>> ``` false     
>> 
>> 
>> 1. In the management console, navigate to the environment you want to redeploy.
>> 1. Click **Redeploy**.
>> 
>> 
>> ```     
> Using the CLI     
>> ``` false     
>> 
>> 
>> Run the following command:
>> 
>> ```sh
>> webpaas redeploy
>> ```
>> 
>> ```     

The redeploy takes place after any scheduled activities (either *Running* or *Pending*).

> [!primary]  
> 
> Despite the name, redeployment doesn't rerun the `deploy` hook, only the `post_deploy` hook.
> Both your `build` and `deploy` hooks are tied to individual commits in code.
> They're reused until another commit is pushed to the environment.
> See [more about hooks](../configuration/app/hooks.md) and their reuse.
> 
> To rerun the `build` and `deploy` hooks, [manually trigger a build](../configuration/app/hooks.md#manually-trigger-builds).
> 
> 

### Clear the build cache

You may find that you need to clear the build cache,
such as when it's grown too big or, in rare circumstances, when it's corrupted.
It may get corrupted when code is downloaded from a third-party language service like Packagist or npm
while that service is experiencing issues.

To clear the build cache, run the following command:

```sh
webpaas project:clear-build-cache -p <PROJECT_ID>
```

The next build for each environment is likely to take longer as the cache rebuilds.

## HTTP responses 502 Bad Gateway or 503 Service Unavailable

If you see these errors when accessing your application,
it indicates your application is crashing or unavailable.

Typical causes and potential solutions include:

* Your `.platform.app.yaml` configuration has an error and a process isn't starting
  or requests can't be forwarded to it correctly.
  * Check your `web.commands.start` entry or your `passthru` configuration.
* The amount of traffic coming to your site exceeds the processing power of your application.
  * You may want to [check if bots are overwhelming your site](https://community.platform.sh/t/diagnosing-and-resolving-issues-with-excessive-bot-access/792).
  * Alternatively, you may need to [increase your plan size](../overview/pricing/_index.md).
* Certain code paths in your application are too slow and timing out.
  * Check your code is running smoothly.
  * Consider adding an [observability solution](../integrations/observability/_index.md) to get a better view of your application.
* A PHP process is crashing because of a segmentation fault.
  * See [how to deal with crashed processes](../languages/php/troubleshoot.md#php-process-crashed).
* A PHP process is killed by the kernel out-of-memory killer.
  * See [how to deal with killed processes](../languages/php/troubleshoot.md#php-process-is-killed).

## Large JSON file upload failing

When trying to upload a large JSON file to your API, you might see a 400 response code (`Malformed request`).

Web PaaS enforces a 10&nbsp;MB limit on files with the `application/json` `Content-Type` header.
To send large files, use the `multipart/form-data` header instead:

```bash
$ curl -XPOST 'https://example.com/graphql' --header 'Content-Type: multipart/form-data' -F file=large_file.json
```

## Permission error creating a database

If you try to use a user to create a database, you get an error saying `permission denied to create database`.
The database is created for you
and can be found in the `path` key of the `$PLATFORM_RELATIONSHIPS` [environment variable](./variables.md).

## Can't write to file system

If you attempt to write to disk outside a `build` hook, you may encounter a `read-only file system` error.
Except where you define it, the file system is all read-only, with code changes necessary through git.
This gives you benefits like repeatable deployments, consistent backups, and traceability.

You can write to disk a `build` hook to generate anything you need later.
Or you can declare writable [mounts](../configuration/app/app-reference.md#mounts#mounts), which are writable even during and after deploy.
They can be used for your data: file uploads, logs, and temporary files.

## Git push fails due to lack of disk space

You might see the following message when attempting to run `git push`:
`There is not enough free space to complete the push`

This usually indicates that large files are present in the repository (where they shouldn't be).
Make sure that the paths for files like media files, dependencies, and databases are set to be ignored in your `.gitignore` file.

If large files are already in the repository, the open-source tool [bfg-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
can assist in cleaning up the repository by purging older commits, removing unnecessary files, and more.

If none of these suggestions work, create a [support ticket](https://console.platform.sh/-/users/~/tickets/open).

## Stuck build or deployment

If you see a build or deployment running longer than expected, it may be one of the following cases:

* The build is blocked by a process in your `build` hook.
* The deployment is blocked by a long running process in your `deploy` hook.
* The deployment is blocked by a long running cron job in the environment.
* The deployment is blocked by a long running cron job in the parent environment.

To determine if your environment is being stuck in the build or the deployment,
look at the activities log available in the management console or by running `webpaas act`.

If the activity has the result `success`, the build has completed successfully and the system is trying to deploy.
If the result is still `running`, the build is stuck.

In most regions, stuck builds terminate after one hour.
In older regions (`us` and `eu`), create a [support ticket](https://console.platform.sh/-/users/~/tickets/open) to have the build killed.

When a _deployment_ is blocked, you should try the following:

1\. Connect to your environment using [SSH](./ssh/_index.md).

1\. Find any long-running cron jobs or deploy hooks on the environment by running `ps afx`.

1\. Kill any long running processes with `kill <PID>`.

  Replace `<PID>` with the process ID shown by `ps afx`.

If a `sync` of `activate` process is stuck, try the above on the parent environment.

## Slow or failing build or deployment

Builds can take long time or fail.
Most of the time, it's related to an application issue.
Here are a few tips that can help you find the exact cause.

### Check for errors in the logs

Invisible errors during the build and deploy phase can cause increased wait times, failed builds, and other problems. Investigate [each log](../development-logs#accessing-logs) and fix any errors you find.

### Build and deploy hooks

[`build` and `deploy` hooks](../configuration-app/hooks) can cause long build times.
If they run into issues, they can cause the build to fail or hang indefinitely.

`build` hooks can be tested in your local environment.
`deploy` hooks can be tested either locally
or by logging into the application over [SSH](./ssh/_index.md) and running them there.
Be careful not to test the scripts on production environments.

You can also test your hooks with these Linux commands to help debug issues:

```text
time $cmd # Print execution time
strace -T $cmd # Print a system call report
```

### Cron jobs

Containers can't be shutdown while long-running [cron jobs and scheduled tasks](../configuration/app/app-reference.md#crons) are active.
That means long-running cron jobs block a container from being shut down to make way for a new deploy.

Make sure your custom cron jobs run quickly and properly.
Cron jobs may invoke other services in unexpected ways, which can increase execution time.
