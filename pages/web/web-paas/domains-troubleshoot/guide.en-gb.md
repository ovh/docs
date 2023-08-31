---
title: Going Live - Troubleshooting
slug: domains-troubleshoot
section: Domains
order: 7
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

## Verify DNS

On the command line using macOS, Linux, or the Windows Subsystem for Linux, run the following command:

```bash
host www.{{< variable "YOUR_DOMAIN" >}}
```

If your domain is `example.com`, the response should be something like the following:

```text
www.example.com is an alias for main-abcd123.abcdefgh1234567.eu.platformsh.site.
main-abcd123.abcdefgh1234567.eu.platformsh.site has address 192.0.2.1
```

If it isn't, try the following steps:

- Your DNS server might not be correctly configured or the old DNS records are still cached.

  Try removing your local DNS cache.
- Set your computer's DNS server to any Public DNS resolver (like [CloudFlare](https://developers.cloudflare.com/1.1.1.1/) or [Google](https://developers.google.com/speed/public-dns/docs/using))

  to see if the issue is with the DNS server you are using.
- Run `ping www.{{< variable "YOUR_DOMAIN" >}}`.

  If the result is different from what you got from running `host www.{{< variable "YOUR_DOMAIN" >}}`,
  you might need to remove your test settings.

## Verify SSL/TLS encryption

To find out where your domain is pointing to,
you can use [the certificate checker tool](https://certcheck.pltfrm.sh/).
This tool provides guidance on certificates,
including when you use a [CDN](./cdn/_index.md).
Check both the apex and the `www` domains to ensure they both point to your project.

For further investigations, run the following command in a shell:

```bash
curl -I -v  https://www.{{< variable "YOUR_DOMAIN" >}}
```

Look for error messages.
Often the problem is caused by a mismatch between the certificate and the domain name or an expired [custom certificate](../(steps-tls).

### Error provisioning certificates

When a Let's Encrypt certificate fails to provision after the build hook has completed,
you get output similar to the following:

```bash
Provisioning certificates
  Validating 2 new domains
  
  E: Error validating domains: urn:ietf:params:acme:error:rejectedIdentifier :: The server will not issue certificates for the identifier :: NewOrder request did not include a SAN short enough to fit in CN
  Unable to validate domains domain a-new-and-really-awesome-feature-abc1234-defghijk56789.eu3.platformsh.site, www.domain a-new-and-really-awesome-feature-abc1234-defghijk56789.eu3.platformsh.site, will retry in the background.
  (Next refresh will be at 2023-04-28 02:22:50.639301+00:00.)
  
  E: Error: TLS Certificate provisioning failed
```

The renewal may fail because of the 64-character limit Let's Encrypt places on URLs.
If you have a branch with a long name, the environment URL is over this limit and the certificate is rejected.
To solve this, shorten your branch name so it doesn't exceed 20 characters.

Generated URLs for environments have the following pattern:

```bash
{{<variable "ENVIRONMENT" >}}-{{<variable "PROJECT_ID" >}}.{{<variable "REGION" >}}.platformsh.site
```

If you have a [default domain](../define-routes/_index.md#default) set up, the generated URL has the following pattern:

```bash
{{<variable "YOUR_DOMAIN" >}}.{{<variable "ENVIRONMENT" >}}-{{<variable "PROJECT_ID" >}}.{{<variable "REGION" >}}.platformsh.site
```

The generated URLs consist of:

- `{{<variable "YOUR_DOMAIN" >}}` = the amount of characters your domain has

- `{{<variable "ENVIRONMENT" >}}` = `{{<variable "BRANCH_NAME" >}}` + 7 character hash

- `{{<variable "PROJECT_ID" >}}` = 13 characters

- `{{<variable "REGION" >}}` = 2 to 4 characters, depending on the region

- `platformsh.site` = 15 characters

- extra characters like `.` and `-` = 4 to 5 characters, depending on if you have a default domain


This leaves you with 21 to 23 characters for your branch name (`{{<variable "BRANCH_NAME" >}}`) without exceeding the 64-character limit,
depending on the region.
To ensure your renewals succeed, 
keep your branch names under 20 characters.

### Ownership verification

To provide a valid TLS-certificate,
the certificate issuer checks that the requester is entitled to receive the requested certificate.
This check is known as the _Challenge_ step.

The certificate request is generated based on your [routes definition](../define-routes/_index.md).
If you want your site to be available with `example.com` and its `www.example.com` subdomain, make sure both are defined in your routes.

To pass this verification, there are requirements you need to meet.

> [!tabs]      

Make sure that the [apex domain](../other/glossary.md#apex-domain) and its `www` subdomain are both pointing where needed.
Note that it can take up to 72 hours for DNS changes to be effective.
For more information, see how to [set up a custom domain](../domains/steps/_index.md).

If the changes take longer than expected,
[redeploy](../development/troubleshoot.md#force-a-redeploy) the impacted environment.

Also make sure that no conflicting DNS records exist for your domain.
For example, a conflicting AAAA (IPv6) DNS record can result in a `[HTTP01: The client lacks sufficient authorization]` error.

If the certificate generation issue persists,
check if an outage is ongoing with your certificate issuer (the most common one is [Let's Encrypt](https://letsencrypt.status.io/))
and with your CDN provider if you have one.
If not, [contact Support](../overview/get-support.md).

### Check your routes configuration

Certificates are generated based on your [routes configuration](../define-routes/_index.md).
When a certificate is renewed, the renewal bot checks that all of the defined routes can be accessed.
If at least one of the routes defined in your `{{< vendor/configfile "routes" >}}` file can't be accessed,
the renewal fails and the following error is displayed:

```
Provisioning certificates
  Validating 2 new domains
  W: Failed to verify the challenge at the gateway for the domain 'www.example.com'
  E: Error validating domain www.example.com: Couldn't complete challenge [HTTP01: There was a problem with a DNS query during identifier validation]
  Unable to validate domains www.example.com, will retry in the background.
  (Next refresh will be at 2023-07-04 17:43:10.259891+00:00.)
  Certificates
  - certificate 61bc4c8: expiring on 2023-09-02 01:11:12+00:00, covering sdgs.un.org

E: Error: TLS Certificate provisioning failed
```

For example, if you add `example.com` and `www.example.com` to your routes configuration
but the `www` subdomain doesn't point to your project through [a `CNAME` record](./steps/dns.md#cname-records),
the certificate renewal fails.
For the renewal to succeed, add the missing `CNAME` record to your DNS
or remove `www.example.com` (and any other `www` route) from your `{{< vendor/configfile "routes" >}}` file.

## Verify your application

Check your app's logs and look for anomalies.
On the command line type `webpaas logs app` and `webpaas logs error`.

## Use ASCII for the domain

{{< vendor/name >}} expects an ASCII representation of your domain.
To use an internationalized domain name (IDN), convert it to ASCII.
Use a tool such as the [conversion tool provided by Verisign](https://www.verisign.com/en_US/channel-resources/domain-registry-products/idn/idn-conversion-tool/index.xhtml).

## Something still wrong?

{{% troubleshoot %}}

If your website is still not working as expected, [contact support](../overview/get-support.md).
