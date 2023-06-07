---
title: Installer Camaleon sur votre hébergement web POWER
excerpt: Découvrez comment installer Camaleon sur votre hébergement web POWER
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

**Dernière mise à jour le 03/02/2021**

## Objectif

Vous avez souscrit à un hébergement web POWER Ruby et vous voulez y déployer [Camaleon](http://camaleon.tuzitio.com/){.external}, un CMS flexible vous permettant de créer une structure de contenu personnalisée sans avoir à coder.

**Découvrez comment installer Camaleon sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Ruby](https://labs.ovh.com/managed-ruby).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](/pages/labs/web-power/getting-started) » avant de poursuivre la lecture de ce guide.

## En pratique

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : ruby 2.6
- Point d'entrée : config.ru
- Dossier racine : www
- Environment: development

> [!alert]
>
> Attention, Rails dépend de l'environnement (`RAILS_ENV`)


> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](/pages/labs/web-power/getting-started#api-get-active-configuration).


[Accédez via SSH](/pages/labs/web-power/getting-started#ssh) à votre hébergement web POWER.

Supprimez le dossier racine pour l'initialiser avec Rails. N'oubliez pas d'exporter votre `gempath` ou l'installation du bundle va échouer :

```sh
rm -rf www
gem env gempath
export GEM_HOME=$(gem env gempath | cut -d ':' -f1)
export RAILS_ENV=${OVH_ENVIRONMENT}
rails new www
cd www/
rails  webpacker:install
```

Préparez votre `Gemfile` :

```sh
echo "gem 'camaleon_cms', '>= 2.4.5'" >> Gemfile
echo "gem 'draper', '~> 3'"  >> Gemfile
echo "gem 'execjs', '>= 2.7.0'"  >> Gemfile
```

Installez vos `Gems` :

```sh
bundle install
```

Utilisez le moteur Node.js pour Camaleon Javascript :

```sh
sed -i 's@\["nodejs", "node"\],@["/usr/local/nodejs14/bin/node"],@' ${GEM_HOME}/gems/execjs-2.7.0/lib/execjs/runtimes.rb
```

Lancez Camaleon avec votre base de données `sqlite`. Attention, il y a 4 commandes différentes à lancer :

```sh
rails generate camaleon_cms:install
rake camaleon_cms:generate_migrations
rake db:migrate
rake assets:precompile
```

Déclarez votre nom de domaine sur liste blanche dans `www/config/environments/development.rb` :

```ruby
Rails.application.configure do
  # Whitelist one hostname
  config.hosts << "your-domain.ovh"
```

Et désactivez la vérification `check_yarn_integrity` dans la partie `development` de `www/config/webpacker.yml` :

```yaml
development:
  <<: *default
  compile: true

  # Verifies that correct packages and versions are installed by inspecting package.json, yarn.lock, and node_modules
  check_yarn_integrity: false
```

[Redémarrez votre instance](/pages/labs/web-power/getting-started#restart), votre CMS Camaleon sera alors en ligne.

![Camaleon](images/ruby-install-camaleon-01.png){.thumbnail}

Sortie de la console:

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

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Venez sur [Discord](https://discord.gg/ovhcloud) sur notre room web-hosting-power pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting.**
