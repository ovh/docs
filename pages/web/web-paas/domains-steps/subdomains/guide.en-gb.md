---
title: Handle subdomains across different projects
slug: subdomains
section: Steps
---

**Last updated 31st August 2023**



## Objective  

You can host multiple subdomains, such as `foo.example.com` and `bar.example.com`,
within a single project using [routes](../../define-routes/_index.md).

If you try to use a subdomain that's used in another project,
you get an error like the following:

```text
This domain is already claimed by another service
```

You need to add a DNS record to make it clear you explicitly allow multiple projects to use the domain.

## Enable subdomains across multiple projects

To ensure multiple projects can use subdomains of the same apex domain,
add a specific `TXT` DNS record for your apex domain.

The `TXT` record should look like the following:

```text
_public-suffix-root.{{<variable "YOUR_APEX_DOMAIN" >}} TXT "public-suffix-root={{<variable "YOUR_APEX_DOMAIN" >}}"
```

This adds your domain to the [{{< vendor/name >}} implementation of the Public Suffix List](#why-this-is-necessary).

After you add your subdomains, remove the `TXT` record to reinstate [subdomain hijacking protection](#subdomain-hijacking-protection).
This ensures no other users can possibly add a subdomain of your domain to their project.

Even if you don’t remove the record, your DNS records should prevent others from using a subdomain
as long as you don’t use wildcards records pointing at {{< vendor/name >}}.

However, if you don't remove the `TXT` record, restrictions apply on the apex domain.
For example, you can't add the apex domain to another project until you remove the `TXT` record.

## Bypass locked domains

In certain cases (such as if your domain was added manually by {{< vendor/name >}} support),
your domain may be reserved for the project you added it to.
Then you can't set up a second project with the bare domain (`example.com`) or a subdomain (`foo.example.com`).

If that happens, [contact support](../../overview/get-support.md).
Include the project ID of the project that already has the domain.

## Why this is necessary

### The Public Suffix List

Domain names are segmented into different hierarchical levels, separated by a `.`.
The right-most portion of the domain, such as `.com`, `.edu`, and `.fr`,
is known as the top-level domain (TLD).
Most applications, including web browsers, handle TLDs specially, such as by restricting certain actions.

For example, a webpage at `foo.bar.baz.example.com` can usually set a cookie that's keyed to any of the following:

- `foo.bar.baz.example.com`

- `bar.baz.example.com`

- `baz.example.com`

- `example.com`


So a single site can be segmented across different subdomains but use a single account login cookie.

But this webpage *can't* set cookies keyed to all `.com` domains,
which would be a security risk.

Other restrictions apply to TLDs, but cookies are the most basic example.

Aside from true TLDs, browser makers have a list of domain suffixes that should get the same special handling
called the [Public Suffix List (PSL)](https://publicsuffix.org/).
If you add the `example.com` domain to the PSL,
browsers refuse to set a cookie on `example.com` from a page at `foo.example.com`.
They still accept cookies from a page at `example.com`.

### Subdomain hijacking protection

By default, a given domain can be used by only one project at a time.
This security measure prevents malicious actions such as registering a project with the `evil.example.com` subdomain
and using that to set cookies on your `example.com` website.

When you add a domain to a project,
the first level of the domain not in the [PSL](#the-public-suffix-list) is reserved.
So if you add `foo.bar.baz.example.com` to a project,
that project has `example.com` reserved within {{< vendor/name >}}
and no other project can have a domain anywhere in `*.example.com`.
You can add multiple subdomains within that one project.

Subdomain hijacking protection ensures that no other users can add a subdomain to their project
as long as you don't use wildcard DNS records pointing at {{< vendor/name >}}.

In most cases, that's a desirable added layer of security.
But you may run into a problem when you want multiple subdomains from the same organization as separate projects.
One option would be to add `example.com` to the PSL, but you might not want or be able to do that.

To limit what domains get protected, {{< vendor/name >}} supports a small extension to the PSL.
When you add a `TXT` record for your domain, {{< vendor/name >}} treats that domain as part of the PSL.

So when you add a `TXT` record for `example.com`,
{{< vendor/name >}} treats `example.com` as a top-level domain.
That means it isn't reserved and is open for other projects.

Then when you add a domain, the next level down from `example.com` is reserved.
So if you add `foo.bar.baz.example.com` to a project, `*.baz.example.com` is reserved for that project.
You can add `beep.example.com` to a different project without any issues.

You can do the same for any level of subdomain.
So if you set a `TXT` record for `baz.example.com`
and add `foo.bar.baz.example.com` to a project,
`*.bar.baz.example.com` is reserved for that project.
Nothing at a higher level is reserved.
