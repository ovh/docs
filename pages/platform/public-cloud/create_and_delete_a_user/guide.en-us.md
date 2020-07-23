---
title: 'Creating and deleting an OpenStack user'
slug: creation-and-deletion-of-openstack-user
section: 'Project management'
order: 8
---

**Last updated 6th December 2019**

## Objective
To use the Horizon or OpenStack APIs, you will need to create an OpenStack user. This guide will show you how to create and delete a user.

The number of OpenStack users is not limited.

## Requirements
A Public Cloud project, and it must be more than 7 days old if it is your first project (or contact the support team to check if you can unblock the project early) Other projects will not have this limitation.

## Instructions

### Create an OpenStack user.
First of all, to access the Horizon interface, you need to create an OpenStack user account. To do this, log in to your Control Panel and go to the `Public Cloud`{.action} section in the top-left corner of the page. Then, on the following screen, click the `arrow button`{.action} next to your project name in the top-left corner of the screen.

![Add user](images/select_project.png){.thumbnail}

Under "Project management" on the left-hand sidebar, select `Users & Roles user`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Clique the `Create User`{.action} button to generate the following pop-up.

![Add user](images/adduser.png){.thumbnail}

The user description is not the username for the user. It is just a descriptive term to help you remember what kind of user it is. The next screen will allow you to grant user permissions. For each permissions box you check, the user will get the corresponding privileges as seen in the table below:

![Permissions](images/permissions.png){.thumbnail}

Click the `Confirm`{.action} button when you are finished and you will see the following screen:

![User_pw](images/user_pw.png){.thumbnail}

Be sure to save your password now as this is the only time you will be able to recover it. However, if you lose it you can always create a new one by clicking the ellipses (...) on the following menu and selecting `Generate a password:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Once your user has been created, you can use these credentials to log into the Horizon interface using the `Horizon button`{.action} on the left-hand sidebar.

### Delete an OpenStack user
You can delete an OpenStack user directly in the OVHcloud Control Panel (Cloud → Servers → Name of your Public Cloud project). In the OpenStack section, on the right you will find a small recycle bin icon:


![public-cloud](images/delete.png){.thumbnail}

Simply click on it, and the user will be deleted in a few seconds.

> [!alert]
>
> Any user deletion is permanent, and will invalidate all associated tokens, even those with an expiry date that has not yet been exceeded.
> 

## Go further

Join our community of users on <https://community.ovh.com/en/>.
