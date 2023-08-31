---
title: Server Side Includes (SSI)
slug: define-routes-ssi
section: Define-Routes
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

At its most basic, you can include files within other ones so as not to repeat yourself.

Start by enabling SSI:

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: "app:http"
    ssi:
        enabled: true
```

Then create a file you want to include elsewhere:

```html {location="includes/example.html"}
<p>This content can be reused</p>
```

And include it in another file:

```html {location="index.html"}
<body>
  <p>This content is unique to this page.</p>
  <!--#include virtual="includes/example.html" -->
</body>
```

And your final rendered page includes the other file:

```html {location="index.html"}
<body>
  <p>This content is unique to this page.</p>
  <p>This content can be reused</p>
</body>
```

## Caching and dynamic content

You can use SSI to have [caching](./cache.md) and dynamic content in one.
So one file is cached, while another updates dynamically.

For example, you can activate SSI on one route with cache disabled and enable cache on another route:

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: "app:http"
    ssi:
        enabled: true
    cache:
        enabled: false
"https://{default}/cache":
    type: upstream
    upstream: "app:http"
    cache:
        enabled: true
```

Then create a page that displays the current date and time and is cached for 60 seconds
(the example uses PHP, but any server-side language would work):

```php {location="cache/example.php"}
<?php
header("Cache-Control: max-age=60");
echo date(DATE_RFC2822);
```

Then you could have a page with dynamic content that includes this file: 

```php {location="index.php"}
<?php
echo date(DATE_RFC2822);
?>
<!--#include virtual="cache/example.php" -->
```

Then you can visit `index.php` and refresh the page a few times.
You see the first number updating to the current time, while the second (included) one only changes every 60 seconds.

For more on SSI, see the [nginx documentation](https://nginx.org/en/docs/http/ngx_http_ssi_module.html).
