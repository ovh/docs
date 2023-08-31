---
title: Varnish
slug: add-services-varnish
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

Varnish is a popular HTTP proxy server, often used for caching.
You usually don't need it with {{< vendor/name >}} as the standard router includes HTTP cache
and a CDN would cover more advanced uses.
But you can include Varnish as a service.

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 7.2  
- 6.3 |

## How it works

All incoming requests go through the [standard router](../define-routes/_index.md).
The Varnish service sits between the router and all apps in the project.

``` mermaid
graph LR
    A(Request) -->B(Router)
    B --> C{Varnish}
    C -->D[App 1]
    C -->E[App 2]
```

## Usage example

{{% endpoint-description type="varnish" noApp=true %}}

The `relationships` block defines the connection between Varnish and your app.
You can define <code>{{< variable "RELATIONSHIP_NAME" >}}</code> as you like.
<code>{{< variable "APP_NAME" >}}</code> should match your app's `name` in the [app configuration](../create-apps/app-reference.md).

The `configuration` block must reference a VCL file inside the `{{< vendor/configdir >}}` directory.
The `path` defines the file relative to the `{{< vendor/configdir >}}` directory.

{{% /endpoint-description %}}

### 2. Create a VCL template

To tell Varnish how to handle traffic, in the `{{< vendor/configdir >}}` directory
add a [Varnish Configuration Language (VCL) template](https://www.varnish-software.com/developers/tutorials/example-vcl-template/).

This template is supplemented by automatic additions from {{< vendor/name >}}.
So you MUST NOT include certain features that you might elsewhere:

- A `vcl_init()` function:

   The function is automatically generated based on the relationships you defined in Step 1.
   Each defined relationship results in a backend with the same name.
- The VCL version at the start:

  This is automatically generated.
- Imports for `std` or `directors`:

  These are already imported.
  You can import other [modules](#include-modules).

The file MUST include:

- A definition of which backend to use in a  `vcl_recv()` subroutine.

  
The logic varies based on whether you have one or more apps.

> [!primary]  
> 
> Misconfigured VCL files can result in incorrect and confusing behavior that's hard to debug.
> {{< vendor/name >}} doesn't help with VCL configuration options beyond the basic connection logic documented here.
> 
> You can see any compilation errors with the [stats endpoint](#stats-endpoint).
> 
> 

#### Example VCL template with one app

To serve one app, your VCL template needs at least the following function:

```bash {location="config.vcl" dir="true" }
sub vcl_recv {
    set req.backend_hint = {{< variable "RELATIONSHIP_NAME" >}}.backend();
}
```

Where `{{< variable "RELATIONSHIP_NAME" >}}` is the name of the relationship you defined in [Step 1](#1-configure-the-service).
With the [example configuration](#example-configuration), that would be the following:

```bash {location="config.vcl" dir="true"}
sub vcl_recv {
    set req.backend_hint = application.backend();
}
```

#### Example VCL template with multiple apps

If you have multiple apps fronted by the same Varnish instance,
your VCL templates needs logic to determine where each request is forwarded.

For example, you might have the following configuration for two apps:

```yaml {configFile="services"}
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

You could then define that all requests to `/blog/` go to the `blog` app and all other requests to the other app:

```bash {location="config.vcl" dir="true"}
sub vcl_recv {
    if (req.url ~ "^/blog/") {
        set req.backend_hint = blog.backend();
    } else {
        set req.backend_hint = main.backend();
    }
}
```

### 3. Route incoming requests to Varnish

Edit your [route definitions](../define-routes/_index.md) to point to the Varnish service you just created.
Also disable the router cache as Varnish now provides caching.

To forward all incoming requests to Varnish rather than your app, you could have the following:


```yaml   
"https://{default}/":
    type: upstream
    upstream: "varnish:http"
    cache:
        enabled: false
```  


Varnish forwards requests to your app based on the specified VCL template.

## Include modules

You can include the following optional modules in your VCL templates to add additional features:

- `cookie`

- `header`

- `saintmode`

- `softpurge`

- `tcp`

- `var`

- `vsthrottle`

- `xkey`


To use them, add an import to your template such as the following:

```bash {location="config.vcl" dir="true"}
import xkey;
```

## Circular relationships

At this time, {{< vendor/name >}} doesn't support circular relationships between services and apps.
That means you can't add a relationship from an app fronted by Varnish to the Varnish service.
If you do so, then one of the relationships is skipped and the connection doesn't work.

## Rate limit connections

Sometimes you want to ensure that users, whether human or machine, can't overload your app with requests.
One tool to help is using Varnish to limit the rate at which connections can be made.

For example, say you want to make sure no one can make more than 20 requests within 10 seconds.
If they do, you want to block them from any more requests for 2 minutes.

To do so, [import the `vsthrottle` module](#include-modules)
and add logic similar to the following to your VCL template:

```bash {location="config.vcl" dir="true"}
import vsthrottle;

sub vcl_recv {
  # The {{< vendor/name >}} router provides the real client IP as X-Client-IP
  # This replaces client.identity in other implementations
  if (vsthrottle.is_denied(req.http.X-Client-IP, 20, 10s, 120s)) {
    # Client has exceeded 20 requests in 10 seconds.
    # When this happens, block that IP for the next 120 seconds.
    return (synth(429, "Too Many Requests"));
  }
  
  # Set the standard backend for handling requests that aren't limited
  set req.backend_hint = application.backend();
}
```

## Clear cache with a push

You may want at times to clear a specific part of your cache when you know the content is outdated.
With Varnish, you can clear the content with [purging and banning](https://varnish-cache.org/docs/trunk/users-guide/purging.html).

The following example shows how to set up purging.

1\. Add an access control list to your VCL template:


```bash {location="config.vcl" dir="true"}
acl purge {
    "localhost";
    "192.0.2.0"/24;
}
```

   This list ensures that only requests from the listed IPs are accepted.
   Choose which IPs to allow.
   If you are sending requests from an app, checkout the [outbound IPs for the region](../development/regions.md#public-ip-addresses).

   Alternatively, you could code in a token that must be sent with the request.

2\. Add purge handling:


```bash {location="config.vcl" dir="true"}
sub vcl_recv {
    if (req.method == "PURGE") {
        # The {{< vendor/name >}} router provides the real client IP as X-Client-IP
        # Use std.ip to convert the string to an IP for comparison
        if (!std.ip(req.http.X-Client-IP, "0.0.0.0") ~ purge) {
            # Deny all purge requests not from the allowed IPs
            return(synth(403,"Not allowed."));
        }
        # Purge cache for allowed requests
        return (purge);
    }
    ...
}
```
  
> [!primary]  
>   The snippet above has been produced for Varnish 7.x. If using a different version, consult the [Varnish documentation](https://varnish-cache.org/docs/) for potential differences in syntax and required parameters.
> 

3\. Set up cache purging to suit your needs.

   The following cURL call gives an example of how this can work:

```bash
curl -X PURGE "{{< variable "URL_TO_PURGE" >}}"
```

## Stats endpoint

The Varnish service also offers an `http+stats` endpoint,
which provides access to some Varnish analysis and debugging tools.

You can't use it from an app fronted by Varnish because of the restriction with [circular relationships](#circular-relationships).
To access the stats, create a **separate app** with a relationship *to* Varnish, but not *from* it.
Define an [app configuration](../create-apps/app-reference.md) similar to the following:

```yaml {configFile="app"}
name: stats-app
type: "php:8.1"

build:
    flavor: none

relationships:
    varnishstats: "varnish:http+stats"
```

You choose any valid name and type.
When the app is deployed, the app can access the Varnish service over HTTP to get diagnostic information.
The following paths are available:

- `/`: returns any error logged when generating the VCL template failed

- `/config`: returns the generated VCL template

- `/stats`: returns the output of `varnishstat`

- `/logs`: returns a streaming response of `varnishlog`


To access the Varnish stats endpoint from the command line:

1\. Connect to your stats app [using SSH](../development/ssh/_index.md): `webpaas ssh --app stats-app`

   (replace `stats-app` with the name you gave the app).
2\. Display the [relationships array](../create-apps/app-reference.md#relationships) with `echo $PLATFORM_RELATIONSHIPS | base64 -d | jq .`,

3\. Query Varnish with `curl {{< variable "HOST" >}}:{{<variable "PORT" >}}/stats`, replacing `{{< variable "HOST" >}}` and `{{< variable "PATH" >}}` with the values from Step 2.

