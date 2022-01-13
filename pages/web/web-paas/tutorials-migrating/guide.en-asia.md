---
title: Migrating to Web PaaS
slug: tutorials-migrating
section: Tutorials
order: 9
---

**Last updated 13th January 2022**


## Objective  

Moving an already-built site to Web PaaS is generally straightforward. For the most part, the only part that will vary from one framework to another is the details of the Web PaaS configuration files.

For more project-specific documentation,
see the [featured frameworks](../../frameworks) or [project templates](../development-templates).

## Preparation

First, assemble your Git repository as appropriate on your default branch.
Be sure to include the Web PaaS configuration files
as you can't push the repository to Web PaaS otherwise!

For some applications, such as Drupal,
you need to dump configuration to files before proceeding.
You also need to provide appropriate configuration
to read the credentials for your services at runtime
and integrate them into your application's configuration.
The details of that integration vary between systems.
Be sure to see the appropriate project templates for recommended configurations.

* [Go templates](../languages-go#project-templates)
* [Java templates](../languages-java#project-templates)
* [Node.js templates](../languages-nodejs#project-templates)
* [PHP templates](../languages-php#project-templates)
* [Python templates](../languages-python#project-templates)


In the management console, click **+ Create project** to create a new Web PaaS project.
When asked to select a template, pick **Create from scratch**.

## Push your code

When you create a new project,
you get a checklist of tasks to complete the project.
(If you closed it, click **Finish setup** to bring it back.)

Two of the steps are important to .pushing any code you have ready.

First is **Set Web PaaS remote** and includes a command similar to this:

```bash
webpaas project:set-remote uwjs5ezkzjpzw
```

This adds a Git remote for the Web PaaS repository named `webpaas`.
The name is significant as the Web PaaS CLI looks for either `webpaas` or `origin` to be the Web PaaS repository
and some commands may not function correctly otherwise.

The second is **Commit & push**, which includes a command to push code:

```bash
git push -u webpaas main
```

This pushes your repository's `main` branch to the Web PaaS `main` branch.
Projects default to having the `main` branch as the default branch.
You can change this when creating the project or [rename your default branch](../guides/general/default-branch.md) later.

When you push, a new environment is created using your code and the provided configuration files.
The system flags any errors with the configuration it can find.
If any are flagged, correct the error and try again.

## Import your database

You need to have a dump or backup of the database you wish to start from.
The process is essentially the same for each type of persistent data service.
See the [MySQL](../configuration-services/mysql), [PostgreSQL](../configuration-services/postgresql),
and [MongoDB](../configuration-services/mongodb) documentation as appropriate.

## Import your files

Content files (files that aren't intended as part of your code base so aren't in Git)
can be uploaded to your mounts using the Web PaaS CLI or by using `rsync`.
You need to upload each directory's files separately.
Suppose for instance you have the following file mounts defined:

```yaml
mounts:
    'web/uploads':
        source: local
        source_path: uploads
    'private':
        source: local
        source_path: private
```

While using the CLI and rsync are the most common solutions for uploading files to mounts,
you can also use SCP.

### Web PaaS CLI

The easiest way to import files to your project mounts is to use the Web PaaS CLI `mount:upload` command.
To upload to each of directories above, use the following commands.

```bash
webpaas mount:upload --mount web/uploads --source ./uploads
webpaas mount:upload --mount private --source ./private
```

### rsync

You can also use `rsync` to upload each directory.
The `webpaas ssh --pipe` command returns the SSH URL for the current environment
as an inline string that `rsync` can recognize.
To use a non-default environment, use the `-e` switch after `--pipe`.
Note that the trailing slash on the remote path means `rsync` copies just the files inside the specified directory,
not the directory itself.

```bash
rsync -az ./private `webpaas ssh --pipe`:/app/private/
rsync -az ./web/uploads `webpaas ssh --pipe`:/app/web/uploads
```

> [!primary]  
> 
> If you're running `rsync` on MacOS,
> you should add `--iconv=utf-8-mac,utf-8` to your `rsync` call.
> 
> 

For more details on how to adjust the upload process,
see the [`rsync` documentation](https://download.samba.org/pub/rsync/rsync.html).
