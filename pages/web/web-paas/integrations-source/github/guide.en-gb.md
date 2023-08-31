---
title: Integrate with GitHub
slug: github
section: Source
---

**Last updated 31st August 2023**



## Objective  

{{% source-integration/intro source="GitHub" %}}
{{% source-integration/requirements source="GitHub" %}}

## 1. Generate a token

To integrate your {{< vendor/name >}} project with an existing GitHub repository,
you need to [generate a new token](https://github.com/settings/tokens/new).
You can generate a classic personal access token,
or a [fine-grained personal access token](https://github.blog/changelog/2022-10-18-introducing-fine-grained-personal-access-tokens/)
for even greater control over the permissions you grant.

For the integration to work,
your GitHub user needs to have permission to push code to the repository.

When you set up or update an integration, it also needs permission to manage its webhooks.
This means your user needs to be a repository admin to create the integration.
You can remove this permission after setup.

Make sure you give your token a description.

If you're generating a classic personal access token,
ensure the token has the appropriate scopes based on what you want to do:

| Scope                 | Purpose                                                                |
| --------------------- | ---------------------------------------------------------------------- |
| `admin:repo_hook`     | To create webhooks for events in repositories. Always needed.          |
| `public_repo`         | To integrate with public repositories.                                 |
| `repo`                | To integrate with your private repositories.                           |
| `repo` and `read:org` | To integrate with private repositories in organizations you belong to. |

If you're generating a fine-grained personal access token,
ensure the token has the right [repository permissions](https://docs.github.com/en/rest/overview/permissions-required-for-fine-grained-personal-access-tokens?apiVersion=2022-11-28)
for the integration to work:

| Permission        | Access level    |
| ------------------| ----------------|
| `Commit statuses` | Read and write  |
| `Contents`        | Read and write  |
| `Metadata`        | Read-only       |
| `Pull request`    | Read and write  |
| `Webhooks`        | Read and write  |

After you've set the needed scopes or permissions,
generate and copy your token.

## 2. Enable the integration

{{< source-integration/enable-integration source="GitHub" >}}

{{% source-integration/validate source="GitHub" %}}
1\. In your GitHub repository, click **Settings** > **Webhooks** > **Add webhook**.

1\. In the **Payload URL** field, paste the URL you copied.

1\. For the content type, select **application/json**.

1\. Select **Send me everything**.

1\. Click **Add webhook**.

{{% /source-integration/validate %}}

{{% source-integration/environment-status source="GitHub" %}}

## Source of truth

{{< source-integration/source-of-truth source="GitHub" >}}

{{% source-integration/url source="GitHub" %}}
