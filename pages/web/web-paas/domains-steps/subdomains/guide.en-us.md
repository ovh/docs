---
title: Subdomains across different projects
slug: subdomains
section: Steps
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

If you want to host multiple projects off of the same domain name, such as `foo.example.com` and `bar.example.com`, you will need to register an additional DNS record to make that possible.  If you do not, you will recieve an error when trying to add the second subdomain to its own project.

## Quick solution

To enable multiple projects to use subdomains of the same domain, you must add a DNS `TXT` record with your DNS registrar.  Consult your registrar's documentation for how to do so, as it varies from one registrar to another.

The record should look like the following:

```text
_public-suffix-root.example.com TXT "public-suffix-root=example.com"
```

Replace `example.com` with your actual domain name.  That will tell Web PaaS that `example.com` is a top-level domain, and allow you to add multiple `something.example.com` domains on different projects on Web PaaS.

Be aware this record must be added *before* adding the first domain to Web PaaS.

## The details

### The Public Suffix List

Domain names are segmented into different hierarchical levels, separated by a `.`.  The right-most portion of the domain is known as the Top Level Domain (TLD), such as `.com`, `.edu`, `.fr` etc.  Most Internet applications (such as web browsers) have special handling for TLDs; in particular, certain actions are restricted when trying to set values relative to them.

For example, a web page at `foo.bar.baz.example.com` can, normally, set a cookie that is keyed to `foo.bar.baz.example.com`, to `bar.baz.example.com`, to `baz.example.com`, to `example.com`, but *not* to all `.com` domains.  That allows a single logical site to be segmented across different subdomains but use a single account login cookie, for instance.  However, it cannot set a cookie to be sent to all `.com` domains, as that would be a security risk.  (There are other restrictions on TLDs, but cookies are the easiest example.)

Aside from the true TLDs, browser makers have an agreed-upon extra list of domains that should get the same special handling.  That list is called the [Public Suffix List (PSL)](https://publicsuffix.org/), and is maintained by Mozilla.  It is a manually curated list of domain suffixes that should get the same special treatment.  You could, for example, add your `example.com` domain to the PSL, in which case browsers would refuse to set a cookie on `example.com` from a page at `foo.example.com`.  (A page at `example.com` could still do so, however.)

### Subdomain hijacking protection

Web PaaS only allows one project to use a given domain at a time.  That is to prevent one malicious actor from registering a project with `evil.example.com` and using that to set cookies on your `example.com` website.  More specifically, when a domain is added to any project the first non-PSL level of the domain is considered "reserved" to that project by our system.  So if you add `foo.bar.baz.example.com` to a project, that project now owns `example.com` as far as Web PaaS is concerned and no other project can have a domain anywhere in `*.example.com`.  (Multiple subdomains on the same project are perfectly fine, however.)

In most cases that is a desireable added layer of security.  However, it may run into a problem when multiple subdomains from the same organization should be run as separate projects.  (Multiple departments at the same university, for instance.)  One option would be to add `example.com` to the PSL, but that is not always desireable.

To limit what domains get reserved, Web PaaS supports a small extension to the PSL.  By declaring a `TXT` record on a specific subdomain, you can tell the system to treat a given domain as part of the PSL for reservation purposes.

That is, adding the following DNS record:

```text
_public-suffix-root.example.com TXT "public-suffix-root=example.com"
```

would tell Web PaaS to only reserve one level down from `example.com`.  In that case, adding `foo.bar.baz.example.com` to a project would reserve only `*.baz.example.com` to that project, allowing `beep.example.com` to be added to a different project without issue, which would therefore reserve `*.beep.example.com` to that project.

## Locked domains

If you accidentally added the domain to Web PaaS before adding the `TXT` record, you may still see an error message when setting up a second project with the bare domain (`example.com`).  If that happens, open a support ticket and our support team can remove the lock for that domain.
