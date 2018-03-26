---
title: Tracking slow MySQL queries with Logs Data Platform
slug: mysql-slow-queries
order: 9
excerpt: Keep your MySQL database at high speed with Logs Data Platform!
section: Use cases
---

**Last updated 27th February, 2018**

## Objective

MySQL is one of the most popular database software. It has many features and can answer to complex queries with great performance. But with time, your database expands itself, its complexity grows, and the performance will naturally decline. There are many tips available to improve the speed of your queries but to rectify this you will have to know which queries are slow.

This guide will help you to track your slowest queries and send them to Logs Data Platform for further analysis.

## Requirements

Before, you must read these three guides:

- [Starting with Logs Data Platform.](https://docs.ovh.com/fr/logs-data-platform/quick-start/){.external}
- [How to setup a Logstash input?](https://docs.ovh.com/fr/logs-data-platform/logstash-input/){.external}
- [Using Filebeat with Logs Data Platform.](https://docs.ovh.com/fr/logs-data-platform/filebeat-logs/){.external}

## Instructions

### Configure the MySQL slow query logs
To send your logs to Logs Data Platform you first need to activate the slow query logs in your MySQL configuration.

I recommend you to refer to the official [MySQL documentation](http://dev.mysql.com/doc/){.external} for your own version of MySQL. For example here is a working configuration on MySQL 5.6:


```ini
# Here you can see queries with especially long duration
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow-queries.log
long_query_time = 0.5
```

If you add theses lines to your MySQL configuration file and restart it, MySQL will then log any query taking longer than 0.5 second to complete in the file */var/log/mysql/slow-queries.log*

Here is a sample of the lines produced by the slow query log:

```
 # Time: 161223 16:43:49
 # User@Host: guest[guest] @ localhost []  Id:     2
 # Query_time: 0.734103  Lock_time: 0.000161 Rows_sent: 72761  Rows_examined: 518199
 SET timestamp=1482507829;
 select * from salaries left join employees on salaries.emp_no = employees.emp_no where employees.first_name Like '%ba%' ORDER BY salaries.salary ASC, employees.last_name ASC;
 # Time: 161223 16:43:52
 # User@Host: guest[guest] @ localhost []  Id:     2
 # Query_time: 0.628527  Lock_time: 0.000216 Rows_sent: 72750  Rows_examined: 518199
 SET timestamp=1482507832;
 select * from salaries left join employees on salaries.emp_no = employees.emp_no where employees.first_name Like '%yo%' ORDER BY salaries.salary ASC, employees.last_name ASC;
 # Time: 161223 16:51:08
 # User@Host: guest[guest] @ localhost []  Id:     2
 # Query_time: 0.649018  Lock_time: 0.000223 Rows_sent: 72963  Rows_examined: 518199
 SET timestamp=1482508268;
 select * from salaries left join employees on salaries.emp_no = employees.emp_no where employees.first_name Like '%er%' ORDER BY salaries.salary ASC, employees.last_name ASC;
 # Time: 161223 16:51:11
 # User@Host: guest[guest] @ localhost []  Id:     2
 # Query_time: 0.609382  Lock_time: 0.000199 Rows_sent: 77524  Rows_examined: 518199
 SET timestamp=1482508271;
 select * from salaries left join employees on salaries.emp_no = employees.emp_no where employees.first_name Like '%de%' ORDER BY salaries.salary ASC, employees.last_name ASC;
```

Slow query logs are multi-line logs giving information:

- The time of creation of the log.
- The user, the host, and the thread Id associated with the query.
- The query duration time, with the table lock duration time, and the number of rows sent and examined.
- The timestamp of the actual query.
- The query itself.


### Setup Logstash collector for slow log queries

Our favorite way to send MySQL slow query logs is to use a Logstash collector with a Filebeat input and a custom filter that uses Grok extensively. Create a Logstash collector with the port 5044 exposed (or any other port of your choice) on Logs Data Platform and go to the configuration page.

Here is the configuration of the input section:

```ruby
 beats {
     port => 5044
     ssl => true
     ssl_certificate => "/etc/ssl/private/server.crt"
     ssl_key => "/etc/ssl/private/server.key"
 }
```

We use a standard [Beats input](https://www.elastic.co/guide/en/logstash/2.4/plugins-inputs-beats.html){.external} with SSL activated. The port setting must be identical to the one you chose when you created the collector.

For the filter we will use custom [grok patterns](https://www.elastic.co/guide/en/logstash/2.4/plugins-filters-grok.html){.external}. These patterns parse the different lines of the MySQL input and allow Logstash to parse the lines one by one.

Here are the patterns used for this configuration:

```ruby
 OVHMYSQLTIME ^# Time:.*
 OVHMYSQLHOST ^# User@Host: %{USER:query_user}?(\[%{WORD}\])?\s*@?\s*%{HOSTNAME:query_host}\s*\[%{IP:query_ip}?](\s*Id:\s*%{NUMBER:thread_id})?.*
 OVHMYSQLSTATS ^# Query_time:\s*%{NUMBER:query_time_num:float}\s*Lock_time:\s*%{NUMBER:lock_time_num}\s*Rows_sent:\s*%{NUMBER:rows_sent_int}\s*Rows_examined:\s*%{NUMBER:rows_examined_int:integer}(\s*Rows_affected:\s*%{NUMBER:rows_affected_int:integer})?(\s*Rows_read:\s*%{NUMBER:rows_read_int:integer})?
 OVHMYSQLUSEDB use %{WORD:database};
 OVHMYSQLBYTES ^# Bytes_sent: %{NUMBER:bytes_sent_num:float}
 OVHMYSQLQUERY ^SET timestamp=%{NUMBER:timestamp:integer};\n%{GREEDYDATA:query}
```

Each pattern can parse a specific line of the log. You can add your own if necessary. You can see a new one used to parse a Bytes_sent line for example. These patterns create the fields and follow the [field naming convention](https://docs.ovh.com/fr/logs-data-platform/field-naming-conventions/){.external} of Logs Data Platform.

Finally, here is the filter configuration:

```ruby
 multiline{
     pattern => "(^# Time:.*)?^# User@Host:.*"
     negate => true
     what => previous
 }
 
 grok { match => [ "message", "%{OVHMYSQLTIME}" ] }
 if ("_grokparsefailure" in [tags]) {
     mutate {
         remove_tag => [ "_grokparsefailure" ]
     }
 } else {
     drop { }
 }
 grok { match => [ "message", "%{OVHMYSQLHOST}" ] }
 if ("_grokparsefailure" in [tags]) {
     mutate {
         remove_tag => [ "_grokparsefailure" ]
     }
 }
 grok { match => [ "message", "%{OVHMYSQLSTATS}"] }
 if ("_grokparsefailure" in [tags]) {
     mutate {
         remove_tag => [ "_grokparsefailure" ]
     }
 }
 grok { match => [ "message", "%{OVHMYSQLBYTES}"] }
 if ("_grokparsefailure" in [tags]) {
     mutate {
         remove_tag => [ "_grokparsefailure" ]
     }
 }
 grok { match => [ "message", "%{OVHMYSQLUSEDB}"] }
 if ("_grokparsefailure" in [tags]) {
     mutate {
         remove_tag => [ "_grokparsefailure" ]
     }
 }
 grok { match => [ "message", "%{OVHMYSQLQUERY}" ] }
 date {
     match => [ "timestamp", "UNIX" ]
 }
```

This filter looks quite complex but it actually follows a simple algorithm:

- The first part is the [multi-line filter](https://www.elastic.co/guide/en/logstash/2.4/plugins-filters-multiline.html){.external}: This filter will take the individual lines from the beats input and wait for the pattern to match. Here, it aggregates every line starting by the # Time or # User@Host prefix: It will takes any subsequent lines as a part of the previous event.
- The second part is a Grok filter with the # Time pattern. Due to the multi-line filter pattern and to the layout of the logs, a line starting with this pattern will be a single event. Since we do not plan to use any value of this event, we drop it. If the line didn't match, we remove the tag _grokparsefailure to allow the next grok patterns to run.
- For the subsequent grok filters, the behavior is the following: match any line of the event with a pattern to extract any useful field and if there is no match remove the _grokparsefailure tag.
- Finally, the date filter extracts the timestamp of the event into the field @timestamp.

Once your configuration has been saved and tested, launch your collector to run it and get a hostname. This hostname will help you to configure Filebeat.

### Configure Filebeat on your system

We cover Filebeat in depth in [another tutorial](https://docs.ovh.com/fr/logs-data-platform/filebeat-logs/){.external}. Here is a sample filebeat.yml configuration file for the MySQL Logs.


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
      - /var/log/mysql/slow-queries.log
        input_type: log
        document_type: mysql
        fields:
          mysql_version: 5.6.31
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
    worker: 1
    tls:
      # List of root certificates for HTTPS server verifications
      certificate_authorities:
      - /usr/local/etc/filebeat/ldp-ca.crt
############################# Logging #########################################
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

You have to replace the hosts attribute with the hostname of your collector. Don't forget to place the CA Certficate in the directory configured by the certificate_authorities setting. Here is the CA certificate download link for our hosted collectors: (Right-Click then `Save As`{.action}): [SSL CA certificate](https://logs.ovh.com/certs/dedicated-ca.crt){.external}. Launch Filebeat and try to run some slow queries in your database. For this you can use this [database sample](https://github.com/datacharmer/test_db){.external} and use join and like queries.

### Exploit your results in Graylog

A fully parsed log looks like this:

![slow_graylog](images/mysql_slow_graylog.png){.thumbnail}

- The **query time** is already available for further analysis.
- You can track the **users and the hosts** that trigger the slowest queries.
- You have the **number of lines** scanned and returned

All this information can help you to analyse the most difficult queries for your database. You will know when to scale and when your database is too big for your hardware or when to optimize your queries. Of course it is always better to have a nice dashboard to display your own key performance indicators. One way to have this critical information as soon as it arrives is to use the [alerting feature.](https://docs.ovh.com/gb/en/logs-data-platform/alerting/){.external}

![slow_graylog](images/mysql_slow_dashboard.png){.thumbnail}


## Go further

- Join our community of users on <https://community.ovh.com/>
- Getting Started: [Quick Start](https://docs.ovh.com/fr/logs-data-platform/quick-start/){.external}
- Documentation: [Guides](https://docs.ovh.com/gb/en/logs-data-platform/){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms-lab){.external}
- Mailing List: [paas.logs-subscribe@ml.ovh.net](mailto:paas.logs-subscribe@ml.ovh.net){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}