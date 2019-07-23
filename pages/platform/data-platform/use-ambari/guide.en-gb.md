---
title: Use Apache Ambari
slug: ambari
excerpt: First steps with Apache Ambari
section: Getting started
order: 3
---

## Cluster overview using Ambari

You have now managed to deploy your Analytics Data Platform.
In this section you learn to manage your cluster with Apache Ambari, create your first dataset and
run your first Apache Hive and Spark jobs.

### Dashboard

The dashboard is the main page you will see when using Ambari. It
contains a list of predefined widgets with predefined alerts thresholds.
By monitoring it, you will be able to verify that your whole cluster and
each of your services are running smoothly.

![Ambari Dashboard](images/ambari_01.png)

Each widget can be customized to a certain extent (at minima, the
alerting thresholds) to better suit your needs.

On the dashboard's left side, you can see all the services and clients
deployed on your cluster (the green tick indicates that it's a service,
like HDFS, while the computer icon represents a client, like Kerberos)

On the top bar, you can see more general monitoring data like the number
of currently running administration operations on your cluster and the
global number of alerts. You can also access the administration of
Ambari by clicking on your name (if you have the privileges for it,
obviously). Lastly, by clicking on the 9-squares icon, you can access
Ambari's views to monitor jobs or access to specific services :

![Ambari Views](images/ambari_views_01.png)

### Services and Quicklinks

You can find the list of all service on left side panel of ambari UI.

![Ambari Services](images/ambari-service-list.png)

When you select a service by clicking on it, the service panel is displayed.
In this panel you will find the service status and sometimes a list of metrics
to monitor it.

![Yarn service panel in Ambari](images/ambari-service-panel.png)

If the service has specific UI, a Quicklinks dropdown menu is displayed on top of
service panel. It helps you to go on the UI directly from ambari.

![Yarn Quicklinks](images/ambari-service-panel-quicklinks.png)


> [!primary]
>
> Never delete Ambari local 'admin' user, it is used to automatically synchronize users newly created users to Ambari.
>
