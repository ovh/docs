---
title: Den Adminbereich Ihrer Website mit einer .htaccess Datei schützen
slug: hosting-htaccess-authentifizierung
excerpt: Erfahren Sie hier, wie Sie den Zugang zur Verwaltung Ihrer Website mit einer .htaccess Datei schützen.
section: Weiterleitung und Authentifizierung
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 20.09.2021**

## Ziel

Es kann notwendig sein, den Zugang zu einem Teil Ihrer Website mittels Zugangsdaten zu schützen. Sie können hierzu eine Datei namens ".htaccess" anlegen, um den Zugang zu Ihrer Administratoroberfläche zu schützen.

**Diese Anleitung erklärt, wie Sie den Zugang zum Administrator-Teil Ihrer Website durch eine “.htaccess“-Datei per Authentifizierung schützen.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie verfügen über die [Login-Daten](../verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) für den Speicherplatz Ihres Hostings.

## In der praktischen Anwendung

> [!primary]
>
> Die hier vorgeschlagene Lösung ist nur eine von mehreren technischen Möglichkeiten, um einen Administratorbereich auf Ihrer Seite einzurichten. Sie können auch die von [OVHcloud](https://www.ovhcloud.com/de/) angebotene [1-Klick-Modul Funktion](../webhosting_installation_von_webhosting-modulen/) verwenden.
>
> Kontaktieren Sie für Anfragen zur Erstellung oder Programmierung Ihrer Website unsere [User Community](https://community.ovh.com/en/) oder einen [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/). Wir werden Sie bei diesen Fragen nicht unterstützen können.
>

### Schritt 1: Dateipfad erstellen

Loggen Sie sich in den [Speicherplatz Ihres Hostings](../verbindung-ftp-speicher-webhosting/) ein und öffnen Sie das [Wurzelverzeichnis](../multisites-mehrere-websites-konfigurieren/#schritt-21-eine-bei-ovhcloud-registrierte-domain-hinzufugen).<br>
Erstellen Sie hier eine Datei namens "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Öffnen oder erstellen Sie den Ordner, der den Adminbereich Ihrer Website enthält. Erstellen Sie in diesem Verzeichnis jeweils eine Datei namens “.htpasswd“ und “.htaccess“.

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> “.htpasswd“ und “.htaccess“ können in verschiedenen Ordnern gespeichert sein. Eine einzige ".htpasswd" Datei kann für mehrere ".htaccess" Dateien verwendet werden.
>
> Die in “.htaccess“ definierten Einstellungen gelten für das Verzeichnis, in der sich die Datei befindet, sowie für alle Unterverzeichnisse.
>

### Schritt 2: Datei “crypter.php“ bearbeiten

Geben Sie folgende Zeilen in die zuvor erstellte Datei “crypter.php“ ein (je nach Anzahl der zu generierenden Passwörter zu wiederholen):

```php
<?php
$string_1 = crypt('passwort_nicht_verschlüsselt_1');
$string_2 = crypt('passwort_nicht_verschlüsselt_2');
$string_3 = crypt('passwort_nicht_verschlüsselt_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Wenn Sie über ein Webhosting [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) verfügen, loggen Sie sich via [SSH](../webhosting_ssh_auf_ihren_webhostings/) in Ihrem Hosting ein. Führen Sie folgenden Befehl aus:

```bash
php crypter.php
```

> [!warning]s
>
> Aus Sicherheitsgründen wird die Verwendung von SSH empfohlen. Wenn Sie jedoch über ein Webhosting [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) verfügen und nicht auf [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) wechseln möchten, können Sie auch die Datei “crypter.php“ über Ihren Webbrowser ausführen (einfach die URL öffen, zum Beispiel: https://ihrdomainname.ovh/crypter.php).
>
> Wenn Sie weitere Fragen zur Vorgehensweise zur Verschlüsselung Ihrer Passwörter haben, kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/). Wir werden Sie bei diesen Fragen nicht unterstützen können.
>

Kopieren Sie nun die verschlüsselten Passwörter. (Kopieren Sie nicht “&#60;br />“ mit, wenn Sie den Befehl “php crypter.php“ per SSH ausführen.)

```bash
verschlüsselt_passwort_1
verschlüsselt_passwort_2
verschlüsselt_passwort_3
```

### Schritt 3: “.htpasswd“ editieren

Die Datei “.htpasswd“ enthält die Liste der Benutzer, die sich mit dem Adminbereich Ihrer Website verbinden dürfen, sowie das verschlüsseltes Passwort.

Geben Sie für jeden **Benutzer** eine Zeile mit seiner Kennung und seinem verschlüsselten Passwort an:

```bash
benutzer1:verschlüsselt_passwort_1
benutzer2:verschlüsselt_passwort_2
benutzer3:verschlüsselt_passwort_3
```

### Schritt 4: “.htaccess“ editieren

#### Zugang zu einem ganzen Verzeichnis blockieren

Erstellen Sie im zu schützenden Verzeichnis eine “.htaccess“ Datei mit folgendem Code:

```bash
authName "Geben Sie Ihre Administrator-Kennung und das zugehörige Passwort an"
AuthType Basic
AuthUserFile "/home/ihr_ftp_login/wurzelverzeichnis/admin/.htpasswd"
Require valid-user
```

> [!warning]
>
> In diesem Beispiel muss Ihr “ihr_ftp_login“ durch Ihren [FTP-Benutzer](../verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) ersetzt werden. Im Bereich `Hosting-Pakete`{.action} finden Sie diesen im Tab `FTP-SSH`{.action} des betreffenden Hostings.
>
> Ersetzen Sie gegebenenfalls im unten stehenden Beispiel “wurzelverzeichnis“ mit dem Namen des Ordners, [der die Dateien Ihrer Website enthält](../multisites-mehrere-websites-konfigurieren/#schritt-21-eine-bei-ovhcloud-registrierte-domain-hinzufugen).
>

#### Zugriff auf eine oder mehrere Dateien blockieren

Um den Zugriff auf eine oder mehrere Dateien zu blockieren, fügen Sie eine [Files-Direktive](https://httpd.apache.org/docs/2.4/de/mod/core.html#files){.external} zur “.htaccess“ Datei hinzu:

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
> Eine [Files-Direktive](https://httpd.apache.org/docs/2.4/de/mod/core.html#files){.external} ist für **jede zu schützende Datei** anzugeben.
>
> Die Files-Direktiven gelten für alle Dateien desselben Namens und für passende Dateinamen (letzte Komponente des Dateinamens). Dies gilt, sofern sie im selben Verzeichnis wie “.htaccess“ oder in einem der Unterverzeichnisse enthalten sind. (In der oben gezeigten Konfiguration beispielweise würde die Files-Direktive für eine Datei “neu_test.php“ gelten, die in einem Unterverzeichnis des Ordners “admin“ liegt).
>

## Weiterführende Informationen <a name="gofurther"></a>

[Alles über die Datei .htaccess](../webhosting_alles_uber_die_datei_htaccess/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
