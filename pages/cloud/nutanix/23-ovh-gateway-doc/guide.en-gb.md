---
title: OVHgateway documentation
excerpt: Find out how the OVHGateway works
updated: 2022-08-07
---

## Objective

“OVHgateway” is the name of the outgoing point of your cluster to the internet.

**This guide will explain how this gateway works, and how to redeploy it.**

## Instructions

### Technical details

#### General information

The VM is based on Alpine Linux 3.18.2.

> [!primary]
> The gateway is built on an Alpine Linux base, on which we have added the necessary packages to cloud-init.

> [!primary]
> You must replace this gateway with one of your choice. The OVHgateway cannot be managed. You can't connect to it to make changes.
> There is no way to connect via SSH or any other protocol.
> It is also not possible to connect from the console via Prism Central.
> You can use this guide: [OVHgateway replacement](/pages/cloud/nutanix/30-software-gateway-replacement).
>

The OVHgateway has a lightweight design, with 2 NICs, 1 vCPU, 1 GB of memory and 1 GiB of disk space.

- `eth0` is the interface for the external network and owns the Additional IP address in the subnet **base** with VLAN 0.<br>
- `eth1` is the interface for the internal network in the subnet **infra** with VLAN 1.

OVHcloud teams have customised the VM with an *IPTABLES* script.

> [!primary]
> There is no way to connect with SSH or any other protocol.
> It is also not possible to log from the console via Prism Central.
>

> [!primary]
> The VM is used only to NAT traffic between hosts, CVM, VM and Internet.
>

ICMP requests are only allowed in the private network.

#### User data script

The VM is deployed with *cloud-init*, a tool that applies user data to your instances automatically.

```yaml
#cloud-config
---
hostname: gw
fqdn: gw.ovh.cloud
users:
  - name: ovh
    shell: /bin/nologin

write_files:
  - path: /etc/network/interfaces
    content: |
      auto lo
      iface lo inet loopback

      auto eth0
      iface eth0 inet static
      address PUBLICIP
      netmask PUBMASK
      gateway PUBLICGW

      auto eth1
      iface eth1 inet static
      address PRIVATEIP
      netmask GWNETMASK

  - path: /etc/local.d/firewall.start
    content: |
      #!/bin/sh
      iptables -F
      iptables -X
      iptables -t nat -F
      iptables -t nat -X
      iptables -t mangle -F
      iptables -t mangle -X
      iptables -P INPUT DROP
      iptables -P OUTPUT DROP
      iptables -P FORWARD ACCEPT
      iptables -A INPUT -i eth1 -p ICMP -j ACCEPT
      iptables -A OUTPUT -p ICMP -j ACCEPT
      iptables -A INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT
      iptables -A INPUT -i eth1 -j ACCEPT
      iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

runcmd:
  - echo "nameserver DNS" > /etc/resolv.conf
  - rc-service networking restart
  - apk update
  - apk upgrade
  - echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
  - iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
  - rc-update add local boot
  - chmod +x /etc/local.d/firewall.start
  - usermod -p "*" root
  - usermod --expiredate 1 root
  - reboot
final_message: "The system is finally up, after $UPTIME seconds"
```

### How to redeploy the VM gateway with the central Prism interface

#### Step 1: Collect information

To redeploy the gateway VM you will need:

- Additional IP address
- LAN subnet (subnet of CVM, Prism Central, AHV hypervisors)
- Subnet name

