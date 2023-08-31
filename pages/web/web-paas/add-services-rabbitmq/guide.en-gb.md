---
title: RabbitMQ (message queue service)
slug: add-services-rabbitmq
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

[RabbitMQ](https://www.rabbitmq.com/documentation.html) is a message broker
that supports multiple messaging protocols, such as the Advanced Message Queuing Protocol (AMQP).
It gives your apps a common webpaas to send and receive messages
and your messages a safe place to live until they're received.

{{% frameworks %}}

- [Spring](../guides/spring/rabbitmq.md)


{{% /frameworks %}}

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
| - 3.12  
- 3.11  
- 3.10  
- 3.9 |

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 3.8  
- 3.7  
- 3.6  
- 3.5 |

## Usage example

{{% endpoint-description type="rabbitmq" /%}}

> [!tabs]      

## Connect to RabbitMQ

When debugging, you may want to connect directly to your RabbitMQ service.
You can connect in multiple ways:

- An [SSH tunnel](#via-ssh)

- A [web interface](#access-the-management-ui)


In each case, you need the login credentials that you can obtain from the [relationship](#relationship-reference).

### Via SSH

To connect directly to your RabbitMQ service in an environment,
open an SSH tunnel with the [{{< vendor/name >}} CLI](../administration/cli/_index.md).

To open an SSH tunnel to your service with port forwarding,
run the following command:

```bash
webpaas tunnel:single --gateway-ports
```

Then configure a RabbitMQ client to connect to this tunnel using the credentials from the [relationship](#relationship-reference).
See a [list of RabbitMQ client libraries](https://www.rabbitmq.com/devtools.html).

### Access the management UI

RabbitMQ offers a [management plugin with a browser-based UI](https://www.rabbitmq.com/management.html).
You can access this UI with an SSH tunnel.

To open a tunnel, follow these steps.

1\.  

   a) (On [grid environments](../other/glossary.md#grid)) SSH into your app container with a flag for local port forwarding:

```bash
ssh $(platform ssh --pipe) -L 15672:{{< variable "RELATIONSHIP_NAME" >}}.internal:15672
```

    {{< variable "RELATIONSHIP_NAME" >}} is the [name you defined](#2-add-the-relationship).

   b) (On [dedicated environments](../other/glossary.html#dedicated-gen-2)) SSH into your cluster with a flag for local port forwarding:

```bash
ssh $(platform ssh --pipe) -L 15672:localhost:15672
```

2\.  Open `http://localhost:15672` in your browser.

    Log in using the username and password from the [relationship](#relationship-reference).

## Configuration options

You can configure your RabbitMQ service in the [services configuration](#1-configure-the-service) with the following options:

| Name     | Type              | Required | Description                                          |
|----------|-------------------|----------|------------------------------------------------------|
| `vhosts` | List of `string`s | No       | Virtual hosts used for logically grouping resources. |

You can configure additional [virtual hosts](https://www.rabbitmq.com/vhosts.html),
which can be useful for separating resources, such as exchanges, queues, and bindings, into their own namespaces.
To create virtual hosts, add them to your configuration as in the following example:

```yaml {configFile="services"}
rabbitmq:
    type: rabbitmq:3.11
    disk: 512
    configuration:
        vhosts:
            - host1
            - host2
```

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "username": "guest",
    "scheme": "amqp",
    "service": "rabbitmq38",
    "fragment": null,
    "ip": "169.254.57.5",
    "hostname": "iwrccysk3gpam2zdlwdr5fgs2y.rabbitmq38.service._.eu-3.platformsh.site",
    "port": 5672,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "rabbitmq.internal",
    "rel": "rabbitmq",
    "path": null,
    "query": [],
    "password": "ChangeMe",
    "type": "rabbitmq:3.8",
    "public": false,
    "host_mapped": false
}
```
