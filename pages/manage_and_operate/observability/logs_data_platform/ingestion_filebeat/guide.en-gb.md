---
title: Pushing logs with a forwarder - Filebeat (Linux)
updated: 2024-06-24
---

## Objective

[Filebeat](https://github.com/elastic/beats/tree/master/filebeat){.external} is an open source file harvester, used to fetch logs files and can be easily setup to feed them into Logs Data Platform.

The main benefits of Filebeat are its resilient protocol to send logs, and a variety of ready-to-use modules for most of the common applications.

This guide will describe how to setup Filebeat OSS on your system for forwarding your logs on Logs Data Platform. It will also present you with some configuration setup useful to further structure your logs.

> [!warning]
>
> As a consequence of the upcoming [OpenSearch 2.X upgrade](/pages/manage_and_operate/observability/logs_data_platform/upgrade_upgrade_to_opensearch_2), we recommend using an alternative such as [Fluent Bit](/pages/manage_and_operate/observability/logs_data_platform/ingestion_kubernetes_fluent_bit/).
>

## Requirements

Note that in order to complete this tutorial, you should have at least:

- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-account~productId~%27logs%29){.external}
- [To create at least one Stream and get its token.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

## Instructions

### Setup Filebeat OSS 7.X in your system

Filebeat supports many platforms as listed here [https://www.elastic.co/downloads/beats/filebeat](https://www.elastic.co/downloads/beats/filebeat){.external}

You can decide to setup Filebeat OSS from a package or to compile it from source (you will need the latest [go compiler](https://golang.org/){.external} to compile it) or just download the binary to start immediately.

For this part, head to [Filebeat OSS download website](https://www.elastic.co/fr/downloads/past-releases#filebeat-oss){.external} to download the best version for your distribution.

The following configuration files have been tested on the latest version of Filebeat OSS compatible with OpenSearch (**7.12.1**).

The package will install the config file in the following directory: `/etc/filebeat/filebeat.yml`.

> [!warning]
> Do not use a version superior than the 7.12 version. They are currently not compatible with OpenSearch.
> More information in the [matrix compatibility documentation](https://opensearch.org/docs/latest/clients/agents-and-ingestion-tools/index/#compatibility-matrix-for-beats){.external}.

### Configure Filebeat OSS 7.X on your system

In the following example we will enable Apache and Syslog support, but you can easily prospect [anything else](https://www.elastic.co/guide/en/beats/filebeat/7.12/filebeat-modules.html){.external}.

Filebeat expects a configuration file named **filebeat.yml** .

1. For the configuration to work, it is mandatory to replace hosts: ["`<your_cluster>.logs.ovh.com:5044`"] with the hostname given by Logs Data Platform.
2. You should also ensure to specify the `X-OVH-TOKEN` of the related stream.

#### Filebeat configuration

```yaml
###################### Filebeat Configuration Example #########################

# This file is an example configuration file highlighting only the most common
# options. The filebeat.reference.yml file from the same directory contains all the
# supported options with more comments. You can use it as a reference.
#
# You can find the full configuration reference here:
# https://www.elastic.co/guide/en/beats/filebeat/index.html

# For more available modules and options, please see the filebeat.reference.yml sample
# configuration file.

#=========================== Filebeat inputs =============================

filebeat.inputs:

# Each - is an input. Most options can be set at the input level, so
# you can use different inputs for various configurations.
# Below are the input specific configurations.

- type: log

  # Change to true to enable this input configuration.
  enabled: false

  # Paths that should be crawled and fetched. Glob based paths.
  paths:
    - /var/log/*.log
    #- c:\programdata\elasticsearch\logs\*

  # Exclude lines. A list of regular expressions to match. It drops the lines that are
  # matching any regular expression from the list.
  #exclude_lines: ['^DBG']

  # Include lines. A list of regular expressions to match. It exports the lines that are
  # matching any regular expression from the list.
  #include_lines: ['^ERR', '^WARN']

  # Exclude files. A list of regular expressions to match. Filebeat drops the files that
  # are matching any regular expression from the list. By default, no files are dropped.
  #exclude_files: ['.gz$']

  # Optional additional fields. These fields can be freely picked
  # to add additional information to the crawled log files for filtering
  #fields:
  #  level: debug
  #  review: 1

  ### Multiline options

  # Multiline can be used for log messages spanning multiple lines. This is common
  # for Java Stack Traces or C-Line Continuation

  # The regexp Pattern that has to be matched. The example pattern matches all lines starting with [
  #multiline.pattern: ^\[

  # Defines if the pattern set under pattern should be negated or not. Default is false.
  #multiline.negate: false

  # Match can be set to "after" or "before". It is used to define if lines should be append to a pattern
  # that was (not) matched before or after or as long as a pattern is not matched based on negate.
  # Note: After is the equivalent to previous and before is the equivalent to next in Logstash
  #multiline.match: after

#============================= Filebeat modules ===============================

filebeat.config.modules:
  # Glob pattern for configuration loading
  path: ${path.config}/modules.d/*.yml

  # Set to true to enable config reloading
  reload.enabled: false

  # Period on which files under path should be checked for changes
  #reload.period: 10s

#================================ General =====================================

# The name of the shipper that publishes the network data. It can be used to group
# all the transactions sent by a single shipper in the web interface.
#name:

# The tags of the shipper are included in their own field with each
# transaction published.
#tags: ["service-X", "web-tier"]

# Optional fields that you can specify to add additional information to the
# output.
fields_under_root: true
fields:
  X-OVH-TOKEN: 'xxxxxxxxxxxxxxxxxxxxx'

#================================ Outputs =====================================

# Configure what output to use when sending the data collected by the beat.

#----------------------------- Logstash output --------------------------------
output.logstash:
  # Boolean flag to enable or disable the output module.
  enabled: true

  # The Logstash hosts
  hosts: ["<your_cluster>.logs.ovh.com:5044"]

  # Set gzip compression level.
  compression_level: 3

  # Enable SSL support. SSL is automatically enabled if any SSL setting is set.
  ssl.enabled: true

  # Optional SSL configuration options. SSL is off by default.
  # List of root certificates for HTTPS server verifications
  # ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]

#================================ Processors =====================================

# Configure processors to enhance or manipulate events generated by the beat.

processors:
  - add_host_metadata: ~
  - add_cloud_metadata: ~

#================================ Logging =====================================

# Sets log level. The default log level is info.
# Available log levels are: error, warning, info, debug
#logging.level: debug

# At debug level, you can selectively enable logging only for some components.
# To enable all selectors use ["*"]. Examples of other selectors are "beat",
# "publish", "service".
#logging.selectors: ["*"]
```

You can also use our [OpenSearch endpoint](/pages/manage_and_operate/observability/logs_data_platform/ingestion_opensearch_api_mutualized_input) to send your logs. This endpoint support ingest and then ensures a higher performance and a higher compatibility with the modules selected. For legal reasons, we do not support X-Pack modules on this endpoint but any OSS module is supported. To enable this endpoint, replace the Logstash Output configuration with the following snippet:

```yaml
#==================== Output template setting ==========================

setup.template.enabled: false
setup.ilm.enabled: false

#-------------------------- OpenSearch output ------------------------------
output.elasticsearch:
  # Array of hosts to connect to.
  hosts: ["<your-cluster>.logs.ovh.com:9200"]

  # Protocol - either `http` (default) or `https`.
  protocol: "https"

  # Authentication credentials - either API key or username/password.
  username: "<username>"
  password: "<password>"
  index: "ldp-logs"
  # Header for OpenSearch 2.X
  headers:
    X-Es-Compat: "7.10"

```

> [!warning]
>
> The headers section of the output configuration is mandatory to ensure compatibility with OpenSearch 2.X.
>


This configuration deactivates the template configuration (unneeded for our endpoint). You need to provide your credentials **<username>** and **<password>** of your account. Like all Logs Data Platform APIs you can also use [tokens](/pages/manage_and_operate/observability/logs_data_platform/security_tokens). Don't change **ldp-logs** since it is our special destination index.

When you use our OpenSearch endpoint with filebeat, it will use the [ingest module](https://www.elastic.co/guide/en/logstash/7.12/use-ingest-pipelines.html){.external} to parse and structure the logs.

#### Enable Apache Filebeat module

To enable the apache2 support on Filebeat, call the following command:

```shell-session
$ ldp@ubuntu:~$ sudo filebeat modules enable apache
```

It will generate a new module file: **/etc/filebeat/modules.d/apache.yml**, please change it to include all your apache2 access/error path files:

```yaml
- module: apache
  # Access logs
  access:
    enabled: true

    # Set custom paths for the log files. If left empty,
    # Filebeat will choose the paths depending on your OS.
    var.paths: ["/var/log/apache2/access.log*","/var/log/apache2/ssl_access.log*"]

  # Error logs
  error:
    enabled: true

    # Set custom paths for the log files. If left empty,
    # Filebeat will choose the paths depending on your OS.
    var.paths: ["/var/LOG/apache2/error_log*","/var/log/apache2/ssl_error_log*"]
```

#### Enable System Filebeat module

Syslog and authentication supports are part of the system Filebeat module, to enable it:

```shell-session
$ ldp@ubuntu:~$ sudo filebeat modules enable system
```

Once again, it will generate a file **/etc/filebeat/modules.d/system.yml**

```yaml
- module: system
  # Syslog
  syslog:
    enabled: true

    # Set custom paths for the log files. If left empty,
    # Filebeat will choose the paths depending on your OS.
    var.paths: ["/var/log/syslog*"]

  # Authorization logs
  auth:
    enabled: true

    # Set custom paths for the log files. If left empty,
    # Filebeat will choose the paths depending on your OS.
    var.paths: ["/var/log/auth.log*"]
```

Ensure both file path exists on your system.

#### Enable pipelines

If you use the "Elasticsearch output", be sure to setup the pipelines by using the following command:

```shell-session
$ filebeat setup --pipelines --modules apache,system
```

Filebeat will then connect to OpenSearch and setup the pipelines needed by your modules.

#### Launch Filebeat

Launch the Filebeat binary or service to test your config file and head to your apache website for an example of how to send some logs. You will see this kind of log in Graylog:

```shell-session
$ ldp@ubuntu:~$ sudo systemctl restart filebeat.service
```

or

```shell-session
$ ldp@ubuntu:~$ sudo /etc/init.d/filebeat restart
```

![beat_graylog](images/beats_graylog.png){.thumbnail}

Note the type value (apache or syslog or apache-error) that indicates the source file of the log message. You can easily display only your apache access logs for example by typing in the search bar **fileset_module:apache2**.

### Conclusion and useful resources

Filebeat is a handy tool to send the content of your current log files to Logs Data Platform. It offers a clean and easy way to send your logs without changing the configuration of your software. Don't hesitate to check the links below to master this tool.

- Configuration's details: [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration-details.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration-details.html){.external}
- Getting started: [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html){.external}
- Learn how to configure Filebeat and Logstash to add your own extra filters: [Dedicated input - Logstash](/pages/manage_and_operate/observability/logs_data_platform/ingestion_logstash_dedicated_input)

## Going further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
