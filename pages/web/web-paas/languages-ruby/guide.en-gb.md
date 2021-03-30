---
title: Ruby
slug: languages-ruby
section: Languages
order: 4
---

**Last updated 26th March 2021**


## Objective  

Web PaaS supports deploying any Ruby application. Your application can use any Ruby application server such as Unicorn or Puma and deploying a Rails or a Sinatra app is very straight forward.

## Supported versions

### Ruby MRI

| **Grid** | 
|----------------------------------|  
|  2.3 |  
|  2.4 |  
|  2.5 |  
|  2.6 |  
|  2.7 |  

## Unicorn based Rails configuration

In this example, we use Unicorn to run our Ruby application. You could use any Ruby application server such as Puma or Thin.

Configure the `.platform.app.yaml` file with a few key settings as listed below, a complete example is included at the end of this section.

1\. Specify the language of your application (available versions are listed above):


```yaml   
type: 'ruby:2.7'
```  


2\. Build your application with the build hook.

    Assuming you have your  dependencies stored in the `Gemfile` at the root of your application folder to execute build steps:

```yaml
hooks:
  build: bundle install --without development test
  deploy: RACK_ENV=production bundle exec rake db:migrate
```

    These are installed as your project dependencies in your environment. You can also use the `dependencies` key to install global dependencies theses can be Ruby, Python, NodeJS or PHP libraries.

3\. Configure the command you use to start serving your application (this must be a foreground-running process) under the `web` section, e.g.:

```yaml
web:
    upstream:
        socket_family: unix
    commands:
        start: "unicorn -l $SOCKET -E production config.ru"
```

    This assumes you have Unicorn as a dependency in your Gemfile

```ruby
    # Use Unicorn as the app server
    group :production do
 gem 'unicorn'
    end
    ```

    and that you have a rackup file `config.ru` at the root of your repository, for example for a rails application you would put:

```ruby
require "rubygems"
require ::File.expand_path('../config/environment', __FILE__)
run Rails.application
```

4\. Define the web locations your application is using:

```yaml
web:
   locations:
       "/":
           root: "public"
           passthru: true
           expires: 1h
           allow: true
```

    This configuration asks our web server to handle HTTP requests at "/static" to serve static files stored in `/app/static/` folder while everything else are forwarded to your application server.

5\. Create any Read/Write mounts. The root file system is read only. You must explicitly describe writable mounts.

```yaml
mounts:
    tmp:
        source: local
        source_path: tmp
    logs:
        source: local
        source_path: logs
```

    This setting allows your application writing files to `/app/tmp` and have logs stored in `/app/logs`.

    You can define other read/write mounts (your application code itself being deployed to a read-only file system). Note that the file system is persistent, and when you backup your cluster these mounts get backed-up too.

6\. Then, setup the routes to your application in `.platform/routes.yaml`.

```yaml
"https://{default}/":
    type: upstream
    # the first part should be your project name
    upstream: "app:http"
```

    Here is the complete `.platform.app.yaml` file:

```yaml
name: 'app'
type: "ruby:2.7"

web:
    upstream:
        socket_family: unix
    commands:
        start: "unicorn -l $SOCKET -E production config.ru"

    locations:
        "/":
            root: "public"
            passthru: true
            expires: 1h
            allow: true

relationships:
    database: "database:mysql"

disk: 2048

hooks:
  build: bundle install --without development test
  deploy: RACK_ENV=production bundle exec rake db:migrate

mounts:
    tmp:
        source: local
        source_path: tmp
    logs:
        source: local
        source_path: logs
```

## Configuring services

7\. In this example we assue in the `relationships` key that we have a mysql instance. To configure it we need to create a `.platform/services.yaml` with for eample:

```yaml
database:
  type: mysql:10.4
  disk: 2048
```

## Connecting to services

You can [define services](../configuration-services) in your environment. And, link to the services using `.platform.app.yaml`:

```yaml
relationships:
    database: "mysqldb:mysql"
```

By using the following ruby function calls, you can obtain the database details.

```ruby
require "base64"
require "json"
relationships= JSON.parse(Base64.decode64(ENV['PLATFORM_RELATIONSHIPS']))
```

Which should give you something like:

```json
{
   "database" : [
      {
         "path" : "main",
         "query" : {
            "is_master" : true
         },
         "port" : 3306,
         "username" : "user",
         "password" : "",
         "host" : "database.internal",
         "ip" : "246.0.241.50",
         "scheme" : "mysql"
      }
   ]
}
```

## Project templates

A number of project templates for Ruby applications and typical configurations are available on GitHub.  Not all of them are proactively maintained but all can be used as a starting point or reference for building your own website or web application.

Web PaaS also provides a [helper library](https://github.com/platformsh/platformsh-ruby-helper) for Ruby applications that simplifies presenting environment information to your application.  It is not required to run Ruby applications on Web PaaS but is recommended.


### Ruby on Rails  

<p>This template builds Ruby on Rails 5 on Web PaaS.  It includes a bridge library that will auto-configure most databases and services, and ships with PostgreSQL out of the box.  Otherwise it is the same as the result of running "rails new".</p>
<p>Rails is an opinionated rapid application development framework written in Ruby.</p>
  
#### Features
- Ruby 2.6<br />  
- PostgreSQL 11<br />  
- Automatic TLS certificates<br />  
- Bundler-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/rails) on GitHub.

