---
title: Network Storage
slug: add-services-network-storage
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} supports internal "storage as a service" to provide a file store that can be shared between different application containers.

The network storage service enables a new kind of [mount](../create-apps/app-reference.md#mounts)
that refers to a shared service rather than to a local directory.
Your apps can use any combination of `local` and `service` mounts.

> [!primary]  
> 
> Writing to network mounts is slightly slower than to local mounts.
> In most cases, you shouldn't notice it.
> It's more significant when you employ high-volume sequential file creation
> (create a large number of small files in rapid succession).
> If your app does this regularly, a local mount is more effective.
> 
> 

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 2.0 |

This service is the {{< vendor/name >}} network storage implementation, not to a version of a third-party application.

> [!primary]  
> 
> It isn't possible to upgrade or downgrade the network storage service version while keeping existing data in place.
> Changing the service version requires that the service be reinitialized.
> Any change to the service version results in existing data becoming inaccessible.
> 
> 

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 1.0 |

## Usage example

{{% endpoint-description type="network-storage" noApp=true /%}}

## Multi-application usage

If your project contains [multiple apps](../create-apps/multi-app/_index.md), they can all use the same network mounts.
If the `source_path` is the same in both `{{< vendor/configfile "app" >}}` files,
the files are shared between the two applications even if the mount location is different.

It's also possible to have one app mount a `source_path` that's a subdirectory of another application's mount.
For example:

`app1`:

```yaml
mounts:
    'web/uploads':
        source: service
        service: files
        source_path: uploads
```

`app2`:

```yaml
mounts:
    'process':
        source: service
        service: files
        source_path: uploads/incoming
    'done':
        source: service
        service: files
        source_path: uploads/done
```

In this example, `app1` has access to the entire `uploads` directory by writing to `web/uploads`.
`app2` has two mounts that it can write to: `process` and `done`.
The `process` mount refers to the same directory as the `web/uploads/incoming` directory does on `app1`,
and the `done` mount refers to the same directory as the `web/uploads/done` directory on `app1`.

## Worker instances

When defining a [worker](../create-apps/app-reference.md#workers) instance,
keep in mind what mount behavior you want.
If you don't define `mounts` separately within the `web` and `workers` sections,
the top-level `mounts` block applies to both instances.

`local` mounts are a separate storage area for each instance,
while `service` mounts refer to the same file system.

For example, you can define a network storage service:

```yaml {configFile="services"}
files:
    type: network-storage:2.0
    disk: 2048
```

You can then use this service to  define a `network_dir` network mount and a `local_dir` local mount,
to be used by a web instance and a `queue` worker instance:

```yaml {configFile="app"}
mounts:
    # Define a network storage mount that's available to both instances together
    'network_dir':
        source: service
        service: files
        source_path: our_stuff

    # Define a local mount that's available to each instance separately
    'local_dir':
        source: local
        source_path: my_stuff

# Define how much space is available to local mounts
disk: 512

# Define a web instance
web:
    locations:
        "/":
            root: "public"
            passthru: true
            index: ['index.html']

# Define a worker instance from the same code but with a different start
workers:
    queue:
        commands:
            start: ./start.sh
```

Both the web instance and the `queue` worker have two mount points:

* The `local_dir` mount on each is independent and not connected to each other at all
  and they *each* take 1024 MB of space.
* The `network_dir` mount on each points to the same network storage space on the `files` service.
  They can both read and write to it simultaneously.
  The amount of space it has available depends on the `disk` key specified in `{{< vendor/configfile "services" >}}`.

## How do I give my workers access to my main application's files?

The most common use case for `network-storage` is to allow a CMS-driven site to use a worker that has access to the same file mounts as the web-serving application.
For that case, all that's needed is to set the necessary file mounts as `service` mounts.

For example, the following `{{< vendor/configfile "app" >}}` file (fragment) keeps Drupal files directories shared between web and worker instances while keeping the Drush backup directory web-only (as it has no need to be shared).
(This assumes a service named `files` has already been defined in `{{< vendor/configfile "services" >}}`.)


```yaml
name: 'app'
type: 'php:8.1'

relationships:
    database: 'db:mysql'

hooks:
  # ...

web:
    locations:
        '/':
            # ...

disk: 1024

mounts:
    # The public and private files directories are
    # network mounts shared by web and workers.
    'web/sites/default/files':
        source: service
        service: files
        source_path: files
    'private':
        source: service
        service: files
        source_path: private
    # The backup, temp, and cache directories for
    # Drupal's CLI tools don't need to be shared.
    # It wouldn't hurt anything to make them network
    # shares, however.
    '/.drush':
        source: local
        source_path: drush
    'tmp':
        source: local
        source_path: tmp
    'drush-backups':
        source: local
        source_path: drush-backups
    '/.console':
        source: local
        source_path: console

# Crons run on the web container, so they have the
# same mounts as the web container.
crons:
    drupal:
        spec: '*/20 * * * *'
        commands:
            start: 'cd web ; drush core-cron'

# The worker defined here also has the same 6 mounts;
# 2 of them are shared with the web container,
# the other 4 are local to the worker.
workers:
    queue:
        commands:
            start: |
                cd web && drush queue-run myqueue
```

## How can I migrate a local storage to a network storage?

There is no automated way of transferring data from one storage type to another.
However, the process is fundamentally "just" moving files around on disk, so it's reasonably straightforward.

Suppose you have this mount configuration:

```yaml
mounts:
    web/uploads:
        source: local
        source_path: uploads
```

And want to move that to a network storage mount.
The following approximate steps do so with a minimum of service interruption.

1\. Add a new `network-storage` service, named `files`,

   that has at least enough space for your existing files with some buffer.
   You may need to increase your plan's disk size to accommodate it.

2\. Add a new mount to the network storage service on a non-public directory:


```yaml
mounts:
    new-uploads:
        source: service
        service: files
        source_path: uploads
```

    (Remember the `source_path` can be the same since they're on different storage services.)

3\. Deploy these changes.

   Then use `rsync` to copy all files from the local mount to the network mount.
   (Be careful of the trailing `/`.)

```bash
rsync -avz web/uploads/* new-uploads/
```

4\. Reverse the mounts.

   Point the `web/uploads` directory to the network mount instead:

```yaml
mounts:
    web/uploads:
        source: service
        service: files
        source_path: uploads
    old-uploads:
        source: local
        source_path: uploads
```

    Commit and push that.
    Test to make sure the network files are accessible.

5\. Cleanup.

   First, run another rsync just to make sure any files uploaded during the transition aren't lost.
   (Note the command is different here.)

```bash
rsync -avz old-uploads/* web/uploads/
```

   Once you're confident all the files are accounted for, delete the entire contents of `old-uploads`.
   If you don't, the files remain on disk but inaccessible, just eating up disk space needlessly.

   Once that's done you can remove the `old-uploads` mount and push again to finish the process
   You are also free to reduce the `disk` size in the `{{< vendor/configfile "app" >}}` file if desired,
   but make sure to leave enough for any remaining local mounts.
