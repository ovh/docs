---
title: L3 services SNAT configuration
excerpt: Find out how to configure the SNAT service on Public CLoud
slug: l3-services-snat-configuration
section: Configuration
order: 01
---

**Last updated 2nd November 2022**

## Objective

The purpose of this guide is to describe the Secure Network Address Translation (SNAT) service delivered by L3 services, i.e. the Distributed Virtual Router service for Public Cloud.

**The guide explains how to configure SNAT and presents use cases.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- The [Openstack Command Line Interface](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html){.external} tool installed on your working environment
- A [Public Cloud Floating IP](https://docs.ovh.com/ie/en/publiccloud/network-services/attaching-pci-floating-ip-to-instance/)

## Concepts

### What is the SNAT service?

SNAT is one of the services delivered by OpenStack DVR (Distributed Virtual Router) services on an OVHCloud Public Cloud service.

The main function of SNAT service is to enable outbound connections for VMs inside a private network.

### Why do I need the SNAT service?

It is safe to keep instances inside a private network if they do not need to expose services to external networks (Internet). However, such instances may need to access the Internet for upgrade purposes (or have other connectivity needs) that are initiated from inside the private network. For these purposes, Gateway in SNAT mode (outbound) is the best to use.

For example: You have an Ubuntu based VM linked to a private network only. Thanks to the SNAT service you can update your Ubuntu packages directly using `apt update`, since your VM is able to access external and official Ubuntu repository servers on the Internet.

### How to configure L3 services SNAT

To enable the SNAT service, you need to:

- Create a router.
- Set an external gateway for a router.
- Add the needed subnet to the router.

This allows any VM created within this private network to access the Internet.

This scenario is covered by the guide [Attaching a Floating IP to an instance](https://docs.ovh.com/ie/en/publiccloud/network-services/attaching-pci-floating-ip-to-instance/).

#### Target configuration architecture

![diagram](images/architecture.png){.thumbnail}

The goal of this exercise is to have a VM (**vmpriv**) with only a private network (**test-network**), and to configure our deployment in such a way that **vmpriv** has external access to the Internet.

To do so, we need to configure the private network (**test-network**) with a subnet (**test-subnet**), and create a router (**router1**) for the SNAT service. 

To perform the test, we need a "jump host" VM (**vm4fip**) through which we will connect to our VM (**vmpriv**). Since the jump host (**vm4fip**) will need access to external networks, we will attach a Floating IP to it.

To test the configuration, we will access the VM **vm4fip** from an external network via SSH, then connect from **vm4fip** to **vmpriv** using a private network and eventually check the Internet availability.

## Instructions

### Step 1

Create a VM with a Floating IP as explained in [this guide](https://docs.ovh.com/ie/en/publiccloud/network-services/attaching-pci-floating-ip-to-instance/).

### Step 2

Create a VM with a private network only. In our example, our VM is called **vmpriv**:

```bash
$ openstack server create --image 'Ubuntu 22.04' --flavor s1-8 --key-name test-key --net test-network vmpriv
$ openstack server show vmpriv -c name -c status -c addresses
+-----------+---------------------------+
| Field     | Value                     |
+-----------+---------------------------+
| addresses | test-network=192.168.0.26 |
| name      | vmpriv                    |
| status    | ACTIVE                    |
+-----------+---------------------------+
```

### Step 3

Copy your SSH private key to your previously created VM with a Floating IP (**vm4fip**):

```bash
$ scp -i ./test-key.rsa ./test-key.rsa ubuntu@169.254.10.250:~/
test-key.rsa
$
```

### Step 4

Log into your **vm4fip** (*169.254.10.250* is the Floating IP):

```bash
ssh ubuntu@169.254.10.250 -i ./test-key.rsa
The authenticity of host 169.254.10.250 (169.254.10.250) can´t be established.
ED25519 key fingerprint is SHA256:ordRAjue1dEp/yJ2ve83MW+ItPznuteEhqAkoG3vEi8.
<CUT>
ubuntu@vm4fip:~$
```

### Step 5

Check if your VM (**vmpriv**) is available from **vm4fip** (*192.168.0.26* is a private IP address attached to **vmpriv**):

```bash
ubuntu@vm4fip:~$ ping 192.168.0.26
PING 192.168.0.26 (192.168.0.26) 56(84) bytes of data.
64 bytes from 192.168.0.26: icmp_seq=1 ttl=64 time=4.00 ms
64 bytes from 192.168.0.26: icmp_seq=2 ttl=64 time=0.549 ms
^C
--- 192.168.0.26 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.549/2.275/4.001/1.726 ms
ubuntu@vm4fip:~$
```

### Step 6 

Connect from **vm4fip** to **vmpriv** via SSH:

```bash
ubuntu@vm4fip:~$ ssh ubuntu@192.168.0.26 -i ./test-key.rsa
The authenticity of host 192.168.0.26 (192.168.0.26) can´t be established.
<CUT>

The list of available updates is more than a week old.
To check for new updates run: sudo apt update

ubuntu@vmpriv:~$
```

### Step 7

Verify that the VM **vmpriv** has an external access to the Internet:

```bash
ubuntu@vmpriv:~$ sudo resolvectl dns ens3 1.1.1.1
ubuntu@vmpriv:~$ ping ping.ovh.net -c 1
PING ping.ovh.net (198.27.92.1) 56(84) bytes of data.
64 bytes from www.ovh.com (198.27.92.1): icmp_seq=1 ttl=56 time=0.854 ms

--- ping.ovh.net ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.854/0.854/0.854/0.000 ms
ubuntu@vmpriv:~$
```

The result shows that VM **vmpriv** has external access to the Internet while being connected to a private network.

## Go further

Join our community of users on <https://community.ovh.com/en/>.