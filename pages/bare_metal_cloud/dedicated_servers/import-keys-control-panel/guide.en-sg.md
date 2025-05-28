---
title: How to store public authentication keys in the OVHcloud Control Panel
excerpt: Find out how to import public SSH keys into your OVHcloud Control Panel
updated: 2024-12-04
---

## Objective

Key pairs are used to authenticate SSH connections between hosts, for example a desktop client and a remote server. When reinstalling a dedicated server or a VPS from the OVHcloud Control Panel, you have the option to add a public key to the operating system. Storing public keys in your Control Panel makes this process more convenient.

**This guide explains how to store your public authentication keys in the OVHcloud Control Panel.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) or a [VPS](/links/bare-metal/vps) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

> [!primary]
>
> For information about using authentication keys with [Public Cloud](/links/public-cloud/public-cloud) services, refer to our dedicated guide:
>
> [How to create SSH keys with OpenSSH for Public Cloud instances](/pages/public_cloud/compute/creating-ssh-keys-pci)
>

## Instructions

If you have not created a key pair yet, consult our guides first:

- [How to create and use keys for SSH authentication](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [How to create and use keys for SSH authentication with PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Log in to the [OVHcloud Control Panel](/links/manager), click on the account name at the top right and open `Products and services`{.action}.

![products and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}

In the Control Panel section `My services`, click `SSH keys`{.action}.

![control panel ssh keys](images/importkey1.png){.thumbnail}

Click the button `Add an SSH key`{.action} and select `Dedicated`{.action} from the menu.

![control panel ssh keys](images/importkey2.png){.thumbnail}

In the popup window, enter a label for the key in the first field.  
Copy the entire public key string and paste it into the second field.

![control panel ssh keys](images/importkey3.png){.thumbnail}

Click the button `Confirm`{.action}. 

The key will now be available when you reinstall a dedicated server or a VPS in the OVHcloud Control Panel.

Consult our "Getting started" guides for further details on this topic:

- [Dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Dedicated server of the **Eco** product line](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

## Go further

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).