---
title: Configure a secure Load Balancer with Let's Encrypt
slug: load-balancer-with-letsencrypt
excerpt: Discover how to configure a Load Balancer on a secure Public Cloud with Let's Encrypt
section: Tutorials
order: 1
---

**Last updated le 30/04/2021**

## Objective

You want to discover our new Load Balancer solution, integrated into the Public Cloud. More specifically, find out how to secure your Load Balancer with Let's Encrypt.

**Discover how to configure a Load Balancer on a secure Public Cloud with Let's Encrypt**

## Requirements

- A project in [Public Cloud](https://www.ovhcloud.com/en-gb/public-cloud/)
- You need to have activated the GRA9 region in your project
- Use the Openstack command line environment ([Tutorial](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/))
- You need to have the Openstack client
- Have a Load Balancer running in your project

If you are not yet familiar with creating a Load Balancer, we recommend referring to our guide: « [Getting started with Load Balancer on Public Cloud](../../load-balancer-octavia/getting-started-with-load-balancer-public-cloud) » before you continue reading this guide.

## In practice

### New certificate

#### Create an instance for Let's Encrypt

You can create an instance in your project in the region where your Load Balancer is located. If you don't know how to do it, here's one [guide](https://docs.ovh.com/gb/en/public-cloud/public-cloud-first-steps/) that might be useful. We recommend that you use Ubuntu 20.04 as your operating system, and the d2-2 format will be sufficient for this operation.

Once you have created your instance, you can track [the Let's Encrypt documentation (certbot)](https://certbot.eff.org/lets-encrypt/ubuntufocal-other) to install.

#### Configuration of Load Balancer

You will need to create a first Listner that will listen on port 80 (HTTP) and will take care of redirecting HTTP to HTTPS. It will also contain a redirection rule to the Let's Encrypt instance for certificate verification.

```
openstack loadbalancer listner create --protocol-port 80 --protocol HTTP --name http-listner my_load_balancer

openstack loadbalancer pool create --name pool-letsencrypt --lb-algorithm ROUND_ROBIN --listener http-listner --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_letsencrypt_instance>  --protocol-port 80 pool-letsencrypt
```

We will now create the redirection rules.

```
openstack loadbalancer l7policy create --action REDIRECT_TO_POOL --redirect-pool pool-letsencrypt --name letsencrypt-redirection http-listner --position 1

openstack loadbalancer l7rule create --compare-type STARTS_WITH --type PATH --value /.well-known/acme-challenge letsencrypt-redirection
```

#### Certificate generation

From the Let's Encrypt instance, you can now launch certificate generation.

```
ubuntu@letsencrypt:~$ sudo certbot certonly -d <domain.tld> --standalone -m <email> --agree-tos
```

Once the process is complete, your certificate is located in `/etc/letsencrypt/live/domain.tld`. You will need to merge the certificate with its certificate private key.

```
ubuntu@letsencrypt:~$ sudo $(cat /etc/letsencrypt/live/domain.tld/fullchain.pem /etc/letsencrypt/live/domain.tld/privkey.pem | tee /etc/ssl/domain.tld/domain.tld.pem)
```

Then you need to create a PKCS#12 package with your certificate in it.

```
ubuntu@letsencrypt:~$ sudo openssl pkcs12 -export -inkey domain.tld.pem -in domain.tld.pem -out domain.tld.p12
```

You must download this file directly to your computer in order to send it to Openstack Barbican (Secret as a Service).

```
openstack secret store --name='LetsEncrypt-cert-domain.tld' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server.p12)"

```

#### Configuring the Secure Listener on the Load Balancer

Now that you have your certificate you can add a secure Listener.

```
openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name https-listner --default-tls-container=$(openstack secret list | awk '/ LetsEncrypt-cert-domain.tld / {print $2}') my_load_balancer

openstack loadbalancer pool create --name pool-tls --lb-algorithm ROUND_ROBIN --listener tls-listner --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

You can now securely access your Load Balancer with Let's Encrypt.

## Go further

[Discover other pages about Load Balancer on Public Cloud](../../load-balancer-octavia)

[Official documentation of Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Join our community of users on <https://community.ovh.com>.

**Join [out Gitter room ](https://gitter.im/ovh/octavia-loadbalancer) to discuss with the OVHcloud team and other users of this lab.**