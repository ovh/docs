---
title: Dedicated Cloud FAQ
excerpt: ''
slug: dedicated_cloud_faq
legacy_guide_number: g598
section: Getting started
---


## When configuring the HA I get the error: "HA Error: Unable to perform configuration"
If this error persists, you must manually de-configure and then reconfigure the HA cluster. To do this, go to the properties of your cluster, un-check HA and confirm the change. Once the task is completed, you can return to properties and then re-enable HA. Once the activation task is completed, the option will be enabled on your HA cluster.


## What is the purpose of the option «Rescan Datastore» on the cluster:
This option is used for iSCSI storage which is used for updating the access routes.
This manipulation is not necessary at OVH, as it is only used for iSCSI filers which we do not offer.


## Following an alarm, it still remains on in the host (red triangle)
You must validate this alarm and make it green in the alarm tab of your host.Then right click on the remaining alarm.


## I have a VM in an Invalid state.
In this case, delete your VM inventory by right clicking on this VM.
WARNING: choose "delete the inventory" and not "delete the disk." In the latter case, you will lose data on your VM.
Then just simply add the VM again in the inventory.


## When accessing my VM console, I get a black screen
For this, it's the VM's OS that has put the screen in suspend. Press any key on your keyboard to reactivate it.

