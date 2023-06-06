---
title: "Tutorial - Ein Verzeichnis oder das Verwaltungsinterface Ihrer Website durch .htaccess und .htpasswd Dateien schützen"
slug: hosting-htaccess-authentifizierung
excerpt: "Diese Anleitung erklärt, wie Sie ein Verzeichnis oder den Zugang zur Verwaltung Ihrer Website durch Authentifizierung mit den Dateien .htaccess und .htpasswd schützen"
section: Weiterleitung und Authentifizierung
order: 02
updated: 2023-06-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 01.06.2023**

## Ziel 

In dieser Anleitung erfahren Sie, wie Sie eine "Benutzer/Passwort"-Authentifizierung einrichten, um über einen Webbrowser auf Ihre Website ganz oder teilweise zuzugreifen. 

Verwenden Sie hierzu zwei Apache-Konfigurationsdateien (HTTP), die in [FTP-Bereich](/pages/web/hosting/ftp_connection) Ihres Webhostings zu platzieren sind: 

- "**.htaccess**": Weitere Informationen zu den Funktionen dieser Datei finden Sie in unserem Tutorial zu den ["Operationen mit einer ".htaccess"-Datei"](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**: In Ergänzung zu dieser Anleitung lesen Sie die [offizielle Apache Dokumentation](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) zu dieser Datei.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>
> Folgende Beispiele sind in Dateien mit dem Namen ".htaccess" und ".htpasswd" zu erstellen. Achtung, die Regeln, die Sie in diesen Dateien festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie systematisch die Regeln, die Sie hinzufügen, bevor Sie sie auf Ihrer Website anwenden. 
> 

**Diese Anleitung erklärt, wie Sie ein Verzeichnis oder den Zugang zum Administratorteil Ihrer Website durch Authentifizierung mit den Dateien ".htaccess" und ".htpasswd" schützen.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt.
- Sie verfügen über die Zugangsdaten zum [FTP-Bereich Ihres Hostings](/pages/web/hosting/ftp_connection).

## In der praktischen Anwendung

> [!primary]
>
> Die hier vorgeschlagene Sicherheitslösung ist nur eine von vielen technischen Möglichkeiten. 
>
> Beachten Sie zum Beispiel, dass bei der Verwendung eines **C**Onent **M**Anbindung **S**System (**CMS**) andere Sicherheitslösungen bestehen.
>
> Wenn Sie ein CMS WordPress verwenden, stellt OVHcloud auch ein Tutorial zur Verfügung über die [Verwendung der htaccess-Datei mit WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> Bei Fragen zur Erstellung, Nutzung oder Programmierung Ihrer Website wird der OVHcloud Support Sie in diesen Fragen nicht unterstützen können.
>
> Kontaktieren Sie hierzu unsere [User Community](https://community.ovh.com/en/) oder unsere [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
>

Wir erklären Ihnen die 4 wichtigsten Schritte zum Schutz des Zugriffs auf ein Verzeichnis oder Teile Ihrer Website:

- "crypt.php", ".htaccess" und ".htpasswd" Dateien erstellen
- Verschlüsselte Passwörter mit der Datei "crypt.php" erstellen
- Mit der Datei ".htpasswd" verschlüsselte Benutzer und Passwörter festlegen
- Regeln in der Datei ".htaccess" konfigurieren und die Datei "crypt.php" löschen.

> [!warning]
>
> Die folgenden Schritte optimieren die Sicherheit Ihrer gehosteten Daten.
> Deshalb empfehlen wir Ihnen, wenn Ihre Websites kompatibel sind, die aktuellste PHP Version zu verwenden.
> 
> Um die PHP-Version Ihrer Webseiten auf Ihrem Webhosting zu ändern, lesen Sie folgende Anleitungen:
> 
> - [Konfiguration Ihres Webhostings ändern](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [PHP-Version Ihres Webhostings ändern](/pages/web/hosting/ovhconfig_modify_system_runtime/)
>
> Die unten aufgeführten Skripte und Informationen funktionieren nur mit einer Ausführungsumgebung und einer aktuellen PHP Version.
> 
> Bei Bedarf empfehlen wir Ihnen, Ihre Website zu optimieren, damit sie kompatibel ist, bevor Sie Folgendes einrichten. Dadurch verringert sich das Risiko, dass Ihre Daten durch Sicherheitslücken gehackt werden.
>

### Schritt 1: die Dateien "crypt.php", "htaccess" und "htpasswd" erstellen

Verbinden Sie sich mit [dem FTP Speicherplatz](/pages/web/hosting/ftp_connection) Ihres Webhostings. Öffnen Sie das ["Wurzelverzeichnis"](/pages/web/hosting/multisites_configure_multisite), auf das Ihre Domain verweist.

Erstellen Sie eine crypt.php-Datei in diesem "Wurzelverzeichnis".

![root_folder](images/root_folder.png){.thumbnail}

Öffnen oder erstellen Sie den Ordner zum Schutz vor Ihrer Website. In unserem Beispiel geht es um den Admin-Fall. Erstellen Sie in diesem Verzeichnis eine ".htpasswd" Datei und eine ".htaccess" Datei.

![folder_admin](images/folder_admin.png){.thumbnail}

- **eine einzige** ".htaccess"-Datei und **eine einzige** ".htpasswd"-Datei nach Verzeichnis oder Unterverzeichnis, um Konflikte zwischen verschiedenen ".htaccess"-Dateien und ".htpasswd"-Dateien zu vermeiden;
- die Dateien ".htaccess"und ".htpasswd"sind für Besucher Ihrer Website unsichtbar;
- Die in einer ".htaccess"-Datei angegebenen Regeln gelten für das gesamte Verzeichnis, in dem die ".htaccess"-Datei installiert ist, sowie für alle Unterverzeichnisse desselben Verzeichnisses.
- ".htpasswd"und ".htaccess"Dateien können in verschiedenen Ordnern gespeichert sein. Für mehr als ".htaccess" kann nur eine ".htpasswd" Datei verwendet werden.

### Schritt 2: Datei "crypt.php" vervollständigen

Gehen Sie in den "Wurzelverzeichnis", in dem Sie die Datei "crypt.php" erstellt haben. Klicken Sie auf `Bearbeiten`{.action} und legen Sie folgende Zeilen auf:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Ersetzen Sie ausschließlich einen `plain_text_password` mit dem Passwort **in heller Form**, das Sie verschlüsseln möchten.

**Sie können das Skript an die Anzahl der Passwörter anpassen, die Sie verschlüsseln möchten.**

- Beispiel: Das PHP Skript verschlüsselt 3 Passwörter in einer einzigen Operation:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Ersetzen Sie ausschließlich die Wörter `plain_text_password1`, `plain_text_password2` und `plain_text_password3` mit den Passwörtern **in heller**", die Sie verschlüsseln möchten.

> [!primary]
>
> Die beiden oben genannten Skripte verwenden zum jeweiligen Zeitpunkt die von Apache empfohlene sicherste Verschlüsselungsmethode unter Verwendung des Algorithmus **bcrypt**.
>
> Weitere Informationen zum Thema finden Sie in der [offiziellen Apache Dokumentation](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Wenn Sie über ein [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) Hosting verfügen, loggen Sie sich anschließend in [SSH](/pages/web/hosting/ssh_on_webhosting) mit Ihrem Webhosting ein. Gehen Sie in den "**Wurzelverzeichnis**", in dem sich Ihr "crypt.php"-Skript befindet.

Verwenden Sie hierzu folgenden SSH-Befehl:

```bash
cd Name_of_your_root_folder
```

Ersetzen Sie den Namen `Name_of_your_root_folder` mit dem Namen Ihres "Wurzelverzeichnisses", um den Standort Ihres Skripts "crypt.php" zu ermitteln.

Wenn sich zum Beispiel Ihre Datei "crypt.php" in einem Unterordner Ihres "Wurzelverzeichnisses" befindet, verwenden Sie folgenden SSH-Befehl:

```bash
cd Name_of_your_root_folder/sub_folder
```

Ersetzen Sie den Namen `Name_of_your_root_folder` durch den Namen Ihres "Wurzelverzeichnisses" und `sub_folder` durch den Unterordner Ihres "crypt.php"-Skripts.

Wenn Sie auf der Ebene Ihres "crypt.php" Skripts anwesend sind, führen Sie folgenden Befehl aus:

```bash
php crypt.php
```

> [!warning]
>
> Aus Sicherheitsgründen wird SSH empfohlen. Wenn Sie jedoch über ein [Kimsufi Web](https://www.kimsufi.com/de/hosting.xml) oder [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) Angebot verfügen, für das SSH nicht verfügbar ist, können Sie auch die Datei "crypt.php" über Ihren Webbrowser ausführen.
>
> Geben Sie hierzu folgende URL ein: `https://domain.tld/crypt.php` dadurch, dass Sie Ihren eigenen Domainnamen nach `domain.tld` ändern. Dies geschieht direkt in der Adresszeile Ihres Webbrowsers.
>

Rufen Sie verschriebene Passwörter ab **ohne zu kopieren** den "&#60;br />", wenn Sie den Befehl "*php crypt.php*" per SSH ausführen:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Die Werte `encrypted_password1`,`encrypted_password2` und `encrypted_password3` müssen zum Beispiel dem Format der folgenden Zeile entsprechen:

```bash
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Überprüfen Sie nur, ob Ihr verschlüsselt verlaufenes Passwort / Ihre verschlüsselten Passwörter bei `$2y$` beginnen. Dies bestätigt Ihnen, dass Ihr(e) Passwort(e) mit dem gesicherten Algorithmus verschlüsselt wurde(n) **bcrypt**.

### Schritt 3: die Benutzer und Passwörter mit der Datei ".htpasswd" verschlüsseln

Die Datei ".htpasswd" enthält die jeweils verschlüsselten Passwörter für jeden in der Datei angegebenen Benutzer. Nur diese Benutzer können sich mit dem Verzeichnis verbinden, dessen Zugang Sie schützen möchten.

Geben Sie hierzu für **jeden Benutzer** in diese Datei eine Zeile mit seiner Kennung und seinem verschlüsselten Passwort ein:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Ersetzen Sie die Werte `user1`, `user2` und `user3` mit Ihren eigenen Benutzernamen.

Ersetzen Sie auch die `encrypted_password1`, `encrypted_password2` und `encrypted_password3` mit Ihren eigenen verschlüsselten Passwörtern, die Sie zuvor abgerufen haben.

### Schritt 4: die Regeln in der ".htaccess"-Datei konfigurieren

#### Zugang zu einem vollständigen Verzeichnis blockieren

Erstellen Sie im zu schützenden Verzeichnis eine ".htaccess" Datei mit folgendem Code:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

Ersetzen Sie im oben stehenden Skript die folgenden Elemente mit Ihren eigenen Werten:

-`"Indicates your login(s)"`: entspricht dem Benutzer, dem/den der Zugriff auf das vollständige Verzeichnis gestattet ist. Wenn Sie mehrere Benutzer haben, teilen Sie diese nur über einen *Speicherplatz* auf.
- `your_ftp_login`: den FTP-Login, den Sie verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden. Um Ihren FTP-Login abzurufen lesen Sie unsere Anleitung zur [Verbindung mit Ihrem FTP-Bereich](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Zugriffspfad: Verzeichnis vom FTP-Wurzelverzeichnis Ihres Webhostings bis zur Datei ".htpasswd", die zur Authentifizierung der Benutzer verwendet wird, die gemäß der in Ihrer ".htaccess"-Datei enthaltenen Regel autorisiert sind.

#### Zugang zu einer oder mehreren Dateien blockieren

Um den Zugriff auf eine oder mehrere bestimmte Dateien zu blockieren, fügen Sie eine [Files-Richtlinie](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} in der Datei ".htaccess" hinzu:

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

Ersetzen Sie im oben stehenden Skript die folgenden Elemente mit Ihren eigenen Werten:

- `test.php`: Name der spezifischen Datei oder Dateigruppe, in unserem Beispiel den Begriff **test.php** (Begriff, für den die Zugangsbeschränkung gelten soll).
-`"Indicates your login(s)"`: entspricht dem/den Benutzer, der/die zum Zugriff auf Dateien berechtigt ist/sind, deren Namen **test.php** enthalten. Wenn Sie mehrere Benutzer haben, teilen Sie diese über einen *Speicherplatz* auf.
- `your_ftp_login`: den FTP-Login, den Sie verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden. Um Ihren FTP-Login abzurufen lesen Sie unsere Anleitung zur [Verbindung mit Ihrem FTP-Bereich](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Zugriffspfad vom FTP-Wurzelverzeichnis Ihres Webhostings bis zur Datei ".htpasswd", die zur Authentifizierung der gemäß der ".htaccess"-Datei-Richtlinie autorisierten Benutzer verwendet werden soll.

> [!warning]
>
> Sie müssen eine [Files-Richtlinie](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} für **jede zu schützende Datei** angeben.
>
> Die Files-Richtlinien gelten für alle Dateien desselben Namens oder enden mit dem angegebenen Namen. Dies, sofern sie im selben Verzeichnis wie ".htaccess" oder in einem seiner Unterverzeichnisse enthalten sind.
>
> In der oben genannten Konfiguration, z. B. "new_test.php"enthält **test.php** in seinem Namen, würde die Files-Richtlinie auch für eine "new_test.php"-Datei gelten, die in einem Unterverzeichnis des "admin"-Verzeichnisses enthalten ist.
>
> Bis Sie sich für den Zugang zu den von der Richtlinie betroffenen Dateien authentifiziert haben, erscheinen diese möglicherweise nicht und können daher nicht über eine Seite mit index of "auflistet.
>

> [!alert]
>
> Wenn Sie die Einrichtung Ihrer Dateien ".htaccess" und ".htpasswd" abgeschlossen haben, löschen Sie die Verschlüsselungsdatei "crypt.php" von Ihrem Webhosting.
>

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Dokumentation Apache](https://httpd.apache.org/docs/2.4/){.external}

[Mit dem FTP Bereich Ihres Webhostings verbinden](/pages/web/hosting/ftp_connection)

[Tutorial - Durchführbare Operationen mit einer ".htaccess"-Datei](/pages/web/hosting/htaccess_what_else_can_you_do)

[Den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess-Datei blockieren](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Umschreiben der URL für den Zugang zu meiner Website mithilfe des mod_rewrite über die .htaccess-Datei](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.