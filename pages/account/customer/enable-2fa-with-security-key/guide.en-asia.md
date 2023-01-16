---
title: 'Enabling two-factor authentication by security key'
slug: enable-two-factor-authentication-via-security-key
excerpt: 'Find out how to secure your OVHcloud customer account by enabling two-factor authentication via U2F security key'
section: Security
hidden: true
---

**Last updated 8th July 2022**

## Objective

Two-factor authentication via Universal Second Factor (U2F) is one of the methods offered by OVHcloud to help you secure access to your account. This security technique via USB key is hosted by the FIDO Alliance, and is becoming increasingly popular for two-factor authentication in many domains.

**This guide will show you how to enable two-factor authentication via U2F security key, and understand how to use it in future when you log in to the OVHcloud Control Panel.**

## Requirements

- knowledge of the [two-factor authentication methods offered by OVHcloud](https://docs.ovh.com/asia/en/customer/secure-account-with-2FA/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}
- a U2F security key
- a USB port on your computer

## Instructions

> [!warning]
> **Addition of a new U2F key on recent versions of Chrome/Chromium**
>
> Adding a new U2F key is currently no longer possible on recent versions of the Chrome browser (starting with Chrome v98) and its derivatives such as Chromium.<br>
> The use of a U2F key already added and functional is always possible on these recent versions of the browser, only the addition of a new U2F key is impossible.
>
> Our teams [are working to resolve this issue](https://customer-service.status-ovhcloud.com/incidents/wl6txzgvrym8). Pending a final resolution, we invite you to follow one of these two workaround methods:
>
> - Use another browser (such as Firefox) to add your new U2F key, then use your regular Chrome/Chromium browser to log in to the OVHcloud Control Panel as usual.
> - Manually re-enable U2F support in your Chrome/Chromium browser. To do this, as in the image below, copy this value `chrome://flags/#u2f-security-key-api` into the browser's address bar, select `Enabled` from the right-hand drop-down menu and restart your browser.
>
>![2FA securitykey - Chrome](images/chrome-u2f-support.png){.thumbnail}

### Step 1: Enable two-factor authentication.

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, click your name in the top right-hand corner (1), then click your initials (2). Next, click `Security`{.action} (3) and `Enable two-factor authentication`{.action} (4).

![2FA securitykey](images/hub2FA.png){.thumbnail}

### Step 2: Select the security key method.

Select the security key method, then confirm.

![2FA securitykey](images/2fakeyeditca.png){.thumbnail}

### Step 3: Confirm two-factor authentication.

Plug in your security key when prompted to do so. If the key has a button, press it. 

![2FA securitykey](images/2fakey2.png){.thumbnail}

Once the key has been recognised, you can also add a description. This may be useful for identifying people who are likely to use this identification method on your account.

![2FA securitykey](images/2fakey3.png){.thumbnail}

### Step 4: Save the emergency security codes.

When you first add a two-factor authentication security method, you will be sent emergency codes. Please ensure that you store these codes in a safe place. We advise saving them in a password manager.

![2FA securitykey](images/2facodes.png){.thumbnail}

You can delete or regenerate them via the OVHcloud Control Panel.

![2FA securitykey](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> As a reminder, please note that it is important to save these emergency codes and ensure that they are valid. If one of the security methods you have selected becomes unavailable (theft or loss of your mobile phone or security key), access to your account may be blocked.
> 
> 

### Step 5: Log in to the OVHcloud Control Panel via two-factor authentication.

Once you have enabled two-factor authentication, the login screen will offer you one of your security methods. If you would like to use another method, click `Try another method`{.action}.

![2FA securitykey](images/mobile_auth.png){.thumbnail}

All of the choices you have enabled will then appear.

![2FA securitykey](images/backupcode_auth.png){.thumbnail}

## Go further

Please visit the official [FIDO Alliance](https://fidoalliance.org/){.external} website for more information on U2F.

Join our community of users on <https://community.ovh.com/en/>.
