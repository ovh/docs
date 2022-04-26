---
title: 'Web Hosting FAQ'
excerpt: 'Find the answers to the most frequently asked questions about OVHcloud Web Hosting plans'
slug: web-hosting-faq
section: 'Getting started'
---

**Last updated 05th May 2020**

## OVHcloud Web Hosting FAQ

### What do I do if my website isn't working properly? 

There are several possible reasons why your website may not be working properly. To identify the cause, start by logging in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, and check that all of your services have been successfully renewed and are active. Once you have checked this, verify that there are no ongoing maintenance tasks by visiting the [Status page](https://web-cloud.status-ovhcloud.com/){.external}. If all your services are active and no maintenance tasks are affecting your website, you can carry out a more in-depth diagnostic by reading our ["Diagnostic" guides](../). 

### How do I configure my hosting space? 

To configure your Web Hosting plan, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}. In the `Hosting plans` section, you can manage your SSL certificates, PHP versions, CDN, multisites, databases, and more. 

**Tips and tricks**: To help you configure your Web Hosting plan, we recommend reading documentation from the “Getting started” section [here](../).

### How do I create or delete an element of my product/service (email account, database, etc.)?

To create or delete an element, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, then select the service concerned (`Email`, `Database`, `Modules`). This way, you can scale your product as you see fit. 

**Tips and tricks**: Via the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, you can create regular backups of your databases.

### How do I manage my passwords? 

To manage your password, start off by logging in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}. If you have forgotten your username or password, click `Forgotten your username or password?`{.action} in the login window. You will be sent an email with the reset procedure. Please also read our [Setting and managing an account password](https://docs.ovh.com/gb/en/customer/manage-password/) guide.

Once you have logged in to the OVHcloud Control Panel, you can manage different types of access, such as: 

* access to your FTP server and databases. To do this, access the `Hosting plans` section of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, and select the product/service concerned for email access. 
* access to your email addresses. Go to the `Emails` section in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}. 

### How do I put my website online? 

To put your website online via OVHcloud, you need to have a domain name corresponding to the address of your future website (e.g. ovh.com). You also need to have a web hosting space to set up your website. Please read the following guide: [Publishing a website on your web hosting plan](../web_hosting_how_to_get_my_website_online).

**Tips and tricks**: To help you build your website, OVHcloud offers 1-click modules like WordPress, PrestaShop, Joomla!, and Drupal. You can find them [here](https://www.ovhcloud.com/en-ca/web-hosting/uc-website/). You can also use the following documentation: [Setting up your website with 1-click modules](../web_hosting_web_hosting_modules).

### How do I migrate my website and emails to OVHcloud? 

To migrate your website and emails to OVHcloud, you need to have an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/). You can then connect to your Web Hosting plan’s FTP server, in order to transfer your website’s files on to it. If you currently have a database, it is also worth creating a dump of it. 

To migrate emails, you will need to recreate your accounts at OVHcloud, then use our [OMM migration tool (OVH Mail Migrator)](https://omm.ovh.net/). You can find it [here](https://omm.ovh.net/). 

Once you have completed these steps, you will need to modify the DNS zone for your domain, so that within 24 hours it can point to our infrastructure. If you would like more information on this, please read the following guide: [Migrating your website and emails to OVHcloud](../migrating-website-to-ovh).

**Tips and tricks**: To transfer your files, you can use software programs like FileZilla and Cyberduck. You can use the following documentation for this: [FileZilla user guide](../web_hosting_filezilla_user_guide).

### How do I host multiple websites on my Web Hosting plan? 

As an experienced user, you can host several websites on the same Web Hosting plan. To do this, you need to attach another domain name or sub-domain to the hosting solution. The procedure for attaching and detaching domains is explained in this guide: [Hosting multiple websites on your Web Hosting plan](../multisites-configuring-multiple-websites).

### I have published my website but the OVHcloud "Congratulations" message is still being displayed

When you set up a Web Hosting plan, OVHcloud implements a preliminary index page while you move your website files on to your storage space. If you simply place your files in the "www" folder without deleting the content stored there by OVHcloud, you may encounter this issue. 

To correct this, you will need to delete or rename the "index.html" file set up by OVHcloud on your hosting space. It may be useful to just rename it, so that you can re-enable it as needed to act as a temporary fallback page. 

**Other useful information**: make sure you upload your website files to the "www" folder, so that they are visible.

### How do I upgrade my web hosting plan?

If you would like to change your current solution to a higher one, go to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, and go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the services bar on the left-hand side, then click on the solution concerned.

In the `General information` tab, in the `Plan` box, click on the `...`{.action} button next to “Plan”, then click `Upgrade`{.action}. Follow the instructions below to complete your order. A pro rata of the remaining time of your current solution will be added to the new solution.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
