---
title: (Optional) Configure a third-party TLS certificate
updated: 2021-05-11
---




## Objective  

Web PaaS automatically provides standard TLS certificates issued by [Let's Encrypt](https://letsencrypt.org/) to all production instances. No further action is required to use TLS-encrypted connections beyond [specifying HTTPS routes](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration/configuration-routes/https) in your `routes.yaml` file.

Alternatively, you may provide your own third party TLS certificate from the TLS issuer of your choice at no charge from us.  Please consult your TLS issuer for instructions on how to generate an TLS certificate.

A custom certificate is not necessary for development environments.  Web PaaS automatically provides wildcard certificates that cover all \*.platform.sh domains, including development environments.

> [!primary]  
> The private key should be in the old style, which means it should start with BEGIN RSA PRIVATE KEY. If it starts with BEGIN PRIVATE KEY that means it is bundled with the identifier for key type.
> 
> To convert it to the old-style RSA key:
> 
> ```bash
> openTLS rsa -in private.key -out private.rsa.key
> ```
> 
> 


### Adding a custom certificate through the management console

You can add a custom certificate via the Web PaaS [management console](/pages/web_cloud/web_paas_powered_by_platform_sh/administration/administration-web). In the management console for the project go to [Settings](/pages/web_cloud/web_paas_powered_by_platform_sh/administration/administration-web/configure-project) and click Certificates on the left hand side. You can add a certificate with the `Add` button at the top of the page. You can then add your private key, public key certificate and optional certificate chain.

> [!primary]  
> You will need to redeploy the impacted environment(s) for the new certificate to be taken into account.
> 
> ```bash
> webpaas environment:redeploy
> ```
> 

![Management console configuration for TLS](images/settings-certificates.png)


### Adding a custom certificate through the CLI

Example:
```bash
webpaas domain:add secure.example.com --cert=/etc/TLS/private/secure-example-com.crt --key=/etc/TLS/private/secure-example-com.key
```

See `webpaas help domain:add` for more information.

> [!primary]  
> Your site should now be live, and accessible to the world (as soon as the DNS propagates).
> 

If something is not working see the [troubleshooting guide](/pages/web_cloud/web_paas_powered_by_platform_sh/domains/domains-troubleshoot) for common issues. If that doesn't help, feel free to contact support.
