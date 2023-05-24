---
title: "Tutorial - Operationen mit .htaccess Dateien"
excerpt: "Erfahren Sie hier einige Möglichkeiten zur Nutzung der .htaccess Datei"
slug: webhosting_welche_anderen_operationen_sind_mit_htaccess-dateien_moglich
section: 'Weiterleitung und Authentifizierung'
order: 04
updated: 2023-05-23
---

**Letzte Aktualisierung am 23.05.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Diese Anleitung zeigt anhand von Beispielen einige bedeutende Funktionen der ".htaccess" Datei für Ihr Webhosting.

Die Datei ".htaccess" ist eine Apache-Konfigurationsdatei (HTTP), die vom Webserver Ihres Webhostings ausgeführt wird. Es erlaubt die Festlegung spezifischer Regeln für ein Verzeichnis und alle seine Unterverzeichnisse. Mehrere ".htaccess" Dateien können im [FTP Bereich](/pages/web/hosting/ftp_connection/) Ihres Webhostings erstellt werden. 

Wenn sie nicht bereits in Ihrem FTP-Bereich existiert, können Sie einfach eine Datei namens "**.htaccess**" in dem Verzeichnis erstellen, für das Sie eine oder mehrere der in diesem Tutorial beschriebenen Regeln anwenden möchten.

Um die Datei ".htaccess" korrekt zu verwenden müssen Sie folgende Regeln kennen und einhalten: 

- Legen Sie nur **einze** ".htaccess" Datei pro Verzeichnis oder Unterverzeichnis an, um Konflikte zwischen verschiedenen ".htaccess" Dateien zu vermeiden.
- Die Datei ".htaccess" ist für Besucher Ihrer Website unsichtbar.
- Die in einer ".htaccess" Datei befindlichen Regeln gelten für das gesamte Verzeichnis, in dem die ".htaccess" Datei liegt, sowie für alle Unterverzeichnisse desselben Verzeichnisses.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wenn Sie Schwierigkeiten haben, die Schritte in diesem Tutorial durchzuführen, empfehlen wir, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>
> Die folgende Beispiele sind in eine ".htaccess" Datei einzufügen. Achtung, die Regeln, die Sie in dieser Datei festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie systematisch die Regeln, die Sie hinzufügen, bevor Sie sie auf Ihre Website anwenden. 
> 

**Dieses Tutorial erklärt die wichtigsten Operationen, die mithilfe einer ".htaccess" Datei durchgeführt werden können.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/).

## In der praktischen Anwendung

### Zugriff auf ein Verzeichnis oder eine Website für eine oder mehrere IP-Adressen erlauben oder einschränken

Diese Funktion ist sehr nützlich und erhöht die Sicherheit für Ihre Website. Sie verringert das Risiko, dass Ihre Website gehackt wird.

Mehr Informationen finden Sie in unserer Anleitung ["Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess-Datei sperren?"](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Ein verschlüsseltes Zugangspasswort festlegen, um auf ein Verzeichnis oder eine Website zuzugreifen

Über die Datei ".htaccess" können Sie einen geschützten Zugang (mit verschlüsselten Passwörtern) zu den Dateien auf Ihrem Hosting einrichten.

Weitere Informationen finden Sie in unserer Anleitung ["Das Verwaltungsinterface Ihrer Website durch eine .htaccess-Datei schützen"](/pages/web/hosting/htaccess_protect_directory_by_password/)).

### Eine andere Indexdatei festlegen

Standardmäßig ist die **index**-Datei eines Verzeichnisses *index.html*, *index.htm* oder *index.php*. Wenn Sie hierzu eine andere Datei verwenden möchten, dann können Sie die folgende Zeile in Ihrem ".htaccess" hinzufügen:

```bash
DirectoryIndex File_Name
```

Wenn Sie zum Beispiel die Seite **home.html** als Indexseite verwenden möchten, fügen Sie folgende Zeile hinzu:

```bash
DirectoryIndex home.html
```

### Das Auflisten des Inhalts von Verzeichnissen verhindern

Um zu verhindern, dass Internetnutzer alle in einem Verzeichnis enthaltenen Dateien ohne Datei **index** (.cgi, .html, .php usw.) auflisten, erstellen Sie eine "**.htaccess**" Datei mit folgender Zeile:

```bash
Options -Indexes
```

### Umschreiben von URLs

Das **mod_rewrite** Moduls des Apache Webservers auf Ihrem Webhosting erlaubt die Weiterleitung von:

