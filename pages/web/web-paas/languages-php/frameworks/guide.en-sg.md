---
title: Frameworks
slug: frameworks
section: Php
---

**Last updated 2nd June 2022**



## Objective  

Full Drush support and Composer-based builds
so you can handle dependencies and builds for PHP frameworks by committing `composer.json` to your project.

## Drupal

[Drupal](https://www.drupal.org/) is an open-source content management framework written in PHP.
Since Composer comes pre-installed on Web PaaS, Drupal can be installed and updated completely using Composer.
The default build flavor for PHP application
runs `composer install` during build, handling all of your dependencies automatically.



### Community Support

Drupal FAQs, how-to guides and other tutorials right on [Web PaaS Community](https://community.platform.sh/).

* [Drupal on Web PaaS Community](https://community.platform.sh/search?q=drupal)

### Templates

* [Drupal 8](https://github.com/platformsh-templates/drupal8)
* [Drupal 9](https://github.com/platformsh-templates/drupal9)
* [Drupal 8 (multisite variant)](https://github.com/platformsh-templates/drupal8-multisite)
* [Opigno](https://github.com/platformsh-templates/drupal8-opigno)
* [GovCMS8](https://github.com/platformsh-templates/drupal8-govcms8)

## eZ Platform

[eZ Platform](https://ezplatform.com/) is a CMS based on the Symfony full-stack framework. eZ WebPaas comes pre-configured for use with Web PaaS for versions 1.13 and later, all it takes is mapping a few environment variables to an existing project. Consult the caching, configuration, and local development best practices for eZ WebPaas and Fastly integration for more information.



### Example Projects

> [!primary]  
> Template projects (repositories in the [platformsh-templates](https://github.com/platformsh-templates) GitHub organization) are actively maintained by the Web PaaS team. Any other example projects come with less support, and remain in public repositories as proof-of-concepts.
> 

* [eZ Platform](https://github.com/ezsystems/ezplatform)

## Symfony

[Symfony](https://symfony.com/) is a web application framework written in PHP. Symfony projects utilize native Composer to build applications and manage dependencies.

* [Symfony Integration with Web PaaS](https://symfony.com/cloud)

### Templates

* [Symfony 5](https://github.com/symfonycorp/platformsh-symfony-template/tree/5.4)
* [Symfony 6](https://github.com/symfonycorp/platformsh-symfony-template/tree/6.0)

## TYPO3

[TYPO3](https://typo3.org/) is an open-source CMS written in PHP. Utilized Web PaaS native Composer to handle builds and maintain dependencies.



### Templates

* [TYPO3](https://github.com/platformsh-templates/typo3)

## WordPress

[WordPress](https://wordpress.com/) is a PHP content management system. Web PaaS recommends using the composer-based installation method for WordPress.


### Community Support

All your WordPress FAQs, plus how-to guides and tutorials right on [Web PaaS Community](https://community.platform.sh/).

* [WordPress on Web PaaS Community](https://community.platform.sh/search?q=wordpress)

### Templates

* [WordPress](https://github.com/platformsh-templates/wordpress-composer)
