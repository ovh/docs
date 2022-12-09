---
title: 'Modifying the configuration of a Web Hosting plan'
slug: modify_your_web_hosting_systems_runtime_environment
excerpt: 'Find out how to modify the configuration of an OVHcloud Web Hosting plan'
section: Web Hosting configuration
order: 02
---

**Last updated 9th December 2022**

## Objective

You can use a range of different configurations on an OVHcloud Web Hosting plan. Whether you are creating a blog or an online store, sharing your hobby or promoting your work, you can host whatever website you want on your [OVHcloud Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/), provided that it is compatible with [our infrastructure’s configurations](https://webhosting-infos.hosting.ovh.net).

**Find out how to modify the configuration of an OVHcloud Web Hosting plan from the OVHcloud Control Panel.**

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/) (excluding Cloud Web)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## Instructions

**Changing the configuration of your Web Hosting plan is a delicate procedure.** Any mistakes configuring it could render your website inaccessible as a result. By learning more about the impact of making configuration changes, you can get a better understanding of the changes you will make.

When you modify your Web Hosting plan’s configuration, you will also change the configuration used by your website. Although our infrastructures offer a range of configuration types, you will need to ensure that the configuration type you have selected is compatible with your website.

> [!warning]
>
> Before you start making any changes, please ensure that the changes you are about to make will not render your website inaccessible. If you have any doubts about what you need to do, or encounter any difficulties, we recommend contacting a specialist provider. We will not be able to assist you ourselves. You can find more information in the "Go further" section of this guide. 
> 

### Modify your Web Hosting plan’s configuration via the Control Panel

#### Step 1: Access the Web Hosting plan’s configuration management.

First of all, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), click `Hosting plans`{.action}, then select the Web Hosting plan concerned. Click on the `General information`{.action} tab. Next and to the right of `Global PHP version`{.action}, click on the three dots, then, `Modify configuration`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

