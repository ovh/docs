---
title: Install Rails on your POWER web hosting plan
excerpt: Find out how to install Rails on your POWER web hosting plan
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

You've subscribed to a Web POWER web hosting plan to deploy **Ruby** applications, and you want to deploy [Rails](https://rubyonrails.org/){.external} on it.

This guide will explain how to do it.

**Find out how to install Rails on your POWER web hosting plan.**


## Requirements

- A [Ruby](https://labs.ovh.com/managed-ruby) POWER web hosting plan
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

If you have just started to use your Web POWER web hosting plan, we suggest to have a look at our [Getting started with a POWER web hosting plan](/pages/labs/web-power/getting-started) guide before going further.

## Instructions

Let's suppose you have the default configuration for Ruby hosting:

- Runtime: Ruby 2.6   
- Entrypoint: config.ru 
- DocumentRoot: www
- Environment: development 

> [!alert]
>
> Be careful, Rails depends on the environment (`RAILS_ENV`).

> [!primary]
>
> To verify your configuration, you can use the [Retrieve active configuration](/pages/labs/web-power/getting-started#api-get-active-configuration) API endpoint.


[Connect via SSH](/pages/labs/web-power/getting-started#ssh) to your POWER web hosting.

Delete your `DocumentRoot` to initiate it with rails (don't forget to export your `gempath` or your bundle install will fail):

```sh
rm -rf www
gem env gempath
export GEM_HOME=$(gem env gempath | cut -d ':' -f1)
export RAILS_ENV=${OVH_ENVIRONMENT}
rails new www
cd www/
rails  webpacker:install
```

Now whitelist your domain name in `www/config/environments/development.rb`:

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

Then [restart your instance](/pages/labs/web-power/getting-started#restart) and your Rails will be online.


![Rails](images/ruby-install-rails-01.png){.thumbnail}

Now let's generate a *Hello World* with Rails: 

```sh
export SPRING_SERVER_COMMAND="$HOME/www/bin/spring server"
rails generate controller demo index
```

Create the template `app/views/demo/index.html.erb`:
 
```html
vim app/views/demo/index.html.erb
&lt;h1>Hello World&lt;/h1>
&lt;p>Hello World from Rails&lt;/p>
```

Build the *Hello World*:

```sh
./bin/webpack
```

After another restart, your *Hello World* will be available in https://<i></i>yourdomain.ovh/demo/index.html.

![Rails](images/ruby-install-rails-02.png){.thumbnail}

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
&lt;h1>Hello World&lt;/h1>
&lt;p>Hello World from Rails&lt;/p>

~/www $ ./bin/webpack
Hash: 15d1bb7b54cf6326b9ba
Version: webpack 4.44.2
Time: 1102ms
[...]

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>



### More information on Rails

To get more information on Rails, go to the [official documentation site](https://guides.rubyonrails.org).


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

**Join [our Discord](https://discord.gg/ovhcloud) on our web-hosting-power channel to discuss directly with the team and other users of this lab.**