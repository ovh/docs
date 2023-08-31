---
title: Activity reference
slug: reference
section: Activity
---

**Last updated 31st August 2023**



## Objective  

Activities log changes to your project,
including when you deploy your app,
when you [push code](#push), and when a [cron job is run](#cron).

To automate your workflows, you can parse and react to the activity's JSON object through [activity scripts](../activity/_index.md).

## Activity schema

Every activity has a corresponding JSON object containing all information for that activity,
including timestamps, configuration, and sometimes logs.
In practice, you can ignore much of the JSON object's content.
The most commonly used values are documented in this reference.

The response differs depending on the activity and doesn't always include all fields.

### Example response

The following is a shortened example of a response for an [environment sync activity](../../other/glossary.md#sync).
You can also see [complete examples of responses](#examples).

``` json
{
  "id": "abcdefg123456",
  ...
  "created_at": "2022-12-16T14:28:17.890467+00:00",
  "updated_at": null,
  "type": "environment.synchronize",
  "parameters": {
    ...
  },
  "project": "abcdefgh1234567",
  "environments": [
    "feature"
  ],
  "state": "complete",
  "result": "success",
  "started_at": "2022-12-16T14:28:18.188888+00:00",
  "completed_at": "2022-12-16T14:31:48.809068+00:00",
  "completion_percent": 100,
  "cancelled_at": null,
  "timings": {
    "wait": 0,
    "build": 0.349,
    "deploy": 209.986,
    "execute": 210.508
  },
  "log": "Building application 'app' (runtime type: php:8.2, tree: 9851a01)\n  Reusing existing build for this tree ID\n\n...\nRedeploying environment test, as a clone of main\n  ...\n  Closing all services\n  Opening application app and its relationships\n  Executing deploy hook for application app\n ... Environment configuration\n    app (type: php:8.0, size: S, disk: 2048)\n\n  ...",
  "payload": {
    ...
  },
  "description": "<user data-id=\"abcdefghijk123456789\">Cloé Weber</user> synchronized <environment data-id=\"test\">test</environment>'s <strong>data</strong> from <environment data-id=\"main\">Main</environment>",
  "text": "Cloé Weber synchronized test's **data** from Main",
  "expires_at": "2023-12-16T14:28:17.890467+00:00"
}
```

### `id`

A unique `id` value to identify the activity itself.

### `*_at`

`created_at`, `started_at`, `updated_at`, `cancelled_at`, `completed_at`, and `expires_at` are all timestamps in UTC.
For when a given activity occurred, use `completed_at`.
You can use these properties to calculate the duration of the activity.
To calculate the timing for steps in the activity, see the [`timings` property](#timings).

### `parameters`

The `parameters` property includes detailed information about what triggered the activity,
such as the user, the impacted environment, the git commits, or the cron commands.
The response changes based on the activity.

### `project`

The ID of the project in which the activity took place.
Use this value to distinguish multiple projects sent the same URL.

Different from [`project` activities](#type).

### `type`

The type of the activity in one of the following categories:

- [Project](#project-activities)

- [Environment](#environment-activities)

- [Integration](#integration-activities)


#### `project` activities

Activities that happened on a given project.
The following table presents the possible activities:

| Name | Description |
|------|-------------|
| `project.modify.title` | The project title has changed. |
| `project.variable.create` | A new project variable has been created. The value is visible only if the variable is not [set as sensitive](../../development/variables/set-variables.md#variable-options). |
| `project.variable.delete` | A project variable has been deleted. |
| `project.variable.update` | A project variable has been modified. |

#### `environment` activities

Activities that happened on an environment.
The following table presents the possible activities:

| Name | Description |
|------|-------------|
| `environment.domain.create` | A new domain has been associated with the environment. |
| `environment.domain.delete` | A domain associated with the environment has been removed. |
| `environment.domain.update` | A domain associated with the environment has been updated, such as having its SSL certificate modified. |
| `environment.backup` |  A user triggered a [backup](../../environments/backup.md). |
| `environment.backup.delete` | A user deleted a [backup](../../environments/backup.md). |
| `environment.restore` | A user restored a [backup](../../environments/backup.md). |
| `environment.push` | A user pushed code to a branch, either existing or new. |
| `environment.branch` | A new branch has been created via the CLI, Console, or API. A branch created via Git shows up as `environment.push`. |
| `environment.activate` | The environment has been made [active](../../other/glossary.md#active-environment). |
| `environment.initialize` | The default branch of the project has just been initialized with its first commit. |
| `environment.deactivate` | An environment has been made [inactive](../../other/glossary.md#inactive-environment). |
| `environment.synchronize` | An environment has had its data and/or code replaced with the data and/or code from its parent environment. |
| `environment.merge` | An environment was merged through the CLI, Console, or API. A basic Git merge doesn't trigger this activity. |
| `environment.redeploy` | An environment was redeployed. |
| `environment.delete` | An environment's code was deleted through Git. |
| `environment.route.create` | A new route has been created through the API. Edits made using Git to the `{{< vendor/configfile "routes" >}}` file don't trigger this activity. |
| `environment.route.delete` | A route has been deleted through the API. Edits made using Git to the `{{< vendor/configfile "routes" >}}` file don't trigger this activity. |
| `environment.route.update` | A route has been modified through the API. Edits made using Git to the `{{< vendor/configfile "routes" >}}` file don't trigger this activity. |
| `environment.variable.create` | A new variable has been created. The value is visible only if the variable is not [set as sensitive](../../development/variables/set-variables.md#variable-options). |
| `environment.variable.delete` | A variable has been deleted. |
| `environment.variable.update` | A variable has been modified. |
| `environment.update.http_access` | HTTP access rules for an environment have been modified. |
| `environment.update.smtp` | Email sending has been enabled or disabled for an environment. |
| `environment.update.restrict_robots` | The option to [hide from search engines](../../environments/search-engine-visibility.html) has been enabled or disabled for an environment. |
| `environment.subscription.update` | The production environment has been resized because the plan has changed. The content of the environment hasn't changed. |
| `environment.cron` | A cron job has completed. |
| `environment.source-operation` | A source operation has completed. |
| `environment.certificate.renewal` | An environment's SSL certificate has been renewed. |

#### `integration` activities

Activities that relate to an integration.
The following table presents the possible activities:

| Name | Description |
|------|-------------|
| `integration.bitbucket.register_hooks` | An integration hook has been registered with Bitbucket Cloud. |
| `integration.bitbucket_server.register_hooks` | An integration hook has been registered with Bitbucket Server. |
| `integration.health.email` | A [health notification](../notifications.md) was sent by email. |
| `integration.health.pagerduty` | A [health notification](../notifications.md) was sent to PagerDuty. |
| `integration.health.slack` | A [health notification](../notifications.md) was sent to Slack. |
| `integration.webhook` | A webhook was triggered. |
| `integration.script` | An activity script has completed. |

### `environments`

An array listing the environments that were involved in the activity.
It's usually only a single value representing one environment.

### `state`

The current state of the activity.
Its value can be `pending`, `in_progress`, or `complete`.

### `completion_percent`

What percentage of the activity is complete.

### `result`

Whether or not the activity completed successfully.
If it did, the value is `success`.
Note that certain activities, such as deploy hooks,
can be marked as successful activities even if some commands failed.

### `timings`

The amount of time required by the activity.

It can include the following properties:

| Name | Description |
|------|-------------|
| `wait` | The delay if a command is set to wait before being executed. |
| `build` | The execution time for the build hook. |
| `deploy` | The execution time for the deploy hook. |
| `execute` | The execution time for your script or cron job. |

### `log`

A human-friendly record of what happened in the activity.
The log shouldn't be parsed for data as its structure isn't guaranteed.

### `description`

A short machine-readable description of the activity.

### `text`

A short human-readable description of the activity.

### `payload`

Contains settings and details related to the completed activity.
Its content varies based on the activity type.

| Name | Description |
|------|-------------|
| `payload.user` | The user that triggered the activity. For details on its properties, see the [`user` payload](#user-payload). |
| `payload.environment` | The environment affected by the activity. For details on its properties, see the [`environment` payload](#environment-payload). |
| `payload.commits` | A list of changes with their Git metadata. |
| `payload.commits_count` | The number of Git commits.  |
| `payload.deployment` | Information about the deployed environment. For details on its properties, see the [`deployment` payload](#deployment-payload). |
| `payload.project` | Information about the project. For details on its properties, see the [`project` payload](#project-payload). |

#### `user` payload

Contains information about the {{< vendor/name >}} user that triggered the activity.

| Name | Description |
|------|-------------|
| `payload.user.created_at` | The date the user was created. |
| `payload.user.display_name` | The user's name in a human-friendly format. |
| `payload.user.id` | The user's ID. |
| `payload.user.updated_at` | The date the user was last updated. |

#### `environment` payload

Contains information about the environment associated with the activity,
including its settings, state, and deployment.
The following table presents the most notable properties of the environment:

| Name | Description |
|------|-------------|
| `payload.environment.name` | The environment name. |
| `payload.environment.type` | The [environment type](../../administration/users.md#environment-type-roles). |
| `payload.environment.head_commit` | The ID of the environment's latest Git commit. |
| `payload.environment.edge_hostname` | The URL you should target when setting up a [custom domain](../../domains/steps/_index.md). |

Different from [`environment` activities](#type).

#### `project` payload

Contains information about the project associated with the activity,
including plan details, timezone, and region.
The following table presents the most notable properties of the project:

| Name | Description |
|------|-------------|
| `payload.project.timezone` | Your project's [timezone](../../projects/change-project-timezone.md). |
| `payload.project.region` | Your project's [region](../../development/regions.md#regions). |
| `payload.project.title` | Your project's name. |
| `payload.project.subscription` | All of the details about your project's [plan](../../administration/pricing/_index.md). |

Different from [`project` activities](#type).

#### `deployment` payload

Contains information about the deployed environment, if one is associated with the activity.
The following table presents the most notable properties of the deployment:

| Name | Description |
|------|-------------|
| `payload.deployment.routes` | All the URLs connected to the environment. The list includes redirects. To exclude redirects, find objects whose `type` is `upstream`. |
| `payload.deployment.services` | All the services on your environment. |
| `payload.deployment.variables` | All the [variables for the environment](../../development/variables/_index.md).  |

The `payload.deployment` property includes the configuration extracted from the following sources:

- Your [app configuration](../../create-apps/_index.md)

- Your [routes](../../define-routes/_index.md)

- Your [services](../../add-services/_index.md)


## Maximum activities and parallelism

Project activities are distributed across separate queues,
which enables *two* simultaneous activities to occur in parallel across your environments.
For a given environment, only one activity can run at a time.
Those queues include the following types of activities:

| Name | Description |
|------|-------------|
| `default` | The most common activities on repositories (pushes, merges) and environments (syncs, redeployments). |
| `integrations` | Source and webhook integration activities. |
| `backup` | Backup activities. |
| `cron` | Cron activities. |

Production activities are prioritized across all queues.
When an activity for the production environment is triggered, it's placed at the top of the queue.
This makes it unlikely that activities on non-production environments block activities for the production environment for long,
though there may be a temporary wait.

## Examples

The response is often usually long, so the following examples are shortened using ellipses.
Remember that the response differs depending on the activity and not all fields are always available.

To test responses, [set up a webhook](./webhooks.md#setup).

### Cron

When a cron job is triggered, the activity contains all the [job's information](../../create-apps/app-reference.md#crons).
The following example response was triggered by a setting
where the cron is scheduled to run every five minutes (`5 * * * *`)
with the command `sleep 60 && echo sleep-60-finished && date` and times out after 86,400 seconds.

To get details about the configured cron job, see the `parameters` property:

``` json
...
  "parameters": {
    "user": "admin",
    "cluster": "abcdefgh1234567-main-abcd123",
    "environment": "main",
    "application": "app",
    "cron": "saybye",
    "spec": {
      "spec": "5 * * * *",
      "commands": {
        "start": "sleep 60 && echo sleep-60-finished && date",
        "stop": null
      },
      "shutdown_timeout": null,
      "timeout": 86400
    }
...
```

The following example shows the full activity response to a cron job:

``` json
{
  "id": "ypalrypnezbye",
  "_links": {
    "self": {
      "href": "https://eu-3.platform.sh/api/projects/abcdefgh1234567/activities/ypalrypnezbye"
    },
    "log": {
      "href": "/api/projects/abcdefgh1234567/activities/ypalrypnezbye/log"
    }
  },
  "created_at": "2022-12-13T16:06:08.081312+00:00",
  "updated_at": null,
  "type": "environment.cron",
  "parameters": {
    "user": "admin",
    "cluster": "abcdefgh1234567-main-abcd123",
    "environment": "main",
    "application": "app",
    "cron": "saybye",
    "spec": {
      "spec": "5 * * * *",
      "commands": {
        "start": "sleep 60 && echo sleep-60-finished && date",
        "stop": null
      },
      "shutdown_timeout": null,
      "timeout": 86400
    }
  },
  "project": "abcdefgh1234567",
  "environments": [
    "main"
  ],
  "state": "complete",
  "result": "success",
  "started_at": "2022-12-13T16:06:08.258090+00:00",
  "completed_at": "2022-12-13T16:07:09.658339+00:00",
  "completion_percent": 100,
  "cancelled_at": null,
  "timings": {
    "wait": 0,
    "execute": 61.244
  },
  "log": "hello world\nTue Dec 13 16:07:09 UTC 2022",
  "payload": {
    "user": {
      "id": "admin",
      "created_at": "2022-12-13T16:06:08.066085+00:00",
      "updated_at": null,
      "display_name": "{{< vendor/name >}} Bot"
    },
    "project": {
      "id": "abcdefgh1234567",
      "created_at": "2022-03-22T15:47:28.739099+00:00",
      "updated_at": "2022-12-01T09:42:19.860188+00:00",
      "attributes": {},
      "title": "php-test",
      "description": "",
      "owner": "c9926428-44dc-4b10-be03-a26dd43b44c1",
      "namespace": "platformsh",
      "organization": "01FF4NBNVMMDWP1NVK0G4EGJW0",
      "default_branch": "main",
      "status": {
        "code": "provisioned",
        "message": "ok"
      },
      "timezone": "Europe/Dublin",
      "region": "eu-3.platform.sh",
      "repository": {
        "url": "abcdefgh1234567@git.eu-3.platform.sh:abcdefgh1234567.git",
        "client_ssh_key": "ssh-rsa aaaaaaabbbbbbbcccccccddddddd abcdefgh1234567@platformsh"
      },
      "default_domain": null,
      "subscription": {
        "license_uri": "https://accounts.platform.sh/api/v1/licenses/2291467",
        "plan": "development",
        "environments": 3,
        "storage": 5120,
        "included_users": 1,
        "subscription_management_uri": "https://console.platform.sh/-/users/abcd12345/billing/plan/12345678",
        "restricted": false,
        "suspended": false,
        "user_licenses": 1
      }
    },
    "environment": {
      "id": "main",
      "created_at": "2022-03-22T15:47:43.750880+00:00",
      "updated_at": "2022-11-29T16:16:37.085719+00:00",
      "name": "main",
      "machine_name": "main-abcd123",
      "title": "Main",
      "attributes": {},
      "type": "production",
      "parent": null,
      "default_domain": null,
      "clone_parent_on_create": true,
      "deployment_target": "local",
      "is_pr": false,
      "status": "active",
      "enable_smtp": true,
      "restrict_robots": true,
      "edge_hostname": "main-abcd123-abcdefgh1234567.eu-3.platformsh.site",
      "deployment_state": {
        "last_deployment_successful": true,
        "last_deployment_at": "2022-11-29T16:16:37.085609+00:00",
        "crons": {
          "enabled": true,
          "status": "running"
        }
      },
      "resources_overrides": {},
      "last_active_at": "2022-12-13T15:07:10.862854+00:00",
      "last_backup_at": null,
      "project": "abcdefgh1234567",
      "is_main": true,
      "is_dirty": false,
      "has_code": true,
      "head_commit": "6aac318907b50252976c47e4e62ed95d438af0ea",
      "merge_info": {
        "commits_ahead": 0,
        "commits_behind": 0,
        "parent_ref": null
      },
      "has_deployment": true
    },
    "cron": "saybye"
  },
  "description": "<user data-id=\"admin\">{{< vendor/name >}} Bot</user> ran cron <strong>saybye</strong>",
  "text": "{{< vendor/name >}} Bot ran cron **saybye**",
  "expires_at": "2023-01-12T16:06:08.081293+00:00"
}
```

### Push

A push activity contains several properties.
The `commits` property contains everything related to the Git push that triggered the activity:

``` json
...
    "commits": [
      {
        "sha": "2bab04e050279ac078d5d34016f5dd9c466e948d",
        "author": {
          "email": "cloeweber@example.com",
          "name": "Cloé Weber",
          "date": 1671032461
        },
        "parents": [
          "6aac318907b50252976c47e4e62ed95d438af0ea"
        ],
        "message": "Add cron"
      }
    ],
...
```

The `environment` property contains the settings for the environment that was pushed to:

``` json
...
    "environment": {
      "id": "main",
      "created_at": "2022-03-22T15:47:43.750880+00:00",
      "updated_at": "2022-11-29T16:16:37.085719+00:00",
      "name": "main",
      "machine_name": "main-abcd123",
      "title": "Main",
      "attributes": {},
      "type": "production",
      "parent": null,
      "default_domain": null,
      "clone_parent_on_create": true,
      "deployment_target": "local",
      "is_pr": false,
      "status": "active",
      "enable_smtp": true,
      "restrict_robots": true,
      "edge_hostname": "main-abcd123-abcdefgh1234567.eu-3.platformsh.site",
      "deployment_state": {
        "last_deployment_successful": true,
        "last_deployment_at": "2022-11-29T16:16:37.085609+00:00",
        "crons": {
          "enabled": true,
          "status": "sleeping"
        }
      },
      "resources_overrides": {},
      "last_active_at": "2022-12-13T16:07:09.788910+00:00",
      "last_backup_at": null,
      "project": "abcdefgh1234567",
      "is_main": true,
      "is_dirty": false,
      "has_code": true,
      "head_commit": "6aac318907b50252976c47e4e62ed95d438af0ea",
      "merge_info": {
        "commits_ahead": 0,
        "commits_behind": 0,
        "parent_ref": null
      },
      "has_deployment": true
    },
...
```

The `deployment` property contains the settings for the deployment,
including the [image type](../../create-apps/app-reference.md#types) and
[resource allocation](../../create-apps/app-reference.md#sizes).

The following example shows a shortened excerpt of the `deployment` property:

``` json
...
 "deployment": {
      "id": "current",
      "created_at": "2022-03-22T15:48:05.396979+00:00",
      "updated_at": "2022-12-14T15:41:57.264813+00:00",
      "cluster_name": "abcdefgh1234567-main-abcd123",
      "project_info": {
          "deployment": {
      "id": "current",
      "created_at": "2022-03-22T15:48:05.396979+00:00",
      "updated_at": "2022-12-14T15:41:57.264813+00:00",
      "cluster_name": "abcdefgh1234567-main-abcd123",
      "project_info": {
        "name": "abcdefgh1234567",
        "settings": {
          "initialize": {
            "values": {
              "initialize": true,
              "start": false,
              "base": {
                "files": [],
                "profile": "PHP",
                "config": null,
                "repository": "https://github.com/platformsh-templates/php.git@master",
                "title": "PHP"
              }
            }
          },
          ...
          "application_config_file": "{{< vendor/configfile "app" >}}",
          "project_config_dir": ".platform",
          ...
          "development_service_size": "S",
          "development_application_size": "S",
          "enable_certificate_provisioning": true,
          "certificate_style": "ecdsa",
          "certificate_renewal_activity": true,
          ...
          "cron_minimum_interval": 5,
          "cron_maximum_jitter": 20,
          "concurrency_limits": {
            "internal": null,
            "integration": 4,
            "backup": 2,
            "cron": 10,
            "default": 2
          },
          ...
          "build_resources": {
            "cpu": 1,
            "memory": 2048
          },
          ...
          "max_allowed_routes": 50000,
          "max_allowed_redirects_paths": 50000,
          "enable_incremental_backups": true,
          ...
        }
      },
...
```

The following example shows the full activity response to a Git push:

``` json
{
  "id": "a1kz6ffxui7em",
  "_links": {
    "self": {
      "href": "https://eu-3.platform.sh/api/projects/abcdefgh1234567/activities/a1kz6ffxui7em"
    },
    "log": {
      "href": "/api/projects/abcdefgh1234567/activities/a1kz6ffxui7em/log"
    }
  },
  "created_at": "2022-12-14T15:41:05.821145+00:00",
  "updated_at": null,
  "type": "environment.push",
  "parameters": {
    "user": "c9926428-44dc-4b10-be03-a26dd43b44c1",
    "environment": "main",
    "old_commit": "6aac318907b50252976c47e4e62ed95d438af0ea",
    "new_commit": "2bab04e050279ac078d5d34016f5dd9c466e948d"
  },
  "project": "abcdefgh1234567",
  "environments": [
    "main"
  ],
  "state": "complete",
  "result": "success",
  "started_at": "2022-12-14T15:41:05.969872+00:00",
  "completed_at": "2022-12-14T15:41:57.635442+00:00",
  "completion_percent": 100,
  "cancelled_at": null,
  "timings": {
    "wait": 0,
    "parse_commits": 0.63,
    "build": 0.506,
    "deploy": 49.954,
    "execute": 51.516
  },
  "log": "Found 1 new commit\n\nBuilding application 'app' (runtime type: php:8.0, tree: 9851a01)\n  Reusing existing build for this tree ID\n\nProvisioning certificates\n  Certificates\n  - certificate 5093946: expiring on 2023-02-23 11:09:20+00:00, covering {,www}.main-abcd123-abcdefgh1234567.eu-3.platformsh.site\n\n\nRedeploying environment main\n  Preparing deployment\n  Closing service app\n  Opening application app and its relationships\n  Executing deploy hook for application app\n    hello world\n\n  Opening environment\n  Environment configuration\n    app (type: php:8.0, size: S, disk: 2048)\n\n  Environment routes\n    http://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/ redirects to https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/\n    http://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/ redirects to https://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/\n    https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/ is served by application `app`\n    https://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/ redirects to https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/\n",
  "payload": {
    "user": {
      "id": "c9926428-44dc-4b10-be03-a26dd43b44c1",
      "created_at": "2022-12-14T15:40:16.891889+00:00",
      "updated_at": null,
      "display_name": "Cloé Weber"
    },
    "environment": {
      "id": "main",
      "created_at": "2022-03-22T15:47:43.750880+00:00",
      "updated_at": "2022-11-29T16:16:37.085719+00:00",
      "name": "main",
      "machine_name": "main-abcd123",
      "title": "Main",
      "attributes": {},
      "type": "production",
      "parent": null,
      "default_domain": null,
      "clone_parent_on_create": true,
      "deployment_target": "local",
      "is_pr": false,
      "status": "active",
      "enable_smtp": true,
      "restrict_robots": true,
      "edge_hostname": "main-abcd123-abcdefgh1234567.eu-3.platformsh.site",
      "deployment_state": {
        "last_deployment_successful": true,
        "last_deployment_at": "2022-11-29T16:16:37.085609+00:00",
        "crons": {
          "enabled": true,
          "status": "sleeping"
        }
      },
      "resources_overrides": {},
      "last_active_at": "2022-12-13T16:07:09.788910+00:00",
      "last_backup_at": null,
      "project": "abcdefgh1234567",
      "is_main": true,
      "is_dirty": false,
      "has_code": true,
      "head_commit": "6aac318907b50252976c47e4e62ed95d438af0ea",
      "merge_info": {
        "commits_ahead": 0,
        "commits_behind": 0,
        "parent_ref": null
      },
      "has_deployment": true
    },
    "commits": [
      {
        "sha": "2bab04e050279ac078d5d34016f5dd9c466e948d",
        "author": {
          "email": "cloeweber@example.com",
          "name": "Cloé Weber",
          "date": 1671032461
        },
        "parents": [
          "6aac318907b50252976c47e4e62ed95d438af0ea"
        ],
        "message": "Add cron"
      }
    ],
    "commits_count": 1,
    "deployment": {
      "id": "current",
      "created_at": "2022-03-22T15:48:05.396979+00:00",
      "updated_at": "2022-12-14T15:41:57.264813+00:00",
      "cluster_name": "abcdefgh1234567-main-abcd123",
      "project_info": {
        "name": "abcdefgh1234567",
        "settings": {
          "initialize": {
            "values": {
              "initialize": true,
              "start": false,
              "base": {
                "files": [],
                "profile": "PHP",
                "config": null,
                "repository": "https://github.com/platformsh-templates/php.git@master",
                "title": "PHP"
              }
            }
          },
          "product_name": "{{< vendor/name >}}",
          "product_code": "platformsh",
          "variables_prefix": "PLATFORM_",
          "bot_email": "bot@platform.sh",
          "application_config_file": "{{< vendor/configfile "app" >}}",
          "project_config_dir": ".platform",
          "use_drupal_defaults": false,
          "use_legacy_subdomains": false,
          "development_service_size": "S",
          "development_application_size": "S",
          "enable_certificate_provisioning": true,
          "certificate_style": "ecdsa",
          "certificate_renewal_activity": true,
          "development_domain_template": null,
          "enable_state_api_deployments": true,
          "temporary_disk_size": null,
          "cron_minimum_interval": 5,
          "cron_maximum_jitter": 20,
          "concurrency_limits": {
            "internal": null,
            "integration": 4,
            "backup": 2,
            "cron": 10,
            "default": 2
          },
          "flexible_build_cache": false,
          "strict_configuration": true,
          "has_sleepy_crons": true,
          "crons_in_git": true,
          "custom_error_template": null,
          "app_error_page_template": null,
          "environment_name_strategy": "name-and-hash",
          "data_retention": null,
          "enable_codesource_integration_push": true,
          "enforce_mfa": false,
          "systemd": true,
          "router_gen2": false,
          "chorus": {
            "enabled": true,
            "exposed": true
          },
          "build_resources": {
            "cpu": 1,
            "memory": 2048
          },
          "outbound_restrictions_default_policy": "allow",
          "self_upgrade": true,
          "additional_hosts": {},
          "max_allowed_routes": 50000,
          "max_allowed_redirects_paths": 50000,
          "enable_incremental_backups": true,
          "sizing_api_enabled": false,
          "enable_cache_grace_period": true,
          "enable_zero_downtime_deployments": false,
          "enable_admin_agent": true,
          "certifier_url": "https://ssh.api.platform.sh",
          "centralized_permissions": false,
          "glue_server_max_request_size": 10
        }
      },
      "environment_info": {
        "name": "main",
        "is_main": true,
        "is_production": false,
        "reference": "refs/heads/main",
        "machine_name": "main-abcd123",
        "environment_type": "production"
      },
      "deployment_target": "local",
      "vpn": null,
      "http_access": {
        "is_enabled": true,
        "addresses": [],
        "basic_auth": {}
      },
      "enable_smtp": true,
      "restrict_robots": true,
      "variables": [
        {
          "name": "php:memory_limit",
          "value": "512M",
          "is_sensitive": false
        }
      ],
      "access": [
        {
          "entity_id": "c9926428-44dc-4b10-be03-a26dd43b44c1",
          "role": "admin"
        }
      ],
      "subscription": {
        "license_uri": "https://accounts.platform.sh/api/v1/licenses/12345678",
        "plan": "development",
        "environments": 3,
        "storage": 5120,
        "included_users": 1,
        "subscription_management_uri": "https://console.platform.sh/-/users/abcd12345/billing/plan/12345678",
        "restricted": false,
        "suspended": false,
        "user_licenses": 1
      },
      "services": {},
      "routes": {
        "https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/": {
          "primary": true,
          "id": null,
          "production_url": "https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "attributes": {},
          "type": "upstream",
          "tls": {
            "strict_transport_security": {
              "enabled": null,
              "include_subdomains": null,
              "preload": null
            },
            "min_version": null,
            "client_authentication": null,
            "client_certificate_authorities": []
          },
          "original_url": "https://{default}/",
          "restrict_robots": true,
          "cache": {
            "enabled": true,
            "default_ttl": 0,
            "cookies": [
              "*"
            ],
            "headers": [
              "Accept",
              "Accept-Language"
            ]
          },
          "ssi": {
            "enabled": false
          },
          "upstream": "app:http",
          "redirects": {
            "expires": "-1s",
            "paths": {}
          }
        },
        "https://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/": {
          "primary": false,
          "id": null,
          "production_url": "https://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "attributes": {},
          "type": "redirect",
          "tls": {
            "strict_transport_security": {
              "enabled": null,
              "include_subdomains": null,
              "preload": null
            },
            "min_version": null,
            "client_authentication": null,
            "client_certificate_authorities": []
          },
          "original_url": "https://www.{default}/",
          "restrict_robots": true,
          "to": "https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "redirects": {
            "expires": "-1s",
            "paths": {}
          }
        },
        "http://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/": {
          "primary": false,
          "id": null,
          "production_url": "http://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "attributes": {},
          "type": "redirect",
          "tls": {
            "strict_transport_security": {
              "enabled": null,
              "include_subdomains": null,
              "preload": null
            },
            "min_version": null,
            "client_authentication": null,
            "client_certificate_authorities": []
          },
          "original_url": "http://{default}/",
          "restrict_robots": true,
          "to": "https://main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "redirects": {
            "expires": "-1s",
            "paths": {}
          }
        },
        "http://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/": {
          "primary": false,
          "id": null,
          "production_url": "http://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "attributes": {},
          "type": "redirect",
          "tls": {
            "strict_transport_security": {
              "enabled": null,
              "include_subdomains": null,
              "preload": null
            },
            "min_version": null,
            "client_authentication": null,
            "client_certificate_authorities": []
          },
          "original_url": "http://www.{default}/",
          "restrict_robots": true,
          "to": "https://www.main-abcd123-abcdefgh1234567.eu-3.platformsh.site/",
          "redirects": {
            "expires": "-1s",
            "paths": {}
          }
        }
      },
      "webapps": {
        "app": {
          "resources": null,
          "size": "AUTO",
          "disk": 2048,
          "access": {
            "ssh": "contributor"
          },
          "relationships": {},
          "additional_hosts": {},
          "mounts": {
            "/web/uploads": {
              "source": "local",
              "source_path": "uploads"
            },
            "/private": {
              "source": "local",
              "source_path": "private"
            }
          },
          "timezone": null,
          "variables": {},
          "firewall": null,
          "initial_size": null,
          "container_profile": null,
          "instance_count": null,
          "name": "app",
          "type": "php:8.0",
          "runtime": {},
          "preflight": {
            "enabled": true,
            "ignored_rules": []
          },
          "tree_id": "9851a01081f3c2f943f75f62c38b67f8bc0ec15c",
          "slug_id": "abcdefgh1234567-app-9851a01081f3c2f943f75f62c38b67f8bc0ec15c-73985064e66fd2299f4b83931cff46891249a964",
          "app_dir": "/app",
          "web": {
            "locations": {
              "/": {
                "root": "web",
                "expires": "-1s",
                "passthru": "/index.php",
                "scripts": true,
                "allow": true,
                "headers": {},
                "rules": {}
              }
            },
            "move_to_root": false
          },
          "hooks": {
            "build": "set -e\n",
            "deploy": "set -e\n",
            "post_deploy": null
          },
          "crons": {
            "saybye": {
              "spec": "5 * * * *",
              "commands": {
                "start": "sleep 60 && echo sleep-60-finished && date",
                "stop": null
              },
              "shutdown_timeout": null,
              "timeout": 86400
            }
          }
        }
      },
      "workers": {},
      }
    }
  },
  "description": "<user data-id=\"c9926428-44dc-4b10-be03-a26dd43b44c1\">Cloé Weber</user> pushed to <environment data-id=\"main\">Main</environment>",
  "text": "Cloé Weber pushed to Main",
  "expires_at": "2023-12-14T15:41:05.821145+00:00"
}
```
