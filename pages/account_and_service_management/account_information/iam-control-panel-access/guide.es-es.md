---
title: Cómo crear una política IAM que permita al usuario conectarse al área de cliente de OVHcloud (EN)
excerpt: "Find out how to grant the minimum rights required to log in to the OVHcloud Control Panel"
updated: 2023-10-25
---

## Objective

This guide explains how to provide a user with the minimum rights to allow them to log in to the OVHcloud Control Panel.

## Requirements

- You have an [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You know [how to manage account users](/pages/account_and_service_management/account_information/ovhcloud-users-management).
- You know [how to configure policies for IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

## Instructions

To be able to log in to the OVHcloud Control Panel, a user should have at least this set of rights on the account resource:

- account:apiovh:me/get
- account:apiovh:me/supportLevel/get
- account:apiovh:me/certificates/get
- account:apiovh:me/tag/get

With these rights, a user will be able to log in to the OVHcloud Control Panel. To be able to perform any actions inside the Control Panel however, additional rights have to be assigned through IAM.

### Using UI

Using the UI, you can set up a policy with the following configuration:

Add a `resourceType` "OVHcloud customer account" and add your account as a resource.

![Account ressourceType](images/account_ressourceType.png){.thumbnail}

Then you can either use the managed permissions group `controlPanelAccess`

![Control Panel Access](images/controlPanelAccess.png){.thumbnail}

Or add the 4 rights listed above as an action.

![Add actions](images/add_actions.png){.thumbnail}

You can now link your users to this policy to give them the right to log in to the OVHcloud Control Panel.

### Using API

Using the API, you can set up a policy according to the following example:

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
