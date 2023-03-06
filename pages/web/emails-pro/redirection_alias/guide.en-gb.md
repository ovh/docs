---
title: 'Using email aliases and redirections'
slug: email-redirection-guide
excerpt: 'Find out how to manage aliases and email redirections'
section: 'Email address features'
order: 01
routes:
  canonical: "https://docs.ovh.com/gb/en/emails/email-redirection-guide/"
updated: 2020-05-20
---

**Last updated 1st February 2023**

## Objective

In this guide, you will find information and support on how to configure email redirections, such as redirecting emails received from address A to address B.

**This guide explains how to manage aliases and email redirections.**

### What is an email redirection?

You can use redirections to change the routing of an email sent to an email address, forwarding it to one or more other email addresses.

For example, you may want emails sent to **contact@mydomain.ovh** forwarded to **john.smith@otherdomain.ovh**. By doing so, you can automatically send emails received by **contact@mydomain.ovh** to **john.smith@otherdomain.ovh**.

### What is an email alias?

Unlike redirection, an alias address is not an actual email account, but functions as a secondary address for the email account associated with it.

By creating an alias for your email account, you can give your contacts a "masking" address instead of revealing your personal email address to them. An email account can have multiple aliases.

For example, your email address is **john.smith@mydomain.ovh** and your alias is **information@mydomain.ovh**. You can then send your contacts the address **information@mydomain.ovh** and receive emails on **john.smith@mydomain.ovh**, without the sender knowing the address **john.smith@mydomain.ovh**.

### Redirection and alias in comparison <a name="diagram"></a>

- **Simple redirection (diagram 1 below)**: The email is sent directly to the redirection email address, the original recipient does not receive the email.

- **Redirection with local copy (diagram 2 below)**: Both the original recipient and the redirection email account will receive the email.

- **Email alias (diagram 3 below)**: The email is sent to the alias address and received by the email account on which the alias has been configured.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Note that you can configure a redirection to several email addresses.

## Requirements

- A preconfigured OVHcloud email solution, such as [**Hosted Exchange**](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/en-gb/emails/email-pro/)) or **MX Plan** (available with a [web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/), a [free Start 10M hosting plan](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/), or ordered separately)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

Follow our guide [Using email aliases and redirections](https://docs.ovh.com/gb/en/emails/email-redirection-guide/) in the "Hosted email - MX Plan" section.