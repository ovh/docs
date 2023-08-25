---
title: Customize settings.php
updated: 2021-05-11
---




## Objective  

For applications using the `drupal` build flavor (those based on our [Drupal 7
example](https://github.com/platformsh-templates/drupal7)), Web PaaS automatically generates a `settings.php` file if not present and will always generate a `settings.local.php` file. This allows the Drupal site to be connected to MySQL without any additional configuration.

If you wish to customize either file, we recommend instead using the example files provided in our Drupal 7 project template.  There are two: [settings.php](https://github.com/platformsh-templates/drupal7/blob/master/settings.php) and [settings.platformsh.php](https://github.com/platformsh-templates/drupal7/blob/master/settings.platformsh.php).  The former will automatically include the latter, and all Web PaaS-specific configuration is found in the `settings.platformsh.php` file.  It will also automatically include a `settings.local.php` file if found so it will not conflict with your local development workflow.

> [!primary]  
> You should never commit a `settings.local.php` file to your repository.
> 

If you need to add additional configuration that is specific to Web PaaS, such as connecting to additional services like [Redis](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks/frameworks-drupal7/redis) or [Solr](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks/frameworks-drupal7/apachesolr-module), those changes should go in the `settings.platformsh.php` file.
