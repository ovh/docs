---
title: Extensions
slug: extensions
section: Php
---

**Last updated 12th February 2021**



## Objective  

You can define the PHP extensions you want to enable or disable:

```yaml
# .platform.app.yaml
runtime:
    extensions:
        - raphf
        - http
        - igbinary
        - redis
    disabled_extensions:
        - sqlite3
```

The following extensions are enabled by default:

* bcmath
* bz2 (7.1 and later)
* common (7.1 and later)
* curl
* dba (7.1 and later)
* enchant (7.1 and later)
* gd
* interbase (7.1 and later)
* intl
* json (5.6 and later)
* ldap (7.1 and later)
* mbstring (7.1 and later)
* mcrypt (5.6 and earlier)
* mysql
* mysqli (not in 7.1)
* mysqlnd (not in 7.1)
* odbc (7.1 and later)
* openssl
* pdo (not in 7.1)
* pdo_mysql (not in 7.1)
* pdo_sqlite (not in 7.1)
* pgsql (7.1 and later)
* pspell (7.1 and later)
* readline (7.1 and later)
* recode (7.1 and later)
* snmp (7.1 and later)
* soap (7.1 and later)
* sodium (7.2)
* sqlite3
* sockets (7.0 and later)
* sybase (7.1 and later)
* tidy (7.1 and later)
* xml (7.1 and later)
* xmlrpc (7.1 and later)
* zendopcache (5.4 only) / opcache (5.5 and later)
* zip (7.1 and later)


You can disable those by adding them to the `disabled_extensions` list.

This is the complete list of extensions that can be enabled:

