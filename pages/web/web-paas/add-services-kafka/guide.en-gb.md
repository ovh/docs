---
title: Kafka (Message queue service)
slug: add-services-kafka
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

It is a framework for storing, reading and analyzing streaming data. See the [Kafka documentation](https://kafka.apache.org/documentation) for more information.

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 3.2  
- 3.4 |

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "service": "kafka25",
    "ip": "169.254.27.10",
    "hostname": "t7lv3t3ttyh3vyrzgqguj5upwy.kafka25.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "kafka.internal",
    "rel": "kafka",
    "scheme": "kafka",
    "type": "kafka:2.5",
    "port": 9092
}
```

## Usage example

{{% endpoint-description type="kafka" /%}}

> [!tabs]      


(The specific way to inject configuration into your application varies. Consult your application or framework's documentation.)
