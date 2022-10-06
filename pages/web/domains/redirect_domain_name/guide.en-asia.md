---
title: "Redirecting a domain name managed by OVHcloud"
slug: redirect-domain-name
excerpt: "Find out about the various redirection types, and how to create one for a domain name managed by OVHcloud"
section: General
order: 01
---

**Last updated 6th October 2022**

## Objective

Redirecting a domain name is to redirect it to a new target. Different types of redirections exist, each responding to a specific need.

**This guide explains how to redirect your domain name.**

## Requirements

- A [domain name](https://www.ovhcloud.com/asia/domains/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) with the necessary permissions to manage the domain name
- The login credentials required to connect to your storage space via SSH (optional, for redirection via a [.htaccess](#htaccess_rewrite) file).

## Instructions

### Understanding domain name redirection

This feature allows you to redirect a domain or subdomain to:

- Another domain/subdomain already existing
    - **Example**: `domain.tld`
- A website URL (Uniform Resource Locator)
    - **Examples**: `http://www.domain.tld/welcome/` or `https://www.domain.tld/welcome/` (if the target domain has a compatible SSL certificate)

There are several ways of doing this:

- **From the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)**, where a configuration assistant can be used to set your redirection.
- **Via a method that requires programming**, in which case you will need to create the redirection yourself in a file (usually a [.htaccess](#htaccess_rewrite))

> [!warning]
>
> Setting up a redirection can affect your SEO ranking. 
> Be careful about the changes you apply, or contact a [specialised provider](https://partner.ovhcloud.com/asia/) for SEO if necessary.
>
> Warning: A redirection created from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) does not redirect an URL as `https://` to another domain or URL. 
> To create this type of redirection, you will have to apply [a URL rewrite](https://docs.ovh.com/asia/en/hosting/htaccess_url_rewriting_using_mod_rewrite/), for example by editing a ".htaccess" file. 
>

### Redirecting a domain name from the Control Panel

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, go to the `Web Cloud`{.action} section, select the domain to redirect from `Domain names`{.action}, then click on the `Redirection`{.action} tab.

The table displays active redirections for your domain name. You can manage your existing redirections using the `...`{.action} button to the right of each line.

Click the `Add Redirection`{.action} button.

![Introduction to the redirection menu](images/RedirectionPanel.png){.thumbnail}

Three redirection options are available from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), and each of them is made up of **5 successive steps**. 

> The `Redirection`{.action} tab contains a fourth option that allows your domain to be quickly pointed to DNS A, AAAA and CNAME records.<br>
> Since this is not strictly a "redirection", this option will not be detailed in this guide.
>
> For more information on DNS records, see our [DNS records](https://docs.ovh.com/asia/en/domains/web_hosting_how_to_edit_my_dns_zone/).
>

Below are the three types of redirections detailed step by step.

> [!primary]
>
> Whichever redirection option you choose, the change can take between 4 and a maximum of 24 hours to propagate fully.

### Option 1: permanent visible redirection to a web address

After entering the domain which is being redirected into a browser's address bar, the target domain will be displayed instead.

- **Example**: if you redirect `domain1.tld` to `domain2.tld`, `domain2.tld` will appear in the address bar in your browser.

![Gif1](images/redirect1.gif){.thumbnail}

> This "standard" redirection will return a HTTP 301 code.

> [!success]
> Click on the tabs below to view each of the 5 steps in turn.

> [!tabs]
> **Step 1**
>>
>> In the popup window, your domain to redirect already appears. Fill in the form **only** if you wish to redirect a *subdomain*.
>>
>> The `Also redirect`{.action} box can be checked to also redirect the `www` subdomain to the same target you choose for your domain/subdomain.
>>
>> ![Step 1](images/Step1.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 2.
>>
> **Step 2**
>>
>> Select `To a web address`{.action}.
>>
>> ![Step 2](images/Step2.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 3.
>>
> **Step 3**
>>
>> Select `A visible redirection`{.action} from the two choices shown.
>>
>> ![Step 3](images/Step3Visi.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 4.
>>
> **Step 4**
>>
>> Select `Permanent (301)`{.action} from the two choices listed, then enter the target domain or URL for your redirection in the `Web address`{.action} form that appears.
>>
>> ![Step 4](images/Step4VisiPerma.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 5.
>>
> **Step 5**
>>
>> In this last step, check that the information displayed is correct.
>>
>> ![Step 5](images/Step5VisiPerma.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to confirm your configuration.
>> 
>> > [!primary]
>> >
>> > If the message "*Some redirections from domains that you want to redirect conflict with existing redirections*" appears, you can tick the `Confirm the overwriting of the existing redirection`{.action} box to force your redirection to be applied.
>> >
>> > Warning, the old configuration will be disabled and deleted.
>> >
>>

### Option 2: temporary visible redirection to a web address

As with option 1, this option displays the target domain in your browser's address bar instead of the redirected domain after you enter the redirected domain.

However, this option is the appropriate choice for non-permanent redirections, for example temporary events.<br>
Positioning on search engines is less efficient than with a **permanent visible** redirection of type 301 (HTTP code).

- **Example**: if you redirect `domain1.tld` to `domain2.tld`, `domain2.tld` will appear in the address bar in your browser.

![Gif1](images/redirect1.gif){.thumbnail}

> This redirection will return a HTTP 302 code.

> [!success]
> Click on the tabs below to view each of the 5 steps in turn.

> [!tabs]
> **Step 1**
>>
>> In the popup window, your domain to redirect already appears. Fill in the form **only** if you wish to redirect a *subdomain*.
>>
>> The `Also redirect`{.action} box can be checked to also redirect the `www` subdomain to the same target you choose for your domain/subdomain.
>>
>> ![Step 1](images/Step1.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 2.
>>
> **Step 2**
>>
>> Select `To a web address`{.action}.
>>
>> ![Step 2](images/Step2.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 3.
>>
> **Step 3**
>>
>> Select `A visible redirection`{.action} from the two choices shown.
>>
>> ![Step 3](images/Step3Visi.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 4.
>>
> **Step 4**
>>
>> Select `Temporary (302)`{.action} from the two choices listed, then enter the target domain or URL for your redirection in the `Web Address`{.action} form that appears.
>>
>> ![Step 4](images/Step4VisiTempo.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 5.
>>
> **Step 5**
>>
>> In this last step, check that the information displayed is correct.
>>
>> ![Step 5](images/Step5VisiTempo.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to confirm your configuration.
>> 
>> > [!primary]
>> >
>> > If the message "*Some redirections from domains that you want to redirect conflict with existing redirections*" appears, you can tick the `Confirm the overwriting of the existing redirection`{.action} box to force your redirection to be applied.
>> >
>> > Warning, the old configuration will be disabled and deleted.
>> >
>>

### Option 3: invisible redirection to a web address

With this redirection, you can keep the redirected domain in your browser’s address bar after you have entered it, rather than replacing it with the target domain.<br>
**Warning, this action is not compatible with all sites and affects the SEO of your site.**

- **Example**: if you redirect `domain1.tld` to `domain2.tld`, `domain1.tld` will appear in the address bar in your browser.

![Gif2](images/redirect2.gif){.thumbnail}

Invisible redirection works with an *iFrame* HTML tag. This allows your redirected domain to integrate the content of the other page corresponding to the target domain into its own HTML page.

This type of embedded content prevents your site visitors from viewing the target domain.

> This option will return an HTTP 200 code.

> [!warning]
>
> Warning, pages embedded with an *iFrame* tag may not be read on smartphones. Their content is generally not taken into account by search engines for the SEO and indexing of your site.
>

> [!success]
> Click on the tabs below to view each of the 5 steps in turn.
>

> [!tabs]
> **Step 1**
>>
>> In the popup window, your domain to redirect already appears. Fill in the form **only** if you wish to redirect a *subdomain*.
>>
>> The `Also redirect`{.action} box can be checked to also redirect the `www` subdomain to the same target you choose for your domain/subdomain.
>>
>> ![Step 1](images/Step1.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 2.
>>
> **Step 2**
>>
>> Select `To a web address`{.action}.
>>
>> ![Step 2](images/Step2.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 3.
>>
> **Step 3**
>>
>> Select `With an invisible redirection`{.action} from the two choices shown.
>>
>> ![Step 3](images/Step3Invi.png){.thumbnail}
>>
>> Click `Next`{.action} to proceed to step 4.
>>
> **Step 4**
>>
>> Select `Temporary (iframe)`{.action} from the two choices listed, then enter the target domain or URL for your redirection in the `Web Address`{.action} form that appears.
>>
>> ![Step 4](images/Step4Invi.png){.thumbnail}
>>
>> Three optional settings are available at this stage:
>>
>> - **Title**: The title of your website. It will appear as a page title in the browser tab.<br>
>> - **Keywords**: They can be used by search engines to partially reference the page.<br>
>> - **Description**: A website description that will be used by search engines in their results.
>>
>> Click `Next`{.action} to proceed to step 5.
>>
> **Step 5**
>>
>> In this last step, check that the information displayed is correct.
>>
>> ![Step 5](images/Step5Invi.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to confirm your configuration.
>> 
>> > [!primary]
>> >
>> > If the message "*Some redirections from domains that you want to redirect conflict with existing redirections*" appears, you can tick the `Confirm the overwriting of the existing redirection`{.action} box to force your redirection to be applied.
>> >
>> > Warning, the old configuration will be disabled and deleted.
>> >
>>

### Redirect a domain name through a ".htaccess" file <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

".htaccess" files are configuration files in which commands can be specified. When the web server (Apache) runs your website’s code, the commands are interpreted, then executed.<br>
You can use such commands to create redirections.

A faulty .htaccess file can make your website inaccessible. If in doubt, contact a [specialist provider](https://partner.ovhcloud.com/asia/).

You can find all of our documentation on .htaccess in the ["Go further"](#go-further) section of this guide.

> [!success]
>
> We recommend that you **back up your .htaccess file** before making any changes. This way, you can restore the previous version of the file if you make a mistake.
>

Below, you will find 4 variables for redirections via the .htaccess file.

#### Variable 1 - "Redirect permanent"

This variable allows you to redirect a site as a whole, or only a part of a site, to another site or another part of a site. Visitors are automatically redirected to the correct URL/address when they try to access your site via the historical URL/address.

> [!tabs]
> Code to place in the ".htaccess"
>>
>> To redirect an entire website:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> To redirect one directory to another:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> To redirect a file to another:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> HTTP code
>>
>> The script will return a HTTP 301 code. This will warn search engine bots to update their links to the new address/URL.
>>

#### Variable 2 - "Redirect gone"

This variable is useful for deleted files. It replaces the message *404 document not found* with a more explicit message such as *410 document no longer exists*. Your website visitor will be informed that the file they are trying to call no longer exists.

> [!tabs]
> Code to place in the ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> HTTP code
>>
>> The script will return HTTP 410 code.
>>

### Variable 3 - "Redirect seeother"

If you change the extension of a file, you can use the *seeother* variable to change the file type. The visitor who tries to access the old file will be automatically redirected to the one with the correct extension.

> [!tabs]
> Code to place in the ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> HTTP code
>>
>> The script will return HTTP 303 code.
>>

#### Variable 4 - "Redirect Temp"

This variable can be used when you temporarily move files to another site. Visitors who try to access your site via the historical address/URL are automatically redirected to the new temporary address/URL.

> [!tabs]
> Code to place in the ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> HTTP code
>>
>> The script will return HTTP 302 code.
>>

## Go further <a name="go-further"></a>

[Tutorial - How do I block access to my website for certain IP addresses via a .htaccess file?](https://docs.ovh.com/asia/en/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

[Protecting your website’s administration interface with a .htaccess file](https://docs.ovh.com/asia/en/hosting/how_to_password_protect_a_directory_on_your_website/).

[URL rewriting using mod_rewrite](https://docs.ovh.com/asia/en/hosting/htaccess_url_rewriting_using_mod_rewrite/).

[Using .htaccess for advanced purposes](https://docs.ovh.com/asia/en/hosting/what_else_can_you_do_with_the_htaccess_file/).

[Editing an OVHcloud DNS zone](https://docs.ovh.com/asia/en/domains/web_hosting_how_to_edit_my_dns_zone/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
