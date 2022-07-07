---
title: Project templates
slug: development-templates
section: Development
order: 5
---

**Last updated 11th May 2021**


## Objective  

You can initialize your projects using any of our pre-made template repositories.

You can click the **Deploy on Web PaaS** button to launch a new project using a template, or you can visit and clone the repository and push to an empty project you have created using the CLI or in the management console.

## C#/.NET Core

View the [C#/.NET Core documentation](../languages-dotnet).


### ASP.NET Core  

<p>This template deploys the ASP.NET Core framework. It includes a minimalist application skeleton for demonstration, but you are free to alter it as needed.  It includes demonstration-level connections for MariaDB and a Redis cache server.</p>
<p>ASP.NET Core is an open-source and cross-platform .NET framework for building modern cloud-based web applications.</p>
  
#### Features
- .NET 2.2<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/aspnet-core) on GitHub.


## Go

View the [Go documentation](../languages-go).


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


## Java

View the [Java documentation](../languages-java).


### Quarkus  

<p>QuarkusIO, the Supersonic Subatomic Java, promises to deliver small artifacts, extremely fast boot time, and lower time-to-first-request.</p>
<p>A sample Hello World application is provided as a starting point. It includes a plain REST application.  To use Quarkus with services see the example project (https://github.com/platformsh-examples/quarkus).</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/quarkus) on GitHub.

### Payara Micro  

<p>This project provides a starter kit for Payara Micro projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Payara Micro is an Open Source, lightweight Java EE (Jakarta EE) microservices deployments.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-payara) on GitHub.

### Spring MVC, Maven, MongoDB  

<p>This template demonstrates building a Spring MVC application. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes a MongoDB database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- MongoDB 3.6<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-mvc-maven-mongodb) on GitHub.

### Spring Boot, Gradle, Mysql  

<p>This template demonstrates building a Spring Boot application. It uses Gradle to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- Oracle MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Gradle-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-boot-gradle-mysql) on GitHub.

### Micronaut  

<p>This project provides a starter kit for Micronaut projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Micronaut is a modern, JVM-based, full-stack framework for building modular, easily testable microservice and serverless applications.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/micronaut) on GitHub.

### Jetty  

<p>This template provides an Eclipse Jetty Web server and javax.servlet container, plus support for HTTP/2, WebSocket, OSGi, JMX, JNDI, JAAS and many other integrations.  Jetty itself is downloaded on the fly in the build hook based on the provided `pom.xml` file.</p>
<p>Eclipse Jetty is used in a wide variety of projects and products, both in development and production. Jetty can be easily embedded in devices, tools, frameworks, application servers, and clusters.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/jetty) on GitHub.

### Apache Tomcat  

<p>This project provides a starter kit for Apache Tomcat hosted on Web PaaS.  Tomcat itself is downloaded on the fly in the build hook based on the provided `pom.xml` file.</p>
<p>Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/tomcat) on GitHub.

### Spring, Kotlin, Maven  

<p>This template demonstrates building a Spring MVC application in the Kotlin language. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables.</p>
  
#### Features
- Java 11<br />  
- MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-kotlin) on GitHub.

### Wildfly  

<p>This project provides a starter kit for Wildfly Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>WildFly is a flexible, lightweight, managed application runtime that helps you build amazing applications.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-wildfly) on GitHub.

### Spring Boot, Maven, Mysql  

<p>This template demonstrates building a Spring Boot application. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- Oracle MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-boot-maven-mysql) on GitHub.

### Jenkins  

<p>This project provides a starter kit for Jenkins projects hosted on Web PaaS.  The Jenkins `.war` file is downloaded during the build hook and not included in the repository.</p>
<p>Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Jenkins downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/jenkins) on GitHub.

### Thorntail  

<p>This project provides a starter kit for Thorntail Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Thorntail offers an innovative approach to packaging and running Java EE applications by packaging them with just enough of the server runtime to "java -jar" your application. It's MicroProfile compatible, too.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-thorntail) on GitHub.

### Helidon  

<p>This project provides a starter kit for Helidon Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Helidon is a collection of Java libraries for writing microservices that run on a fast web core powered by Netty.</p>
<p>Helidon is designed to be simple to use, with tooling and examples to get you going quickly. Since Helidon is just a collection of libraries running on a fast Netty core, there is no extra overhead or bloat.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-helidon) on GitHub.

