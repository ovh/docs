---
title: Create a VPG
slug: create-a-vpg
legacy_guide_number: '4161544'
space_key: ZRT
space_name: Zerto
section: Zerto
---








A VPG (Virtual Protection Group) is a group of selected VM you want to protect.

**You need to move your VMs in the ressource pool protectedVms to link them to the VPG before creating it.**

### Create your first VPG

In VPGs tab you can create a new VPG via the button.

![](images/zertoNewVPG.png){.thumbnail}

Name your VPG and select the virtual machines you want to protect and the ressources where you want to replicate the VMs.

You can also customize replication if you switch to wizard customize.

![](images/createVPG1.png){.thumbnail}

Click on save. Then your new VPG is now in creation. You just need to wait for the first sync between source and recovery sites.

![](images/syncing.png){.thumbnail}

In the VMs tab you can see your protected virtual machines.

![](images/VMsProtected.png){.thumbnail}


