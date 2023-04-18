---
title: RabbitMQ (Message queue service)
updated: 2021-06-03
---

**Last updated 3rd June 2021**



## Objective  

RabbitMQ is an open source message broker software (sometimes called message-oriented middleware) that implements the Advanced Message Queuing Protocol (AMQP).

See the [RabbitMQ documentation](http://www.rabbitmq.com/documentation.html) for more information."

## Supported versions

| **Grid** | 
|----------------------------------|  
|  3.5 |  
|  3.6 |  
|  3.7 |  
|  3.8 |  



## Relationship

The format exposed in the `$PLATFORM_RELATIONSHIPS` [environment variable](/pages/web/web-paas/development-variables#platformsh-provided-variables):

```json  
{
    "username": "guest",
    "scheme": "amqp",
    "service": "rabbitmq38",
    "fragment": null,
    "ip": "169.254.232.78",
    "hostname": "iwrccysk3gpam2zdlwdr5fgs2y.rabbitmq38.service._.eu-3.platformsh.site",
    "public": false,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "rabbitmq.internal",
    "rel": "rabbitmq",
    "query": [],
    "path": null,
    "password": "guest",
    "type": "rabbitmq:3.8",
    "port": 5672,
    "host_mapped": false
}
```  

## Usage example

In your `.platform/services.yaml`:


```yaml   
queuerabbit:
    type: rabbitmq:3.8
    disk: 512
```  


The minimum disk size for RabbitMQ is `512` (MB).

In your `.platform.app.yaml`:


```yaml   
relationships:
    rabbitmqqueue: "queuerabbit:rabbitmq"
```  

> You will need to use `rabbitmq` type when defining the service
>
> ```yaml
> # .platform/services.yaml
> service_name:
>       type: rabbitmq:version
>       disk: 512
> ```
>
> and the endpoint `rabbitmq` when defining the relationship
>
> ```yaml
> # .platform.app.yaml
>  relationships:
>       relationship_name: “service_name:rabbitmq”
> ```
>
> Your `service_name` and `relationship_name` are defined by you, but we recommend making them distinct from each other.
>


You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Go     
>> ``` go     
>> {!> web/web-paas/static/files/fetch/examples/golang/rabbitmq !}  
>> ```     
> Java     
>> ``` java     
>> {!> web/web-paas/static/files/fetch/examples/java/rabbitmq !}  
>> ```     
> PHP     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/rabbitmq !}  
>> ```     
> Python     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/rabbitmq !}  
>> ```     

(The specific way to inject configuration into your application will vary. Consult your application or framework's documentation.)

## Connecting to RabbitMQ

### From your local development environment

For debugging purposes, it's sometimes useful to be able to directly connect to a service instance. You can do this using SSH tunneling. To open a tunnel, log into your application container like usual, but with an extra flag to enable local port forwarding:

```bash
ssh -L 5672:rabbitmqqueue.internal:5672 <projectid>-<branch_ID>@ssh.eu.platform.sh
```

Within that SSH session, use the following command to pretty-print your relationships. This lets you see which username and password to use, and you can double check that the remote service's port is 5672.

```bash
php -r 'print_r(json_decode(base64_decode($_ENV["PLATFORM_RELATIONSHIPS"])));'
```

If your service is running on a different port, you can re-open your SSH session with the correct port by modifying your `-L` flag: `-L 5672:rabbitmqqueue.internal:<remote port>`.

Finally, while the session is open, you can launch a RabbitMQ client of your choice from your local workstation, configured to connect to `localhost:5672` using the username and password you found in the relationship variable.

### Access the management plugin  (Web UI)
In case you want to access the browser-based UI, you have to use an SSH tunnel. To open a tunnel, log into your application container like usual, but with an extra flag to enable local port forwarding:

```bash
ssh -L 15672:rabbitmqqueue.internal:15672 <projectid>-<branch_ID>@ssh.eu.platform.sh
```

After you successfully established a connection, you should be able to open http://localhost:15672 in your browser. You'll find the credentials like mentioned above.

### From the application container

The application container currently doesn't include any useful utilities to connect to RabbitMQ with. However, you can install your own by adding a client as a dependency in your `.platform.app.yaml` file.

For example, you can use [amqp-utils](https://github.com/dougbarth/amqp-utils/) by adding this:

```yaml
dependencies:
 ruby:
   amqp-utils: "0.5.1"
```

Then, when you SSH into your container, you can simply type any `amqp-` command available to manage your queues.

## Configuration

### Virtual hosts

You can configure additional [virtual hosts](https://www.rabbitmq.com/vhosts.html) to a RabbitMQ service, which can be useful for separating resources, such as exchanges, queues, and bindings, to their own namespace. In your `.platform/services.yaml` file define the names of the virtual hosts under the `configuration.vhosts` attribute:

```yaml
rabbitmq:
  type: rabbitmq:3.8
  disk: 512
  configuration:
    vhosts:
      - foo
      - bar
```