- Allen HTTP-Anfragen zu einer einzigen Datei Ihrer Website.
- Einen Teil der-HTTP Anfragen zu einer einzigen Datei Ihrer Website.
- Ihren Domainnamen zur Subdomain "www".
- Anfragen zu einem bestimmten Ordner, ohne den betreffenden Ordner anzuzeigen.
- Webseitenaufrufe zu HTTPS, wenn eine URL über HTTP abgefragt wurde.

Weitere Informationen finden Sie in unserer Anleitung ["Die URL einer Website mit mod_rewrite über die .htaccess Datei umschreiben"](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Fehlermeldungen weiterleiten

Um Ihre Fehlermeldungen zu personalisieren und/oder im Fehlerfall auf eine Webseite umzuleiten, erstellen Sie eine "**.htaccess**" Datei mit folgender Zeile:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Ersetzen Sie "**Error_Code_Number**" durch die Nummer des entsprechenden Apache-Fehlercodes. 

Weitere Informationen zu dieser Funktion finden Sie in der [offiziellen Dokumentation zu Apache](https://httpd.apache.org/docs/trunk/en/custom-error.html){.external}.

Die gängigsten HTTP-Fehlercodes sind:

- *401: Authorisation required*: Dieser Fehler entsteht, wenn ein Besucher beim Zugriff auf eine geschützte Datei oder ein geschütztes Verzeichnis falsche Zugangsdaten eingibt.
- *403: Access denied*: Dieser Fehler wird beim Zugriff auf ein Verzeichnis angezeigt, in dem die Datei *index.html* (oder *index.cgi*, etc.) fehlt und die Serverkonfiguration die Anzeige der Dateien des Verzeichnisses untersagt.
- *404: Not found*: Die Datei, die der Besucher aufgerufen hat, existiert nicht.
- *500: Internal Server Error*: Dieser Fehler wird angezeigt, wenn ein Skript nicht korrekt ausgeführt wurde oder das Skript oder die Rechte des Skripts nicht korrekt sind.

Ersetzen Sie **"Message_Or_Destination** mit der durchzuführenden Aktion. Um eine Nachricht direkt anzuzeigen, geben Sie die entsprechende Nachricht in Anführungszeichen ein. Geben Sie den Zugriffspfad auf eine Seite ein, um auf eine bestimmte Fehlerseite weiterzuleiten. 

Im Folgenden finden Sie zwei konkrete Beispiele:

- Sie möchten eine Meldung der Art "*Sie haben keinen Zugriff auf diese Datei*" ausgeben, wenn der Besucher einen Fehler **403** auslöst. Fügen Sie die folgende Zeile in Ihrer ".htaccess" Datei hinzu:

```bash
ErrorDocument 403 "Sorry, you do not have permission to access this file"
```

- Sie möchten bei Fehlern des Typs **404** Ihre personalisierte Seite *404.html* anzeigen (für Ihren Domainnamen: domain.tld). Fügen Sie die folgende Zeile in Ihrer ".htaccess" Datei hinzu:

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Sie können einen Fehler auch auf ein Skript des Typs **C**ommon **G**ateway **I**nterface (**CGI**) weiterleiten. Wenn Sie ein Skript in **CGI** verfassen, können Sie zum Beispiel folgende Aktionen durchzuführen:
 
- Anzeigen einer Nachricht
- Weiterleiten von Besuchern anhand der ursprünglich angeforderten URL auf eine andere Datei (verfügbar in der Umgebungsvariable **REQUEST_URI**)
- Versenden einer E-Mail

Um zum Beispiel eine Fehlermeldung auf ein **CGI**-Skript weiterzuleiten, fügen Sie folgende Zeile in Ihrer ".htaccess" Datei ein:

```bash
ErrorDocument 404 /cgi-bin/error.cgi?type=404
```

Diese Zeile leitet Besucher auf Ihr Skript *error.cgi* um, sobald ein Fehler **404** erzeugt wird. Das Skript wird dann die darin enthaltenen Direktiven umsetzen, hier in Bezug auf den Fehler **404**.

## Weiterführende Informationen <a name="go-further"></a>

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web/hosting/ftp_connection/)

[Tutorial - Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess Datei sperren?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Den Adminbereich Ihrer Website mit einer .htaccess Datei schützen](/pages/web/hosting/htaccess_protect_directory_by_password/)

[Tutorial - Die URL einer Website mit mod_rewrite über die .htaccess Datei umschreiben](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
