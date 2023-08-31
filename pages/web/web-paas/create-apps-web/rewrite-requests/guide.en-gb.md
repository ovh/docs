---
title: Rewrite requests without redirects
slug: rewrite-requests
section: Web
---

**Last updated 31st August 2023**



## Objective  

You might want to rewrite requests so they're served by specific sections of your app
without having to redirect users.
For example, you might want to make URLs seem semantic to users without having to rewrite your app architecture.

In such a case, you might want requests to `/shoes/great-shoe/` to be served
as if they were requests to `/?category=shoes&product=great-shoe`.
If so, add a [rule](../app-reference.md#rules) similar to the following:

```yaml {configFile="app"}
web:
    locations:
        '/':
            ...
            rules:
                '^/(?<category>[^/]+)/(?<product>[^/]+)/$':
                    passthru: '/?category=$category&product=$product'
```

Or you might organize your images by file type, but don't want to expose the organization externally.
You could rewrite requests to do that behind the scenes:

```yaml {configFile="app"}
web:
    locations:
        '/':
            ...
            rules:
              '^/img/(?<name>.*)\.(?<type>.*)$':
                  passthru: '/$type/$name.$type'
```

Now a request to `/img/image.png` returns the file found at `/png/image.png`.

## Query parameters

Query parameters in the request are unaffected and are passed in the request to the app.
So if you have the category and product rule from previously, a request to `/shoes/great-shoe/?product=terrible-shoe`
is rewritten to `?category=shoes&product=great-shoe&product=terrible-shoe`.
In that case, the `product` query parameter returns as `terrible-shoe`.
