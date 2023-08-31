---
title: Java
slug: languages-java
section: Languages
order: 4
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

## Supported versions

{{% major-minor-versions-note %}}

### OpenJDK versions:

| Grid and {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|----------------------------------------|------------------------------ |
| - 17  
- 11  
- 8 |

These versions refer to the headless packages of OpenJDK.
To save space and reduce potential vulnerabilities, they don't contain GUI classes, which can't be used on the server.

{{% language-specification type="java" display_name="Java" %}}

## Support build automation

{{< vendor/name >}} supports the most common project management tools in the Java ecosystem, including:

* [Gradle](https://gradle.org/)
* [Maven](https://maven.apache.org/)
* [Ant](https://ant.apache.org/)

### Manage Maven versions

Java containers come with a version of Maven already installed.
You may need to use a specific different version to manage your project.
If the version you need differs from the version on your container, you can install the specific version that you need.

Add something like the following to your [app configuration](../../create-apps/_index.md):

```yaml {configFile="app"}
variables:
    env:
        MAVEN_VERSION: {{< variable "DESIRED_VERSION_NUMBER" "3.8.6" >}}

hooks:
    build: |
      curl -sfLO "https://dlcdn.apache.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz"
      tar -zxf apache-maven-$MAVEN_VERSION-bin.tar.gz
      export PATH="$PWD/apache-maven-$MAVEN_VERSION/bin:$PATH"
      mvn --version
      mvn clean package
```

## Other JVM languages

It’s worth remembering that the JVM by its specification [doesn't read Java code](https://docs.oracle.com/javase/specs/jvms/se8/html/index.html), but bytecode. So within the JVM, it’s possible to [run several languages](https://en.wikipedia.org/wiki/List_of_JVM_languages). {{< vendor/name >}}supports several of them, such as Kotlin, Groovy, and Scala, so long as that language works with any build automation that {{< vendor/name >}} supports.

| Article                                                      | Link                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Kotlin and Spring](https://platform.sh/blog/2019/ready-to-have-fun-try-kotlin-and-spring/) | [Source](https://github.com/platformsh-templates/spring-kotlin) |
| [Scala and Spring](https://dzone.com/articles/spring-scala-cloud-psh) | [Source](https://github.com/platformsh-examples/scala)       |
| [Groovy and Spring](https://dzone.com/articles/spring-groovy-cloud-psh) | [Source](https://github.com/platformsh-examples/groovy)      |

## Project templates


