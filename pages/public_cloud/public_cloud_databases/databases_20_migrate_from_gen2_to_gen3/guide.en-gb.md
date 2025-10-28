---
title: "How to migrate a database service from Gen 2 to Gen 3"
excerpt: "Learn how to upgrade your OVHcloud Public Cloud Database from Gen 2 to Gen 3 and take advantage of improved performance and features"
updated: 2025-10-09
---

## Objective

OVHcloud Public Cloud Databases offer different generations to meet varying needs for performance, scalability, and features. This guide is specifically designed to walk you through the migration of your existing database service from **Gen 2** to **Gen 3**. You'll discover the detailed steps to perform this upgrade, taking advantage of improved performance, enhanced features, and better reliability for your critical applications.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)
- An existing Gen 2 database service deployed

## Why migrate to Gen 3?

Upgrading your database service from Gen 2 to Gen 3 brings significant improvements in performance, scalability, and reliability. Gen 3 databases are designed with enhanced architectures and optimised resource management, allowing your critical applications to run more efficiently and with better fault tolerance.

## Instructions

OVHcloud Public Cloud Databases exist in several generations that reflect the evolution of their underlying infrastructure.

- Gen 2 flavors are named DB2-X for MongoDB and DB1-X for other database engines. They are based on Compute Instance General Purpose B2 and Discovery D2 families.
- Gen 3 flavors follow the same naming convention as Compute Instance General Purpose B3 (b3-X), on which they are built.

Gen 3 provides improved performance, scalability, and reliability compared to Gen 2.

### Migrate a database service from Gen 2 to Gen 3

> [!tabs]
> Via the OVHcloud Control Panel
>> To move a database service from Gen 2 to Gen 3, log in to the [OVHcloud Control Panel](/links/manager) and open your Public Cloud project. Click `Databases`{.action} in the left navigation bar, select your database service then click the `Backups`{.action} tab.
>>
>> ![databases - select engines instances and go to the backups section](images/databases_select_cluster.png){.thumbnail}
>>
>> Choose the backup from which you wish to fork, click the `...`{.action} button then the `Duplicate (fork)`{.action} button.
>>
>> ![databases - click on the duplicate button](images/databases_fork_backup.png){.thumbnail}
>>
>> The page that appears allows you to configure your service and choose the destination region.<br>
>> Select the Restore point named `Backup`{.action}.
>>
>> ![databases fork - select backup for the restore point part](images/databases_fork_restore_point.png){.thumbnail}
>>
>> Select a region.
>>
>> ![databases fork - select your region](images/databases_fork_region.png){.thumbnail}
>>
>> Select a service plan.
>>
>> ![databases fork - select your plan](images/databases_fork_plan.png){.thumbnail}
>>
>> Select the instance that will host the service.
>>
>> > [!primary]
>> >
>> > Plan mapping and considerations when migrating to Gen 3:
>> >
>> > - Business (Gen 2) -> Production (Gen 3)
>> > - Enterprise (Gen 2) -> Advanced (Gen 3)
>> > - Essential (Gen 2) -> No direct Gen 3 equivalent. Essential plans used a single node, whereas all Gen 3 plans have a minimum of 2 nodes.
>> >
>> > Migrating from an `Essential` plan will require selecting a different plan in Gen 3, which increases the cost due to the additional node. Even for Business and Enterprise plans, Gen 3 nodes provide higher redundancy and performance (2–3 nodes depending on the plan).
>> >
>>
>> ![databases fork - select the instance](images/databases_fork_instance.png){.thumbnail}
>>
>> Select the storage capacity of the service.
>>
>> ![databases fork - select the storage](images/databases_fork_storage.png){.thumbnail}
>>
>> If needed, you can edit the connectivity settings, then verify the IP addresses to whitelist (the list is pre-filled by default with the origin service's configuration).
>>
>> ![databases fork - select optional fields](images/databases_fork_options.png){.thumbnail}
>>
>> When you have completed your configuration, review your order then click on the `Order`{.action} button. 
>>
>> ![databases fork - review](images/databases_fork_summary.png){.thumbnail}
>>
> Via the OVHcloud API
>>
>> > [!primary]
>> >
>> > To interact with your Public Cloud Databases services via the OVHcloud API, make sure you've mastered the basics first by consulting our guide: [Public Cloud Databases - Getting started with APIs](/pages/public_cloud/public_cloud_databases/databases_02_order_api).
>> >
>>
>> To find the backup ID of a service, use the following API call:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/backup
>> >
>>
>> This call retrieves the backup list of the concerned service. They are listed in order from the most recent backup to the oldest.
>>
>> If you want to check the information on a particular backup, you can use this API call:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/backup/{backupId}
>> >
>>
>> To create your new service from one backup, use the following API call:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/postgresql
>> >
>>
>> An example of a `body` for this API call:
>>
>> > [!warning]
>> >
>> > The field named `backup` is deprecated and replaced by `forkFrom`.
>> >
>>
>> ```console
>> {
>>   "description": "laughable-peebles",                      # Name of the new service
>>   "nodesPattern": {                                        # Service configuration
>>     "flavor": "b3-8",
>>     "number": 2,
>>     "region": "EU-WEST-PAR"
>>   },
>>   "plan": "production",                                    # Plan of the service
>>   "disk": {
>>     "size": 160                                            # Service disk size
>>   },
>>   "version": "17",
>>   "ipRestrictions": [                                      # Connectivity settings
>>     {
>>       "ip": "1.2.3.4/32",
>>       "description": ""
>>     }
>>   ],
>>   "forkFrom": {
>>     "serviceId": "********-****-****-****-ce179babccf3",   # The identifier of the origin service to which this backup belongs
>>     "backupId": "********-****-****-****-3684de51065d"     # The identifier of the previously retrieved backup
>>   }
>> }
>> ```
>>

### Validate the deployment

After your new Gen 3 database service has been successfully provisioned, it's crucial to validate its deployment and ensure your applications can connect to it.

1. Test the connection to your new service:
    1. Use a database client (e.g., psql for PostgreSQL, mysql for MySQL) or a simple script to verify that you can connect to the new Gen 3 service endpoint using its credentials.
    2. Confirm that your data has been successfully restored from the backup and is accessible.
2. Configure your application to use the new service:
    1. Update your application's configuration files or environment variables to point to the new Gen 3 database service connection string (host, port, username, password).
    2. Restart your application to apply the changes.
    3. Thoroughly test your application's functionality to ensure it operates correctly with the new database endpoint.

### Clean up

Once you've fully validated that your application is working correctly with the new Gen 3 database service, and you're confident all data has been transferred and is accessible, you can proceed with deleting the old Gen 2 service.

This step is crucial to avoid unnecessary costs and maintain a clean infrastructure.

Follow these instructions to delete the old 1-AZ service:

> [!tabs]
> Via the OVHcloud Control Panel
>> Navigate to your list of database services, click the `...`{.action} button on the service line then click the `Delete`{.action} button to permanently delete the service.
>>
>> ![databases - delete the gen 2 service](images/databases_delete_1az.png){.thumbnail}
>>
> Via the OVHcloud API
>> To delete your service, use the following API call:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}
>> >
>>

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!