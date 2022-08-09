---
title: Installation von WordPress auf einer Instanz
excerpt: Erfahren Sie hier, wie Sie eine Public Cloud Instanz für das Hosting von WordPress-Webseiten verwenden
slug: installation_von_wordpress_auf_einer_instanz
section: 'Tutorials'
---

**Letzte Aktualisierung am 15.10.2021**

## Ziel

WordPress ist ein Content Management System (CMS), mit dem Sie Ihre Webseiten schnell und einfach erstellen können. Für die Verwaltung der Software sind keine besonderen Programmierkenntnisse erforderlich.

Dieses Tutorial enthält die Grundschritte für die manuelle Installation von WordPress auf einer Public Cloud Instanz: einen Webserver installieren und die Datenbank konfigurieren, WordPress herunterladen und starten.

**Diese Anleitung erklärt, wie Sie WordPress auf einer Public Cloud Instanz installieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/). 
Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
>

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben eine [Public Cloud Instanz](../public-cloud-erste-schritte/) mit Debian oder Ubuntu erstellt.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff (Root) auf Ihre Instanz über SSH.

## In der praktischen Anwendung

> [!primary]
>
> Die folgenden Anweisungen sind für die Verwendung mit Debian 11 verifiziert. Da Ubuntu auf Debian basiert, sollte das Tutorial auch für eine aktuelle Ubuntu-Distribution funktionieren.
>

Um über einen Domainnamen auf Ihre Installation zuzugreifen, müssen Sie diesen mit Ihrer Instanz verknüpfen. Dazu müssen Sie die DNS-Zone bearbeiten, auf die Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zugreifen können, vorausgesetzt OVHcloud ist Ihr Domain-Registrar **und** der Domainname verwendet die OVHcloud DNS-Server.

Weitere Informationen finden Sie in der [Anleitung zum Bearbeiten der DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/). Wenn der Domainname aktuell verwendet wird, konfigurieren Sie DNS erst nach der Installation des neuen WordPress und dem Einrichten Ihrer Website.

### Schritt 1: Installation des Webservers (LAMP)

Um dynamische Webseiten mit WordPress bereitstellen zu können, wird auf der Instanz ein so genannter *LAMP stack* installiert. LAMP steht für **L**inux, **A**pache, **M**ariaDB und **P**HP.

Sobald Sie via SSH mit Ihrer Instanz verbunden sind, stellen Sie sicher, dass alle Pakete auf dem neuesten Stand sind:

```bash
debian@instance:~$ sudo apt update && sudo apt upgrade -y
```

> [!primary]
>
> Da Softwarepakete regelmäßig aktualisiert werden, müssen Sie möglicherweise die folgenden Anweisungen entsprechend den neuesten Versionen anpassen.
>

Installieren Sie die Pakete für *LAMP*:

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Schritt 2: Konfiguration des Datenbankservers <a name="sqlconf"></a>

MariaDB stellt ein Skript zur Verfügung, um die Erstkonfiguration zu erleichtern und bestimmte Sicherheitseinstellungen anzuwenden.

Geben Sie folgenden Befehl ein, um es auszuführen:

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Bestätigen Sie den ersten Prompt, indem Sie `Enter`{.action} drücken.

Sie können dann eine Methode auswählen, um den Zugang zu Ihrem Datenbankserver zu abzusichern.

```console
Switch to unix_socket authentication [Y/n]
```

Es wird empfohlen, anstelle des Zugangs mittels Root-Passwort die vorgeschlagene Authentifizierungsmethode zu verwenden. Geben Sie `y`{.action} ein und drücken Sie dann `Enter`{.action}. (Wenn Sie sich stattdessen für die Verwendung des Root-Benutzers als Zugangsmethode entscheiden, geben Sie `n`{.action} ein und legen Sie danach das Root-Passwort fest.)

Geben Sie bei der nächsten Aufforderung `n`{.action} ein:

```console
Change the root password? [Y/n]
```

Da die nachfolgenden Prompts Sicherheitseinstellungen betreffen, bestätigen Sie jeden einzelnen mit `y`{.action} bis das Skript abgeschlossen ist.

Wenn Sie den MariaDB-Zugang auf die empfohlene Weise konfiguriert haben (*unix_socket*), verfügen Sie ab sofort über einen automatischen Datenbankserver-Root-Zugang, sobald Sie als Benutzer mit erhöhten Berechtigungen auf der Instanz eingeloggt sind.

Öffnen Sie die MariaDB Shell:

```bash
debian@instance:~$ sudo mariadb
```
```mysql
MariaDB [(none)]> 
```

Erstellen Sie die Datenbank für WordPress:

```mysql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

Geben Sie anschließend einem neuen Benutzer namens "wordpress" alle Rechte auf dieser Datenbank. Dieser Benutzer wird auf die Datenbank zugreifen und alle Operationen für das WordPress-CMS durchführen. Ersetzen Sie dabei `Ihr_Passwort` mit einem starken Passwort für diesen Benutzer.

```mysql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'Ihr_Passwort' WITH GRANT OPTION;
```

> [!primary]
>
> Sie benötigen diese Zugangsdaten später bei der Installation von WordPress.
>

Die Datenbank ist nun für die Verwendung mit WordPress bereit. Stellen Sie sicher, dass die Änderungen für die nachfolgenden Schritte angewendet werden und verlassen Sie anschließend die MariaDB Shell:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```
```mysql
MariaDB [(none)]> exit;
```

### Schritt 3: Firewall konfigurieren

