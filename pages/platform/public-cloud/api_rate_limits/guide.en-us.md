---
title: 'Public Cloud API Rate Limits'
slug: pci-rate-limits
excerpt: Figure out what are the rate limits for Public Cloud API
section: 'General information'
order: 05
updated: 2023-06-21
---

**Last updated 21th June 2023**

## What are rate limits?

A rate limit is a restriction that our Public Cloud API imposes on the number of times a client can access the resources within a specified period of time.

## Why do we have rate limits?

Rate limits are a common practice for APIs, and they're put in place for a few different reasons:

* They help us protect the API backend against abuse or misuse of the API.
* With rate limits, we make sure that everyone is having a fair access to the API.

For example, a malicious actor of a faulty script could try to overuse the API, which could be cause performance issues on the server
s. By setting rate limits, we ensure that the API can maintain a smooth and consistent experience for all customers.

## What are the rate limits for our API?

### Keystone (OpenStack identity API)

We enforce rate limits at the OpenStack **User** level.

A user can do **60 requests per minutes** before receving a HTTP 429 response.


### Nova (OpenStack compute API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per minutes** before receving a HTTP 429 response.

### Neutron (OpenStack network API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receving a HTTP 429 response.

### Glance (OpenStack image API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receving a HTTP 429 response.

### Cinder (OpenStack compute API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receving a HTTP 429 response.


## How do rate limits work?

If you requests too much token (on identity API) or requests too much compute details, the endpoint will start answering with **HTTP 429** response code containing a JSON object like this one:

```
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## What are the steps to follow to mitigate this?

You should consider reducing the number of API call you are doing to the rate limited endpoint.

Usually, you end-up in such situation when doing multiple requests in parallel (using mutilple processes or threads).

### Use cache

One of the option to reduce the number of call is to use cache.

For example, a keystone token is valid for 24 hours, so you can grab only one, keep it in a cache and re-use it for the whole day!

### Implement retry backoff

If you really need to get regular information from the API, you can implement an automatic retry for requests with a random exponential backoff.

Retrying with exponential backoff means performing a short sleep when a rate limit error is hit, then retrying the unsuccessful request.
If the request is still unsuccessful, the sleep length is increased and the process is repeated.
This continues until the request is successful or until a maximum number of retries is reached.

This approach has many benefits:

* Automatic retries means you can recover from rate limit errors without crashes or missing data
* Exponential backoff means that your first retries can be tried quickly, while still benefiting from longer delays if your first few retries fail
* Adding random jitter to the delay helps retries from all hitting at the same time.

Note that unsuccessful requests do not contribute to your rate limit, so continuously resending a request could work but we may change this behavior in the future. We recommend to not rely on this mechanism.

Some example of well know libraries to implement retry backoff in python are:

* tenacity: https://pypi.org/project/tenacity/
* backoff: https://pypi.org/project/backoff/

## Go further

Join our community of users on <https://community.ovh.com/en/>.
