---
title: 'Securing your OVHcloud account with two-factor authentication'
slug: secure-account-with-2FA
excerpt: 'Find out how to improve security for your OVHcloud account by enabling two-factor authentication'
section: Security
---

**Last updated 10th February 2020**

## Objective

OVHcloud offers tools to optimise security for your account and services.
You can enable two-factor authentication (2FA). This is linked to your username-password couple, and you can use it via a device: e.g. a smartphone, tablet, or security key. 

**Find out more about the methods we offer, and how to enable them.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- a smartphone (for the SMS method), a smartphone or tablet (for the mobile application method), or a Universal Second Factor (U2F) security key
- an understanding of the [password management recommendations for accessing your account](https://docs.ovh.com/gb/en/customer/manage-password/)

## Instructions

You can enable one or more two-factor authentication methods to secure and control access to the OVHcloud Control Panel.
We offer three different methods:

- **via SMS**. Enter your mobile phone number. You will be sent a one-time code via SMS each time you try to log in to your OVHcloud account. The main advantage of this method is that the code you use is sent to a device separate to your computer. If your computer’s security is compromised by malware, for example, your account will remain secure. However, it is important to keep in mind that you need sufficient network coverage to receive SMS messages.

- **via an OTP mobile application**. Install an OTP mobile application on to your Android or iOS smartphone or tablet. Next, link the application to your OVHcloud account. Each time you try to log in to your account, the application will generate a one-time code valid for a short time period.
Once you have linked the application to your account, your device no longer needs an internet connection for the codes to be generated.


- **via a U2F security key**. This method involves plugging a U2F USB security key into your computer each time you log in to your OVHcloud account. When you plug in the key, the authentication process takes place automatically. This method offers a higher level of security, as it is based on independent security hardware that is completely separate from your computer, smartphone or tablet. As a result, it is less exposed to the risk of hacking.

### Step 1: Enable your first two-factor authentication method.

- [Enabling two-factor authentication via SMS](https://docs.ovh.com/gb/en/customer/enable-two-factor-authentication-via-sms/)
- [Enabling two-factor authentication via mobile application](https://docs.ovh.com/gb/en/customer/enable-two-factor-authentication-via-mobile-application/)
- [Enabling two-factor authentication via security key](https://docs.ovh.com/gb/en/customer/enable-two-factor-authentication-via-security-key/)

Once you have added your first method, you can also add one or two other methods, so that you have more choice in how you log in to your account.

### Step 2: Save the emergency security codes.

When you add two-factor authentication for the first time, you are sent emergency codes. Please keep them saved somewhere safe. We recommend saving them in a password manager.

![2FA](images/2facodes.png){.thumbnail}

You can delete or regenerate them via the OVHcloud Control Panel:

![2FA](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> As a reminder, please note that it is important to save these emergency codes and ensure that they are valid. If one of the security methods you have selected becomes unavailable (theft or loss of your mobile phone or security key), access to your account may be blocked.
> 
> 
> 


### Step 3: Log in to the OVHcloud Control Panel with two-factor authentication.

Once you have enabled two-factor authentication, the login screen will show the security method selected. If you would like to use another method, click `Try another method`{.action}.

![2FA](images/2fasmsloginedit.png){.thumbnail}

All of the methods you have enabled will then appear:

![2FA](images/2faloginchoice.png){.thumbnail}

### What do I do if I lose one of my devices, or if it stops working?

If you have lost one of your devices (mobile phone/smartphone/security key) or it stops working, we advise using one of the other two-factor authentication methods enabled on your account.

You can also use one of the security codes provided to you. 


### Remove a device linked to two-factor authentication.

> [!warning]
>
> Removing a device does not disable two-factor authentication. 
> 
> To avoid the risk of blocking access to your account, please check that you can use one of the following login methods before removing a device:
> 
> - via a working device
> 
> - via another working method of two-factor authentication 
> 
> - via valid security codes
> 

To remove a device, please log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. Click on your name in the top right-hand corner (first step on the image below), then `My account`{.action} (second step). 

![2FA](images/2fadevicedeletion1.png){.thumbnail}

Next, click `Security`{.action} (the first step on the image below), then click on the `...`{.action} icon (second step) to the right of the device you want to delete, and finally, click `Remove`{.action} (third step).

![2FA](images/2fadevicedeletion2.png){.thumbnail}


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).