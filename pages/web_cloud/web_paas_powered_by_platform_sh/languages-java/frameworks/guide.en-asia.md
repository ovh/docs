---
title: Java featured frameworks
updated: 2022-06-02
---

**Last updated 2nd June 2022**


## Hibernate

[Hibernate ORM](https://hibernate.org/) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate handles object-relational impedance mismatch problems by replacing direct, persistent database accesses with high-level object handling functions.

* [Hibernate Best Practices](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks-hibernate)

## Jakarta EE/ Eclipse MicroProfile

[Eclipse MicroProfile](https://microprofile.io/) is a semi-new community dedicated to optimizing the Enterprise Java mission for microservice-based architectures. Now Enterprise Java has been standardized under the Eclipse Foundation as [Jakarta EE](https://jakarta.ee/).

* [Jakarta EE/ Eclipse MicroProfile Best Practices](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks-jakarta)

### Templates

* [Apache TomEE](https://github.com/platformsh-templates/microprofile-tomee)
* [Thorntail](https://github.com/platformsh-templates/microprofile-thorntail)
* [KumuluzEE](https://github.com/platformsh-templates/microprofile-kumuluzee)
* [Helidon](https://github.com/platformsh-templates/microprofile-helidon)
* [Open Liberty](https://github.com/platformsh-templates/microprofile-openliberty)
* [WildFly](https://github.com/platformsh-templates/microprofile-wildfly/)

## Payara

[Payara](https://www.payara.fish/) Micro is an Open Source, lightweight Java EE (Jakarta EE) microservices deployments.

### Templates

* [Payara Micro](https://github.com/platformsh-templates/microprofile-payara)

### References

| Article                                                      |                                                        Links |
| ------------------------------------------------------------ | -----------------------------------------------------------: |
| [Search](https://www.payara.fish/page/payara-platform-and-paas-with-platform-sh/) | [Source](https://github.com/platformsh-examples/payara-micro/tree/master/search) |
| [NoSQL](https://dzone.com/articles/whats-new-with-jakarta-nosql-part-i-introduction-t) | [Source](https://github.com/platformsh-examples/payara-micro/tree/master/nosql) |
| [JPA](https://platform.sh/blog/2019/eclipse-microprofiles-gain-agility-release-faster/) | [Source](https://github.com/platformsh-examples/payara-micro/tree/master/jpa) |
| [Hello World](https://dzone.com/articles/payara-and-paas-with-platformsh) | [Source](https://github.com/platformsh-examples/payara-micro/tree/master/hello) |

## Quarkus

[QuarkusIO](https://quarkus.io/), the Supersonic Subatomic Java, promises to deliver small artifacts, extremely fast boot time, and lower time-to-first-request.

### Templates

* [Quarkus](https://github.com/platformsh-templates/quarkus)

### References

| Article                                                      |                                                        Links |
| ------------------------------------------------------------ | -----------------------------------------------------------: |
| [Panache MongoDB](https://dzone.com/articles/deploy-quarkus-faster-in-the-cloud-with-platformsh-3) | [Source](https://github.com/platformsh-examples/quarkus/tree/master/mongo-db-panache) |
| [Command Mode Application](https://dzone.com/articles/deploy-quarkus-faster-in-the-cloud-with-platformsh-2) | [Source](https://github.com/platformsh-examples/quarkus/tree/master/command-mode) |
| [Hibernate Search With Elasticsearch](https://dzone.com/articles/deploy-quarkus-faster-in-the-cloud-with-platformsh-1) | [Source](https://github.com/platformsh-examples/quarkus/tree/master/elasticsearch) |
| [PostgreSQL With Panache](https://dzone.com/articles/deploy-quarkus-faster-in-the-cloud-with-platformsh) | [Source](https://github.com/platformsh-examples/quarkus/tree/master/panache) |
| [PostgreSQL with JPA](https://dzone.com/articles/quarkus-supersonic-subatomic-java-deploy-faster-in) | [Source](https://github.com/platformsh-examples/quarkus/tree/master/jpa) |
| [Hello World](https://dzone.com/articles/quarkus-supersonic-subatomic-java-goes-faster-in-t) |    [Source](https://github.com/platformsh-templates/quarkus) |

## Spring

The [Spring Framework](https://spring.io/projects/spring-framework) provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. Web PaaS is flexible, and allows you to use Spring Framework in several flavors such as [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) and [Spring Boot](https://spring.io/projects/spring-boot).

* [Spring Best Practices](/pages/web_cloud/web_paas_powered_by_platform_sh/frameworks-spring)

### Templates

* [Spring Boot MySQL](https://github.com/platformsh-templates/spring-boot-maven-mysql)
* [Spring Boot MongoDB](https://github.com/platformsh-templates/spring-mvc-maven-mongodb)

### References

| Article                                                      | Link                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Spring Data MongoDB Reactive](https://dzone.com/articles/introduction-to-spring-data-mongodb-reactive-and-h) | [Source](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-mongodb-reactive) |
| [Spring Webflux](https://dzone.com/articles/introduction-of-spring-webflux-and-how-to-apply-cl) | [Source](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-webflux) |
| [Spring Data Redis](https://platform.sh/blog/2019/spring-data-redis-in-the-cloud/) | [Source](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-boot-maven-redis) |
| [Spring with Gradle](https://platform.sh/blog/2019/simplify-your-script-build-with-gradle/) | [Source](https://github.com/platformsh-templates/spring-boot-gradle-mysql) |
| [Spring Data ElasticSearch and Spring Data Solr](https://platform.sh/blog/2019/elasticsearch-vs-solr-have-both-with-spring-data-and-platform.sh/) | [Elasticsearch](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-mvc-maven-elasticsearch) and [Solr](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-mvc-maven-solr) |
| [Spring MVC and Spring Data MongoDB](https://platform.sh/blog/2019/spring-mvc-and-mongodb-a-match-made-in-platform.sh-heaven/) | [Source](https://github.com/platformsh/java-quick-start/tree/master/spring/spring-mvc-maven-mongodb) |
| [Spring Boot and Spring Data JPA](https://platform.sh/blog/2019/java-hello-world-at-platform.sh/) | [Source](https://github.com/platformsh-templates/spring-boot-maven-mysql) |

## Tomcat

Apache Tomcat is an open-source implementation of the Java Servlet,  JavaServer Pages, Java Expression Language and WebSocket technologies.

> [!primary]  
> 
> By default, Spring Boot provides an embedded Apache Tomcat build.
> Therefore, if you want to use Tomcat with Spring, check the [Spring section](#spring).
> 
> 

### Templates

* [Tomcat](https://github.com/platformsh-templates/tomcat)

## Micronaut

[Micronaut](https://micronaut.io/) is a modern, JVM-based, full-stack framework for building modular, testable microservice and serverless applications.

### Templates

* [micronaut](https://github.com/platformsh-templates/micronaut)

### References

| Article                                                     | Source                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| [Hello World](https://dzone.com/articles/micronaut-cloud)   | [Source](https://github.com/platformsh-templates/micronaut)  |
| [JPA](https://dzone.com/articles/micronaut-cloud-jpa)       | [Source](https://github.com/platformsh-examples/micronaut/tree/master/jpa) |
| [Micronaut Data](https://dzone.com/articles/micronaut-data) | [Source](https://github.com/platformsh-examples/micronaut/tree/master/micronaut-data) |
| [MongoDB](https://dzone.com/articles/micronaut-mongodb)     | [Source](https://github.com/platformsh-examples/micronaut/tree/master/mongodb) |