Die Konfiguration einer Firewall (*iptables*) verbessert die Sicherheit Ihrer WordPress-Instanz. Dieser Prozess kann vereinfacht werden, indem das Frontend “Uncomplicated Firewall” (UFW) und dessen vordefinierte Profile verwendet werden. Installieren Sie UFW:

```bash
debian@instance:~$ sudo apt install ufw
```

Die relevanten Profile haben in der Liste der Anwendungen den Vermerk "WWW":

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Wenn Sie "WWW Full" wählen, werden sowohl sichere Verbindungen (Port 443) als auch ungesicherte HTTP-Anfragen (Port 80) zum Webserver zugelassen.

Um zu sehen, welche Ports von einem bestimmten Profil beeinflusst werden, geben Sie ```sudo ufw app info "Name des Profils"``` ein.

Mit folgendem Befehl werden die im Profil "WWW Full" definierten Ports freigegeben:

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Da alle nicht ausdrücklich autorisierten Ports nach der Aktivierung der Firewall gesperrt werden, stellen Sie sicher, dass auch SSH-Verbindungen weiterhin erlaubt sind (Port 22):

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Überprüfen Sie schließlich die Konfiguration und aktivieren Sie die Firewall-Regeln:

```bash
debian@instance:~$ sudo ufw status
```
```bash
debian@instance:~$ sudo ufw enable
```

Sie können mit UFW noch weitere Maßnahmen umsetzen, beispielsweise um DOS-Angriffe (*denial of service*) einzuschränken oder wenn Sie Anfragen aus bestimmten IP-Adressbereichen verhindern möchten. Folgen Sie hierzu der offiziellen Dokumentation zu UFW.

### Schritt 4: WordPress Installation

Gehen Sie auf die [offizielle Website von WordPress](https://wordpress.org/download/), um die **Download-URL** für die neueste Version abzurufen (im Format "tar.gz"). Laden Sie anschließend die Datei herunter:

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Dekomprimieren Sie das heruntergeladene Archiv:

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

Ihr Apache Server sollte zu diesem Zeitpunkt betriebsbereit sein. Sie können das mit folgendem Befehl überprüfen:

```bash
debian@instance:~$ sudo systemctl status apache2
```

Sie können auch `http://IP-Adresse-der-Instanz` in einem Webbrowser aufrufen. Die Infoseite "Apache2 Debian Default Page" sollte angezeigt werden.

Die folgenden Schritte installieren WordPress, indem der Apache Standard-Ordner für Webseiten überschrieben wird.

Statt den Standard-Ordner zu verwenden können Sie auch einen neuen *Virtual Host* für die Installation von WordPress anlegen. Letztere Vorgehensweise ist für das Hosting mehrerer Websites nützlich, was für dieses Tutorial aber nicht relevant ist.

Löschen Sie den bestehenden Ordner:

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Ersetzen Sie den Standard-Ordner des Webservers mit dem WordPress-Ordner:

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Geben Sie dem Webserver Schreib-Rechte (`write`) im Ordner:

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

Der Webserver ist nun bereit für die Erstkonfiguration von WordPress.

### Schritt 5: WordPress konfigurieren

Öffnen Sie einen Webbrowser und rufen Sie Ihr WordPress auf, indem Sie die IP-Adresse Ihrer Instanz eingeben (oder den zugehörigen Domainnamen, falls Sie bereits einen [mit der Instanz verknüpft haben](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)). Wählen Sie auf der ersten Seite eine Sprache aus.

Verwenden Sie den WordPress-Konfigurationsassistenten, um den Zugriff auf Ihre Datenbank zu ermöglichen. Geben Sie dazu die Zugangsdaten ein, die Sie [zuvor konfiguriert haben](#sqlconf).

![wordpress](images/wp_install1.png){.thumbnail}

Im nächsten Schritt können Sie die allgemeinen Informationen Ihrer Website vorkonfigurieren und Ihren Administrator-Account für WordPress erstellen.

![wordpress](images/wp_install2.png){.thumbnail}

Sobald Sie bestätigt haben, können Sie sich mit den im vorherigen Schritt definierten Zugangsdaten in den Verwaltungsbereich Ihrer Website einloggen.

> [!primary]
>
> Um sichere Verbindungen (`https`) herstellen zu können, muss der Webserver über eine Zertifizierungsstelle wie [Let's Encrypt](https://letsencrypt.org/){.external}, die kostenlose Zertifikate anbietet, abgesichert werden. Hierzu muss ein Client-Tool (etwa "Certbot") installiert und Apache entsprechend konfiguriert werden. Ohne diesen Schritt wird Ihre Website nur Anfragen über `http` akzeptieren können.
>

### Schritt 6 (optional): Sichere Verbindungen mit Let's Encrypt aktivieren

Überprüfen Sie zunächst, dass Ihr Domainname über die richtigen Einträge in der DNS-Zone verfügt, d.h. diese auf die IP-Adresse Ihrer Instanz verweisen.

Installieren Sie die für den Certbot-Client notwendigen Pakete:

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Beziehen Sie nun das Zertifikat für Ihre Domain. (Sie können die Subdomain "www" hinzufügen, indem Sie `-d www.IhrDomainName.ovh` anhängen.)

```bash
debian@instance:~$ sudo certbot --apache -d IhrDomainName.ovh
```

Geben Sie eine gültige E-Mail-Adresse ein und akzeptieren Sie die Nutzungsbedingungen.

Certbot verlängert die Zertifikate automatisch; es sind keine weitereren Schritte erforderlich. Sie können jedoch in der Dokumentation zu den verfügbaren Optionen von Certbot nachlesen, um mehr zu dessen Einsatzmöglichkeiten zu erfahren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.