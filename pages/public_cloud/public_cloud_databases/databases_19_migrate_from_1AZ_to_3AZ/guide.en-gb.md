---
title: "How to move a database service from a single AZ region to a 3-AZ region"
excerpt: "Learn how to move your OVHcloud Public Cloud Database from a single AZ to a 3-AZ region and ensure high availability"
updated: 2025-08-19
---

## Objective

OVHcloud Public Cloud Databases can be deployed with different architectures to meet varied needs for availability and resilience. This guide is specifically designed to walk you through the migration of your existing database service from a single availability zone (1-AZ) configuration to a 3-AZ architecture (three availability zones). You'll discover the detailed steps to perform this transfer, ensuring high availability and improved fault tolerance for your critical applications.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)
- An existing database service deployed in a single availability zone (1-AZ)
- A 3-AZ region activated within your Public Cloud project

## Why move to 3-AZ?

Migrating your database service to a 3-AZ deployment significantly enhances its resilience, high availability, and disaster recovery capabilities. In a 3-AZ setup, provided your service runs on multiple nodes, your data is synchronously replicated across three distinct availability zones within the same region. This architecture ensures that in the event of an outage in one zone, your database service can automatically failover to another operational zone with minimal downtime and no data loss.

For more detailed information on the deployment modes and their technical specifications, please refer to our dedicated guide: [Comparison of Public Cloud Databases Deployment Modes - Understanding 3-AZ / 1-AZ](/pages/public_cloud/public_cloud_databases/databases_18_regions_comparison).

Here is a list of currently supported 1-AZ and 3-AZ regions for database services:

![databases - datacentres](images/databases_datacentre.png){.thumbnail}

## Reversibility

The migration from a Single-AZ region to a Multi-AZ region is reversible — services can be migrated back to a Single-AZ region.

## Instructions

### Move a database service to 3-AZ

> [!tabs]
> Via the OVHcloud Control Panel
>> To move a database service from a 1-AZ to a 3-AZ region, log in to the [OVHcloud Control Panel](/links/manager) and open your Public Cloud project. Click `Databases`{.action} in the left navigation bar, select your database service then click the `Backups`{.action} tab.
>>
>> ![databases - select engines instances and go to the backups section](images/databases_select_cluster.png){.thumbnail}
>>
>> Choose the backup from which you wish to fork, click on the `...`{.action} button and click on the `Duplicate (fork)`{.action} button.
>>
>> ![databases - click on the duplicate button](images/databases_fork_backup.png){.thumbnail}
>>
>> The page that appears allows you to configure your service and choose the destination region.<br>
>> Select the Restore point named `Backup`{.action}.
>>
>> ![databases fork - select backup for the restore point part](images/databases_fork_restore_point.png){.thumbnail}
>>
>> Select a `3-AZ region`{.action}.
>>
>> ![databases fork - select your 3-AZ region](images/databases_fork_region.png){.thumbnail}
>>
>> Select a service `plan`{.action}.
>>
>> ![databases fork - select your plan](images/databases_fork_plan.png){.thumbnail}
>>
>> Select the `instance`{.action} that will host the service.
>>
>> ![databases fork - select the instance](images/databases_fork_instance.png){.thumbnail}
>>
>> Select the `storage`{.action} capacity of the service.
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

After your new 3-AZ database service has been successfully provisioned, it's crucial to validate its deployment and ensure your applications can connect to it.

1. Test the connection to your new service:
    1. Use a database client (e.g., psql for PostgreSQL, mysql for MySQL) or a simple script to verify that you can connect to the new 3-AZ service's endpoint using its credentials.
    2. Confirm that your data has been successfully migrated and is accessible.
2. Configure your application to use the new service:
    1. Update your application's configuration files or environment variables to point to the new 3-AZ database service's connection string (host, port, username, password).
    2. Restart your application to apply the changes.
    3. Thoroughly test your application's functionality to ensure it operates correctly with the new database endpoint.

### Clean up

Once you've fully validated that your application is working correctly with the new 3-AZ database service, and you're confident all data has been transferred and is accessible, you can proceed with deleting the old 1-AZ service.

This step is crucial to avoid unnecessary costs and maintain a clean infrastructure.

Follow these instructions to delete the old 1-AZ service:

> [!tabs]
> Via the OVHcloud Control Panel
>> Navigate to your list of database services, click on the `...`{.action} button on the service line and click on the `Delete`{.action} button to permanently delete the service.
>>
>> ![databases - delete the 1-AZ service](images/databases_delete_1az.png){.thumbnail}
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