| Extension        | 5.4 | 5.5 | 5.6 | 7.0 | 7.1 | 7.2 | 7.3 | 7.4 | 8.0 |
|------------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| amqp             |     |     |     | *   | *   | *   | *   | *   |     |
| apc              | *   | *   |     |     |     |     |     |     |     |
| apcu             | *   |     | *   | *   | *   | *   | *   | *   | *   |
| apcu_bc          |     |     |     | *   | *   | *   | *   | *   |     |
| applepay         |     |     |     | *   | *   |     |     | *   |     |
| bcmath           |     |     |     | *   | *   | *   | *   | *   | *   |
| blackfire        | *   | *   | *   | *   | *   | *   | *   | *   |     |
| bz2              |     |     |     | *   | *   | *   | *   | *   | *   |
| calendar         |     |     |     | *   | *   | *   | *   | *   | *   |
| ctype            |     |     |     | *   | *   | *   | *   | *   | *   |
| curl             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| dba              |     |     |     | *   | *   | *   | *   | *   | *   |
| dom              |     |     |     | *   | *   | *   | *   | *   | *   |
| enchant          | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| event            |     |     |     |     | *   | *   | *   | *   | *   |
| exif             |     |     |     | *   | *   | *   | *   | *   | *   |
| ffi              |     |     |     |     |     |     |     | *   | *   |
| fileinfo         |     |     |     | *   | *   | *   | *   | *   | *   |
| ftp              |     |     |     | *   | *   | *   | *   | *   | *   |
| gd               | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| gearman          | *   | *   | *   |     |     |     |     |     |     |
| geoip            | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| gettext          |     |     |     | *   | *   | *   | *   | *   | *   |
| gmp              | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| http             | *   | *   |     |     |     |     |     | *   | *   |
| iconv            |     |     |     | *   | *   | *   | *   | *   | *   |
| igbinary         |     |     |     | *   | *   | *   | *   | *   | *   |
| imagick          | *   | *   | *   | *   | *   | *   | *   | *   |     |
| imap             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| interbase        | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| intl             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| ioncube          |     |     |     | *   | *   | *   |     |     |     |
| json             |     |     | *   | *   | *   | *   | *   | *   | *   |
| ldap             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| mailparse        |     |     |     | *   | *   | *   |     | *   | *   |
| mbstring         |     |     |     | *   | *   | *   | *   | *   | *   |
| mcrypt           | *   | *   | *   | *   | *   |     |     |     |     |
| memcache         | *   | *   | *   |     |     |     |     |     |     |
| memcached        | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| mongo            | *   | *   | *   |     |     |     |     |     |     |
| mongodb          |     |     |     | *   | *   | *   | *   | *   |     |
| msgpack          |     |     | *   | *   | *   | *   | *   | *   | *   |
| mssql            | *   | *   | *   |     |     |     |     |     |     |
| mysql            | *   | *   | *   |     |     |     |     |     |     |
| mysqli           | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| mysqlnd          | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| newrelic         |     |     | *   | *   | *   | *   | *   | *   | *   |
| oauth            |     |     |     | *   | *   | *   | *   | *   | *   |
| odbc             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| opcache          |     | *   | *   | *   | *   | *   | *   | *   | *   |
| openssl          |     |     |     |     |     |     |     |     |     |
| pdo              | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_dblib        | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_firebird     | *   | *   | *   | *   | *   | *   | *   | *   |     |
| pdo_mysql        | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_odbc         | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_pgsql        | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_sqlite       | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pdo_sqlsrv       |     |     |     | *   | *   | *   | *   | *   |     |
| http             |     |     | *   |     |     |     |     | *   |     |
| pgsql            | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| phar             |     |     |     | *   | *   | *   | *   | *   | *   |
| pinba            | *   | *   | *   |     |     |     |     |     |     |
| posix            |     |     |     | *   | *   | *   | *   | *   | *   |
| propro           |     |     | *   |     |     |     |     |     |     |
| pspell           | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| pthreads         |     |     |     |     | *   |     |     |     |     |
| raphf            |     |     | *   |     |     |     |     | *   | *   |
| readline         | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| recode           | *   | *   | *   | *   | *   | *   | *   |     |     |
| redis            | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| shmop            |     |     |     | *   | *   | *   | *   | *   | *   |
| simplexml        |     |     |     | *   | *   | *   | *   | *   | *   |
| snmp             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| soap             |     |     |     | *   | *   | *   | *   | *   | *   |
| sockets          |     |     |     | *   | *   | *   | *   | *   | *   |
| sodium           |     |     |     |     |     | *   | *   | *   | *   |
| sourceguardian   |     |     |     | *   | *   |     |     |     |     |
| spplus           | *   | *   |     |     |     |     |     |     |     |
| sqlite3          | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| sqlsrv           |     |     |     | *   | *   | *   | *   | *   |     |
| ssh2             | *   | *   | *   | *   | *   | *   | *   | *   |     |
| sybase           |     |     |     |     | *   | *   | *   | *   | *   |
| sysvmsg          |     |     |     | *   | *   | *   | *   | *   | *   |
| sysvsem          |     |     |     | *   | *   | *   | *   | *   | *   |
| sysvshm          |     |     |     | *   | *   | *   | *   | *   | *   |
| tideways         |     |     |     | *   | *   | *   | *   | *   | *   |
| tideways-xhprof  |     |     |     | *   | *   | *   | *   | *   | *   |
| tidy             | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| tokenizer        |     |     |     | *   | *   | *   | *   | *   | *   |
| uuid             |     |     |     |     | *   | *   | *   | *   | *   |
| wddx             |     |     |     | *   | *   | *   | *   | *   |     |
| xdebug           |     |     |     |     | *   | *   | *   | *   | *   |
| xcache           | *   | *   |     |     |     |     |     |     |     |
| xhprof           | *   | *   | *   |     |     |     |     |     |     |
| xml              |     |     |     | *   | *   | *   | *   | *   | *   |
| xmlreader        |     |     |     | *   | *   | *   | *   | *   | *   |
| xmlrpc           | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| xmlwriter        |     |     |     | *   | *   | *   | *   | *   | *   |
| xsl              | *   | *   | *   | *   | *   | *   | *   | *   | *   |
| yaml             |     |     |     |     | *   | *   | *   | *   | *   |
| zbarcode         |     |     |     | *   | *   | *   | *   |     |     |
| zendopcache      | *   |     |     |     |     |     |     |     |     |
| zip              |     |     |     | *   | *   | *   | *   | *   | *   |

> [!primary]  
> You can check out the output of `ls /etc/php5/mods-available` to see the
> up-to-date complete list of extensions after you SSH into your environment. For
> PHP7 and above, use `ls /etc/php/*/mods-available`.
> 

## Custom PHP extensions

It is possible to use an extension not listed here but it takes slightly more work:

1\. Download the .so file for the extension as part of your build hook using `curl` or similar. It can also be added to your Git repository if the file is not publicly downloadable, although committing large binary blobs to Git is generally not recommended.

2\. Provide a custom `php.ini` file in the application root (as a sibling of your `.platform.app.yaml` file) that loads the extension using an absolute path. For example, if the extension is named `spiffy.so` and is in the root of your application, you would have a `php.ini` file that reads:

```ini
extension=/app/spiffy.so
```
