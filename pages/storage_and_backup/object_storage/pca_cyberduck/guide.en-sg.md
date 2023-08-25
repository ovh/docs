---
title: Cloud Archive Swift - Managing your archives with a Swift client (Cyberduck)
excerpt: This guide shows you how to configure Cyberduck to manage your Public Cloud Archives.
updated: 2021-06-18
---


## Objective

Object Storage is a storage solution that is managed primarily through the OpenStack API. However, you might not be familiar with managing storage space via command line.

There are graphical interface solutions that seamlessly make use of the OpenStack APIs. Cyberduck is a Swift client.

Other interfaces can be found on the Internet and configuration is similar to the configuration explained in this guide.

**This guide will explain how to configure Cyberduck to manage your Object Storage using a GUI based on Openstack APIs.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) and/or discuss the issue with our community on <https://community.ovh.com/en/>. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- [Cyberduck](https://cyberduck.io/) installed on your computer.
- your username (*OS_USERNAME*) and project credentials (*OS_PROJECT_NAME* or *OS_TENANT_NAME*). Retrieve them by downloading the OpenRC file from the [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#step-1-retrieve-the-variables) menu in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).
- your OpenStack user password.

In case you have forgotten your OpenStack user password, you can change it by following [this guide](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## Instructions

**This guide's last update is based upon version 7.9.2 of Cyberduck for MacOS.**

> [!primary]
>
> Depending on the source of your OpenRC file download (from Horizon or from your OVHcloud Control Panel), your project ID may be named *OS_PROJECT_NAME* or *OS_TENANT_NAME*.
>

In Cyberduck, open an OpenStack Swift (Keystone 3) connection.

![pca-cyberduck](images/login.png){.thumbnail}

Enter the following information:

- Server: auth.cloud.ovh.net
- Project:Domain:Username: OS_PROJECT_NAME:default:OS_USERNAME
- Password: your OpenStack user password

Then click `Connect`{.action}. Once you're logged in, you will have access to the tree-view of your folders and files.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> In case of connection difficulties, you can download the Cyberduck connection profile for OpenStack Swift (Keystone 3) and open it with Cyberduck.
> <br><br>Right-click <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>here and click "Save Link Target As"</a> to download the profile.
>

## Go further

[Cyberduck documentation](https://trac.cyberduck.io/wiki/help/en){.external}

[Getting started with the Swift API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
