---
title: "Migrieren einer Website von einem Webhosting auf einen VPS"
excerpt: "Erfahren Sie, wie Sie Ihre Website von einem Webhosting auf einen OVHcloud VPS migrieren"
updated: 2025-10-23
---

## Ziel

Ihre Website entwickelt sich weiter, und der Ressourcenverbrauch wird immer stärker, sodass Ihr Webhosting nicht mehr Ihren Bedürfnissen in Bezug auf die Leistung oder die Fähigkeit zur Bewältigung komplexerer Aufgaben entspricht. Die Migration auf einen VPS verbessert die Geschwindigkeit und Reaktionsgeschwindigkeit Ihrer Website, erhöht die verfügbaren Computing-Ressourcen (CPU, RAM etc.) und hat mehr Kontrolle über die Server-Umgebung. Diese Anleitung konzentriert sich auf die wesentlichen Schritte für eine effektive Migration auf einen VPS bei gleichzeitiger Gewährleistung der Dienstkontinuität.

**Diese Anleitung erklärt, wie Sie Ihre Website von einem Webhosting auf einen VPS migrieren.**

## Voraussetzungen

- Sie verfügen über ein OVHcloud [Webhosting](/links/web/hosting).
- Sie haben einen [VPS](/links/bare-metal/vps) in Ihrem OVHcloud Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

### Schritt 1 - Sicherung der Dateien und der Datenbank Ihrer Website <a name="step1"></a>

Der erste Schritt ist, alle Dateien Ihrer Website zu sichern, in der Regel über das **F**ile **T**ransfer **P**rotocol (**FTP**) sowie die dazugehörige Datenbank.

