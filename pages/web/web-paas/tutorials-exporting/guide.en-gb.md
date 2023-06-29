---
title: Exporting data
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Web PaaS aims to be a great host, but we never want to lock you in to our service. Your code and your data belong to you, and you should always be able to download your site's data for local development, backup, or to "take your data elsewhere".

## Downloading code

Your application's code is maintained in Git.  Because Git is a distributed system it is trivial to download your entire code history with a simple `git clone` or `webpaas get` command.

## Downloading files

Your application runs on a read-only file system, so it cannot be edited.  That means there's nothing to download from most of it that isn't already in your Git repository.

The only files to download are from any writable file mounts you may have defined in your `.platform.app.yaml` file.  The easiest way to download those is using the `rsync` tool.  For instance, suppose you have a mounts section that defines one web-accessible directory and one non-web-accessible directory:

```yaml
mounts:
    'web/uploads':
        source: local
        source_path: uploads
    'private':
        source: local
        source_path: private
```
### Using the CLI

The CLI provides a useful `mount` command for accessing mount data.

```bash
webpaas mount:list
```

Downloading a mount is then as simple as running the following:

```bash
webpaas mount:download
```

### Using rsync
To use `rsync` to download each directory, we can use the following commands.  The `webpaas ssh --pipe` command will return the SSH URL for the current environment as an inline string that `rsync` can recognize. To use a non-default environment, use the `-e` switch after `--pipe`.  Note that the trailing slash on the remote path means `rsync` will copy just the files inside the specified directory, not the directory itself.

```bash
rsync -az `webpaas ssh --pipe`:/app/private/ ./private/
rsync -az `webpaas ssh --pipe`:/app/web/uploads ./uploads/
```


> [!primary]  
> If you're running `rsync` on MacOS, you should add `--iconv=utf-8,utf-8-mac` to your `rsync` call.
> 

See the [`rsync` documentation](https://download.samba.org/pub/rsync/rsync.html) for more details on how to adjust the download process.

## Download data from services

The mechanism for downloading from each service (such as your database) varies.  For services designed to hold non-persistent information (such as Redis or Solr) it's generally not necessary to download data as it can be rebuilt from the primary data store.

To download data from persistent services ([MySQL](/pages/web/web-paas/configuration-services/mysql), [PostgreSQL](/pages/web/web-paas/configuration-services/postgresql),   or [InfluxDB](/pages/web/web-paas/configuration-services/influxdb)), see each service's page for instructions.

## Get the environment variables

If your project uses some environment variable (tokens, ...) it can be helpful to backup them if you didn't store them separately.

As stated in the management console, several possibilities exist for the environment variables.

* Variables beginning with `env:` will be exposed as Unix environment variables
* Variables beginning with `php:` will be interpreted as `php.ini` directives.
* All other variables will be part of the environment `PLATFORM_VARIABLES` variable



You can access the content of the environment variable through the management console unless the `--sensitive true` flag was set.

In that case, you can run:
`webpaas ssh -p <project id> -e <environment>`
To access all the environment variables's values

and `webpaas ssh -p <project id> -e <environment> "echo \$PLATFORM_VARIABLES | base64 -d | jq"` to access the `PLATFORM_VARIABLES`'s values.

 
