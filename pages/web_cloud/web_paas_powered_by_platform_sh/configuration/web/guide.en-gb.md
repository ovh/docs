---
title: Web
updated: 2021-03-31
---




## Objective  

The `web` key defines a single web instance container running a single web server process (currently Nginx), behind which runs your application.  The `web` key configures the web server, including what requests should be served directly (such as static files) and which should be passed to your application.  The server is extremely flexible, which means that some configurations will be more involved than others.  Additionally, defaults may vary somewhat between different language base images (specified by the `type` key of `.platform.app.yaml`).

The first section on this page explains the various options the file supports.  If you prefer, the later sections include various example configurations to demonstrate common patterns and configurations.

You can also examine the `.platform.app.yaml` files of the provided project templates for various common Free Software applications.  See the various language pages for an index of available examples.

The `web` key defines how the application is exposed to the web (in HTTP). Here we tell the web application how to serve content, including static files, front-controller scripts, index files, index scripts, and so on. We support any directory structure, so the static files can be in a subdirectory and the entrypoint of your application can be farther down.

## Commands

The `commands` key defines the command to launch the application.  For now there is only a single command, `start`, but more will be added in the future.

The `start` key specifies the command to use to launch your application.  That could be running a uwsgi command for a Python application or a unicorn command for a Ruby application, or simply running your compiled Go application.  If the command specified by the `start` key terminates it will be restarted automatically.

```yaml
web:
    commands:
        start: 'uwsgi --ini conf/server.ini'
```

> [!primary]  
> Never "background" a start process using &.  That will be interpreted as the command terminating and the supervisor process will start a second copy, creating an infinite loop until the container crashes.  Just run it as normal and allow the Web PaaS supervisor to manage it.
> 

