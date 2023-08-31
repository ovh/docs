---
title: Integrate with GitLab
slug: gitlab
section: Source
---

**Last updated 31st August 2023**



## Objective  

{{% source-integration/intro source="GitLab" %}}
{{% source-integration/requirements source="GitLab" %}}

## 1. Generate a token

To integrate your {{< vendor/name >}} project with an existing GitLab repository,
generate a [project access token](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html#create-a-project-access-token).
Ensure the token has the following scopes:

- `api` to access your API

- `read_repository` to read the repository


For the integration to work, your GitLab user needs push access to the repository.

Copy the token.

> [!primary]  
> 
> To create a project access token, you need to have a [sufficient GitLab license tier](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html).
> If you don't see **Access Tokens** under **Settings**, upgrade your GitLab tier.
> Alternatively, you can create a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html),
> but that's attached to a specific user rather than the project as a whole
> and grants more permissions.
> 
> 

## 2. Enable the integration

{{< source-integration/enable-integration source="GitLab" >}}

{{% source-integration/validate source="GitLab" %}}
1\. In your GitLab repository, click **Settings** > **Webhooks**.

1\. In the **URL** field, paste the URL you copied.

1\. Under **Trigger**, select **Push events** and **Merge request events**.

1\. Click **Add webhook**.

{{% /source-integration/validate %}}

{{% source-integration/environment-status source="GitLab" %}}

## Source of truth

{{< source-integration/source-of-truth source="GitLab" >}}

{{% source-integration/url source="GitLab" %}}
