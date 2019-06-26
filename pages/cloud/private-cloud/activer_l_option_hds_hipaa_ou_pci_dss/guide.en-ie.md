---
title: 'Adapting your Private Cloud for PCI DSS certifications'
slug: activate-pci-dss-option
excerpt: 'Find out how to adapt your Private Cloud for PCI DSS certifications'
section: 'OVH services and options'
---

**Last updated 26/02/2019**

## Objective

You can adapt your Private Cloud for PCI DSS certifications, which could be essential if you need to host [bank/payment card data](https://www.ovh.co.uk/private-cloud/payment-infrastructure/pci-dss.xml){.external} (PCI DSS). This adaptation is carried out in a few steps.

**Find out how to adapt your Private Cloud for PCI DSS certifications.**

## Requirements

> [!primary]
>
> These options can be activated as part of the hosting of health data, or even bank data. Currently, a private cloud cannot be both PCIDSS and HDS at the same time.
>

- a Private Cloud infrastructure in version 6.0 or higher
- access to the `Dedicated`{.action} section of the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager)

## Instructions

### Ensure that the security option is enabled.

In order to adapt your Private Cloud for this certification, one of the corresponding security options must be enabled. To verify this, log in to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager), and make sure you are in the “Dedicated” section. Click `Private Cloud`{.action} and select the service concerned. 

In the window that appears, make sure you are on the `General Information`{.action} tab. Then check the activation status of the security options in the "Security Options" section. **It should be noted that it is currently not possible to accumulate several security options for the same Private Cloud.**

![hdspcidsscompliance](images/HomeSDDCManager.PNG){.thumbnail}

If the desired security option is not enabled, activate it by clicking on the `...`{.action} button, then on `Activate`{.action}. Several requirements are essential.

- **[NSX](https://www.ovh.co.uk/private-cloud/options/nsx.xml){.external} and [vROps](https://www.ovh.co.uk/private-cloud/options/vrops.xml){.external} options must be installed**: from the `General Information`{.action} tab in the "Private Cloud Options" section, you can check the activation status of these options. If they are not enabled, activate them by clicking on the `...`{.action} button and then on `Activate`{.action}.

- **The vCenter access policy must be restricted**: from the "Security" tab, you can check the status of the access policy. If it is not restricted, make the change by clicking on the `vCenter Access Policy`{.action} button, then following the steps. Our documentation “[Introduction to the OVH Private Cloud Control Panel](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/)” can assist you in this process.

- **You must have at least one IP address authorised to log in to vCenter**: from the "Security" tab, make sure you have at least one authorised IP address. If necessary, use the `Add IPs`{.action} button. Our documentation “[Introduction to the OVH Private Cloud Control Panel](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/)” can assist you in this process.

To make sure you can always log in, we recommend that you have at least two authorised IP addresses. For reasons of accessibility, the latter must be fixed and not dynamic.

- **The "admin" user information is complete and they have the necessary permission**: from the "Users" tab, make sure for the "admin" user that the telephone number and email address are correctly filled in and that they have the “**token validator**” permission. If necessary, to change the user, click on the `...`{.action} button, then `Edit`{.action}. Our documentation “`Introduction to the OVH Private Cloud Control Panel`{.action}” can assist you in this process.

To make sure you can always log in to vCenter, we recommend that you have at least two users with the necessary information and permissions (with different email addresses and telephone number).

Once the activation steps have been completed, you will need to:

- validate the token sent by SMS to users with the "**token validator**" permission. This confirms that you will be able to receive these tokens, which are essential for validating operations
- complete the documents you will receive by email to finalise the contractual part 

In the meantime, we advise you to take your first steps with the secure interface by continuing reading this documentation. 

> [!primary]
>
> Consider that vSphere interface will not be accessible during activation of the security option.
>

### Start with the secure interface

After the security option activation, you will receive the token validation process by email. It details, among other things, how they work and what you need to do to be able to use them. 

As specified, as a security measure following the security option activation:

- all existing users on your Private Cloud are disabled
- you must change your users' passwords to reactivate them
- changing your users' passwords must now be done only from the secure interface. You will no longer be able to perform this manipulation from the OVH Control Panel. 

As a reminder, access to the interface will only be possible once the security option has been activated.

Then log in to the secure interface via the link provided in the email you received. This should look like `https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost`. Once logged in, you will be able to change the password of the “admin” user and then the password of additional users. 


## Go further

Join our community of users on <https://community.ovh.com/en/>.