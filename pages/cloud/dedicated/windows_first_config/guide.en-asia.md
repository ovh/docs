---
title: 'Configuring a new Windows Server installation'
slug: windows-first-config-dedicated
routes:
    canonical: 'https://docs.ovh.com/asia/en/vps/windows-first-config/'
excerpt: 'Find out how to enable Remote Desktop and ICMP'
section: 'Getting started'
updated: 2022-01-18
---

**Last updated 18th January 2022**

## Objective

After a fresh installation of a Windows Server operating system on a Dedicated Server, remote access and the ICMP (Internet Control Message Protocol) response can sometimes be disabled.

**This guide explains how to set up Windows in order to re-enable ICMP and allow connections via Remote Desktop Protocol.**

## Requirements

- A Windows [Dedicated Server](https://www.ovhcloud.com/asia/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## Instructions

### Step 1: Log in with KVM

To access the KVM console of your Dedicated Server, please follow the [KVM guide](../use-ipmi-dedicated-servers/#access-via-the-kvm-tool-from-a-web-browser-only-for-the-latest-servers).

### Step 2: Finish the Windows setup

When the KVM session is established, the initial setup screens will be displayed. Here you need to configure your **country/region**, the **Windows language**, and your **keyboard layout**. Once you have done this, click `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

In the second screen, enter a password for your Administrator account and confirm it, then click `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows will apply your settings and then display the Login screen. Click the `Send CtrlAltDel`{.action} button in the top right corner to sign in.

![KVM](images/setup-05.png){.thumbnail}

Enter the password you have previously created for your Administrator account and click on the Arrow button.

![KVM](images/setup-06.png){.thumbnail}

This completes the initial setup. Once logged in, you need to change the appropriate Windows Firewall settings.

### Step 3: Modify Windows Firewall

Open the `Administrative Tools`{.action} of the `System and Security`{.action} control panel and double-click on `Windows Firewall with Advanced Security`{.action}.

![Admin](images/windows4.png){.thumbnail}

Here you can enable the respective `ICMP` and `Remote Desktop` rules (right-click on the rule and select `Enable rule`{.action} in the context menu).

![Enabled](images/windows5.png){.thumbnail}

Your server should now be responding to requests using these protocols.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
