---
title: Shipping logs to Logs Data Platform with Filebeat
slug: filebeat-logs
order: 7
section: Use cases
---

**Last updated 23rd February, 2018**

## Objective

[Filebeat](https://github.com/elastic/beats/tree/master/filebeat){.external} is an open source file harvester, mostly used to fetch logs files and feed them into logstash. Together with Logstash, Filebeat is a really powerful tool that allows you to parse and send your logs to PaaS logs in a elegant and non intrusive way (except installing filebeat of course).


This guide will describe how to ask OVH to host your own dedicated Logstash on the Logs Data Platform and how to setup Filebeat on your system to forward your logs to it. It will also present you with some configuration setup you can use on Logstash to further structure your logs.

## Requirements

Note that in order to complete this tutorial, you should have at least:

- [Activated your Logs Data Platform account](https://docs.ovh.com/gb/en/logs-data-platform/quick-start/){.external}.
- [Created one Stream and get its token](https://docs.ovh.com/gb/en/logs-data-platform/tokens-logs-data-platform/){.external}.


## Instructions

### Simple Logstash 2.x Configuration on Logs Data Platform

This simple configuration is here to make it easier for you to see your logs, later on, you will find more advanced configurations that will breakdown your code. If you are already familiar with Logstash configuration on the Logs Data Platform, you can skip this one. Otherwise, it is a good start point to get it up and running. On Logs Data Platform manager, create a collector by doing the following:

1. Click on `Host a new collector`{.action}
2. Give a name, a short description, select "Logstash 2.x" as engine,
3. Attach your Graylog stream to logstash by using the list. Please refer to [this guide first](https://docs.ovh.com/gb/en/logs-data-platform/quick-start/){.external} if you need to create a new one.
4. Enter `5044` as exposed port. If you change it, you will have to also change it in the input section of your Logstash configuration.
5. Click on `Create this collector`{.action}  to add it.
6. Now please click on `Configuration`{.action}, then fill the following snippet.

On the input section, add:

```ruby
 beats {
     port => 5044
         ssl => true
             ssl_certificate => "/etc/ssl/private/server.crt"
             ssl_key => "/etc/ssl/private/server.key"
  }
```

On the filter section, add:

```ruby
 mutate {
     rename => {
         "source" => "filename"
     }
 }
```

This simple filter allows you to keep the original filename under the filename field. If you do not configure this filter, the filename, which is at first written in the "source" field, would be overwritten by our Output codec with the hostname of the filebeat host. By using this filter, you preserve the filename under the **filename** field.

Once configured, you can launch your logstash by clicking on `Start`{.action} button. At the end the procedure, a hostname will appear in green, meaning your input has started. You will need this hostname for your Filebeat configuration.

### Setup Filebeat 5.X in your system

Filebeat supports many platforms as listed here [https://www.elastic.co/downloads/beats/filebeat](https://www.elastic.co/downloads/beats/filebeat){.external}

You can decide to setup Filebeat from a package or to compile it from source (you will need the latest [go compiler](https://golang.org/){.external} to compile it) or just download the binary to start immediately.

For this part, head to [Filebeat download website](https://www.elastic.co/downloads/beats/filebeat){.external} to download the best version for your distribution. On Linux, try the Linux 64 bit if you don't know which one to choose.

The following configuration files have been tested on the latest version of Filebeat available at the time of writing (**5.4.0**).

The Debian installation package will install the config file in the following directory: `/etc/filebeat/filebeat.ym`.


### Configure Filebeat 5.X on your system

Filebeat expect a configuration file named **filebeat.yml** .

The following example will be for Apache logs and syslog files but you can easily prospect anything else. Here is a list of things to check before starting Filebeat.

1. You must attach a type to any file you parse so that in Logstash, you will be able to select the correct Grok for your file.
2. For each file (aka prospector) you can define any additional static fields allowing you to further classify your logs. This is done by using the **fields** configuration option. Later on you will see how to parse your logs depending on the type you send.
3. For the configuration to work, the important part is to replace *hosts: ["`<your_cluster>-XXXXXXXXXXXXXXXXXXX.<your_cluster>.logs.ovh.com:5044`"] with the hostname given by Logs Data Platform.
4. You should also put the SSL Certificate authority of the dedicated input into a file, (ex: /usr/local/etc/filebeat/ldp-ca.crt). The input SSL CA certificate is exposed below.

#### Filebeat configuration

```ruby
 ############################# Filebeat ######################################
 filebeat:
   # List of prospectors to fetch data.
   prospectors:
   # Each - is a prospector. Below are the prospector specific configurations
   # Paths that should be crawled and fetched. Glob based paths.
   # To fetch all ".log" files from a specific level of subdirectories
   # /var/log/*/*.log can be used.
   # For each file found under this path, a harvester is started.
   # Make sure not file is defined twice as this can lead to unexpected behaviour.
     -
          paths:
          - /var/log/apache2/access.log
          input_type: log
          document_type: apache
          fields:
              apache_version: 2.2.9
          fields_under_root: true
 
     -
          paths:
          - /var/log/apache2/error.log
          input_type: log
          document_type: apache-error
          fields:
              apache_version: 2.2.9
          fields_under_root: true
 
     -
          paths:
          - /var/log/syslog
          input_type: log
          document_type: syslog
          fields:
              syslog_format: legacy
              syslog_version: 3.5
          fields_under_root: true
 
 # Name of the registry file. Per default it is put in the current working
 # directory. In case the working directory is changed after when running
 # filebeat again, indexing starts from the beginning again.
   registry_file: /var/lib/filebeat/registry
 ############################# Output ##########################################
 # Configure what outputs to use when sending the data collected by the beat.
 # Multiple outputs may be used.
 output:
   ### Logstash as output
   logstash:
     # The Logstash hosts
     hosts: ["<your_cluster>-XXXXXXXXXXXXXXXXXX.<your_cluster>.logs.ovh.com:5044"]
     ssl.certificate_authorities: ["/usr/local/etc/filebeat/dedicated-ca.crt"]
 ############################ Logging #########################################
 # There are three options for the log ouput: syslog, file, stderr.
 # Under Windos systems, the log files are per default sent to the file output,
 # under all other system per default to syslog.
 logging:
   # Send all logging output to syslog. On Windows default is false, otherwise
   # default is true.
   to_syslog: false
   # Write all logging output to files. Beats automatically rotate files if rotateeverybytes
   # limit is reached.
   to_files: true
   # To enable logging to files, to_files option has to be set to true
   files:
   # The directory where the log files will written to.
     path: /var/log/
     # The name of the files where the logs are written to.
     name: filebeat.log
     # Configure log file size limit. If limit is reached, log file will be
     # automatically rotated
     rotateeverybytes: 10485760 # = 10MB
     # Number of rotated log files to keep. Oldest files will be deleted first.
     keepfiles: 7
   # Sets log level. The default log level is error.
   # Available log levels are: critical, error, warning, info, debug
 level: info
```

#### SSL CA Certificate

Here is the CA certificate you can use to verify the certificate presented by our hosted inputs. You can also download it directly from this link (Right-Click then **Save As**): [SSL CA
cert](https://logs.ovh.com/certs/dedicated-ca.crt){.external}.

```
 -----BEGIN CERTIFICATE-----
 MIIF4zCCA8ugAwIBAgIJAK/HFqmambIvMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYD
 VQQGEwJGUjEPMA0GA1UECAwGRnJhbmNlMQ4wDAYDVQQHDAVQYXJpczEMMAoGA1UE
 CgwDT1ZIMQ0wCwYDVQQLDARMb2dzMRUwEwYDVQQDDAxsb2dzLm92aC5jb20xIzAh
 BgkqhkiG9w0BCQEWFHBhYXMubG9nc0BtbC5vdmgubmV0MB4XDTE2MDkyMjE0NTE1
 NFoXDTI2MDkyMDE0NTE1NFowgYcxCzAJBgNVBAYTAkZSMQ8wDQYDVQQIDAZGcmFu
 Y2UxDjAMBgNVBAcMBVBhcmlzMQwwCgYDVQQKDANPVkgxDTALBgNVBAsMBExvZ3Mx
 FTATBgNVBAMMDGxvZ3Mub3ZoLmNvbTEjMCEGCSqGSIb3DQEJARYUcGFhcy5sb2dz
 QG1sLm92aC5uZXQwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDSTOXI
 PHAp/XMLfGD7AVswvlEoBwxvsqP8RG6tE3uF1KLdDhGkuVdK8s4zBBS7ivO9j2O4
 +ghyDMflXBdSuir7y7jHHYzsIdlPuL69lkbwlq4GPMWvPnFZMXxpmxMucu8nWtsB
 Jnu8V8kmuCGcQ17T3WEEO3hXWHpSuUN1TeLgqNEuOXCrWeOMMpFOvNAhqEI9JUgq
 prJ6A9CuVHLUaN2ak+Bp83FBekOonjtX0RXypKWs2Pb6B2VTAH5J3XPZXkfuc0GD
 8SVqOVItpx52Iln8sfVqdfZR2SSgnleqI5NvaS5U2Q9gRoaY3sjxWqkxfFCkaEtM
 iZZe5tVmrTNCeW5UOcULhVPDt718SefM/WXrRMeHU2XC7vnCl5JDkbAa/FTY+oMG
 3fBb7ORYkuMb+3xGULL3jt66vvrkqVhOgnIRVoflD29qdXY2beIlA6aaBulDLxbU
 7x7e8QF0yR3M+z/2mL1yEnhjzxDgmBZqxj+LobHw4A1qQJi5RKDC0OWzYTBnJd8r
 nU329dbdpAjluivwc2Qdg6DLmI0GQyoArn1pDRG20YXAdp3KU7pkn+qXljZthxJB
 Ry2r/h2AyylLkMTHz4pQEoVqDBNNp9YzMFZwgTWO/g6FMHJJdmmckM5QfDeF6Koh
 6EjIKF9yUpJzLhi2KHauQyay3K6l1n12N1fpTQIDAQABo1AwTjAdBgNVHQ4EFgQU
 saFErdEgTRYCOnMdxZC/UnpCJpwwHwYDVR0jBBgwFoAUsaFErdEgTRYCOnMdxZC/
 UnpCJpwwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAdr2TGTFRL1bk
 Eg1oyexufBb1H79Gt5Pve5fZYfgzAQh4UgWkGpPkCwWiCWjYA45gORI7r5rvUadJ
 YPp0/L2bc3Xo578A9xvTrChlQrJw0ZWQFgDpYPWwju+IOuTKSPdi/Vksj+VqrCJp
 xwvk18NQN4yCPtfNspc3xpsosZZKW8BfrTq5xwM17aw5JAJokC6eaGCIbsHm8jFX
 PnYeaXiQU3ATwpIrwQoq1N1qeM+wmpb3s5lM4vJS2D8KlPztLatgRG3aIa9y3DJf
 Ytp7r/CmwrThFDFB8eNFywaQPgsscwm14rQrV3AnB8Tm6JmH/m0E6umi3lEGrmKs
 WcIpyuuYQn39USXSCfMoSWd/2F9z/k23yYe93e+O3fyqij40ajxjPOmD0w04j+d2
 JO5g5Hd3zsIGOyvOTh9uwZBDkpulMKHo2Zm6IPMm/76wNstwsHawlcDKtznB7G9h
 ahpYO026Y2pF5tS0hVWnZT0v2b/hVMh4M+lewyYp79tHnB/otBAtOCS9gU3sTyVX
 p8nbO5g7acb6X9RHuoVm1Q73rRa7AqrlhnEXiSziIo44YTCcqsHhmT3BW5E8ycgX
 3s5CG2J6dPFPF1JjZtBkxK/VemsDzRyiD11WD7RXjEcsSIgXL6jxhzpggrqP3oG/
 s5cyBkGzjin4VI1uNmCDMB9fnn6tv2k=
 -----END CERTIFICATE-----
```

##### Launch Filebeat

Launch the Filebeat binary or service to test your config file and head to your apache website for an example of how to send some logs. You will see this kind of log in Graylog:

![beat_graylog](images/beats_graylog.png){.thumbnail}

Note the type value (apache or syslog or apache-error) that indicates the source file of the log message. You can easily display only your apache access logs for example by typing in the search bar **type:apache**.

### Extending functionality

It's cool we have our logs but we can make them even more useful. By specifying the right configuration in Logstash, we can parse them and enrich the log messages with custom fields. For this you have to tweak two items:

- the filter configuration in Logstash
- the Grok patterns configuration in Logstash

The main idea is to define custom fields in Grok patterns and to use these Groks in the Filter Section of Logstash. Head to the Logstash Configuration interface in the Logs Data Platform Manager by clicking on `Configuration`{.action} in your input panel. Here are some valid custom Grok you can use for Apache and Syslog:

#### Grok Pattern configuration

```ruby
 OVHCOMMONAPACHELOG %{IPORHOST:clientip} %{USER:ident} %{USER:auth} [%{HTTPDATE:timestamp}] "(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion_num:float})?|%{DATA:rawrequest})" %{NUMBER:response_int:int} (?:%{NUMBER:bytes_int:int}|-)
 OVHCOMBINEDAPACHELOG %{OVHCOMMONAPACHELOG} %{QS:referrer} %{QS:agent}
```

A Grok pattern is a pattern in the following form %{SYNTAX:SEMANTIC}. This pattern will allow you to specify the fields in a log of line in the order in which they appear. Note that we customize the fields by specifying the actual type of number types and by suffixing them with '_num' or '_int' as explained in the [Logs Data Platform fields convention tutorial](https://docs.ovh.com/gb/en/logs-data-platform/field-naming-conventions/){.external}. Now that the Grok are defined, you can use them freely in your Logstash filter configuration.

#### Logstash Filter Configuration

```ruby
 filter {
       mutate {
           rename => {
               "source" => "filename"
           }
       }
      if [type] == "apache" {
        grok {
            match => { "message" => "%{OVHCOMMONAPACHELOG}" }
            patterns_dir => "/opt/logstash/patterns"
        }
        if ("_grokparsefailure" in [tags]) {
            mutate {
               remove_tag => [ "_grokparsefailure" ]
             }
            grok {
               match => [ "message", "%{OVHCOMBINEDAPACHELOG}" ]
               patterns_dir => "/opt/logstash/patterns"
               named_captures_only => true
              }
       }
    }
    if [type] == "syslog" {
       grok {
            match => { "message" => "%{SYSLOGBASE}" }
        }
    }
 }
```

In this configuration you can see how Logstash will parse your logs. It will use the type field you defined before in the Filebeat configuration. If it matches "apache" for example, it will try to match the log line with the Grok COMMONAPACHELOG, if the Grok fails, it will add a tag **_grokparsefailure**. We use this tag to relaunch the Grok parsing by using another Grok We use this tag to relaunch the grok parsing by using another Grok. This is how you can specify several Grok for diverse messages that could be in one log file.

Note also how the syslog part of the filter uses the default Grok Pattern SYSLOGBASE provided by Logstash to parse the syslog lines sent by Filebeat. There are a lot of Grok Patterns already available in Logstash, check the links at the end to see how you can effortlessly parse any kind of log source.

Once the configuration is done, click on `Update Configuration`{.action} at the bottom of the page. You can really easily test your Configuration afterwards by using the button **Test** on the Input Panel. This will launch a task that will check if the Input and Filter part of the configuration are valid. You will see the following output if it is:

```
 Configuration OK
```

Once done, restart the input and wait for it to be active. Don't worry you won't lose any logs in the meantime, Filebeat automatically tracks the offset of the last log sent in the log file. Get to your stream to watch your brand new and parsed logs lines. This is what you get in Graylog when you use these filters:

![filter_graylog](images/filter_graylog.png){.thumbnail}

As you can see, the response code got its own field, as the bytes transmitted that you can already use in a graph to monitor the global traffic going through one particular page or website. you can also see all the traffic requested by a particular IP, and easily find the kind of content or web page requested.

### Conclusion and useful resources

Filebeat is a really useful tool to send the content of your current log files to Logs Data Platform. Combined with the filter in Logstash, it offers a clean and easy way to send your logs without changing the configuration of your software. There is a lot you can do with Logstash and Filebeat. Don't hesitate to check the links below to master these tools.

- Configuration's details: [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration-details.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration-details.html){.external}
- Getting started: [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html){.external}
- Grok Patterns Documentation: [https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html](https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html){.external}
- Current Grok Pattern reference: [https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns](https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns){.external}
- Even a logstash_forwarder to filebeat tutorial: [https://www.elastic.co/guide/en/beats/filebeat/current/migrating-from-logstash-forwarder.html](https://www.elastic.co/guide/en/beats/filebeat/current/migrating-from-logstash-forwarder.html){.external}

---

## Go further

- Getting Started: [Quick Start](https://docs.ovh.com/gb/en/logs-data-platform/quick-start/){.external}
- Documentation: [Guides](https://docs.ovh.com/gb/en/logs-data-platform/){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms-lab){.external}
- Mailing List: [paas.logs-subscribe@ml.ovh.net](mailto:paas.logs-subscribe@ml.ovh.net){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}