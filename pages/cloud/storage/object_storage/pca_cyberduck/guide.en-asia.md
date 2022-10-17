---
title: Object Storage Swift - Managing your archives with a Swift client (Cyberduck)
slug: pca/cyberduck
excerpt: This guide shows you how to configure Cyberduck to manage your Public Cloud Archives.
section: OpenStack Swift Archive Storage Class Specifics
order: 080
---

**Last updated 18th June 2021**

## Objective

Object Storage is a storage solution that is managed primarily through the OpenStack API. However, you might not be familiar with managing storage space via command line.

There are graphical interface solutions that seamlessly make use of the OpenStack APIs. Cyberduck is a Swift client.

Other interfaces can be found on the Internet and configuration is similar to the configuration explained in this guide.

**This guide will explain how to configure Cyberduck to manage your Object Storage using a GUI based on Openstack APIs.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/asia/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- [Cyberduck](https://cyberduck.io/) installed on your computer.
- your username (*OS_USERNAME*) and project credentials (*OS_PROJECT_NAME* or *OS_TENANT_NAME*). Retrieve them by downloading the OpenRC file from the [Users and Roles](https://docs.ovh.com/asia/en/public-cloud/set-openstack-environment-variables/#step-1-retrieve-the-variables) menu in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia).
- your OpenStack user password.

In case you have forgotten your OpenStack user password, you can change it by following [this guide](https://docs.ovh.com/asia/en/public-cloud/change-openstack-user-password/).

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

[Getting started with the Swift API](https://docs.ovh.com/asia/en/public-cloud/getting_started_with_the_swift_api/)

Join our community of users on <https://community.ovh.com/en/>.
