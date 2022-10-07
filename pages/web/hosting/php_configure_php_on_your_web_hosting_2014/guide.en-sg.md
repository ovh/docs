---
title: "Changing a Web Hosting plan’s PHP version"
slug: how_to_configure_php_on_your_ovh_web_hosting_package_2014
excerpt: "Find out how to change the PHP version on an OVHcloud Web Hosting plan"
section: PHP
order: 01
---

**Last updated 19th September 2022**

With your [OVHcloud web hosting](https://www.ovhcloud.com/en-sg/web-hosting/){.external} you can host whatever website you want, provided that it is compatible with [our infrastructure configurations](https://webhosting-infos.hosting.ovh.net){.external}. In this regard, you may find that you want to modify the PHP version used by your Web Hosting plan.

**Find out how to change the PHP version on an OVHcloud Web Hosting plan.**

## Requirements

- An [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/){.external}, with the exception of a Cloud Web Hosting plan
- Access to your Web Hosting plan in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), with the exception of a Cloud Web Hosting plan
- Access to your Web Hosting plan in the [OVHcloud Control Panel](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/). 

## Instructions

Several versions of PHP programming language exist. Version developments include various patches, as well as adding or removing features. OVHcloud offers the latest major versions of PHP, for which you can find a list [here](https://www.ovhcloud.com/en-sg/web-hosting/uc-programming-language/). 

> [!primary]
>
> Since some features may not be maintained with newer versions, **make sure, before you make any changes, that the new PHP version you want is compatible with your website.**
>

### Step 1: Ensure that your website is compatible

Although OVHcloud manages the setup of the latest PHP versions on its servers, it is up to you as a webmaster to ensure that your website is **always up to date** and therefore compatible with the latest PHP versions. There are two ways of doing this, depending on which website you are using:

**Case 1: A turn-key website, such as a Content Management System (CMS)** (e.g. WordPress, Joomla!, PrestaShop, Drupal): 

- Consult the official documentation created by the publisher of the CMS you are using.
- Please note down the information on the technical requirements you need for your CMS to work, as well as the changes you need to make in order to update your CMS.
- If necessary, update your CMS and check that the new version is compatible with OVHcloud hosting services.

**Case 2: A website based on a custom solution**: 

- Get in touch with the webmaster who created the website.
- Use the [official PHP documentation](http://php.net/manual/en/appendices.php){.external} for more information on version migrations.
- If necessary, update your website’s code and ensure that it remains compatible with OVHcloud hosting services.

If required, you can find out which PHP version is currently used by your hosting system in two ways:

- **In the OVHcloud Control Panel**: Log in to [the OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external}, go to the `Web Cloud`{.action} section, click on `Hosting plans`{.action} then select the Web Hosting plan concerned. In the `General information`{.action} tab, locate the version number below *Global PHP version*.

![phpversion](images/change-php-version-step1.png){.thumbnail}

> [!primary]
> If a blue circle is present, wait a few minutes for the version to refresh.
>

- **Using a script**: Create a **.php** script containing only the code `<?php phpinfo(); ?>`. Upload it to your [FTP storage space](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/), then call it by accessing its full address/URL.

If you are unable to ensure that your website is compatible with the new PHP version, you can try changing the current version by downgrading it. **We strongly advise against this method** because you run the risk of causing a technical issue on your website. Even if the website seems to work after the change, it may affect one of its specific features, causing errors.

Once you are ready to make the change, continue to step 2.

### Step 2: Modify your Web Hosting plan’s PHP version

There are two ways to modify your Web Hosting plan’s PHP version:

- **Using the configuration assistant in your Control Panel**: Once you have logged in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), you can choose the new PHP version you want from other settings. Please refer to the instructions set out in our guide [“Modifying the configuration of a Web Hosting plan”](https://docs.ovh.com/sg/en/hosting/modify_your_web_hosting_systems_runtime_environment/){.external} to use this method.

- **By manually editing a file in your storage space**: This solution is more technical. You need to log in to your [FTP storage](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/) and edit the .ovhconfig file. Please refer to the instructions set out in our guide [“Configuring the .ovhconfig file of your Web Hosting plan”](https://docs.ovh.com/sg/en/hosting/configuring-file-ovhconfig/){.external} to do this.

> [!primary]
>
> You can no longer modify the PHP version via a .htaccess file on the latest [OVHcloud web hosting](https://www.ovhcloud.com/en-sg/web-hosting/){.external} offers.<br>
> The command that changes the PHP version in the .htaccess file cannot be used to use the recent PHP versions on our infrastructures.<br>
> To do this, you will need to use the `.ovhconfig` file as explained our guide [“Configuring the .ovhconfig file of your Web Hosting plan”](https://docs.ovh.com/sg/en/hosting/configuring-file-ovhconfig/){.external}.
>

Some PHP versions only work with certain runtime environments. The following are the PHP versions available on OVHcloud web hosting plans and compatible [runtime environments](https://docs.ovh.com/sg/en/hosting/modify_your_web_hosting_systems_runtime_environment/):

|PHP versions|Compatible runtime environments|
|---|---|
|5.4, 5.5, 5.6 and 7.0|Legacy, Stable|
|7.1, 7.2 and 7.3|Stable|
|7.4, 8.0 and 8.1 (beta)|stable64|

## Go further

[Modifying the configuration of a Web Hosting plan](https://docs.ovh.com/sg/en/hosting/modify_your_web_hosting_systems_runtime_environment/){.external}

[Configuring the .ovhconfig file of your Web Hosting plan](https://docs.ovh.com/sg/en/hosting/configuring-file-ovhconfig/){.external}

[Logging in to your Web Hosting plan’s storage space](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/){.external}

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 