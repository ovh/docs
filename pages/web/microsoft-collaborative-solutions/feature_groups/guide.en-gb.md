---
title: 'Creating contact groups'
slug: exchange_20132016_how_to_use_the_groups_feature_mailing_lists
excerpt: 'Find out how to manage mailing lists in Exchange'
section: 'Exchange account features'
order: 1
---

**Last updated 26th February 2020**


## Objective

Exchange groups enable multiple participants to communicate by sending emails to a unique group address. With this collaborative feature you can create and manage mailing lists that include Exchange users as well as external contacts.

**This guide explains how to use Exchange groups via the OVHcloud Control Panel and Outlook Web App (OWA).**


## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- an [OVHcloud Exchange solution](https://www.ovh.co.uk/emails/hosted-exchange) already set up


## Instructions

### Step 1: Creating a new group

First, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), navigate to the "Web" section, and select your Exchange service from the column under `Microsoft`{.action} `Exchange`{.action} on the left-hand side. Click on the `Groups`{.action} tab in the horizontal menu.

![contactgroups](images/exchange-groups-step1.png){.thumbnail}

Clicking on `Create a contact group`{.action} will open a new window where you can define the group's settings:

![contactgroups](images/exchange-groups-step2.png){.thumbnail}

|Name|Description|
|---|---|
|Email address|The new address that will send messages to the mailing list. Please note that you cannot enter an existing email address.|
|Group name|The display name that appears in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and in [OVHcloud webmail](https://www.ovh.co.uk/mail) (OWA).|
|Max size incoming / outgoing|You can specify the maximum size of incoming and outgoing emails.|
|Hide in Outlook|If this box is ticked, the group address will not appear in the Exchange service's list of addresses.|
|Authentication required|If this box is ticked, only users on the same platform will be able to send a message using the group address.|

> [!primary]
>
Please note that the options "Manage subscribers" and "Manage un-subscribers" were disabled by our administrators for security reasons. We apologise for any inconvenience.
>

Click `Next`{.action} to continue.

On the second page, define the members of the group and choose the "Administrators". The choices will only include email addresses and external contacts that are already created on the service.

![contactgroups](images/exchange-groups-step3.png){.thumbnail}

Please note that administrators also have to be set as "Contacts" to receive group emails.
Click `Next`{.action} to continue and finalise your choices by clicking `Confirm`{.action}.


### Step 2: Managing groups

Your newly created group will be operational within a few minutes. From the group list you can adjust the settings described above by clicking `...`{.action} and selecting them from the menu.

![contactgroups](images/exchange-groups-step4.png){.thumbnail}

Additionally, the menu item `Manage delegations`{.action} will be displayed. With this option you will be able to delegate access in the same way as for an Exchange account. Please find the details in [this guide](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_grant_full_access_permissions_for_an_account).

![contactgroups](images/exchange-groups-step5.png){.thumbnail}

> [!primary]
>
Please note that any changes to the service may take a few minutes to be applied. You can check the status of most operations by selecting `More+`{.action} and `Recent tasks`{.action} from the horizontal menu.
>


### Step 3: Messaging a group in OWA

You can now test your mailing list via [OVHcloud webmail](https://www.ovh.co.uk/mail) (OWA): simply send an email to the group address.

![contactgroups](images/exchange-groups-step6.png){.thumbnail}


## Go further

[Delegating permissions on an Exchange account](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_grant_full_access_permissions_for_an_account)

[Using the Outlook Web App with an Exchange account](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide)

[Sharing calendars in OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_how_to_share_calendars_via_owa)

Join our community of users on <https://community.ovh.com/en/>.