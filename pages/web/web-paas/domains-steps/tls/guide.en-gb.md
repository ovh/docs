---
title: Configure a third-party TLS certificate
slug: tls
section: Steps
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} automatically provides standard Transport Layer Security (TLS) certificates for all sites and environments.
These certificates are issued at no charge by [Let's Encrypt](https://letsencrypt.org/) and cover most needs.
To use them, you need to [specify HTTPS routes](../../define-routes/https.md#enable-https). 
Note that some [limitations](../../define-routes/https.md#lets-encrypt-limitations) apply.

{{< vendor/name >}} allows you to use third-party TLS certificates free of charge.

You can use many kinds of custom certificates, including domain-validated, extended validation, high-assurance, or wildcard certificates.
Consult your TLS issuer for pricing and instructions on how to generate a TLS certificate.

Seven days before a third-party custom certificate is due to expire,
{{< vendor/name >}} replaces it with a new default Let’s Encrypt certificate.
This helps prevent downtime.
To avoid switching to a default certificate,
make sure you replace your custom certificate with an updated one
more than seven days before its expiration date.

Note that custom certificates aren't necessary for development environments.
Wildcard certificates that cover all `*.platform.sh` domains, including development environments, are automatically provided.

### Add a custom certificate

You can add a custom certificate using the [CLI](../../administration/cli/_index.md) or in the [Console](../../administration/web/_index.md).

Your certificate has to be in PKCS #1 format and start with `-----BEGIN RSA PRIVATE KEY-----`.
If it doesn't start that way, [change the format](#change-the-private-key-format).

To add your custom certificate, follow these steps:

> [!tabs]      

### Change the private key format

The expected format for your certificate’s private key is PKCS #1.
Private keys in PKCS #1 format start with `-----BEGIN RSA PRIVATE KEY-----`.
If your private key starts with `-----BEGIN PRIVATE KEY-----`, it’s in PKCS #8 format, which isn’t appropriate.

To convert your private key (`private.key`) from PKCS #8 to PKCS #1 format (`private.rsa.key`), run the following command:

```bash
openTLS rsa -in private.key -out private.rsa.key
```
