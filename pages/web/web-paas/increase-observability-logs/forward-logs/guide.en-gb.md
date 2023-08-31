---
title: Forward {{< vendor/name >}} and Blackfire logs
slug: forward-logs
section: Logs
---

**Last updated 31st August 2023**



## Objective  

You might use a service to analyze logs from various parts of your fleet.
You might want to consolidate all your logs in one place that everyone has access to
without needing to grant them access to each project individually.

In such cases, forward your logs from {{< vendor/name >}} and Blackfire to a third-party service.
You can use a [service with an integration](#use-a-log-forwarding-integration)
or any service that supports a [syslog endpoint](#forward-to-a-syslog-endpoint) or [HTTP endpoint](#forward-to-an-http-endpoint).

Log forwarding is available for Grid and {{% names/dedicated-gen-3 %}} projects.
For {{% names/dedicated-gen-2 %}} projects, see how to [log remotely with `rsyslog`](../../dedicated-gen-2/architecture/options.md#remote-logging).

Logs to `stdout` and `stderr` are forwarded.
Logs in files can't be forwarded.

To enable log forwarding in a project, you need to be a [project admin](../../administration/users.md).
You also need your project to have the capability for log forwarding.
To get that, contact [support](https://console.platform.sh/-/users/~/tickets/open).

## Use a log forwarding integration

Certain services have a specific integration for forwarding logs.
If your third-party service isn't supported, you can forward to a [syslog endpoint](#forward-to-a-syslog-endpoint).

### Integrated third-party services

Integrations exist for the following third-party services to enable log forwarding:

- [New Relic](https://newrelic.com/)

- [Splunk](https://www.splunk.com/)

- [Sumo Logic](https://www.sumologic.com/)


### Enable a log forwarding integration

#### Using the CLI 

To enable log forwarding for a specific project using the [{{< vendor/name >}} CLI](../../administration/cli/_index.md),
follow the steps for your selected service.

> [!tabs]      

To start forwarding logs, [trigger a redeploy](../../development/troubleshoot.md#force-a-redeploy).

#### In the Console

To enable log forwarding for a specific project from the Console,
follow these steps:

1\. Navigate to your project.

2\. Click {{< icon settings >}} **Settings**.

3\. Click **Integrations**.

4\. Click **Add Integration**.

5\. Select the integration you want to enable.

6\. In the **Configure your integration** window,

   specify your configuration options.
7\. Click **Add Integration**.

   The new integration overview is displayed,
   and you can view your logs in the **Activity** section.

## Forward to a syslog endpoint

Syslog is a standard protocol for transferring log messages.
Many third-party services offer endpoints for ingesting syslog events.
You can forward your {{< vendor/name >}} and Blackfire logs to any of those endpoints.

> [!tabs]      
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     

## Forward to an HTTP endpoint

Some third-party services, such as [Elasticsearch](../../add-services/elasticsearch.md) and [OpenSearch](../../add-services/opensearch.md),
support ingesting log messages through an HTTP endpoint.
You can use HTTP forwarding to forward {{< vendor/name >}}and Blackfire logs to such third-party services.

HTTP forwarding makes a `POST` HTTP request with an `application/json` body while forwarding the log messages to the endpoint.

As an example, to forward logs to Elasticsearch using HTTP log forwarding, run the following command:

```
webpaas integration:add --type httplog --url "https://{{< variable "ELASTICSEARCH_URL" >}}/{{< variable "INDEX_NAME" >}}/_doc" --header "Authorization: Basic <basic_auth_token>" --header "Content-Type: application/json"
```

`type` and `url` are the only properties required for all endpoints.
Optionally, you can use the `headers` property to pass additional headers in the HTTP requests.

Once you've [added the service](../../add-services/_index.md),
to start forwarding logs [trigger a redeploy](../../development/troubleshoot.md#force-a-redeploy).

## Log levels

Your app may output logs with distinct severity levels.
But as Plaform.sh only reads logs from `stdout`,
this distinction is lost and everything gets logged at `INFO` level.

To preserve the original log level, use a language-specific syslog module/package for logging.

The following example code snippets show how logs can be written to Syslog:

> [!tabs]      
