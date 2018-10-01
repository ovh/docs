---
title: 'Operate your platform'
excerpt: 'Learn how to operate to your Data Platform'
section: How-to
order: 2
---

Operating a cluster can be a bit blurry due to the number of services
you may want to operate. Let's see how to manage your platform and the
best practice.


## Managing your services from Apache Ambari


Most part of your services can be managed through Ambari web UI. Ambari
is a cluster management service.
Is helps you to start/stop/restart a service like HDFS for instance.
You can also change the configuration of a node or
of the entire service (eg : change memory allocation amount for a YARN container)

To access to your Ambari web UI you may connect to :

https://knox.your-cluster-id.datalake.ovh/gateway/default/ambari

To connect to Ambari web interface, you need a valid user and password.
As credentials are centralized through freeIPA,  the same that you need to authenticate to the other services.


## Operating a server from the cluster


You may need to access directly to a node. That means that you would
connect on the server. You can achieve it :

- Using [Guacamole](../connect-using-guacamole/guide.en-gb.md) to connect via your web browser
- Using [SSH](../connect-using-ssh/guide.en-gb.md) to connect through your terminal
