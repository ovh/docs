---
title: "Web Hosting - Installing a custom SSL certificate"
excerpt: "Find out how to import and install a custom SSL certificate on your OVHcloud Web Hosting plan"
updated: 2024-10-15
---

## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any exchange of data on your website. This prevents unauthorised persons and malicious robots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on "[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)". SSL certificates are essential for the security of your website.

Depending on your situation, you may want to install a different SSL certificate than the ones offered by OVHcloud on your Web Hosting plan.

**Find out how to import and install a custom SSL certificate on your OVHcloud Web Hosting plan.**

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order an SSL secured [OVHcloud web hosting plan](/links/web/hosting) or you have a web hosting plan in your customer account without an SSL certificate installed.
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.
- SSH access (via a computer terminal, for example) with OpenSSL installed.

## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
>
> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) if you encounter any difficulties. We will not be able to assist you with the **installation or subscription of an SSL certificate other than [those offered by OVHcloud](/links/web/hosting-options-ssl)**. You can find more information in the "[Go further](#go-further)" section of this guide.
>

### Step 1 - Obtain an SSL Certificate Signing Request (CSR) <a name="step-1"></a>

> [!primary]
>
> This step is optional if you have already generated and retrieved the SSL certificate from your SSL provider, or if your provider offers to generate the CSR during the order process for the SSL certificate. If this is the case, go directly to [step 2](#step-2).

#### 1.1 - Generate private key and CSR in SSH <a name="step-1.1"></a>

Open a terminal to connect via SSH. This tool is installed by default on macOS or Linux. For a Windows environment, you will need to install software like PuTTY, or add the ‘OpenSSH’ feature. Since this method is specific to the operating system you are using, we cannot detail it in this documentation.

In the terminal, issue the following command:

```ssh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Replace the terms `my_private` and `your_file_name` with the file names of your choice.

Once the command is launched, the terminal will ask you for each of the following information (for yourself, your company or your association). Once you have answered the question asked, then press the `ENTER`{.action} key on your keyboard to display the following question:

- `Country Name (2 letter code) [AU]`: Enter the **Country Code** of your country in upper case. If you need to, you can find the list of all **Country Codes** [here](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]`: Enter the name of your region (or state if you are in the USA, for example) in upper-case letters.
- `Locality Name (eg, city) []` : Enter the name of your city in upper case.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]`: Enter the name of your organization, company, or association. **If you are an individual, do not answer this question and press the `ENTER`{.action} key directly on your keyboard to display the next question**.
- `Organizational Unit Name (eg, section) []`: Enter the name of your department or department within your organization, company, or association. **If you are an individual, do not answer this question and press the `ENTER`{.action} key directly on your keyboard to display the next question**.
- `Common Name (e.g. server FQDN or YOUR name) []`: Enter the domain name (e.g. `domain.tld`) or subdomain (e.g. `sub.domain.tld`) for which you would like to obtain an SSL certificate. **Only one** domain name or subdomain can be entered here. Depending on the SSL provider, you will need to specify either your domain name alone (e.g. `domain.tld`) or its subdomain as “www” (e.g. `www.domain.tld`). Please check with your SSL provider beforehand.
- `Email Address []`: Enter your email address.

The questions that follow are optional and mainly concern informed users. If you have any doubts, we strongly recommend passing them by pressing the `ENTER`{.action} key on your keyboard until the terminal no longer asks you any questions.

- `A challenge password []`: For informed users, enter a secret password that will be used between you and the SSL certificate provider. Please note that on the OVHcloud side, the CSR and private key do not need to be password protected to be added to an OVHcloud shared hosting plan.
- `An optional company name []`: For informed users, you can enter a different name for your organization, company or association.

#### 1.2 - Retrieve the private key in SSH

To retrieve the private key generated earlier and still from your terminal, run the following command:

```ssh
cat my_private.key
```

Replace the term `my_private` with the filename you chose earlier in [step 1.1](#step-1.1) of this guide.

The private key will then appear in your terminal as follows:

```ssh
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Open word processing software (notepad, LibreOffice, etc.), then `copy/paste`{.action} the entire private key, including the terms `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`.

Save this file and save it for the rest of this guide if your SSL provider asks you to do so during your future order.

#### 1.3 - Retrieve the CSR in SSH

To retrieve the CSR generated earlier and still from your terminal, run the following command:

```ssh
cat your_file_name.csr
```

