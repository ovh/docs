---
title: Solr (Search service)
slug: solr
section: Services
updated: 2021-06-03
---

**Last updated 12th February 2021**



## Objective  

Apache Solr is a scalable and fault-tolerant search index.

Solr search with generic schemas provided, and a custom schema is also supported. See the [Solr documentation](https://lucene.apache.org/solr/6_3_0/index.html) for more information."

## Supported versions

| **Grid** | 
|----------------------------------|  
|  7.7 |  
|  8.0 |  
|  8.4 |  
|  8.6 |  

### Deprecated versions

The following versions are available but are not receiving security updates from upstream, so their use is not recommended. They will be removed at some point in the future.

| **Grid** | 
|----------------------------------|  
|  3.6 |  
|  4.10 |  
|  6.3 |  
|  6.6 |  
|  7.6 |  

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](../../development-variables#platformsh-provided-variables):

```json  
{
    "service": "solr86",
    "ip": "169.254.251.226",
    "hostname": "csjsvtdhmjrdre2uaoeim22xjy.solr86.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "solr.internal",
    "rel": "solr",
    "path": "solr\/maincore",
    "scheme": "solr",
    "type": "solr:8.6",
    "port": 8080
}
```  

## Usage example

In your `.platform/services.yaml`:


```yaml   
searchsolr:
    type: solr:8.6
    disk: 256
```  


In your `.platform.app.yaml`:


```yaml   
relationships:
    solrsearch: "searchsolr:solr"
```  


You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Go     
>> [Solr - Go](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/golang/solr)  
>>      
> Java     
>> [Solr - Java](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/java/solr)  
>>      
> PHP     
>> [Solr - PHP](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/php/solr)  
>>      
> Python     
>> [Solr - Python](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/python/solr)  
>>      

## Solr 4

For Solr 4, Web PaaS supports only a single core per server called `collection1`.

You must provide your own Solr configuration via a `core_config` key in your ``.platform/services.yaml``:

```yaml
searchsolr:
    type: solr:4.10
    disk: 1024
    configuration:
        core_config: !archive "<directory>"
```

The `directory` parameter points to a directory in the Git repository, in or below the `.platform/` folder. This directory needs to contain everything that Solr needs to start a core. At the minimum, `solrconfig.xml` and `schema.xml`.  For example, place them in `.platform/solr/conf/` such that the `schema.xml` file is located at `.platform/solr/conf/schema.xml`.   You can then reference that path like this -

```yaml
searchsolr:
    type: solr:4.10
    disk: 1024
    configuration:
        core_config: !archive "solr/conf/"
```

## Solr 6 and later

For Solr 6 and later Web PaaS supports multiple cores via different endpoints.  Cores and endpoints are defined separately, with endpoints referencing cores.  Each core may have its own configuration or share a configuration.  It is best illustrated with an example.

```yaml
searchsolr:
    type: solr:8.4
    disk: 1024
    configuration:
        cores:
            mainindex:
                conf_dir: !archive "core1-conf"
            extraindex:
                conf_dir: !archive "core2-conf"
        endpoints:
            main:
                core: mainindex
            extra:
                core: extraindex
```

The above definition defines a single Solr 8.0 server.  That server has 2 cores defined: `mainindex` &mdash; the configuration for which is in the `.platform/core1-conf` directory &mdash; and `extraindex` &mdash; the configuration for which is in the `.platform/core2-conf` directory.

It then defines two endpoints: `main` is connected to the `mainindex` core while `extra` is connected to the `extraindex` core.  Two endpoints may be connected to the same core but at this time there would be no reason to do so.  Additional options may be defined in the future.

Each endpoint is then available in the relationships definition in `.platform.app.yaml`.  For example, to allow an application to talk to both of the cores defined above its `.platform.app.yaml` file should contain the following:

```yaml
relationships:
    solrsearch1: 'searchsolr:main'
    solrsearch2: 'searchsolr:extra'
```

That is, the application's environment would include a `solr1` relationship that connects to the `main` endpoint, which is the `mainindex` core, and a `solr2` relationship that connects to the `extra` endpoint, which is the `extraindex` core.

The relationships array would then look something like the following:

```json
{
    "solr1": [
        {
            "path": "solr/mainindex",
            "host": "248.0.65.197",
            "scheme": "solr",
            "port": 8080
        }
    ],
    "solr2": [
        {
            "path": "solr/extraindex",
            "host": "248.0.65.197",
            "scheme": "solr",
            "port": 8080
        }
    ]
}
```

### Configsets

For even more customizability, it's also possible to define Solr configsets.  For example, the following snippet would define one configset, which would be used by all cores.  Specific details can then be overridden by individual cores using `core_properties`, which is equivalent to the Solr `core.properties` file.

```yaml
searchsolr:
    type: solr:8.4
    disk: 1024
    configuration:
        configsets:
            mainconfig: !archive "configsets/solr8"
        cores:
            english_index:
                core_properties: |
                    configSet=mainconfig
                    schema=english/schema.xml
            arabic_index:
                core_properties: |
                    configSet=mainconfig
                    schema=arabic/schema.xml
        endpoints:
            english:
                core: english_index
            arabic:
                core: arabic_index
```

In this example, the directory `.platform/configsets/solr8` contains the configuration definition for multiple cores.  There are then two cores created: `english_index` uses the defined configset, but specifically the `.platform/configsets/solr6/english/schema.xml` file, while `arabic_index` is identical except for using the `.platform/configsets/solr6/arabic/schema.xml` file.  Each of those cores is then exposed as its own endpoint.

Note that not all core.properties features make sense to specify in the core_properties. Some keys, such as name and dataDir, are not supported, and may result in a solrconfig that fails to work as intended, or at all.

### Default configuration

If no configuration is specified, the default configuration is equivalent to:

```yaml
searchsolr:
    type: solr:8.4
    configuration:
        cores:
            collection1: {}
        endpoints:
            solr:
                core: collection1
```

The default configuration is based on an older version of the Drupal 8 Search API Solr module that is no longer in use.  While it may work for generic cases defining your own custom configuration, core, and endpoint is strongly recommended.

### Limitations

The recommended maximum size for configuration directories (zipped) is 2MB. These need to be monitored to ensure they don't grow beyond that. If the zipped configuration directories grow beyond this, performance will decline and deploys will become longer. The directory archives will be compressed and string encoded. You could use this bash pipeline `echo $(($(tar czf - . | base64 | wc -c )/(1024*1024))) Megabytes` inside the directory to get an idea of the archive size.

The configuration directory is a collection of configuration data, like a data dictionary, e.g. small collections of key/value sets. The best way to keep the size small is to restrict the directory context to plain configurations. Including binary data like plugin `.jar` files will inflate the archive size, and is not recommended.

## Accessing the Solr server administrative interface

Because Solr uses HTTP for both its API and admin interface it's possible to access the admin interface over an SSH tunnel.

```bash
webpaas tunnel:open
```

That will open an SSH tunnel to all services on the current environment, and give an output similar to:

```bash
SSH tunnel opened on port 30000 to relationship: solrsearch
SSH tunnel opened on port 30001 to relationship: database
Logs are written to: /home/myuser/.platformsh/tunnels.log

List tunnels with: webpaas tunnels
View tunnel details with: webpaas tunnel:info
Close tunnels with: webpaas tunnel:close
```

In this example, you can now open `http://localhost:30000/solr/` in a browser to access the Solr admin interface.  Note that you cannot create indexes or users this way, but you can browse the existing indexes and manipulate the stored data.


> [!primary]  
> Web PaaS Dedicated users can use `ssh -L 8888:localhost:8983 <user>@<cluster-name>.ent.platform.sh` to open a tunnel instead, after which the Solr server administrative interface will be available at `http://localhost:8888/solr/`.
> 


## Upgrading

The Solr data format sometimes changes between versions in incompatible ways.  Solr does not include a data upgrade mechanism as it is expected that all indexes can be regenerated from stable data if needed.  To upgrade (or downgrade) Solr you will need to use a new service from scratch.

There are two ways of doing that.

### Destructive

In your `services.yaml` file, change the version of your Solr service *and* its name.  Then update the name in the `.platform.app.yaml` relationships block.

When you push that to Web PaaS, the old service will be deleted and a new one with the name name created, with no data.  You can then have your application reindex data as appropriate.

This approach is simple but has the downside of temporarily having an empty Solr instance, which your application may or may not handle gracefully, and needing to rebuild your index afterward.  Depending on the size of your data that could take a while.

### Transitional

For a transitional approach you will temporarily have two Solr services.  Add a second Solr service with the new version a new name and give it a new relationship in `.platform.app.yaml`.  You can optionally run in that configuration for a while to allow your application to populate indexes in the new service as well.

Once you're ready to cut over, remove the old Solr service and relationship.  You may optionally have the new Solr service use the old relationship name if that's easier for your application to handle.  Your application is now using the new Solr service.

This approach has the benefit of never being without a working Solr instance.  On the downside, it requires two running Solr servers temporarily, each of which will consume resources and need adequate disk space.  Depending on the size of your data that may be a lot of disk space.