On PHP containers this value is optional and will default to starting PHP-FPM (i.e. `/usr/sbin/php-fpm7.0` on PHP7 and `/usr/sbin/php5-fpm` on PHP5).  On all other containers it should be treated as required.  It can also be set explicitly on a PHP container in order to run a dedicated process such as [React PHP](https://github.com/platformsh-examples/platformsh-example-reactphp) or [Amp](https://github.com/platformsh-examples/platformsh-example-amphp).

## Upstream

`upstream` specifies how the front server will connect to your application (the process started by `commands.start` above).  It has two keys:

* `socket_family`:
    Default: `tcp`. Describes whether your application will listen on a Unix socket (`unix`) or a TCP socket (`tcp`).
* `protocol`:
    Specifies whether your application is going to receive incoming requests over HTTP (`http`) or FastCGI (`fastcgi`). The default varies depending on which application runtime you're using. Other values will be supported in the future.

On a PHP container with FPM there is almost never a reason to set the `upstream` explicitly, as the defaults are already configured properly for PHP-FPM.  On all other containers the default is `tcp` and `http`.

```yaml
web:
    upstream:
        socket_family: tcp
        protocol: http
```

The above configuration (which is the default on non-PHP containers) will forward connections to the process started by `commands.start` as a raw HTTP request to a TCP port, as though the process were listening to the incoming request directly.

### Socket family

If the `socket_family` is set to `tcp`, then your application should listen on the port specified by the `PORT` environment variable.  (In practice it is almost always `8888`, but checking the variable is preferred.)

If the `socket_family` is set to `unix`, then your application should open the unix socket file specified by the `SOCKET` environment variable.

If your application isn't listening at the same place that the runtime is sending requests, you'll see *502 Bad Gateway* errors when you try to connect to your web site.

## Locations

The `locations` block is the most powerful, and potentially most involved, section of the `.platform.app.yaml` file.  It allows you to control how the application container responds to incoming requests at a very fine-grained level.  Common patterns also vary between language containers due to the way PHP-FPM handles incoming requests.

Each entry of the `locations` block is an absolute URI path (with leading `/`) and its value includes the configuration directives for how the web server should handle matching requests.  That is, if your domain is `example.com` then `'/'` means "requests for `example.com/`", while `'/admin'` means "requests for `example.com/admin`".  If multiple blocks could match an incoming request then the most-specific will apply.

```yaml
web:
    locations:
        '/':
           # Rules for all requests that don't otherwise match.
            ...
        '/sites/default/files':
            # Rules for any requests that begin with /sites/default/files.
            ...
```

The simplest possible locations configuration is one that simply passes all requests on to your application unconditionally:

```yaml
web:
    locations:
        '/':
            passthru: true
```

That is, all requests to `/*` should be forwarded to the process started by `web.commands.start` above.  Note that for PHP containers the `passthru` key must specify what PHP file the request should be forwarded to, and must also specify a docroot under which the file lives.  For example:

```yaml
web:
    locations:
        '/':
            root: 'web'
            passthru: '/app.php'
```

This block will serve requests to `/` from the `web` directory in the application, and if a file doesn't exist on disk then the request will be forwarded to the `/app.php` script.

A full list of the possible subkeys for `locations` is below.

* `root`: The folder from which to serve static assets for this location relative to the application root. The application root is the directory in which the `.platform.app.yaml` file is located.  Typical values for this property include `public` or `web`.  Setting it to `''` is not recommended, and its behavior may vary depending on the type of application.  Absolute paths are not supported.
* `passthru`: Whether to forward disallowed and missing resources from this location to the application and can be true, false or an absolute URI path (with leading `/`). The default value is `false`. For non-PHP applications it will generally be just `true` or `false`.  In a PHP application this will typically be the front controller such as `/index.php` or `/app.php`.  This entry works similar to `mod_rewrite` under Apache.  Note: If the value of `passthru` does not begin with the same value as the location key it is under, the passthru may evaluate to another entry. That may be useful when you want different cache settings for different paths, for instance, but want missing files in all of them to map back to the same front controller. See the example block below.
* `index`: The files to consider when serving a request for a directory: an array of file names or *null*. (typically `['index.html']`). Note that in order for this to work, access to the static files named must be allowed by the `allow` or `rules` keys for this location.
* `expires`: How long to allow static assets from this location to be cached (this enables the `Cache-Control` and `Expires` headers) and can be a time or *-1* for no caching (default). Times can be suffixed with "ms" (milliseconds), "s" (seconds), "m" (minutes), "h" (hours), "d" (days), "w" (weeks), "M" (months, 30d) or "y" (years, 365d).
* `scripts`: Whether to allow loading scripts in that location (*true* or *false*).  This directive is only meaningful on PHP.
* `allow`: Whether to allow serving files which don't match a rule (*true* or *false*, default: *true*).
* `headers`: Any additional headers to apply to static assets. This section is a mapping of header names to header values. Responses from the application aren't affected, to avoid overlap with the application's own ability to include custom headers in the response.
* `rules`: Specific overrides for a specific location. The key is a PCRE (regular expression) that is matched against the full request path.
* `request_buffering`: Most application servers do not support chunked requests (e.g. fpm, uwsgi), so Web PaaS enables `request_buffering` by default to handle them. That default configuration would look like this if it was present in `.platform.app.yaml`:

```yaml
web:
  locations:
    '/':
      passthru: true
      request_buffering:
        enabled: true
        max_request_size: 250m
```

    If the application server can already efficiently handle chunked requests, the `request_buffering` subkey can be modified to disable it entirely (`enabled: false`). Additionally, applications that frequently deal with uploads greater than 250MB in size can update the `max_request_size` key to the application's needs. Note that modifications to `request_buffering` will need to be specified at each location where it is desired.

### Rules

The rules block warrants its own discussion as it allows overriding most other keys according to a regular expression. The key of each item under the `rules` block is a regular expression matching paths more specifically than the `locations` block entries.  If an incoming request matches the rule, then its handling will be overridden by the properties under the rule.  Note that it will override the entire rule in the case of a compound rule like `headers`.  (See example below.)

For example, the following file will serve dynamic requests from `index.php` in the `public` directory and disallow requests for static files anywhere.  Then it sets a rule to explicitly allow common image file formats, and sets a cache lifetime for them of 5 minutes.

```yaml
web:
    locations:
        '/':
            root: 'public'
            passthru: '/index.php'
            allow: false
            rules:
                # Allow common image files only.
                '\.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$':
                    allow: true
                    expires: 300s
```

As you can imagine the `locations` and `rules` blocks can be used to create highly involved and powerful configurations, but obeys Parker's Law.  (With great power comes great responsibility.)  The examples below demonstrate various common configurations and recommended defaults.

## How do I setup a basic PHP application with front-controller?

The following `web` block is a reasonable starting point for a custom PHP application.  It sets the directory `public` as the docroot, and any missing files will get mapped to the `/index.php` file.  mp4 files are forbidden entirely.  Image files from the `images` URL (which will be served from the `/public/images` directory) will have an expiration time set, but non-image files will be disallowed.

```yaml
web:
    locations:
        '/':
            root: 'public'
            passthru: '/index.php'
            index:
                - index.php
            # No caching for static files.
            # (Dynamic pages use whatever cache headers are generated by the program.)
            expires: -1
            scripts: true
            allow: true
            rules:
                # Disallow .mp4 files specifically.
                \.mp4$:
                    allow: false
                    expires: -1
        # Set a 5 min expiration time for static files here; a missing URL
        # will passthru to the '/' location above and hit the application
        # front-controller.
        '/images':
            expires: 300
            passthru: true
            allow: false
            rules:
                # Only allow static image files from the images directory.
                '\.(jpe?g|png|gif|svgz?|ico|bmp)$':
                    allow: true
```

## How can I control the headers sent with my files?

There are many use cases for setting custom headers on static content, such as custom content type headers, limiting cross-origin usage, etc.  Consider the following example:

```yaml
web:
    locations:
        "/":
            root: "public"
            passthru: "/index.php"
            index:
                - index.php
            headers:
              X-Frame-Options: SAMEORIGIN
            rules:
                \.mp4$:
                    headers:
                      X-Frame-Options: SAMEORIGIN
                      Content-Type: video/mp4
                \.mp3$:
                    headers:
                      X-Specialness: low
```

First, the `headers` directive sets the `X-Frame-Options` header to `SAMEORIGIN` for all static files.  That directive is then overriden by the two rules blocks.  For `*.mp4` files, two custom headers will be sent: `X-Frame-Options` and `Content-Type`.  The repeated `X-Frame-Options` is necessary as the `headers` directive in the rule overrides the parent, rather than extending it.  Therefore, the rule for `*.mp3` files will add *only* an `X-Specialness` header, and no `X-Frame-Options` header.

This example also demonstrates an effective way to set custom `Content-Type` headers for unusual file types using rules.

Note that the `headers` directive applies only to static content.  Headers for responses generated by your application are unaffected.  If custom headers for certain file types or frame control are needed, set them from within the application.

## Why is my Access-Control-Allow-Origin header being overwritten?

To allow cross origin requests, the `Access-Control-Allow-Origin` header can be added to responses. However, when this header is configured with the value of `*`, the response headers will be modified in the following ways:

1\. The value of the `Access-Control-Allow-Origin` header will be set to the value of the `Origin` request header.

2\. The `Vary` header will be included, and its value will be set to `Origin`.


This concept is explained in more detail in the [CORS section of the Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#access-control-allow-origin):

>If the server specifies a single origin (that may dynamically change based on the requesting origin as part of a white-list) rather than the "`*`" wildcard, then the server should also include `Origin` in the `Vary` response header — to indicate to clients that server responses will differ based on the value of the `Origin` request header.

This is done so that credentialed requests can be supported, which would otherwise fail CORS checks if the wildcard value is used.

## How can I rewrite an incoming request without a redirect?

Rules blocks support regular expression capture groups that can be referenced in a passthru command.  For example, the following configuration will result in requests to `/project/123` being seen by the application as a request to `/index.php?projectid=123` without causing an HTTP redirect.  Note that query parameters present in the request are unaffected and will, unconditionally, appear in the request as seen by the application.

```yaml
web:
    locations:
        '/':
            root: 'public'
            passthru: '/index.php'
            index:
                - index.php
            scripts: true
            allow: true
            rules:
                '^/project/(?<projectid>.*)$':
                    passthru: '/index.php?projectid=$projectid'
```

## How can I serve directories at different paths than in my application?

Although it's common for the directories on disk to be served directly by the web server, that's not actually a requirement.  If desired it is quite possible to create a web URL structure that does not map 1:1 to the structure on disk.

Consider the following example.  The git repository is structured like so:

```text
.platform/
  services.yaml
  routes.yaml
.platform.app.yaml
application/
  conf/
    server.ini
  application.py
gitbook-src/
old-docs/
```

The `application` directory contains a Python application.  The `gitbook-src` directory contains a GitBook project that is the public documentation for the application.  The `old-docs` directory contains a static HTML backup of legacy documentation for an older version of the application that is still needed.

Assume that the GitBook source is compiled by the build process into the `_book` directory, as in the example above.  The following `web` block will:

* Start your Python application using uwsgi.
* Route all requests to '/' to the Python application unconditionally, unless one of the following two rules apply.
* Route requests to the `/docs` path to the `_book` directory, which contains our generated documentation, with a short cache lifetime.
* Route requests to the `/docs/legacy` path to the `old-docs` directory, which contains plain old HTML, with a very long cache lifetime since those files should never change.

```yaml
web:
    commands:
        start: 'uwsgi --ini application/conf/server.ini'
    locations:
        '/':
            passthru: true
        '/docs':
            root: '_book'
            index:
                - "index.html"
            expires: 300s
            scripts: false
            allow: true
        '/docs/legacy':
            root: 'old-docs'
            index:
                - "index.html"
            expires: 4w
            scripts: false
            allow: true
```

Even though the URL structure doesn't match the directory names or hierarchy on disk, that's no issue.  It also means the application can safely coexist with static files as if it were a single site hierarchy without the need to mix the static pages in with your Python code.
