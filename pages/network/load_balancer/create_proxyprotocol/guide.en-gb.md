---
title: "Configuring an OVHcloud Load Balancer with ProxyProtocol"
excerpt: Integrate your TCP services behind a Load Balancer with ProxyProtocol
updated: 2025-07-30
---

## Objective

The OVHcloud Load Balancer acts as a proxy. Like a human proxy, it acts as an intermediary, so the client addresses the proxy and the proxy addresses the service provider, on behalf of the client. In this configuration, only the proxy knows both the true client (the user of your service) and the true service provider (one of your servers).

For the visitor, this isn't an issue. They don't need to know the exact server responding to their request; that's an implementation detail. However, for statistical and security reasons, it's sometimes essential for the final server to know the client's true address. By default, it only sees the proxy (in this case, your OVHcloud Load Balancer service).

If you are using an HTTP frontend, we recommend the guide "[Configuring an OVHcloud Load Balancer service - HTTP Headers](/pages/network/load_balancer/create_headers)" which describes the standard way to use HTTP headers to retrieve the IP address, port, and source protocol.

**If you are using a TCP frontend, then this guide is for you.**

## Legal Obligations

You may be required to retain logs and certain traffic data under applicable laws and regulations. It is your responsibility to comply with these obligations.

**For example:**

