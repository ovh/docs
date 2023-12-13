---
title: "Managing OVHcloud service accounts via the API (EN)"
excerpt: "How to create and use a token to connect to all OVHcloud APIs"
updated: 2023-08-24
---



## Objective

Access to OVHcloud products can be configured within **access policies**, which can be accessed via the OVHcloud Control Panel. This allows you to globally define who can access which product. To configure this access for users, please refer to our guide on [Using IAM policies from your Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui).

When API access is required from applications or code, it is necessary to generate specific credentials in order not to link them to a user. You don't want to reset your scripts in production if your user changes their credentials or leaves your company.

This guide will explain how to generate credentials to deploy within your code, as well as their use in OVHcloud access policies.
These credentials can be used within the different APIs of our products: 

- OVHcloud API: [How to authenticate on the OVHcloud API with Oauth2](/pages/account_and_service_management/account_information/authenticate-api-with-service-account).
- OpenStack API: [How to use service accounts to connect to OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You know [how to configure IAM access policies via the OVHcloud Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui).
- You know [how to use the OVHcloud APIs](/pages/manage_and_operate/api/first-steps).

## Instructions

### How service accounts work

OVHcloud service accounts are a username/token couple that allow your code to authenticate with OVHcloud APIs. These credentials follow the Oauth2 protocol by following the **client credential** authentication mechanism.

This identifier/token pair has no time limit. It is therefore ideal for use within a code deployed in production. Of course, you can revoke the access associated with this service account at any time by modifying the associated access policies or by deleting this service account.

Each identifier is associated with a unique **urn**, which enables it to be granted fine-grained rights on OVHcloud products by linking it to access policies. These credentials are directly linked to your root account. As a result, they are not affected by user changes.

Like all OVHcloud APIs, the management of these credentials is subject to configurable access rights within the access policies. You can find more information in our guide on [Using IAM policies via the OVHcloud Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui).

### Manage service accounts

OVHcloud service accounts can be configured within the APIs `/me/api/oauth2/client`.

#### Create a service account

To create a service account, use the following API call:

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

With this API call, you can create Oauth2 credentials for several authentication mechanisms. The one we are interested in here is **CLIENT_CREDENTIALS**. This mechanism does not require a callback URL.

You must supply the following values:

- **callbackUrls**: an empty array of callback urls `[]`
- **flow**: "CLIENT_CREDENTIALS"
- **name**: the name you would like to provide to your identifier
- **description**: a description of your identifier. We recommend describing how you will use this identifier. If you audit your access in the future, it is easier to link it to your application name, so that you can easily find out where the identifier is deployed (and what the impact will be if you change your access).

In response, the API will provide you with two pieces of information:

- **clientId**: your service account ID
- **clientSecret**: a token allowing you to authenticate yourself on our APIs. This information must be stored securely. With these two credentials, you can log in to this service account and get the rights associated with it. Save this value. It will not be possible to retrieve it at a later stage.

To retrieve the **URN** required to edit an access policy, you can use the following call:

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

Use the value of the identifier retrieved from the previous call.<br>
In this call, you will have access to the **identity** value in the form of a URN that will allow you to associate this service account with an access policy.

This URN is of the following form:

urn:v1:*<eu|ca>*:identity:credential:*<xx11111-ovh>*/oauth2-*<clientId>*

#### Delete a service account

If you no longer use a service account, or want to permanently delete this access, use the following call:

> [!api]
>
> @api {v1} /me DELETE /me/api/oauth2/client/{clientId}
>

> [!warning]
>
> Warning: this action is permanent. If you would like to cancel it, you will need to create a new service account and deploy the username/token pair within your application.
> 
> To delete access, we recommend detaching all access policies from this service account. This action is reversible, and allows you to cancel in case of an error. Once you have ensured that this service account is not used in production, you can delete it without fear.
>

### Link access to a service account

To modify access for a service account, you can associate it with an existing access policy or create a new one. To find out more about managing access policies, please read our guide on [Using IAM policies via the OVHcloud API](/pages/account_and_service_management/account_information/iam-policies-api) .

For this example, we will use an existing access policy to provide access to the service account management APIs. Below is an example of a policy with the values **xx11111-ovh** and **urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f**, which should be adapted to suit your configuration.

```json
{
  "description": "Demo for service account guide",
  "identities": [
    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f"
  ],
  "name": "Demo-service-account",
  "permissions": {
    "allow": [
      {
        "action": "account:apiovh:me/api/oauth2/client/get"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/create"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/edit"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/delete"
      }
    ]
  },
  "resources": [
    {
        "urn": "urn:v1:eu:resource:account:xx11111-ovh"
    }
  ]
}
```

This example can be used directly within the following call to create a new policy:

> [!api]
>
> @api {v2} /iam POST /iam/policy
>

### Usage of service accounts

Service accounts are available in several APIs of our products. For each API, there is a guide:

- [How to authenticate on the OVHcloud API with Oauth2](/pages/account_and_service_management/account_information/authenticate-api-with-service-account)
- [How to use service accounts to connect to OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
