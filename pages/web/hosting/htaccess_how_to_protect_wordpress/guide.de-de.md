---
title: "Tutorial - htaccess-Datei mit WordPress verwenden"
slug: verwendung-von-htaccess-with-wordpress
excerpt: "Erfahren Sie, wie Sie Ihren WordPress Blog mit einem oder mehreren htaccess-Dateien absichern"
section: 'Tutorials'
order:  
---

**Letzte Aktualisierung am 07.02.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

In dieser Anleitung erfahren Sie, wie Sie bestimmte Funktionen Ihres Webhostings mit einer oder mehreren Dateien **.htaccess** konfigurieren, insbesondere um die Einstellungen eines Teils oder der Gesamtheit Ihrer Website zu ändern (Weiterleitungen, Zugangsverbote, eingeschränkte Berechtigungen, Cache-Kontrolle etc.).

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) oder [Herausgeber des CMS WordPress](https://wordpress.com/de/support/){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Mehr Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

**Erfahren Sie, wie Sie Ihre WordPress mit einem oder mehreren HTACCESS-Dateien absichern.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/) und haben WordPress installiert.
- Sie können einen FTP-Client wie [FileZilla](https://filezilla-project.org/) verwenden. Sie können in unserer Anleitung "[FileZilla für den Abruf und die Speicherung Ihrer Daten verwenden]"(https://docs.ovh.com/de/dedicated/daten-via-sftp-exportieren-und-ablegen/#filezilla-fur-das-ubertragen-ihrer-daten-verwenden) nachlesen.

Die Dateien **.htaccess** können mit Texteditoren erstellt und geändert werden, zum Beispiel:

- [Notizblock](https://support.microsoft.com/de-de/windows/hilfe-in-windows-editor-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c){.external} von Windows
- [TextEdit](https://support.apple.com/de-de/guide/textedit/welcome/mac){.external} auf macOS 
- [Notepad+](https://notepad-plus-plus.org/){.external}.

## FAQ

### Was ist eine Datei **.htaccess**?

Mit einer **.htaccess** Datei können Sie einen Webserver konfigurieren. Bei Shared Hosting handelt es sich um den Open-Source-Webserver "**Apache**". Die Syntax dieser Datei wird durch den Organismus definiert, der sie erstellt und aufrechterhält **Apache**. Im Gegensatz zu den meisten Konfigurationsdateien eines Servers befinden sich die **.htaccess** Dateien in den Verzeichnissen der Websites, genauer gesagt im FTP-Speicherplatz Ihres Webhostings. Eine **.htaccess** Datei hat Auswirkungen auf das Verzeichnis, in dem sie vorhanden ist, sowie auf alle darin befindlichen Unterverzeichnisse.

Unsere Webhosting-Angebote erlauben keine Serverkonfigurationsdateien. Die **.htaccess** Dateien ermöglichen es jedoch, bestimmte Eigenschaften und Verhaltensweisen zu ändern. Darüber hinaus ist es nicht notwendig, den Server **Apache** neu zu starten, damit die Angaben und Änderungen in der Datei **.htaccess** berücksichtigt werden. Mit unseren [OVHcloud Shared Hosting](https://www.ovhcloud.com/de/web-hosting/) Angeboten können Dateien **.htaccess** konfiguriert werden.

Der Punkt vor dem Dateinamen **.htaccess** (der selbst keine Endung hat) bezeichnet eine versteckte Datei. Außerdem sind diese Dateien für externe Benutzer, die Ihre Website aufrufen, nicht verfügbar.

### Was ist ein Webserver?

Ein Webserver ist ein Programm, mit dem Informationen über ein Netzwerk unter Verwendung des Protokolls *HTTP*<br> ausgetauscht werden können.
Es gibt mehrere davon, darunter *Apache*, *Nginx*, *Tomcat* oder das HTTP-Modul in *NodeJS*.

### Welche Vorsichtsmaßnahmen sind zu treffen?

Eine fehlerhafte Konfiguration Ihrer Datei **.htaccess** kann Fehler auf Ihrem Server verursachen (zum Beispiel ein Fehler 500: *Internal Server Error*) oder Ihren Dienst sogar für Sie komplett nicht verfügbar machen. Denken Sie daran, systematische Backups der Versionen Ihrer funktionalen Dateien durchzuführen, um im Falle einer Anomalie nach einer Änderung zu einem früheren Zustand zurückkehren zu können.

Wenn Sie diese Art von Datei nicht gewöhnlich bearbeiten, testen Sie jedes Element, das Sie ändern. So vermeiden Sie Zeitverlust, um die Leitung(en) zu finden, die die Fehlfunktion Ihres Webservers verursacht hat. Konfigurationsfehler oder ein einfacher Tippfehler können die Konfiguration Ihres Webservers und damit seinen Betrieb beeinträchtigen.

### Welche Werkzeuge verwenden?

- einem FTP-Client, um Ihre Dateien abzurufen (FileZilla, Cyberduck)
- einem Texteditor.

### Wo befinden sich die .htaccess Dateien in WordPress?

Wie in der Einleitung ausgeführt, können Sie mehrere **.htaccess** Dateien auf demselben Webhosting anlegen. Jede dieser Dateien legt die Regeln für das Verzeichnis fest, in dem sie sich befindet, sowie die darin enthaltenen Unterverzeichnisse.

Die meisten Änderungen werden an der **Wurzel der Website** vorgenommen. Die standardmäßig installierte **.htaccess** Datei im Wurzelverzeichnis der Website enthält folgende Zeilen:

```bash
# BEGIN WordPress
# Richtlinien (Leitungen) zwischen "BEGIN WordPress"und "END WordPress"werden
# dynamisch und müssen nur über WordPress Filter geändert werden.
# Jede Änderung der Richtlinien zwischen diesen Markern wird überlastet.

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

**Erläuterungen zu dem oben genannten Code**:

- **#** Zeichen zur Kommentareinstellung.
- **RewriteEngine On**: Aktiviert das Apache `mod_rewrite` Modul, mit dem URL on the fly neu geschrieben werden kann (ermöglicht auch die Weiterleitung einer URL auf eine andere URL).
- **RewriteRule**: Diese Syntax wird nach dem `Muster RewriteRule Substitution` geschrieben. Das Schreiben kann mehrmals in der Datei **.htaccess** vorkommen (dies ist der Fall in der Standarddatei, die Sie im Wurzelverzeichnis der Installation Ihres WordPress finden). Die Schreibreihenfolge in der Datei ist von entscheidender Bedeutung. Achten Sie auf die Reihenfolge, in der Sie Ihre Regeln schreiben.
- **RewriteBase**: zeigt an, dass die Wurzel der Website ist `/`.
- **RewriteCond**: Dies sind Voraussetzungen für die unmittelbar folgende Regel. In unserem Fall schließt die erste Vorbedingung URLs aus, die einen Pfad zu einer realen Datei enthalten, während die zweite Vorbedingung die Unterverzeichnisse ausschließt.

### Was kann ich zu einer Datei **.htaccess** mit WordPress hinzufügen?

Es gibt mehrere Möglichkeiten, die Einstellungen zu definieren und zu ändern, die das Verhalten des Servers ändern (einige Einschränkungen existieren jedoch je nach Hosting):

- Konfigurationsdateien Ihres Servers bearbeiten
- Richtlinien zur Konfigurationsdatei **wp-config.php*** zur Wurzel Ihrer Website hinzufügen oder ändern
- Anleitungen zur Wurzel-Datei **.htaccess** ändern oder hinzufügen.

## In der praktischen Anwendung

> [!warning]
>
> Bevor Sie den folgenden Schritten folgen, richten Sie das HTTP-Protokoll auf HTTPS. Folgen Sie hierzu den Anweisungen in unserer Anleitung ["Website mithilfe von SSL auf HTTPS umstellen"](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/#schritt-1-ssl-zertifikat-fur-das-hosting-aktivieren).

### Die Anzeige von Verzeichnissen und Unterverzeichnissen verhindern

Um zu vermeiden, dass alle Besucher Ihrer Website den Inhalt der Unterverzeichnisse anzeigen können (und zusätzlich Piraten Informationen zu den verwendeten Themen oder Erweiterungen geben), blockieren Sie die Anzeige des Inhalts, indem Sie diese Zeile in Ihrer Datei hinzufügen ***.htaccess**:

```bash
Options All -Indexes
```

### Ihre Konfigurationsdatei schützen

Ihre Datei **wp-config.php**, die sich im Wurzelverzeichnis Ihrer Website befindet, enthält sensible Konfigurationsinformationen. Verhindern Sie den Zugriff auf diese Datei, indem Sie folgende Zeilen in Ihrer Datei **.htaccess** hinzufügen:

```bash
<Files ~ "^.*\.([Hh][Tt][AaPp])">
    order allow,deny
    deny from all
    satisfy all
</Files>
```

Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zur ["IP-basierte Zugriffsbeschränkung über die .htaccess-Datei"](https://docs.ovh.com/de/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Eine IP-Adresse blockieren

Wenn Sie eine böswillige IP-Adresse identifiziert haben, geben Sie hier die Zeile in Ihrer Datei***** ein:

```bash
<Limit GET POST>
    order allow,deny deny from xxx.xxx.xxx.xxx
    allow from all
</Limit>
```

In diesem Beispiel bedeutet `xxx.xxx.xxx.xxx` die zu blockierende IP-Adresse.

Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zur ["IP-basierte Zugriffsbeschränkung über die .htaccess-Datei"](https://docs.ovh.com/de/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

#### Eine IP-Adresse aus dem wp-admin Verzeichnis (oder in den anderen Verzeichnissen) blockieren

Mit dem Verzeichnis **wp-admin** können Sie sich mit Ihrem Verwaltungsinterface verbinden (die Methode funktioniert auch mit anderen Verzeichnissen, entspricht jedoch URLs, die nicht zu einem bestimmten Interface führen). Zum Schutz dieses Verzeichnisses erlauben Sie den Zugriff auf eine oder mehrere IP-Adressen mit folgendem Code in Ihrem ***.htaccess*:

```bash
<Limit GET POST PUT>
    order deny,allow deny from all
    allow from xxx.xxx.xxx.xxx
    allow from xxx.xxx.xxx.xxx
</Limit>
```

### wichtige Informationen

- Sichern Sie vor jeder Änderung eine funktionale Version Ihrer Datei **.htaccess**.
- Wenn Ihre Änderungen zu einem Fehler führen, ersetzen Sie (über Ihren FTP-Client) die Datei **.htaccess** online mit der vorherigen Version.
- Sie können bestimmte Einstellungen in Ihrer Datei verwalten **wp-config.php**.
- **.htaccess** Dateien sind besonders effizient für die Verwaltung der URLs, die Weiterleitungen und die Sicherheit Ihrer Website.

## Weiterführende Informationen <a name="go-further"></a>

Siehe [Tutorial auf der Website der Apache Foundation](https://httpd.apache.org/docs/2.4/de/howto/htaccess.html).