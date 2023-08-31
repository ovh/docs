---
title: Configure HTTP access control
slug: environments-http-access-control
section: Environments
---

**Last updated 31st August 2023**



## Objective  

When developing your site, you might want to hide your development environments from outside viewers.
Or you may find you have performance issues from [excessive bot access](https://community.platform.sh/t/diagnosing-and-resolving-issues-with-excessive-bot-access/792).
You can control access either with a username and password or by allowing/denying specific IP addresses or networks.
This setting applies to the entire environment.

The settings for a specific environment are inherited by all of its children.
So if you have a `staging` environment and you [branch environments from it](../other/glossary.md#branch),
all of the environments branched from it inherit the same authentication information.

Changing access control triggers a new deploy of the current environment.
The changes don't propagate to child environments until they're [redeployed manually](../development/troubleshoot.md#force-a-redeploy).

## Use a username and password

You can set up one or more combinations of a username and password.
To add a username and password, follow these steps:

> [!tabs]      

## Filter IP addresses

You can control access to environments by allowing or denying specific IP addresses or ranges of IP addresses.
The addresses should be in the [CIDR format](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
Both`4.5.6.7` and `4.5.6.0/8` are accepted formats.

Note that `allow` entries should come before `deny` entries in case they both match.

For example, the following configuration allows only the IP `198.51.100.0` to access your website.

```txt
198.51.100.0 allow
0.0.0.0/0 deny
```

To control access based on IP address, follow these steps:

> [!tabs]      
