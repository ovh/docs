---
title: How to log to the OVHcloud Control Panel using IAM
excerpt: "List the minimum rights required to log to the OVHcloud Control Panel"
updated: 2023-06-28
---

> [!warning]
>
> This feature is currently in beta. Find more informations here: <https://labs.ovhcloud.com/en/>
>  

## Objective

This guide will explain how to provide minimum rights to a user to allow him to log to the OVHcloud Control Panel


## Requirements

To follow this guide, you will require:

- An [OVHcloud account](/pages/account/customer/ovhcloud-account-creation).
- To know [how to manage account users](/pages/account/customer/ovhcloud-users-management).
- To know [how to set-up policy for IAM](/pages/account/iam-policies-ui)

## Instructions

To be able to log on the OVHcloud Control Panel, a user should have at least this minimum set of rights on the account resource :
- account:apiovh:me/get
- account:apiovh:me/supportLevel/get
- account:apiovh:me/certificates/get
- account:apiovh:me/tag/get

With these rights, a user will be able to log on the OVHcloud Control Panel, but will not be able to perform any actions inside it if you not give him other rights through the IAM

### Using UI

Using the UI, you can set-up a policy with the following configuration :
- Add a resourceType "My account"
- Add your account as a resource
- Add the 4 rights listed above as an action

You can now link your users to this policy to give them the right to log on the OVHcloud Control Panel


### Using API

Using the API, you can set-up a following policy exemple :

```json
{
  "name": "manager_ro",
  "description": "manager_ro",
  "identities": [
    .... 
  ],
  "resources": [ 
     {
         "urn": "urn:v1:eu:resource:account:xx1111-ovh" 
     }],
  "permissions": {
    "allow": [
      {
        "action": "account:apiovh:me/get"
      },
      {
        "action": "account:apiovh:me/supportLevel/get"
      },
      {
        "action": "account:apiovh:me/certificates/get"
      },
      {
        "action": "account:apiovh:me/tag/get"
      }
    ]
  }
}
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.