---
title: Serve directories at different paths
slug: serve-different-directories
section: Web
---

**Last updated 31st August 2023**



## Objective  

In some cases you might want to depart from the common practice of serving directories directly.
You might want to create a URL structure different than the structure on your disk.

For example, in Git you might have a folder for your app and another folder that builds your documentation.
Your entire Git repository might look like the following:

```text
{{% vendor/configdir %}}
    {{< vendor/configfile "routes" "strip" >}}
    {{< vendor/configfile "services" "strip" >}}
    {{< vendor/configfile "apps" "strip" >}}
application/
    [app-code-files]
docs-src/
    [docs-code-files]
```

And your build process might build the documentation with an output folder such as `docs-public`.

If so, you can serve all requests by your app code except for those that start with `/docs`,
which you serve with your generated docs.
Use a [`web` configuration](../app-reference.md#web) similar to the following:

```yaml {configfile="apps"}
web:
    locations:
        '/':
            passthru: true
        '/docs':
            root: 'docs-public'
            index:
                - "index.html"
            expires: 24h
            scripts: false
            allow: true
```

This way, your app can safely coexist with static files as if it were a single site hierarchy.
And you can keep the static pages separate from your app code.
