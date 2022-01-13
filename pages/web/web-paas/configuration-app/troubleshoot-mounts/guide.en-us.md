---
title: Troubleshoot mounts
slug: troubleshoot-mounts
section: App
---

**Last updated 13th January 2022**



## Set up both public and private file uploads

The following example sets up two file mounts.
One is mounted at `/private` within the application container, the other at `/web/uploads`.
The two file mounts together have a limit of 1024 MB of storage.

```yaml
disk: 1024

mounts:
    'private':
        source: local
        source_path: private
    'web/uploads':
        source: local
        source_path: uploads
```

Then in the `web.locations` block, you'd specify that the `web/uploads` path is accessible.
For example, this fragment would specify the `/web` path as the root
but provide a more locked-down access to the `/web/uploads` path.

```yaml
web:
    locations:
        '/':
            # The public directory of the application relative to its root.
            root: 'web'
            # The front-controller script which determines where to send
            # non-static requests.
            passthru: '/app.php'
        # Allow uploaded files to be served, but do not run scripts.
        '/web/uploads':
            root: 'web/uploads'
            expires: 300s
            scripts: false
            allow: true
```

See the [web locations](../app-reference) documentation for more details.

## Mount a hidden folder

Web PaaS ignores YAML keys that start with a dot.
This causes a mount like `.myhiddenfolder` to be ignored.
If you want to mount a hidden folder, you have to prepend it with a `/`:

```yaml
mounts:
    '/.myhiddenfolder':
        source: local
        source_path: 'myhiddenfolder'
```

## Set up overlapping mount paths

While not recommended, it's possible to setup multiple mount points whose source paths overlap.
Consider the following example:

```yaml
mounts:
    'private':
        source: local
        source_path: stuff
    'secret':
        source: local
        source_path:  stuff/secret
```

In this configuration, there are two mount points as seen from the application: `~/private` and `~/secret`.
However, the `secret` mount points to a directory that's also under the mount point for `private`.
So the `secret` path and the `private/secret` path is the exact same directory.

Although this configuration doesn't cause any technical issues, it may be quite confusing so is generally not recommended.

## Check the size of mounts

You can use standard commands such as `df -ah` to find the total disk usage of mounts
(which are usually all on the same filesystem)
and `du -hs /path/to/dir` to check the size of individual directories.

The CLI provides a command that combines these checks:

```text
$ webpaas mount:size
Checking disk usage for all mounts of the application 'app'...
+-------------------------+-----------+---------+-----------+-----------+----------+
| Mount(s)                | Size(s)   | Disk    | Used      | Available | Capacity |
+-------------------------+-----------+---------+-----------+-----------+----------+
| private                 | 55.2 MiB  | 1.9 GiB | 301.5 MiB | 1.6 GiB   | 15.5%    |
| tmp                     | 34.1 MiB  |         |           |           |          |
| web/sites/default/files | 212.2 MiB |         |           |           |          |
+-------------------------+-----------+---------+-----------+-----------+----------+
```
