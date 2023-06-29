---
title: Spring
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

The [Spring Framework](https://spring.io/projects/spring-framework) provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. Web PaaS is flexible, and allows you to use Spring Framework in several flavors such as [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) and [Spring Boot](https://spring.io/projects/spring-boot).


## Services

The [configuration reader library](https://github.com/platformsh/config-reader-java) for Java is used in these examples, so be sure to check out the [documentation](/pages/web/web-paas/languages-java#support-libraries) for installation instructions and the latest version.

### Apache Solr

You can use [Spring Data Solr](https://spring.io/projects/spring-data-solr) to use [Solr](/pages/web/web-paas/configuration-services/solr) with your application by first determining the Solr client programmatically.

```java
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.solr.core.SolrTemplate;
import sh.platform.config.Config;
import sh.platform.config.Solr;

@Configuration
public class SolrConfig {

    @Bean
    public HttpSolrClient elasticsearchTemplate() {
        Config config = new Config();
        final Solr credential = config.getCredential("solr", Solr::new);
        final HttpSolrClient httpSolrClient = credential.get();
        String url = httpSolrClient.getBaseURL();
        httpSolrClient.setBaseURL(url.substring(0, url.lastIndexOf('/')));
        return httpSolrClient;
    }

    @Bean
    public SolrTemplate solrTemplate(HttpSolrClient client) {
        return new SolrTemplate(client);
    }
}

```

### Redis

You can use [Spring Data Redis](https://spring.io/projects/spring-data-redis) to use [Redis](/pages/web/web-paas/configuration-services/redis) with your application by first determining the Redis client programmatically.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericToStringSerializer;

@Configuration
public class RedisConfig {


    @Bean
    JedisConnectionFactory jedisConnectionFactory() {
        Config config = new Config();
        RedisSpring redis = config.getCredential("redis", RedisSpring::new);
        return redis.get();
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        final RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
        template.setConnectionFactory(jedisConnectionFactory());
        template.setValueSerializer(new GenericToStringSerializer<Object>(Object.class));
        return template;
    }

}
```

### MySQL

[MySQL](/pages/web/web-paas/configuration-services/mysql) is an open-source relational database technology. Spring has robust integration with this technology: [Spring Data JPA](https://spring.io/projects/spring-data-jpa).

The first step is to choose the database that you would like to use in your project. Define the driver for [MySQL](https://mvnrepository.com/artifact/mysql/mysql-connector-java) and the Java dependencies, then determine the DataSource client programmatically:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sh.platform.config.Config;
import sh.platform.config.MySQL;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        Config config = new Config();
        MySQL database = config.getCredential("database", MySQL::new);
        return database.get();
    }
}
```

> [!primary]  
> You can use the same MySQL driver for MariaDB as well if you wish to do so.
> 


### MariaDB

[MariaDB](/pages/web/web-paas/configuration-services/mysql) is an open-source relational database technology. Spring has robust integration with this technology: [Spring Data JPA](https://spring.io/projects/spring-data-jpa).

The first step is to choose the database that you would like to use in your project. Define the driver for [MariaDB](https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client) and the Java dependencies, then determine the DataSource client programmatically:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sh.platform.config.Config;
import sh.platform.config.MariaDB;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        Config config = new Config();
        MariaDB database = config.getCredential("database", MariaDB::new);
        return database.get();
    }
}
```


### PostgreSQL

[PostgreSQL](/pages/web/web-paas/configuration-services/postgresql) is an open-source relational database technology. Spring has robust integration with this technology: [Spring Data JPA](https://spring.io/projects/spring-data-jpa).

The first step is to choose the database that you would like to use in your project. Define the driver for [PostgreSQL](https://mvnrepository.com/artifact/postgresql/postgresql) and the Java dependencies, then determine the DataSource client programmatically:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sh.platform.config.Config;
import sh.platform.config.PostgreSQL;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        Config config = new Config();
        PostgreSQL database = config.getCredential("database", PostgreSQL::new);
        return database.get();
    }
}
```

### RabbitMQ

You can use [Spring JMS](https://spring.io/guides/gs/messaging-jms/) to use [RabbitMQ](/pages/web/web-paas/configuration-services/rabbitmq) with your application by first determining the [RabbitMQ client](https://mvnrepository.com/artifact/com.rabbitmq.jms/rabbitmq-jms) programmatically.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.connection.CachingConnectionFactory;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.jms.support.converter.MessageType;
import sh.platform.config.Config;
import sh.platform.config.RabbitMQ;

import javax.jms.ConnectionFactory;

@Configuration
@EnableJms
public class JMSConfig {

    private ConnectionFactory getConnectionFactory() {
        Config config = new Config();
        final RabbitMQ rabbitMQ = config.getCredential("rabbitmq", RabbitMQ::new);
        return rabbitMQ.get();
    }

    @Bean
    public MessageConverter getMessageConverter() {
        MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
        converter.setTargetType(MessageType.TEXT);
        converter.setTypeIdPropertyName("_type");
        return converter;
    }

    @Bean
    public CachingConnectionFactory getCachingConnectionFactory() {
        ConnectionFactory connectionFactory = getConnectionFactory();
        return new CachingConnectionFactory(connectionFactory);
    }
}
```

## Templates

* [Spring Boot MySQL](https://github.com/platformsh-templates/spring-boot-maven-mysql)
(https://github.com/platformsh-templates/spring-mvc-maven-mongodb)
