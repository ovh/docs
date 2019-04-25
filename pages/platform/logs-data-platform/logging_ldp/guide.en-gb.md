---
title: Python 3.x - Push logs with logging-ldp
slug: logging-ldp
order: 20
section: Logging libraries
---

**Last updated 24th April, 2019**

## Objective

This guide will show you how to push your logs to Logs Data Platform using Python 3.x.

[logging-ldp](https://github.com/ovh/logging-ldp){.external} is intended to be a high performance logging formatter and handler to send log entries into Logs Data Platform.

This package includes:

- a TCP/TLS handler to send log entries over TCP with TLS support.
- a formatter to convert logging record into [GELF(1.1)](http://docs.graylog.org/en/latest/pages/gelf.html#gelf-payload-specification){.external}.
- a facility to ensure fields suits the [LDP naming conventions](../field_naming_conventions/guide.en-gb.md){.ref}.


## Requirements

To complete this guide you will need:

- Python 3, we recommend to install [pip](https://pip.pypa.io/en/stable/installing/){.external}.
- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
- [To create at least one Stream and get its token.](../quick_start/guide.en-gb.md){.ref}

## Instructions

### Install

#### Using pip

You can use [pip](https://pip.pypa.io/en/stable/){.external} to install logging-ldp, make sure you have the latest version:


```shell-session
$ pip3 install --upgrade pip
[...]
Successfully installed pip-<version> 
$ pip3 install --upgrade logging-ldp
[...]
Successfully installed logging-ldp-<version> setuptools-18.3.1
```

#### Using sources

logging-ldp is available on the [OVH github repository](https://github.com/ovh/logging-ldp){.external} and can be installed manually:

```shell-session
$ git clone git@github.com:ovh/logging-ldp.git
Cloning into 'logging-ldp'...
remote: Counting objects: 58, done.
remote: Compressing objects: 100% (53/53), done.
remote: Total 58 (delta 26), reused 0 (delta 0)
Receiving objects: 100% (58/58), 9.62 KiB | 0 bytes/s, done.
Resolving deltas: 100% (26/26), done.
Checking connectivity... done.
 
$ cd logging-ldp
$ python3 setup.py install
[...]
Using /usr/lib/python3.x/site-packages
Finished processing dependencies for logging-ldp==<version>
```

### How to send logs

The following example shows how to send log in Graylog TCP input:

```python hl_lines="6 7"
import logging
from logging_ldp.formatters import LDPGELFFormatter
from logging_ldp.handlers import LDPGELFTCPSocketHandler

def setup_logging():
    handler = LDPGELFTCPSocketHandler(hostname="gra1.logs.ovh.com")
    handler.setFormatter(LDPGELFFormatter(token="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"))
    logging.getLogger().addHandler(handler)
    logging.getLogger().setLevel(logging.INFO)
    
if __name__ == '__main__':
    setup_logging()

    logging.info("Test !")
```

### Send additional static meta data

To automatically append meta data on all your logs, you can implement an 
alternate Schema:

```python hl_lines="16 17"
import logging
from marshmallow import fields
from logging_ldp.formatters import LDPGELFFormatter
from logging_ldp.handlers import LDPGELFTCPSocketHandler
from logging_ldp.schemas import LDPSchema

def setup_logging():
    # Load you config there
    config = dict(name="myapp", version="0.0.1")
    
    # Define a custom Schema
    class MyApp(LDPSchema):
        app_name = fields.Constant(config['name'])
        app_version = fields.Constant(config['version'])
       
    handler = LDPGELFTCPSocketHandler(hostname="gra1.logs.ovh.com") 
    handler.setFormatter(LDPGELFFormatter(token="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", schema=MyApp))
    logging.getLogger().addHandler(handler)
    logging.getLogger().setLevel(logging.INFO)


if __name__ == '__main__':
    setup_logging()

    logging.info("Test !")
```

The log entry sent to Graylog will be something like:

```json hl_lines="4"
{
  "_app_name": "myapp",
  "_app_version": "0.0.1",
  "_X-OVH-TOKEN": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "file": "test_thread.py",
  "host": "cdumay-desk",
  "level": 6,
  "line": 36,
  "short_message": "Test !",
  "timestamp": 1556036745.6493497,
  "version": "1.1"
}
```

**Note**: The result is "pretty printed" only for the documentation.

### Send additional intermittent meta data

To define occasional meta data, you can define a Schema with Nested sub-items: 

```python hl_lines="18 20"
import logging
from marshmallow import Schema, fields
from logging_ldp.formatters import LDPGELFFormatter
from logging_ldp.handlers import LDPGELFTCPSocketHandler
from logging_ldp.schemas import LDPSchema

# Define a sub-schema
class User(Schema):
    name = fields.String(required=True)
    age = fields.Integer()

# Define a custom schema to apply on log entries
class AccountInfo(LDPSchema):
    user = fields.Nested(User, required=True)
    manager = fields.Nested(User)

def setup_logging():
    handler = LDPGELFTCPSocketHandler(hostname="gra1.logs.ovh.com")
    handler.setFormatter(LDPGELFFormatter(
        token="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        schema=AccountInfo
    ))
    logging.getLogger().addHandler(handler)
    logging.getLogger().setLevel(logging.INFO)

if __name__ == '__main__':
    setup_logging()

    current_user = dict(name="John Doe")
    boss = dict(name="Roger Smith", age=51)
    logging.info("User has logged", extra=dict(user=current_user, manager=boss))
```

The log entry sent will be:

```json hl_lines="5"
{
  "_manager_age_int": 51,
  "_manager_name": "Roger Smith",
  "_user_name": "John Doe",
  "_X-OVH-TOKEN": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "file": "test_thread.py",
  "host": "cdumay-desk",
  "level": 6,
  "line": 40,
  "short_message": "User has logged",
  "timestamp": 1556037587.4444475,
  "version": "1.1"
}
```

As we can see:

* Objects are transformed to flatten dictionaries: `manager.name` is renamed `manager_name`.
* Fields are types using the [LDP naming convention](../field_naming_conventions/guide.en-gb.md){.ref}: `manager.age` is renamed `manager_age_int`
* Null values are not sent: `user.age`.
* You can set `required=True` to force meta data value or `default=xxx` to add data automatically.

## Go further

- Getting Started: [Quick Start](../quick_start/guide.en-gb.md){.ref}
- Documentation: [Guides](../product.en-gb.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