### xwiki  

<p>This project provides a starter kit for XWiki projects hosted on Web PaaS.  It includes and automatically configures a PostgreSQL database for storage.  XWiki itself is downloaded during the build step.  It is run using Jetty.</p>
<p>XWiki is a free wiki software platform written in Java with a design emphasis on extensibility. XWiki is an enterprise wiki. It includes WYSIWYG editing, OpenDocument based document import/export, semantic annotations and tagging, and advanced permissions management.</p>
  
#### Features
- Java 11<br />  
- PostgreSQL 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/xwiki) on GitHub.

### Open Liberty  

<p>This project provides a starter kit for Open Liberty Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Open Liberty is a highly composable, fast to start, dynamic application server runtime environment.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-openliberty) on GitHub.

### Apache TomEE  

<p>This project provides a starter kit for Apache TomEE Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Apache TomEE is the Eclipse MicroProfile  implementation that uses several Apache Project flavors such as Apache Tomcat, Apache OpenWebBeans and so on.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-tomee) on GitHub.

### KumuluzEE  

<p>This project provides a starter kit for KumuluzEE Eclipse MicroProfile projects hosted on Web PaaS. It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>KumuluzEE is a lightweight framework for developing microservices using standard Java, Java EE / Jakarta EE technologies and migrating existing Java applications to microservices. KumuluzEE packages microservices as standalone JARs. KumuluzEE microservices are lightweight and optimized for size and start-up time.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-kumuluzee) on GitHub.


## Lisp

View the [Lisp documentation](../languages-lisp).


### Lisp Hunchentoot  

<p>This template provides the most basic configuration for running a Lisp Huchentoot web server for Web PaaS.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.  It is meant to be a starting point and can be modified to fit your own needs.</p>
<p>This template builds a simple Lisp Hunchentoot web server for Web PaaS.  It includes a minimalist application  for demonstration, but you are free to alter it as needed.</p>
<p>Hunchentoot is a web server written in Common Lisp and at the same time a toolkit for building dynamic websites.</p>
  
#### Features
- Lisp 1.5<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/lisp) on GitHub.


## Node.js

View the [Node.js documentation](../languages-nodejs).


### strapi  

<p>This template builds a Strapi backend for Web PaaS, which can be used to quickly create an API that can be served by itself or as a Headless CMS data source for another frontend application in the same project. This repository does not include a frontend application, but you can add one of your choice and access Strapi by defining it in a relationship in your frontend's <code>.platform.app.yaml</code> file.</p>
<p>Strapi is a Headless CMS framework written in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
- OpenAPI spec generation<br />  
- Automatic public API documentation<br />  
 
[View the repository](https://github.com/platformsh-templates/strapi) on GitHub.

### Gatsby with Strapi  

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and Strapi for its backend. The `gatsby-source-strapi` source plugin is used to pull data from Strapi during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that there are several setup steps required after the first deploy to create your first content types and access permissions in Strapi. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps, and Strapi is a Headless CMS framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-strapi) on GitHub.

### Probot  

<p>This template builds a simple GitHub App using [Probot](https://github.com/probot/probot) for Node.js.  It includes a minimalist skeleton GitHub app that demonstrates a basic GitHub connection response.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that there are several setup steps required after first deploy to connect your project to GitHub.  See the included README file for details.</p>
<p>Probot is a framework for building GitHub Apps in Node.js.</p>
  
#### Features
- Node.js 12<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/probot) on GitHub.

### Gatsby with Drupal  

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Drupal installation and included a few articles, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- Node.js 12<br />  
- PHP 7.4<br/>  
- MariaDB 10.4<br/>  
- Redis 5.0<br/>  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Drupal<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-drupal) on GitHub.

### Gatsby with WordPress  

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and WordPress for its backend. The `gatsby-source-wordpress` source plugin is used to pull data from WordPress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the WordPress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for WordPress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Gatsby  

<p>This template builds a simple application using Gatsby.  Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.  The website is statically generated by a Node.js application during the build step, and then served statically at runtime.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby) on GitHub.

