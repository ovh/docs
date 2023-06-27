---
title: "Tutorial - Ordner und Verwaltungsinterface Ihrer Website mit den Dateien .htaccess und .htpasswd schützen"
excerpt: "Erfahren Sie hier, wie Sie Verzeichnisse oder den Adminbereich Ihrer Website durch Authentifizierung mittels .htaccess und .htpasswd schützen"
updated: 2023-06-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 01.06.2023**

## Ziel 

In dieser Anleitung erfahren Sie, wie Sie eine "Benutzer/Passwort"-Authentifizierung zum Browser-Zugang auf Ihre Website oder Bereiche davon einrichten. 

Verwenden Sie hierzu zwei Apache-Konfigurationsdateien (HTTP), die im [FTP-Bereich](/pages/web/hosting/ftp_connection) Ihres Webhostings abzulegen sind: 

- "**.htaccess**": Weitere Informationen zu den Funktionen dieser Datei finden Sie in unserem Tutorial zu den möglichen [Operationen mit einer .htaccess Datei](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**": Als Ergänzung zu dieser Anleitung finden Sie mehr Informationen in der [offiziellen Apache Dokumentation](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) zu dieser Datei.


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>
> Die folgenden Beispiele sind in eine ".htaccess" Datei oder eine ".htpasswd" Datei einzufügen. Achtung, die Regeln, die Sie in diesen Dateien festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie systematisch die Regeln, die Sie hinzufügen, bevor Sie sie auf Ihrer Website anwenden. 
> 

**Diese Anleitung erklärt, wie Sie ein Verzeichnis oder den Zugang zum Adminbereich Ihrer Website durch Authentifizierung mit den Dateien ".htaccess" und ".htpasswd" schützen.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie verfügen über die Zugangsdaten zum [FTP-Bereich Ihres Hostings](/pages/web/hosting/ftp_connection).


## In der praktischen Anwendung

> [!primary]
>
> Die hier vorgeschlagene Sicherheitslösung ist nur eine von mehreren technischen Möglichkeiten. 
>
> Beispielsweise können bei der Verwendung eines **C**ontent **M**anagement **S**ystem (**CMS**) andere Sicherheitsmaßnahmen eingesetzt werden.
>
> Wenn Sie WordPress verwenden, lesen Sie hierzu das OVHcloud Tutorial zur [Verwendung von .htaccess mit WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> Bei Fragen zur Erstellung, Nutzung oder Programmierung Ihrer Website kann der OVHcloud Support Sie nicht unterstützen.
>
> Kontaktieren Sie hierzu unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
>

Wir erklären die 4 wichtigsten Schritte zum Schutz des Zugriffs auf ein Verzeichnis oder Teile Ihrer Website:

- Erstellung der Dateien "crypt.php", ".htaccess" und ".htpasswd"
- Verschlüsselte Passwörter mit der Datei "crypt.php" erstellen
- In der Datei ".htpasswd" verschlüsselte Benutzer und Passwörter festlegen
- Regeln in der ".htaccess" konfigurieren und die Datei "crypt.php" löschen

> [!warning]
>
> Die folgenden Schritte optimieren die Sicherheit Ihrer gehosteten Daten.
> Deshalb empfehlen wir Ihnen, wenn Ihre Websites kompatibel sind, die aktuellste Version von PHP zu verwenden.
> 
> Um die PHP-Version Ihrer Webseiten auf Ihrem Webhosting zu ändern, lesen Sie folgende Anleitungen:
> 
> - [Konfiguration eines Webhostings bearbeiten](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [PHP-Version eines Webhostings ändern](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014/)
>
> Die hier beschriebenen Skripte und Informationen funktionieren nur im Modus "Produktion" und mit einer aktuellen PHP-Version.
> 
> Wir empfehlen, Ihre Website zu optimieren, um sie mit aktuellen Standards kompatibel zu machen, bevor Sie die folgenden Änderungen duchführen. Dadurch wird das Risiko, dass Sicherheitslücken ausgenutzt werden, um Ihre Website zu hacken, weiter verringert.
>

### Schritt 1: Erstellen von "crypt.php", ".htaccess" und ".htpasswd"

Loggen Sie sich im [FTP-Bereich](/pages/web/hosting/ftp_connection) Ihres Webhostings ein. Öffnen Sie das [Wurzelverzeichnis](/pages/web/hosting/multisites_configure_multisite), mit dem Ihr Domainname verknüpft ist.

Erstellen Sie die Datei "crypt.php" in diesem Wurzelverzeichnis.

![root_folder](images/root_folder.png){.thumbnail}

Öffnen oder erstellen Sie den Ordner, dessen Zugang Sie sichern möchten. Im folgenden Beispiel ist das der Ordner "admin". Erstellen Sie in diesem Verzeichnis die Dateien ".htpasswd" und ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

Beachten Sie diese Regeln, um mit den Dateien ".htpasswd" und ".htaccess" korrekt umzugehen:

- Erstellen Sie **je nur eine** ".htaccess" und ".htpasswd" pro Verzeichnis oder Unterverzeichnis, um Konflikte zwischen verschiedenen ".htaccess" und ".htpasswd" zu vermeiden.
- Die Dateien ".htaccess" und ".htpasswd" sind für Besucher Ihrer Website nicht sichtbar.
- Die in ".htaccess" angegebenen Regeln gelten für das gesamte Verzeichnis, in dem die ".htaccess" Datei liegt, sowie für alle dessen Unterverzeichnisse.
- ".htpasswd" und ".htaccess" können in verschiedenen Ordnern liegen. Eine ".htpasswd" Datei kann für mehrere ".htaccess" Dateien verwendet werden.

### Schritt 2: Bearbeiten der Datei "crypt.php"

Öffnen Sie die Datei "crypt.php" im Wurzelverzeichnis, in dem sie erstellt wurde. Klicken Sie auf `Bearbeiten`{.action} und fügen Sie folgende Zeilen ein:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Ersetzen Sie `plain_text_password` mit dem **Klartext-Passwort**, das Sie verschlüsseln möchten.

**Sie können das Skript an die Anzahl der Passwörter anpassen, die Sie verschlüsseln möchten.**

- Beispiel eines PHP-Skripts, um 3 Passwörter in einer einzigen Operation zu verschlüsseln:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Ersetzen Sie `plain_text_password1`, `plain_text_password2` und `plain_text_password3` mit den **Klartext-Passwörtern**, die Sie verschlüsseln möchten.

> [!primary]
>
> Die beiden oben genannten Skripte verwenden die zum Zeitpunkt von Apache empfohlene sicherste Verschlüsselungsmethode unter Verwendung des Algorithmus **bcrypt**.
>
> Weitere Informationen zum Thema finden Sie in der [offiziellen Apache Dokumentation](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Wenn Sie über ein Webhosting [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder Webhosting [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) verfügen, loggen Sie sich über [SSH](/pages/web/hosting/ssh_on_webhosting) in Ihr Webhosting ein. Wechseln Sie zum "**Wurzelverzeichnis**", in dem sich Ihr Skript "crypt.php" befindet.

Verwenden Sie hierzu folgenden Befehl:

```bash
cd Verzeichnisname
```

Ersetzen Sie `Verzeichnisname` mit dem vollständigen Dateipfad zur Datei "crypt.php".

Wenn sich zum Beispiel "crypt.php" in einem Unterordner Ihres Wurzelverzeichnisses befindet, verwenden Sie folgenden Befehl:

```bash
cd Verzeichnisname/Unterverzeichnis
```

Ersetzen Sie `Verzeichnisname` mit dem Namen Ihres Wurzelverzeichnisses und `Unterverzeichnis` mit dem Namen des Unterordners mit der Datei "crypt.php".

Wenn Sie auf der Verzeichnisebene des Skripts "crypt.php" sind, führen Sie folgenden Befehl aus:

```bash
php crypt.php
```

> [!warning]
>
> Die Verwendung von SSH wird aus Sicherheitsgründen empfohlen. Wenn es sich bei Ihrem Hosting jedoch um ein [Kimsufi Web](https://www.kimsufi.com/de/hosting.xml) oder ein [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) Webhosting handelt, ist SSH nicht verfügbar. Sie können dann die Datei "crypt.php" über Ihren Browser ausführen.
>
> Geben Sie hierzu die URL `https://domain.tld/crypt.php` ein und ersetzen Sie `domain.tld` mit Ihrem Hosting-Domainnamen in der Adresszeile Ihres Browsers.
>

Kopieren Sie die verschlüsselten Passwörter aus der Datei, **ohne** den Teil “&#60;br />”, nachdem Sie den Befehl "*php crypt.php*" per SSH ausgeführt haben.

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Die Werte `encrypted_password1`,`encrypted_password2` und `encrypted_password3` haben dann ein Format entsprechend der folgenden Zeile:

```text
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Überprüfen Sie, das Ihre verschlüsselten Passwörter mit `$2y$` beginnen. Das ist die Bestätigung, dass Ihre Passwörter mit dem sicheren Algorithmus **bcrypt** verschlüsselt wurden.

### Schritt 3: Benutzer und Passwörter in der Datei ".htpasswd" einrichten

Die Datei ".htpasswd" enthält die verschlüsselten Passwörter für jeden in der Datei eingetragenen Benutzer. Nur diese Benutzer können das geschützte Verzeichnis aufrufen.

Geben Sie hierzu für **jeden Benutzer** in diese Datei eine Zeile mit dem Login und dem zugehörigen verschlüsselten Passwort ein:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Ersetzen Sie die Werte `user1`, `user2` und `user3` mit Ihren Benutzernamen.

Ersetzen Sie die Werte `encrypted_password1`, `encrypted_password2` und `encrypted_password3` mit Ihren verschlüsselten Passwörtern, die Sie zuvor generiert haben.

### Schritt 4: Regeln in der ".htaccess" konfigurieren

#### Zugang zu einem vollständigen Verzeichnis blockieren

Erstellen Sie im zu schützenden Verzeichnis eine ".htaccess" Datei mit folgendem Code:

```bash
AuthName "Logins"
AuthType Basic
AuthUserFile "/home/ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

Ersetzen Sie im oben stehenden Skript die folgenden Elemente mit Ihren eigenen Werten:

- `Logins`: Liste der Benutzer, denen Zugriff auf das Verzeichnis gestattet ist. Wenn Sie mehrere Benutzer eintragen, separieren Sie diese mit einem *Leerzeichen*.
- `ftp_login`: FTP-Benutzername, den Sie verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden. Um Ihren FTP-Login zu ermitteln, lesen Sie unsere Anleitung zum [FTP-Bereich Ihres Hostings](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Zugriffspfad vom FTP-Wurzelverzeichnis Ihres Webhostings bis zur Datei ".htpasswd", die zur Authentifizierung der in der ".htaccess" aufgeführten Benutzer verwendet wird.

#### Zugang zu einer oder mehreren Dateien blockieren

Um den Zugriff auf eine Datei oder mehrere Dateien zu blockieren, fügen Sie eine [Files-Direktive](https://httpd.apache.org/docs/2.4/de/mod/core.html#files){.external} zur “.htaccess“ Datei hinzu:


```bash
<Files test.php>

AuthName Logins
AuthType Basic
AuthUserFile "/home/ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

Ersetzen Sie im oben stehenden Skript die folgenden Elemente mit Ihren eigenen Werten:

- `test.php`: Name der spezifischen Datei oder Dateigruppe, welche in diesem Beispiel **test.php** beinhaltet (Zeichenfolge, für die die Zugangsbeschränkung gelten soll).
- `Logins`: Liste der Benutzer, denen Zugriff auf das Verzeichnis gestattet ist. Wenn Sie mehrere Benutzer eintragen, separieren Sie diese mit einem *Leerzeichen*.
- `ftp_login`: FTP-Benutzername, den Sie verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden. Um Ihren FTP-Login zu ermitteln, lesen Sie unsere Anleitung zum [FTP-Bereich Ihres Hostings](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Zugriffspfad vom FTP-Wurzelverzeichnis Ihres Webhostings bis zur Datei ".htpasswd", die zur Authentifizierung der in der ".htaccess" aufgeführten Benutzer verwendet wird.

> [!warning]
>
> Eine [Files-Direktive](https://httpd.apache.org/docs/2.4/de/mod/core.html#files){.external} ist für **jede zu schützende Datei** anzugeben.
>
> Die Files-Direktiven gelten für alle Dateien desselben Namens und für passende Dateinamen (letzte Komponente des Dateinamens). Dies gilt, sofern sie im selben Verzeichnis wie “.htaccess“ oder in einem der Unterverzeichnisse enthalten sind.
>
> In der oben gezeigten Konfiguration beispielweise würde die Files-Direktive auch für eine Datei “neu_test.php“ gelten, die in einem Unterverzeichnis des Ordners “admin“ liegt (da der Dateiname **test.php** enthält).
>
> Bis Sie sich für den Zugang zu den von der Richtlinie betroffenen Dateien authentifiziert haben, erscheinen diese möglicherweise nicht und können daher nicht über eine "index of" Seite aufgelistet werden.
>

> [!alert]
>
> Wenn Sie die Einrichtung Ihrer ".htaccess" und ".htpasswd" abgeschlossen haben, löschen Sie die Verschlüsselungsdatei "crypt.php" von Ihrem Webhosting.
>

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Dokumentation Apache](https://httpd.apache.org/docs/2.4/){.external}

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web/hosting/ftp_connection/)

[Tutorial - Operationen mit .htaccess Dateien](/pages/web/hosting/htaccess_what_else_can_you_do)

[Tutorial - Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess Datei sperren?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Tutorial - Die URL einer Website mit mod_rewrite über die .htaccess Datei umschreiben](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
