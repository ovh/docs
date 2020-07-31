---
title: Using Roles to share your data
slug: roles
order: 7
excerpt: Manage who can have access to your data and what they can do with them.
section: Features
---

**Last updated 29th July, 2020**


## Overview 

Logs policies are often decisions taken by an entire team not individuals.Collaboration remains an utmost priority for Logs Data Platform, following this strategy it shall enable everyone share data in a easy and secure manner. 
Log policies also affect sevral teams regarding access rights, for instance the Product managers can access some data but be denied to access security logs. That's why we decided to provide a [Role Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control){.external) to users to configure access rights. This document will expose you how you can use this system to configure access rights. 


## Creating a Role


Head to the **Roles** pages on the manager and create a role with its name and its description.


![role\_creation](images/add_role.png){.thumbnail}


Once created you will be able to configure the role details: the permissions and the members. 

## Managing Permissions 

Click on the **...** button on the right to display the menu and head to manage permissions 

![menu\_permission](images/menu_permissions.png){.thumbnail}

On the permission page, you will see two tabs **Read-Only** and **Read-Write**.

Some items can be shared in read-only whereas others can be shared with a write (or modification) right. 

- **Data Stream**: Graylog Data Streams can be shared **read-only only** since logs are fully immutable. 
- **Dashboards**: Graylog Dashboards can be shared **read-only or read-write**. With the read-write access, the users in the role can add, modify and remove widgets of a dashboard. 
- **Index **: Elasticsearch indices can be shared **read-only or read-write**. With the read-write access, users in the role can add, modify and delete documents in the index. They can also alter the mapping.
- **Aliases**: Elasticsearch Aliases are **read-only**. They can only be used to read the data attached to them.
- **Kibana**: Kibana can be shared **read-only or read-write**. If Kibana is read-only, users have access to the Kibana but cannot modify it. If Kibana is read-write, they can modify teh dashboards or the visualizations or any other Kibana feature or setting.

Note that to give access to data (index or aliases) explored through Kibana to a user, youneed to give at least **read** rights to both the instance and to the data explored. Select the items you want to share in the role and they will switch from the **avalaible** column to the **selected** column. Go back to the **roles** page to manage the users in the defined role. 

![menu\_permission](images/permissions_page.png){.thumbnail}

## Managing members

To manage the members of a role, use the same **...** menu to navigate to the **Manage members** page. Click on `Add a member`{.action} to add a new member for this role. 
 In the username box you must add a ldp username. Any person who have a Logs Data Platform service can be added to the role even if their primary cluster is different from yours. 

Once a member has been added, he will see the relevant page the item that have been shared to him with an indication on the **Shared** column. The available actions will be displayed to him in the **...** menu. 

![menu\_permission](images/shared_stream.png){.thumbnail}


A user can access the shared items with his usual credentials whatever the cluster is. If one has access to items on another cluster, it shall be possible to create tokens for this new cluster access. As a reminder, creating an account on Logs Data Platform is free, any OVHcloud nic-handle can create one or several accounts and they don't have to pay for data that have been shared to them. 


## Using API 

Role management can be automated by using the [OVHcloud API](https://api.ovh.com/console/#/dbaas/logs){.external}. 

Here are a few exemples of the role API calls you can use:


>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {GET} /dbaas/logs
>> >
>>
>
> About:
>
>> List available services.


>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {GET} /dbaas/logs/{serviceName}/role
>> >
>>
>
> About:
>
>> Return the list of roles associated with the service.
> 
> Parameters:
>> serviceName *
>>> The internal ID of your Logs Data Platform service (string)


>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {GET} /dbaas/logs/{serviceName}/role
>> >
>>
>
> About:
>
>> Return the list of roles associated with the service.
> 
> Parameters:
>> serviceName *
>>> The internal ID of your Logs Data Platform service (string)

>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {GET} /dbaas/logs/{serviceName}/role/{roleId}
>> >
>>
>
> About:
>
>> Return the specified token.
> 
> Parameters:
>> serviceName *
>>> The internal ID of your Logs Data Platform service (string)
>> roleId *
>>> UUID of your role (string)


>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {POST} /dbaas/logs/{serviceName}/role/{roleId}/member
>> >
>>
>
> About:
>
>> Return the specified token.
> 
> Parameters:
>> serviceName *
>>> The internal ID of your Logs Data Platform service (string)
>> roleId *
>>> UUID of your role (string)
>RequestBody:
>> RoleMemberCreation *
>>> A JSON object containing the field {username} (string), the username of the member and a {note}, the description of this member. 


>[!faq]
>
> Endpoint:
>
>> > [!api]
>> >
>> > @api {POST} /dbaas/logs/{serviceName}/role/{roleId}/permissions/alias
>> >
>>
>
> About:
>
>> Return the specified token.
> 
> Parameters:
>> serviceName *
>>> The internal ID of your Logs Data Platform service (string)
>> roleId *
>>> UUID of your role (string)
>RequestBody:
>> RolePermissionAliasCreation *
>>> A JSON object containing the field {aliasId} (string), the UUID of the alias you want to share.

Don't hesitate to [explore the API](https://api.ovh.com/console/#/dbaas/logs){.external}, and try it with the provided console. 


## Go further

- Getting Started: [Quick Start](../quick_start/guide.fr-fr.md){.ref}
- Documentation: [Guides](../product.fr-fr.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs)){.external}