### Express  

<p>This template demonstrates building the Express framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Express is a minimalist web framework written in Node.js.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/express) on GitHub.

### NuxtJS  

<p>This template builds a simple application using the NuxtJS web framework that can be used as a starting point.</p>
<p>NuxtJS is an open-source web framework based on Vue.js.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nuxtjs) on GitHub.

### Koa  

<p>This template demonstrates building the Koa framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Koa is a lightweight web microframework for Node.js.</p>
  
#### Features
- Node.js 10<br />  
- MariaDB 10.2<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/koa) on GitHub.

### Node.js  

<p>This template builds a simple application using the Node.js built-in `http` web server. It includes a minimalist application skeleton that demonstrates how to connect to the included MariaDB server, but you are free to alter it as needed.</p>
<p>Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
  
#### Features
- Node.js 14<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nodejs) on GitHub.

### Next.js  

<p>This template builds a simple application using the Next.js web framework. It includes a minimal application skeleton that demonstrates how to set up an optimized build using Next.js and Yarn, as well as how to begin defining individual pages (such as the <code>/api/hello</code>) endpoint that comes pre-defined with this template.</p>
<p>Next.js is an open-source web framework written for Javascript.</p>
  
#### Features
- Node.js 14<br />  
- Automatic TLS certificates<br />  
- yarn-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextjs) on GitHub.


## PHP

View the [PHP documentation](../languages-php).


### Gatsby with Drupal  

<p>This template builds a two-application project to deploy the Headless CMS pattern using Gatsby as its frontend and Drupal for its backend. The <code>gatsby-source-drupal</code> source plugin is used to pull data from Drupal during the <code>post_deploy</code> hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the Drupal installation and included a few articles, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- Node.js 12<br />  
- PHP 7.4<br/>  
- MariaDB 10.4<br/>  
- Redis 5.0<br/>  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for Drupal<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-drupal) on GitHub.

### Gatsby with WordPress  

<p>This template builds a two application project to deploy the Headless CMS pattern using Gatsby as its frontend and WordPress for its backend. The `gatsby-source-wordpress` source plugin is used to pull data from WordPress during the `post_deploy` hook into the Gatsby Data Layer and build the frontend site. Gatsby utilizes the Web PaaS Configuration Reader library for Node.js to define the backend data source in its configuration. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Note that after you have completed the WordPress installation, the project will require a redeploy to build and deploy Gatsby for the first time. See the included README's post-install section for details.</p>
<p>Gatsby is a free and open source framework based on React that helps developers build statically-generated websites and apps, and WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- Node.js 14<br />  
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- npm-based build for Gatsby<br />  
- Composer-based build for WordPress<br />  
- Multi-app configuration<br />  
- Delayed SSG build (post deploy hook)<br />  
 
[View the repository](https://github.com/platformsh-templates/gatsby-wordpress) on GitHub.

### Drupal 9  

<p>This template builds Drupal 9 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal9) on GitHub.

### Drupal 8 Multisite  

<p>This template builds Drupal 8 in a multisite configuration using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>It also includes instructions and a script to help with setting up additional multisite instances, although depending on your particular needs it may require some customization.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework capable of hosting multiple sites on a single code base.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Pre-configured for multiple sites<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-multisite) on GitHub.

### GovCMS 8  

<p>This template builds the Australian government's GovCMS Drupal 8 distribution using the Drupal Composer project for better flexibility.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>GovCMS is a Drupal distribution built for the Australian government, and includes configuration optimized for managing government websites.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-govcms8) on GitHub.

### Drupal 8  

<p>This template builds Drupal 8 using the "Drupal Recommended" Composer project.  It is pre-configured to use MariaDB and Redis for caching.  The Drupal installer will skip asking for database credentials as they are already provided.</p>
<p>Drupal is a flexible and extensible PHP-based CMS framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8) on GitHub.

### Backdrop  

<p>This template deploys a Backdrop CMS site, with the entire site committed to Git.  It comes configured for MariaDB, the most popular database used with Backdrop.  It supports a quick web installation to configure the site.</p>
<p>Backdrop is a PHP-based CMS, originally forked from Drupal 7.</p>
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Drush included<br />  
- Automatic TLS certificates<br />  
 
