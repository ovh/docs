---
title: Using alerts with Logs Data Platform
slug: alerting
order: 5
excerpt: With the alerting feature you don't even need to watch your logs, our platform does it for you.
section: Features
---

**Last updated 20th February, 2018**

## Objective

Alerting is one of the most powerful features of the Logs Data Platform. It allows you to stop worrying about your logs and be prepared for a lot of situations: When you don't have any logs of a software for an unexpected long time, when the number of tasks completed is too low, when the traffic on your website is too high, or even when one specific keyword appears in any of your information feeds: all of these use cases can trigger an alert that will send you a message immediately.
 
This guide will help you to configure and use alerts on a particular field. We will provide an example with Apache logs.

## Requirements

In order to understand this guide you should read the following tutorials:
 
- [Quick start of Logs Data Platform](https://docs.ovh.com/fr/logs-data-platform/quick-start/){.external}.
- [Logstash collector on Logs Data Platform](https://docs.ovh.com/fr/logs-data-platform/logstash-input/){.external}.
- [The Filebeat tutorial](https://docs.ovh.com/fr/logs-data-platform/filebeat-logs/){.external}.
 
## Instructions

### Why configuring an alert on the Logs Data Platform ?

The Logs Data Platform provides many ways to watch your logs in real time:

- The **follow stream** functionality in the OVH Manager.
- The **Live Tail** functionality in Graylog.
- The **Graylog dashboards** that refresh themselves in real-time.
- Any software that can query the Graylog or ES APIs (Kibana or Grafana for example).

The goal of the Alerting feature is to give you the freedom to not watch your logs. The Logs Data Platform can automatically inform you when something happens. There are 3 types of alert:

- **Counter alert**, like its name suggests, the counter alert can warn you when the number of logs is above or below a certain threshold.
- **Numeric value alert** is triggered when a certain numeric field has an abnormal value. The value can be the mean value, the sum, the minimum, maximum, and even the standard deviation or the median.
- **Text content alert** is the alert triggered when a field has some exact value.

For the 3 types of alert, you can configure a **grace period**. The **grace period** is a period of time during which the alert won't be triggered again so that you won't get spammed by the same alert over and over again. You can also configure how many last messages you want to include in your alert. This is useful to quickly identify the root causes of your alerts.

### Use case&#58; Alerts for a website powered by an Apache Server

For this tutorial, we will configure the 3 alerts that we can use for a website. These 3 alerts can help you to react immediately in the case of a failure, detect unexpected problems or verify that all your websites are working correctly. But before going into the alerting feature itself, we need to configure our Apache Logging format to include all the information we need. We will also use [Filebeat](https://docs.ovh.com/fr/logs-data-platform/filebeat-logs/){.external} to send our logs to our dedicated Logstash collector on the Logs Data Platform.

#### Apache Server Configuration

We will use the [LTSV](http://ltsv.org){.external} format to send logs, this format is simple enough to be efficiently parsed by the collector. Here is a configuration file sample:

```Apache
<VirtualHost *:80>

    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log "domain:%V\thost:%h\tserver:%A\tident:%l\tuser:%u\ttime:%{%d/%b/%Y:%H:%M:%S %z}t\tmethod:%m\tpath:%U%q\tprotocol:%H\tstatus_int:%>s\tsize_int:%b\treferer:%{Referer}i\tagent:%{User-Agent}i\tresponse_time_int:%D\tcookie:%{cookie}i\tset_cookie:%{Set-Cookie}o\tmessage:%h %l %u %t \"%r\" %>s %b\n"

</VirtualHost>
```

The configuration is inspired by the one you can find in [this tutorial](https://docs.ovh.com/fr/logs-data-platform/apache-logs/){.external}.

#### Logstash and Filebeat configuration

The Logstash collector configuration is kept simple for this tutorial. Here is the **input section** part

```ruby
beats {
    port => 5044
    ssl => true
    ssl_certificate => "/etc/ssl/private/server.crt"
    ssl_key => "/etc/ssl/private/server.key"
}
```

As in the [Filebeat tutorial](https://docs.ovh.com/fr/logs-data-platform/filebeat-logs/){.external}, we will use a simple beats input with SSL.

For the **filter** part we use this configuration:

```ruby
kv {
    value_split => ":"
    field_split => "\t"
}
date {
    match => [ "time", "dd/MMM/YYYY:HH:mm:ss Z"]
}
```

This simple Logstash filter uses the [key value filter plugin](https://www.elastic.co/guide/en/logstash/current/plugins-filters-kv.html){.external} and the [date plugin filter](https://www.elastic.co/guide/en/logstash/current/plugins-filters-date.html){.external} to parse the LTSV format and to parse the date so that our log messages are delivered with the right timestamp (the time of the log message rather than the time of the delivery).

The Filebeat configuration will be similar to the one used in the Filebeat tutorial:

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
   # Make sure no file is defined twice as this can lead to unexpected behaviour.
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
 
   # Name of the registry file. Per default it is put in the current working
   # directory. In case the working directory is changed after running
   # filebeat again, indexing starts from the beginning.
   registry_file: /var/lib/filebeat/registry
 ############################# Output ##########################################
 # Configure what outputs to use when sending the data collected by the beat.
 # Multiple outputs may be used.
 output:
   ### Logstash as output
   logstash:
     # The Logstash hosts
     hosts: ["<your_cluster>-XXXXXXXXXXXXXXXXXX.<your_cluster>.logs.ovh.com:5044"]
     worker: 1
     tls:
       # List of root certificates for HTTPS server verifications
       certificate_authorities:
       - /usr/local/etc/filebeat/ldp-ca.crt
 ############################# Logging #########################################
 # There are three options for the log output: syslog, file, stderr.
 # Under Windows systems, the log files are sent to the file output by default,
 # under all other systems they are sent to syslog by default.
 logging:
   # Send all logging output to syslog. On Windows default is false, otherwise
   # default is true.
   to_syslog: false
   # Write all logging output to files. Beats automatically rotate files if rotateeverybytes
   # limit is reached.
   to_files: true
   # To enable logging to files, to_files option has to be set to true
   files:
   # The directory where the log files are written to.
     path: /var/log/
     # The name of the files where the log files are written to.
     name: filebeat.log
     # Configure log file size limit. If the limit is reached, the log file will be
     # automatically rotated
     rotateeverybytes: 10485760 # = 10MB
     # Number of rotated log files to keep. Oldest files will be deleted first.
     keepfiles: 7
   # Sets the log level. The default log level is error.
   # Available log levels are: critical, error, warning, info, debug
 level: info
```

### Configuring a Counter alert

For this alert we will tackle the following question: How to get alerted when my website is not working anymore?

One of the signs of a non-working website on a dedicated server is the number of access logs from the website. Except in special cases like maintenance, a website should have a steady number of visits during a day. If you want to configure an alert when no traffic is detected, you can for example configure a counter alert on the number of logs.

For this, go to the stream page and use the menu at the right to navigate to the **Alerting** menu.

![Navigate to alert](images/nav-alert.png){.thumbnail}

On this interface, stay on the Counter Tab. Configuring alerts is as easy as filling in the terms describing the behavior of your alerts. For example you can do the following:

Trigger an alert named **No Traffic** when there are less than **3** messages in the last **5** minutes and then wait at  least **5** minutes before triggering a new alert (grace period).

![Alert Creation](images/no-traffic-creation.png){.thumbnail}

The sentence above contains the terms that you have to use to create your alerts. Click on `Add this condition`{.action} and your alert will be up and running immediately.

![Alert Created](images/alert-created.png){.thumbnail}

You can remove the alert by clicking on the `Remove`{.action} button.

As soon as the alert is fired you will receive a mail, detailing the alert condition that triggered the alert.

![No traffic mail](images/mail-no-traffic.png){.thumbnail}

### Configuring a Numeric Value alert

A slow website is a poor experience for your users and can make you lose customers. There are many possible causes for a slowdown : too many connections, a misbehaving web application or an network problem. Fortunately, your Apache logs give you the response time of your server that you can use to trigger an alert when your website is too slow.

To configure an alert based on your website's response time, Go to the **Numeric value alert** tab on the Alerting page. As with the Counter Alert, you have to fill the different fields to create your alert:

![Slow website alert](images/slow-alert.png){.thumbnail}

Here, we have configured an alert to be sent when the minimum value of **response_time_int**  is higher than **1500** in the **last 5 minutes**. That means an alert will be triggered every time you have a web request that took more than 1500 milliseconds (1.5 seconds) to complete. The triggered alert will send you an email similar to the previous one, with a link to the last message included so that you can directly see what pages are too slow.

![Slow website alert](images/slow-mail.png){.thumbnail}

### Configuring a Text Content alert

For this alert, we want to be alerted when there is any error 500 on our website. The **Text Content alert** is the one that you must use when you want some value to be detected in your field. This alert type is located under the Text Content tab in the alerting panel.

Like the previous alert, you have to describe your alert to configure it. Here, the sentence states that the alert must be triggered when the field **status_int** is set to **500**.

![Slow website alert](images/alert-500.png){.thumbnail}

You will then receive an email with the messages included. You can then directly navigate to your Graylog stream for further investigations:

![Slow website alert](images/apache-500.png){.thumbnail}

---

## Go further

- Getting Started: [Quick Start](https://docs.ovh.com/fr/logs-data-platform/quick-start/){.external}
- Documentation: [Guides](https://docs.ovh.com/fr/logs-data-platform/){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms-lab){.external}
- Mailing List: [paas.logs-subscribe@ml.ovh.net](mailto:paas.logs-subscribe@ml.ovh.net){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}

Join our community of users on <https://community.ovh.com/>