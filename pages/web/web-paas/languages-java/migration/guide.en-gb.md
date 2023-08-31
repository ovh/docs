---
title: Moving a Java application to {{< vendor/name >}}
slug: migration
section: Java
---

**Last updated 31st August 2023**



## Objective  

It is common to have a Java application that you want to migrate to {{< vendor/name >}}.
{{< vendor/name >}} supports several styles of Java application, such as monolith, microservices, stateful, and stateless.

## Minimum Requirement

To run a Java application at {{< vendor/name >}} you need:

* [A supported Java version](../#supported-versions)
* [A build management tool](../#support-build-automation)
  * [Gradle](https://docs.gradle.org/current/userguide/gradle_wrapper.html)
  * [Maven](https://maven.apache.org/)
  * [Maven Wrapper](https://www.baeldung.com/maven-wrapper)
  * [Ant](https://ant.apache.org/)
* A Git Repository:
  * [GitHub](../../integrations-source/github)
  * [BitBucket](../../integrations-source/bitbucket)
  * [GitLab](../../integrations-source/gitlab)
  * The default Git repository provided by {{< vendor/name >}}

> [!primary]  
> A container application can't be bigger than **8 GB** of memory.
> For more details, see [tuning](./tuning.md).
> 

## Monolith/Single Application

To start a Java application, you need to understand the [{{< vendor/name >}} structure](../../overview/structure.md).
At minimum, you need to configure your [application](../../create-apps/_index.md).
You can also have two [YAML files](../../overview/yaml/_index.md)  if you need:

* [Routes](../../define-routes/_index.md)
* [Services](../../add-services/_index.md)

### Application

```yaml {configFile="app"}
name: app
type: "java:<version>" [1]
disk: 1024
hooks:
    build: [2]
web:
    commands:
        start: [3]
```

1\. [A Java version](../#supported-versions), e,g.: `java:11`

2\. [Hooks define what happens when building the application](../../create-apps/hooks/_index.md). This build process typically generates an executable file such as a uber-jar e.g.: `mvn clean package`

3\. [The commands key defines the command to launch the application](../../create-apps/app-reference.md#web-commands). E.g.:  `java -jar file.jar`

4\. In the start's command needs to receive the port where the application will execute thought the `PORT` environment. That's best when your app follows the port bind principle. E.g.: `java -jar jar --port=$PORT`


> [!primary]  
> 
> Be aware that after the build, it creates a read-only system. You have the [mount option to create a writable folder](../../create-apps/app-reference.md#mounts).
> 
> 

### Route

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: [1]
"https://www.{default}/":
    type: redirect
    to: "https://{default}/"
```

1\. It defines the application will link in the route, e.g.: `"app:http"`


> [!primary]  
> Application instances have a limited amount of memory, the size of which depends on your plan and configuration.
> The largest available is 8 GB.
> A stateless application can be scaled horizontally to multiple application instances using Varnish in a [load balancer](https://community.platform.sh/t/how-to-configure-load-balancer-in-a-single-application/553) configuration.
> 

## Microservices

You have the option to use several languages in microservices. If you're using Java there are several options to aggregate these services into a microservices:

* [Maven Modules](https://maven.apache.org/guides/mini/guide-multiple-modules.html)
* [Gradle Multi-project](https://guides.gradle.org/creating-multi-project-builds/)
* [Git submodules](../../development-submodules)

[{{< vendor/name >}} supports multiple applications](../../create-apps/multi-app/_index.md) and there are two options:

* One application YAML file to each application
* Aggregate all applications in a single file with an `{{< vendor/configfile "apps" >}}` file

| Article                                                      | Content                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Microservices in the cloud, part two](https://platform.sh/blog/2019/microservices-in-the-cloud-part-two/) | [Source](https://github.com/EventosJEspanol/latin-america-micro-profile) |
| [Microservices in the cloud, part one](https://platform.sh/blog/2019/microservices-in-the-cloud-part-one/) | [Source](https://github.com/EventosJEspanol/latin-america-micro-profile) |
| [Multiple Applications](https://community.platform.sh/t/multiple-applications-tomcat/468) | [Source](https://github.com/platformsh-examples/tomcat-multi-app) |
| [Configure multi-applications with `{{< vendor/configfile "apps" >}}`](https://community.platform.sh/t/how-to-configure-multi-applications-with-applications-yaml/552) | [Source](https://github.com/platformsh-examples/tomcat-multi-app-applications) |

> [!primary]  
> 
> As a single application, in the multi-app, you have the option to set load balancer to some or [all applications in the project cluster](https://community.platform.sh/t/how-to-configure-load-balancer-in-a-multiple-applications/554).
> 
> 

## Access to managed services

[{{< vendor/name >}} has services managed by {{< vendor/name >}} itself such as database, cache and search engine](../../../add-services). However, you can use a database or any services such as a transition process, just be aware of the [firewall](../../create-apps/app-reference.md#firewall).

When applications need to access a service, it is important to include the [Relationships key](../../create-apps/app-reference.md#relationships), because. by default an application may not talk to any other container within a project it includes others projects as a microservices architecture.

To connect to a service from your deployed application, you need to pass the relationships information into your application's configuration.
The way to do so varies with the application.
The most common mechanisms are listed below.

### Overwrite

If you are using a framework that follows the [Twelve-Factor App](https://12factor.net/) methodology, particularly the [third point](https://12factor.net/config), you can configure the application directly from environment variables.
Examples of such frameworks include Spring, Eclipse MicroProfile Config, Quarkus, and Micronauts.

The services information is available in the [**PLATFORM_RELATIONSHIPS** environment variable](../../development/variables/use-variables.md#use-provided-variables).
This variable is a base64-encoded JSON object with keys of the relationship name and values of arrays of relationship endpoint definitions.

{{< vendor/name >}} supports the [`jq` tool](https://stedolan.github.io/jq/), which allows to extract information from this JSON.

```shell
export DB_HOST=`echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].host"`
```

| Article                                                      | Source                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Spring Data MongoDB](https://community.platform.sh/t/how-to-overwrite-spring-data-mongodb-variable-to-access-platform-sh-services/528) | [Source](https://github.com/platformsh-examples/java-overwrite-configuration/tree/master/spring-mongodb) |
| [Jakarta EE/MicroProfile Config](https://community.platform.sh/t/how-to-overwrite-configuration-to-jakarta-microprofile-to-access-platform-sh-services/520) | [Source](https://github.com/platformsh-examples/java-overwrite-configuration/tree/master/jakarta-nosql) |
| [Spring Data JPA](https://community.platform.sh/t/how-to-overwrite-spring-data-variable-to-access-platform-sh-services/518) | [Source](https://github.com/platformsh-examples/java-overwrite-configuration/tree/master/spring-jpa) |
| [Payara JPA](https://community.platform.sh/t/how-to-overwrite-variables-to-payara-jpa-access-platform-sh-sql-services/519) | [Source](https://github.com/platformsh-examples/java-overwrite-configuration/blob/master/payara/README.md) |

To reduce the number of lines in the application file and to make it cleaner,
you have the option to move the variable environment to another file: a [`.environment` file](../../development/variables/set-variables.md#set-variables-via-script).

E.g.:

```shell
export DB_HOST=`echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].host"`
export DB_PASSWORD=`echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].password"`
export DB_USER=`echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].username"`
export DB_DATABASE=`echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".database[0].path"`
export JDBC=jdbc:postgresql://${HOST}/${DATABASE}
export JAVA_MEMORY=-Xmx$(jq .info.limits.memory /run/config.json)m
export JAVA_OPTS="$JAVA_MEMORY -XX:+ExitOnOutOfMemoryError"
```

This `.environment` can interact to each application file. E.g.:

```yaml
name: app
type: "java:11"
disk: 1024
hooks:
    build: ./mvnw package -DskipTests -Dquarkus.package.uber-jar=true
relationships:
    database: "db:postgresql"
web:
    commands:
        start: java -jar $JAVA_OPTS $CREDENTIAL -Dquarkus.http.port=$PORT jarfile.jar

```

### Using Java Config Reader

If your framework doesn't support configuration via environment variables, use the [Config Reader](../../development/variables/use-variables.md#access-variables-in-your-app).
This library provides a streamlined way to interact with a {{< vendor/name >}} environment. It offers utility methods to access routes and relationships more cleanly than reading the raw environment variables yourself. [See the maven dependency](https://mvnrepository.com/artifact/sh.platform/config).

```java
import Config;

Config config = new Config();
MySQL database = config.getCredential("database", MySQL::new);
DataSource dataSource = database.get();
```
