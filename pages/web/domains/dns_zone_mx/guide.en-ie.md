---
title: 'Web hosting: Configuring MX with the OVH DNS zone'
excerpt: 'Web hosting: Configuring MX with the OVH DNS zone'
slug: web_hosting_configuring_mx_with_the_ovh_dns_zone
legacy_guide_number: g2012
---


## You have an email service with OVH
If you have an OVH email service, you can use the MX listed servers below in your DNS zone:

- Mail servers [Anti-Virus + Anti-Spam]:


|Record|Priority|Target|
|MX|1|mx1.mail.ovh.net.|
|MX|5|mx2.mail.ovh.net.|
|MX|10|mx3.mail.ovh.net.|



## Information:
The old MX servers are still working for email services created before 23/05/2016, but it is better to use the MX servers above so you are up to date.


## You do not have an email service with OVH
If you do not have an OVH email service, you cannot receive email because you do not have an email account. However, you can use aliases (redirections).

For example, create an "alias@mypersonaldomain.ovh alias, redirected to your real email "myaddress@myOtherdomain.com".
In this instance you have to use the following configuration:
Mail server [Alias]:
|Record|Priority|Target|
|MX|1|redirect.ovh.net|


Please note that you can use aliases (redirections) if you also have an email solution. See the email redirection guide: []({legacy}2001).


## You have an email service with another company

- You have a host name for your MX server(s)


If your domain name uses an OVH DNS zone, but your email solution is hosted elsewhere (not at OVH or on a dedicated server), you can configure your OVH DNS zone in the same way, but with their mail servers instead of ours.
Mail servers
|Record|Priority|Target|
|MX|1|your email server|
|MX|5|your other email server|



- You do not have host names, but one or several IPs for your MX server(s)


If your domain name uses an OVH DNS zone, but your email service is external (on a local server for example), you can configure your OVH DNS zone in order to link this IP to a host name, because you cannot have an MX record pointint towards an IP address.
Mail server
|Subdomain|Record|Priority|Target|
|mail2|A||Mail server IP|
||MX|1|mail2.your_domain|




## Timing
Also keep in mind, any DNS change can take up to 24 hours to propagate.

