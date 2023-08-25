---
title: Going Live - Troubleshooting
updated: 2021-05-11
---



## Objective  

If all steps above have been followed and the site still does not resolve (after waiting for the DNS update to propagate), here are a few simple self-help steps to take before contacting support.


## Verify DNS

On the command line with OS X or Linux (or using the Linux subsystem for Windows) type `host www.example.com`:

The response should be something like:

```text
www.example.com is an alias for master-t2xxqeifuhpzg.eu.platform.sh.
master-t2xxqeifuhpzg.eu.platform.sh has address 54.76.136.188
```

1\. If it is not either you have not configured correctly your DNS server, or the DNS configuration did not propagate yet. As a first step you can try and remove your local DNS cache.

2\. You can also try to set your DNS server to the Google public DNS server (8.8.8.8/8.8.4.4) to see if the issue is with the DNS server you are using.

3\. Try to run `ping www.example.com` (with you own domain name) if the result is different from what you got form the `host www.example.com` you might want to verify your `/etc/hosts` file (or its windows equivalent), you might have left there an entry from testing.


## Verify SSL

On the command line with OS X or Linux (or using the Linux subsystem for Windows) type `curl -I -v  https://example.com` (again using your own domain):

The response should be long. Look for error messages. They are usually explicit enough. Often the problem will be with a mismatch between the certificate and the domain name.

## Verify your application

On the command line type `webpaas logs app` and see there are no clear anomalies there. Do the same with `webpaas logs error`


