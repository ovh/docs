---
title: 'Entender el mensaje de error “Controller VM deleted” (EN)'
excerpt: 'Find out what the “Controller VM deleted” error message means'
updated: 2021-11-26
---

## Objective

In your NSX interface, you may encounter the *Controller VM deleted* message.

**This guide will explain what this message means.**

## Requirements

- being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/) to receive login credentials
- a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](/links/manager))
- a deployed [NSX Edge Services Gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_deploying_edge_gateway)

## Instructions

In your [NSX interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_access-interface), under the `Installation and Upgrade`{.action} menu, in the `Management`{.action} tab and `NSX Controller Nodes`{.action} section, the *Controller VM deleted* error message may appear under the "Controller Node" summary.

![Controller VM deleted error](images/en01control.png)

This is because OVHcloud does not host controllers on your infrastructure. They are hosted on a separate internal management infrastructure, so that they do not consume any of your infrastructure's resources.

Under the standard configuration for NSX, the controllers are expected to be in the same datacentre as your virtual machines, causing this error message. This message will have no effect on your machine's regular functionality.

You just need to make sure that the status of the controllers in your NSX interface is set to `Connected`. If it is, your machine is working.

> [!warning]
>
> Resolving this error by clicking on `Resolve`{.action} will delete the controllers from your infrastructure, which will mean you can no longer use NSX or the infrastructure’s network properly. We would therefore advise against doing this. OVHcloud is still responsible for the administration of the NSX controllers.
> 

This also explains the following alert on the NSX dashboard:

![Alert on NSX interface](images/en02control.png)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