##### **Check the Additional IP address**

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and open the management section of your [vRack](https://www.ovhcloud.com/en-gb/network/vrack/){.external}. Verify the Additional IP address used by the Nutanix Cluster.

![Additional IP](images/check_subnet0.png){.thumbnail}

> [!primary]
> The following instructions will use the IP block 198.51.100.0/30 for example purposes.
>

For [vRack](https://www.ovhcloud.com/en-gb/network/vrack/){.external} purposes, the first, penultimate, and last addresses in any given IP block are always reserved for the network address, network gateway, and network broadcast respectively. This means that the first usable address is the second address in the block, as shown below:

```console
198.51.100.0   Reserved: Network address
198.51.100.1   First usable IP
198.51.100.2   Reserved: Network gateway
198.51.100.3   Reserved: Network broadcast
```

##### **Check the private subnet or gateway private IP address**

If the gateway still exists, go to the VM in the VM section of your Prism Central WebUI.

The gateway IP is displayed here.

![check subnet on gateway](images/check_subnet2.png){.thumbnail}

However, if the gateway is not present, check the subnet by going to `Hardware` then `Hosts` in the Prism Central WebUI.

![check subnet on gateway2](images/check_subnet1.png){.thumbnail}

In this case the subnet is 192.168.0.0/24. In the default configuration, the gateway IP address is therefore 192.168.0.254.

##### **Retrieve the subnet name**

If the gateway still exists, go to the VM in the VM section of your Prism Central WebUI.

Click on the OVHgateway VM and open the `NICs` tab.

![check subnet on gateway2](images/check_subnet_name0.png){.thumbnail}

#### Step 2: create the VM 

Log in to Prism Central and create a VM.

Customise the VM name and characteristics.

![Deploy VM](images/deploy_vm.png){.thumbnail}

Click `Next`{.action}

You then need to attach a disk. To do this, you can select the image used to create the original gateway.

![Attach Disk1](images/attach_disk.png){.thumbnail}

![Attach Disk2](images/attach_disk2.png){.thumbnail}

Then add **two nics** to the “base” network:

![Attach subnet](images/attach_subnet.png){.thumbnail}

![Attach subnet](images/attach_subnet2.png){.thumbnail}

Click `Next`{.action}.

In the management interface, choose `cloud-init` in the “Guest customisation” section.

![Guest customization](images/cloud-init.png){.thumbnail}

You now need to create a yaml script to define the parameters. This script contains the user data. When the system boots, these settings such as users, packets, files, etc. will be applied to the VM.

Below, you will find a template that you can modify with your values to create your VM.

> [!primary]
> You can use the original VM creation file or use a custom file to create your own gateway. This is what we will see in this example.
>

> [!primary]
>
> - Replace the `hostname`, `fqdn`, `name`, `passwd`, `ssh-autorized-keys` and IP addresses with the values you want.
> - This file creates the network configuration, resizes the disk to occupy all the space, and then reboots.
> - Warning: once created, your VM is exposed on the internet.
>


```yaml
hostname: <yourhostname>
fqdn: <yourhostname>.<yourdomain>
users:
  - name: <yourusername>
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: sudo
    shell: /bin/sh
    lock_passwd: false
    plain_text_passwd: <your password>
    ssh-authorized-keys:
      - ssh-autorized-keys1
      - ssh-autorized-keys2
growpart:
  mode: growpart
  devices: ["/dev/sda2"]
  ignore_growroot_disabled: true

write_files:
   - path: /etc/network/interfaces
     content: |
        auto lo
        iface lo inet loopback

        auto eth0
        iface eth0 inet static
        address 198.51.100.1
        netmask 255.255.255.252
        gateway 198.51.100.2

        auto eth1
        iface eth1 inet static
        address 192.168.0.254
        netmask 255.255.255.0

   - path: /etc/local.d/firewall.start
     content: |
       #!/bin/sh
       iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
   
runcmd:
   - echo "nameserver 213.186.33.99" > /etc/resolv.conf
   - rc-service networking restart
   - apk update
   - apk upgrade
   - echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
   - iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
   - rc-update add local boot
   - chmod +x /etc/local.d/firewall.start
   - apk add sudo
   - lvextend -l +100%FREE /dev/vg0/lv_root
   - resize2fs /dev/vg0/lv_root
   - reboot

final_message: "The system is finally up, after $UPTIME seconds"
```

Paste this script into the box provided.

![Guest customization](images/cloud-init.png){.thumbnail}

Click `Next`{.action}, then `Create VM`{.action}.

> [!primary]
> Wait a few minutes for the VM to take into account all settings.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
