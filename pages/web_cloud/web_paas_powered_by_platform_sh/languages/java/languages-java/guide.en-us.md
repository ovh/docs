---
title: Java
updated: 2022-06-02
---



## Objective  

Java is a general-purpose programming language, and one of the most popular in the world today. Web PaaS supports Java runtimes that can be used with build management tools such as Gradle, Maven, and Ant.

## Supported versions

### OpenJDK versions:

| **Grid** | 
|----------------------------------|  
|  8 |  
|  11 |  
|  12 |  
|  13 |  
|  14 |  

To specify a Java container, use the `type` property in your `.platform.app.yaml`.

```yaml   
type: 'java:14'
``` 

## Support libraries

While it's possible to read the environment directly from your application, it's generally easier and more robust to use the [`platformsh/config-reader`](https://github.com/platformsh/config-reader-java) which handles decoding of service credential information for you.

## Support build automation

Web PaaS supports the most common project management tools in the Java ecosystem, including:

* [Gradle](https://gradle.org/)
* [Maven](https://maven.apache.org/)
* [Ant](https://ant.apache.org/)

## Other JVM languages

It’s worth remembering that the JVM by its specification [doesn't read Java code](https://docs.oracle.com/javase/specs/jvms/se8/html/index.html), but bytecode. So within the JVM, it’s possible to [run several languages](https://en.wikipedia.org/wiki/List_of_JVM_languages). Web PaaS supports several of them, such as Kotlin, Groovy, and Scala, so long as that language works with any build automation that Web PaaS supports.

| Article                                                      | Link                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Kotlin and Spring](https://platform.sh/blog/2019/ready-to-have-fun-try-kotlin-and-spring/) | [Source](https://github.com/platformsh-templates/spring-kotlin) |
| [Scala and Spring](https://dzone.com/articles/spring-scala-cloud-psh) | [Source](https://github.com/platformsh-examples/scala)       |
| [Groovy and Spring](https://dzone.com/articles/spring-groovy-cloud-psh) | [Source](https://github.com/platformsh-examples/groovy)      |

## Project templates


### Quarkus 

![image](images/quarkus.png)

<p>QuarkusIO, the Supersonic Subatomic Java, promises to deliver small artifacts, extremely fast boot time, and lower time-to-first-request.</p>
<p>A sample Hello World application is provided as a starting point. It includes a plain REST application.  To use Quarkus with services see the example project (https://github.com/platformsh-examples/quarkus).</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/quarkus) on GitHub.

### Jetty 

![image](images/jetty.jpeg)

<p>This template provides an Eclipse Jetty Web server and javax.servlet container, plus support for HTTP/2, WebSocket, OSGi, JMX, JNDI, JAAS and many other integrations.  Jetty itself is downloaded on the fly in the build hook based on the provided `pom.xml` file.</p>
<p>Eclipse Jetty is used in a wide variety of projects and products, both in development and production. Jetty can be easily embedded in devices, tools, frameworks, application servers, and clusters.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/jetty) on GitHub.

### Micronaut 

![image](images/micronaut.png)

<p>This project provides a starter kit for Micronaut projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Micronaut is a modern, JVM-based, full-stack framework for building modular, easily testable microservice and serverless applications.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/micronaut) on GitHub.

### KumuluzEE 

![image](images/kumuluzee.png)

<p>This project provides a starter kit for KumuluzEE Eclipse MicroProfile projects hosted on Web PaaS. It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>KumuluzEE is a lightweight framework for developing microservices using standard Java, Java EE / Jakarta EE technologies and migrating existing Java applications to microservices. KumuluzEE packages microservices as standalone JARs. KumuluzEE microservices are lightweight and optimized for size and start-up time.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-kumuluzee) on GitHub.

### Open Liberty 

![image](images/openliberty.png)

<p>This project provides a starter kit for Open Liberty Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Open Liberty is a highly composable, fast to start, dynamic application server runtime environment.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-openliberty) on GitHub.

### Spring Boot, Gradle, Mysql 

![image](images/springgradle.png)

<p>This template demonstrates building a Spring Boot application. It uses Gradle to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- Oracle MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Gradle-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-boot-gradle-mysql) on GitHub.

### Spring Boot, Maven, Mysql 

![image](images/springgradle.png)

<p>This template demonstrates building a Spring Boot application. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- Oracle MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-boot-maven-mysql) on GitHub.

### Payara Micro 

![image](images/payaramicro.png)

<p>This project provides a starter kit for Payara Micro projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Payara Micro is an Open Source, lightweight Java EE (Jakarta EE) microservices deployments.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-payara) on GitHub.

### Apache Tomcat 

![image](images/Tomcat.png)

<p>This project provides a starter kit for Apache Tomcat hosted on Web PaaS.  Tomcat itself is downloaded on the fly in the build hook based on the provided `pom.xml` file.</p>
<p>Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/tomcat) on GitHub.