[View the repository](https://github.com/platformsh-templates/backdrop) on GitHub.

### Magento 2 Community Edition  

<p>This template builds Magento 2 CE on Web PaaS.  It includes additional scripts to customize Magento to run effectively in a build-and-deploy environment.  A MariaDB database and Redis cache server come pre-configured and work out of the box.  The installer has been modified to not ask for database information.  Background workers are run using a worker container rather than via cron.</p>
<p>Magento is a fully integrated ecommerce system and web store written in PHP.  This is the Open Source version.</p>
  
#### Features
- PHP 7.2<br />  
- MariaDB 10.2<br />  
- Redis 3.2<br />  
- Dedicated worker instance for background processing<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/magento2ce) on GitHub.

### Symfony 4  

<p>This template provides a basic Symfony 4 skeleton.  It comes pre-configured to use a MariaDB database using a Symfony-specific bridge library that runs during Composer autoload.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
<p>New projects should be built using Symfony 5, but this project is a reference for existing migrating sites.  Version 4 is the LTS support version.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony4) on GitHub.

### Pimcore  

<p>This template builds Pimcore 5 on Web PaaS.  It comes pre-installed with a MariaDB database connecting through Doctrine and Redis for caching via a custom configuration file.  It will self-install on the first deploy.</p>
<p>Pimcore is a Symfony-based Digital Experience Platform.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pimcore) on GitHub.

### TYPO3  

<p>This template builds the TYPO3 CMS for Web PaaS.  It comes pre-configured with MariaDB for storage and Redis for caching.  A command line installer will automatically initialize the site on first deploy.</p>
<p>TYPO3 is a PHP-based Content Management System</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/typo3) on GitHub.

### Symfony 3  

<p>This template provides a basic Symfony 3 skeleton.  It comes pre-configured to use a MariaDB database via a custom config file.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
<p>New projects should be built using Symfony 5, but this project is a reference for existing migrating sites.  Version 3 is the LTS support version.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.2<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony3) on GitHub.

### Symfony 5  

<p>This template provides a basic Symfony 5 skeleton.  It comes pre-configured to use a MariaDB database using a Symfony-specific bridge library that runs during Composer autoload.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>It is configured for Production mode by default, so the usual Symfony "welcome" page will not appear.  Instead, you will see a 404 page after the site first deploys, which is normal.  You may switch it into dev mode via `.platform.app.yaml` if desired.</p>
<p>Symfony is a high-performance loosely-coupled PHP web development framework.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/symfony5) on GitHub.

### Opigno  

<p>This template builds the Opigno Drupal 8 distribution using the [Drupal Composer project](https://github.com/drupal-composer/drupal-project) for better flexibility.  It also includes configuration to use Redis for caching, although that must be enabled post-install in `.platform.app.yaml`.</p>
<p>Opigno is a Learning Management system built as a Drupal distribution.</p>
  
#### Features
- PHP 7.3<br />  
- MariaDB 10.4<br />  
- Redis 6<br />  
- Drush and Drupal Console included<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/drupal8-opigno) on GitHub.

### Nextcloud  

<p>This template builds Nextcloud on Web PaaS.  Nextcloud itself is downloaded on the fly during the build step, and pre-configured for use with MariaDB and Redis.  Add-on applications can be provided in a separate directory and will be merged into Nextcloud automatically during build.  (Self-update through the web interface is not supported.)</p>
<p>The admin user is created automatically during the first deploy, and its name and password will be available in the deploy log.  Be sure to check for it there so you can log in.</p>
<p>Nextcloud is a PHP-based groupware server with installable apps, file synchronization, and federated storage.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Nextcloud downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/nextcloud) on GitHub.

### Mautic  

<p>This template provides a basic Mautic installation.  It includes MariaDB for storage, which will be auto-selected during the installer.  It also includes a RabbitMQ queue server that may be enabled manually post-install.</p>
<p>Mautic is an Open Source marketing automation tool built on Symfony. </p>
  
#### Features
- PHP 7.2<br />  
- MariaDB 10.4<br />  
- RabbitMQ 3.7<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/mautic) on GitHub.

### Laravel  

