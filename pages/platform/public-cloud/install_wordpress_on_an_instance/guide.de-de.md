---
title: Installation von WordPress auf einer Instanz
excerpt: Erfahren Sie hier, wie Sie eine Public Cloud Instanz für WordPress nutzen
slug: installation_von_wordpress_auf_einer_instanz
section: 'Tutorials'
hidden: true
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.07.2021**

## Ziel

WordPress ist ein Content Management System (CMS), mit dem Sie Ihre Website schnell und einfach erstellen können. Für die Verwaltung des Programms sind keine besonderen Programmierkenntnisse erforderlich.

Dieses Tutorial enthält die Grundschritte einer vollständig manuellen Installation, die die Konfiguration eines Webservers beinhaltet. Sie können Ihre Instanz auch für WordPress vorkonfigurieren, indem Sie bei der Erstellung der Instanz unser Template für WordPress (auf CentOS) auswählen.

**Diese Anleitung erklärt, wie Sie WordPress auf einer Public Cloud Instanz installieren.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff (Root) auf Ihre Instanz über SSH.

## In der praktischen Anwendung

- Folgen Sie für eine komplett manuelle Installation den nachfolgenden Schritten. (Erstellen Sie zunächst eine Instanz, falls notwendig; Sie können [unsere entsprechende Anleitung verwenden](../public-cloud-erste-schritte/)).
- Für eine Installation auf Basis des OVHcloud WordPress-Templates folgen Sie der [Anleitung zum Erstellen einer Instanz](../public-cloud-erste-schritte/) und wählen Sie `WordPress`{.action} bei der Image-Auswahl in Schritt 3. <br><br> ![wordpress](images/wp_instance.png){.thumbnail} <br> Bei einer erfolgreich erstellten WordPress-Instanz ist die Software bereits fertig installiert aber Sie müssen die Datenbank noch konfigurieren. Fahren Sie dazu mit den Anweisungen zur Konfiguration von [MariaDB](#sqlconf) fort.

### Webserver installieren

Installieren Sie zunächst den Webserver auf Ihrer Public Cloud Instanz.

Stellen Sie hierzu sicher, dass die Instanz auf dem aktuellen Stand ist:

- **Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```

- **Fedora/CentOS**

```bash
[admin@instance ~ ~$ sudo yum update && sudo yum upgrade
```

Anschließend können Sie den Webserver Ihrer Wahl installieren. Dieses Beispiel verwendet den Apache Webserver mit folgenden Elementen:

- PHP
- PHP-MySQL
- MySQL oder MariaDB Server

> [!primary]
>
> Da Softwarepakete regelmäßig aktualisiert werden, müssen Sie möglicherweise die folgenden Anweisungen entsprechend den neuesten Versionen anpassen.
>

- **Debian/Ubuntu**

```bash
admin@instance~$ sudo apt get install apache2 php php-mysql mysql-server -y
```

- **Fedora/CentOS**

```bash
[admin@instance~]$ sudo yum install httpd php php php mysqlnd mariadb-server -y
```

Wenn Sie dazu aufgefordert werden, geben Sie ein Passwort ein, um den Root-Account für die MySQL-Datenbank zu konfigurieren.

Starten Sie den Webserver neu, um die Änderung zu übernehmen:

- **Debian/Ubuntu**

```bash
admin@instance:~$ sudo systemctl restart apache2
```

- **Fedora/CentOS**

```bash
[admin@instance ~]$ sudo systemctl restart httpd.service
```

### Telecharger  WordPress

Gehen Sie auf die Website von [WordPress](https://wordpress.org/download/){.external}, um den Link zum Download der neuesten Version zu kopieren. Laden Sie anschließend die Datei herunter:

```bash
admin@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Dekomprimieren Sie das heruntergeladene Archiv:

```bash
admin@instance:~$ tar zxvf latest.tar.gz
```

Löschen Sie den Standard-Ordner des Webservers:

```bash
admin@instance:~$ sudo rm -R /var/www/html/
```
Ersetzen Sie den Standard-Ordner des Webservers mit dem WordPress Ordner:

```bash
admin@instance~$ sudo mv wordpress /var/www/html
```

Sie können dann dem Webserver Schreibrechte für den Ordner erteilen:

- **Debian/Ubuntu**

```bash
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

- **Fedora/CentOS**

```bash
[admin@instance ~]$ sudo chown -R apache:apache /var/www/html/
```

### Konfiguration von MySQL <a name="sqlconf"></a>

Im Gegensatz zu MySQL-Server, den Sie auf Debian/Ubuntu installieren können, konfiguriert MariaDB Ihr Root-Passwort bei der Installation nicht. Sie müssen daher den MariaDB-Server starten und Ihr Passwort mit den folgenden Befehlen festlegen.

Datenbankserver starten:

```bash
[admin@instance ~]$ sudo systemctl start mariadb.service
```

Root-Passwort neu konfigurieren:

```bash
[admin@instance ~$ sudo /usr/bin/mysql_secure_installation
```

```bash
Set root password? [Y/n] Y
New password:
```

Darüber hinaus werden Sie aufgefordert, einige sicherheitsrelevante Aktionen zu bestätigen, wie die Entfernung des Standard-Benutzers ("anonymous user") und die Deaktivierung von Root-Logins.

Die folgenden Anweisungen gelten für MySQL und MariaDB.

Sobald Sie Ihr Root-Passwort haben, können Sie sich mit Ihrem Datenbankserver verbinden:

```bash
admin@instance~$ sudo mysql -u root -p
```

Sie können nun einen neuen Benutzer erstellen, ein Passwort festlegen und eine Datenbank für WordPress erstellen.

Benutzer erstellen:

```sql
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'Benutzerpasswort';
```

Datenbank erstellen:

```sql
mysql> CREATE DATABASE `wordpress`;
```

Dem Benutzer "wordpress" alle Rechte an der Datenbank "wordpress" erteilen:

```sql
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```

Die Datenbank-CLI schließen:

```sql
mysql> exit
```

### WordPress konfigurieren

Sobald die Datenbank konfiguriert ist, können Sie WordPress im Browser aufrufen, um die Installation abzuschließen. Geben Sie hierzu die IP-Adresse Ihrer Instanz (oder den Domainnamen, falls Sie bereits einen [mit der Instanz verbunden haben](../../domains/webhosting_bearbeiten_der_dns_zone/)) ins Adressfeld ein.

Mit dem WordPress-Konfigurationsassistenten können Sie den Zugriff auf Ihre Datenbank zu konfigurieren. Geben Sie die Werte ein, die Sie in den vorherigen Schritten festgelegt haben.

![wordpress](images/wp_install1.png){.thumbnail}

Im zweiten Schritt konfigurieren Sie die allgemeinen Informationen Ihrer Website sowie den Administrator-Account für WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Sobald die Konfiguration abgeschlossen ist, können Sie sich mit dem gerade angelegten Benutzer in den Administrationsbereich Ihrer Website einloggen.

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.