### xwiki 

![image](images/xwiki.png)

<p>This project provides a starter kit for XWiki projects hosted on Web PaaS.  It includes and automatically configures a PostgreSQL database for storage.  XWiki itself is downloaded during the build step.  It is run using Jetty.</p>
<p>XWiki is a free wiki software platform written in Java with a design emphasis on extensibility. XWiki is an enterprise wiki. It includes WYSIWYG editing, OpenDocument based document import/export, semantic annotations and tagging, and advanced permissions management.</p>
  
#### Features
- Java 11<br />  
- PostgreSQL 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/xwiki) on GitHub.

### Jenkins 

![image](images/jenkins.png)

<p>This project provides a starter kit for Jenkins projects hosted on Web PaaS.  The Jenkins `.war` file is downloaded during the build hook and not included in the repository.</p>
<p>Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Jenkins downloaded on the fly during build<br />  
 
[View the repository](https://github.com/platformsh-templates/jenkins) on GitHub.

### Apache TomEE 

![image](images/tomee.png)

<p>This project provides a starter kit for Apache TomEE Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Apache TomEE is the Eclipse MicroProfile  implementation that uses several Apache Project flavors such as Apache Tomcat, Apache OpenWebBeans and so on.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-tomee) on GitHub.

### Wildfly 

![image](images/wildfly.png)

<p>This project provides a starter kit for Wildfly Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>WildFly is a flexible, lightweight, managed application runtime that helps you build amazing applications.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-wildfly) on GitHub.

### Thorntail 

![image](images/Thorntail.png)

<p>This project provides a starter kit for Thorntail Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Thorntail offers an innovative approach to packaging and running Java EE applications by packaging them with just enough of the server runtime to "java -jar" your application. It's MicroProfile compatible, too.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-thorntail) on GitHub.

### Spring, Kotlin, Maven 

![image](images/springkotlin.png)

<p>This template demonstrates building a Spring MVC application in the Kotlin language. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>>A sample Hello World application is provided as a starting point.  It includes an Oracle MySQL database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables.</p>
  
#### Features
- Java 11<br />  
- MySQL 8.0<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-kotlin) on GitHub.

### Spring MVC, Maven, MongoDB 

![image](images/springgradle.png)

<p>This template demonstrates building a Spring MVC application. It uses Maven to build the application and deploy it to Web PaaS.</p>
<p>A sample Hello World application is provided as a starting point.  It includes a MongoDB database, and the sample application shows how to make the database connection. The example code also demonstrates how to access the Web PaaS environment variables using the Web PaaS Config Reader library.</p>
  
#### Features
- Java 11<br />  
- MongoDB 3.6<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/spring-mvc-maven-mongodb) on GitHub.

### Helidon 

![image](images/helidon.png)

<p>This project provides a starter kit for Helidon Eclipse MicroProfile projects hosted on Web PaaS.  It includes a minimalist application skeleton that is intended for you to use as a starting point and modify for your own needs, along with the Web PaaS Config Reader to simplify accessing Web PaaS environment variables.</p>
<p>Helidon is a collection of Java libraries for writing microservices that run on a fast web core powered by Netty.</p>
<p>Helidon is designed to be simple to use, with tooling and examples to get you going quickly. Since Helidon is just a collection of libraries running on a fast Netty core, there is no extra overhead or bloat.</p>
  
#### Features
- Java 11<br />  
- Automatic TLS certificates<br />  
- Maven-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/microprofile-helidon) on GitHub.

