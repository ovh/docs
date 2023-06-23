---
title: 'Public Cloud API Rate Limits'
slug: pci-rate-limits
excerpt: Figure out what are the rate limits for Public Cloud API
section: 'General information'
order: 05
updated: 2023-06-21
---

**Last updated 21st June 2023**

## What is a rate limit?

A rate limit is a restriction enforced by the API on the number of requests a client can make to the API within a specified period.

## Why do we have rate limits?

Rate limits are a common practice for APIs, and they're put in place for various reasons:

* They help us protect the API backend against abuse or misuse of the API.
* Ensure better quality of service on the API by having fair access to the API.

For example, a faulty or not well optimised script could try to overuse the API, which could cause performance issues on the API backend. 
By setting rate limits, we ensure that the API can maintain a smooth and consistent experience for all customers.

## What are the rate limits for our API?

### Keystone (OpenStack identity API)

We enforce rate limits at the OpenStack **User** level.

A user can do **60 requests per minutes** before receiving a HTTP 429 response.


### Nova (OpenStack compute API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receiving a HTTP 429 response.

### Neutron (OpenStack network API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receiving a HTTP 429 response.

### Glance (OpenStack image API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receiving a HTTP 429 response.

### Cinder (OpenStack compute API)

We enforce rate limits at the OpenStack **Project** level.

A project can do **20 requests per seconds** before receiving a HTTP 429 response.


## How do rate limits work?

If you request too many tokens from Keystone (the identity API) or send too many requests to an API endpoint such as Nova (the compute API), the endpoint will start answering with **HTTP 429** response code containing a JSON object like this one:

```
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## How to ensure you don't make too many requests?

You should consider reducing the number of API calls your automation is doing below the rate limit of the endpoint.

Usually, you may end-up in such situation when doing multiple requests in parallel (using multiple processes or threads).

There are various ways to improve the efficiency of your automation such as the use of caching and retry backoff mechanisms.

### Use cache

One of the option to reduce the number of call is to use cache.

For example, a keystone token is valid for 24 hours after it is issued. You could request only one token and keep it in a cache and re-use it for the whole day!

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
