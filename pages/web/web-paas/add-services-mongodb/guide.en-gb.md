---
title: MongoDB (Database service)
slug: add-services-mongodb
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{% frameworks %}}

- [Jakarta EE](../guides/jakarta/deploy.md#mongodb)

- [Micronaut](../guides/micronaut/mongodb.md)

- [Quarkus](../guides/quarkus/mongodb.md)

- [Spring](../guides/spring/mongodb.md)


{{% /frameworks %}}

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

### Enterprise edition

{{< premium-features/add-on feature="MongoDB Enterprise" >}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 6.0  
- 5.0  
- 4.4  
- 4.2 |

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 4.0 |

### Legacy edition

Previous non-Enterprise versions are available in your projects (and are listed below),
but they're at their [end of life](https://www.mongodb.com/support-policy/legacy)
and are no longer receiving security updates from upstream.

> [!primary]  
> 
> Downgrades of MongoDB aren't supported.
> MongoDB updates its own data files to a new version automatically but can't downgrade them.
> If you want to experiment with a later version without committing to it use a non-production environment.
> 
> 

{{% deprecated-versions %}}

| **Grid** |
|----------------------------------|
|  4.0.3 |  
|  3.6 |  
|  3.4 |  
|  3.2 |  
|  3.0 |

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "username": "main",
    "scheme": "mongodb",
    "service": "mongodb36",
    "ip": "169.254.150.147",
    "hostname": "blbczy5frqpkt2sfkj2w3zk72q.mongodb36.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "mongodb.internal",
    "rel": "mongodb",
    "query": {
        "is_master": true
    },
    "path": "main",
    "password": null,
    "type": "mongodb:3.6",
    "port": 27017
}
```

## Usage example

### Enterprise edition example

{{% endpoint-description type="mongodb-enterprise" php=true noApp=true /%}}

### Legacy edition example

{{% endpoint-description type="mongodb" php=true /%}}

> [!tabs]      

## Access the service directly

You can access MongoDB from you app container via [SSH](../development/ssh/_index.md).
Get the `host` from your [relationship](#relationship-reference).
Then run the following command:

```bash
mongo {{< variable "HOST" >}}
```

With the example value, that would be the following:

```bash
mongo mongodb.internal
```

{{% service-values-change %}}

## Exporting data

The most straightforward way to export data from a MongoDB database is to open an SSH tunnel to it
and export the data directly using MongoDB's tools.

First, open an SSH tunnel with the {{< vendor/name >}} CLI:

```bash
webpaas tunnel:open
```

That opens an SSH tunnel to all services on your current environment and produce output like the following:

```bash
SSH tunnel opened on port 30000 to relationship: database
SSH tunnel opened on port 30001 to relationship: redis
```

The port may vary in your case.
You also need to obtain the user, password, and database name from the relationships array, as above.

Then, connect to that port locally using `mongodump` (or your favorite MongoDB tools) to export all data in that server:

```bash
mongodump --port 30000 -u main -p main --authenticationDatabase main --db main
```

(If necessary, vary the `-u`, `-p`, `--authenticationDatabase` and `--db` flags.)

As with any other shell command it can be piped to another command to compress the output or redirect it to a specific file.

For further references, see the [official `mongodump` documentation](https://docs.mongodb.com/database-tools/mongodump/).

## Upgrading

To upgrade to 3.6 from a version earlier than 3.4, you must successively upgrade major releases until you have upgraded to 3.4.
For example, if you are running a 3.0 image, you must upgrade first to 3.2 and then upgrade to 3.4 before you can upgrade to 3.6.

For more details on upgrading and how to handle potential application backward compatibility issues,
see the [MongoDB release notes](https://docs.mongodb.com/manual/release-notes).
