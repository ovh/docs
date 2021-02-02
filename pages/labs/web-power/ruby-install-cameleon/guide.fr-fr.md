---
title: Installer Cameleon sur votre hébergement web POWER
slug: nodejs-installer-cameleon
excerpt: Découvrez comment installer Cameleon sur votre hébergement web POWER
section: Ruby
order: 1
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## Prérequis
- Disposer d'une de l'offre d'hébergement web POWER [Ruby](https://labs.ovh.com/managed-ruby).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Moteur : ruby 2.6 <br>
Point d'entrée : config.ru<br>
Dossier racine : www<br>

```sh
~ $ ruby -v
ruby 2.6.6p146 (2020-03-31 revision 67876) [x86_64-linux]
~ $ rails -v
Rails 6.0.3.3
```



```sh
~ $ rm -rf www
~ $ gem env gempath
/home/user/.gem/ruby/2.6.0:/usr/local/ruby2.6/lib/ruby/gems/2.6.0
~ $ export GEM_HOME=$(gem env gempath | cut -d ':' -f1)
~ $ rails new www
      create 
      create  README.md
      create  Rakefile
...
      remove  config/initializers/cors.rb
      remove  config/initializers/new_framework_defaults_6_0.rb
         run  bundle install
The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run `bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java`.
Fetching gem metadata from https://rubygems.org/............
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using rake 13.0.1
...
* bin/rake: Spring inserted
* bin/rails: Spring inserted
       rails  webpacker:install
~ $ cd www/
~/www $ rails  webpacker:install
      create  config/webpacker.yml
Copying webpack core config
      create  config/webpack
      create  config/webpack/development.js
...
└─ ws@6.2.1
Done in 7.14s.
Webpacker successfully installed 
```



```sh
~/www $ echo "gem 'camaleon_cms', '>= 2.4.5'" >> Gemfile
~/www $ echo "gem 'draper', '~> 3'"  >> Gemfile
~/www $ echo "gem 'execjs', '>= 2.7.0'"  >> Gemfile
```



```sh
~/www $ bundle install
Fetching gem metadata from https://rubygems.org/.........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies.....
Using rake 12.3.2
Using concurrent-ruby 1.1.5
...
Using uglifier 4.1.20
Using web-console 3.7.0
Bundle complete! 20 Gemfile dependencies, 103 gems now installed.
Use bundle info [gemname] to see where a bundled gem is installed.
```



```sh
~/www $ sed -i 's@\["nodejs", "node"\],@["/usr/local/nodejs14/bin/node"],@' ${GEM_HOME}/gems/execjs-2.7.0/lib/execjs/runtimes.rb
```



```sh
~/www $ RAILS_ENV=production rails generate camaleon_cms:install
 
rails generate camaleon_cms:install
Running via Spring preloader in process 12603
create  config/system.json
create  lib/plugin_routes.rb
exist  app/apps
create  app/apps/themes/readme.txt
exist  app/apps/themes
...
create  app/apps/themes/new/views/post_type.html.erb
create  app/apps/themes/new/views/search.html.erb
append  Gemfile
 
~/www $ RAILS_ENV=production rake camaleon_cms:generate_migrations
 
Copied migration 20190625130636_create_active_storage_tables.active_storage.rb from active_storage
Copied migration 20190625130637_create_db_structure.cama_contact_form_engine.rb from cama_contact_form_engine
Copied migration 20190625130638_post_table_into_utf8.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130639_rename_column_posts.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130640_add_confirm_token_to_users.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130641_add_feature_to_posts.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130642_move_first_name_of_users.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130643_improve_menus_structure.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130644_add_group_to_custom_field_values.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130645_install_migrated_seo_plugin.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130646_drop_user_relationship_table.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130647_create_media.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20190625130648_adjust_field_length.camaleon_cms_engine.rb from camaleon_cms_engine
 
~/www $ RAILS_ENV=production rake db:migrate
 
== 20190625130636 CreateActiveStorageTables: migrating ========================
-- create_table(:active_storage_blobs)
-> 0.0076s
-- create_table(:active_storage_attachments)
-> 0.0170s
...
-- change_column("cama_term_taxonomy", :name, :text, {})
-> 0.1065s
== 20190625130648 AdjustFieldLength: migrated (0.2999s) =======================
 
~/www $ RAILS_ENV=production rake assets:precompile
```


```sh

```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.