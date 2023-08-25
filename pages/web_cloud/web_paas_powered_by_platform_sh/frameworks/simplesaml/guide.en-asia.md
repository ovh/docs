---
title: SimpleSAML
updated: 2021-05-11
---




## Objective  

SimpleSAMLphp is a library for authenticating a PHP-based application against a SAML server, such as Shibboleth.  Although Drupal has modules available to authenticate using SimpleSAML some additional setup is required.

The following setup assumes you're using the `drupal` build flavor and building your site with Drush Make.  If not, you may need to adjust some paths in the configuration but the basics are the same.

## Download the library

First, download the 3rd party [SimpleSAMLphp library](https://simplesamlphp.org/download).  When you unpack the `tar.gz` file it will contain a directory named `simplesamplephp-???`, where the `???` is the version number of the library.  Place that directory at the root of your application, as a sibling of your `.platform.app.yaml` file, named `simplesamplephp`.  (The directory name doesn't really matter but removing the version number means that it won't change in future updates.)

The `drupal` build flavor will move that directory to the `public/sites/default/` directory during build.  The rest of the configuration is based on that behavior.

## Include SimpleSAML cookies in the cache key

The SimpleSAML client uses additional cookies besides the Drupal session cookie that need to be allowed for the cache.  To do so, modify your `routes.yaml` file for the route that points to your Drupal site and add two additional cookies to the `cache.cookies` line.  It should end up looking approximately like this:

```yaml
"https://{default}/":
    type: upstream
    upstream: "app:http"
    cache:
      enabled: true
      cookies: ['/^SS?ESS/', '/^Drupal.visitor/', 'SimpleSAMLSessionID', 'SimpleSAMLAuthToken']
```

Commit this change to the Git repository.

## Expose the SimpleSAML endpoint

The SimpleSAML library's `www` directory needs to be publicly accessible.  That can be done by mapping it directly to a path in the Application configuration.  Add the following block to the `web.locations` section of `.platform.app.yaml`:

```yaml
 web:
    locations:
        '/simplesaml':
            root: 'public/sites/default/simplesamlphp/www'
            allow: true
            scripts: true
            index:
                - index.php
```

That will map all requests to `example.com/simplesaml/` to the `simplesamlphp/www` directory, allowing static files there to be served, PHP scripts to execute, and defaulting to index.php.

## Install the `simpleSAMLphp Authentication` module

You will need to install the [simpleSAMLphp Authentication](https://www.drupal.org/project/simplesamlphp_auth) module.  If using Drush Make then the easiest way to do so is simply to add the following line to your `project.make` file:

```ini
projects[simplesamlphp_auth][version] = 2.0-alpha2
```

(Adjust the version to whatever is current.)

Much of the module configuration will depend on your Identity Provider (IdP).  However, the module also need to know the location of your `simplesamlphp_auth` module.  The easiest way to set it is to include the following at the end of your `settings.platformsh.php` file:

```php
<?php

// Set the path for the SimpleSAMLphp library dynamically.
$conf['simplesamlphp_auth_installdir'] = __DIR__ . '/simplesamlphp';
```

Deploy the site and enable the `simplesamlphp_auth` module.

Consult the module documentation for further information on how to configure the module itself.  Note that you should not check the "Activate authentication via SimpleSAMLphp" checkbox in the module configuration until you have the rest of the configuration completed or you may be locked out of the site.

## Configure SimpleSAML to use the database

SimpleSAMLphp is able to store its data either on disk or in the Drupal database.  Web PaaS strongly recommends using the database.

Open the file `simplesamlphp/config/config.php`.  It contains a number of configuration properties that you can adjust as needed.  Some are best edited in-place and the file already includes ample documentation, specifically:

* `auth.adminpassword`
* `technicalcontact_name`
* `technicalcontact_email`

Others are a little more involved.  In the interest of simplicity we recommend simply pasting the following code snippet at the end of the file, as it will override the default values in the array.

```php
<?php

// Set SimpleSAML to log using error_log(), which on Web PaaS will
// be mapped to the /var/log/app.log file.
$config['logging.handler'] = 'errorlog';

// Set SimpleSAML to use the metadata directory in Git, rather than
// the empty one in the vendor directory.
$config['metadata.sources'] = [
   ['type' => 'flatfile', 'directory' =>  dirname(__DIR__) . '/metadata'],
];

// Setup the database connection for all parts of SimpleSAML.
if (isset($_ENV['PLATFORM_RELATIONSHIPS'])) {
  $relationships = json_decode(base64_decode($_ENV['PLATFORM_RELATIONSHIPS']), TRUE);
  foreach ($relationships['database'] as $instance) {
    if (!empty($instance['query']['is_master'])) {
      $dsn = sprintf("%s:host=%s;dbname=%s",
        $instance['scheme'],
        $instance['host'],
        $instance['path']
      );
      $config['database.dsn'] = $dsn;
      $config['database.username'] = $instance['username'];
      $config['database.password'] = $instance['password'];

      $config['store.type'] = 'sql';
      $config['store.sql.dsn'] = $dsn;
      $config['store.sql.username'] = $instance['username'];
      $config['store.sql.password'] = $instance['password'];
      $config['store.sql.prefix'] = 'simplesaml';

    }
  }
}

// Set the salt value from the Web PaaS entropy value, provided for this purpose.
if (isset($_ENV['PLATFORM_PROJECT_ENTROPY'])) {
  $config['secretsalt'] = $_ENV['PLATFORM_PROJECT_ENTROPY'];
}
```

## Generate SSL certs (optional)

You may need to generate an SSL/TLS certificate, depending on your Identity Provider (IdP).  If so, you should generate the certificate locally following the instructions in the [SimpleSAMLphp documentation](https://simplesamlphp.org/docs/stable/simplesamlphp-sp).  Your resulting IdP file should be placed in the simplesamlphp/metadata directory.  The certificate should be placed in the `simplesamlphp/cert` directory.  (Create it if needed.)

Then add the following line to your `simplesamlphp/config/config.php` file to tell the library where to find the certificate:

```php
<?php

$config['certdir'] = dirname(__DIR__) . '/cert';
```

## Deploy

Commit all changes and deploy the site, then enable the `simplesamlphp_auth` module within Drupal.

Consult the module documentation for further information on how to configure the module itself.  Note that you should not check the "Activate authentication via SimpleSAMLphp" checkbox in the module configuration until you have the rest of the configuration completed or you may be locked out of the site.

## Recovering from a locked site

If SimpleSAML is misconfigured it is possible to find yourself locked out of the site, as it will try to authenticate against a SimpleSAML server, fail, and then disallow other logins.  If that happens, the easiest way to recover it is to disable the SimpleSAML login.  That can be done with the following command:

```bash
webpaas ssh "cd public && drush vset simplesamlphp_auth_activate 0"
```

Alternatively you could log into the server and run the drush command there yourself.

If that doesn't work it is likely that the configuration is "pinned" using Features or via `settings.php`.  Instead disable the module entirely, then remove the "pin" and re-enable it.

```bash
webpaas ssh "cd public && drush pm-disable simplesamlphp_auth -y"
```
