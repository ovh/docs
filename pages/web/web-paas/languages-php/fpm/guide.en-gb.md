---
title: PHP-FPM sizing
slug: fpm
section: Php
---

**Last updated 31st August 2023**



## Objective  

PHP-FPM helps improve your app's performance
by maintaining pools of workers that can process PHP requests.
This is particularly useful when your app needs to handle a high number of simultaneous requests. 

By default, {{< vendor/name >}} automatically sets a maximum number of PHP-FPM workers for your app. 
This number is calculated based on three parameters:
- The container memory: the amount of memory you can allot for PHP processing 

  depending on [app size](../../create-apps/app-reference.md#sizes).
- The request memory: the amount of memory an average PHP request is expected to require.

- The reserved memory: the amount of memory you need to reserve for tasks that aren't related to requests. 


The number is calculated as follows: ![The sum of container memory minus reserved memory divided by request memory](images/PHP-FPM-Workers-Calculation.png "0.2")

Note that when the resulting number is a decimal, 
it's rounded up to set the maximum number of workers.
Also, the minimum number of PHP-FPM workers is 2.

> [!primary]  
> 
> To ensure that {{< vendor/name >}} doesn't add more workers than the CPU can handle,
> a CPU limit applies as soon as the number of set workers equals or exceeds 25.
> This limit is calculated as follows: `number of vCPU cores * 5`.
> 
> For example, if you have a 2XL container with 8 CPU cores,
> you can have up to 40 workers as long as you have sufficient memory.
> 
> 

To adjust the maximum number of PHP-FPM workers depending on your app's needs, follow the instructions on this page.

## Before you begin

You need:

- An up-and-running web app in PHP, complete with [PHP-FPM](https://www.php.net/manual/en/install.fpm.php)

- The [{{< vendor/name >}} CLI](../../administration/cli/_index.md)


Note that the memory settings mentioned on this page are different from the [`memory_limit` PHP setting](./_index.md). 
The `memory_limit` setting is the maximum amount of memory a single PHP process can use 
before it's automatically terminated.

## 1. Estimate the optimal request memory for your app

To determine what the optimal request memory is for your app, 
you can refer to your PHP access logs.
Run a command similar to:

```bash
webpaas log --lines 5000 | awk '{print $6}' | sort -n | uniq -c
```

This command takes into account the last 5,000 requests that reached PHP-FPM.
You can adjust this number depending on the amount of traffic on your site.

In the output, you can see how many requests used how much memory, in KB.
For example:

```bash
    2654 2048
    431  4096
    584  8192
    889  10240
    374  12288
     68  46384
```

The output shows that:
- The majority of requests peaked at 2,048 KB of memory.

- Most other requests used up to around 10 MB of memory.

- A few requests used up to around 12 MB of memory.

- Only 68 requests peaked at around 46 MB of memory.


In this situation, you might want to be cautious 
and [set your request memory](#2-adjust-the-maximum-number-of-php-fpm-workers) to 12 MB.
Setting a lower request memory presents a risk of allowing more concurrent requests. 
This can result in memory swapping and latencies.

For further help in estimating the optimal request memory for your app,
use the [log analyzer tool for {{< vendor/name >}}](https://github.com/pixelant/platformsh-analytics) 
by [Pixelant](https://www.pixelant.net/).
This tool offers a better visualization of access logs.
It also provides additional insights into the operation of your app. 
These can help you further optimize your configuration 
and provide guidance on when to increase your plan size.
Note that this tool is maintained by a third party, 
not by {{< vendor/name >}}.

## 2. Adjust the maximum number of PHP-FPM workers

By default, the request memory is set to 45 MB
and the reserved memory is set to 70 MB.
These values allow most programs to run, 
but you can amend them to fit your needs.

To do so, adjust your [app configuration](../../create-apps/_index.md).
Under `runtime` in the [`sizing_hints` setting](../../create-apps/app-reference.md#sizing-hints),
set the values for `reserved_memory` and `request_memory`.

For example, 
if you estimate your [optimal request memory](#1-estimate-the-optimal-request-memory-for-your-app) to be 110 MB
and your reserved memory to be 80 MB, 
you can use:

```yaml {configFile="app"}
runtime:
    sizing_hints:
        request_memory: 110
        reserved_memory: 80
```

Note that the minimum value for the `request_memory` key is 10 MB
and the minimum value for the `reserved_memory` key is 70 MB.
If you set lower values, 
they're automatically overridden with those minimums.

To check the maximum number of PHP-FPM workers available to your app,
run the following command, where `children` refers to PHP-FPM workers:

```bash
webpaas ssh "grep -e '^pm.max_children' /etc/php/*/fpm/php-fpm.conf"      
```

You get output similar to the following:

```bash
pm.max_children = 5
```
