---
title: How to use IAM policies using the OVHcloud OVHcloud Control Panel
excerpt: "Find out how to give specific access rights to users from an OVHcloud account"
updated: 2023-06-28
---

> [!warning]
>
> This feature is currently in beta. To join the beta, subscribe here: <https://labs.ovhcloud.com/en/>
>  

## Objective

This guide will explain how to provide specific access rights to users of an OVHcloud account.

The access management of OVHcloud is based on a "policy" management system. It is possible to write different "policies" that give users access to specific features on the products linked to an OVHcloud account.

In details, a policy contains:

- One or more **identities** targeted by this policy. 
    - It can be account IDs, users or user groups (like the ones used in [federation](/products/customer-connect-saml-sso)). 
- One or more **resources** impacted by this policy. 
    - A resource is an OVHcloud product that will be impacted by this policy (a domain name, a Nutanix server, a Load Balancer, etc.).
- One or more **actions** allowed or excepted by this policy. 
    - Actions are the specific rights affected by this policy (reboot the server, create an email account, terminate a product, etc.)

For instance, we can create a policy to give to a user called John, for a VPS, access to the action "reboot".

**This guide explains in detail how these policies can be declared using the OVHcloud API, and how to list the identities, resources and actions available for them.**

![IAM Policies](images/iam_policies.png){.thumbnail}

## Requirements

To set up a policy, you will require:

- An [OVHcloud account](/pages/account/customer/ovhcloud-account-creation).
- To know [how to manage account users](/pages/account/customer/ovhcloud-users-management).
- Some OVHcloud products linked to this OVHcloud account (Load Balancer, domain name, VPS, etc.).

## Instructions

### Access to the IAM menu

Access to your account management but clicking on your name on the upper-right corner, then on your name on the panel :

![Access to the IAM menu](images/access_to_the_IAM_menu_01.png){.thumbnail}

You can access to the IAM menu through the entry on your account management :

![Access to the IAM menu](images/access_to_the_IAM_menu_02.png){.thumbnail}

The menu will give you the list of all the current policies created on your account

![Access to the IAM menu](images/access_to_the_IAM_menu_03.png){.thumbnail}

Each policy are identified by their name, the number of identities linked to it, and the number of actions it contains.

The "Advanced mode" button display on the list all the OVHcloud Managed policies. These policies where automatically created by OVHcloud to convert the preexisting NicTech and NicAdmin delegation on the new IAM feature. Customer are not allowed to edit or delete these policies

### Managing policies

#### Create a policy

To create a policy, use the button "Create a policy".

This will bring you to the following form :

![Create a policy](images/create_a_policy_01.png){.thumbnail}

- **Name of the policy** (mandatory): This is the name that will appear on the interfaces.

The name should be unique and cannot contain any space.

- **Product type**: Select the types of product you want to scope the policy to. One or more product types can be selected on the same policy

- **Resources**: Select the list of resources or of resources groups scoped by the policy.The resources available are filtered by the product type indicated beforehand

- **Actions**:

There is 3 differents ways to add actions :

    - Enable "all the actions"

![Create a policy](images/create_a_policy_02.png){.thumbnail}

By activating this option, you will allow all actions related to the selected products. It includes all existing actions, but will include also actions that will be add in the future for this products categories.

    - Add actions manually

If you know the actions name the can add it manually

![Create a policy](images/create_a_policy_03.png){.thumbnail}

You can use a wildcard at the beginning or at the end of the actions name with "*"

For instance, adding "vps:apiovh:ips/*" will grant the following rights :

    vps:apiovh:ips/edit
    vps:apiovh:ips/delete
    vps:apiovh:ips/get 

    - Select actions from the list

Finally, you can select actions from the list.

![Create a policy](images/create_a_policy_04.png){.thumbnail}

Actions are categorized by resource type and in 5 categories :

    Read: list and show exiting things on a product
    Create: action that allow to create anything on a product
    Delete : action that allow to delete existing thing on a product
    Edit: action to changes something already existing on a product
    Operate: apply changes over the infrastructure related to the product

A search field is available to help to identify a specific action among the list

#### Edit a policy

To edit a existing policy you can use the button at the end of the row and chose "modify the policy"

![Edit a policy](images/editing_a_policy.png){.thumbnail}

This will bring you to the same form than for the creation where you can change the scope of the policy

#### Delete a policy

To delete a policy, select "delete the policy" from the previous menu.

A pop-up will ask you to confirm the suppression before effectively deleting it.

### Link a identity to a policy

To link an identity to a policy, you can use the button at the end of the row and chose "Manage the identities"

![Edit a policy](images/editing_a_policy.png){.thumbnail}

This will allow you to add and delete the users or the groups to who the policy should apply

![Link an identity](images/link_identity_to_policy.png){.thumbnail}

### Managing identities

The identity available for policies are managed by the "user management" tab on the account management.

The identity tab on the IAM menu will redirect you to the according menu

Details about user management are available on the [dedicated documentation](/pages/account/customer/ovhcloud-users-management)

### Managing Resource groups

Policies can target resource groups instead of resources. These resource groups can regroup resources from different products to regroup testing environment for example

#### Create a resource group

To create a resource group, access to the dedicated tab on the IAM menu

![Resource Group](images/resource_groups.png){.thumbnail}

And click on "Create a resource group"
This will bring you to the following form

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Name of the resource group**: This is the name that will appear on the interfaces.

The name should be unique and cannot contain any space.

- **Product type**: The list of product type concern by this resource group

- **Resources**: The list of resource the group will contain

#### Edit a resource group

To edit a resource group, click on his name on the list

#### Delete a resource group

To delete a existing resource group you can use the button at the end of the row and chose "delete the ressource group"

A pop-up will ask you to confirm the suppression before effectively deleting it.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
