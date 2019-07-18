---
title: Remove a node from your Data Platform
excerpt: Learn how to scale down your cluster by removing a node from it.
section: How-to
order: 6
---

If you want to remove a node from your Data Platform, you will need to decommission it from the cluster and then destroy the VM in order to stop paying for it.

>[!primary]
>
> In you Analytics Data Plateform, worker nodes names are `ovh-cnodeX.{your_cluster_id}.datalake.ovh` and edge nodes names are `ovh-enodeX.{your_cluster_id}.datalake.ovh`

## Remove a worker node

### Remove node from Ambari

To remove a datanode from the cluster, you need to go on the Ambari UI and do the following steps:

- Go to the *Host* page
- Select the node(s) you want to destroy in the list
- Decommission the **NodeManagers**
![Decommission NodeManagers](images/deco-nodemanager.png)
- Decommission the **DataNodes**
![Decommission DataNodes](images/deco-datanode.png)
- Click on the node name to reach the node summary page
- Stop the *Ambari Metrics* service
![Stop Ambari Metrics](images/stop-ambari-metrics.png)
- In the *Host Actions* menu, chose *Stop All Components*
![Stop all components](images/stop-components.png)
- Log in to the node to stop the Ambari agent running on it (see [Connect to your Data Platform using SSH](../connect-using-ssh/guide.en-gb.md))
```bash
$ sudo ambari-agent stop
```
- On the the node summary page in Ambari UI, select *Host Actions* -> *Delete Host*
![Delete Host](images/delete-host.png)
- Restart HDFS and YARN by clicking on *Host Actions* -> *Restart all services* into both services summary page



### Delete VM and volumes

Now the instance is no more a part of your cluster, but you are still paying for it until you delete it.
To delete a worker node instance :

-  Login to your [OVH Manager](https://www.ovh.com/manager/public-cloud/index.html)
-  Select your project in the *sidebar* 
-  Go in the *Block storage* section of the *sidebar*
-  Detach the volumes linked to the to-be-deleted instance
![Detach volumes](images/detach-volumes.png)
-  Delete these volumes     
![Delete volumes](images/delete-volumes.png)

>[!warning]
>
> Make sure you do the 2 previous steps for all volumes attached to the instance, otherwise you won't be able to delete it.

-  Go in the *Intances* section of the *sidebar*
-  Delete the instance(s) you have previously decommission

![Delete instance](images/delete-worker-instance.png)

## Remove an edge node

### Remove node from Ambari

To remove an edgenode from the cluster, you need to go on the Ambari UI and do the following steps:

-  Go to the *Host* page
-  Click on the name of the node you want to destroy to reach the node summary page
-  Stop the *Ambari Metrics* service
-  In the *Host Actions* menu, chose *Stop All Components*
-  Log in to the node to stop the Ambari agent running on it (see [Connect to your Data Platform using SSH](../connect-using-ssh/guide.en-gb.md))
```bash
$ sudo ambari-agent stop
```
-  On the the node summary page in Ambari UI, select *Host Actions* -> *Delete Host*


### Delete VM and volumes

To delete an edge node instance, the process is the same except you don't have to delete volumes:

-  Login to your [OVH Manager](https://www.ovh.com/manager/public-cloud/index.html)
-  Select your project in the *sidebar* 
-  Go in the *Intances* section of the *sidebar*
-  Delete the instance(s) you want to remove from your project 


