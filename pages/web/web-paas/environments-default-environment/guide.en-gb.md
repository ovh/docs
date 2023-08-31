---
title: Rename the default environment
slug: environments-default-environment
section: Environments
---

**Last updated 31st August 2023**



## Objective  

You can set the name of your default/production environment when creating a project.
To change it after project creation, follow the steps below.
For consistency, the steps are all given using the [CLI](../administration/cli/_index.md).

The examples below are based off of changing the default environment from `old` to `main`.
Replace these names with what suits your situation.

If your site is already live,
remember that deactivating an environment is a destructive operation that can result in data loss.
To minimize potential issues, take the following steps:

- Switch the default environment during non-peak hours.

- Keep your data by taking a [backup of the `old` environment](../environments/backup.md)

- Reduce your DNS time-to-live (TTL) to a minimum.


## Requirements

If you have a domain set for your default environment, remove it before changing the default branch.
Otherwise you get an error that `default domain must be a valid project domain`.

To change the default branch, you need to be an [admin for the project](../administration/users.md)

## Note on source integrations

The following steps depend of whether your project has a [source integration](../integrations/source/_index.md).

If it doesn't, {{< vendor/name >}} is your primary remote repository for the project.
If it does, GitHub, GitLab, or BitBucket hosts your primary remote repository for the project.

## 1. Create a `main` environment

> [!tabs]      

## 2. Copy settings

If you have variables or other settings specific to your default environment, add those to the `main` environment.

For example, you may have variables for your production environment set to not be inheritable
(such as if you set them with `--inheritable=false` through the CLI).
These variables aren't added automatically to child environments and so you need to add them to the `main` environment manually.

If you want the `main` environment to send emails, [turn on outgoing email](../development/email.md).

## 3. Make `main` a top-level branch

To have `main` be your default, it needs to not be a child of `old`.
Use the following command to remove its parent and make it a top-level branch:

```bash
webpaas environment:info -e main parent -
```

## 4. Make `main` the parent for other environments

> [!tabs]      

## 5. Deactivate the `old` branch

To change your default branch, you first need to deactivate the existing default branch to remove protections.
Deactivate the `old` environment without deleting it by running the following CLI command:

```bash
webpaas environment:delete --no-delete-branch old
```

## 6. Set `main` as the default branch

> [!tabs]      

## 7. Update DNS records

Whether or not you're using a CDN,
if your site is live you have probably added a {{< vendor/name >}} address somewhere when configuring a [custom domain](../domains/steps/_index.md).
If you have a CDN, it's with the CDN provider.
If you don't have a CDN, it's probably a `CNAME` record.

In either case, the setting probably has the old environment name as part of it.
Update the setting to use the new environment name.

Verify that the new URL is correct by comparing it to the result from this command:

```bash
webpaas environment:info edge_hostname
```

## 8. Optional: Delete the `old` environment

If you no longer want the `old` environment, such as to stop accidental use, delete it completely:

```bash
webpaas environment:delete --delete-branch old
```
