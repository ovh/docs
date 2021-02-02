---
title: Installer Redmi sur votre hébergement web POWER
slug: nodejs-installer-redmi
excerpt: Découvrez comment installer Redmi sur votre hébergement web POWER
section: Ruby
order: 3
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Ruby](https://labs.ovh.com/managed-ruby).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Moteur : ruby 2.6 <br>
Point d'entrée : config.ru<br>
Dossier racine : www<br>


Vérfiez l'installation de Ruby.

```sh
~ $ ruby -v
ruby 2.6.6p146 (2020-03-31 revision 67876) [x86_64-linux]
~ $ rails -v
Rails 6.0.3.3
```

Décompressez le fichier `redmine` et renommez-le `www`.

```sh
~ $ tar xzf redmine-4.1.1.tar.gz
~ $ rm -rf www
~ $ mv redmine-4.1.1 www
```

Lancez le bundle avec une base de donnée sqli. N'oubliez pas de d'exporter votre `gempath`ou l'installation du bundle va échouer.

```sh
~/www $ export GEM_HOME=$(gem env gempath | cut -d ':' -f1)
~/www $ vim config/database.yml
development:
  adapter: sqlite3
  database: db/redmine.sqlite3
~/www $ bundle install --without development test
...
Using rouge 3.12.0
Using sqlite3 1.4.2
Bundle complete! 31 Gemfile dependencies, 59 gems now installed.
Gems in the groups development, test and rmagick were not installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

Générez un token et migrez la base de données avant de la lancer.

```sh
~/www $ bundle exec rake generate_secret_token
~/www $ RAILS_ENV=development bundle exec rake db:migrate
...
== 20190620135549 ChangeRolesNameLimit: migrating =============================
-- change_column(:roles, :name, :string, {:limit=>255, :default=>""})
   -> 0.0067s
== 20190620135549 ChangeRolesNameLimit: migrated (0.0067s) ====================
 
~/www $ RAILS_ENV=development REDMINE_LANG=en bundle exec rake redmine:load_default_data
~/www $ mkdir -p tmp tmp/pdf public/plugin_assets
```

Redémarrez votre instance pour visualiser la modification.

```sh
~ $ cd www
~/www$ touch tmp/restart.txt
```


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.