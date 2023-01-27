---
title:  Working with Drush in Drupal 7
slug: drush
section: Drupal7
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

Drush is a command-line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those who spend their working hours hacking away at the command prompt.

You can use the CLI to set up Drush aliases, to easily run Drush commands on specific remote Web PaaS environments.

## Drush make

Web PaaS can automatically build your Drupal 7 site using Drush make files. This allows you to easily test specific versions, apply patches and keep your site up to date. It also keeps your working directory much cleaner as since it only contains your custom code.

Your make file can be called: `project.make` or `drupal-org.make`.

A basic make file looks like this:

```ini
api = 2
core = 7.x

; Drupal core.
projects[drupal][type] = core
projects[drupal][version] = 7.67
projects[drupal][patch][] = "https://drupal.org/files/issues/install-redirect-on-empty-database-728702-36.patch"

; Drush make allows a default sub directory for all contributed projects.
defaults[projects][subdir] = contrib

; WebPaas indicator module.
projects[platform][version] = 1.4
```

When building as a profile, you need a make file for Drupal core called: `project-core.make`:

```bash
api = 2
core = 7.x

projects[drupal][type] = core
```

### Generate a make file from an existing site

If you want to generate a make file from your existing site, you can run:

```bash
$ drush make-generate project.make
```

This will output a make file containing all your contributed modules, themes and libraries.

> [!primary]  
> [Make generate command](http://www.drushcommands.com/drush-6x/make/make-generate)
> 

### Apply patches

You can apply contributed patches to your modules, themes or libraries within your `project.make`:

```bash
projects[features][version] = "2.2"
projects[features][patch][] = "https://www.drupal.org/files/issues/alter_overrides-766264-45.patch"
```

You can also apply self-hosted patches. Simply create a `PATCHES` folder at the root of your repository and add the patch as follow:

```bash
projects[uuid][version] = "1.0-alpha5"
projects[uuid][patch][] = "PATCHES/fix-non-uuid-entity-load.patch"
```

### Work with a DEV version

When you are using a module that is in a DEV version, the best practice is to always target a specific commit ID so that you're always building the same "version" of the module:

```bash
; CKEditor module: version 7.x-1.15+2-dev
projects[ckeditor][download][revision] = "b29372fb446b547825dc6c30587eaf240717695c"
projects[ckeditor][download][type] = "git"
projects[ckeditor][download][branch] = "7.x-1.x"
projects[ckeditor][type] = "module"
```
