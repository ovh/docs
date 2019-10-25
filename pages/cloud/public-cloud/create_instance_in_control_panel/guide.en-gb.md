---
title: 'Create an instance in your OVH customer account'
slug: create_an_instance_in_your_ovh_customer_account
excerpt: 'This guide will show you how to create an instance in your Public Cloud account.'
legacy_guide_number: g1775
section: Quick start
---

**Last updated 25th October 2019**

## Objective

The [Public Cloud](https://www.ovh.co.uk/public-cloud/instances/){.external} lets you create instances (i.e. virtual servers) quickly and easily, in just a few clicks.

**This guide will show you how to create an instance in your Public Cloud account.**

## Requirements

* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
* a [Public Cloud](https://www.ovh.co.uk/public-cloud/instances/){.external} project created in your OVH account
* an SSH key created in your OVH customer account

### Deploy a Public Cloud Instance

In order to deploy a public cloud instance, log in to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. Click `Public Cloud`{.action} in the top-left corner of the page. Then, on the following screen, click the arrow button next to your default project name in the top-left corner of the screen. Now select the project on which you would like to create a new instance.

![select_project](images/select_project.png){.thumbnail}

Once you have selected the correct project, click the `Instances`{.action} button under the "Compute" section on the left-hand sidebar.

![create_instance](images/create_instance.png){.thumbnail}

Next, click the `Create an instance`{.action} button. You will be taken to the following menu where you can select the instance you would like to create.

![create_instance1](images/create_instance1.png){.thumbnail}

The table below gives a brief explanation of the differences between the types of instances:

| Server Type | Guaranteed Resources | Usage |
| :---         |     :---:      |          ---: |
| General Use   | ✓     | Development servers, web or business applications    |
| CPU     | ✓       | Video encoding or other high-performance computing      |
| RAM   | ✓     | Databases, analysis, and in-memory calculations    |
| Shares Resources    | -       | Testing and development environments      |

>
**Note** : You will initially be limited to 20 instances, 20 vCores and 40 GB of RAM across any given project. An increase in the resource limit may be requested by [submitting a ticket](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external} to our Customer Support team.
>

Follow the menu to select the region in which you would like your public cloud instance to be located. The third option is where you select your OS.

>
**Note**: If a Windows OS is selected, then a license will automatically be provisioned and you will be billed monthly for it.
>

![install](images/os_install.png){.thumbnail}

>
**Note**: Public cloud instances running a Unix-based OS require an SSH key to be added to the server. For more information on generating an SSH key, please check out our [Create SSH Keys](https://docs.ovh.com/gb/en/public-cloud/create-ssh-keys/){.external} article.
>

The fourth part of the menu will allow you to choose the number of instances to create, name your instance, and add a private network or post-installation script should you choose to do so.

![add an instance](images/configure_instance.png){.thumbnail}

Finally, choose whether you would like to be billed monthly or hourly.

>
`Warning`{.action}: If you choose to be billed hourly, you will continue to be billed as long as the instance exists. It does not matter if the instance is currently in use or not.
>

Once you have confirmed that all of the information you have entered is correct, click the `Create an instance`{.action} button to finish creating your new instance. Your instance may take a few minutes to provision.

## Conclusion

Having read this article, you should be able to provision an instance on your public cloud project from the OVHcloud Manager. For further reading about what you can do with your instance, please check out our articles on the [Public Cloud Services](https://docs.ovh.com/gb/en/public-cloud/){.external} support page.

## Go further

[Getting started with Public Cloud](https://docs.ovh.com/gb/en/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/){.external}

Join our community of users on <https://community.ovh.com/en/>.
