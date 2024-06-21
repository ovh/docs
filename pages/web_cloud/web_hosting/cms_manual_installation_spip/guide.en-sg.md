---
title: "Tutorial - Installing SPIP manually"
excerpt: "Find out how to install SPIP CMS manually"
updated: 2024-03-28
---

## Objective

The **CMS** (**C**ontent **M**anagement **S**ystem) SPIP is a solution adapted to editorial websites such as online magazines, newspapers or institutional websites. With its modular architecture and customizable skeleton system, SPIP allows you to design feature-rich websites, while offering a wide range of customization options.

**Find out how to manually install the SPIP CMS on your OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting) that includes at least one database
- A [domain name](/links/web/domains)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Prepare for installation

To install the **SPIP** CMS on your [web hosting](/links/web/hosting), you will need to make some preparations.

Follow the **full set of steps** described in our tutorial on [installing a CMS manually](/pages/web_cloud/web_hosting/cms_manual_installation) before continuing on to the next step.

### Finalize manual installation

> [!primary]
>
> Before continuing with the installation, clear your web browser cache to avoid any errors.
>

#### Accessing your SPIP website via your browser

Enter `your_domain/ecrire` in the search bar of your web browser to start the installation of your SPIP website. The following page appears:

![Spip installation](/pages/assets/screens/other/cms/spip/installation_first_step.png){.thumbnail}

Select the language of your SPIP website and click `Next`{.action} to confirm. The following screen appears:

![Spip installation](/pages/assets/screens/other/cms/spip/installation_second_step.png){.thumbnail}

Enter the information to connect to your DBMS (MySQL, for example). Once you have successfully connected your database, the following screen will appear:

![Spip installation](/pages/assets/screens/other/cms/spip/installation_third_step.png){.thumbnail}

Select the database you want to use for your website or [create a new one](/pages/web_cloud/web_hosting/sql_create_database). Choose a prefix for your database tables. By default, the prefix `spip` is used. Click `Next`{.action} to confirm. The following screen appears:

![Spip installation](/pages/assets/screens/other/cms/spip/installation_fourth_step.png){.thumbnail}

Enter the information requested and click `Next`{.action} to confirm. The following screen appears:

![Spip installation](/pages/assets/screens/other/cms/spip/installation_fifth_step.png){.thumbnail}

The screen displays a list of plugins available for your website, and informs you that the installation of SPIP has been successful.

### Conclusion

You have just manually installed the SPIP CMS on your OVHcloud web hosting plan. Your SPIP website is accessible online via your domain name. To log in to your SPIP website’s admin area, type `your_domain/ecrire` in the search bar of your web browser.

## Go further <a name="go-further"></a>

[Tutorial - Installing WordPress manually](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Installing Joomla! manually](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Installing Drupal manually](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Installing PrestaShop manually](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Installing Pico manually](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Installing Typo3 manually](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Installing Grav manually](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Manually install a CMS on my hosting plan](/pages/web_cloud/web_hosting/cms_manual_installation)

[Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database)
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
Join our [community of users](/links/community).