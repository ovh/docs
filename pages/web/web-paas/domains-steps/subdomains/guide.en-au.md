---
title: Subdomains across different projects
slug: subdomains
section: Steps
---

**Last updated 7th January 2022**



## Objective  

You can host multiple subdomains, such as `foo.example.com` and `bar.example.com`,
within a single Web PaaS project using [routes](../../configuration-routes).

To use subdomains across multiple projects, you need to add an additional DNS record.
If you don't, you may receive an error when trying to add a subdomain to a second project.

## Quick solution

To enable multiple projects to use subdomains of the same domain, add a DNS `TXT` record with your DNS registrar.
Consult your registrar's documentation for how to do so, as it varies by registrar.

The record should look like the following:

```text
_public-suffix-root.example.com TXT "public-suffix-root=example.com"
```

Replace `example.com` with your actual domain name.
That tells Web PaaS to treat `example.com` effectively as a top-level domain
so you can add multiple `something.example.com` domains to different Web PaaS projects.

Note: You should add this record before you add your first domain (such as `example.com`) to Web PaaS.
You can remove the record after adding subdomains, which reinstates [hijacking protection](#subdomain-hijacking-protection).
This ensures no other users could possibly add a subdomain to their project,
though your DNS records should prevent them from actually using it
(assuming you don't use wildcards pointing at Web PaaS).

## The details

### The Public Suffix List

Domain names are segmented into different hierarchical levels, separated by a `.`.
The right-most portion of the domain, such as `.com`, `.edu`, and `.fr`,
is known as the top-level domain (TLD).
Most Internet applications (such as web browsers) handle TLDs specially, such as by restricting certain actions.

For example, a web page at `foo.bar.baz.example.com` can usually set a cookie that's keyed to `foo.bar.baz.example.com`,
to `bar.baz.example.com`, to `baz.example.com`, or to `example.com`, but *not* to all `.com` domains.
That allows a single logical site to be segmented across different subdomains but use a single account login cookie.
Setting a cookie for all `.com` domains would be a security risk.
(There are other restrictions on TLDs, but cookies are the easiest example.)

Aside from true TLDs, browser makers have a list of domain suffixes that should get the same special handling
called the [Public Suffix List (PSL)](https://publicsuffix.org/).
If you added the `example.com` domain to the PSL,
browsers would refuse to set a cookie on `example.com` from a page at `foo.example.com`.
(They would still accept cookies from a page at `example.com`.)

### Subdomain hijacking protection

By default, Web PaaS allows only one project to use a given domain at a time.
This is to prevent a malicious actor from registering a project with `evil.example.com`
and using that to set cookies on your `example.com` website.

When a domain is added to any project, the first level of the domain not in the PSL is considered "reserved" for that project.
So if you add `foo.bar.baz.example.com` to a project,
that project now owns `example.com` as far as Web PaaS is concerned
and no other project can have a domain anywhere in `*.example.com`.
(Multiple subdomains within that same project are perfectly fine.)

In most cases, that's a desirable added layer of security.
But you may run into a problem when you want multiple subdomains from the same organization as separate projects.
(Multiple departments at the same university, for instance.)
One option would be to add `example.com` to the PSL, but you might not want or be able to do that.

To limit what domains get protected, Web PaaS supports a small extension to the PSL.
By declaring a `TXT` record for a specific domain, that domain is treated as part of the PSL for reservation purposes.

So, if you add the following DNS record:

```text
_public-suffix-root.example.com TXT "public-suffix-root=example.com"
```

Web PaaS would reserve one level down from `example.com`.
In that case, adding `foo.bar.baz.example.com` to a project would reserve only `*.baz.example.com` for that project.
So you could add `beep.example.com` to a different project without any issues.

## Locked domains

In certain cases (such as if your domain was added manually by Web PaaS support),
your domain may be reserved for the project you added it to.
Then you can't set up a second project with the bare domain (`example.com`) or a subdomain (`foo.example.com`).

If that happens, open a support ticket and our support team can remove the protection for that domain.
Include the project ID of the project that already has the domain.

## Claimed domains

If you try to use a domain that's claimed, you see an error like the following: 

```text
This domain is already claimed by another project. If this is incorrect or you are trying to add a subdomain, please open a ticket with support.
``` 

This relates to the [subdomain highjacking prevention](#subdomain-hijacking-protection).
It's likely the result of an attempt to assign subdomains across multiple projects.
See the [solution above](#quick-solution).
