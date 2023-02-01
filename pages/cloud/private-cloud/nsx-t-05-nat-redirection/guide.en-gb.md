---
title: Port redirection with NAT on NSX-T
slug: nsx-t-nat-redirection
excerpt: How to redirect an incoming port from a public address to a virtual machine
section: NSX-T
order: 05
---

**Last updated 01st February 2023**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

**Show how to redirect an incoming port from a public address to a virtual machine.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Prérequis

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Having **NSX-T** deployed with one segment configured in your NSX-T configuration, you can use this guide [Segment management in NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-segment-management).

## Instructions

We will see how to redirect a port access request from the public address used for SNAT (Source Network Address Translation) to an INTERNET-connected virtual machine via a segment with DNAT (Destination Network Address Translation).

In our example, we will redirect requests to the public address on port 2222 to port 22 of a linux virtual machine connected to the **ov1-segment** segment that has the IP address 192.168.1.1 as shown below in the vSphere interface. Access will only be allowed from one remote public IP address.s

![Display VM parameter](images/00-display-vm-parameter01.png){.thumbnail}

> [Primary]
>  In the ALPHA version of NSX-T the public addresses provided use a mask at /29 which allows the use of 6 public addresses, some are used for the operation of NSX-T. There is only one address left that can be used for port redirections. In future versions the mask will be /28 which will contain 14 addresses in total.

In the NSX-T interface, click on `Networking`{.action} in the top left-hand corner.

![01 NAT redirection 01](images/01-nat-redirection01.png){.thumbnail}

Click on `NAT`{.action} in the top left-hand corner of the vertical menu bar.

![01 NAT redirection 02](images/01-nat-redirection02.png){.thumbnail}

Note the IP address of the SNAT rule by default in the **Translated IP Port** column, we will reuse it in our redirection rule. Then click on `ADD NAT RULE`{.action} on the left.

![01 NAT redirection 03](images/01-nat-redirection03.png){.thumbnail}

Fill in this information :

* **Name** : Type `to-ssh-linux'.
* **Action** : Choose `DNAT`.
* **Source IP** : Enter the remote IP address that will have access to this port on the public address.
* **Destination IP** : Enter the `public IP` address you have written down from the existing rule.
* **Destination Port** : Port used when accessing public address, here `2222'.
* **Firewall** : Select Match internal Address.
* **Translated IP** : Enter the private IP address of the LINUX virtual machine '192.168.1.1'.

Then click `Set`{.action} under the **Apply To** column.

![01 NAT redirection 04](images/01-nat-redirection04.png){.thumbnail}

Select both `T0-interface`{.action} and click `APPLY`{.action}.

![01 NAT redirection 05](images/01-nat-redirection05.png){.thumbnail}

Click on `the three small vertical dots`{.action} to the right of **Select Service** and choose `Create New`{.action}.

![01 NAT redirection 06](images/01-nat-redirection06.png){.thumbnail}

Type `NAT22`{.action} under the **Name** column and click `Set`{.action}.

![01 NAT redirection 07](images/01-nat-redirection07.png){.thumbnail}

Click `ADD SERVICE ENTRY`{.action}.

![01 NAT redirection 08](images/01-nat-redirection08.png){.thumbnail}

Fill in these values :

 **Name** : type `SSH22`.
* **Action** : choose `TCP`.
* **Destination Ports** : Enter `22`.

Then click `APPLY`{.action}.

![01 NAT redirection 09](images/01-nat-redirection09.png){.thumbnail}

Click `SAVE`{.action}.

![01 NAT redirection 10](images/01-nat-redirection10.png){.thumbnail}

Click `SAVE`{.action} to activate the rule.

![01 NAT redirection 11](images/01-nat-redirection11.png){.thumbnail}

Redirection is active.

![01 NAT redirection 12](images/01-nat-redirection12.png){.thumbnail}

Run this command from a remote site to test the redirection :

```bash
ssh root@nsxt-publicaddress -p 2222
```


## Go further <a name="gofurther"></a>

[Getting started with NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-first-steps/)

[Segment management in NSX-T](https://docs.ovh.com/gb/en/nsx-t-segment-management/)

Join our community of users on <https://community.ovh.com/en/>.

