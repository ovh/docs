---
title: Varnish
slug: varnish
section: Services
---

**Last updated 3rd June 2021**



## Objective  

Varnish is a popular HTTP proxy server, often used for caching.  It is usually not needed on Web PaaS, as each project's router provides an HTTP cache already and most more advanced use cases will use a CDN instead, both of which render Varnish redundant.

However, it is possible to configure a Varnish instance as part of an application if Varnish-specific functionality is needed.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  5.6 |  
|  6.0 |  

## How it works

All incoming requests still go through the environment's router first. When using Varnish, a Varnish service sits between the router and the application server or servers.

```text
web -> router -> varnish -> application
                         -> application2
```


## Configuration

### Add a Varnish service

Add the following to your `.platform/services.yaml` file:


```yaml   
varnish:
    type: varnish:6.0
    relationships:
        application: 'app:http'
    configuration:
        vcl: !include
            type: string
            path: config.vcl
```  


In the `relationships` block, define a relationship (`application`) to the application container (`app`) using the `http` endpoint.  That allows Varnish to talk to the application container.

The configuration block is required, and must reference a VCL file (here `config.vcl`).  The file name is relative to the `.platform` directory.

### Create a VCL template file

The VCL file you provide has three specific requirements over and above the VCL syntax itself.

1\. You MUST NOT define a `vcl_init()` function.  Web PaaS will auto-generate that function based on the relationships you define.  In particular, it will define a "backend" for each relationship defined in `services.yaml`, named the same as the relationship.

2\. You MUST NOT include the preamble at the beginning of the file, specifying the VCL version.  That will be auto-generated as well. You CAN add imports, but not `std` and `directors`, as they're imported already.

3\. You MUST specify the backend to use in `vcl_recv()`.  If you have a single app container/relationship/backend, it's just a single line.  If you want to split requests to different relationships/backends based on some rule then the logic for doing so should be incorporated into the `vcl_recv()` function.


The absolute bare minimum VCL file is:

```bash
sub vcl_recv {
    set req.backend_hint = application.backend();
}
```

Where `application` is the name of the relationship defined in `services.yaml`.  (If the relationship was named differently, use that name instead.)

If you have multiple applications fronted by the same Varnish instance then you will need to include logic to determine to which application a request is forwarded.  For example:

```yaml
varnish:
    type: varnish:6.0
    relationships:
        blog: 'blog:http'
        main: 'app:http'
    configuration:
        vcl: !include
            type: string
            path: config.vcl
```

```bash
# config.vcl
sub vcl_recv {
    if (req.url ~ "^/blog/") {
        set req.backend_hint = blog.backend();
    } else {
        set req.backend_hint = main.backend();
    }
}
```

This configuration will direct all requests to a URL beginning with a `/blog/` path to the application on the relationship `blog`, and all other requests to the application on the relationship `main`.

Besides that, the VCL file, including the `vcl_recv()` function, can be arbitrarily complex to suit the needs of the project.  That includes additional `include` directives if appropriate.  See the [Varnish documentation](https://varnish-cache.org/docs/index.html) for more details on the functionality offered by Varnish.

> [!primary]  
> A misconfigured VCL file can result in incorrect, often mysterious and confusing behavior.  Web PaaS does not provide support for VCL configuration options beyond the basic connection logic documented here.
> 
> 

### Route incoming requests to Varnish

To enable Varnish now, edit the `.platform/routes.yaml` file to point to the Varnish service you just created.  You also need to disable the router cache as it is now entirely redundant with Varnish.

For example:


```yaml   
"https://{default}/":
    type: upstream
    upstream: "varnish:http"
    cache:
        enabled: false
```  


That will map all incoming requests to the Varnish service rather than the application.  Varnish will then, based on the VCL file, forward requests to the application as appropriate.

## Modules

Web PaaS supports a number of optional modules you can include in your VCLs, namely:

* cookie
* header
* saintmode
* softpurge
* tcp
* var
* vsthrottle
* xkey

To use in your VCL, add an import such as:

```bash
import xkey;
```

## Circular relationships

At this time Web PaaS does not support circular relationships between services or applications.  That means you cannot add a relationship in your `.platform.app.yaml` that points to the Varnish service.  If you do so then one of the relationships will be skipped and the connection will not work.  This limitation may be lifted in the future.

## Stats endpoint

The Varnish service also offers an `http+stats` endpoint, which provides access to some Varnish analysis and debugging tools.  To access it, from a dedicated app container add the following to `.platform.app.yaml`:


```yaml   
relationships:
    varnishstats: "varnish:http+stats"
```  


You can then access the `varnishstats` relationship over HTTP at the following paths to get diagnostic information:

* `/`: returns the error if generating the VCL failed with an error
* `/config`: returns the generated VCL
* `/stats`: returns the output of `varnishstat`
* `/logs`: returns a streaming response of `varnishlog`

Note that because of the circular relationship issue noted above this cannot be done on the application that Varnish is forwarding to.  It will need to be run on a separate application container.

To access the Varnish endpoint:

- Connect to your cluster [using ssh](../../development-ssh) or through the CLI `webpaas ssh -p <project id>`,

- Display the [relationships array](../../configuration-app/relationships) with `echo $PLATFORM_RELATIONSHIPS | base64 -d | jq '.'`,

- Query Varnish with `curl varnishstats.internal:8081/stats`, for example, to access the statistics directly. Be sure to update the request according to the name of the relationship.

