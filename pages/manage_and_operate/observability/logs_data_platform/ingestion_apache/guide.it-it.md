---
title: Pushing logs from software - Apache
excerpt: Get to know what is happening on your websites in real time.
updated: 2024-07-30
---

## Objective

Apache access logs are very valuable. They show the activity of your visitors, the page delivery time, the code results, the user agent that accessed your websites, etc. Logs Data Platform helps you to fully analyze this key information.

The default Apache log line looks like this:

```text
51.255.160.250 - - [23/Jan/2016:19:33:03 +0100] "GET / HTTP/1.1" 200 14211 "-" "Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7"
```

This line already gives a lot of information but it can be difficult to extract really useful data from plain text logs. You might know that there is already lot of ways to export your Apache logs: logstash, beats, graylog-collector, syslog-ng, rsyslog, gelf apache module. But as we still have a lot to explore in the Logs Data Platform, let's start with something simple.

This guide will present you with three non-intrusive ways to send logs to the Logs Data platform:

- ask Apache to pipe log entries directly to the platform.
- use [syslog-ng](https://syslog-ng.org/){.external} to parse and send all of your logs
- setup [filebeat](https://www.elastic.co/fr/products/beats/filebeat){.external} with apache module

## Requirements

In order to follow this guide you will need:

- The openssl package: as we are using it to send the logs securely.
- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-account~productId~%27logs%29){.external}
- [To create at least one Stream and get its token.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

## Instructions

### Use Apache to send logs directly

> [!warning]
>
> The following procedure has the advantage of a quick setup but
> is NOT recommended at all in production as it can block the Apache
> process in the case of heavy traffic.
> In production, please use a non-blocking solution like the second solution in this guide, or this one:
> [Shipping logs to Logs Data platform with Filebeat](/pages/manage_and_operate/observability/logs_data_platform/ingestion_filebeat)
>

#### Global Apache configuration

We will first configure Apache2 to send all Virtual Hosts logs to one stream.

> [!warning]
>
> If you have any log related configuration in your virtual hosts, you must remove them or head to the next section to add a specific virtual host configuration.
>

We use the CustomLog format directive to transform Apache logs in LTSV format and ship them to the Logs Data Platform with the proper OVHcloud token. Note that 3 fields are mandatory with the LTSV format; host, message and time (in the RFC 3339 format). Refer to the examples below to learn how to fill in these fields. Please create the file **/etc/httpd/conf-enabled/ldp.conf** or **/etc/apache2/conf-enabled/ldp.conf** (the location of the file depends on your distribution and on your Apache version) and insert the following:

```ApacheConf
 LogFormat "X-OVH-TOKEN:XXXXXXXXXXX\tdomain:%V\thost:%h\tserver:%A\ttime:%{sec}t\tident:%l\tuser:%u\tmethod:%m\tpath:%U%q\tprotocol:%H\tstatus_int:%>s\tsize_int:%b\treferer:%{Referer}i\tagent:%{User-Agent}i\tresponse_time_int:%D\tcookie:%{cookie}i\tset_cookie:%{Set-Cookie}o\tmessage:%h %l %u %t \"%r\" %>s %b\n" combined_ltsv
 CustomLog "|/usr/bin/openssl s_client -connect <your_cluster>.logs.ovh.com:12201" combined_ltsv
 ErrorLog syslog:local1
```


If you need to send your logs to an additional stream, you would need to repeat this snippet and change the LogFormat name **combined_ltsv** of your new snippet to a new name.
Note that you will have to replace the address and the port of `<your_cluster>.logs.ovh.com` with the one you have been assigned to (Check the **Home** page to retrieve it). Ensure that the full path of openssl is correct for your system or it won't work. Also ensure that your `X-OVH-TOKEN` is properly written. This tutorial covers only how to send your access logs to the Logs Data platform. To send your Error logs, [you should configure your syslog template to send logs to Logs Data platform](/pages/manage_and_operate/observability/logs_data_platform/ingestion_syslog_ng). Finally, check that you don't use any CustomLog option in your VirtualHost configuration since the VirtualHost configuration has precedence over global configuration.

#### VirtualHost configuration

If you want to only send logs from a specific VirtualHost, or send specific information about one VirtualHost, use this configuration to send logs to Logs Data platform:

```ApacheConf
<VirtualHost *:80>
   ServerName www.example.com
   ServerAlias example.com
   DocumentRoot /var/www/www.example.com

   LogLevel warn
   ErrorLog /var/log/httpd/www.example.com_error.log
   CustomLog /var/log/httpd/www.example.com_access.log combined
   CustomLog "|/usr/bin/openssl s_client -connect <your_cluster>.logs.ovh.com:12201" "X-OVH-TOKEN:XXXXXXXXXXXXXX\tdomain:%V\thost:%h\tserver:%A\tident:%l\tuser:%u\ttime:%{sec}t\tmethod:%m\tpath:%U%q\tprotocol:%H\tstatus_int:%>s\tsize_int:%b\treferer:%{Referer}i\tagent:%{User-Agent}i\tresponse_time_int:%D\tcookie:%{cookie}i\tset_cookie:%{Set-Cookie}o\tmessage:%h %l %u %t \"%r\" %>s %b\n"
   ErrorLog syslog:local1
</VirtualHost>
```

This is what you see on Graylog when you send your logs. The logs are already nicely parsed and you can immediately launch specific searches on them:

![apache Logs](images/apache-logs.png){.thumbnail}

### Using a syslog-ng template

If you already have syslog-ng on your host and you want to leverage its features (log rotation, automatic reconnection, multiple destinations). Here are the configuration snippets allowing you to use this software.

#### Apache configuration

```ApacheConf
 LogFormat "X-OVH-TOKEN:XXXXXXXXXXX\tdomain:%V\thost:%h\tserver:%A\ttime:%{sec}t\tident:%l\tuser:%u\tmethod:%m\tpath:%U%q\tprotocol:%H\tstatus_int:%>s\tsize_int:%b\treferer:%{Referer}i\tagent:%{User-Agent}i\tresponse_time_int:%D\tcookie:%{cookie}i\tset_cookie:%{Set-Cookie}o\tmessage:%h %l %u %t \"%r\" %>s %b\n" combined_ltsv
 CustomLog /var/log/httpd/access.log combined_ltsv
 ErrorLog syslog:local1
```

The configuration is pretty similar to the one used in the first part of this document. The only change is the path of the log file.

#### Syslog-ng configuration

```text
 source s_apache {
     file("/var/log/httpd/access.log" flags(no-parse));
 };

 template t_apache_access_log {
     template("type:apache-access.log\tX-OVH-TOKEN:XXXXXXXXXXXXXXXX\ttime:${APACHE.TIMESTAMP}\thost:${HOST}\tremote_ip:${APACHE.CLIENT_IP}\trequest:${APACHE.REQUEST_URL}\tstatus_code:${APACHE.REQUEST_STATUS}\treponse_size:${APACHE.CONTENT_LENGTH}\treferer:${APACHE.REFERER}\tuser_agent:${APACHE.USER_AGENT}\tmessage:${MSG}\n");
     template_escape(no);
 };

 destination dt_apache_access_ldp {
     tcp("XXX.logs.ovh.com"
         port(12201)
         tls(ca_dir("/etc/ssl/certs"))
         ts_format("rfc3339") template(t_apache_access_log)
         keep-alive(yes)
         so_keepalive(yes)
         log-fifo-size(30000)
     );
 };

 parser p_apache {
     csv-parser(columns("APACHE.CLIENT_IP", "APACHE.IDENT_NAME", "APACHE.USER_NAME",
 "APACHE.TIMESTAMP", "APACHE.REQUEST_URL", "APACHE.REQUEST_STATUS",
 "APACHE.CONTENT_LENGTH", "APACHE.REFERER", "APACHE.USER_AGENT")
     flags(escape-double-char,strip-whitespace)
     delimiters(" ")
     quote-pairs('""[]')
     );
 };

 log {
     source(s_apache);
     parser(p_apache);
     destination(dt_apache_access_ldp);
 };
```

To keep things brief, this extract has only the parts relevant to the access log file. [The syslog-ng tutorial](/pages/manage_and_operate/observability/logs_data_platform/ingestion_syslog_ng) covers the configuration for any syslog file (like the error log file). This configuration is only valid for syslog-ng 3.8+.

### Apache logs format

If you want to use your own log format and include some useful information here is a cheat sheet for you (Note that the labels follow [the field naming conventions](/pages/manage_and_operate/observability/logs_data_platform/getting_started_field_naming_convention)).

|Recommended Label|About|Format String of Apache mod_log_config|Format String of nginx log format|
|---|---|---|---|
|time|Time the request was received|`%t`|$time_local|
|host|Remote host|`%h`|$remote_addr|
|forwardedfor|X-Forwarded-For header|`%{X-Forwarded-For}i`|$http_x_forwarded_for|
|ident|Remote logname|`%l`||
|user|Remote user|`%u`|$remote_user|
|req|First line of request|`%r`|$request|
|method|Request method|`%m`|$request_method|
|uri|Request URI|`%U%q`|$request_uri|
|protocol|Requested Protocol (usually "HTTP/1.0" or "HTTP/1.1")|`%H`|$server_protocol|
|status|Status code|`%>s`|$status|
|size_int|Size of response in bytes, excluding HTTP headers.|`%B` (or '%b' for compatibility with combined format)|$body_bytes_sent|
|reqsize_int|Bytes received, including request and headers.|`%I` (mod_log_io required)|$request_length|
|referer|Referer header|`%{Referer}i`|$http_referer|
|ua|User-Agent header|`%{User-agent}i`|$http_user_agent|
|vhost|Host header|`%{Host}i`|$host|
|reqtime_microsec_int|The time taken to serve the request, in microseconds|`%D`||
|reqtime_int|The time taken to serve the request, in seconds|`%T`|$request_time|
|cache|X-Cache header|`%{X-Cache}o`|$upstream_http_x_cache|
|runtime_num|Execution time for processing some request,  e.g. X-Runtime header for application server or processing time of SQL for DB server.|`%{X-Runtime}o`|$upstream_http_x_runtime|
|apptime_num|Response time from the upstream server|-|$upstream_response_time|

The full list of logs formats that can be used in Apache are described here [mod_log_config.html](http://httpd.apache.org/docs/current/en/mod/mod_log_config.html){.external}

### Using Filebeat

The latest releases of **Filebeat** have a dedicated module for **Apache2**. This solution is ready-to-use to configure and is more production-ready.
The complete procedure of its installation is described [on this page](/pages/manage_and_operate/observability/logs_data_platform/alerting_stream) in the Apache logs use case.

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
