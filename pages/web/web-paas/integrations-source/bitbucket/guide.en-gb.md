---
title: Integrate with Bitbucket
slug: bitbucket
section: Source
---

**Last updated 31st August 2023**



## Objective  

{{% source-integration/intro source="Bitbucket" %}}

You can set up an integration with either Bitbucket Cloud
or a self-hosted [Bitbucket Server](https://confluence.atlassian.com/bitbucketserver/).

{{% source-integration/requirements source="Bitbucket" %}}

## Bitbucket Cloud

### 1. Create an OAuth consumer

To integrate your {{< vendor/name >}} project with an existing Bitbucket Cloud repository,
[create an OAuth consumer](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/):

![A screenshot of how to setup the Bitbucket OAuth consumer](images/bitbucket-oauth-consumer.svg "0.35")

> [!primary]  
> Be sure to define the above as a _private_ consumer by checking the "This is a private consumer" box.
> 
The **Callback URL** isn't important in this case.
You can set it to `http://localhost`.

Copy the **Key** and **Secret** for your consumer.

### 2. Enable the Cloud integration

{{< source-integration/enable-integration source="Bitbucket" >}}

{{% source-integration/validate source="Bitbucket" %}}
1\. Follow the [Bitbucket instructions to create a webhook](https://support.atlassian.com/bitbucket-cloud/docs/manage-webhooks/#Create-webhooks)

   using the URL you copied.
   Make sure to update the triggers to include all pull request events except comments and approval.
{{% /source-integration/validate %}}

## Bitbucket Server

### 1. Generate a token

To integrate your {{< vendor/name >}} project with a repository on a Bitbucket Server instance,
you first need to create an access token associated with your account.

[Generate a token](https://confluence.atlassian.com/display/BitbucketServer/HTTP+access+tokens).
and give it at least read access to projects and admin access to repositories.
Copy the token.

### 2. Enable the Server integration

{{< source-integration/enable-integration source="Bitbucket server" >}}

{{% source-integration/validate source="Bitbucket" %}}
1\. Follow the [Bitbucket instructions to create a webhook](https://confluence.atlassian.com/bitbucketserver076/managing-webhooks-in-bitbucket-server-1026535073.html#ManagingwebhooksinBitbucketServer-creatingwebhooksCreatingwebhooks)

   using the URL you copied.
   Send all events except comments and approval.
{{% /source-integration/validate %}}

{{% source-integration/environment-status source="Bitbucket" %}}

## Source of truth

{{< source-integration/source-of-truth source="Bitbucket" >}}

{{% source-integration/url source="Bitbucket" %}}
