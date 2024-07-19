---
title: "Kafka - Python 101"
excerpt: "Code your first Python applications using Public Cloud Databases for Kafka"
updated: 2024-07-19
---

## Objective

Public Cloud Databases for Kafka allow you to focus on building and deploying cloud applications while OVHcloud takes care of the Kafka infrastructure and maintenance in operational conditions.

Kafka is a platform used for processing streams. It is fundamentally a massively scalable pub/sub message queue.

The purpose of this tutorial is to show you the steps to be able to have your first Python applications that will use Kafka.<br>
One application will be able to subscribe to a topic and consume messsages, the other one will be able to produce and publish messages in a topic.<br>
You will end up with all the basics to develop your own solution using Kafka.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account.
- A Public Cloud Databases for Kafka service running and configured. [This guide](/pages/public_cloud/public_cloud_databases/kafka_02_getting_started) can help you to meet this requirement.
- Following the previous guide, save all certificates in a dedicated folder: 
    - the server certificate as `ca.pem`
    - the user certificate as `service.cert`
    - the user access key as `service.key`
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.12.2.

## Instructions

> [!primary]
>
> All source code is available on the GitHub repository [public-cloud-examples](https://github.com/ovh/public-cloud-examples/tree/main/databases-analytics/databases/kafka-basics/python).
>

### Step 1 - Consume messages

One of the application will subscribe to a topic of your Kafka service and wait to consume any incoming message.

```python
import os

from confluent_kafka import Consumer, KafkaException
from rich.console import Console

# retrieve URI to connect to your Kafka service from your OS environment variables
KAFKA_SERVICE_URI = os.getenv("KAFKA_SERVICE_URI")
if KAFKA_SERVICE_URI is None:
    raise ValueError("KAFKA_SERVICE_URI is not set")

# set up the configuration to access your Kafka service in a secure way
conf = {
    "bootstrap.servers": KAFKA_SERVICE_URI,
    "client.id": "customer",
    "group.id": "readers",
    "security.protocol": "SSL",
    "ssl.ca.location": "./sslcerts/ca.pem",
    "ssl.certificate.location": "./sslcerts/service.cert",
    "ssl.key.location": "./sslcerts/service.key",
}

# create a Kafka consumer instance
consumer = Consumer(conf)
```

As you can see, the first lines of code define the configuration to be used to subscribe to your Kafka service.<br>
Do not forget to set an environment variable called `KAFKA_SERVICE_URI` that will point to your service.<br>
The library `confluent-kafka` provides a class called `Consumer` that will represent your connection to your Kafka service.

```Python
# create a console instance to display messages in a TUI
console = Console()

finished = False
local_count = 0

# subscribe to the "heroes" topic and wait for a message
consumer.subscribe(["heroes"])
```

You then prepare the tool that will help you to have a nice exposition of messages.<br>
All you need to do to at that point is to use the `Consumer` object to subscribe to your Kafka service.

```python
with console.status("Waiting for messages..."):
    while not finished:
        if (msg := consumer.poll(timeout=1.0)) is None:
            continue
        elif msg.error():
            raise KafkaException(msg.error())
        else:
            console.print(f"{msg.offset()}: {msg.key()}:{msg.value().decode()}\n\n")
            local_count += 1
            finished = local_count == 2
```

The final piece of code will wait for incoming messages through the `poll` function.<br>
You will be able to use the `Console` object to show the content of the messages.

### Step 2 - Publish messages

Now that you have an application waiting for messages, let's create one to produce and publish them.

```python 
import os
from confluent_kafka import Producer

# retrieve URI to connect to your Kafka service from your OS environment variables
KAFKA_SERVICE_URI = os.getenv("KAFKA_SERVICE_URI")
if KAFKA_SERVICE_URI is None:
    raise ValueError("KAFKA_SERVICE_URI is not set")

# set up the configuration to access your Kafka service in a secure way
conf = {
    "bootstrap.servers": KAFKA_SERVICE_URI,
    "client.id": "producer",
    "security.protocol": "SSL",
    "ssl.ca.location": "./sslcerts/ca.pem",
    "ssl.certificate.location": "./sslcerts/service.cert",
    "ssl.key.location": "./sslcerts/service.key",
}

# create a Kafka producer instance
producer = Producer(conf)
```

This is done in a very similar way as for your Consumer, and this time you will use a `Producer` object.

```python
# when the message is published, this callback will be triggered
def delivery_callback(err, msg):
    if err:
        print(f"Message failed delivery: {err}")
    else:
        print(f"Published event to topic {msg.topic()} ")


# example data to send as a message
jsonValue = """{
        'id': 1,
        'name': 'Spider-Man (Peter Parker)',
        'description': 'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
    }"""

# create and publish the message to the "heroes" topic
producer.produce(
    "heroes", key="1", value=jsonValue.encode(), callback=delivery_callback
)
producer.flush()
```

It is now time to prepare the elements used to publish a message.<br>
The ```delivery_callback``` allows you to have a control on what to do once your ```Producer``` published the message.<br>
The publishing action is in fact done in two steps:

- First prepare the message in the format needed by Kafka and set the callback function.
- Then use `flush` to use your connection to Kafka and publish the message.

## Go further

[Kafka Official documentation](https://kafka.apache.org/documentation/){.external}

[Confluent Kafka Python library](https://github.com/confluentinc/confluent-kafka-python){.external}

Join our [community of users](/links/community).