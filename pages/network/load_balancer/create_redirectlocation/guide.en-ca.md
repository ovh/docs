---
title: "Configuring an OVHcloud Load Balancer service with redirects"
excerpt: Integrate your web services behind a Load Balancer with redirects
updated: 2025-11-27
---

## Objective

The **OVHcloud Load Balancer** operates by default as a proxy. It can also be configured to redirect client traffic to a third-party website. This functionality is essential for scenarios such as **domain name migration** or enforcing the **HTTPS version** of a website. This is known as **HTTP redirection**.

**This guide outlines the process for integrating your web services behind an OVHcloud Load Balancer utilizing HTTP redirections.**

## Requirements

- Have an [OVHcloud Load Balancer](/links/network/load-balancer) offer in your OVHcloud account.
- Have access to your [OVHcloud Control Panel](/links/manager).
- Have access to the [OVHcloud API](/links/api).

## Instructions

### Overview

An HTTP redirect looks like this:

```bash
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/
Content-Type: text/html
Content-Length: 174
```

Custom redirects must be formatted as `<scheme>://<net_loc>/<path>;<params>?<query>#<fragment>`. Only one redirect can be specified per frontend.

Custom redirects can be specified via the OVHcloud Control Panel or via the API, on a new or existing frontend.

### Adding a custom redirect from the OVHcloud Control Panel

You can define a custom redirect from the [OVHcloud Control Panel](/links/manager) in the `Bare Metal Cloud`{.action} section and then `Load Balancer`{.action}.
This can be done either on a new frontend during its creation, or on an existing frontend.

#### Adding a new frontend

In the `Frontends`{.action} section, click on the `Add a frontend`{.action} button to create a new one.

In the frontend editing page, select the `HTTP`{.action} or `HTTPS`{.action} protocol.<br>
Configure the information as usual. However, it is unnecessary to specify the `Default backend`{.action}, as it will not be used.

In the advanced settings, fill in the `HTTP redirect`{.action}.

#### Editing an existing frontend

In the `Frontends`{.action} section, click on the `...`{.action} button to the right of the relevant frontend and select `Edit`{.action}.<br>
Make sure the selected frontend is of the `HTTP` or `HTTPS` protocol. Complete the configuration if necessary.
However, it is unnecessary to specify the `Default backend`{.action}, as it will not be used.

In the advanced settings, fill in the `HTTP redirect`{.action}.

![Configuration of a Frontend Redirect](images/add_redirectlocation.png){.thumbnail}

Once the frontend is configured, click on `Add`{.action} or `Edit`{.action} depending on whether you are configuring a new frontend or an existing one.
Do not forget to deploy the configuration.

To do this, you can either:

- In the `Status` section of the `Home`{.action} tab, click on the `...`{.action} button of your Load Balancer and then click on `Apply the configuration`{.action}.

- In the reminder banner informing you that the configuration is not applied, click on `Apply the configuration`{.action}.

![Application of a Load Balancer Configuration](images/apply_configuration.png){.thumbnail}

### Adding a custom redirect from the OVHcloud API

In the [OVHcloud API](/links/api), redirects are specified in the redirectLocation string:

**Creating a new frontend**

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Parameter|Meaning|
|---|---|
|serviceName|Identifier of your Load Balancer service|
|port|Port(s) of the frontend|
|zone|Deployment zone of the frontend|
|redirectLocation|HTTP redirect URL|

**Updating an existing frontend**

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Parameter|Meaning|
|---|---|
|serviceName|Identifier of your Load Balancer service|
|frontendId|Identifier of the frontend to update|
|redirectLocation|HTTP redirect URL|

**Applying the changes**

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

|Parameter|Meaning|
|---|---|
|serviceName|Identifier of your Load Balancer service|
|zone|Deployment zone of the frontend|

## Go further

Join our [community of users](/links/community).