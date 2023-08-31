---
title: Migrating to {{< vendor/name >}}
slug: tutorials-migrating
section: Tutorials
order: 9
---

**Last updated 31st August 2023**



## Objective  

If you already have an app running somewhere else, you want to migrate it to {{< vendor/name >}} and deploy it.
To do so, follow these steps.

## Before you begin

You need:

- An app that works and is ready to be built

- Code in Git

- A {{< vendor/name >}} account -- if you don't already have one, [start a trial](https://auth.api.platform.sh/register?trial_type=general)

- Optional: the [{{< vendor/name >}} CLI](../administration/cli/_index.md)


## 1. Export from previous system

Start by exporting everything you might need from your current app.
This includes data in databases, files on a file system,
and for some apps, such as Drupal, configuration that you need to export from the system into files.

## 2. Create a project

> [!tabs]      

## 3. Add configuration

The exact configuration you want depends on your app.
You likely want to configure three areas:

- [The app itself](../create-apps/_index.md) -- this is the only required configuration

- [Services](../add-services/_index.md)

- [Routes](../define-routes/_index.md)


You can also take guidance from the [project templates](../development/templates.md),
which are starting points for various technology stacks with working configuration examples.

When you've added your configuration, make sure to commit it to Git.

## 4. Push your code

The way to push your code to {{< vendor/name >}} depends on
whether you're hosting your code with a third-party service using a [source integration](../integrations/source/_index.md).
If you aren't, your repository is hosted in {{< vendor/name >}}
and you can use the CLI or just Git itself.

> [!tabs]      

## 5. Import data

Once you have an environment, you can import the data you backed up in step 1.
The exact process may depend on the service you use.

For SQL databases, for example, you can use a version of this command:

```bash
webpaas sql < {{< variable "BACKUP_FILE_NAME" >}}
```

For any potential more details, see the [specific service](../add-services/_index.md).

## 6. Import files

Your app may include content files, meaning files that aren't intended to be part of your codebase so aren't in Git.
You can upload such files to [mounts you created](../create-apps/app-reference.md#mounts).
Upload to each mount separately.

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

Upload to each of directories above by running the following commands:

```bash
webpaas mount:upload --mount web/uploads --source ./uploads
webpaas mount:upload --mount private --source ./private
```

You can adjust these commands for your own case.
Or upload to your mounts using a different [SSH method](../development/file-transfer.md#transfer-files-using-an-ssh-client).

## Optional: Add variables

If your app requires environment variables to build properly, [add them to your environment](../development/variables/set-variables.md).

## What's next

Now that your app is ready to be deployed, you can do more:

- Upgrade from a Development plan.

- [Add a domain](../domains/steps/_index.md).

- Set up for [local development](../development/local/_index.md).

- Configure [health notifications](../integrations/notifications.md).

- For monitoring and profiling, [integrate Blackfire](../increase-observability/integrate-observability/blackfire.md).

