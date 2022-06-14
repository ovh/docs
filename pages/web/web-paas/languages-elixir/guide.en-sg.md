---
title: Elixir
slug: languages-elixir
section: Languages
order: 4
---

**Last updated 2nd June 2022**


## Objective  

Web PaaS supports building and deploying applications written in Elixir. There is no default flavor for the build phase, but you can define it explicitly in your build hook. Web PaaS Elixir images support both committed dependencies and download-on-demand. The underlying Erlang version is 22.0.7.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  1.9 |  
|  1.10 |  
|  1.11 |  
|  1.12 |  


To specify an Elixir container, use the `type` property in your `.platform.app.yaml`.

 ```yaml   
 type: 'elixir:1.9'
 ```  

## Web PaaS variables

Web PaaS exposes relationships and other configuration as [environment variables](../development-variables).
Most notably, it allows a program to determine at runtime what HTTP port it should listen on
and what the credentials are to access [other services](../configuration-services).

To get the `PORT` environment variable (the port on which your web application is supposed to listen) you would:

```elixir
String.to_integer(System.get_env("PORT") || "8888")
```

Some of the environment variables are in JSON format and are base64 encoded. You would need to import a JSON parsing library such as [JSON](https://hexdocs.pm/json/readme.html) or [Poison](https://hexdocs.pm/poison/api-reference.html) to read those. (There is an example for doing this to decode the `PLATFORM_RELATIONSHIPS` environment variable in the section [below](#accessing-services-manually).)

> [!primary]  
> **Tip**: Remember `config/prod.exs` is evaluated at **build time** and has no access to runtime configuration. Use `config/releases.exs` to configure your runtime environment.
> 

## Building and running the application

If you are using Hex to manage your dependencies, it is necessary to specify a set of environment variables in your `.platform.app.yaml` file that define the `MIX_ENV` and `SECRET_KEY_BASE`, which can be set to the Web PaaS-provided `PLATFORM_PROJECT_ENTROPY` environment variable:

```yaml
variables:
    env:
        SECRET_KEY_BASE: $PLATFORM_PROJECT_ENTROPY
        MIX_ENV: 'prod'
```

Include in your build hook the steps to retrieve a local Hex and `rebar`, and then run `mix do deps.get, deps.compile, compile` on your application to build a binary.


```yaml   
hooks:
    build: |
        mix local.hex --force
        mix local.rebar --force
        mix do deps.get --only prod, deps.compile, compile
```  


> [!primary]  
> 
> The above build hook works for most cases and assumes that your `mix.exs` file is located at your app root.
> 
> 

Assuming `mix.exs` is present at your app root and your build hook matches the above,
you can then start it from the `web.commands.start` directive.

> [!primary]  
> The start command _must_ run in the foreground, so you should set the `--no-halt` flag when calling `mix run`.
> 

The following basic `.platform.app.yaml` file is sufficient to run most Elixir applications.

```yaml
name: app

type: elixir:1.9

variables:
    env:
        MIX_ENV: 'prod'
        SECRET_KEY_BASE: $PLATFORM_PROJECT_ENTROPY

hooks:
    build: |
        mix local.hex --force
        mix local.rebar --force
        mix do deps.get --only prod, deps.compile, compile

web:
    commands:
        start: mix run --no-halt
    locations:
        /:
            allow: false
            passthru: true
```

Note that there is still an Nginx proxy server sitting in front of your application. If desired, certain paths may be served directly by Nginx without hitting your application (for static files, primarily) or you may route all requests to the Elixir application unconditionally, as in the example above.

## Dependencies

The recommended way to handle Elixir dependencies on Web PaaS is using Hex. 
You can commit a `mix.exs` file in your repository and the system downloads the dependencies in your `deps` section using the build hook above.

```elixir
  defp deps do
    [
	  {:platformshconfig, "~> 0.1.0"}
    ]
  end
```

## Accessing Services

{{% config-reader %}}
[Web PaaS Config Reader library](https://hex.pm/packages/platformshconfig) 
{{% /config-reader%}}

If you are building a Phoenix app for example, it would suffice to add a database to `.platform/services.yaml` and a relationship in `.platform.app.yaml`. Put the lib in your `deps` and, assuming you renamed the `prod.secret.exs` to `releases.exs` per the [Phoenix guide](https://hexdocs.pm/phoenix/releases.html), change:

```elixir
System.get_env("DATABASE_URL")
```

to

```elixir
Platformsh.Config.ecto_dsn_formatter("database")
```

See [Web PaaS Config Reader Documentation](https://hexdocs.pm/platformshconfig/Platformsh.Config.html) for the full API.

### Accessing Services Manually

The services configuration is available in the environment variable `PLATFORM_RELATIONSHIPS`.

Given a relationship defined in `.platform.app.yaml`:


```yaml   
relationships:
    postgresdatabase: "dbpostgres:postgresql"
```  


Assuming you have in `mix.exs` the Poison library to parse JSON:

```elixir
  defp deps do
    [
      {:poison, "~> 3.0"}
    ]
  end
```

And assuming you use `ecto` you could put in `config/config.exs`:

```elixir
relationships = Poison.decode!(Base.decode64!(System.get_env("PLATFORM_RELATIONSHIPS")))
[postgresql_config | _tail] = relationships["postgresdatabase"]

config :my_app, Repo,
  database: postgresql_config["path"],
  username: postgresql_config["username"],
  password: postgresql_config["password"],
  hostname: postgresql_config["host"]
```

and setup Ecto during the deploy hook:

```yaml
deploy: |
    mix do ecto.setup
```
