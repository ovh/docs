---
title: Configuring HTTP/2 on an OVH Load Balancer service
slug: lb-http2
excerpt: Configuring HTTP/2 on an OVH Load Balancer service
section: Use case
---

**Last updated 15th January 2018**

## Objective

The OVH Load Balancer does not currently support the HTTP/2 protocol. However, you can bypass this restriction by using TCP mode with the ALPN extension of the TLS protocol.


ALPN (Application-Layer Protocol Negotiation) is a TLS extension that enables the application layer to negotiate which protocol will be used (h2 in this case).

**This guide is designed to help you create an HTTP/2 service with the OVH Load Balancer solution. Here, we will configure this service to balance the load across several servers responding with HTTP/2.**


## Requirements

- You need to have created a TCP front-end.
- You need to have created a TCP farm, with servers added to it.


## Instructions

> [!warning]
>
> The order in which you create elements is important: the routes must be configured before you attach them to rules.
> 


### Add a route

We will add a route to our service.


#### Via the API

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Settings:
>
>> > **serviceName**
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID of your TCP farm that must manage the HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<ID of your front-end TCP 443>`
>


### Add a rule

We will now add a rule to our route.



#### Via the API

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Settings:
>
>> > **serviceName**
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **routeId**
>> >
>> >> `<ID of the route created above>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>


### Apply the modifications

The modifications made to your OVH Load Balancer must be *explicitly applied* in each of the zones configured for your service. Only at this point will they be visible to your website visitors. This way, you can make complex configuration changes in one go.

If you have several zones, you must apply the same configuration for each of them.


#### Via the API

Refresh a zone:

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Settings:
>
>> > **serviceName** *
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **zone**
>> >
>> >> `<zone to deploy the configuration in>`
>

### Confirm

After you have completed all of these steps, you should have a functional load balancer service for your HTTP/2 servers. You can now confirm the status of your service by requesting it from your OVH Load Balancer service, then verifying the response version:

```bash
curl -I --http2 https://www.ovh.co.uk/
HTTP/2 200
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.