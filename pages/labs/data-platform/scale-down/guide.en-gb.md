---
title: Remove a node from your Data Platform
excerpt: Learn how to scale down your cluster by removing a node from it.
section: How-to
order: 6
---

If you want to remove a node from your Data Platform, you will need to decommission it from the cluster an dthen destroy the VM in order to stop paying for it.

## Remove a worker node

### Remove node from Ambari

To remove a datanode from the cluster, you need to go on the Ambari UI and do the following steps:

1.  Go to the *Host* page
2.  Select the node(s) you want the destroy in the list
3.  Decommission the **NodeManagers**
[Decommission NodeManagers](images/deco-nodemanager.png)
4.  Decommission the **DataNodes**
[Decommission DataNodes](images/deco-datanode.png)
5.  Click on the node name to reach the node summary page
6.  Stop the *Ambari Metrics* service
[Stop Ambari Metrics](images/stop-ambari-metrics.png)
7.  In the *Host Actions* menu, chose *Stop All Components*
[Stop all components](images/stop-components.png)
8.  Log in to the node to stop the Ambari agent running on it (see [Connect to your Data Platform using SSH](../connect-using-ssh/guide.en-gb.md))
```bash
$ sudo ambari-agent stop
```
9.  On the the node summary page in Ambari UI, select *Host Actions*>*Delete Host*
[Delete Host](images/delete-host.png)
10. Restart HDFS and YARN by clicking on *Host Actions*>*Restart all services* into both services summary page


### Delete VM and volumes

Now the instance is no more a part of your cluster, but you are still paying for it until you delete it.
To delete a worker node instance :

1.  Login to your [OVH Manager](https://www.ovh.com/manager/public-cloud/index.html)
2.  Select your project in the *sidebar* 
3.  Go in the *Block storage* section of the *sidebar*
4.  Detach the volumes linked to the to-be-deleted instance
[Detach volumes](images/detach-volumes.png)
5.  Delete these volumes
6.  Go in the *Intances* section of the *sidebar*
7.  Delete the instance(s) you have previously decommission
[Delete instance](images/delete-instance.png)


## Remove an edge node

### Remove node from Ambari

### Delete VM and volumes