- [Investigatory Powers Act 2016 (IPA), Section 87](https://www.legislation.gov.uk/ukpga/2016/25/section/87): This section notably empowers the Secretary of State, with Judicial Commissioner approval, to require telecommunications operators to retain "relevant communications data" for up to 12 months. This data is broadly defined but includes information to identify the source and destination of a communication, its date, time, and duration, and specifically covers **Internet Connection Records (ICRs)**, which log website visits and app usage. This requirement is for purposes such as national security and preventing/detecting serious crime.

## Prerequisites

This is an advanced guide. It assumes you're already familiar with the main features of your OVHcloud Load Balancer service, especially **frontends** and **clusters**. If you're not, we recommend checking out the guide "[Configure an OVHcloud Load Balancer HTTP/HTTPS service](/pages/network/load_balancer/create_http_https)." While this guide focuses more on TCP services, the general principles are the same.

You need:

- an OVHcloud Load Balancer service with a functional TCP frontend and farm;
- Nginx or Apache with mod_proxyprotocol on an OVHcloud server.

> [!warning]
> Since ProxyProtocol fields can be forged by a malicious client, they should only be considered if they come from a trusted source.
>
> Therefore, it's essential to limit their use to trusted IP addresses, specifically the outbound IP addresses of your OVHcloud Load Balancer service. Major servers like Nginx and Apache have modules capable of managing this security and trust aspect.

## In Practice

### Obtaining the list of your outbound IP addresses

#### From the OVHcloud Control Panel

The list of IPv4 outbound addresses potentially used by your OVHcloud Load Balancer service can be found on the homepage of your OVHcloud Load Balancer service under "Outbound IPv4".

![Outbound IPv4 address of your OVHcloud Load Balancer service](images/iplb_service.png){.thumbnail}

#### From the OVHcloud API

- List of IP addresses used by your OVHcloud Load Balancer service:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
>

### Introduction to ProxyProtocol

ProxyProtocol was developed by the [HAProxy](http://haproxy.org/) Load Balancer team as the TCP counterpart to standard HTTP headers like X-Forwarded-For. It was designed to forward at minimum:

- the L4 protocol name used (TCP4 for IPv4 or TCP6 for IPv6);
- the source IPv4 or IPv6 address;
- the source port.

When ProxyProtocol is enabled for one of your servers, the OVHcloud Load Balancer service adds a prefix with the ProxyProtocol before sending the rest of the request. Since this modification is intrusive, it is essential to ensure that the server is compatible with this protocol, and if so, which versions are supported.

Indeed, this protocol exists in 2 versions:

- version 1, in text format;
- version 2, in optimized and extensible binary format.

Version 1 is largely sufficient for most uses (although less optimized) and is often the only version supported by compatible software. Version 2, being a binary format, is faster to parse. It also adds the ability to indicate whether the original connection was encrypted (the equivalent of the X-Forwarded-Proto header) as well as the domain specified in the Common Name field of the certificate used, if applicable.

To learn more about ProxyProtocol, please consult the [ProxyProtocol specification](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

### Activating ProxyProtocol for one of your servers

ProxyProtocol must be enabled for each server registered in a server farm. Since this feature is intrusive and cannot be activated transparently, this allows you to test it on a particular machine and then progressively deploy the configuration to an active farm.

Your OVHcloud Load Balancer service supports 4 ProxyProtocol modes:

| Mode | Description |
|---|---|
| v1 | Version 1 in text format. This is the most widely supported version. |
| v2 | Version 2 in binary format without any options. This is an optimized version of version 1. |
| v2-ssl | v2, with a field describing the SSL connection, if applicable. |
| v2-ssl-cn | v2-ssl, with the "Common Name" field of the certificate used, if applicable. |

When ProxyProtocol is enabled for one of your servers, probes automatically insert this header **unless** a specific port has been specified for the probes. In this case, the probe will connect normally to the probe port.

#### From the OVHcloud Control Panel

In the `Clusters`{.action} section, select the farm containing the server on which to enable ProxyProtocol, then click the edit button for the relevant server.

ProxyProtocol is configured via the `ProxyProtocol version`{.action} option. You will find the 4 modes described above.

![Activating ProxyProtocol on a server in a farm](images/edit_server.png){.thumbnail}

Once the desired mode is selected, click `Update`{.action}, then `Deploy zone: YOUR ZONE`{.action} to apply your changes in the relevant zone.

#### From the OVHcloud API

Activating ProxyProtocol via the API is done in the same way as from the OVHcloud Control Panel.
The corresponding API field in the server is proxyProtocolVersion.

- Modify an existing `Server`{.action}:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

- Apply changes:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

### Server-side ProxyProtocol configuration

#### Nginx

Nginx supports ProxyProtocol version 1. It can extract the main information from it, namely the client's IP address and source port as seen by your OVHcloud Load Balancer service. In Nginx, this information is exposed through the `proxy_protocol_addr` variable. Similar to its HTTP counterpart `X-Forwarded-For`, Nginx will use this variable to take the correct source address into account in the logs with the `ngx_http_realip` module.

To use ProxyProtocol with Nginx, you can configure the server section of your configuration with:

```nginx
1. server {
2.     # Enable the Proxy protocol on port 80
3.     listen 80 proxy_protocol;
4.
5.     # Trust the proxy protocol provided informations from your OVHcloud Load Balancer service
6.     # See https://www.ovh.com/manager/cloud/index.html#/network/iplb/ for an up to date list
7.     set_real_ip_from 10.108.0.0/14;
8.     real_ip_header proxy_protocol;
9.
10.    # (optional) Set some headers
11.    proxy_set_header X-Real-IP         $proxy_protocol_addr;
12.    proxy_set_header X-Forwarded-For   $proxy_protocol_addr;
13.
14.    # Insert your regular configuration here
15.    ...
16. }
```

Once configured, you can reload the configuration:

```bash
service nginx reload
```

> [!primary]
>
> This example uses the HTTP protocol for more simplicity. If you are using HTTP, we strongly recommend using HTTP headers instead of ProxyProtocol, unless your OVHcloud Load Balancer service is configured in TCP. This can happen in the case of SSL termination for HTTP/2, for example.
>

For more information on configuring ProxyProtocol in Nginx, please consult [the project's official documentation](https://www.nginx.com/resources/admin-guide/proxy-protocol/).

#### Apache

The management of ProxyProtocol in Apache is still young. An unofficial implementation compatible with Apache 2.4 is available on Github ([https://github.com/roadrunner2/mod-proxy-protocol](https://github.com/roadrunner2/mod-proxy-protocol)) but has not been maintained since 2014. An official implementation is found in the `mod_remoteip` module which is also used to manage headers from the X-Forwarded-For family.

`mod-proxy-protocol` supports ProxyProtocol versions 1 and 2. However, it does not allow specifying a list of source IP addresses authorized to use ProxyProtocol, although this is mentioned in the module's projects.

`mod_remoteip` also supports ProxyProtocol versions 1 and 2. It also adds the ability to specify a list of addresses for which ProxyProtocol should not be enabled. This remains limiting from a configuration perspective. This module is only available in the experimental Apache 2.5 version, although the documentation mentions availability from Apache 2.4.26.

Regardless of the approach chosen, we strongly recommend restricting connections to your servers to the outbound addresses of your OVHcloud Load Balancer service.
This can be easily configured with `iptables`:

```bash
# Trust connections from your OVHcloud Load Balancer service, ONLY
iptables -A INPUT -s 10.108.0.0/14 -p tcp --dport 80 -j ACCEPT
iptables -A INPUT                     -p tcp --dport 80 -j DROP
```

##### **With mod-proxy-protocol**

- Since this module is unofficial, you will first need to download the sources, compile, and install it:

```bash
# Install build tools
sudo apt install git apache2-dev

# Grab the sources
git clone https://github.com/roadrunner2/mod-proxy-protocol.git
cd mod-proxy-protocol

# Build and install the module
sudo apxs -i -a -c mod_proxy_protocol.c
```

- Then configure Apache:

```apache
1. <VirtualHost *:80>
2.     ProxyProtocol On
3.     ...
4. </VirtualHost>
```

- Replace `%h` variables with `%a` in the `LogFormat` directives of the Apache configuration.
- Finally, activate the new configuration with:

```bash
# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

To learn more about configuring the `mod-proxy-protocol` module, please consult [its documentation](http://roadrunner2.github.io/mod-proxy-protocol/mod_proxy_protocol.html).

##### **With mod_remoteip**

- Since the module is experimental, you will first need to install an experimental version of Apache, which is not recommended in a production environment unless you know exactly what you're doing!
- Then configure Apache:

```apache
1. <VirtualHost *:80>
2.     RemoteIPProxyProtocol On
3.     ...
4. </VirtualHost>
```

- Replace `%h` variables with `%a` in the `LogFormat` directives of the Apache configuration.
- Finally, activate the new configuration with:

```bash
# Enable the 'remoteip' module and configuration
a2enmod remoteip

# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

To learn more about configuring the `mod_remoteip` module, please consult [its documentation](https://httpd.apache.org/docs/trunk/mod/mod_remoteip.html#remoteipproxyprotocol).

#### HAProxy

ProxyProtocol was designed by the HAProxy team, making it the software that best manages this protocol. This can be useful in a scenario where tracking the client's true source IP address is essential, but the target software does not support this protocol. This would be the case, for example, for MySQL and PostgreSQL, to name just two.

In this case, a trick is to place a local HAProxy instance in front of the software and ensure logging of requests and their advanced filtering in the local HAProxy instance.

This guide provides an example of a possible configuration for TCP port 3306 used by MySQL. This configuration is not intended to be a complete example but rather to serve as a basis for a functional setup.

- Install HAProxy:

```bash
sudo apt install haproxy
```

- Configure your proxy:

```haproxy
1. listen mysql
2.     # Listen on all interfaces, port 3306, tcp mode (ie: not HTTP)
3.     mode tcp
4.     option tcplog
5.     bind *:3306
6.
7.     # Expect ProxyProtocol header if and only if from a trusted network
8.     # See https://www.ovh.com/manager/cloud/index.html#/network/iplb/ for an up to date list
9.     tcp-request connection expect-proxy layer4 if { src 10.108.0.0/14 }
10.
11.    # Declare local server, on a non standard port to avoid collisions
12.    server mysql 127.0.0.1:3316 check
```

- Finally, activate the new configuration with:

```bash
service haproxy reload
```

## Go Further

Discuss with our [user community](/links/community).