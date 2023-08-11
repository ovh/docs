---
title: Hibernate
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

[Hibernate ORM](https://hibernate.org/) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate handles object-relational impedance mismatch problems by replacing direct, persistent database accesses with high-level object handling functions.

## Services

The [configuration reader library](https://github.com/platformsh/config-reader-java) for Java is used in these examples, so be sure to check out the [documentation](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-java#support-libraries) for installation instructions and the latest version.

### MySQL

[MySQL](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/mysql) is an open-source relational database technology. Define the driver for [MySQL](https://mvnrepository.com/artifact/mysql/mysql-connector-java), and the Java dependencies. Then determine the SessionFactory client programmatically:

```java
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sh.platform.config.Config;
import sh.platform.config.Hibernate;

public class HibernateApp {

    public static void main(String[] args) {
        Config config = new Config();
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Address.class);
        final Hibernate credential = config.getCredential("database", Hibernate::new);
        final SessionFactory sessionFactory = credential.getMySQL(configuration);
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            //...
            transaction.commit();
        }
    }
}
```

> [!primary]  
> You can use the same MySQL driver for MariaDB as well if you wish to do so.
> 

### MariaDB

[MariaDB](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/mysql) is an open-source relational database technology. Define the driver for [MariaDB](https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client), and the Java dependencies. Then determine the SessionFactory client programmatically:

```java
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sh.platform.config.Config;
import sh.platform.config.Hibernate;

public class HibernateApp {

    public static void main(String[] args) {
        Config config = new Config();
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Address.class);
        final Hibernate credential = config.getCredential("database", Hibernate::new);
        final SessionFactory sessionFactory = credential.getMariaDB(configuration);
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            //...
            transaction.commit();
        }
    }
}
```

### PostgreSQL

[PostgreSQL](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services/postgresql) is an open-source relational database technology. Define the driver for [PostgreSQL](https://mvnrepository.com/artifact/postgresql/postgresql), and the Java dependencies. Then determine the SessionFactory client programmatically:

```java
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sh.platform.config.Config;
import sh.platform.config.Hibernate;

public class HibernateApp {

    public static void main(String[] args) {
        Config config = new Config();
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Address.class);
        final Hibernate credential = config.getCredential("database", Hibernate::new);
        final SessionFactory sessionFactory = credential.getPostgreSQL(configuration);
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            //...
            transaction.commit();
        }
    }
}
```
