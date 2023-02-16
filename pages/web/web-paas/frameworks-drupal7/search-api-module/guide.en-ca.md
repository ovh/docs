---
title: Using Solr with the module Search API on Drupal 7.x
slug: search-api-module
section: Drupal7
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

This page is about configuring Solr with the module [Search API](https://www.drupal.org/project/search_api). If your project uses [Apache Solr Search](https://www.drupal.org/project/apachesolr) then you should follow the instructions [Apache Solr Search](../apachesolr-module).

## Requirements
You will need to add the [Search API](https://www.drupal.org/project/search_api) and [Search API
Solr](https://www.drupal.org/project/search_api_solr) modules to your project. The [Search API Override](https://www.drupal.org/project/search_api_override) module is strongly recommended in order to allow the Solr configuration to be populated from `settings.php`.

If you are using a make file, you can add those lines to your
`project.make`:

```ini
projects[entity][version] = 1.8
projects[search_api][version] = 1.20
projects[search_api_solr][version] = 1.11
projects[search_api_override][version] = 1.0-rc1
```

## Configuration

The Search API module includes recommended configuration files to use with Drupal.  See the [Solr](../../configuration-services/solr) configuration page for details of how to configure your Solr server to use the Drupal configuration files.  Note that the Drupal 7 version of Search API Solr does not include configuration files for Solr 6.  The Drupal 8 version of the module does, however, and should work acceptably.  It can also be customized as desired.

The Search API Override module (listed above) allows Search API configuration to be overridden from `settings.php`.  Once it has been enabled, add the following to your `settings.platformsh.php` file:

```php
<?php

if (isset($_ENV['PLATFORM_RELATIONSHIPS'])) {
  $relationships = json_decode(base64_decode($_ENV['PLATFORM_RELATIONSHIPS']), TRUE);

  if (!empty($relationships['solr'])) {
    // Override search API server settings fetched from default configuration.
    $conf['search_api_override_mode'] = 'load';
    foreach ($relationships['solr'] as $endpoint) {
      $conf['search_api_override_servers'] = array(
        'MACHINE_NAME_OF_SOLR_SERVER' => array(
          'options' => array(
            'host' => $endpoint['host'],
            'port' => $endpoint['port'],
            'path' => '/' . $endpoint['path'],
            'http_method' => 'POST',
          ),
        ),
      );
    }
  }
}
```

Replace `MACHINE_NAME_OF_SOLR_SERVER` with the Drupal machine name of the server you want to override.  The solr server must already be defined in Drupal and ideally exported to a Feature.

## Relationships configuration

If you did not name the relationship `solr` in your `.platform.app.yaml` file, adjust the name accordingly.  Also, if you have multiple Solr cores defined the above `foreach()` loop will not work.  Most likely you will want to name the relationships by the machine name of the Solr server they should map to and then map each one individually.

The file `.platform.app.yaml` must have the Solr relationship enabled, such as this snippet:

```ini
relationships:
    solr: 'solrsearch:solr'
```
