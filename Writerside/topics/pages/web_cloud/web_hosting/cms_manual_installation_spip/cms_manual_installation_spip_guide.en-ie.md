---
title: "Tutorial - Installing SPIP manually"
excerpt: "Find out how to install SPIP CMS manually"
updated: 2024-03-28
---

## Objective

The **CMS** (**C**ontent **M**anagement **S**ystem) SPIP is a solution adapted to editorial websites such as online magazines, newspapers or institutional websites. With its modular architecture and customizable skeleton system, SPIP allows you to design feature-rich websites, while offering a wide range of customization options.

**Find out how to manually install the SPIP CMS on your OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](hosting.) that includes at least one database
- A [domain name](domains.)
- Access to the [OVHcloud Control Panel](manager.)

## Instructions

### Prepare for installation

To install the **SPIP** CMS on your [web hosting](hosting.), you will need to make some preparations.

Follow the **full set of steps** described in our tutorial on [installing a CMS manually](cms_manual_installation1.) before continuing on to the next step.

### Finalize manual installation

> [!primary]
>
> Before continuing with the installation, clear your web browser cache to avoid any errors.
>

#### Accessing your SPIP website via your browser

Enter `your_domain/ecrire` in the search bar of your web browser to start the installation of your SPIP website. The following page appears:

![Spip installation](installation_first_step.png){.thumbnail}

Select the language of your SPIP website and click `Next`{.action} to confirm. The following screen appears:

![Spip installation](installation_second_step.png){.thumbnail}

Enter the information to connect to your DBMS (MySQL, for example). Once you have successfully connected your database, the following screen will appear:

![Spip installation](installation_third_step.png){.thumbnail}

Select the database you want to use for your website or [create a new one](sql_create_database1.). Choose a prefix for your database tables. By default, the prefix `spip` is used. Click `Next`{.action} to confirm. The following screen appears:

![Spip installation](installation_fourth_step.png){.thumbnail}

Enter the information requested and click `Next`{.action} to confirm. The following screen appears:

![Spip installation](installation_fifth_step.png){.thumbnail}

The screen displays a list of plugins available for your website, and informs you that the installation of SPIP has been successful.

### Conclusion

You have just manually installed the SPIP CMS on your OVHcloud web hosting plan. Your SPIP website is accessible online via your domain name. To log in to your SPIP website’s admin area, type `your_domain/ecrire` in the search bar of your web browser.

## Go further <a name="go-further"></a>

[Tutorial - Installing WordPress manually](cms_manual_installation_wordpress1.)

[Tutorial - Installing Joomla! manually](cms_manual_installation_joomla1.)

[Tutorial - Installing Drupal manually](cms_manual_installation_drupal1.)

[Tutorial - Installing PrestaShop manually](cms_manual_installation_prestashop1.)

[Tutorial - Installing Pico manually](cms_manual_installation_pico1.)

[Tutorial - Installing Typo3 manually](cms_manual_installation_typo31.)

[Tutorial - Installing Grav manually](cms_manual_installation_grav1.)

[Tutorial - Manually install a CMS on my hosting plan](cms_manual_installation1.)

[Creating a database on your web hosting plan](sql_create_database1.)
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](partner.).
 
Join our community of users on <https://community.ovh.com/en/>.