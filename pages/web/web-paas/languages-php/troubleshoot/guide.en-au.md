---
title: Troubleshoot PHP
slug: troubleshoot
section: Php
---

**Last updated 2nd June 2022**


## Server reached max_children

You may see a line in your `/var/log/app.log` file like the following:

```text
WARNING: [pool web] server reached max_children setting (2), consider raising it
```

This indicates that the server is receiving more concurrent requests than it has PHP processes allocated,
which means some requests have to wait until another finishes.
Web PaaS sets the number of workers based on the available memory of your container
and the estimated average memory size of each process.

There are two ways to increase the number of workers:

- Adjust the [worker sizing hints](../fpm/) for your project.
- Upgrade your Web PaaS plan to get more computing resources.

## Execution timeout

If your PHP application can't handle the amount of traffic or is slow,
you should see lines in your `/var/log/app.log` file like the following:

```text
WARNING: [pool web] child 120, script '/app/public/index.php' (request: "GET /index.php") execution timed out (358.009855 sec), terminating
```

This means your PHP process is running longer than allowed.
You can adjust the `max_execution_time` value in `php.ini`,
but there is still a hard cap of 5 minutes on any web request.

The most common causes of a timeout are an infinite loop (which is a bug that you should fix)
or the work itself requires a long time to complete.
For the latter case, you should consider putting the task into a background job.

The following command identifies the 20 slowest requests in the past hour,
which can provide an indication of what code paths to investigate.

```bash
grep $(date +%Y-%m-%dT%H --date='-1 hours') /var/log/php.access.log | sort -k 4 -r -n | head -20
```

If you see that the processing time of certain requests is slow (such as taking longer than 1000&nbsp;ms),
you should consider a continuous observability solution like Blackfire
to monitor your application and help you improve the performance issue.

Otherwise, you may check if the following options are applicable:

- Find the most visited pages and see if they can be cached and/or put behind a CDN. Refer to how caching works.
- Upgrade your Web PaaS plan to get more computing resources.

## PHP process crashed

If your PHP process crashed with a segmentation fault,
you should see lines in your `/var/log/app.log` file like the following:

```text
WARNING: [pool web] child 112 exited on signal 11 (SIGSEGV) after 7.405936 seconds from start
```

Either a PHP extension is hitting a segmentation fault or your PHP application code is crashing.
You should review recent changes in your application and try to find the cause of it, probably with the help of [Xdebug](../xdebug/).

## PHP process is killed

If your PHP process is killed by the kernel,
you should see lines in your `/var/log/app.log` file like the following:

```text
WARNING: [pool web] child 429 exited on signal 9 (SIGKILL) after 50.938617 seconds from start
```

That means the memory usage of your container exceeds the limit allowed on your plan so the kernel kills the offending process. You should try the following:

- Check if the memory usage of your application is expected and try to optimize it.
- Use [sizing hints](../fpm/) to reduce the amount of PHP workers, which reduces the memory footprint.
- Upgrade your Web PaaS plan to get more computing resources.

## Resource temporarily unavailable

If you encounter the message `connect() to unix:/run/app.sock failed (11: Resource temporarily unavailable)`
in your `/var/log/error.log` file, it is caused by all of the PHP workers being busy.
This can be because too many requests are coming in at once
or the requests are taking too long to be processed (such as with calls to external third-party servers without timeouts).

To address the issue, you can: 

- Lower the memory consumption of each request so that the amount of PHP workers gets automatically raised. nThis can be customized with the `runtime.sizing_hints.request_memory` key in your `.platform.app.yaml` file. For more details, consult [PHP-FPM sizing](../fpm/).
- Add a CDN.
- Set up [HTTP caching](../../bestpractices-http-caching/).
- Follow the global [performance tuning recommendations](../tuning/).
- Remove stale plugins and extensions when using a CMS.
- Upgrade the container size to get more resources.