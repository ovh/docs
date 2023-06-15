---
title: Kafka (Message queue service)
slug: kafka
section: Services
updated: 2021-06-03
---

**Last updated 3rd June 2021**


## Objective  

Apache Kafka is an open-source stream-processing software platform.


It is a framework for storing, reading and analyzing streaming data. See the [Kafka documentation](https://kafka.apache.org/documentation) for more information.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  2.1 |  
|  2.2 |  
|  2.3 |  
|  2.4 |  
|  2.5 |  

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](../../development-variables#platformsh-provided-variables):

```json  
{
    "service": "kafka25",
    "ip": "169.254.46.170",
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

In your ``.platform/services.yaml``:


```yaml   
queuekafka:
    type: kafka:2.5
    disk: 512
```  


In your ``.platform.app.yaml``:


```yaml   
relationships:
    kafkaqueue: "queuekafka:kafka"
```  

> You will need to use `kafka` type when defining the service
>
> ```yaml
> # .platform/services.yaml
> service_name:
>       type: kafka:version
>	disk:512
> ```
>
> and the endpoint `kafka` when defining the relationship
>
> ```yaml
> # .platform.app.yaml
>  relationships:
>       relationship_name: “service_name:kafka”
> ```
>
> Your `service_name` and `relationship_name` are defined by you, but we recommend making them distinct from each other.
>


You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Java     
>> [Kafka - Java](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/java/kafka)  
>> 
> Python     
>> [Kafka - Python](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/python/kafka)  
>>
> Ruby     
>> ``` ruby     
>> 
>> ## With the ruby-kafka gem
>> 
>> # Producer
>> require "kafka"
>> kafka = Kafka.new(["kafka.internal:9092"], client_id: "my-application")
>> kafka.deliver_message("Hello, World!", topic: "greetings")
>> 
>> # Consumer
>> kafka.each_message(topic: "greetings") do |message|
>>   puts message.offset, message.key, message.value
>> end
>> 
>> ```     

(The specific way to inject configuration into your application will vary. Consult your application or framework's documentation.)
