---
title: Migrating to Web PaaS
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Moving an already-built site to Web PaaS is generally straightforward.  For the most part, the only part that will vary from one framework to another is the details of the Web PaaS configuration files.



## Preparation

First, assemble your Git repository as appropriate, on your master branch.  Be sure to include the Web PaaS configuration files, as you will not be able to push the repository to Web PaaS otherwise!

For some applications, such as Drupal you will need to dump configuration to files before proceeding.  You will also need to provide appropriate configuration to read the credentials for your services at runtime and integrate them into your application's configuration.  The details of that integration will vary between systems.  Be sure to see the appropriate project templates for our recommended configuration.

* [Go Templates](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-go#project-templates)
* [Java Templates](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-java#project-templates)
* [Node.js Templates](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-nodejs#project-templates)
* [PHP Templates](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-php#project-templates)
* [Python Templates](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-python#project-templates)


In the management console, click `+ Add project` to create a new Web PaaS project. When asked to select a template pick "Create a blank project".

## Push your code

When creating a new project, the management console will provide two commands to copy and paste similar to the following:

```bash
git remote add webpaas nodzrdripcyh6@git.us.platform.sh:nodzrdripcyh6.git
git push -u webpaas master
```

The first will add a Git remote for the Web PaaS repository named `webpaas`.  The name is significant as the Web PaaS CLI will look for either `webpaas` or `origin` to be the Web PaaS repository, and some commands may not function correctly otherwise.  The second will push your repository's master branch to the Web PaaS master branch.  Note that a project must always start with a master branch, or deploys to any other environment will fail.

When you push, a new environment will be created using your code and the provided configuration files.  The system will flag any errors with the configuration if it can.  If so, correct the error and try again.

## Import your database

You will need to have a dump or backup of the database you wish to start from.  The process is essentially the same for each type of persistent data service.  See the [MySQL](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/mysql), [PostgreSQL](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/postgresql) documentation as appropriate.

## Import your files

Content files (that is, files that are not intended as part of your code base so are not in Git) can be uploaded to your mounts using the Web PaaS CLI or by using `rsync`. You will need to upload each directory's files separately.  Suppose for instance you have the following file mounts defined:

```yaml
mounts:
    'web/uploads':
        source: local
        source_path: uploads
    'private':
        source: local
        source_path: private
```

While using the CLI and rsync are the most common solutions for uploading files to mounts, you can also use SCP.

### Web PaaS CLI

The easiest way to import files to your project mounts is by using the Web PaaS CLI `mount:upload` command. To upload to each of directories above, we can use the following commands.

```bash
webpaas mount:upload --mount web/uploads --source ./uploads
webpaas mount:upload --mount private --source ./private
```

### rsync

You can also use `rsync` to upload each directory.  The `webpaas ssh --pipe` command will return the SSH URL for the current environment as an inline string that `rsync` can recognize. To use a non-default environment, use the `-e` switch after `--pipe`.  Note that the trailing slash on the remote path means `rsync` will copy just the files inside the specified directory, not the directory itself.

```bash
rsync -az ./private `webpaas ssh --pipe`:/app/private/
rsync -az ./web/uploads `webpaas ssh --pipe`:/app/web/uploads
```

> [!primary]  
> If you're running `rsync` on MacOS, you should add `--iconv=utf-8-mac,utf-8` to your `rsync` call.
> 

See the [`rsync` documentation](https://download.samba.org/pub/rsync/rsync.html) for more details on how to adjust the upload process.