Wenn Sie WordPress verwenden, folgen Sie unserer Anleitung „[Backup Ihrer WordPress Installation](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)“, um zu erfahren, wie Sie die Dateien und Datenbanken Ihrer WordPress-Website sichern, und fahren Sie dann mit [Schritt 2](#step2) fort.

#### Schritt 1.1 - Verbindung mit dem FTP-Speicherplatz Ihres Webhostings

Folgen Sie den Schritten unserer Anleitung „[Mit dem FTP-Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“, um sich mit dem FTP-Speicherplatz Ihres Webhostings zu verbinden.

#### Schritt 1.2 - Dateien per FTP sichern <a name="step1.2"></a>

Wenn Sie kein CMS (WordPress, Joomla!, Drupal, PrestaShop etc.) verwenden, laden Sie eine vollständige Sicherung aller Dateien in Ihrem FTP-Bereich auf Ihr lokales Gerät herunter. Dazu gehören alle HTML-, CSS-, JavaScript-, Bild- und Konfigurationsdateien (`config.php`, `.env`, etc.), aus denen Ihre Website besteht. Stellen Sie sicher, dass Sie alle Ordner und Dateien im Wurzelordner (oft als `public_html` oder `www` bezeichnet) abrufen, damit der gesamte Inhalt, der für den Betrieb Ihrer Website erforderlich ist, für die Migration gesichert wird.

Wenn Sie ein CMS verwenden und seine Dateien sichern, wählen Sie die für dieses CMS geeignete Backup-Methode aus, indem Sie auf den entsprechenden Tab klicken.

> [!tabs]
> PrestaShop
>>
>> Sichern Sie für PrestaShop kritische Verzeichnisse:
>>
>> - `/admin`: Für Backoffice-Dateien.
>> - `/modules`: Für installierte Module.
>> - `/img`: Für alle Bilder und Symbole.
>> - `/themes`: Für die Dateien des Themes Ihrer Website.
>>
>> Weitere Informationen zur Struktur der PrestaShop-Dateien finden Sie in der [offiziellen technischen Dokumentation](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> Für Joomla! umfassen die wichtigen Dateien, die gesichert werden müssen, die folgenden Verzeichnisse:
>>
>> - `/administrator`: Für das Verwaltungsinterface.
>> - `/components`, `/plugins`: Für installierte Erweiterungen.
>> - `/images`: Für die Mediendateien Ihrer Website.
>>
>> Weitere Informationen zur Struktur der Joomla!-Dateien finden Sie in der [offiziellen Joomla!-Dokumentation](https://docs.joomla.org/).
>>
> Drupal
>>
>> Für Drupal sind folgende wichtige Ordner zu sichern:
>>
>> - `/sites`: Enthält die für Ihre Seite spezifischen Dateien.
>> - `/modules` und `/themes`: Für benutzerdefinierte Module und Designs.
>>
>> Weitere Informationen finden Sie in der [offiziellen Drupal-Dokumentation](https://www.drupal.org/docs).

> [!primary]
>
> Nachdem Sie alle Dateien Ihrer Website heruntergeladen haben, stellen Sie sicher, dass Sie sie in einem leicht identifizierbaren lokalen Ordner ablegen, damit sie leichter auf den VPS übertragen werden können.

#### Schritt 1.3 - Datenbank sichern

> [!primary]
>
> Wenn Sie Web Cloud Databases für Ihre Website verwenden, können Sie diese Datenbank auch ohne Migration weiter verwenden. Ihr VPS stellt eine Verbindung zu Web Cloud Databases her, um die Daten zu verwalten.

Wenn Sie vorhaben, die Datenbank auf den VPS zu migrieren, folgen Sie den Schritten in unserer Anleitung „[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)“, um Ihre Datenbank zu sichern.

### Schritt 2 - Ihren VPS konfigurieren <a name="step2"></a>

> [!primary]
>
> Wenn Sie noch keinen VPS haben, besuchen Sie die [VPS-Produktseite von OVHcloud](/links/bare-metal/vps). Achten Sie darauf, einen VPS zu wählen, der den Anforderungen Ihrer Website in Bezug auf Ressourcen (RAM, CPU, Storage) und die technischen Spezifikationen Ihres CMS entspricht. Wenn Sie noch nicht mit VPS vertraut sind, lesen Sie unsere Anleitung „[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)“.

#### Schritt 2.1 - Verbindung mit Ihrem VPS

In der Anleitung „[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)“ erfahren Sie, wie Sie sich mit Ihrem VPS verbinden.

#### Schritt 2.2 - Installation und Konfiguration eines Webservers auf Ihrem VPS <a name="step2.2"></a>

Sobald Sie mit Ihrem VPS verbunden sind, installieren und konfigurieren Sie eine Web-Entwicklungsumgebung auf Ihrem VPS. Dieser Schritt ist notwendig, um sicherzustellen, dass Ihr Server für die Aufnahme Ihrer Website bereit ist, nachdem die Dateien und die Datenbank übertragen wurden.

Um diese Web-Umgebung zu installieren, lesen Sie unsere Anleitung „[Web-Entwicklungsumgebung auf einem VPS oder Dedicated Server installieren](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)“.

### Schritt 3 - Dateien Ihrer Website per SFTP übertragen

Die Verwendung des **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) ist die empfohlene Methode, um Dateien von Ihrer Website auf Ihren VPS zu übertragen. Es bietet ein höheres Sicherheitsniveau als FTP, da die Verschlüsselung durch den SSH-Dienst verwendet wird, der bereits standardmäßig auf Ihrem VPS von OVHcloud aktiviert ist.

#### Schritt 3.1 - Verbindung zu Ihrem VPS per SFTP

Folgen Sie unserer [Anleitung zur Verwendung von FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) und verwenden Sie die folgende Konfiguration:

- **Host**: Verwenden Sie die IP-Adresse Ihres VPS.
- **Username** und **Password**: die Kennungen Ihres SSH-Benutzerkontos auf dem VPS.
- **Port**: Verwenden Sie Port 22 (Standard für SFTP).

#### Schritt 3.2 - Übertragen Sie Ihre Website-Dateien auf den VPS

Wenn Sie auf Ihrem VPS eingeloggt sind, wird die Ordnerstruktur der lokalen Dateien links im FileZilla Interface und die Ordnerstruktur Ihres VPS rechts angezeigt.

Das Webverzeichnis (oder Webroot) ist der Ort, an dem Ihre Website-Dateien gespeichert werden, um im Internet zugänglich zu sein. **Standardmäßig kann es sich um einen Ordner namens `/var/www/html` oder einen anderen Ordner handeln, der während der Webserverinstallation in [Schritt 2.2](#step2.2) konfiguriert wurde**. Stellen Sie sicher, dass Ihre Dateien im Ordner platziert werden, der als **Webroot** konfiguriert ist, damit Ihre Website ordnungsgemäß funktioniert.

> [!warning]
>
> Wenn Sie sich über SFTP mit einem Nicht-Root-Benutzer (z. B. `debian`) verbinden, haben Sie keine Schreibberechtigung für `/var/www/html`.

**Einfache Vorgehensweise: Dateien in `/home` ablegen und dann mit `sudo` verschieben.**

##### In FileZilla (SFTP)

- Auf der „Remote Site“-Seite (rechte Seite), gehen Sie zu: `/home/debian/`
- Ziehen Sie Ihre Datenbankdatei (z. B. `backup.sql`) in `/home/debian/`. **Platzieren Sie diese Sicherung nicht im Ordner, den Sie später in den Webroot kopieren** (z. B. `/home/debian/site/`) **oder im Webroot** (z. B. `/var/www/html`), da sie öffentlich heruntergeladen werden könnte.
- Erstellen Sie einen Ordner `site` in `/home/debian/` (rechtsklicken → `Verzeichnis erstellen`{.action}), und öffnen Sie ihn.
- Wählen Sie alle Ihre Website-Dateien (die Datenbankdatei sollte nicht mehr darin sein) aus und ziehen Sie sie in `/home/debian/site/`. **Ziehen Sie Ihre SQL-Dumps nicht in diesen Ordner**. Bewahren Sie sie außerhalb des Webroots auf, (z. B. `/home/debian/backup.sql`).

##### Auf Ihrem VPS

Loggen Sie sich via SSH in Ihrem VPS ein, indem Sie den Abschnitt „Mit Ihrem VPS verbinden“ unserer Anleitung „[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)“ verwenden.

Führen Sie die folgenden Befehle aus:

> [!warning]
>
> In diesem Beispiel ist der Webroot `/var/www/html`. Wenn Ihr Webroot anders ist (konfiguriert in Schritt 2.2), ersetzen Sie `/var/www/html` durch Ihren tatsächlichen Pfad.

Erstellen Sie den Webroot, falls er nicht existiert:

```bash
sudo mkdir -p /var/www/html
```

Kopieren Sie den Inhalt von `/home/debian/site/` in den Webroot, wobei die Ordnerstruktur und Metadaten beibehalten werden:

```bash
sudo rsync -a /home/debian/site/ /var/www/html/
```

Alternative, wenn `rsync` nicht installiert ist:

```bash
sudo cp -a /home/debian/site/. /var/www/html/
```

Weisen Sie die Dateien dem Webdienst zu (`www-data` für Nginx/Apache auf Debian/Ubuntu):

```bash
sudo chown -R www-data:www-data /var/www/html
```

Setzen Sie die Berechtigungen der Ordner auf `755` (durchsuchbar) und die Dateiberechtigungen auf `644` (lesbar):

```bash
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

### Schritt 4 - Datenbank auf Ihren VPS importieren (optional)

> [!warning]
>
> Wenn Ihre Datenbank bereits auf Web Cloud Databases gehostet ist, muss sie nicht auf den VPS migriert werden. Sie können die Datenbank auf Web Cloud Databases belassen und Ihren VPS so konfigurieren, dass er sich mit dieser Datenbank verbindet ([Schritt 5](#step5)).

#### Vor dem Start

- Ihre Sicherungsdatei (`.sql`) wurde in Schritt 3.2 platziert (z. B. `/home/debian/backup.sql`).
- Das **D**ata**B**ase **M**anagement **S**ystem (**DBMS**) (MySQL / MariaDB) und sein Befehlszeilen-Client wurden in [Schritt 2.2](#step2.2) installiert.
- Die Datenbank **`db_name`**:
    - **existiert bereits**, wenn Sie sie während Schritt 2.2 (oder über Ihr Adminpanel) erstellt haben.
    - **kann automatisch erstellt werden**, wenn Ihre Sicherungsdatei `.sql` `CREATE DATABASE` enthält.
    - **muss andernfalls vor dem Import erstellt werden.**

    ```bash
    sudo mysql -e "CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ```

    (Ersetzen Sie `db_name` durch Ihren gewünschten Namen).

#### Import der Datenbank

1. Loggen Sie sich via SSH in Ihrem VPS ein, indem Sie den Abschnitt „Mit Ihrem VPS verbinden“ unserer Anleitung „[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)“ verwenden.
2. Starten Sie den Import mit dem DBMS-Client:

    Im folgenden Beispiel verwenden wir MySQL als DBMS. Verwenden Sie die offizielle Dokumentation des DBMS, das Sie während [Schritt 2.2](#step2.2) installiert haben, um den entsprechenden Befehl für den Import der Datenbank auf Ihren VPS zu verwenden.

    ```bash
    mysql -u user_name -p db_name < /home/debian/backup.sql
    ```

    - Ersetzen Sie `user_name` durch Ihren MySQL-(MySQL/MariaDB)-Benutzernamen, nicht Ihren SSH-Anmeldenamen.
    - Ersetzen Sie `db_name` durch den Namen der zu importierenden Datenbank.

3. Geben Sie das DBMS-Benutzerkennwort ein, wenn Sie dazu aufgefordert werden, und warten Sie, bis der Import abgeschlossen ist.

### Schritt 5 - Konfigurationsdateien Ihrer Website einrichten <a name="step5"></a>

Nachdem Sie die Dateien Ihrer Website hochgeladen und gegebenenfalls die Datenbank auf Ihren VPS importiert haben, ist es wichtig, die Konfigurationsdateien Ihrer Website zu aktualisieren, um deren einwandfreie Funktion sicherzustellen. Die wichtigsten Variablen, die angepasst werden müssen, sind häufig die Datenbankverbindungsinformationen und die Ordnerpfade. Hier sind die spezifischen Konfigurationen, die für die wichtigsten CMS aktualisiert werden müssen.

> [!tabs]
> WordPress
>>
>> Bearbeiten Sie die folgenden Variablen in der Datei `wp-config.php`:
>>
>> - **DB_NAME**: Name der Datenbank.
>> - **DB_USER**: Der Datenbankbenutzer.
>> - **DB_PASSWORD**: Das Passwort des Benutzers.
>> - **DB_HOST**: Der Host der Datenbank (normalerweise localhost auf einem VPS).
>>
>> Weitere Informationen finden Sie in der [offiziellen WordPress-Dokumentation](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/).
>>
>> Weitere Informationen zur Sicherheit finden Sie in der offiziellen Dokumentation zu den [Datei-Berechtigungen für WordPress](https://wordpress.org/support/article/changing-file-permissions/).
>>
> PrestaShop
>>
>> Bearbeiten Sie die folgenden Variablen in der Datei `parameters.php`:
>>
>> - **database_host**: Der Host der Datenbank.
>> - **database_name**: Der Name der Datenbank.
>> - **database_user**: Der Datenbankbenutzer.
>> - **database_password**: Das Datenbankkennwort.
>>
>> Weitere Informationen finden Sie in der [offiziellen PrestaShop-Dokumentation](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> Weitere Informationen zur Sicherheit finden Sie in der [offiziellen Dokumentation](https://devdocs.prestashop-project.org/) zu Dateiberechtigungen für PrestaShop.
>>
> Joomla!
>>
>> Bearbeiten Sie die folgenden Variablen in der Datei `configuration.php`:
>>
>> - **public $host**: Der Host der Datenbank (oft localhost).
>> - **public $db**: Der Name der Datenbank.
>> - **public $user**: Der Datenbankbenutzer.
>> - **public $password**: Das Datenbankkennwort.
>>
>> Weitere Informationen finden Sie in der [offiziellen Dokumentation von Joomla!](https://docs.joomla.org/).
>>
>> Weitere Informationen zur Sicherheit finden Sie in der offiziellen Dokumentation zu den [Dateiberechtigungen für Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F).
>>
> Drupal
>>
>> Bearbeiten Sie die folgenden Variablen in der Datei `settings.php`:
>>
>> - **Host**: Der Host der Datenbank (oft localhost).
>> - **database**: Name der Datenbank.
>> - **username**: Der Datenbankbenutzer.
>> - **password**: Das Passwort der Datenbank.
>>
>> Weitere Informationen finden Sie in der [offiziellen Drupal-Dokumentation](https://www.drupal.org/documentation).
>>
>> Weitere Informationen zur Sicherheit finden Sie in der offiziellen Dokumentation zu den [Dateiberechtigungen für Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership).
>>
> Ohne CMS
>>
>> **1. Datenbankverbindungsinformationen aktualisieren**
>>
>> Identifizieren Sie die Konfigurationsdateien (wie `config.php` oder `.env`). Einige können sich in Unterordnern befinden. Suchen Sie in diesen Dateien nach den Datenbankverbindungseinstellungen, und ändern Sie diese entsprechend den neuen Werten des VPS:
>>
>> - **DB_HOST**: Adresse des Datenbankservers.
>> - **DB_NAME**: Name der Datenbank.
>> - **DB_USER**: Datenbankbenutzer.
>> - **DB_PASSWORD**: Passwort.
>>
>> **2. Dateipfade konfigurieren**
>>
>> Einige Websites verwenden absolute Pfade (Beispiel: `/home/user/public_html/`) für bestimmte Dateien oder Ressourcen wie Bilder, CSS-Dateien usw. Stellen Sie sicher, dass diese Pfade der Struktur des Servers auf dem VPS entsprechen, z.B. `/var/www/html/`.
>>
>> Um Fehler beim Laden von Dateien oder fehlerhafte Verknüpfungen zu vermeiden, stellen Sie sicher, dass diese Pfade in allen Konfigurationsdateien, `.htaccess` oder anderen Skripten, die Verknüpfungen zu diesen Ressourcen enthalten, angepasst werden. Dadurch wird sichergestellt, dass die Website auch nach der Migration alle Elemente findet, die für ihr Funktionieren erforderlich sind.
>>
>> **3. .htaccess-Datei bearbeiten** (optional)
>>
>> Stellen Sie sicher, dass die Datei `.htaccess` für die neue Umgebung konfiguriert ist. Wenn Sie die URLs mithilfe von Rewrite-Regeln (`RewriteRule`) anpassen, überprüfen Sie, ob die Pfade für die Struktur Ihres VPS geeignet sind (Beispiel: `/var/www/html/` anstelle von `/public_html/`). So wird sichergestellt, dass Weiterleitungen und Zugänge funktionieren.
>>
>> Wenn die Datei `.htaccess` Zugriffsbeschränkungen oder Sicherheitseinstellungen enthält, z.B. das Deaktivieren der Verzeichnisliste oder die Konfiguration der Zwischenspeicherung, ändern Sie diese Einstellungen entsprechend den Sicherheitseinstellungen und -bedingungen Ihres neuen Servers.
>>
>> **4. Datei- und Ordnerberechtigungen konfigurieren**
>>
>> Stellen Sie sicher, dass die Berechtigungen (z.B. `chmod`) für Dateien und Ordner korrekt konfiguriert sind, um Zugriffsfehler zu vermeiden. Auf einem VPS sind die empfohlenen Berechtigungen oft `755` für Ordner und `644` für Dateien, aber dies kann je nach Sicherheitsanforderungen variieren.

Wenn Sie Web Cloud Databases verwenden, überprüfen Sie, ob Ihr VPS sich mit dieser Datenbank verbinden darf. Fügen Sie hierzu die IP-Adresse des VPS zur Liste der autorisierten IP-Adressen hinzu. Diese Konfiguration erlaubt es, den Zugriff auf die Datenbank abzusichern und Verbindungsprobleme zu vermeiden. Lesen Sie den Abschnitt „Autorisieren einer IP-Adresse“ unserer Anleitung „[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

### Schritt 6 - Ihren Domainnamen mit der IP-Adresse des VPS verbinden

> [!primary]
>
> Bevor Sie die Einträge in Ihrer DNS Zone ändern, um auf die IP-Adresse des VPS zu verweisen, wird empfohlen, den **T**ime **T**o **L**ive (**TTL**) zu reduzieren. Dadurch wird die Propagation von Änderungen beschleunigt, da die DNS-Server die Informationen schneller aktualisieren. Folgen Sie dem Schritt „Die Propagationszeit“ unserer Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“, um die TTL anzupassen und die Einträge so zu konfigurieren, dass der Domainname auf den VPS zeigt.

Um den Domainnamen Ihrer Website auf Ihren VPS verweisen zu lassen, konfigurieren Sie die DNS-Einträge des Domainnamen so, dass der Traffic auf die öffentliche IP-Adresse Ihres VPS geleitet wird. Um Sie bei diesem Vorgang zu unterstützen, folgen Sie unserer Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

### Schritt 7 - Funktionstüchtigkeit Ihrer Website überprüfen

Testen Sie nach Abschluss der Migration Ihre Website, um sicherzustellen, dass sie wie erwartet funktioniert. Überprüfen Sie alle wichtigen Funktionen (Formulare, Benutzerverbindungen, Onlinezahlung, etc.), und stellen Sie sicher, dass alle Seiten korrekt angezeigt werden.

### Schritt 8 - Ihren VPS absichern

Nachdem Sie Ihre Website auf Ihren VPS migriert haben, ist es entscheidend, Ihren Server zu sichern, um Ihre Daten zu schützen und das Funktionieren Ihrer Dienste zu gewährleisten. Hier sind einige Maßnahmen, um die Sicherheit Ihres VPS zu erhöhen:

- Das von OVHcloud bereitgestellte SSH-Passwort und den Standard-SSH-Zugriffsport ändern.
- Konfigurieren einer Firewall.
- Konfigurieren der Zwei-Faktor-Authentifizierung (2FA).
- Die Logs überwachen.
- etc.

Eine vollständige Liste der bewährten Sicherheitspraktiken finden Sie in unserer Anleitung „[Einen VPS absichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)“.

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
