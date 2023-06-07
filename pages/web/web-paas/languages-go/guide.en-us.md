---
title: Go
updated: 2022-06-02
---

**Last updated 2nd June 2022**


## Objective  

Web PaaS supports building and deploying applications written in Go using Go modules. They're compiled during the Build hook phase, and support both committed dependencies and download-on-demand.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  1.16 |  
|  1.17 |  
|  1.18 |  

To specify a Go container, use the `type` property in your `.platform.app.yaml`.
```yaml   
type: 'golang:1.18'
``` 

## Deprecated versions
- 1.8  
- 1.9  
- 1.10  
- 1.11  
- 1.12  
- 1.13  
- 1.14  
- 1.15

## Go modules

The recommended way to handle Go dependencies on Web PaaS is using Go module support in Go 1.11 and later. That allows the build process to use `go build` directly without any extra steps, and you can specify an output executable file of your choice. (See the examples below.)

## Building and running the application

Assuming your `go.mod` and `go.sum` files are present in your repository, your application can be built with the command `go build`, to produce a working executable. You can then start it from the `web.commands.start` directive. Note that the start command _must_ run in the foreground. If the program terminates for any reason it is automatically restarted.

The following basic `.platform.app.yaml` file is sufficient to run most Go applications.

```yaml
name: app

type: golang:1.14

hooks:
    build: |
        # Modify this line if you want to build differently or use an alternate name for your executable.
        go build -o bin/app

web:
    upstream:
        socket_family: tcp
        protocol: http

    commands:
        # If you change the build output in the build hook above, update this line as well.
        start: ./bin/app

    locations:
        /:
            # Route all requests to the Go app, unconditionally.
            # If you want some files served directly by the web server without hitting Go, see
            # /pages/web/web-paas/configuration-app/web
            allow: false
            passthru: true

disk: 1024
```

Note that there is still an Nginx proxy server sitting in front of your application. If desired, certain paths may be served directly by Nginx without hitting your application (for static files, primarily) or you may route all requests to the Go application unconditionally, as in the example above.

## Project templates


### Hugo 

![image](images/hugo.png)

<p>This template provides a basic Hugo skeleton.  All files are generated at build time, so at runtime only static files need to be served.  The Hugo executable itself is downloaded during the build hook. You can specify the version to use by updating the `.platform.app.yaml` file.  It also includes a minimal template to get you started, but you are free to replace it with your own template.</p>
<p>Hugo is a static site generator written in Go, using Go's native template packages for formatting.</p>
  
#### Features
- Go 1.15<br />  
- Automatic TLS certificates<br />  
- Hugo downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/hugo) on GitHub.

### Basic Go 

![image](images/BasicGo.png)

<p>This template provides the most basic configuration for running a custom Go project using Go modules.  It demonstrates the Web PaaS `config-reader` library and connecting to a MariaDB instance.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.</p>
<p>Go is a statically typed, compiled language with an emphasis on easy concurrency and network services.</p>
  
#### Features
- Go 1.15<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/golang) on GitHub.

### Echo 

![image](images/BasicGo.png)

<p>This template demonstrates building the Echo framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Echo is a lightweight, minimalist web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/echo) on GitHub.

### Beego 

![image](images/beego.png)

<p>This template demonstrates building the Beego framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Beego is a popular web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/beego) on GitHub.

### Gin 

![image](images/gin.png)

<p>This template demonstrates building the Gin framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Gin is a lightweight web framework written in Go that emphasizes performance.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gin) on GitHub.

