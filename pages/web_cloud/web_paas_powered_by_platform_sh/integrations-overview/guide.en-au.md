---
title: External Integrations
updated: 2021-06-02
---

**Last updated 2nd June 2021**


## Objective  

Web PaaS can be integrated with external services.

Web PaaS supports native integrations with multiple services, first and foremost Git hosting services such as GitHub, GitLab, or Bitbucket.  You can continue to use those tools for your development workflow, and have Web PaaS environments created automatically for your pull requests and branches.

You can also add our native integrations with performance monitoring tools such as [Blackfire](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-profiling/blackfire), [New Relic](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-profiling/new-relic), or [Tideways](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-profiling/tideways), as well as setting up [health notifications](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-notifications).  Or create your [own integration using our webhooks](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-activity/webhooks).
Be aware that only a project administrator (someone with `admin` level access to the project) can add or remove integrations. 

## Listing active integrations

With the CLI, you can list all your active integrations:

```bash
webpaas integrations
```

![Cli Integrations](images/cli-integrations.png "0.5")

> [!primary]  
> If you have created your account using the Bitbucket or GitHub oAuth Login, then in order to use the Web PaaS CLI you will need to set up a password by visiting [https://eu.console.webpaas.ovhcloud.com/](https://eu.console.webpaas.ovhcloud.com/).
> 

## Validating integrations

Once your integration has been configured, you can validate that it is functioning properly with the command:

```bash
$ webpaas integration:validate

Enter a number to choose an integration:
  [0] 5aut2djgt6kdd (health.slack)
  [1] a6535j9qp4sl8 (github)
 > 1

Validating the integration a6535j9qp4sl8 (type: github)...
The integration is valid.
```

## Debugging integrations

When integrations run, they trigger "activities."  Activities are actions that happen on Web PaaS, and they get logged.

Those logs are available via the CLI.  In most cases they are not necessary but may be useful for debugging an integration if it is misbehaving for some reason.

There are a handful of commands available, all under the `integrations` section.

### List all activities

The commands `webpaas integration:activity:list` or its alias `webpaas integration:activities` will list all activities on a given project and integration.

For example, for the project for this site, the command `webpaas integration:activity:list` outputs:

```bash
$ webpaas integration:activities

Enter a number to choose an integration:
  [0] dxr45hfldrkoe (webhook)
  [1] n2ukd4p7qofg4 (health.email)
  [2] c4opi5tjv3yfd (github)
 > 2

Activities on the project Web PaaS | Docs (6b2eocegfkwwg), integration c4opi5tjv3yfd (github):
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

You may also specify which integration to display in the command line directly: `webpaas integration:activities c4opi5tjv3yfd`.

The ID is an internal identifier for the activity event.  The Description field is an arbitrary string of text produced by the integration code.  The State and Result fields indicate if the activity completed successfully, failed for some reason, or is currently in progress.

See the `--help` output of the command for more options.

### Showing detailed information on an activity

You can call up more detailed information on a specific activity by its ID, using the `webpaas integration:activity:log` command.  It requires both the integration ID and an activity ID from the list above.  It also works best with the `-t` option to include timestamps.

```bash
$ webpaas integration:activity:log c4opi5tjv3yfd 6456zmdtoykxa -t

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

That will show the full output of the activity, including timestamps.  That can be especially helpful if trying to determine why an integration is not behaving as expected.

See the `--help` output of the command for more options.

If you omit the activity ID (the second random-seeming string), the command will default to the most recent activity recorded.
