---
title: 'Checking and blocking the L1TF vulnerability'
slug: check-block-l1tf-vulnerability
excerpt: 'Find out how to block the L1TF (L1 Terminal Fault) vulnerability'
section: Security
---

**Last updated 26th February 2019**

## Objective

Following the public release of the L1TF vulnerability ("L1 Terminal Fault" or "Foreshadow"), various procedures and patches were published to minimise exposure to this risk.

**This guide will explain how you can block this vulnerability.**

## Requirements

- a user account with vSphere access 
- hyper-threading used on your virtual machines

## Instructions

As a reminder:

|Variant|Vulnerable|Fixed by the patch?|
|:---|:---:|:---:|
|Variant1: L1 Terminal Fault - VMM (CVE-2018-3646)|YES|NO (but mitigated)|
|Variant2: L1 Terminal Fault - OS (CVE-2018-3620)|NO||
|Variant3: L1 Terminal Fault - SGX (CVE-2018-3615)|NO||

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [does not affect VMware hypervisors](https://kb.vmware.com/s/article/55807) and [requires local access to vCenter/VCSA](https://kb.vmware.com/s/article/52312)
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) does not affect VMware hypervisors: [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/54913)
> 

For **Private Cloud** solutions, only SDDC packs are affected by this vulnerability.

For further information, you can refer to our [news article](https://www.ovh.co.uk/news/articles/al479.ovh-l1-terminal-fault-l1tf-foreshadow-disclosure){.external-link}.

## Mitigation process

> [!primary]
>
>  It is important to understand that the actions detailed below do not fix the vulnerability.
>
> The actions describe how to disable hyper-threading on your ESXi hosts. But since the L1TF vulnerability requires hyper-threading to work, disabling it protects your infrastructure from being exploited by this vulnerability.
>

The mitigation process is described in this VMware knowledge base: [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

This procedure is divided into three distinct steps.

### Step 1: Update.

The vCenter update is managed by OVH, however, it is your responsibility to install the patch for ESXi hosts. This is available in the [the Update Manager](https://docs.ovh.com/gb/en/private-cloud/use_vmware_update_manager/){.external-link}.

You will find the list of patches for ESXi hosts in [this document](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

After the hosts have been updated, the following alert message will appear in your host summary:

![](images/warningMsg.png){.thumbnail}

### Step 2: Assess environment.

After the ESXi hosts have been updated, the patch has not yet been applied.

It is important to be aware of the potential problems listed in the [knowledge base](https://kb.vmware.com/s/article/55806){.external-link} mentioned above, as well as the performance loss observed in this other knowledge base: [https://kb.vmware.com/s/article/55767](https://kb.vmware.com/s/article/55767){.external-link}.

### Step 3: Enable.

Once you have read about these problems, you can enable the setting that is used to disable hyper-threading, by going to the **Advanced System Settings**.

![](images/enableMitigation.png){.thumbnail}

A filter is available in the top right-hand corner of the window.

You will need to do this for each host.

To find out more, you can go to step 3 in the ‘Resolution’ section of this [VMware knowledge base](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> If you do not want to disable hyper-threading on these elements, you can remove the alert message by following this [knowledge base](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![](images/deleteWarning.png){.thumbnail}
> OVH does not recommend doing this, and cannot be held responsible for this risk or any resulting consequences.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.