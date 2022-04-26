---
title: GitLab
slug: gitlab
section: Source
---

**Last updated 11th May 2021**


## Objective  

The [GitLab](https://gitlab.com) integration allows you to manage your Web PaaS environments directly from your GitLab repository.

**Features supported:**

* Create a new environment when creating a branch or opening a pull request on GitLab.
* Rebuild the environment when pushing new code to GitLab.
* Delete the environment when merging a pull request.

## Setup

### 1. Generate a token

To integrate your Web PaaS project with an existing GitLab repository, you first need to generate a token on your GitLab user profile. Simply go to your Settings page on GitLab and click `Access Tokens`.

Fill the `Name` field for example with "Web PaaS Integration" and optionally set an expiration time.

Give it a description and then ensure the token has the following scopes:

 * `api`  - Access your API
 * `read_user` - Read user information
 * `read_repository` - Read repositories

Copy the token and make a note of it (temporarily).

Note that for the integration to work, your GitLab user needs to have permission to push code to the repository.

### 2. Enable the integration

Note that only `project owner` or `project admin` can manage the integrations.

Open a terminal window (you need to have the Web PaaS CLI installed). Enable the GitLab integration as follows:

```bash
webpaas integration:add --type=gitlab --token=GITLAB-ACCESS-TOKEN --base-url=THE-URL-OF-YOUR-GITLAB --server-project=MY-NAMESPACE/MY-PROJECTNAME --project=PLATFORMSH_PROJECT_ID
```

where
* `PLATFORMSH_PROJECT_ID` is the project ID for your Web PaaS project
* `GITLAB-ACCESS-TOKEN` is the token you generated in step 1
* `THE-URL-OF-YOUR-GITLAB` is the base URL to call the Gitlab API; it should be `https://gitlab.com` if your project is hosted on Gitlab, or the URL for your own Gitlab instance otherwise. It should **not** include your namespace and project name.
* `MY-NAMESPACE/MY-PROJECTNAME` describes the namespace of your GitLab project, not including the base url.

For example, if your repository is located at `https://gitlab.com/sandbox/my_application`, the integration command would be

```bash
webpaas integration:add --type=gitlab --token=GITLAB-ACCESS-TOKEN --base-url=https://gitlab.com --server-project=sandbox/my_application --project=PLATFORMSH_PROJECT_ID
```

Optional parameters:
* `--build-merge-requests`: Track and deploy merge-requests (true by default)
* `--build-wip-merge-requests`: If set to `true`, [WIP merge requests](https://docs.gitlab.com/ee/user/project/merge_requests/work_in_progress_merge_requests.html) will also have an environment created.  If false they will be ignored.  If `--build-merge-requests` is `false` this value is ignored.  (`true` by default)
* `--merge-requests-clone-parent-data` : should merge requests clone the data from the parent environment (true by default)
* `--fetch-branches`: Track and deploy branches (true by default)
* `--prune-branches`: Delete branches that do not exist in the remote GitLab repository (true by default)
* `--base-url`: Only set if using self-hosted GitLab on your own server.  If so, set this to the base URL of your private server (the part before the user and repository name).

Note that the `--prune-branches` option depends on `--fetch-branches` being enabled.  If `--fetch-branches` is disabled, `--prune-branches` will automatically be set to false, even if specifically set to true.

### 3. Add the webhook

The previous command, if successful should output the configuration of the integration. The last element would look like:

```bash
| hook_url | https://{region}.platform.sh/api/projects/{projectid}/integrations/{hook_id}/hook |
```

The CLI will create the necessary webhook using the above URL for you when there's correct permission set in the given token. If you see the message `Failed to read or write webhooks`, you will need to add a webhook manually:

1\. Copy the hook URL shown in the message.

2\. Go to your GitLab repository and click Settings > Webhooks.

3\. Paste the hook URL. In the Triggers section choose Push events, Tag push events and Merge Request events. Click on Add webhook.



You can now start pushing code, creating new branches or opening merge requests directly on your GitLab repository. You will see environments get automatically created and updated on the Web PaaS side.

### 4. Validate the integration

You can then verify that your integration is functioning properly [using the CLI](../../integrations-overview#validating-integrations) command

```bash
webpaas integration:validate
```

## Types of environments

Environments based on GitLab **merge requests** will have the correct 'parent' environment on Web PaaS; they will be activated automatically with a copy of the parent's data (unless you have set the option `merge-requests-clone-parent-data` to false).

However, environments based on (non-merge-request) **branches** cannot have parents; they will inherit directly from `master` and start inactive by default.

## Clones and commits

When you run `webpaas get <projectID>` or use the clone command shown in the "Git" dropdown in the management console to clone the project, you will actually be cloning from your remote integrated repository, so long as you have the [appropriate access to do so](../../administration-users#user-access-and-integrations). 

Your GitLab repository is considered by Web PaaS to be the "source of truth" for the project. The project is only a mirror of that repository, and all commits should be pushed only to GitLab.
