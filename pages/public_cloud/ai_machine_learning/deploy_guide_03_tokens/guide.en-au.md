---
title: AI Deploy - Accessing your app with tokens
excerpt: Discover how to create a scoped token and query your AI Deploy app
updated: 2023-04-04
---

> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This guide covers the creation of application tokens for AI Deploy.

## Requirements

- a **Public cloud** project
- access to the [OVHcloud Control Panel](/links/manager)
- a Running AI Deploy app (the deployed app in this guide uses the Docker image [infrastructureascode/hello-world](https://hub.docker.com/r/infrastructureascode/hello-world))

## Instructions

### Adding labels to an App

Tokens are scoped based on labels added to your AI Deploy app. To scope a token you need to add a label to your AI Deploy app upon submission.

![app add label](images/01-app-add-label.png){.thumbnail}

In this instance we add the label `group=A` to the AI Deploy app. A set of defaults labels are added to all AI Deploy apps:

- `ovh/id` which value is the ID of the AI Deploy app
- `ovh/type` with value `app`, the type of AI resource

> [!primary]
> Labels prefixed by `ovh/` are reserved by the platform, those labels are overriden upon submission if any are provided.

All the labels of an AI Deploy app are listed on the AI Deploy app details under **Tags**:

![app dashboard](images/02-app-dashboard.png){.thumbnail}

### Generating tokens

From the **AI Deploy** page, you access the tokens management page by clicking the `Tokens`{.action} tab.

![app list](images/03-app-list.png)

Once on the token management tab, simply click on `New Token`{.action}.

![token list new](images/04-token-list-new-2.png){.thumbnail}

#### Read token

There are two types of roles that can be assigned to a token:

- AI Platform - Read-only
- AI Platform - Operator

A Read-only token will only grant you the right to query the deployed app while an Operator token would also allow you to manage the AI Deploy app itself.

Let us create a token for the AI Deploy apps matching the label `group=A` with read-only access in the GRA cluster.
To create an AI Deploy app token we need to specify 3 parameters:

- The token scope specified through label selectors, a token will be scoped over any app matching the set of label selectors. In this case `group=A`
- The token role: AI Training - Read-only
- The region (cluster in which are deployed the AI Deploy apps): GRA.

Fill out the form:

![token generation input read](images/05-token-gen-input-read.png){.thumbnail}

Click `Generate`{.action}. Upon success, you are redirected to the token list with the new generated token displayed at the top:

![token generation result](images/06-token-gen-result-read.png){.thumbnail}

Save the token string for later use.

> [!warning]
> The token is only displayed once, make sure to save it before leaving the page or you will need to regenerate the token.

This newly generated token provides read access over all resources tagged with the label `group=A` including the ones submitted after the creation of the token.

#### Operator token

An operator token grants read access along with management access for the matching apps. This means that you can manage the AI Deploy app lifecycle (start/stop/delete) using either the CLI (more info [here](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli)) or the [AI Training API](https://gra.ai.cloud.ovh.net/) by providing this token.

This Operator token will be scoped on a specific AI Deploy app and we will use the default `ovh/id` label to do so (since it is reserved, there is only one AI Deploy app that can match this label selector).

- Token scope: `ovh/id=4c4f6253-a059-424a-92da-5e06a12ddffd`
- The token role: AI Training - Operator
- The region: GRA.

![token generation input operator](images/07-token-gen-input-op.png){.thumbnail}

Additional information about the use of a token to manage an AI Training resource can be found [here](/pages/public_cloud/ai_machine_learning/cli_13_howto_app_token_cli#use-the-app-token).

### Using a token to query an AI Deploy app

With the token we generated in the previous step we will now query the app. For this demonstration, we deployed a simple Hello World app that always responds `Hello, World!`.

You can get the access URL of your app in the details of the AI Deploy app, above the **Tags**.

#### Browser

When accessing the AI Deploy app via its URL in your browser, you will reach a Login page:

![app access login](images/11-app-access-credentials.png){.thumbnail}

To use the token to access this app, you can click on `Login with token`. Fill in your token in the dedicated field and click `Connect`{.action}.

You now land on the exposed AI Deploy app service:

![app response](images/12-app-access-result.png){.thumbnail}

#### Code integration

You can also directly CURL the AI Deploy app using the token as an `Authorization` header:

```bash
export TOKEN=<your-token>
curl "https://<your-app-id>.app.<your-app-region>.ai.cloud.ovh.net" -H "Authorization: Bearer $TOKEN"

> Hello, World!
```

### Token lifecycle

Once a token is created, you can either regenerate the token or delete it.

#### Regenerating a token

When creating a token, the actual token string is only displayed once upon creation. It is not possible to retrieve the actual token afterwards, so make sure to save it when creating a new one.

If you lost the token or if it leaked and you need to invalidate the token, you can generate it again. This causes the existing token to expire.

From the list of tokens, click on the action menu and select `Regenerate`{.action}:

![token regenerate](images/08-token-list-regen.png){.thumbnail}

Then click on `Regenerate`{.action} to confirm.

![token regenerate confirm](images/09-token-regen-confirm.png){.thumbnail}

#### Deleting a token

If you simply need to invalidate the token, you can delete it using the same action menu to regenerate a token. This will invalidate the existing token.

![token delete](images/10-token-list-delete.png)

## Feedback

Please feel free to send us your questions, feedback and suggestions to help our team improve the service on the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
