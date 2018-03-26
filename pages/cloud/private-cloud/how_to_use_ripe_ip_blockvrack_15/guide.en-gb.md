---
title: How to use a RIPE IP block/vRack 1.5
excerpt: How do you add a VM to the vRack 1.5 network and use a RIPE IP Block?
slug: how_to_use_a_ripe_ip_blockvrack_15
legacy_guide_number: g1441
section: Networking
---


## Overview of the VM Network
OVH has created VM Network, a network predefined with an IP pool that contains your RIPE IP block configuration.
This VM Network also enables you to use the vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Get a dynamic RIPE IP block (example with a Windows VM)

- Create a template:

To retrieve an IP from the VM Network IP pool, you must create a template so that you can properly deploy the VM. (A reminder on how to create a template: []({legacy}1436).)
Firstly, you need to add the correct network configuration to your template:

![](images/img_1985.jpg){.thumbnail}
To respond to the machine's Sysprep (System Preparation), you need to firstly follow the template customisation step:

![](images/img_1986.jpg){.thumbnail}

- Deploy the VM:

Once you have completed the previous steps, you can deploy the VM from the template.
Once deployed, the VM should be configured as follows:

![](images/img_1989.jpg){.thumbnail}
If the network settings match the above image, you can launch the VM and check that the IP is properly connected to your VM.


## Connect a RIPE IP block manually
If you want to configure the VM's IP manually (deployed or not deployed from a template), you simply need to connect to VM Network.

![](images/img_1989.jpg){.thumbnail}
Then, once the VM has launched, you can connect it to the IP address you want directly in the operating system.
You will find information on the RIPE block in the delivery email in your Control Panel, or in the VM Network rules:

![](images/img_1990.jpg){.thumbnail}


## VMM and vRack 1.5
A VMM also communicates with the vRack 1.5 via the VM Network.
To communicate with an IP in vRack 1.5, you must configure your VM to connect with the VM Network:

![](images/img_1989.jpg){.thumbnail}
Then, you just need to configure the IP setting manually so that your VM can communicate with the other elements in vRack 1.5.