> [!primary]
> If the `Modify configuration`{.action} button is greyed out, it may be because of an ongoing **global PHP version** verification. If this is the case, a blue wheel will appear next to the version, indicating that a verification is in progress. Wait a few minutes for the `Modify configuration`{.action} button to become accessible again.
>
> If the `Global PHP version`{.action} option does not appear in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), check that a "**.ovhconfig**" file does exist in the FTP root of your OVHcloud shared hosting plan by referring to our guide on [configuring the ".ovhconfig" file](https://docs.ovh.com/asia/en/hosting/configuring-file-ovhconfig/).
>

#### Step 2: Check your Web Hosting plan’s configuration.

In the window that pops up, you can pick from two options. Select the one corresponding to the action you want to carry out, then click `Next`{.action}.

|Choice|Details|
|---|---|
|“Return to a previous configuration”|After you have selected this option, choose the configuration to restore on the `Logs choice` side. This option will not be available if you have not made any configuration changes in the past.|
|“Modify the current configuration”|Once you have selected this option, choose the modifications you would like to make to the configuration from the fields that appear. If required, you can read more about them by going to the [View the configurations available](../modify_your_web_hosting_systems_runtime_environment/#view-the-configurations-available_1){.external} section of this documentation.|

> [!primary]
>
> When you change the runtime environment for your Web Hosting plan, PHP sessions are automatically restarted.
> 

Once you are ready to do this, click `Confirm`{.action} to apply the modifications. Wait a few minutes for the process to complete.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### View the configurations available.

When you modify your Web Hosting plan’s configuration, you can choose from a range of configuration types. From this point onwards, you can follow the guide section that is relevant to the configuration type you would like to learn more about and select.

- [Runtime environment](../modify_your_web_hosting_systems_runtime_environment/#runtime-environment){.external}
- [PHP version](../modify_your_web_hosting_systems_runtime_environment/#php-version){.external}
- [PHP engine](../modify_your_web_hosting_systems_runtime_environment/#php-engine){.external}
- [Mode](../modify_your_web_hosting_systems_runtime_environment/#mode){.external}

#### Runtime environment

By changing the runtime environment, you can edit certain technical values for your Web Hosting plan. **Before you start making any changes, ensure that the runtime environment you want to apply is compatible with your website.** 

|Environment|Legacy|Stable|Stable64|
|---|---|---|---|
|architecture|32 bits|32 bits|64 bits|
|Minimum PHP version|5.4|5.4|7.4|
|Openssl|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 and 3.4|2.7 and 3.7|2.7 and 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|


> [!primary]
>
> The ‘legacy’ environment may be useful for older websites that still use old PHP versions. However, we strongly advise using a ‘Stable64‘ environment that has the latest updates. **Ensure that your website is compatible before you make any changes.**
> 

Once you have chosen your runtime environment, you can change it in two different ways:

- **Via the OVHcloud Control Panel.** Use the instructions provided in the [Modify the Web Hosting plan configuration via the OVHcloud Control Panel](../modify_your_web_hosting_systems_runtime_environment/#modify-your-web-hosting-plans-configuration-via-the-control-panel) section of this guide.
- **Editing the .ovhconfig file.** This method is more technical, and you will need to be connected to your storage space. If you would like to modify the **.ovhconfig** file, please refer to our guide to [Configuring the .ovhconfig file on an OVHcloud Web Hosting plan](../configuring-file-ovhconfig/).

#### PHP version

There are now several versions of PHP programming language. As usual, version developments include different patches, and also add or remove features. OVHcloud offers the very latest PHP versions, and you can view a list of them here: <https://www.ovhcloud.com/asia/web-hosting/uc-programming-language/>. 

Because some features cannot be maintained in newer versions, **please ensure that the new PHP version you want to use is compatible with your website before you start making any changes.**

There are several ways you can modify your Web Hosting plan’s PHP version:

- **Via the OVHcloud Control Panel.** Use the instructions provided in the [Modify the Web Hosting plan configuration via the OVHcloud Control Panel](../modify_your_web_hosting_systems_runtime_environment/#modify-your-web-hosting-plans-configuration-via-the-control-panel){.external} section of this guide.
- **By manually modifying file on your storage space.** This solution is more technical, and you will need to be connected to your storage space. 

Generally, if you want more information on changing from one PHP version to another, please follow the instructions in our guide to [Configuring PHP versions on an OVHcloud Web Hosting plan](../how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

#### PHP engine

With the PHP engine you use, you can enable or disable the PHP accelerator (PHP-FPM). It has been adapted to suit our infrastructure with the aim of accelerating the execution speed for PHP scripts. In comparison, the PHP accelerator (PHP-FPM) offers up to seven times faster performance than using the phpcgi motor. 

There are two ways of modifying the PHP motor used by your Web Hosting plan:

- **Via the OVHcloud Control Panel.** Use the instructions provided in the [Modify the Web Hosting plan configuration via the OVHcloud Control Panel](../modify_your_web_hosting_systems_runtime_environment/#modify-your-web-hosting-plans-configuration-via-the-control-panel) section of this guide. To activate the PHP accelerator (PHP-FPM), choose ‘php’ as a motor. To deactivate it, choose phpcgi.
- **Editing the .ovhconfig file.** This method is more technical, and you will need to be connected to your storage space. If you would like to modify the **.ovhconfig** file, please refer to our guide to [Configuring the .ovhconfig file on an OVHcloud Web Hosting plan](../configuring-file-ovhconfig/).

#### Mode

By choosing a mode, you can manage how your website’s cached static files (e.g. images) behave, as well as how PHP errors are processed (generally useful when your website displays a blank page, for example). There are two modes you can activate:

|Mode|Caching static files|Processing PHP errors|
|---|---|---|
|*Production*|Maximises caching for static files on internet browsers.|PHP errors will not appear on your website.|
|*Development*|No caching is applied.|PHP errors will appear on your website.|

> [!primary]
>
> For PHP versions 7.1 or later, the errors will appear on the website, no matter what mode is used. 
> 

There are two ways of modifying the mode used by your Web Hosting plan:

- **Via the OVHcloud Control Panel.** Use the instructions provided in the [Modify the Web Hosting plan configuration via the OVHcloud Control Panel](../modify_your_web_hosting_systems_runtime_environment/#modify-your-web-hosting-plans-configuration-via-the-control-panel) section of this guide.
- **Editing the .ovhconfig file.** This method is more technical, and you will need to be connected to your storage space. If you would like to modify the **.ovhconfig** file, please refer to our guide to [Configuring the .ovhconfig file on an OVHcloud Web Hosting plan](../configuring-file-ovhconfig/).

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
