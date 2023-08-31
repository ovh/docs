---
title: External Integrations
slug: integrations-overview
section: Integrations
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

{{< vendor/name >}} supports native integrations with multiple services, first and foremost Git hosting services such as GitHub, GitLab, or Bitbucket.
You can continue to use those tools for your development workflow, and have {{< vendor/name >}} environments created automatically for your pull requests and branches.

You can also add native integrations with performance monitoring tools. {{< vendor/name >}} recommends [Blackfire](../increase-observability/integrate-observability//blackfire.md), which is part of the standard {{< vendor/name >}} Observability Suite.
Be aware that only a project administrator (someone with `admin` level access to the project) can add or remove integrations.
See [User administration](../administration-users) for more details.

## List active integrations

With the CLI, you can list all your active integrations using the following command:

```bash
webpaas integrations
```

You get output similar to the following:

```bash
+---------------+-------------+-------------------------------------------------------------------------------------+
| ID            | Type        | Summary                                                                             |
+---------------+-------------+-------------------------------------------------------------------------------------+
| abcdefghijklm | github      | Repository: platformsh/platformsh-docs                                              |
|               |             | Hook URL:                                                                           |
|               |             | https://eu-3.platform.sh/api/projects/123abcdefgh3i/integrations/abcdefghijklm/hook |
+---------------+-------------+-------------------------------------------------------------------------------------+
```

## Validate integrations

Once your integration has been configured, you can check that it's working as expected.
To do so, follow these steps:

1\. Run the `webpaas integration:validate` command.

2\. When prompted, select the integration you want to validate:

```bash
Enter a number to choose an integration:
  [0] 5aut2djgt6kdd (health.slack)
  [1] a6535j9qp4sl8 (github)
 > 1
```

   You get output similar to:

```bash
Validating the integration a6535j9qp4sl8 (type: github)...
The integration is valid.
```

## Debug integrations

When integrations run, they trigger "activities."  Activities are actions that happen on {{< vendor/name >}}, and they get logged.

Usually these are triggered nearly instantaneously on the webhook endpoint.
These activities may be delayed due to the external services having latency.

Those logs are available via the CLI.
In most cases they aren't necessary but may be useful for debugging an integration if it is misbehaving for some reason.

There are a handful of CLI commands available, all under the `integrations` section.

### List all activities

To list all the updates triggered by [activities](../integrations/activity/reference.md) on a given project and integration,
follow these steps:

1\. Run the `webpaas integration:activities` command.

2\. When prompted, select an integration.


```bash
Enter a number to choose an integration:
  [0] dxr45hfldrkoe (webhook)
  [1] n2ukd4p7qofg4 (health.email)
  [2] c4opi5tjv3yfd (github)
> 2
```

   You get output similar to the following:

```bash
Activities on the project {{< vendor/name >}} | Docs (6b2eocegfkwwg), integration c4opi5tjv3yfd (github):
+---------------+---------------------------+-------------------------------------------------------------+----------+---------+
| ID            | Created                   | Description                                                 | State    | Result  |
+---------------+---------------------------+-------------------------------------------------------------+----------+---------+
| 6456zmdtoykxa | 2020-04-14T16:38:09-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| wcwp34yjvydgk | 2020-04-14T16:35:22-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| w2bp3oa5xbfoe | 2020-04-14T16:33:13-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| uqqvdyxmcdmsa | 2020-04-14T16:31:45-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| 7x3wefhh4fwqc | 2020-04-14T16:30:36-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| a46aah3ga65gc | 2020-04-14T16:29:46-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| r7erid2jlixgi | 2020-04-14T16:24:50-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| ieufk3vvde5oc | 2020-04-14T16:24:49-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| bc7ghg36ty4ea | 2020-04-14T15:30:17-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
| 4qojtv7a6rk2w | 2020-04-14T15:27:26-05:00 | Fetching from https://github.com/ovh/docs | complete | success |
+---------------+---------------------------+-------------------------------------------------------------+----------+---------+
```

You may also specify an integration to display in the command line directly: `webpaas integration:activities c4opi5tjv3yfd`.

The ID is an internal identifier for the activity event.
The Description field is an arbitrary string of text produced by the integration code.
The State and Result fields indicate if the activity completed successfully, failed for some reason, or is currently in progress.

See the `--help` output of the command for more options.

### Show detailed information on an activity

To show detailed information on a specific activity,
run the following command:

```bash
webpaas integration:activity:log {{< variable "INTEGRATION_ID" >}} {{< variable "ACTIVITY_ID" >}} -t
```

The `-t` option specifies that timestamps must be included in the display of the results.

You get output similar to the following:

```bash
Integration ID: ceopz5tgj3yfc
Activity ID: 6456zmdtoykxa
Type: integration.github.fetch
Description: Fetching from https://github.com/ovh/docs
Created: 2020-04-15T08:44:07-05:00
State: complete
Log:
[2020-04-15T13:44:17-05:00] Waiting for other activities to complete
[2020-04-15T13:46:07-05:00] Fetching from GitHub repository platformsh/platformsh-docs
[2020-04-15T13:46:09-05:00]   No changes since last fetch
[2020-04-15T13:46:09-05:00]
[2020-04-15T13:46:09-05:00] Synchronizing branches
[2020-04-15T13:46:09-05:00]
[2020-04-15T13:46:09-05:00] Synchronizing pull requests
[2020-04-15T13:46:59-05:00]
[2020-04-15T13:46:59-05:00] W: No changes found, scheduling a retry..
```

That shows the full output of the activity, including timestamps.
That can be especially helpful if trying to determine why an integration isn't behaving as expected.

See the `--help` output of the command for more options.

If you omit the activity ID (the second random-seeming string), the command will default to the most recent activity recorded.
