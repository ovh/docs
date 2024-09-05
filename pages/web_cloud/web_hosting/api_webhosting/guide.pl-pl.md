---
title: "How to create and manage a web application using the OVHcloud public API (EN)"
excerpt: "Find out how to use the OVHcloud public API to create and manage a web application"
updated: 2024-09-05
---

## Objective

This guide explains how to use the OVHcloud public API to create and manage a web application on your hosting plan. You will learn how to perform key operations such as attaching domains, managing databases, and configuring SSL certificates.

## Requirements

- An OVHcloud [Web Hosting plan](/links/web/hosting)
- Basic knowledge of the REST API.
- Access to the OVHcloud API. Read our [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide.

> [!warning]
>
> Using OVHcloud APIs requires advanced knowledge in this field. If you experience any difficulties, please contact the [OVHcloud partners](/links/partner).
>

## Instructions

### Retrieving service information

The first step is to retrieve the `serviceName`, a unique ID for your web hosting service. You will need it for most of the following API calls.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/

This command returns a list of your web hosting services. Each entry in the list is a `serviceName`.

**Return example** :

```json
[
  "example.cluster01.hosting.ovh.net",
  "example2.cluster02.hosting.ovh.net"
]
```

### Attaching a domain

Attach a domain to your web hosting service:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/attachedDomain

| Settings                | Required | Description       |
|-------------------------|------------|-------------------|
| serviceName             | yes        | Service name       |
| bypassDNSConfiguration  | no         | If enabled, the DNS zone will not be updated    |
| cdn                     | no         | Indicates whether the domain is linked to the hosting CDN. Allowed values: active┃none |
| domain                  | no         | Domain to link      |
| firewall                | no         | Indicates whether the firewall is active for this domain. Allowed values : active┃none |
| ipLocation              | no         | Sets the IP location associated with the domain. Allowed values : BE┃CA┃CZ┃DE┃ES┃FI┃FR┃IE┃IT┃LT┃NL┃PL┃PT┃UK |
| ownLog                  | no         | Domain to separate logs    |
| path                    | no         | Path where web files will be stored      |
| runtimeId               | no         | Runtime configuration ID used on this domain   |
| ssl                     | no         | Option to activate SSL for the domain   |

**Return example** :

```json
{
 "doneDate": "2024-08-22T08:13:50.740Z",
 "function": "abuse/close",
 "id": 0,
 "lastUpdate": "2024-08-22T08:13:50.740Z",
 "objectId": "string",
 "objectType": "Abuse",
 "startDate": "2024-08-22T08:13:50.740Z",
 "status": "cancelled"
}
```

### Generating SSL certificates

Configure and manage SSL certificates to secure your website:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/ssl

| Settings      | Required   | Description                         |
| ------------- | ---------- | ----------------------------- |
| serviceName   | yes        | Service name                      |
| certificate   | no         | SSL certificate to install          |
| chain         | no         | Certificate chain used to validate SSL certificate |
| key           | no         | Private key associated with the SSL certificate|

**Return example** :

```json
{
 "isReportable": false,
 "provider": "COMODO",
 "regenerable": false,
 "status": "created",
 "taskId": 0,
 "type": "CUSTOM"
}
```

### Managing databases

With the OVHcloud Web Hosting APIs, you can also manage your databases.

#### Creating a database

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         |             Service name           |
| capacity   | yes         | DB Capabilities. Values: extraSqlPersonal┃local┃privateDatabase┃sqlLocal┃sqlPersonal┃sqlPro         |
| user         | yes         | Database username. Must be lowercase and start with your web hosting ID                                        |
| password           | no                  | DB password |
| quota              | no                  | Space allocated. Values: 25┃100┃200┃256┃400┃512┃800┃1024|
| type               | yes                  | DB type. Values: mariadb┃mysql┃postgresql┃redis|
| version           | no                  | DB version      |

**Return example** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Listing existing databases

List all the databases associated with your web hosting service:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/database

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         |        Service name                |
| mode          | yes         |        Allowed values: besteffort ┃ classic ┃ module     |

**Return example** :

```json
[
 "example.mysql.db",
 "example2.mysql.db"
]
```

### Managing modules

#### Retrieving a list of modules

Get a list of available modules that you can install on your web hosting plan:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/moduleList

| Settings     | Required    | Description                         |
| ------------ | ----------    | ----------------------------- |
| active        | no            | Filter enabled or disabled modules |
| branch        | no            | Filter modules by version. Allowed values: old ┃ stable ┃ testing |
| latest         | no           | Filter to show modules matching the latest version |

**Return example** :

```json
[
 195,
 184,
 38,
 176
]
```

#### Retrieving a module's information

Get the details of a specific module installed on your web hosting plan:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/moduleList/{id}

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| id            | yes         |        Module ID        |

**Return example** :

```json
{
 "keywords": [
   "gallery"
 ],
 "adminNameType": "string",
 "author": "OVH",
 "branch": "old",
 "id": 195,
 "size": {
   "value": 0,
   "unit": "B"
 },
 "name": "myname",
 "upgradeFrom": [],
 "language": [
   "en",
   "fr",
   "de",
   "es",
   "pl"
 ],
 "version": "1.4.2.2",
 "active": false,
 "languageRequirement": {
   "value": "php",
   "unit": "supported versions: ''\nnon supported versions: '8+'"
 },
 "latest": true
}
```

### Installing a new module

Install a new module on your web hosting service:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/module

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         | Service name                       |
| moduleId      | yes         | Module ID to install    |
| adminName     | no         | Administrator name              |
| adminpassword | no         | Administrator account password |
| domain        | no         | Domain name where the module will be deployed |
| language      | no         | Language of the module installation   |
| path          | no         | Path on the server where the module will be installed |
| dependencies -> name        | no       | Dependent service name     |
| dependencies -> password    | no   | Password for dependent service   |
| dependencies -> port        | no | Service connection port       |
| dependencies -> prefix      | no    | Prefix used in service configuration    |
| dependencies -> server      | no       | Server address of the dependent service     |
| dependencies -> type        | no      | Type of service (e.g. MySQL)    |
| dependencies -> user        | no      | Username for dependent service   |

**Return example** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

### Managing FTP users

Manage FTP/SSH users on your Web Hosting plan to facilitate access and configuration.

#### Creating a new FTP/SSH user

Create a new FTP or SSH user to access your web hosting plan:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/moduleList

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         | Service name     |
| home          | yes         | Home Directory|
| login         | yes         | Username |
| password      | yes         | Password |
| sshState      | no    | Determines the SSH access state for the user. Allowed values: active ┃none ┃sftponly |

**Return example** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Listing FTP/SSH users

List all existing FTP/SSH users on your hosting service:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/user

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         | Service name                      |
| home          | no         | Filter users based on their home directory |
| login         | no         | Filter users based on their user name    |

**Return example** :

```json
[
 "user1",
 "user2",
 "user3",
 "user4"
]
```

### Restoring a database

Create, list and restore database backups for your website.

#### Creating a backup of a database

Create a backup of your database to restore if necessary:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database/{name}/dump

| Settings     | Required | Description                 |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes   | Service name    |
| name          | yes     | Database name    |
| date          | yes     | Backup type. Allowed values: daily.1┃now┃weekly.1   |
| sendEmail     | no | If this setting is enabled, an email is sent when the backup is available   |

**Return example** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Listing the available database backups

List all available backups for your databases:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/database/{name}/dump

| Settings     | Required | Description                      |
| ------------ | ---------- | --------------------------- |
| serviceName   | yes         | Service name                   |
| name          | yes         | Database name        |
| creationDate.from   | no   | Filter backups created from this date     |
| creationDate.to     | no   | Filter backups created up to this date         |
| deletionDate.from   | no   | Filter deleted backups from this date       |
| deletionDate.to     | no   | Filter deleted backups up to this date        |
| type               | no   | Filter backups by type. Allowed values: daily.1┃now┃weekly.1|

**Return example** :

```json
[
 1,
 12
]
```

#### Restoring a specific backup of a database

Restore a specific backup of your database if there is a problem:

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database/{name}/dump/{id}/restore

| Settings     | Required | Description                         |
| ------------ | ---------- | ----------------------------- |
| serviceName   | yes         | Service name                      |
| name          | yes         | Database name           |
| id            | yes         | Backup ID        |

**Return example** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

## Conclusion

This guide has introduced you to the main API requests for managing your OVHcloud web hosting plan, such as domain attachment, SSL certificate management and database management.

However, there are many other API calls available, which you can explore depending on your specific needs. For more options and features, you can refer to the « [/hosting/web](https://eu.api.ovh.com/console/?section=%2Fhosting%2Fweb&branch=v1#get-/hosting/web) » section of the OVHcloud API.

## Go further

[Order a domain name via API](/pages/web_cloud/domains/api_domain_order)

Join our [community of users](/links/community).

