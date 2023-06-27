---
title: Webserver (LAMP) auf Debian oder Ubuntu installieren
excerpt: Erfahren Sie hier, wie Sie einen LAMP-basierten Webserver einrichten
updated: 2023-05-10
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Mit der Einrichtung eines Webservers und verwandter Software kann Ihr Cloud Server dynamische Webseiten oder Webanwendungen hosten. Die Installation eines *LAMP Stack* ist ein bewährter Ansatz, um dies mithilfe von Open-Source-Anwendungen zu erreichen. LAMP steht für **L**inux (OS), **A**pache (Webserver), **M**ariaDB (Datenbankmanagementsystem) und **P**HP (Programmiersprache). 

**Dieses Tutorial erklärt, wie Sie einen LAMP Webserver auf Ihrem OVHcloud Dienst installieren.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/), [VPS](https://www.ovhcloud.com/de/vps/) oder eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem Kunden-Account (ausgenommen Windows-Systeme).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff (Root) auf Ihren Dienst über SSH.


> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchzuführenden Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/). Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## In der praktischen Anwendung

Wenn eine Debian oder Ubuntu Distribution noch nicht auf Ihrem Server installiert ist, führen Sie zunächst eine Reinstallation über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Das ist die beste Vorgehensweise, um ein stabiles System für die Webserver-Installation und darauf laufende Anwendungen zu erhalten.

Folgen Sie der passenden Anleitung, um eine Distribution auf Ihrem OVHcloud Dienst zu installieren und sich mittels [SSH](/pages/cloud/dedicated/ssh_introduction) zu verbinden:

