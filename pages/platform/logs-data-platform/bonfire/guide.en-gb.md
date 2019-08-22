---
title: How to query logs from the command line
slug: bonfire
order: 09
section: Use cases
---

**Last updated 10th April, 2019**

## Objective
 
[Bonfire](https://github.com/blue-yonder/bonfire){.external} is an open source command line interface to query Graylog searches via the REST API. It  emulates the experience of using tail on a local file and adds other valuable options.

This guide will help you to query your logs from the Bonfire command line tool.
 

For all of these examples, you will have to replace `<your_cluster>.logs.ovh.com` with your assigned endpoint address. This information is on the email you received when you created your Logs Data Platform account or in the **Home** Page of the manager. Similarly, you will have to replace logs-username with the user you used to connect to Graylog.


## Requirements

- Python
- Pip
- Having fully completed the [Quick Start](../quick_start/guide.en-gb.md){.ref}

## Instructions

### Install

```shell-session
$ pip install --user bonfire
```

### tail -f

```shell-session
$ bonfire -h "<your_cluster>.logs.ovh.com" --endpoint "/api" -u "<your_ldp_username>" --tls -f
Enter password for logs-username@<your_cluster>.logs.ovh.com/api:443:
Please select a stream to query:
0: Stream 'My stream' (id: 55210a04e4b09e9fa4fa0209)
Enter stream number: [0]:
```


### /tmp/what.log

```shell-session
$ bonfire -h "<your_cluster>.logs.ovh.com" --endpoint "/api" -u "<your_ldp_username>" --tls -@ "2 minutes ago" "*" -o "/tmp/what.log"
Enter password for logs-username@<your_cluster>.logs.ovh.com/api:443:
Please select a stream to query:
0: Stream 'My stream' (id: 55210a04e4b09e9fa4fa0209)
Enter stream number: [0]: 0
```


### Password management

Typing your password can be avoided by using the `-k` switch that will store your password using the python keyring, this will store your password in your Desktop keyring system: [https://bitbucket.org/kang/python-keyring-lib](https://bitbucket.org/kang/python-keyring-lib){.external}


### Config file

To avoid repeating argument on the command line, you can create a config file (./bonfire.cfg or ~/.bonfire.cfg) to store where you want to connect:

```conf hl_lines="2 4 7"
[node:default]
host=<your_cluster>.logs.ovh.com
endpoint=/api
username=<your_ldp_username>
tls=True
port=443
default_stream=<your_graylog_stream_id>
```

You can define other named nodes and call them with the --node switch.

```conf hl_lines="2 4 7"
[node:sadev]
host=<your_cluster>.logs.ovh.com
enpoint=/api
username=<your_ldp_username>
tls=True
port=443
default_stream=<your_graylog_stream_id>
```

You can now call named node:

```shell-session
$ bonfire --node sadev -k
 NOTICE  [2015-07-27 12:11:38.13] [2015-07-27 10:11:37.137253Z][9a9b9759-60f5-4609-88c2-e809b5a361a8] search app.preprod.containers-ovh.io # source:172.17.42.1; facility:gelf-rb; line:; module:
 NOTICE  [2015-07-27 12:11:38.14] [2015-07-27 10:11:37.137610Z][9a9b9759-60f5-4609-88c2-e809b5a361a8] bash: dig: command not found # source:172.17.42.1; facility:gelf-rb; line:; module:
 NOTICE  [2015-07-27 12:11:38.14] [2015-07-27 10:11:37.173477Z][9a9b9759-60f5-4609-88c2-e809b5a361a8] 2015-07-27 10:11:37 URL:http://proof.ovh.net/ [2272/2272] -> "/dev/null" [1] # source:172.17.42.1; facility:gelf-rb; line:; module:
 NOTICE  [2015-07-27 12:11:38.14] [2015-07-27 10:11:37.230451Z][08bce56b-9e85-4daa-9c8d-5b39c0d75d69] nameserver 213.186.33.99 # source:172.17.42.1; facility:gelf-rb; line:; module:
 NOTICE  [2015-07-27 12:11:38.14] [2015-07-27 10:11:37.230451Z][08bce56b-9e85-4daa-9c8d-5b39c0d75d69] search app.preprod.containers-ovh.io # source:172.17.42.1; facility:gelf-rb; line:; module:
 NOTICE  [2015-07-27 12:11:38.14] [2015-07-27 10:11:37.230973Z][08bce56b-9e85-4daa-9c8d-5b39c0d75d69] bash: dig: command not found # source:172.17.42.1; facility:gelf-rb; line:; module:
 INFO    [2015-07-27 12:11:38.38] becfb0408cde # source:%{host}; facility:gelf-rb; line:; module:
 INFO    [2015-07-27 12:11:42.29] 58d24d1cb8e3 # source:%{host}; facility:gelf-rb; line:; module:
 INFO    [2015-07-27 12:11:43.38] becfb0408cde # source:%{host}; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:11:44.66] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
```

### Stored queries

You can define named queries and call them from the command line:

**.bonfire.cfg**

```conf
[query:libceph]
query=program:kernel AND libceph
limit=20
```

**Call**

```shell-session
$ bonfire --node sadev -@ 2015-07-20 -k :libceph
 WARNING [2015-07-27 12:13:54.87] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:04.89] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:14.90] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:24.92] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:34.93] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:44.95] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:14:54.97] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:04.98] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:15.00] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:25.01] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:35.03] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:45.04] libceph: mon2 10.99.184.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:15:55.06] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:05.08] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:15.09] libceph: mon2 10.99.184.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:25.11] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:35.12] libceph: mon2 10.99.184.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:45.14] libceph: mon1 10.99.180.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:16:55.16] libceph: mon0 10.99.176.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
 WARNING [2015-07-27 12:17:05.17] libceph: mon2 10.99.184.46:6789 socket closed (con state CONNECTING) # source:172.17.42.1; facility:gelf-rb; line:; module:
```


### Parametric queries

You can also define queries with parameters and define this parameter from the command line:

**.bonfire.cfg**

```conf
[query:containerlogs]
query=_exists_:containerlog_message AND container_uuid:"${uuid}"
fields=container_uuid,containerlog_message
limit=10
```

**Call**

```shell-session
$ bonfire --node sadev -k -x "uuid=08bce56b-9e85-4daa-9c8d-5b39c0d75d69" :containerlogs
 INFO    [2015-07-27 12:22:38.60] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:2015-07-27 10:22:36 URL:http://proof.ovh.net/ [2272/2272] -> "/dev/null" [1]
 INFO    [2015-07-27 12:22:38.61] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:nameserver   213.186.33.99
 INFO    [2015-07-27 12:22:38.61] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:search   app.preprod.containers-ovh.io
 INFO    [2015-07-27 12:22:38.61] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:bash: dig: command not found
 INFO    [2015-07-27 12:22:38.62] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:2015-07-27 10:22:37 URL:http://proof.ovh.net/ [2272/2272] -> "/dev/null" [1]
 INFO    [2015-07-27 12:22:38.62] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:nameserver   213.186.33.99
 INFO    [2015-07-27 12:22:38.62] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:search   app.preprod.containers-ovh.io
 INFO    [2015-07-27 12:22:38.62] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:bash: dig: command not found
 INFO    [2015-07-27 12:22:38.63] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:2015-07-27 10:22:38 URL:http://proof.ovh.net/ [2272/2272] -> "/dev/null" [1]
 INFO    [2015-07-27 12:22:38.63] container_uuid:08bce56b-9e85-4daa-9c8d-5b39c0d75d69; containerlog_message:bash: dig: command not found
```

## Go further

- Getting Started: [Quick Start](../quick_start/guide.en-gb.md){.ref}
- Documentation: [Guides](../product.en-gb.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
