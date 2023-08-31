---
title: Troubleshoot mounts
slug: create-apps-troubleshoot-mounts
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

{{% troubleshoot %}}

## Overlapping folders

If you have a mount with the same name as a directory you've committed to Git or you create such a directory during the build,
you get a message like the following:

```bash
W: The mount '/example' has a path that overlaps with a non-empty folder.
The content of the non-empty folder either comes from:
- your git repository (you may have accidentally committed files).

- or from the build hook.

Please be aware that this content isn't accessible at runtime.
```

This shows that the files in Git or from your build aren't available after the build.
The only files that are available are those in your mount.

To make the files available in the mount, move them away and then copy them into the mount:

1\. In the `build` hook, use `mv` to move the files to another location.


```bash
mv example tmp/example
```

2\. In the `deploy` hook, use `cp` to copy the files into the mount.


```bash
cp -r tmp/example example
```

To see the files without copying them, temporarily remove the mount from your app configuration.
Then SSH into your app and view the files.
You can then put the mount back in place.

## Mounted files not publicly accessible

If you've set up mounts to handle files like user uploads, you want to make sure the files are accessible.
Do so by managing their [location](./app-reference.md#locations)

This example defines two mounts, one named `private` and one `upload`:

```yaml {configFile="app"}
mounts:
    'private':
        source: local
        source_path: private
    'uploads':
        source: local
        source_path: uploads
```

With only this definition, their behavior is the same.
To make `uploads` accessible, define a location with different rules as in the following example:

```yaml {configFile="app"}
web:
    locations:
        '/':
            # Handle dynamic requests
            root: 'public'
            passthru: '/app.php'
        # Allow uploaded files to be served, but don't run scripts.
        '/uploads':
            root: 'uploads'
            expires: 300s
            scripts: false
            allow: true
```

## Mounts starting with a dot ignored

{{< vendor/name >}} ignores YAML keys that start with a dot.
This causes a mount like `.myhiddenfolder` to be ignored.
To mount a directory starting with a dot, put a `/` at the start of its definition:

```yaml
mounts:
    '/.myhiddenfolder':
        source: local
        source_path: 'myhiddenfolder'
```

## Disk space issues

If you are worried about how much disk your mounts are using, check the size with the following command:

```bash
webpaas mount:size
```

You see the total size and what's available for each directory:

```text
Checking disk usage for all mounts on abcdefg123456-main-abcd123--app@ssh.eu.platform.sh...
+-------------------------+-----------+---------+-----------+-----------+----------+
| Mount(s)                | Size(s)   | Disk    | Used      | Available | Capacity |
+-------------------------+-----------+---------+-----------+-----------+----------+
| private                 | 55.2 MiB  | 1.9 GiB | 301.5 MiB | 1.6 GiB   | 15.5%    |
| tmp                     | 8.3 GiB   | 8.9 GiB | 8.8 GiB   | 93.0 MiB  | 98.8%    |
| web/sites/default/files | 212.2 MiB | 9.6 GiB | 1.9 GiB   | 7.6 GiB   | 20.3%    |
+-------------------------+-----------+---------+-----------+-----------+----------+
```