- [Dedicated Server](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- [VPS](/pages/cloud/vps/starting_with_a_vps)
- [Public Cloud Instanz](/pages/platform/public-cloud/public-cloud-first-steps)


> [!primary]
>
> Die folgenden Anweisungen sind für die Verwendung mit Debian 11 verifiziert. Da Ubuntu auf Debian basiert, sollte das Tutorial auch für eine aktuelle Ubuntu-Distribution funktionieren.
>


### Schritt 1: Update des Systems

Wenn Sie via SSH mit Ihrem Server verbunden sind, stellen Sie sicher, dass alle Pakete auf dem neuesten Stand sind:

```bash
sudo apt update && sudo apt upgrade -y
```

Sie können anschließend die aktuellen LAMP Pakete installieren.

> [!primary]
>
> Da Softwarepakete regelmäßig aktualisiert werden, müssen Sie möglicherweise die folgenden Anweisungen entsprechend den neuesten Versionen anpassen.
>

### Schritt 2: Apache-Installation

Installieren Sie die Apache Pakete (einschließlich der Dokumentation):

```bash
sudo apt install -y apache2 apache2-doc
```

Sie können die Installation mit folgendem Befehl überprüfen:

```bash
sudo systemctl status apache2
```

Sie können auch `http://server_IP` in einem Webbrowser aufrufen. Die Infoseite "Apache2 Debian Default Page" sollte angezeigt werden.


### Schritt 3: Datenbankserver und PHP installieren

Installieren Sie die Pakete von MariaDB und PHP:

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Schritt 4: Konfiguration des Datenbankservers <a name="sqlconf"></a>

MariaDB stellt ein Skript zur Verfügung, um die Erstkonfiguration zu erleichtern und bestimmte Sicherheitseinstellungen anzuwenden.

Geben Sie folgenden Befehl ein, um es auszuführen:

```bash
sudo mysql_secure_installation
```

Bestätigen Sie den ersten Prompt, indem Sie `Enter`{.action} drücken.

Sie können dann eine Methode auswählen, um den Zugang zu Ihrem Datenbankserver zu abzusichern.

```console
Switch to unix_socket authentication [Y/n]
```

Es wird empfohlen, anstelle des Zugangs mittels Root-Passwort die vorgeschlagene Authentifizierungsmethode (*unix_socket*) zu verwenden. Geben Sie `y`{.action} ein und drücken Sie dann `Enter`{.action}. (Wenn Sie sich für die Verwendung des Root-Benutzers als Zugangsmethode entscheiden, geben Sie stattdessen `n`{.action} ein und legen Sie das Root-Passwort an der nächsten Eingabeaufforderung fest.)

Geben Sie bei der nächsten Aufforderung `n`{.action} ein:

```console
Change the root password? [Y/n]
```

Da die nachfolgenden Prompts Sicherheitseinstellungen betreffen, bestätigen Sie jeden einzelnen mit `y`{.action} bis das Skript abgeschlossen ist.

```console
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Wenn Sie den MariaDB-Zugang auf die empfohlene Weise konfiguriert haben (*unix_socket*), verfügen Sie ab sofort automatisch über Administrator-Zugang zum Datenbankserver, sobald Sie als Benutzer mit erhöhten Berechtigungen (*sudo*) auf dem Server eingeloggt sind.

> [!primary]
>
> Um eine Datenbank für die Nutzung mit einer Software vorzubereiten, folgen Sie den Anweisungen im nachstehenden Abschnitt. Sie benötigen die Zugangsdaten zur Datenbank (Datenbankname, Benutzer, Passwort) während der Installation von Anwendungen, etwa eines CMS (z.B. WordPress, Drupal, etc.). Für eine bewährte Vorgehensweise vermeiden Sie die Nutzung derselben Datenbank für unterschiedliche Anwendungen.
> 
> Um WordPress auf einem Server zu installieren, können Sie [diesem Tutorial](/pages/platform/public-cloud/install_wordpress_on_an_instance) folgen.

#### Erstellen der ersten Datenbank und eines Datenbank-Benutzers (optional)

Öffnen Sie die MariaDB Shell:

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Create a database:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Erstellen Sie einen "user" mit einem Namen Ihrer Wahl und gewähren Sie ihm alle Rechte auf dieser Datenbank. Dieser Account kann künftig auf die Datenbank zugreifen und alle Operationen für die Anwendung durchführen, die diese Datenbank verwendet. Ersetzen Sie dabei `database_name` mit dem Namen Ihrer Datenbank, `user_name` mit Ihrem gewünschten Benutzernamen und `password` mit einem starken Passwort.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Stellen Sie sicher, dass die Änderungen übernommen werden, und verlassen Sie anschließend die MariaDB Shell:

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Schritt 5: Konfiguration der Firewall (optional)

[Die Konfiguration einer Firewall](/pages/cloud/dedicated/firewall-Linux-iptable) (*iptables*) verbessert die Sicherheit Ihres Servers. Dieser Prozess kann vereinfacht werden, indem das Frontend “Uncomplicated Firewall” (UFW) und dessen vordefinierte Profile verwendet werden.

Installieren Sie UFW:

```bash
sudo apt install ufw
```

Die relevanten Profile haben in der Liste der Anwendungen den Vermerk "WWW":

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Wenn Sie "WWW Full" wählen, werden sowohl sichere Verbindungen (Port 443) als auch ungesicherte HTTP-Anfragen (Port 80) zum Webserver zugelassen.

Um zu sehen, welche Ports von einem bestimmten Profil beeinflusst werden, geben Sie `sudo ufw app info "profile name"` ein.

Mit folgendem Befehl werden die im Profil "WWW Full" definierten Ports freigegeben:

```bash
sudo ufw allow 'WWW Full'
```

Da alle nicht ausdrücklich autorisierten Ports nach der Aktivierung der Firewall **gesperrt** werden, stellen Sie sicher, dass auch SSH-Verbindungen weiterhin erlaubt sind (Port 22 in einer Standardkonfiguration):

```bash
sudo ufw allow 'SSH'
```

Aktivieren Sie die Firewall-Regeln und überprüfen Sie die Konfiguration:

```bash
sudo ufw enable
```

```bash
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)         
```

Sie können mit UFW noch weitere Maßnahmen umsetzen, beispielsweise um DOS-Angriffe (*denial of service*) einzuschränken oder wenn Sie Anfragen aus bestimmten IP-Adressbereichen verhindern möchten. Folgen Sie hierzu der [offiziellen Dokumentation zu UFW](https://help.ubuntu.com/community/UFW).

### Schritt 6: DNS-Konfiguration (optional)

Um über einen Domainnamen auf Ihre Webserver-Installation zuzugreifen, muss dieser mit Ihrem Dienst verbunden werden. Dazu müssen Sie die DNS-Zone bearbeiten, auf die Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zugreifen können, vorausgesetzt OVHcloud ist Ihr Domain-Registrar **und** der Domainname verwendet die OVHcloud DNS-Server. 

Weitere Informationen finden Sie in der [Anleitung zum Bearbeiten der DNS-Zone](/pages/web/domains/dns_zone_edit). Wenn der Domainname aktuell verwendet wird, konfigurieren Sie DNS erst nachdem Ihre neue Website oder Anwendung bereit ist.

### Schritt 7: Sichere Verbindungen mit Let's Encrypt aktivieren (optional)

> [!primary]
>
> Um sichere Verbindungen (`https`) herstellen zu können, muss der Webserver über eine Zertifizierungsstelle wie [Let's Encrypt](https://letsencrypt.org/){.external}, die kostenlose Zertifikate anbietet, abgesichert werden. Hierzu muss ein Client-Tool ("Certbot" in diesem Beispiel) installiert und Apache entsprechend konfiguriert werden. Ohne diesen Schritt wird Ihre Website oder Anwendung nur unverschlüsselte Anfragen über `http` akzeptieren können.
> 
> Alternativ dazu bietet Ihnen OVHcloud die Lösung [SSL Gateway](https://www.ovh.de/ssl-gateway/). Weitere Informationen dazu finden Sie in [unseren Anleitungen](/pages/web/ssl-gateway/order-ssl-gateway).
> 

Überprüfen Sie zunächst, dass Ihr Domainname über die richtigen Einträge in der DNS-Zone verfügt, d.h. diese müssen auf die IP-Adresse Ihres Servers verweisen.

> [!warning]
> Der folgende Befehl installiert eine funktionale, aber ältere Version von Certbot (*certbot 1.12.0*). Um die aktuellste Version zu installieren, muss der zusätzliche Paketmanager *snappy* verwendet werden. Die Installationsanleitung finden Sie auf der [Certbot Webseite](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Installieren Sie die für den Certbot Client notwendigen Pakete:

```bash
sudo apt install -y certbot python3-certbot-apache
```

Beziehen Sie nun das Zertifikat für Ihren Domainnamen sowie dessen Subdomain "www":

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Geben Sie eine gültige E-Mail-Adresse ein und akzeptieren Sie die Nutzungsbedingungen.

Certbot verlängert die Zertifikate automatisch; es sind keine weitereren Schritte erforderlich. Sie können jedoch in der Dokumentation zu den verfügbaren Optionen von Certbot nachlesen, um mehr zu dessen Einsatzmöglichkeiten zu erfahren.

## Weiterführende Informationen <a name="gofurther"></a>

[UFW Dokumentation](https://help.ubuntu.com/community/UFW)

[Apache Dokumentation](https://httpd.apache.org/docs/)

[MariaDB Dokumentation](https://mariadb.com/kb/en/documentation/)

[Let's Encrypt Dokumentation](https://httpd.apache.org/docs/)

[Certbot Dokumentation](https://eff-certbot.readthedocs.io/en/stable/)

[NGINX Dokumentation](https://nginx.org/en/docs/) (Apache Alternative)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
