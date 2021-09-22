---
title: Das Verwaltungsinterface Ihrer Website durch eine .htaccess-Datei schützen
slug: hosting-htaccess-wie-lacces-a-backup-durch-authentifizierung
legacy_guide_number: 1968
excerpt: Hier erfahren Sie, wie Sie den Zugang zur Verwaltung Ihrer Website mit einer .htaccess-Datei schützen.
section: Weiterleitung und Authentifizierung
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 20.09.2021**

## Ziel

Manchmal kann es notwendig sein, den Zugang zu einem Teil Ihrer Website durch Zugangsdaten zu schützen. Sie können unter anderem eine “.htaccess“-Datei einrichten, um den Zugang zu Ihrem Verwaltungsinterface zu schützen.

**Diese Anleitung erklärt, wie Sie den Zugang zum Administrator-Teil Ihrer Website durch eine “.htaccess“-Datei per Authentifizierung schützen.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther).
>

## Voraussetzungen

- Sie verfügen über ein [Webhosting Angebot](https://www.ovh.de/hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie verfügen über die Login-Daten, um sich mit dem [Speicherplatz Ihres Hostings zu verbinden](../verbindung-ftp-speicher-webhosting/).

## In der praktischen Anwendung

> [!primary]
>
> Die hier vorgeschlagene Lösung ist nur eine von vielen technischen Möglichkeiten, um einen Administratorbereich auf Ihrer Seite einzurichten. Sie können auch die von [OVHcloud](https://www.ovhcloud.com/de/) angebotene [1-Klick-Modul Funktion](../webhosting_installation_von_webhosting-modulen/) verwenden.
>
> Kontaktieren Sie für Anfragen zur Erstellung oder Programmierung Ihrer Website unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/). Wir werden Sie in diesen Fragen nicht unterstützen können.
>

### Schritt 1: Baumstruktur erstellen

Loggen Sie sich in den [Speicherplatz Ihres Hostings](../verbindung-ftp-speicher-webhosting/) ein. [“Wurzelverzeichnis“](../multisites-mehrere-websites-konfigurieren/#schritt-21-eine-bei-ovhcloud-registrierte-domain-hinzufugen) öffnen.<br>
Erstellen Sie “eine crypter.php“ Datei.

![root_folder](images/root_folder.png){.thumbnail}

Öffnen oder erstellen Sie den Ordner, der den “Admin“-Bereich Ihrer Website enthält. Erstellen Sie in diesem Verzeichnis eine “.htpasswd“-Datei und eine “.htaccess“-Datei.

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> “.htpasswd“ und “.htaccess“-Dateien können in verschiedenen Ordnern gespeichert sein. Für mehr als “.htaccess“ kann nur eine “.htpasswd“ Datei verwendet werden.
>
> Die durch eine “.htaccess“-Datei definierten Einstellungen gelten für das Verzeichnis, in dem es installiert ist, sowie für alle seine Unterverzeichnisse.
>

### Schritt 2: Datei “crypter.php“ vervollständigen

Geben Sie folgende Zeilen in die zuvor erstellte Datei “crypter.php“ ein (je nach Anzahl der zu generierenden Passwörter zu wiederholen):

```php
<?php
$string_1 = crypt('passwort_nicht_verschlüsselt_1');
$string_2 = crypt('passwort_nicht_verschlüsselt_2');
$string_3 = crypt('passwort_nicht_verschlüsselt_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Wenn Sie über ein [Pro](https://www.ovh.de/hosting/hosting-pro.xml) oder [Performance](https://www.ovh.de/hosting/performance-hosting.xml) Hosting verfügen, loggen Sie sich via [SSH](../webhosting_ssh_auf_ihren_webhostings/) mit Ihrem Hosting ein. Führen Sie folgenden Befehl aus:

```bash
php crypt.php
```

> [!warning]
>
> Aus Sicherheitsgründen wird die Verwendung von SSH empfohlen. Wenn Sie jedoch über ein [Kimsufi Web](https://www.kimsufi.com/de/) oder [Basic](https://www.ovh.de/hosting/hosting-basic.xml) Angebot verfügen und nicht auf ein [Pro](https://www.ovh.de/hosting/hosting-pro.xml) oder [Performance](https://www.ovh.de/hosting/performance-hosting.xml) Angebot wechseln möchten, können Sie auch die Datei “crypter.php“ über Ihren Webbrowser ausführen (auf einer URL vom Typ https://votre-domaine.ovh/crypter.php).
>
> Wenn Sie weitere Fragen zur Vorgehensweise zur Verschlüsselung Ihrer Passwörter haben, kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder [OVHcloud Partner](https://partner.ovhcloud.com/de/). Wir werden Sie in dieser Angelegenheit nicht unterstützen können.
>

Rufen Sie die verschlüsselten Passwörter ab (Kopieren Sie nicht “&#60;br />“, wenn Sie den Befehl “php crypter.php“ per SSH ausführen):

```bash
verschlüsselt_passwort_1
verschlüsselt_passwort_2
verschlüsselt_passwort_3
```

### Schritt 3: “.htpasswd“-Datei vervollständigen

Die Datei “.htpasswd“ enthält die Liste der Benutzer, die sich mit dem Verwaltungsinterface Ihrer Website verbinden dürfen, sowie deren verschlüsseltes Passwort.

Geben Sie für jeden **Benutzer** eine Zeile mit seiner Kennung und seinem verschlüsselten Passwort an:

```bash
benutzer1:verschlüsselt_passwort_1
benutzer2:verschlüsselt_passwort_2
benutzer3:verschlüsselt_passwort_3
```

### Schritt 4: “.htaccess“-Datei vervollständigen

#### Zugang zu einem vollständigen Verzeichnis blockieren

Erstellen Sie im zu schützenden Verzeichnis eine “.htaccess“ Datei mit folgendem Code:

```bash
authName "Geben Sie Ihre Administrator-Kennung und das zugehörige Passwort an"
AuthType Basic
AuthUserFile "/home/ihr_ftp_login/wurzelverzeichnis/admin/.htpasswd"
Require valid-user
```

> [!warning]
>
> In diesem Beispiel muss Ihr “ihr_ftp_login“ durch Ihren [FTP-Benutzer](../verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) ersetzt werden. Im Bereich `Hosting-Pakete`{.action} finden Sie es im Tab `FTP-SSH`{.action} des betreffenden Hostings.
>
> Ersetzen Sie gegebenenfalls im unten stehenden Beispiel “wurzelverzeichnis“ den Namen des Ordners, [der die Dateien Ihrer Website enthält](../multisites-mehrere-websites-konfigurieren/#schritt-21-eine-bei-ovhcloud-registrierte-domain-hinzufugen).
>

#### Zugriff auf eine oder mehrere Dateien blockieren

Um den Zugriff auf eine oder mehrere Dateien zu blockieren, fügen Sie eine [Files-Richtlinie](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} zur “.htaccess“-Datei hinzu:

```bash
<Files test.php>

authName "Geben Sie Ihre Zugangsdaten ein"
AuthType Basic
AuthUserFile "/home/ihr_ftp_login/wurzelverzeichnis/admin/.htpasswd"
Require valid-user

</Files>
```

> [!warning]
>
> Geben Sie für [jede zu schützende Datei eine](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} Files-**Richtlinie** an.
>
> Die Files-Richtlinien gelten für alle Dateien desselben Namens oder enden mit dem angegebenen Namen. Dies, sofern sie im selben Verzeichnis wie “.htaccess“ oder in einem seiner Unterverzeichnisse enthalten sind (In der hier angegebenen Konfiguration würde die Files-Richtlinie beispielsweise für eine “neue_test.php“-Datei gelten, die in einem Unterverzeichnis des “admin“-Verzeichnisses enthalten ist).
>

## Weiterführende Informationen <a name="gofurther"></a>

[Alles über die Datei .htaccess](../webhosting_alles_uber_die_datei_htaccess/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