Replace the term `your_file_name` with the file name you chose earlier in [step 1.1](#step-1.1) of this guide.

The CSR will then appear in your terminal as follows:

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Open word processing software, then `copy/paste`{.action} the entire CSR, including the terms `-----BEGIN CERTIFICATE REQUEST-----` and `-----END CERTIFICATE REQUEST-----`.

Save this file and save it for the rest of this guide if your SSL provider asks you to do so during your future order.

> [!warning]
>
> The file containing the private key and the file containing the CSR are linked and cannot be interchanged. If you have generated multiple private keys or multiple CSRs, make sure that you do not mix your different private keys and CSRs.

### Step 2 - Order the SSL certificate from your SSL provider <a name="step-2"></a>

> [!primary]
>
> This step is optional if you have already generated and retrieved the SSL certificate from your SSL provider. If this is the case, go directly to [step 3](#step-3).

Order the SSL certificate from your SSL provider. If the customer needs it, send them the CSR generated in [step 1](#step-1) of this guide. If the user requests the private key generated in [step 1](#step-1), send it as well.

Following your order, the SSL certificate provider must provide you with 3 files:

- the `certificate.crt` file;
- the `private.key` file;
- the file `ca_bundle.crt`.

You will need the content of each file to complete [step 3](#step-3) of this guide.

<a name="3files"></a>

> [!warning]
>
> Some SSL providers deliver the contents of the `certificate.crt` and `ca_bundle.crt` files in a single file. You will need to separate the contents of this file in order to reform the `certificate.crt` and `ca_bundle.crt` files. This is before performing [step 3](#step-3) of this guide.
>
> Other SSL providers deliver the file `ca_bundle.crt` in several parts/files. You will need to concatenate the contents of these files in order to reform a single `ca_bundle.crt` file, and follow [step 3](#step-3) of this guide.
>
> If this applies to you, and you experience any difficulties performing these operations, please contact your SSL provider regarding this issue. Tell them that all of the content they have delivered to you must only be distributed in 3 files (`certificate.crt`, `ca_bundle.crt` and `private.key`) so that you can proceed with the installation of the SSL certificate.

### Step 3 - Install the custom SSL certificate on your Web Hosting plan <a name="step-3"></a>

If you start reading this guide directly in this step because you already have an external SSL certificate ordered from an SSL provider, check that you only have the following 3 files: `certificate.crt`, `private.key` and `ca_bundle.crt`. If not, see the information [above](#3files).

**Before finalizing the SSL certificate installation on your web hosting plan**, please ensure that **all domain names and/or subdomains** included in your SSL certificate:

- point to your web hosting plan’s IP address;
- are declared as multisites on your web hosting plan;

Also check the following:

- The `SSL` box must not be ticked when adding a domain/subdomain to your multisite that is covered by your external SSL certificate.
- The status `To generate` or `Enabled` must not already be present for each of the domain names/subdomains concerned by your external SSL certificate.

If you need help with this, please refer to our guides “[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)” and “[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)”.

Once you have met all of these requirements, you can start finalizing the installation of your custom SSL certificate on your Web Hosting plan.

To do this, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labeled `Configuration`.
7. To the right of `SSL certificate`, click on the `...`{.action} button, then `Order an SSL certificate`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

In the window that pops up, select `Import your SSL certificate`{.action} from the list of possible choices, then click `Next`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

The following window will pop up, with 3 forms to complete:

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Copy the content of your certificate (Only RSA)`{.action}: Enter the contents of the **certificate.crt** file issued by your SSL provider, including the terms `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` (or their equivalents). RSA encryption is the standard encryption for SSL certificates.
- `Copy the content of your private key (not encrypted)`{.action}: Enter the contents of the **private.key** file issued by your SSL provider, including the terms `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----` (or their equivalents). *not encrypted* means that the private key must not be password or passphrase protected. Otherwise, the certificate installation will fail.
- `Copy the content of your certificate chain`{.action}: Enter the contents of the **ca_bundle.crt** file from your SSL provider, including the terms `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` (or their equivalents).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Once you have completed the three forms, click `Confirm`{.action} to finish importing the custom SSL certificate to your Web Hosting plan.

If the SSL certificate has been generated successfully by the SSL provider, and the requirements are met, a message will appear stating that the SSL certificate is being activated on your Web Hosting plan.

> [!warning]
>
> If you encounter the error `error check SAN from certificate`, this is due to at least one of the following two situations:
>
> - at least one domain/subdomain name declared in your SSL certificate does not point to your Web Hosting plan’s IP address;
> - at least one domain name/subdomain declared in your SSL certificate is not declared in the `Multisite` tab of your Web Hosting plan.
>
> Refer to our guides “[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)” and “[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)” to resolve this situation.

The installation will take several minutes.

To verify that the installation is complete, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labeled `Configuration`.

If everything is finished, you will find a value below the mention `SSL certificate` equivalent to this: `Yes - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

Your custom SSL certificate is now installed and active. You can now use it with your website by switching, for example, to your [website in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Go further <a name="go-further"></a>

[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web Hosting - Switch your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).