<p>This template provides a basic Laravel skeleton.  It comes pre-configured to use a MariaDB database and Redis for caching and sessions using a Laravel-specific bridge library that runs during Composer autoload.  The public files symlink is also replaced with a custom web path definition so it is unnecessary.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Laravel is an opinionated, integrated rapid-application-development framework for PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/laravel) on GitHub.

### WordPress (Composer)  

<p>This template builds WordPress on Web PaaS using the <a href="https://github.com/johnpbloch/wordpress"><code>johnbolch/wordpress</code></a> "Composer Fork" of WordPress.  Plugins and themes should be managed with Composer exclusively.  A custom configuration file is provided that runs on Web PaaS to automatically configure the database, so the installer will not ask you for database credentials.  For local-only configuration you can use a `wp-config-local.php` file that gets excluded from Git.</p>
<p>WordPress is a blogging and lightweight CMS written in PHP.</p>
  
#### Features
- PHP 7.4<br />  
- MariaDB 10.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wordpress-composer) on GitHub.

### Sculpin  

<p>This template provides a basic Sculpin skeleton.  All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Sculpin is a static site generator written in PHP and using the Twig templating engine.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/sculpin) on GitHub.

### Basic PHP  

<p>This template provides the most basic configuration for running a custom PHP project built with Composer.  It includes but doesn't make use of the Web PaaS `config-reader` library.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.</p>
<p>PHP is a high-performance scripting language especially well suited to web development.</p>
  
#### Features
- PHP 7.4<br />  
- Automatic TLS certificates<br />  
- Composer-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/php) on GitHub.


## Python

View the [Python documentation](../languages-python).


### Django 2  

<p>This template deploys the Django 2 application framework on Web PaaS, using the gunicorn application runner.  It also includes a PostgreSQL database connection pre-configured.</p>
<p>New projects should be built using Django 3, but this project is a reference for existing migrating sites.  Version 2 is in legacy support.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django2) on GitHub.

### Python 3 running UWSGI  

<p>This template provides the most basic configuration for running a custom Python 3.7 project.  It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.  The application runs through the UWSGI runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3-uwsgi) on GitHub.

### Wagtail  

<p>This template builds the Wagtail CMS on Web PaaS, using the gunicorn application runner.  It includes a PostgreSQL database that is configured automatically, and a basic demonstration app that shows how to use it.  It is intended for you to use as a starting point and modify for your own needs.  You will need to run the command line installation process by logging into the project over SSH after the first deploy.</p>
<p>Wagtail is a web CMS built using the Django framework for Python.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wagtail) on GitHub.

### Flask  

<p>This template demonstrates building the Flask framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching.  The application starts as a bare Python process with no separate runner.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Flask is a lightweight web microframework for Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/flask) on GitHub.

### Django 3  

<p>This template deploys the Django 3 application framework on Web PaaS, using the gunicorn application runner.  It also includes a PostgreSQL database connection pre-configured.</p>
<p>Django is a Python-based web application framework with a built-in ORM.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django3) on GitHub.

### Basic Python 3  

<p>This template provides the most basic configuration for running a custom Python 3.7 project.  It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.  The application starts as a bare Python process with no separate runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3) on GitHub.

### Pyramid  

<p>This template builds Pyramid on Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Pyramid is a web framework written in Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pyramid) on GitHub.

### Pelican  

<p>This template provides a basic Pelican skeleton.  Only content files need to be committed, as Pelican itself is downloaded at build time via the Pipfile.  All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Pelican is a static site generator written in Python and using Jinja for templating.</p>
  
#### Features
- Python 3.8<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pelican) on GitHub.


## Ruby

View the [Ruby documentation](../languages-ruby).


### Ruby on Rails  

<p>This template builds Ruby on Rails 5 on Web PaaS.  It includes a bridge library that will auto-configure most databases and services, and ships with PostgreSQL out of the box.  Otherwise it is the same as the result of running "rails new".</p>
<p>Rails is an opinionated rapid application development framework written in Ruby.</p>
  
#### Features
- Ruby 2.6<br />  
- PostgreSQL 11<br />  
- Automatic TLS certificates<br />  
- Bundler-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/rails) on GitHub.

