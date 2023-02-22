---
title: Network Storage
slug: network-storage
section: Services
updated: 2021-06-03
---

**Last updated 12th February 2021**



## Objective  

Web PaaS supports internal "storage as a service" to provide a file store that can be shared between different application containers.

The network storage service enables a new kind of `mount` that refers to a shared service rather than to a local directory.  Any application can use both `local` and/or `service` mounts, or neither.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  1.0 |  


(This is a reference to a version of our network storage implementation, not to a version of a 3rd party application.)

## Define the service

First, declare a new service in the `services.yaml` file like so:


```yaml   
files:
    type: network-storage:1.0
    disk: 256
```  


This example creates a service named `files` that is of type `network-storage`, and gives it 256 MB of storage total.

## Declare the mount

Second, add the following entry to your mounts list:


```yaml   
mounts:
    'my/files':
        source: service
        service: files
        source_path: files
```  


This block will declare a writeable mount on the application container at the path `my/files`, which will be provided by the `files` service defined above.  The `source_path` specifies the path within the network service that the mount points to.  It is often easiest to have it match the name of the mount point itself but that is not required.

Note that you do *not* need to add a relationship to point to the `files` service.  That is handled automatically by the system.

The application container can now read from and write to the `my/files` path just as if it were a local writeable mount.

> [!primary]  
> There is a small performance hit for using a network mount over a local mount.  In most cases it should not be noticeable.  However, high-volume sequential file creation (that is, creating a large number of small files in rapid succession) may see a more significant performance hit.  If that is something your application does regularly then a local mount will be more effective.
> 

## Multi-application usage

If your project contains more than one application (that is, multiple directories with their own `.platform.app.yaml` files), they can all use the same network mounts if desired.  If the `source_path` is the same in both `.platform.app.yaml` files then the files will be shared between both applications, even if the mount location is different.

It is also possible to have one application mount a `source_path` that is a subdirectory of another application's mount.  For example:

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

In this example, `app1` will have access to the entire `uploads` directory by writing to `web/uploads`.  `app2`, by contrast, will have two mounts that it can write to: `process` and `done`.  The `process` mount will refer to the same directory as the `web/uploads/incoming` directory does on `app1`, and the `done` mount will refer to the same directory as the `web/uploads/done` directory on `app1`.

## Worker instances

When defining a [Worker](../../configuration-app/workers) instance it is important to keep in mind what mount behavior is desired.  Unless the `mounts` block is defined within the `web` and `workers` sections separately, a top level `mounts` block will apply to both instances.  However, `local` mounts will be a separate storage area for each instance while `service` mounts will refer to the same file system.  For example:

```yaml
name: app

type: php:7.2

disk: 1024

mounts:
    'network_dir':
        source: service
        service: files
        source_path: our_stuff

    'local_dir':
        source: local
        source_path: my_stuff

web:
    locations:
        "/":
            root: "public"
            passthru: "/index.php"

workers:
    queue:
        commands:
            start: |
                php worker.php
```

In this case, both the web instance and the `queue` worker will have two mount points: `network_dir` and `local_dir`.

* The `local_dir` mount on each will be independent and not connected to each other at all, and they will *each* take 1024 MB of space.
* The `network_dir` mount on each will point to the same network storage space on the `files` service.  They will both be able to read and write to it simultaneously.  The amount of space it has available will depend on the `disk` key specified in `services.yaml`.

## How do I give my workers access to my main application's files?

The most common use case for `network-storage` is to allow a CMS-driven site to use a worker that has access to the same file mounts as the web-serving application.  For that case, all that is needed is to set the necessary file mounts as `service` mounts.

For example, the following `.platform.app.yaml` file (fragment) will keep Drupal files directories shared between web and worker instances while keeping the Drush backup directory web-only (as it has no need to be shared).  (This assumes a service named `files` has already been defined in `services.yaml`.)


```yaml
name: 'app'
type: 'php:7.2'

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
        cmd: 'cd web ; drush core-cron'

# The worker defined here will also have the same 6 mounts;
# 2 of them will be shared with the web container,
# the other 4 will be local to the worker.
workers:
    queue:
        commands:
            start: |
                cd web && drush queue-run myqueue
```

## How can I migrate a local storage to a network storage?

There is no automated way of transferring data from one storage type to another.  However, the process is fundamentally "just" moving files around on disk, so it is reasonably straightforward.

Suppose you have this mount configuration:

```yaml
mounts:
    web/uploads:
        source: local
        source_path: uploads
```

And want to move that to a network storage mount.  The following approximate steps will do so with a minimum of service interruption.

1) Add a new `network-storage` service, named `files`, that has at least enough space for your existing files with some buffer.  You may need to increase your plan's disk size to accommodate it.

2) Add a new mount to the network storage service on a non-public directory:

```yaml
mounts:
    new-uploads:
        source: service
        service: files
        source_path: uploads
```

    (Remember the `source_path` can be the same since they're on different storage services.)

3) Deploy these changes.  Then use `rsync` to copy all files from the local mount to the network mount.  (Be careful of the trailing `/`.)

```bash
rsync -avz web/uploads/* new-uploads/
```

4) Reverse the mounts.  That is, point the `web/uploads` directory to the network mount instead:

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

    Commit and push that.  Test to make sure the network files are accessible.

5) Cleanup.  First, run another rsync just to make sure any files uploaded during the transition are not lost.  (Note the command is different here.)

```bash
rsync -avz old-uploads/* web/uploads/
```

    Once you're confident all the files are accounted for, delete the entire contents of `old-uploads`.  If you do not, the files will remain on disk but inaccessible, just eating up disk space needlessly.

    Once that's done you can remove the `old-uploads` mount and push again to finish the process.  You are also free to reduce the `disk` size in the `.platform.app.yaml` file if desired, but make sure to leave enough for any remaining local mounts.


