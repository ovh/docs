---
title: GitHub
slug: github
section: Source
---

**Last updated 21st June 2021**


## Objective  

The [GitHub](https://github.com) integration allows you to manage your Web PaaS environments directly from your GitHub repository.

**Features supported:**

* Create a new environment when creating a branch or opening a pull request on GitHub.
* Rebuild the environment when pushing new code to GitHub.
* Delete the environment when merging a pull request.

## Setup

> [!primary]  
> If the repository you are trying to integrate with a Web PaaS project has a default branch that is not `master` (e.g. `main`), there are a few additional steps you will need to perform to setup the integration.
> 

### 1. Generate a token

To integrate your Web PaaS project with an existing GitHub repository, you first need to generate a token on your GitHub user profile. Simply go to your Settings, then select `Developer settings` and click `Personal access tokens`. Here you can [Generate a new token](https://github.com/settings/tokens/new).

Give it a description and then ensure the token has the following scopes:

* To integrate with public repositories: `public_repo`
* To integrate with your own private repositories: `repo`
* To integrate with your organization's private repositories: `repo`
    and `read:org`
* To automatically create web hooks: `admin:repo_hook`

Copy the token and make a note of it (temporarily).

Note that for the integration to work, your GitHub user needs to have permission to push code to the repository.

### 2. Enable the integration

Note that only the project owner can manage integrations.

Open a terminal window (you need to have the Web PaaS CLI installed). Enable the GitHub integration as follows:

```bash
webpaas integration:add --type=github --project=PLATFORMSH_PROJECT_ID --token=GITHUB-USER-TOKEN --repository=USER/REPOSITORY
```
where
* `PLATFORMSH_PROJECT_ID` is the project ID for your Web PaaS project
* `GITHUB-USER-TOKEN` is the token you generated in step 1
* `USER` is your github user name
* `REPOSITORY` is the name of the repository in github (not the git address)

Note that if your repository belongs to an organization, use ``--repository=ORGANIZATION/REPOSITORY``.

e.g.
```bash
webpaas integration:add --type=github --project=abcde12345 --token=xxx --repository=platformsh/platformsh-docs
```

Optional parameters:

* `--fetch-branches`: Track and deploy branches (true by default)
* `--prune-branches`: Delete branches that do not exist in the remote GitHub repository (true by default)
* `--build-pull-requests`: Track and deploy pull-requests (true by default)
* `--build-draft-pull-requests`: If set to `true`, [draft pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) will also have an environment created.  If false they will be ignored.  If `--build-pull-requests` is `false` this value is ignored.  (`true` by default)
* `--build-pull-requests-post-merge`: `false` to have Web PaaS build the branch specified in a PR. `true` to build the result of merging the PR.  (`false` by default)
* `--pull-requests-clone-parent-data`: Set to `false` to disable cloning of parent environment data when creating a PR environment, so each PR environment starts with no data. (`true` by default)
* `--base-url`: Only set if using GitHub Enterprise, hosted on your own server.  If so, set this to the base URL of your private server (the part before the user and repository name).

The CLI will create the necessary webhook for you when there's correct permission set in the given token.

Note that the `--prune-branches` option depends on `--fetch-branches` being enabled.  If `--fetch-branches` is disabled, `--prune-branches` will automatically be set to false, even if specifically set to true.

### 3. Add the webhook

If you see the message `Failed to read or write webhooks`, you will need to add a webhook manually:

1\. Copy the hook URL shown in the message.

2\. Go to your GitHub repository and click Settings, select the Webhooks and Services tab, and click Add webhook.

3\. Paste the hook URL, choose application/json for the content type, choose "Send me everything" for the events you want to receive, and click Add webhook.


You can now start pushing code, creating new branches or opening pull requests directly on your GitHub repository.

Note that if you have created your account using the GitHub oAuth Login then in order to use the WebPaas CLI, you will need to [setup a password](https://accounts.platform.sh/user/password).

### 4. Validate the integration

You can then verify that your integration is functioning properly [using the CLI](../../integrations-overview#validating-integrations) command

```bash
webpaas integration:validate
```

## Types of environments

Environments based on GitHub **pull requests** will have the correct 'parent' environment on Web PaaS; they will be activated automatically with a copy of the parent's data.

However, environments based on (non-pull-request) **branches** cannot have parents; they will inherit directly from `master` and start inactive by default.

## Clones and commits

When you run `webpaas get <projectID>` or use the clone command shown in the "Git" dropdown in the management console to clone the project, you will actually be cloning from your remote integrated repository, so long as you have the [appropriate access to do so](../../administration-users#user-access-and-integrations).

Your GitHub repository is considered by Web PaaS to be the "source of truth" for the project. The project is only a mirror of that repository, and all commits should be pushed only to GitHub.
