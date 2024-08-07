---
title: CLI - bonfire, querying graylog from a CLI
updated: 2024-08-07
---

## Objective

[Bonfire](https://github.com/blue-yonder/bonfire){.external} is an open source command line interface to query Graylog searches via the REST API. It  emulates the experience of using tail on a local file and adds other valuable options.

This guide will help you to query your logs from the Bonfire command line tool.

For all of these examples, you will have to replace `<your_cluster>.logs.ovh.com` with your assigned endpoint address. This information is on the email you received when you created your Logs Data Platform account or in the **Home** Page of the manager. Similarly, you will have to replace logs-username with the user you used to connect to Graylog.

## Requirements

- Python
- Pip
- Having fully completed the [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

## Instructions

### Install

```shell-session
$ pip install --user bonfire
```

### tail -f

```shell-session
$ bonfire -h "<your_cluster>.logs.ovh.com" --port 443 --endpoint "/api" -u "<your_ldp_username>" --tls -f
Enter password for logs-username@<your_cluster>.logs.ovh.com/api:443:
Please select a stream to query:
0: Stream 'My stream' (id: 55210a04e4b09e9fa4fa0209)
Enter stream number: [0]:
```

### Password management

Typing your password can be avoided by using the `-k` switch that will store your password using the python keyring, this will store your password in your Desktop keyring system.

### Config file

To avoid repeating argument on the command line, you can create a config file (./bonfire.cfg or ~/.bonfire.cfg) to store where you want to connect:

```conf
[node:default]
host=<your_cluster>.logs.ovh.com
endpoint=/api
username=<your_ldp_username>
tls=True
port=443
default_stream=<your_graylog_stream_id>
```

You can define other named **nodes** and call them with the --node switch.

```conf
[node:sadev]
host=<your_cluster>.logs.ovh.com
enpoint=/api
username=<your_ldp_username>
tls=True
port=443
default_stream=<your_graylog_stream_id>
```

You can now call named node **sadev**:

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

Note that the listing will contain only your logs.

### Stored queries

You can define named queries and call them from the command line.

You can index some logs first by using the following curl command. Don't forget to replace **<YOUR-WRITE-TOKEN>** by the X-OVH-TOKEN of your stream and **<YOUR-CLUSTER>** by the address of your cluster.

```shell-session
$ ubuntu@server:~$ echo -e '{"version":"1.1",  "_X-OVH-TOKEN":"<YOUR-WRITE-TOKEN>", "host": "example.org", "short_message": "A short message that helps you identify what is going on", "full_message": "Backtrace here\n\nmore stuff", "level": 1, "_user_id": 9001, "_some_info": "foo", "some_metric_num": 42.0 }\0' | \
openssl s_client -quiet -no_ign_eof -connect <YOUR-CLUSTER>.logs.ovh.com:12202
```

Use this command multiple times to generate multiple logs.

Add the following to your previous configuration file **.bonfire.cfg**:

```conf
[query:ldp]
query=user_id:9001 AND some_metric_num:>40
limit=20
```

Here is how you call bonfire with the **ldp** query.

```shell-session
$ bonfire :ldp
Enter password for <USERNAME>@<YOUR-CLUSTER>.logs.ovh.com:443/api:
1[2024-08-05 18:56:40.81] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:42.30] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:42.69] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:43.62] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:44.69] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:44.67] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
1[2024-08-05 18:56:45.70] A short message that helps you identify what is going on # source:example.org; facility:; line:; module:
```

### Parametric queries

You can also define queries with parameters and define this parameter from the command line.

You can index some logs first by using the following curl command. Don't forget to replace **<YOUR-WRITE-TOKEN>** by the X-OVH-TOKEN of your stream and **<YOUR-CLUSTER>** by the address of your cluster.

```shell-session
$ ubuntu@server:~$ echo -e '{"version":"1.1",  "_X-OVH-TOKEN":"<YOUR-WRITE-TOKEN>", "host": "example.org", "short_message": "A short message that helps you identify what is going on", "full_message": "Backtrace here\n\nmore stuff", "level": 1, "_user_id": 9001, "_some_info": "foo", "some_metric_num": 42.0 }\0' | \
openssl s_client -quiet -no_ign_eof -connect <YOUR-CLUSTER>.logs.ovh.com:12202
```

Use this command multiple times to generate multiple logs.

If you want to use a parametric query **user_id** for a field named **user_id**, you can use the following form for your query in your **.bonfire.cfg**:

```conf
[query:user_id]
query=user_id:"${user_id}"
fields=short_message,user_id
```

**Call**

```shell-session
$ bonfire :user_id -x user_id=9001
Enter password for <USERNAME>@<YOUR-CLUSTER>.logs.ovh.com:443/api:
1[2024-08-05 19:22:13.56] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:13.94] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:14.29] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:14.65] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:15.70] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:16.29] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:16.74] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:17.12] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:17.56] A short message that helps you identify what is going on # short_message:; user_id:9001
1[2024-08-05 19:22:17.93] A short message that helps you identify what is going on # short_message:; user_id:9001
```

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
