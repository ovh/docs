---
title: HTTPS
slug: define-routes-https
section: Define-Routes
---

**Last updated 31st August 2023**



## Objective  

Using HTTPS for your site helps ensure your users' information remains secure.
HTTPS provides enhanced security thanks to the following characteristics:

- With HTTPS, data is encrypted so user activity can't be tracked and user information can't be stolen.

- HTTPS prevents the corruption of files transferred from a web server to a website and vice-versa.

- HTTPS also authenticates websites, which helps build trust with your users.


To enable HTTPS on your site, you need [Transport Layer Security (TLS) certificates](#tls-certificates).

## TLS certificates

{{< vendor/name >}} automatically provides TLS certificates for all sites and environments.
These certificates are issued at no charge by [Let's Encrypt](https://letsencrypt.org/) and cover most needs.
They're valid for 90 days and automatically renewed 28 days before expiration.

To use them, you only need to [specify HTTPS routes](../define-routes/https.md#enable-https).
Note that [limitations](../define-routes/https.md#lets-encrypt-limitations) apply.
If you encounter issues with the TLS certificates provided by {{< vendor/name >}},
check that [TLS encryption is up-and-running](../domains/troubleshoot.md#verify-ssltls-encryption).

If you don't want to use the TLS certificates provided by {{< vendor/name >}},
configure your own [third-party TLS certificates](../domains/steps/tls.md).

### Let's Encrypt limitations

When you use the Let's Encrypt [TLS certificates](#tls-certificates) provided by {{< vendor/name >}},
the following limitations apply.  

{{% lets_encrypt_limitations %}}

If you need more hostnames, you can obtain additional certificates
or a wildcard certificate from a [third-party issuer](../domains/steps/tls.md).
Alternatively, consider splitting your project up into multiple {{< vendor/name >}} projects.

### Certificate renewals

When you use the [TLS certificates](#tls-certificates) provided by {{< vendor/name >}},
certificate renewals are automatic.
They trigger a redeployment of your environment.
During this redeployment, required security and system upgrades are applied to your containers.
So the duration of the redeployment depends on what needs to be upgraded.

## Enable HTTPS

To enable HTTPS, add a routing configuration similar to the following:

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: "app:http"

"https://www.{default}/":
    type: redirect
    to: "https://{default}/"
```

All traffic to your domain is then sent to your app.
The `www` subdomain redirects to the [default domain](../define-routes/_index.md#default).
This also includes redirecting requests from HTTP to HTTPS.

For more information, see how to [define routes](../define-routes/_index.md).

## Optional: Configure TLS connections

When you [specify HTTPS routes](#enable-https),
you can use the `tls` setting to further configure your TLS connections.

### Enforce TLS 1.3

Although you can still use TLS 1.2, TLS 1.3 is faster and more secure.
To instruct your web server to automatically reject TLS 1.2 connections,
enforce TLS 1.3 using the `min_version` setting:

```yaml {configFile="routes"}
tls:
    min_version: TLSv1.3
```

Note that TLS versions older than 1.2 are deprecated and are rejected by default.

### Enable HTTP Strict Transport Security (HSTS)

[HSTS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) forces clients to always communicate with your site over HTTPS.
To enable HSTS, use `strict_transport_security` in a configuration similar to the following:

```yaml {configFile="routes"}
tls:
    strict_transport_security:
        enabled: true
        include_subdomains: true
        preload: true
```

The following table presents the possible properties for `strict_transport_security`:

| Name                 | Type      | Default | Description                                                                                    |
|----------------------|-----------|---------|------------------------------------------------------------------------------------------------|
| `enabled`            | `boolean` | `null`  | If set to `true`, HSTS is enabled for 1 year. If set to `false`, other properties are ignored. |
| `include_subdomains` | `boolean` | `false` | To specify whether HSTS applies to all subdomains.                                             |
| `preload`            | `boolean` | `false` | To add your website to the [HSTS preload list](https://hstspreload.org/). Thanks to this list, most browsers are informed that your site requires HSTS before an HSTS header response is even issued. |

Note that when you enable or disable HSTS, the entire domain is affected.
Make sure you only add the HSTS configuration to a single route.
Having different routes with conflicting HSTS configurations can cause issues.

### Enable client-authenticated TLS

Standard TLS connections are useful to verify the identity of web servers and their certificates.
But you can also instruct your web server to verify the identity of clients and their certificates.
This allows you to restrict access to trusted users.

To do so, enable client-authenticated TLS by adding the following configuration:

```yaml {configFile="routes"}
tls:
    client_authentication: "require"
```

By default, all valid TLS certificates issued by a legitimate certificate authority are accepted.
But you can instruct your web server to only accept TLS certificates issued by specific or even custom certificate authorities.

To do so, add a configuration similar to the following:

```yaml {configFile="routes"}
tls:
    client_authentication: "require"
    client_certificate_authorities:
        - !include
            type: string
            path: root-ca1.crt
        - !include
            type: string
            path: root-ca2.crt
```

In this case, the certificate files are resolved relative to the `{{< vendor/configdir >}}` directory.
Alternatively, you can specify the certificates inline in the file:

```yaml {configFile="routes"}
tls:
    client_authentication: "require"
    client_certificate_authorities:
        - |
            -----BEGIN CERTIFICATE-----
            ### Several lines of characters here ###
            -----END CERTIFICATE-----
        - |
            -----BEGIN CERTIFICATE-----
            ### Several lines of different characters here ###
            -----END CERTIFICATE-----
```
