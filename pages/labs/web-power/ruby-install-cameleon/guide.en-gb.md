---
title: Install Camaleon on your POWER web hosting plan
slug: ruby-install-camaleon
excerpt: Find out how to install Camaleon on your POWER web hosting plan
section: Ruby
order: 2
updated: 2021-02-04
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 4th February 2021**

## Objective

You've subscribed to a Web POWER web hosting plan to deploy **Ruby** applications, and you want to deploy [Camaleon](http://camaleon.tuzitio.com/){.external} on it.

This guide will explain how to do it.

**Find out how to install Camaleon on your POWER web hosting plan.**

## Requirements

- A [Ruby](https://labs.ovh.com/managed-ruby) POWER web hosting plan
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](../getting-started-with-power-web-hosting/) guide before going further.

## Instructions

Let's suppose you have the default configuration for Ruby hosting:

- Runtime: Ruby 2.6   
- Entrypoint: config.ru 
- DocumentRoot: www
- Environment:development 

> [!alert]
>
> Be careful, Rails depends on the environment (`RAILS_ENV`).

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](../getting-started-with-power-web-hosting/#api-get-active-configuration) API endpoint.

[Connect via SSH](../getting-started-with-power-web-hosting/#ssh) to your POWER web hosting.

Delete your `DocumentRoot` to initiate it with Rails (don't forget to export your `gempath` or your bundle install will fail):

```sh
rm -rf www
gem env gempath
export GEM_HOME=$(gem env gempath | cut -d ':' -f1)
export RAILS_ENV=${OVH_ENVIRONMENT}
rails new www
cd www/
rails  webpacker:install
```

Prepare your `Gemfile`:

```sh
echo "gem 'camaleon_cms', '>= 2.4.5'" >> Gemfile
echo "gem 'draper', '~> 3'"  >> Gemfile
echo "gem 'execjs', '>= 2.7.0'"  >> Gemfile
```

Install your `Gems`:

```sh
bundle install
```

Force the right Node.js engine for Camaleon Javascript:

```sh
sed -i 's@\["nodejs", "node"\],@["/usr/local/nodejs14/bin/node"],@' ${GEM_HOME}/gems/execjs-2.7.0/lib/execjs/runtimes.rb
```

Run Camaleon with your `sqlite` database (beware, there are four different commands to run):

```sh
rails generate camaleon_cms:install
rake camaleon_cms:generate_migrations
rake db:migrate
rake assets:precompile
```

Now whitelist your domain name, in `www/config/environments/development.rb`:

```ruby
Rails.application.configure do
  # Whitelist one hostname
  config.hosts << "your-domain.ovh"
```

Deactivate `check_yarn_integrity` check under section `development` in `www/config/webpacker.yml`:

```yaml
development:
  <<: *default
  compile: true

  # Verifies that correct packages and versions are installed by inspecting package.json, yarn.lock, and node_modules
  check_yarn_integrity: false
```


Then [restart your instance](../getting-started-with-power-web-hosting/#restart) and your Camaleon will be online.

![Camaleon](images/ruby-install-camaleon-01.png){.thumbnail}


Terminal output:


<pre class="console"><code>~ $ rm -rf www

~ $ gem env gempath
/homez.41/powerlp/.gem/ruby/2.6.0:/usr/local/ruby2.6/lib/ruby/gems/2.6.0

~ $ export GEM_HOME=$(gem env gempath | cut -d ':' -f1)

~ $ export RAILS_ENV=${OVH_ENVIRONMENT}

~ $ rails new www
      create
      create  README.md
      create  Rakefile
      create  .ruby-version
[...]
Fetching webpacker 4.3.0
Installing webpacker 4.3.0
Bundle complete! 17 Gemfile dependencies, 75 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
         run  bundle binstubs bundler
[...]   
Installing all JavaScript dependencies [4.3.0]
         run  yarn add @rails/webpacker@4.3.0 from "."
yarn add v1.22.10
[...]
├─ strip-eof@1.0.0
├─ thunky@1.1.0
├─ type-is@1.6.18
├─ unpipe@1.0.0
├─ url-parse@1.4.7
├─ utils-merge@1.0.1
├─ wbuf@1.7.3
├─ webpack-dev-middleware@3.7.3
├─ webpack-dev-server@3.11.2
├─ websocket-driver@0.7.4
├─ websocket-extensions@0.1.4
└─ ws@6.2.1
Done in 6.19s.
Webpacker successfully installed 🎉 🍰

~ $ cd www/

~/www $ rails  webpacker:install
   identical  config/webpacker.yml
Copying webpack core config
       exist  config/webpack
   identical  config/webpack/development.js
   identical  config/webpack/environment.js
   identical  config/webpack/production.js
   identical  config/webpack/test.js
[...]
info Direct dependencies
└─ webpack-dev-server@3.11.2
info All dependencies
└─ webpack-dev-server@3.11.2
Done in 3.81s.
Webpacker successfully installed 🎉 🍰

~/www $ echo "gem 'camaleon_cms', '>= 2.4.5'" >> Gemfile

~/www $ echo "gem 'draper', '~> 3'"  >> Gemfile

~/www $ echo "gem 'execjs', '>= 2.7.0'"  >> Gemfile

~/www $ bundle install
Fetching gem metadata from https://rubygems.org/.........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies.....
Using rake 12.3.2
Using concurrent-ruby 1.1.5
[...]
Using uglifier 4.1.20
Using web-console 3.7.0
Bundle complete! 20 Gemfile dependencies, 103 gems now installed.
Use bundle info [gemname] to see where a bundled gem is installed.

~/www $ sed -i 's@\["nodejs", "node"\],@["/usr/local/nodejs14/bin/node"],@' ${GEM_HOME}/gems/execjs-2.7.0/lib/execjs/runtimes.rb

 ~/www $ rails generate camaleon_cms:install
Running via Spring preloader in process 3807
WARNING: Spring is running in production. To fix this make sure the spring gem is only present in `development` and `test` groups in your Gemfile and make sure you always use `bundle install --without development test` in production
      create  config/system.json
      create  lib/plugin_routes.rb
       exist  app/apps
      create  app/apps/themes/readme.txt
       exist  app/apps/themes
[...]
      create  app/apps/themes/new/views/search.html.erb
      append  app/assets/config/manifest.js
      append  config/initializers/assets.rb
      append  Gemfile

 ~/www $ rake camaleon_cms:generate_migrations
Copied migration 20210203210456_create_active_storage_tables.active_storage.rb from active_storage
Copied migration 20210203210457_create_action_mailbox_tables.action_mailbox.rb from action_mailbox
Copied migration 20210203210458_create_action_text_tables.action_text.rb from action_text
Copied migration 20210203210459_create_db_structure.cama_contact_form_engine.rb from cama_contact_form_engine
[...]
Copied migration 20210203210469_create_media.camaleon_cms_engine.rb from camaleon_cms_engine
Copied migration 20210203210470_adjust_field_length.camaleon_cms_engine.rb from camaleon_cms_engine

 ~/www $ rake db:migrate
== 20210203210456 CreateActiveStorageTables: migrating ========================
-- create_table(:active_storage_blobs, {})
   -> 0.0020s
[...]
-- add_index("cama_posts", :slug, {:length=>255})
   -> 0.0011s
-- change_column("cama_term_taxonomy", :name, :text, {})
   -> 0.0141s
== 20210203210470 AdjustFieldLength: migrated (0.0479s) =======================

~/www $ rake assets:precompile
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.70s.
yarn install v1.22.10
[...]
I, [2021-02-03T21:06:42.780527 #6031]  INFO -- : Creating symlink /home/powerlp/www/public/assets/tinymce/skins/lightgray/fonts/tinymce.eot
I, [2021-02-03T21:06:42.781108 #6031]  INFO -- : Creating symlink /home/powerlp/www/public/assets/tinymce/skins/lightgray/fonts/tinymce.eot.gz

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**
