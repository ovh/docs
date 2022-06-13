---
title: C#/.NET Core
slug: languages-dotnet
section: Languages
order: 4
---

**Last updated 2nd June 2022**


## Objective  

Web PaaS supports deploying .NET applications by allowing developers to define a build process and pass its variables to the .NET Core build environment.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  2.0 |  
|  2.1 |  
|  2.2 |  
|  3.1 |  
|  5.0 |  


To specify a .NET Core container, use the `type` property in your `.platform.app.yaml`.

```yaml   
type: 'dotnet:3.1'
```

## Building the application

To build basic applications in .NET containers, it's enough to use the [`dotnet publish` command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish)
with the default [framework-dependent deployment](https://docs.microsoft.com/en-us/dotnet/core/deploying/#publish-framework-dependent):

```yaml
hooks:
    build: |
        set -xe
        dotnet publish --output "$PLATFORM_OUTPUT_DIR" -p:UseRazorBuildServer=false -p:UseSharedCompilation=false
```

where `PLATFORM_OUTPUT_DIR` is the output directory for compiled languages available at build time.

Typically, .NET Core builds start a collection of build servers, which are helpful for repeated builds.
On Web PaaS, however, if this process isn't disabled,
the build process doesn't finish until the idle timeout is reached.

As a result, you should include `-p` toggles that disable the Razor compiler for dynamic CSHTML pages (`UseRazorBuildServer`)
and the .NET MSBuild compiler (`UseSharedCompilation`).

If you want multiple builds for your application,
make sure to call `dotnet build-server shutdown` at the end of your build hook.

## Running the application

.NET Core applications should be started using the `web.commands.start` directive in `.platform.app.yaml`.
This ensures that the command starts at the right moment and stops gracefully when a redeployment needs to be executed.
Also, should the program terminate for any reason, it's automatically restarted.
Note that the start command _must_ run in the foreground.

Incoming requests are passed to the application using either a TCP (default) or UNIX socket.
The application must use the appropriate environment variable to determine the URI to listen on.
For a TCP socket ([recommended](https://go.microsoft.com/fwlink/?linkid=874850)), the application must listen on `http://127.0.0.1`, using the `PORT` environment variable.

There is an Nginx server sitting in front of your application.
Serving static content via Nginx is recommended, as this allows you to control headers (including cache headers)
and also has marginal performance benefits.

Note that HTTPS is also terminated at the Nginx proxy,
so the `app.UseHttpsRedirection();` line in `Startup.cs` should be removed.


The following example configures an environment to serve the static content folders commonly found in [ASP.NET MVC](https://dotnet.microsoft.com/apps/aspnet/mvc) templates using Nginx,
while routing other traffic to the .NET application.

```yaml
web:
    locations:
        "/":
            root: "wwwroot"
            allow: true
            passthru: true
            rules:
                # Serve these common asset types with customs cache headers.
                \.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$:
                    allow: true
                    expires: 300s

    commands:
        start: "dotnet WebApplication1.dll"
```

You can also route all requests to the application unconditionally:

```yaml
web:
    locations:
        "/":
            allow: false
            passthru: true

    commands:
        start: "dotnet WebApplication1.dll"
```

## Project templates


### ASP.NET Core 

![image](images/aspnet-core.png)

<p>This template deploys the ASP.NET Core framework. It includes a minimalist application skeleton for demonstration, but you are free to alter it as needed.  It includes demonstration-level connections for MariaDB and a Redis cache server.</p>
<p>ASP.NET Core is an open-source and cross-platform .NET framework for building modern cloud-based web applications.</p>
  
#### Features
- .NET 2.2<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/aspnet-core) on GitHub.

