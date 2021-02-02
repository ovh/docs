---
title: Installer Rails sur votre hébergement web POWER
slug: nodejs-installer-rails
excerpt: Découvrez comment installer Rails sur votre hébergement web POWER
section: Ruby
order: 2
---

**Dernière mise à jour le 25/01/2021**

## Objectif

Vous souhaitez développer votre projet web sur le motif de conception MVC (**M**odèle-**V**ue-**C**ontrôleur). Rails vous permet cela via un modèle de dévellopement rapide et intuitif.

**Découvrez comment installer Rails sur votre hébergement web POWER**

## Prérequis
- Disposer d'une de l'offre d'hébergement web POWER [Ruby](https://labs.ovh.com/managed-ruby).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.


## En pratique

Moteur : ruby 2.6 <br>
Point d'entrée : config.ru<br>
Dossier racine : www<br>

Vérfiez l'installation de Ruby et de Rails

```sh
~ $ ruby -v
ruby 2.6.6p146 (2020-03-31 revision 67876) [x86_64-linux]
~ $ rails -v
Rails 6.0.3.3
```

Supprimez le dossier racine pour l'initier sur Rails. N'oubliez pas de d'exporter votre `gempath`ou l'installation du bundle va échouer.


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
~ $ vim www/config/environments/development.rb
Rails.application.configure do
  # Whitelist one hostname
  config.hosts << "mydomain.ovh"
...
 
~ $ vim www/config/webpacker.yml
...
development:
  <<: *default
  compile: true
 
  check_yarn_integrity: false
...
```

Redémarrez votre instance pour appliquer les changements.

```sh
~ $ cd www
~/www$ touch tmp/restart.txt
```

Générez le contenu "Hello World" 

```sh
~/www $ export SPRING_SERVER_COMMAND="$HOME/www/bin/spring server"
~/www $ rails generate controller demo index
Running via Spring preloader in process 11410
      create  app/controllers/demo_controller.rb
       route  get 'demo/index'
      invoke  erb
      create    app/views/demo
      create    app/views/demo/index.html.erb
      invoke  test_unit
      create    test/controllers/demo_controller_test.rb
      invoke  helper
      create    app/helpers/demo_helper.rb
      invoke    test_unit
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/demo.scss
 
~/www $ vim app/views/demo/index.html.erb
<h1>Hello World</h1>
<p>Hello World from Rails</p>
~/www $ bin/webpack
Hash: 15d1bb7b54cf6326b9ba
Version: webpack 4.44.2
Time: 1102ms
Built at: 10/05/2020 1:43:24 PM
                                     Asset       Size       Chunks                         Chunk Names
    js/application-9afcbb5693aa87623e69.js    124 KiB  application  [emitted] [immutable]  application
js/application-9afcbb5693aa87623e69.js.map    139 KiB  application  [emitted] [dev]        application
                             manifest.json  364 bytes               [emitted]             
Entrypoint application = js/application-9afcbb5693aa87623e69.js js/application-9afcbb5693aa87623e69.js.map
[./app/javascript/channels sync recursive _channel\.js$] ./app/javascript/channels sync _channel\.js$ 160 bytes {application} [built]
[./app/javascript/channels/index.js] 211 bytes {application} [built]
[./app/javascript/packs/application.js] 749 bytes {application} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 552 bytes {application} [built]
    + 3 hidden modules
 
~/www $ touch tmp/restart.txt
```

Après redémarrage vous pourez visualser votre page

Pour plus d'information sur Rails, n'hésitez pas à consulter la documentation officiel sur <https://guides.rubyonrails.org/>



## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.