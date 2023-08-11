---
title: Multiple Drupal  sites in a single Project
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

Web PaaS supports running [multiple applications in the same project](/pages/web_cloud/web_paas_powered_by_platform_sh/bestpractices-oneormany)
and these can be two or more Drupal site. But, they would be separate Drupal
instances , they will have their assets separate and live their lives apart and
it would be much better for them not to share the same database (though they
could).

Note, that the same Drupal instance can also use multiple databases (just add
multiple instances to services.yaml and use  db_select) you will need to
override settings.php [as described here](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks-drupal7/customizing-settings-php) and
add the other databases you could then use `db_select` to switch between those.

# Old Style "Multisite" and Web PaaS

Web PaaS actively discourages running Drupal in "multisite" mode. Doing so
eliminates many of the advantages Web PaaS offers, such as isolation, safe
testing, and so forth.

Additionally, because of the dynamic nature of the domain names that are created for
the different environments the multisite configuration would likely be complex
and fragile.

We recommend running separate projects for separate Drupal sites, or using one of
the various "single instance" options available such as [Domain Access](https://www.drupal.org/project/domain),
[Organic Groups](https://www.drupal.org/project/og), or [Workbench Access](https://www.drupal.org/project/workbench_access).

## Using Domain Access
Web PaaS has broad support for custom Drupal modules, including the Domain Access module.

If the multiple sites are part of the same project this makes sense.

Because of the dynamic nature of routes in Web PaaS, you'll need to implement
some logic (here you would replace MYMODULE with a convenient name of your own
and include it in your custom modules for your Drupal installation).

```php
<?php
/**
 * Implements hook_domain_default_domains().
 */
function MYMODULE_domain_default_domains() {
  $domains = array();
  $domains['wipe-domain-tables'] = 'wipe-domain-tables';

  $routes = (array) json_decode(base64_decode(getenv('PLATFORM_ROUTES')));

  if (!empty($routes) && is_array($routes)) {
    $weight = -1;
    foreach ($routes as $url => $route) {
      if (
        $route->upstream == 'drupal'
        && preg_match('/^(https?):\/\/([a-z0-9\.-]+)\/$/', $url, $matches)
        && preg_match('/^https?:\/\/([a-z]+).{default}\/$/', $route->original_url, $matches2)
      ) {
        $scheme = $matches[1];
        $domain_name = $matches[2];
        $machine_name = $matches2[1];

        $domains[$machine_name] = array(
          'subdomain' => $domain_name,
          'sitename' => MYMODULE_get_sitename($machine_name),
          'scheme' => $scheme,
          'valid' => 1,
          'weight' => $weight++,
          'is_default' => ($machine_name == 'www' ? 1 : 0),
          'machine_name' => $machine_name,
        );
      }
    }
  }

  return $domains;
}
```
