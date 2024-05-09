---
title: "Tutorial - Installing Grav manually"
excerpt: "Find out how to install Grav CMS manually"
updated: 2024-03-28
---

## Objective

The **CMS** (**C**ontent **M**anagement **S**ystem) Grav enables websites to be developed quickly. Designed for optimized content management across Markdown files, Grav is perfect for creating personal websites or small business projects, without compromising on quality or customization.

**Find out how to manually install the Grav CMS on your OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](hosting.).
- A [domain name](domains.).
- Access to the [OVHcloud Control Panel](manager.).

## Instructions

### Prepare for installation

To install the **Grav** CMS on your [web hosting](hosting.), you will need to make some preparations.

Follow the **full set of steps** described in our tutorial on [installing a CMS manually](cms_manual_installation1.) before continuing on to the next step.

### Finalize manual installation

> [!primary]
>
> Before continuing with the installation, clear your web browser cache to avoid any errors.
>

#### Go to your Grav website via your browser

Enter your domain name in the search bar of your web browser.

If the Grav source files were placed correctly in your root folder, the configuration page appears under `your-domain/admin`:

![Grav installation](first_page_config.png){.thumbnail}

Fill in the form to create an admin user, then click `Create User`{.action} to confirm.

Once you have logged in to the Grav administration interface, start customizing your website.

### Customize your Grav website

Once you are logged in as an administrator on the Grav dashboard, you have access a multitude of options to configure and customize your website.

#### General website configuration

##### System configuration

In the main menu of Grav, click `Configuration`{.action}, then in the `Site`{.action} tab, change the name of your website, set the default language, or configure several settings related to your website.

To improve performance for your website, enable the cache. Click on the `System`{.action} tab, then `Caching`{.action}. Identify the `Caching`{.action} line and tick `Yes`{.action}.

![Grav installation](activate_cache.png){.thumbnail}

##### Media configuration

In the main menu of Grav, choose `Configuration`{.action}, then in the `System`{.action} tab, click `Media`{.action}. On this page, define the behavior of your website’s media, such as images, videos, and documents.

#### Content management

##### Pages

In the main menu of Grav, click `Pages`{.action} to see a list of all the pages on your website. Create new pages, modify existing ones, and organize the structure of your website.

To view and edit the contents of a page, click the name of the page in the list. For example, click `Home`{.action} to change the title of your website’s main page, as well as its content.

![Grav installation](list_pages.png){.thumbnail}

##### Themes

In the main menu of Grav, click `Themes`{.action} to change the appearance of your website. Install new themes or select a previously installed theme as the active theme.

To change the active theme, click the theme labeled `Active Theme`.

![Grav installation](theme_active.png){.thumbnail}

On the page that opens, customize your active theme.

#### Backup and update

##### Backup

By backing up your website, you can restore it to an earlier state, in the event of a technical issue.

In the main menu of Grav, click `Tools`{.action}, select `Backup Now`{.action} in the top right-hand corner of the screen that appears, then `Download Backup`{.action} to download the backup of your website to your computer. By refreshing the `Backup` page, your backup will appear in the `Backup History`{.action} list.

![Grav installation](backup_history.png){.thumbnail}

##### Update

Keeping your system up-to-date is vital to the security and performance of your website. In the main menu of Grav, click `Check for Updates`{.action} to discover the available updates.

### Conclusion

You have just manually installed Grav CMS on your OVHcloud web hosting plan. After configuring your website, adding content and customizing the theme, your Grav website is accessible online via your domain name.

## Go further <a name="go-further"></a>

[Tutorial - Installing WordPress manually](cms_manual_installation_wordpress1.)

[Tutorial - Installing Joomla! manually](cms_manual_installation_joomla1.)

[Tutorial - Installing Drupal manually](cms_manual_installation_drupal1.)

[Tutorial - Installing PrestaShop manually](cms_manual_installation_prestashop1.)

[Tutorial - Installing Pico manually](cms_manual_installation_pico1.)

[Tutorial - Installing Typo3 manually](cms_manual_installation_typo31.)

[Tutorial - Installing SPIP manually](cms_manual_installation_spip1.)

[Tutorial - Manually install a CMS on my hosting plan](cms_manual_installation1.)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](partner.).

Join our community of users on <https://community.ovh.com/en/>.