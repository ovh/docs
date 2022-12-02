---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: 'General information'
order: 01
---

**Last updated 1st December 2022**

## Public Cloud FAQ

### How do I connect to a Public Cloud instance?

You can log in using an SSH key set that you need to configure when you create your Public Cloud instance.

Please read our guide on [Creating and connecting to your first Public Cloud instance](https://docs.ovh.com/ie/en/public-cloud/public-cloud-first-steps/).

### I lost or I want to change my SSH key, how to proceed ?

If you can no longer log in after losing your private key, you will need to change your instance's public key by switching it to rescue mode.

Please read our guide on [Replacing your lost SSH key pair](https://docs.ovh.com/ie/en/public-cloud/replacing_your_lost_ssh_key_pair/).

### What are the backup options for my instance?

You can create a backup of an instance at any time via the OVHcloud Control Panel. You can use a backup to restore your instance to an old configuration, or recreate it.

Please read our guide on [Backing up an instance](https://docs.ovh.com/ie/en/public-cloud/back-up-instance/).

### How do I create and manage OpenStack users?  

To use the Horizon or OpenStack APIs, you will need to create an OpenStack user. You can create an unlimited number of OpenStack users.

Please read our guide on [Creating and deleting an OpenStack user](https://docs.ovh.com/ie/en/public-cloud/creation-and-deletion-of-openstack-user/).

### How does Public Cloud billing work?

Between day 1 and 5 of each month, you will be billed for any resources used during the previous month. With monthly billing, you are invoiced for the coming month, along with any surcharges from the previous month (e.g. instances, object storage). If you decide to shift to a monthly rate for a resource, a prorata temporis will be immediately charged for the current month.
Please note that you will be billed for instances until you delete them in the OVHcloud Control Panel.
You can track your resource usage with projections based on your usage history. You also have the option of choosing a separate billing method for each Public Cloud project within your organisation.

To switch from one billing method to another, please refer to our guide on [Switching from hourly to monthly billing](https://docs.ovh.com/ie/en/public-cloud/change-public-cloud-billing-rate/).

### How do I add or remove instances, if my resource requirements change?

Any instance can be resized to a more powerful one from the same range in the Control Panel by clicking `edit`{.action} on the instance page. You can also downscale it to a lower model, if it was launched with the flex option. This option imposes a disk size of 50 GB for all models and allows for both-way resizing.
In all cases, resizing an instance involves rebooting it.

### Are Public Cloud instances compatible with cloud-init?

Yes. Cloud images provided by OVHcloud include cloud-init scripts that allow you to customise instances when you launch them. The infrastructure delivers instance customisation information via a metadata server, which cloud-init contacts directly.

### Can I back up my Public Cloud servers?

You can create backup instances of your servers at any time, with no limitations. These backups are stored and invoiced in the same way as the images in "Private Image". With the OpenStack APIs, you can download them from the OVHcloud infrastructure, or from other projects.

Please read our guide on [Backing up an instance](https://docs.ovh.com/ie/en/public-cloud/back-up-instance/).

### Can I resize a volume dynamically, while continuing to write on the disk?

No. You must detach a volume before resizing it.

### How many additional volumes can I attach to each instance?

You can attach up to 25 additional volumes per instance.

### How are my servers secured?

OVHcloud protects its entire infrastructure with its exclusive anti-DDoS solution. In addition, you can add the OpenStack security groups. This firewall equivalent is managed directly through the OpenStack infrastructure, above your instances.

Please refer to our guide on [Configuring a security group](https://docs.ovh.com/ie/en/public-cloud/configure-security-group-horizon/) .

These protections, combined with others that can be launched on your servers, will help you maximise the reliability of your solutions.

### How can I create a private network between my servers?

The OVHcloud Public Cloud includes a software-defined network (SDN) solution. You can use it to dynamically create private networks, then connect them to instances via the OVHcloud Control Panel or the API.
These private networks are powered by OVHcloud's vRack technology, which is common to the company's other services, such as Private Cloud or dedicated servers. This way, you can connect all of your infrastructure elements to OVHcloud, in an isolated, secure way.

Please read our guide on [Configuring vRack for Public Cloud](https://docs.ovh.com/ie/en/publiccloud/network-services/public-cloud-vrack/).

By default, the private network uses Openstack native network protections. This includes various mechanisms such as IP spoofing protection.
On the instance side, this can result in blocking network packets depending on your usage (pfSense, router, CARP protocol...).

Depending on your needs, you will need to disable the `Port Security` feature on the port or private network.

Please refer to our guide on [Managing firewall rules and port security on networks using OpenStack CLI](https://docs.ovh.com/ie/en/public-cloud/firewall_security_pci/).

You can also find all the details in the [OpenStack documentation](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) or on [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

### Can I change the public IP of my instance?

Public IP addresses are automatically assigned to instances, and therefore cannot be modified. To control an instance's public IP address, we recommend using an Additional IP. This way, regardless of the public address assigned to the instance automatically, you can add one or more Additional IPs to your instance.

For more information, please refer to this guide: [Buying an Additional IP](https://docs.ovh.com/ie/en/publiccloud/network-services/buy-additional-ip/).

### How to check if my instance is affected by MDS bug?

The [MDS bug](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) vulnerability can be checked with the following command:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

If the result is `Vulnerable`, dont worry, the hypervisor hosting your instance is protecting you.

Anyway, if you want to mitigate this inside your instance as well, you should hard reboot your instance, either doing it from the [OVHcloud Control Panel](https://docs.ovh.com/ie/en/public-cloud/get-started-with-a-public-cloud-instance/#restarting-the-instance), or with a command like this:

```bash
openstack server reboot --hard $serverID
```

### My instance is reported beeing vulnerable against SSBD bug, what should I do?

The [SSBD bug](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) vulnerability can be checked with the following command:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Despite the fact that the result is `Vulnerable`, your instance is well protected by the underlying hypervisor.

You can't mitigate the issue from your instance because we are not providing the SSBD flag to your instance.

We can not provide this flag because it may bring some instabilities on some operating systems.

### Is nested virtualization supported?

Yes and no.

Yes because it's enabled (we provide vmx flag to your instance), which means you can start any virtualization technology that relies on this in your instance (such as KVM, QEMU, VirtualBox, Xen, HyperV, etc.).

No because as soon we will live-migrate your instance (and this can happen any time, based on our hypervisor management), then your kernel may panic.

See the [linux-kvm limitations](https://www.linux-kvm.org/page/Nested_Guests#Limitations) for more information.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
