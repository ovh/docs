---
title: Migrating a failover IP
excerpt: Migrating a failover IP
slug: migrating_a_failover_ip
legacy_guide_number: g1890
section: Knowledge Base
---


## 
This guide explains how to migrate a failover IP from one instance to another. This action generally limits or removes the possibility that your server will be unavailable and it lets you:

- migrate ton a website in its "new version";
- run your activity on a replicated server while you do a maintenance or run an update on the production server.




## Prerequisites

- At least two running Public Cloud instances
- A failover IP




## 

- To start, click in the Failover IP section bellow Network in the left menu. Then, we can see that IP our failover IP is routed to server 1 and I want to redirect it towards server 2.


![](images/failover.png){.thumbnail}

Click on the 3 dots on the right of the failover IP and then on Modify the associated instance.

![](images/modify.png){.thumbnail}

Click the box next to the destination server

![](images/modify1.png){.thumbnail}

- Click Attach

- After some seconds the control panel will be updated and the following message will be displayed, confirming the migration was done sucessfully:

![](images/modify2.png){.thumbnail}

## 

The failover IP can be configured on the destination server before or after carrying out the migration. If it is preconfigured, it will begin to respond as soon as the routing operation is completed.


## 
[Go back to the index of Cloud guides]({legacy}1785)

