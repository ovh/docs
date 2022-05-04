---
title: Troubleshooting
excerpt: Troubleshooting tips for Public Cloud Databases
slug: troubleshooting
section: General guides
order: 040
---

**Last updated 27th September 2021**

## Objective

OVHcloud Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.
Each service is powered by third-party databases management systems (DBMS), maintained by third-party companies or communities such as PostgreSQL community, Oracle, MongoDB, RedisLab, Apache Foundation and more.

**This guide explains how to troubleshoot common issues.**

### I can't connect to Public Cloud Databases

If you are unable to connect to Public Cloud Databases, please ensure the following:

- **Your database instance is up and running :** When you create a new database instance, you have to wait a few minutes before getting your service up and ready to use. You can verify the status of your service in the Control Panel. It should be in "running" state. Please note that when you modify database instances, such as adding nodes or modifying the version of the DBMS, your service can switch from "running" state to "updating". You may experience connection issues during this time.
- **At least 1 user is created :** please verify that you have at least one user created for your service, with sufficient user roles. If you are unsure about the password, create a new user with a newly generated password.
- **At least 1 IP address is authorized :** by default, a database instance can not be reached from the outside. You need to specify, in the Control Panel, at least one IP address to trust (authorize). You need to trust the IP address from where the request of connection will be initiated. Tip : for a short lap of time, you can try to allow an IP address wild card **0.0.0.0/0**. This rule **will allow any IP connection**. Please use it carefully.
- **Correct Service URI syntax is used :** be sure to copy the exact Service URI provided in your Control Panel to avoid syntax issues. Connect to the default port for each DBMS.  
- **Up-to-date client and/or coding framework :** each DBMS client provides compatibility matrix for software versions. Be sure to follow official DBMS prerequisites, such as Linux package versions, PHP or Python versions, ...

To help you through your connection journey, we detail the exact procedures in our [Public Cloud Database documentation](https://docs.ovh.com/au/en/publiccloud/databases/). Don't hesitate to browse the guides for more details.

### Public Cloud Databases - lost password

OVHcloud does not store passwords for Public Cloud Databases. You can't retrieve a password.
If you forget your password, you have two solutions:

- **Regenerate password :** in the Control Panel, select the `users`{.action} tab in your database service. For the desired user, on the right side of the table line you will find an action button. Select `Regenerate password`{.action} Once regenerated, the new password will be shown in your web browser. Please copy it and store it securely. Tips : by doing this, ALL existing connections made with this user will be stopped. You will have to modify the password in all scripts using this user.
- **Create a new user :** in the control panel, select the `users`{.action} tab in your database service. Create a new user with the desired roles. A password will be generated and will be shown in your web browser. Please copy and store it securely.

To help you through user management, please feel free to read our guides for more details in the [Public Cloud Database documentation](https://docs.ovh.com/au/en/publiccloud/databases/).

### Public Cloud Databases - running out of storage

We recommend to monitor your Public Cloud Databases metrics as much as you can, especially for storage space.
If you are running low on storage space, OVHcloud will:

1. Send an alert to your main email contact (NIC-Admin) when reaching 80% of storage capacity.
2. Put your database instance(s) in "DISK_FULL" state and read-only+delete mode when reaching 95% of storage capacity.
3. Put back your database instance in read-write mode once storage capacity goes under 80%.

If you are reaching the storage capacity limits, you have two options:

- **Upgrade to higher flavors :** Public Cloud Databases come with included storage inside each node flavor. Depending on the DBMS, you may be able to change flavor model to a higher one, with a bigger storage capacity.
- **Clean up data :** remove useless data in your database instance, allowing you to reach an acceptable level of storage capacity.

### Public Cloud Databases - experiencing slowness

Several reasons may cause a database instance to slow down. To start troubleshooting:

- **Verify metrics dashboard :** The first step is to understand if slowness is punctual or periodic. Many metrics can help you to understand if this phenomena happens each hour, each day, or is non-cyclical.
- **Confront metrics to your needs :** If the experienced slowness matches with a high-level of metrics, such as CPU usage or RAM usages, it means that your database instance is reaching its maximum performance. If you reach max performance, it can be related to legit operations on your side, or code malfunctions. OVHcloud is not responsible for the scripts used.
- **Check the slow queries :** major DBMS allow you to investigate slow queries, meaning investigating the queries made on databases that take too much time. Reducing time of queries is always a performance benefit.
- **Verify OVHcloud health statuses :** OVHcloud may experience network or databases issues. We list them on <http://travaux.ovh.net/>.

If the slowness persists, please contact our support team.

### Public Cloud Databases - outage or reboot

**A database instance outage** can occur when lower layers (software or hardware) do not work in optimal conditions.

Depending on the outage, your usage of the service can be affected by:

- overall slowness
- a reboot
- being unable to connect to the databases
- being unable to read or write data

To troublesoot an outage :

1. **Check database instance status :** connect to your Public Cloud Control Panel and explore your database services. Verify the status. Nominal status is **Running**;
2. **Check OVhcloud health statuses :** when major outages occurs, they are listed on <http://travaux.ovh.net/>.

**A database instance reboot** can occur when:

- A major maintenance operation is planned. Verify your maintenance window directly on the Public Cloud Control Panel;
- A modification on the cluster is requested. Depending of the chosen DBMS and service plan, the reboot can be required even if we try to avoid it as much as we can. When a modification is required, we infom customers about it via the Control Panel.

## Go further

[Public Cloud Databases documentation](https://docs.ovh.com/au/en/publiccloud/databases/),

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.
