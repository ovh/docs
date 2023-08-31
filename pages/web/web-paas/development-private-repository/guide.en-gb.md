---
title: Pull code from a private Git repository
slug: development-private-repository
section: Development
order: 5
---

**Last updated 31st August 2023**



## Objective  

To complete its build, your {{< vendor/name >}} project may need to access pieces of code stored in private Git repositories.
Examples include themes, libraries, and modules.
Configure these repositories to grant access to your project.

To grant access to a private Git repository,
add the project's public SSH key to your Git repository's deploy keys.

## 1. Get your project's public key

1\. In the Console, open the project you want.

2\. Click **{{< icon settings >}} Settings**.

3\. Under **Project settings**, click **Deploy key**.

4\. Click **{{< icon copy >}} Copy**.


![Deploy Key](images/settings-deploy-key.png "0.5")

## 2. Add the key to your repository in your Git provider

* [GitHub deploy key](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) 
* [GitLab deploy key](https://docs.gitlab.com/ee/user/project/deploy_keys/#grant-project-access-to-a-public-deploy-key)
* [Bitbucket access key](https://support.atlassian.com/bitbucket-cloud/docs/configure-repository-settings/)

If you're only pulling code, the key doesn't need write permissions.

Now your {{< vendor/name >}} project can access your private repository via SSH, including to add dependencies.

This means you can access the private repository through links like:
<code>git@{{% variable "GIT_PROVIDER" %}}:{{% variable "PATH_OR_USERNAME" %}}/{{% variable "REPOSITORY" %}}.git</code>.
For example, you can clone a repository in your [`build` hook](../create-apps/hooks/_index.md):

```yaml {configFile="app"}
hooks:
    build: |
        set -e
        git clone git@bitbucket.org:username/module.git
```

You can also use [private repositories as submodules](./submodules.md#use-private-git-repositories).

## Using multiple private GitHub repositories

GitHub requires a separate deploy key for each repository.
To grant your project access to multiple repositories, create an automated user account, known as a machine user, with its own SSH key.

You can then add the machine account as collaborator to specific repositories
or to a team with access to the repositories.

See more information about [machine users on GitHub](https://docs.github.com/en/developers/overview/managing-deploy-keys#machine-users).
