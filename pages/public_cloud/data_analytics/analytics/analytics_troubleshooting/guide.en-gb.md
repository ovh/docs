---
title: Analytics - How to troubleshoot your service
excerpt: Troubleshooting tips for Analytics services
updated: 2025-01-14
---

## Objective

Analytics services allow you to focus on building and deploying cloud applications while OVHcloud takes care of the Analytics infrastructure and maintenance.
Each service is powered by third-party Analytics engines, maintained by third-party companies or communities such as the Apache Foundation, Grafana Labs, OpenSearch community.

**This guide explains how to troubleshoot common issues.**

## Instructions

### I can't connect to my Analytics service

If you are unable to connect to your Analytics service, please ensure the following:

- **Your Analytics service instance is up and running:** When you create a new Analytics service instance, you have to wait a few minutes before getting your service up and ready to use. You can verify the status of your service in the [OVHcloud Control Panel](/links/manager). It should be in "running" state. Please note that when you modify Analytics service instances, such as adding nodes or upgrading the engine version, your service may transition from the "running" state to "updating". During this period, you might experience temporary connection disruptions.
- **At least 1 user is created:** Please verify that you have at least one user created for your service, with sufficient user roles. If you are unsure about the password, create a new user with a newly generated password.
- **At least 1 IP address is authorized:** By default, an Analytics service instance can not be reached from the outside. You need to specify, in the OVHcloud Control Panel, at least one IP address to trust (authorize). You need to trust the IP address from where the request of connection will be initiated. Tips: for a short lap of time, you can try to allow an IP address wild card **0.0.0.0/0**. This rule **will allow any IP connection**. Please use it carefully.
- **Correct Service URI syntax is used:** Make sure to copy the exact Service URI provided in your OVHcloud Control Panel to avoid syntax issues. Connect to the default port for each DBMS.
- **Up-to-date client and/or coding framework:** Each Analytics engine client provides a compatibility matrix for software versions. Make sure to follow the official prerequisites for your chosen Analytics engine, such as Linux package versions, supported versions of programming languages like Python or PHP, and more.

To help you through your connection journey, we detail the exact procedures in our [Analytics documentation](/products/public-cloud-data-analytics). Don't hesitate to browse the guides for more details.

### Analytics - lost password

OVHcloud does not store passwords for Analytics services. You can't retrieve a password.
If you forget your password, you have two solutions:

- **Regenerate password:** in the [OVHcloud Control Panel](/links/manager), select the `users`{.action} tab in your Analytics service. For the desired user, on the right side of the table line you will find an action button. Select `Regenerate password`{.action}. Once regenerated, the new password will be shown in your web browser. Please copy it and store it securely. Tips: by doing this, ALL existing connections made with this user will be stopped. You will have to modify the password in all scripts using this user.
- **Create a new user:** in the Control Panel, select the `users`{.action} tab in your Analytics service. Create a new user with the desired roles. A password will be generated and will be shown in your web browser. Please copy and store it securely.

To help you through user management, feel free to read our [Analytics guides](/products/public-cloud-data-analytics) for more information.

### Analytics - running out of storage

We recommend monitoring your Analytics service metrics as much as you can, especially for storage space.
If you are running low on storage space, OVHcloud will:

1. Send an alert to your main email contact (Administrative contact) when reaching 80% of storage capacity.
2. Put your Analytics service instance(s) in "DISK_FULL" state and read-only+delete mode when reaching 95% of storage capacity.
3. Put back your Analytics service instance in read-write mode once storage capacity goes under 80%.

If you are reaching the storage capacity limits, you have two options:

- **Upgrade to higher flavors:** Analytics services include storage within each node flavor. Depending on the Analytics engine, you may have the option to upgrade to a higher node flavor, which provides increased storage capacity.
- **Clean up data:** Remove useless data in your Analytics service instance, allowing you to reach an acceptable level of storage capacity.

### Analytics - experiencing slowness

Several reasons may cause an Analytics instance to slow down. To start troubleshooting:

- **Verify metrics dashboard:** The first step is to understand if slowness is punctual or periodic. Many metrics can help you to understand if this phenomenon happens each hour, each day, or is non-cyclical.
- **Confront metrics to your needs:** If the experienced slowness matches a high-level of metrics, such as CPU usage or RAM usages, it means that your Analytics service instance is reaching its maximum performance. If you reach max performance, it can be related to legit operations on your side, or code malfunctions. OVHcloud is not responsible for the scripts used.
- **Check the slow queries:** Major Analytics engines allow you to investigate slow queries, meaning analyzing queries performed on your data that take excessive time to execute. Optimizing these queries can lead to significant performance improvements.
- **Verify OVHcloud health statuses:** OVHcloud may experience network or Analytics service issues. We list them on <https://www.status-ovhcloud.com/>.

If the slowness persists, please contact our support team.

### Analytics - outage or reboot

**An Analytics service instance outage** can occur when lower layers (software or hardware) do not work in optimal conditions.

Depending on the outage, your usage of the service can be affected by:

- overall slowness
- a reboot
- being unable to connect to the Analytics service
- being unable to read or write data

To troubleshoot an outage:

1. **Check the Analytics service instance status:** connect to the [OVHcloud Control Panel](/links/manager) and explore your Analytics services. Verify the status. Nominal status is **Running**;
2. **Check OVhcloud health statuses:** when major outages occurs, they are listed on <https://www.status-ovhcloud.com/>.

**An Analytics service instance reboot** can occur when:

- A major maintenance operation is planned. Verify your maintenance window directly in the OVHcloud Control Panel.
- A modification to the cluster has been requested. Depending on the chosen Analytics engine and service plan, a reboot may be required, although we strive to avoid it whenever possible. When a modification necessitates a reboot, customers are informed via the OVHcloud Control Panel.

## Go further

[Analytics documentation](/products/public-cloud-data-analytics),

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Analytics services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).