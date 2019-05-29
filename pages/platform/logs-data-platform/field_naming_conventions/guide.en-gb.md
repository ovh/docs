---
title: The field naming convention
slug: field-naming-conventions
order: 2
section: Get Started
---

**Last updated 5th March 2018**

## Objective

Now that you can send logs, you are maybe wondering how to tell Logs Data Platform what kind of data you send. It can be dates, numbers, boolean values, or just plain text strings.

**This guide will help you ensure that your logs are properly parsed.**


## Requirements

- No specific requirement


## Instructions

### What is a valid log for Logs Data Platform?

Each log received on Logs Data Platform is transformed into a [GELF](http://docs.graylog.org/en/latest/pages/gelf.html){.external} formatted log. What is GELF? A standardized JSON way to send logs. GELF stands for Graylog Extended Log Format. Using this format gives us two advantages, It is directly compatible with Graylog and it is still extensible enough to enrich your logs as you would like to.

This format impose a few conventions that if you don't follow can have many consequences :

- Logs Data Platform will rewrite your field as an incorrect one (with a _fixit suffix).
- Your log will be rejected.

First please check the table below to know which field are reserved and what is their meaning. Note that some of these fields are mandatory and have to be set by whatever library you use to send logs to Logs Data Platform. Refer to the documentation of the library or to some of our awesome tutorials to know how to send them.

|Word|ES type|About|
|---|---|---|
|version|String|GELF spec version – “1.1”; MUST be set by client library|
|host|String|The name of the host, source or application that sent this message; MUST be set by client library.|
|short_message|String|A short descriptive message; MUST be set by client library.|
|full_message|String|A long message that can i.e. contain a backtrace; optional.|
|timestamp|Number|Seconds since UNIX epoch with optional decimal places for milliseconds; SHOULD be set by client library. Will be set to NOW by server if absent.|
|level|Number|The level equal to the standard syslog levels; optional, default is 1 (ALERT).|
|line|Number|We consider this value to be a standard in the logs messages so we force it being a Number.|
|X-OVH-TOKEN|String|Mandatory on direct access, don't try to forge strange ones, you will be banished.|
|X-OVH-CONTENT-SIZE|Number|Size in bytes of the current log.|
|X-OVH-TO-FREEZE|String|If given, will build another archive containing only its value (separated by a line break).|


### Can I go deeper?

Of course. As we said before, you can send some additional fields as long as you prepend them with the '_' (underscore) character. You can use any JSON valid character for your field, except the '.' (dot) character. But don't worry, if you do so, we will rewrite your '.' in a very cute underscore. So how can you send special type as number, date and boolean ? Here is the answer :

|Suffix|ES Type|About|
|---|---|---|
|*_num, *_double, *_float|double|floating value in double in java representation : double-precision 64-bit IEEE 754 floating point|
|*_int, *_long|long|64 bit signed long type,which has a minimum value of -263 and a maximum value of 263-1|
|*_date|date|a ISO 8601 date with optional Time or Milliseconds since UNIX epoch in Integer.|
|*_bool|boolean|Expected values: "true" or  "false". WARNING : GELF does not support boolean types you will have to send "true" or "false" in String|
|*_geolocation|String|A pair of two float number separeted by a comma ','. This pair must represent Latitude and Longitude|
|Everything else|String|Anything else will be considered a string|

As you can see, it is fairly straightforward. Suffix your field with the right value and you will be able to send anything you want. For reference, here is a full example of a valid gelf message with every type we have:


```json
{  
   "version":"1.1",
   "host":"my_host",
   "_some_num":87.6,
   "_some_user_id_float":123,
   "a_good_date":"2016-01-01T17:04:25.000",
   "short_message":"A short message that can save your life",
   "full_message":"all the things you want up to 32768 characters",
   "_line":18,
   "level":1,
   "_power_level_int":"9001",
   "_some_info":"info",
   "_ovh_is_wonderful_bool":"true"
}
```

Specifying correct numeric suffix type is the only way to generate numeric Widgets for your Dashboards. Here is an example of a graph you can generate with a numeric value:


![Numeric widget](images/bytes.png){.thumbnail}

So this is everything you need to know to send valid messages format and not shoot yourself in the foot. If you have any question you can always reach us by using the mailing list.

Happy Logging


## Go further

- Getting Started: [Quick Start](../quick_start/guide.en-gb.md){.ref}
- Documentation: [Guides](../product.en-gb.md){.ref}
- Join our community of users on [https://community.ovh.com](https://community.ovh.com/en/){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}