---
title: Using the KVM for the VPS
excerpt: How to use the KVM for the VPS
slug: use-kvm-for-vps
section: Getting started
---

**Last updated 15 June 2019**

## Objective

The KVM console allows you to connect directly to your VPS without the need to use external software such as Terminal or Putty. This console is accessible via your Control Panel or the APIs.  

**This guide explains both of these access methods.**

## Requirements

- You must be logged in to your [Control Panel](https://www.ovh.com/auth/?action=gotomanager).

## Instructions

### Connecting to the KVM via the Control Panel

Once you have logged in to your [Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, you simply go to the `Server`{.action} section, then to `VPS`{.action} in the left-hand column to select your VPS. In this section, you will you will see a button labelled `KVM`{.action}:

![Click on the KVM button](images/activating_kvm_manager.png){.thumbnail}

The KVM screen will now open, which is a small window with a connection to your server. Since the window is so small it will be quite difficult to navigate around your server's interface using the scrollbars, so it's recommended that you open the KVM in a new, full-screen window using the "Open in a new window" button in the bottom right corner of the popup. Then all you have to do is connect:

> [!primary]
>
> If you have issues with double typing, the issue may originate due to auto screen adjustment. We recommend opening the KVM in a new window using the "Open in a new window" button.
> Should you still have issues with the screen, we recommend removing from the URL the "auto" part. If the URL is (the link for you may be different, this is only illustrating which part of the URL needs to be removed) https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx then it should become https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx
>

![Connecting to the KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> The keyboard may have a different layout to your own. Be sure to check it, since the keyboard could be AZERTY instead of QWERTY, for example.
>

### Connecting to the KVM via the APIs

You may sometimes experience issues connecting to the KVM via your Control Panel. In this case, you can use the API solution. First, log in via [OVH API](https://api.ovh.com/).

#### For 2014 VPS

If you have a 2014 VPS, you may encounter *error 1006* so going through the API could resolve this. Here is the API to use:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>
> API call parameters:
>
>> serviceName *
>>> ID of your VPS which looks something like vpsxxxxx.ovh.net
>> protocol
>>> VNC

Despite the command going through on the API, the connection might take one or two minutes – the time it takes for the port to be successfully opened.

We recommend using either of the following clients:
- [UltraVnc](https://www.uvnc.com/downloads/ultravnc.html){.external}
- [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/){.external}

Use the details provided by the API call to connect to the VPS remotely using either of the above-mentioned software clients.

#### For 2016 VPS

If problems arise with the KVM, here is the recommended API for accessing the KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>
> API call parameters:
>
>> serviceName *
>>> ID of your VPS which looks something like vpsxxxxx.ovh.net
>

> [!primary]
>
> Should you still have issues with the screen, we recommend removing from the URL the "auto" part. If the URL is (the link for you may be different, this is only illustrating which part of the URL needs to be removed) https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx then it should become https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
