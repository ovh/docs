---
title: Go
slug: languages-go
section: Languages
order: 4
---

**Last updated 26th March 2021**


## Objective  

Web PaaS supports building and deploying applications written in Go using Go modules.  They are compiled during the Build hook phase, and support both committed dependencies and download-on-demand.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  1.11 |  
|  1.12 |  
|  1.13 |  
|  1.14 |  
|  1.15 |  

To specify a Go container, use the `type` property in your `.platform.app.yaml`.


```yaml   
type: 'golang:1.15'
```  


## Deprecated versions

The following container versions are also available.  However, due to their lack of [Go module](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) support and the difficulties in supporting the GOPATH during the Web PaaS build they are not recommended.

- 1.10  
- 1.8  
- 1.9

## Go modules

The recommended way to handle Go dependencies on Web PaaS is using Go module support in Go 1.11 and later.  That allows the build process to use `go build` directly without any extra steps, and you can specify an output executable file of your choice.  (See the examples below.)

## Web PaaS variables

Web PaaS exposes relationships and other configuration as [environment variables](../development-variables).  To make them easier to access you should use the provided [Config Reader library](https://github.com/platformsh/config-reader-go).  Most notably, it allows a program to determine at runtime what HTTP port it should listen on and what the credentials are to access [other services](../configuration-services).

```go
package main

import (
	_ "github.com/go-sql-driver/mysql"
	psh "github.com/platformsh/gohelper"
	"net/http"
)

func main() {

	p, err := psh.NewPlatformInfo()

	if err != nil {
		panic("Not in a Web PaaS Environment.")
	}

	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
		// ...
	})

	http.ListenAndServe(":"+p.Port, nil)
}
```

## Building and running the application

Assuming your `go.mod` and `go.sum` files are present in your repository, the application may be built with a simple `go build` command that will produce a working executable.  You can then start it from the `web.commands.start` directive.  Note that the start command _must_ run in the foreground. Should the program terminate for any reason it will be automatically restarted.

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
            # https://docs.platform.sh/configuration/app/web.html
            allow: false
            passthru: true

disk: 1024
```

Note that there will still be an Nginx proxy server sitting in front of your application.  If desired, certain paths may be served directly by Nginx without hitting your application (for static files, primarily) or you may route all requests to the Go application unconditionally, as in the example above.

## Accessing services

To access various [services](../configuration-services) with Go, see the following examples. The individual service pages have more information on configuring each service.

> [!tabs]      
> Memcached     
>> ``` go     
>> {!> web/web-paas/static/files/fetch/examples/golang/memcached !}  
>> ```     
> MongoDB     
>> ``` golang     
>> {!> web/web-paas/static/files/fetch/examples/golang/mongodb !}  
>> ```     
> MySQL     
>> ``` golang     
>> {!> web/web-paas/static/files/fetch/examples/golang/mysql !}  
>> ```     
> PostgreSQL     
>> ``` golang     
>> {!> web/web-paas/static/files/fetch/examples/golang/postgresql !}  
>> ```     
> RabbitMQ     
>> ``` golang     
>> {!> web/web-paas/static/files/fetch/examples/golang/rabbitmq !}  
>> ```     
> Solr     
>> ``` golang     
>> {!> web/web-paas/static/files/fetch/examples/golang/solr !}  
>> ```     

## Project templates

Web PaaS offers a project templates for Go applications using the structure described above.  It can be used as a starting point or reference for building your own website or web application.


### Hugo  

<p>This template provides a basic Hugo skeleton.  All files are generated at build time, so at runtime only static files need to be served.  The Hugo executable itself is downloaded during the build hook. You can specify the version to use by updating the `.platform.app.yaml` file.  It also includes a minimal template to get you started, but you are free to replace it with your own template.</p>
<p>Hugo is a static site generator written in Go, using Go's native template packages for formatting.</p>
  
#### Features
- Go 1.15<br />  
- Automatic TLS certificates<br />  
- Hugo downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/hugo) on GitHub.

### Basic Go  

<p>This template provides the most basic configuration for running a custom Go project using Go modules.  It demonstrates the Web PaaS `config-reader` library and connecting to a MariaDB instance.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.</p>
<p>Go is a statically typed, compiled language with an emphasis on easy concurrency and network services.</p>
  
#### Features
- Go 1.15<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/golang) on GitHub.

### Beego  

<p>This template demonstrates building the Beego framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Beego is a popular web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/beego) on GitHub.

### Echo  

<p>This template demonstrates building the Echo framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Echo is a lightweight, minimalist web framework written in Go.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/echo) on GitHub.

### Gin  

<p>This template demonstrates building the Gin framework for Web PaaS using Go modules.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Gin is a lightweight web framework written in Go that emphasizes performance.</p>
  
#### Features
- Go 1.14<br />  
- MariaDB 10.4<br />  
- Git module-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gin) on GitHub.

