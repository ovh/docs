---
title: Server Side Includes
updated: 2021-03-26
---



## Objective  

Server side includes is a powerful mechanism by which you can at the same time leverage caching and serve dynamic content.

You can activate or deactivate SSI on a per-route basis in your `.platform/routes.yaml` for example:

```yaml
"https://{default}/":
    type: upstream
    upstream: "app:http"
    cache:
      enabled: false
    ssi:
        enabled: true
"https://{default}/time.php":
    type: upstream
    upstream: "app:http"
    cache:
      enabled: true
```

It allows you to include in your HTML response directives that will make the server "fill-in" parts of the HTML respecting the caching you setup.

For example you could in a dynamic non-cached page include a block that would have been cached for example in the /index.php page we would have:

```php
<?php
echo date(DATE_RFC2822);
?>
<!--#include virtual="time.php" -->
```

and in `time.php` we had

```php
<?php
header("Cache-Control: max-age=600");
echo date(DATE_RFC2822);
```

And you visit the home page you will see, as you refresh the page, the time on the top will continue to change, while the one on the bottom will only change every 600 seconds.

For more on SSI functionality see the [nginx documentation](http://nginx.org/en/docs/http/ngx_http_ssi_module.html).
