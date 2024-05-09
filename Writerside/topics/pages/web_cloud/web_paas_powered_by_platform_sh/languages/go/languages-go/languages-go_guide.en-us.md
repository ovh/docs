---
title: Go
updated: 2023-12-14
---

## Objective

Web PaaS supports building and deploying applications written in Go using Go modules. They're compiled during the Build hook phase, and support both committed dependencies and download-on-demand.

## Supported versions

You can select the major and minor version. Patch versions are applied periodically for bug fixes and the like. When you deploy your app, you always get the latest available patches.

<table>
    <thead>
        <tr>
            <th>Grid</th>
            <th>Dedicated Gen 3</th>
            <th>Dedicated Gen 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.21</td>
            <td>None available</td>
            <td>None available</td>
        </tr>
        <tr>
            <td>1.20</td>
            <td>None available</td>
            <td>None available</td>
        </tr>
    </tbody>
</table>


### Specify the language

To use Go, specify type as your app's `type`.

```yaml 
type: 'golang:<VERSION_NUMBER>'
```

For example:

```yaml 
type: 'golang:1.21'
```

### Deprecated versions

The following versions are deprecated. They're available, but they aren't receiving security updates from upstream and aren't guaranteed to work. They will be removed in the future, so we advise you to migrate to one of the [supported versions](#supported-versions.).

- 1.19
- 1.18
- 1.17
- 1.16
- 1.15
- 1.14
- 1.13
- 1.12
- 1.11
- 1.10
- 1.9
- 1.8

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
            allow: false
            passthru: true

disk: 1024
```

Note that there is still an Nginx proxy server sitting in front of your application.
If desired, certain paths may be served directly by Nginx without hitting your application (for static files, primarily) or you may route all requests to the Go application unconditionally, as in the example above.

## Project templates

### Beego 

![image](beego.png)

<p>This template demonstrates building the Beego framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Beego is a popular web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/beego) on GitHub.

### Echo 

![image](BasicGo.png)

<p>This template demonstrates building the Echo framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Echo is a lightweight, minimalist web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/echo) on GitHub.

### Gin 

![image](gin.png)

<p>This template demonstrates building the Gin framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Gin is a lightweight web framework written in Go that emphasizes performance.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gin) on GitHub.
