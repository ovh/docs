---
title: Extensions
slug: extensions
section: Php
---

**Last updated 2nd June 2022**



## Objective  

PHP has a number of [extensions](https://pecl.php.net/) developed by members of the community.
Some of them are available for Web PaaS containers.


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

You can also include configuration options for specific extensions.

The following table shows all extensions that are available (Avail) and on by default (Def).
You can turn on the available ones with the `extensions` key
and turn off those on by default with the `disabled_extensions` key.
(Extensions marked with `*` are built in and can't be turned off.)

| Extension         | 5.4   | 5.5   | 5.6   | 7.0   | 7.1   | 7.2   | 7.3   | 7.4   | 8.0   | 8.1   |
| ----------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `amqp`            |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `apc`             | Avail | Avail |       |       |       |       |       |       |       |       |
| `apcu`            | Avail |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `apcu_bc`         |       |       |       | Avail | Avail | Avail | Avail | Avail |       |       |
| `applepay`        |       |       |       | Avail | Avail |       |       | Avail |       |       |
| `bcmath`          |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `blackfire`       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `bz2`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `calendar`        |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `ctype`           |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `curl`            | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `dba`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `dom`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `enchant`         | Avail | Avail | Avail | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `event`           |       |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail |
| `exif`            |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `ffi`             |       |       |       |       |       |       |       | Avail | Avail | Avail |
| `fileinfo`        |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `ftp`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `gd`              | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `gearman`         | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `geoip`           | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |       |
| `gettext`         |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `gmp`             | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `http`            | Avail | Avail |       |       |       |       | Avail | Avail | Avail | Avail |
| `iconv`           |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `igbinary`        |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `imagick`         | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail with<br />`webp`  | Avail with<br />`webp`  |
| `imap`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `interbase`       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |
| `intl`            | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `ioncube`         |       |       |       | Avail | Avail | Avail |       |       |       |       |
| `json`            |       |       | Def   | Def   | Def   | Def   | Def   | Def   | *     | *     |
| `ldap`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `mailparse`       |       |       |       | Avail | Avail | Avail |       | Avail | Avail | Avail |
| `mbstring`        |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `mcrypt`          | Avail | Avail | Avail | Avail | Avail |       |       |       |       |       |
| `memcache`        | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `memcached`       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |
| `mongo`           | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `mongodb`         |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `msgpack`         |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |
| `mssql`           | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `mysql`           | Def   | Def   | Def   |       |       |       |       |       |       |       |
| `mysqli`          | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `mysqlnd`         | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `newrelic`        |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `oauth`           |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `odbc`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `opcache`         |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `PDO`             | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `pdo_dblib`       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `pdo_firebird`    | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |       |
| `pdo_mysql`       | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `pdo_odbc`        | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `pdo_pgsql`       | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `pdo_sqlite`      | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `pdo_sqlsrv`      |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `pgsql`           | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `Phar`            |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `pinba`           | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `posix`           |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `propro`          |       |       | Avail |       |       |       |       |       |       |       |
| `pspell`          | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `pthreads`        |       |       |       |       | Avail |       |       |       |       |       |
| `raphf`           |       |       | Avail |       |       |       |       | Avail | Avail | Avail |
| `readline`        | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `recode`          | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       |       |       |
| `redis`           | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `shmop`           |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `SimpleXML`       |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `snmp`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `soap`            |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `sockets`         |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `sodium`          |       |       |       |       |       | Avail | Avail | Avail | Avail | Avail |
| `sourceguardian`  |       |       |       | Avail | Avail |       |       |       |       |       |
| `spplus`          | Avail | Avail |       |       |       |       |       |       |       |       |
| `sqlite3`         | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `sqlsrv`          |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `ssh2`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `sybase`          |       |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail |
| `sysvmsg`         |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `sysvsem`         |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `sysvshm`         |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `tideways`        |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `tideways_xhprof` |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `tidy`            | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `tokenizer`       |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `uuid`            |       |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail |
| `wddx`            |       |       |       | Avail | Avail | Avail | Avail | Avail |       |       |
| `xdebug`          |       |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail |
| `xcache`          | Avail | Avail |       |       |       |       |       |       |       |       |
| `xhprof`          | Avail | Avail | Avail |       |       |       |       |       |       |       |
| `xml`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `xmlreader`       |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `xmlrpc`          | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |       | Avail |
| `xmlwriter`       |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |
| `xsl`             | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail | Avail |
| `yaml`            |       |       |       |       | Avail | Avail | Avail | Avail | Avail | Avail |
| `zbarcode`        |       |       |       | Avail | Avail | Avail | Avail |       |       |       |
| `zendopcache`     | Def   | *     | *     | *     | *     | *     | *     | *     | *     | *     |
| `zip`             |       |       |       | Def   | Def   | Def   | Def   | Def   | Def   | Def   |


There are also built-in modules that are always on:

- `date`

- `filter`

- `hash`

- `json` (from 8.0)

- `libxml`

- `openssl`

- `pcntl`

- `pcre`

- `Reflection`

- `session`

- `SPL`

- `standard`

- `Zend OPcache` (from 5.5)

- `zlib`


To see a complete list of extensions in your environment:

```bash
webpaas ssh -p <PROJECT_ID> -e <ENVIRONMENT_ID> 'php -m'
```

## Custom PHP extensions

It's possible to use an extension not listed here but it takes slightly more
work:

- Download the .so file for the extension as part of your build hook using `curl` or similar. bIt can also be added to your Git repository if the file isn't publicly downloadable, although committing large binary blobs to Git is generally not recommended.
- Provide a custom `php.ini` file in your app root that loads the extension using an absolute path. For example, if the extension is named `spiffy.so` and is in your app root, your `php.ini` file includes:


```ini
extension=/app/spiffy.so
```