---
title: Python 2.x - Push logs with Djehouty
slug: djehouty
order: 10
section: Logging libraries
---

**Last updated 10th April, 2019**

## Objective

This guide will show you how to push your logs to Logs Data Platform using Python 2.x.

[Djehouty](https://github.com/ovh/djehouty){.external} is intended to be a set of logging formatters and handlers to easily send log entries into Logs Data Platform.

This package includes:

- for [GELF](http://docs.graylog.org/en/latest/pages/gelf.html){.external}:
    - a TCP/TLS handler to send log entries over TCP with TLS support.
    - a formatter to convert logging record into GELF(1.1).
- for [LTSV](http://ltsv.org/){.external}:
    - a TCP/TLS handler to send log entries over TCP with TLS support.
    - a formatter to convert logging record into LTSV.


## Requirements

To complete this guide you will need:

- Python 2, we recommend to install [pip](https://pip.pypa.io/en/stable/installing/){.external}.
- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
- [To create at least one Stream and get its token.](../quick_start/guide.en-gb.md){.ref}

## Instructions

### Install

#### Using pip

You can use [pip](https://pip.pypa.io/en/stable/){.external} to install Djehouty, make sure you have the latest version:


```shell-session
$ pip install --upgrade pip
[...]
Successfully installed pip-<version> 
$ pip install --upgrade djehouty
[...]
Successfully installed djehouty-<version> setuptools-18.3.1
```

#### Using sources

Djehouty is available on the [OVH github repository](https://github.com/ovh/djehouty){.external} and can be installed manually:

```shell-session
$ git clone git@github.com:ovh/djehouty.git
Cloning into 'djehouty'...
remote: Counting objects: 58, done.
remote: Compressing objects: 100% (53/53), done.
remote: Total 58 (delta 26), reused 0 (delta 0)
Receiving objects: 100% (58/58), 9.62 KiB | 0 bytes/s, done.
Resolving deltas: 100% (26/26), done.
Checking connectivity... done.
 
$ cd djehouty
$ python setup.py install
[...]
Using /usr/lib/python2.7/site-packages
Finished processing dependencies for djehouty==<version>
```

### How to send logs

The following examples assume that you already have a working stream. Moreover, you will have to change the address and the ports of the endpoint for the one you have been assigned to. To retrieve the address and the ports of your endpoint, head to the **About** page in the Manager. To send log messages, just use the handler of the desired format with the following parameters ('*' means required):

|Parameter|Gelf|LTSV|
|---|---|---|
|host *|your assigned endpoint. Ex : `gra1.logs.ovh.com`||
|port *|Refer to the PaaS Logs ports list||
|level|logging.DEBUG or higher||
|use_tls|True or False (depends on the chosen port)||
|static_fields *|`{"X-OVH-TOKEN": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"}`||
|null_character|True|Not Supported|

The complete list of parameters supported by Djehouty can be found on [github](https://github.com/ovh/djehouty){.external}.


#### Example&#58; Use case with GELF over TCP/TLS

```python hl_lines="7 9"
import logging
from djehouty.libgelf.handlers import GELFTCPSocketHandler
 
gelf_logger = logging.getLogger('djehouty-gelf')
gelf_logger.setLevel(logging.DEBUG)
gelf_logger.addHandler(GELFTCPSocketHandler(
    host            = "gra1.logs.ovh.com",
    port            = 12202,
    static_fields   = {"X-OVH-TOKEN": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"},
    use_tls         = True,
    level           = logging.DEBUG,
    null_character  = True,
))

gelf_logger.info('test')
```

#### Example&#58; Use case with LTSV over TCP/TLS

```python hl_lines="7 9"
import logging
from djehouty.libltsv.handlers import LTSVTCPSocketHandler

ltsv_logger = logging.getLogger('djehouty-ltsv')
ltsv_logger.setLevel(logging.DEBUG)
ltsv_logger.addHandler(LTSVTCPSocketHandler(
    host            = "gra1.logs.ovh.com",
    port            = 12201,
    static_fields   = {"X-OVH-TOKEN": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"},
    use_tls         = True,
    level           = logging.DEBUG
))

ltsv_logger.info('test')
```

### Send additional meta data

If you have many handler, you can use the [logging.LoggerAdapter](https://docs.python.org/2/library/logging.html#loggeradapter-objects){.external} class to add extra.

The following example uses the LTSV logger defined above:

```python
mylogger = logging.LoggerAdapter(
    ltsv_logger,
    extra = {"myvar": 5}
)
mylogger.info('test')
```

You can add specific log meta for each entry using the extra parameter, the following example uses the LTSV logger defined above:

```python
ltsv_logger.info("Hello '%s'", 'John', extra={"lang": 'en'})
ltsv_logger.info("Bonjour '%s'", 'John', extra={"lang": 'fr'})
```

## Go further

- Getting Started: [Quick Start](../quick_start/guide.en-gb.md){.ref}
- Documentation: [Guides](../product.fr-fr.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
