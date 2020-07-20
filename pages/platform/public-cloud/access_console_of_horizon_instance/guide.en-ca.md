---
title: Access the console for an instance in Horizon
excerpt: This guide will assist accessing the console via the Horizon interface.
slug: access_console_horizon
section: Horizon
order: 3
---


## Objective

In the event of loss of access to your instance, wether caused by a configuration error, or a malfunctioning SSH service, you are always able to reconfigure your instance with the assistance of the VNC conole.

>[!success]
>
>To use this option, a password must be configured for the root  user on the instance in order to login to the operating system remotely.
>The VNC console can also serve as the first approach for analysis of any boot phase issues on your instance.
>

## Prerequisites

- [Configure user access to Horizon](../configure_user_access_to_horizon/)
- An already created instance
- [A root password](../become_root_and_change_password){.external}  created on the instance.

## Instructions

To access the console for an instance you will need to:

- Log in to [the Horizon interface](https://horizon.cloud.ovh.net/auth/login/)
- Click on the `Compute`{.action} menu on the left and then select `Instances`{.action}
- Select Console in the drop down list for the corresponding instance.

![console horizon](images/launch_console.png){.thumbnail}

- The VNC console now appears.

>[!success]
>
>If the onsole stops responding to keyboard inputs, click on the status bar.
>To exit full screen view, click on the back button on your browser.
>

![console horizon](images/console.png){.action}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
 

