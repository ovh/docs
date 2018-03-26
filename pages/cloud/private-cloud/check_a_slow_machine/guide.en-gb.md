---
title: Check a slow machine
excerpt: ''
slug: check_a_slow_machine
section: Maintenance and monitoring
---


## 
Here are the steps to follow to diagnose severe delays on a VM.

You must use the vSphere Client, or by accessing it using your own local client, or by using the RDP that we provided to you upon activation of your private cloud.


## Verification of VMs:
Initially, we will select the problematic VM then we go to tab "performance". Here we find the summary graphs using our VM for CPU, RAM, etc.. 
If we find an important use in this window, certainly from the irregularities of the VM.
In this case, you can increase the resources allocated to your VM, after making sure there are no limitations on the resources tab of the VM settings (Right click the VM => Edit Settings => resources).


## Verification of the Cluster / Resource Pool
On the cluster or resource pool, let's go to the Performance tab, this will allow you to see the graphics performance and resource utilization:

![](images/img_95.jpg){.thumbnail}
In the section «Resource allocation», you will see figures in the overall consumption of your VMs on the resources available:

![](images/img_96.jpg){.thumbnail}
There are two cases:

- If a host is overloaded, you can manually migrate your VM to another host, or a live migration using VMotion.


If you have the Enterprise license, you can use the DRS which allows you to handle this automatically, depending on resource utilization of your hosts.


- If all your hosts present a heavy load, it will add a tab with Private Cloud or storage.




## Checking storage
Beyond the system resources to your VMs, you can also monitor your storage. When you are on the Datastore view, select your NAS, then the tab « Performance »:

![](images/img_97.jpg){.thumbnail}


## Checking the network
Finally, you can check the status of the network.
In your Manager, you can see the flow rate used and the limitations you set up on your VLANs:


- Manager v5 -> Private Cloud -> Summary / Home



