---
title: Composer manager
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

Drupal 7 does not natively support installing packages via Composer. Although there is a [Drupal Composer project for Drupal 7](https://github.com/drupal-composer/drupal-project/tree/7.x), many projects are still built using a vanilla Drupal download or with Drush Make.  For sites built without Drupal Composer that still want to use modules that have Composer dependences, the most widely used option is the [Composer Manager](https://www.drupal.org/project/composer_manager) module.  Because of the read-only file system, however, there are specific configuration parameters necessary on Web PaaS.

## 1. Install and patch Composer Manager

Install the Composer Manager module in the manner appropriate for your site.  There are also 2 patch files needed that have not been committed to the module yet.

If you're installing it via Drush Make, add the appropriate lines to your `.make` file:

```ini
projects[composer_manager][version] = "1.8"
projects[composer_manager][patch][] = "https://www.drupal.org/files/issues/composer_manager-2620348-3.patch"
projects[composer_manager][patch][] = "https://www.drupal.org/files/issues/composer_manager-relative_realpath-2864297-5.patch"
```

If you're checking the entire codebase into Git, do so with Composer Manager as well.  Then download and apply the two patches in the issues above and commit the result.

## 2. Disable automatic writes

*If you are preparing the site locally*, it's important to uncheck the two "Automatically..." options at the config page on `admin/config/system/composer-manager/settings`. If checked, Drupal tries to update the composer folder. Since this isn't a writable mount, installation of composer based modules will fail due to these writing permissions.

*If you are adding composer_manager to a site already running on Web PaaS* then enabling the module with its default settings may be problematic - it will immediately attempt to write to the files, and probably fail because it cannot. The error may look like: "`The specified file /tmp/xxx could not be copied, because the destination directory is not properly configured. This may be caused by a problem with file or directory permissions.`

To avoid this problem:

Add the following lines to your `settings.php` file:

```php
<?php
$conf['composer_manager_autobuild_file'] = false;
$conf['composer_manager_autobuild_packages'] = false;
```

This will force the configs otherwise seen on `admin/config/system/composer-manager/settings` off, which would have been difficult to do if you cannot access the UI.

## 3. Configure file locations

Composer Manager works by using a Drush command to aggregate all module-provided `composer.json` files into a single file, which can then be installed via a normal Composer command.  Both the generated file and the resulting `vendor` directory must be in the application portion of the file system, that is, not in a writable file mount.  As that is not the default configuration for Composer Manager it will need to be changed.  Add the following lines to your `settings.php` file:

```php
<?php
$conf['composer_manager_vendor_dir'] = '../composer/vendor';
$conf['composer_manager_file_dir'] = '../composer';
```

The above lines will direct Composer Manager to put the generated `composer.json` file into `../composer/`, and to autoload Composer-based packages from the `../composer/vendor` directory.  The paths are relative to the Drupal root.  You may use another location if desired provided that they are not in a writable file mount, and provided the `vendor` directory is a sibling of wherever the `composer.json` file will be.

Then, manually create the `composer` directory and place a `.gitignore` file inside it, containing the following, and commit it to Git:

```text
# Exclude Composer dependencies.
/vendor
```

## 4. Update the build hook

Create a build hook in your `.platform.app.yaml` file that will install Composer dependencies:

```yaml
hooks:
  build: |
    # Install Composer dependencies.
    cd composer
    composer install --no-interaction --optimize-autoloader --no-dev
```

Replace `composer` with whatever the path to the composer directory is. Note that if using the `drupal` build flavor with Drush Make, then the `composer` directory may have been moved into the same directory as your modules, like `public/sites/default`. It can be moved back via another line in the build hook:

```yaml
hooks:
  build: |
    # Move the Composer directory (back) to the application root.
    mv public/sites/default/composer composer
    # Install Composer dependencies.
    cd composer
    composer install --no-interaction --optimize-autoloader --no-dev
```

The `composer install` command may also be further customized as desired.

## 5. Generate and commit the `composer.*` files locally

From the Drupal root on your local system, run `drush composer-json-rebuild` to generate the aggregated `composer.json` file.  Then, change to the `composer` directory and run `composer install` yourself, to generate the `composer.lock` file and download all dependencies.

The `composer.json` and `composer.lock` files must be committed to the repository.  The `vendor` directory must not be.  That way, during build the Composer command in the build hook will download the exact version of all dependent packages listed in the `composer.lock` file, which helps keep builds consistent and predictable.

Any time a new module with Composer dependencies is added, or a new version of a dependent library is available, repeat step 4 only.
