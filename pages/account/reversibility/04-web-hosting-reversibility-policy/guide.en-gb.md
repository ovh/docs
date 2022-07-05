---
title: Web Hosting Reversibility Policy
slug: web-hosting-reversibility-policy
section: Reversibility policies
order: 5
---

**Last updated 5th May 2021**

## Objective

This document is the reversibility policy for the **Web Hosting** product for the [domain name](https://www.ovhcloud.com/en-gb/domains/) activity.

This policy aims at implementing the global reversibility principles and requirements of [SWIPO IaaS Code of Conduct for Cloud Providers](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Features map

**Web Hosting** features are divided into three categories:

- The [core features](#core-features) for which we guarantee the ability to migrate
- The [OVHcloud implementation](#ovhcloud-implementation), whose migration will require adaptations to a new environment.
- [Specific functionalities](#specific-functionalities), whose migration as such is impossible to guarantee as they are tied to OVHcloud environment or specific developments.

### Core features <a name="core-features"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|----|-----|---|-----|-----|
|Register and manage Domain names|Reservation and registration of domain names with domain name registrars.<br><br>DNS setting of domain names.|N/A|**Inbound migration**: Transfer request to original registrar and then manage via [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)<br><br>**Outbound migration**: Fully managed transfer request in [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).|**Inbound migration**: [Transferring a domain name to OVHcloud](https://docs.ovh.com/gb/en/domains/transfer-generic-domain/)<br><br>[Transferring a .co.uk domain name to OVHcloud](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_transfer_a_couk_domain_name/)<br><br>**Outbound migration**: [Transferring a domain name to another registrar](https://docs.ovh.com/gb/en/domains/outgoing-transfer-of-generic-or-geographical-domain-name/)<br><br>[Transferring a .co.uk domain name to another registrar](https://docs.ovh.com/gb/en/domains/outgoing_couk_domain_name_transfer/)|
|Web hosting - Providing HTTP Servers|Provision of a web front-end server and code execution environment|**PHP**: 7.3 / 7.2 / 7.1 / 7.0 / 5.6<br><br>**Node.js**: 8 / 10 / 11|**Inbound migration**: Order a new OVHcloud hosting.<br><br>**Outbound migration**: Order a new hosting from the new provider. Replicate the runtime environment configuration from the Control Panel or .ovhconfig file.|**Inbound migration**:<br>[Getting started with a web hosting - Define your project](https://docs.ovh.com/gb/en/hosting/get_started_with_a_web_hosting_package/#step-1-define-your-project)<br><br>[Getting started with Cloud Web - Define your project](https://docs.ovh.com/gb/en/cloud-web/getting-started-with-cloud-web/#step-1-define-your-project)<br><br>[Configuring the .ovhconfig file of your web hosting plan](https://docs.ovh.com/gb/en/hosting/configuring-file-ovhconfig/)<br><br>**Outbound migration**: [Configuring the .ovhconfig file of your web hosting plan](https://docs.ovh.com/gb/en/hosting/configuring-file-ovhconfig/)<br><br>[Configuring PHP from your customer account](https://docs.ovh.com/gb/en/hosting/hosting_how_to_configure_php_from_your_customer_account/)<br><br>Note: these documents allow you to retrieve relevant information about the .ovhconfig file and the PHP version.|
|Web hosting - Providing file servers.|Provision of a file server to host the component files of the website (pages, scripts, resources...)|**Every format** - clients may upload any file on the server.|**Inbound migration**: FTP connection to the file server and import.<br><br>**Outbound migration**: FTP connection and file recovery.|**Inbound migration**: [Migrating your website to OVHcloud](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/)<br><br>**Outbound migration**: [Export a website - retrieve files from your FTP storage space](https://docs.ovh.com/gb/en/hosting/export-a-website/#step-1-retrieve-files-from-your-ftp-storage-space)|
|Web hosting - providing databases|Provision of databases that can be connected to the website|**Shared SQL offers**:<br><br>**MySQL 5.6**<br><br>**Private SQL offers**:<br><br>**MySQL** 5.6 / 5.7<br><br>**MariaDB** 10.1<br><br>**PostgreSQL** 9.4 / 9.5 / 9.6 / 10|**Inbound migration**: Create a new database, then import the data by one of the available methods (backup restore, phpMyAdmin interface, script, SSH connection)<br><br>**Outbound migration**: Export data by one of the available methods (backup export, phpMyAdmin interface, script, SSH connection)|**Inbound migration**: [Importing a backup into a Web Hosting plan database](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/)<br><br>[Private SQL - Importing a database](https://docs.ovh.com/gb/en/hosting/getting-started-with-private-sql/#importing-a-database-optional)<br><br>**Outbound migration**: [Retrieving the backup of a Web Hosting plan’s database](https://docs.ovh.com/gb/en/hosting/web_hosting_database_export_guide/)|

### OVHcloud implementation <a name="ovhcloud-implementation"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|1-click modules|Automated installation of CMS (WordPress, PrestaShop, Joomla!, Drupal)|N/A|**Inbound migration**: Not applicable<br><br>**Outbound migration**: Once the module is installed, follow the standard website migration procedure (including database migration)|**Outbound migration**: See "Web Hosting" above.|
|Automatic Backups|Automated website and database backups|N/A, restore a backup to export its content|**Inbound migration**: Backups are automatically enabled.<br><br>**Outbound migration**: Enable a backup plan with the new provider after the site is migrated.<br><br>It is not possible to export a backup as such: backups are internal and are not presented as a file or archive. To import the contents of a file server and database, **restore the backup and then export the website** as shown above.|**Inbound migration**: See "Web Hosting" above.<br><br>**Outbound migration**: See "Web Hosting" above.|
|Logging|Retention and browsing of the website logs. Analysis and graphic representation of these logs with the Urchin WebAnalytics application.|Plain text with standard apache log format|**Inbound migration**: Not applicable - logs from previous infrastructure are unlikely to be relevant to another.<br><br>**Outbound migration**: Download log files from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)|**Inbound migration**: N/A<br><br>**Outbound migration**: [Exporting a website - retrieving the logs](https://docs.ovh.com/gb/en/hosting/export-a-website/#step-3-retrieve-the-logs-for-your-ovhcloud-web-hosting-plan)|
|Job scheduling|Performing periodic automated tasks (cron)|N/A|**Inbound migration**: Scripts are not imported as is. Retrieve old scripts, or their business logic, and reimplement them on OVHcloud hosting through the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).<br><br>**Outbound migration**: Scripts are not exported as is. Retrieve the business logic of the scripts in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and reimplement them in the target environment.|**Inbound and outbound migration**: [Using automated tasks on a Web Hosting plan](https://docs.ovh.com/gb/en/hosting/hosting_automated_taskscron/)|

### Specific functionalities <a name="specific-functionalities"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|-----|---|-----|---|
|Web application Firewall|HTTP Server Module for Filtering Inbound and Outbound Web Content|N/A|**Inbound migration**: Enabling the firewall from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).<br><br>**Outbound migration**: Order and configure a firewall with the new provider|**Inbound migration**: [Activating the application firewall](https://docs.ovh.com/gb/en/hosting/web_hosting_activating_an_application_firewall/)<br><br>**Outbound migration**: N/A|
|Anti-DDoS|The anti-DDoS is a set of equipment and means put in place to absorb distributed denial of service attacks. It includes an analysis of traffic, the "aspiration" towards a specialized network, and mitigation, ensured by VAC technology developed by OVHcloud.|N/A|**Inbound migration**: The Anti-DDoS is a component of our infrastructure, enabled by default. No action is required.<br><br>**Outbound migration**: Order and configure an anti-DDoS with the new provider|**Inbound migration**: [OVHcloud anti-DDoS protection](https://www.ovh.co.uk/anti-ddos/)<br><br>[Anti-DDoS Technology](https://www.ovh.co.uk/anti-ddos/anti-ddos-technology.xml)<br><br>**Outbound migration**: N/A|
|Load Balancing|Load Balancers are network devices that distribute requests across services and datacenters to ensure that there is no overload.|N/A|**Inbound migration**: Purchase and activation through the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).<br><br>**Outbound migration**: Order and set up a load balancer with the new provider|**Inbound migration**: [OVHcloud Load Balancers](https://www.ovh.co.uk/solutions/load-balancer/)<br><br>**Outbound migration**: N/A|

### Architecture listing

All components of an OVHcloud Web product are accessible through the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). This allows to visualize and manage the front-end web servers, file servers, databases, domain names, email, ... as well as the features that are attached to these components.

### Partner services

OVHcloud Partners are listed with the "Cloud Migration" keyword in the dedicated [directory](https://partner.ovhcloud.com/en-gb/directory/).

### Cost and fees

No additional billing is planned from OVHcloud for the migration features listed here.

### Retention of data after contract termination

The data is retained 45 days after the termination of the service and then deleted permanently.
