---
title: "Tutorial - Operationen mit .htaccess Datei durchführbar"
excerpt: "Entdecken Sie einige Beispiele für durchführbare Operationen mit einer .htaccess Datei"
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

Diese Anleitung bietet Ihnen die wichtigsten Funktionen der ".htaccess" Datei für Ihr Webhosting.

Die Datei ".htaccess" ist eine Apache-Konfigurationsdatei (HTTP), die vom Webserver Ihres Webhostings ausgeführt wird. Es erlaubt die Festlegung spezifischer Regeln für ein Verzeichnis und alle seine Unterverzeichnisse. Mehrere ".htaccess" Dateien können im [FTP Bereich](/pages/web/hosting/ftp_connection/) Ihres Webhostings erstellt werden. 

Wenn es nicht bereits in Ihrem FTP-Bereich existiert, können Sie diese hinzufügen, indem Sie eine Datei erstellen, die Sie "**.htaccess**" im Verzeichnis nennen, für das Sie eine oder mehrere der in diesem Tutorial beschriebenen Regeln anwenden möchten.

Um die Datei ".htaccess"korrekt zu verwenden müssen Sie folgende Regeln kennen und einhalten: 

- **Eine einzige** ".htaccess"-Datei pro Verzeichnis oder Unterverzeichnis, um Konflikte zwischen verschiedenen ".htaccess"-Dateien zu vermeiden.
- Die Datei ".htaccess"ist für Besucher Ihrer Website unsichtbar.
- Die in einer ".htaccess"-Datei angegebenen Regeln gelten für das gesamte Verzeichnis, in dem die ".htaccess"-Datei installiert ist, sowie für alle Unterverzeichnisse desselben Verzeichnisses.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>
> Folgende Beispiele sind in einer ".htaccess" Datei zu erstellen. Achtung, die Regeln, die Sie in dieser Datei festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie systematisch die Regeln, die Sie hinzufügen, bevor Sie sie auf Ihrer Website anwenden. 
> 

**Diese Anleitung erklärt, wie Sie die wichtigsten Operationen, die mithilfe einer ".htaccess"-Datei durchgeführt werden können.**

## Voraussetzungen

- über ein [OVHcloud Hosting-Pakete](https://www.ovhcloud.com/de/web-hosting/)

## In der praktischen Anwendung

### Zugriff auf ein Verzeichnis oder eine Website für eine oder mehrere IP-Adressen erlauben oder einschränken

Diese Funktion ist sehr nützlich und erhöht die Sicherheit für Ihre Websites. Sie kann dazu beitragen, das Risiko der Piraterie auf Ihrer Website zu verringern.

Mehr Informationen finden Sie in unserer Anleitung: ["Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess-Datei sperren? "](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Ein verschlüsseltes Zugangspasswort festlegen, um auf ein Verzeichnis oder eine Website zuzugreifen

Über die Datei ".htaccess" können Sie einen geschützten Zugang (mit verschlüsselten Passwörtern) zu Ihren Daten auf Ihrem Hosting einrichten.

Weitere Informationen finden Sie in unserer Anleitung ["Das Verwaltungsinterface Ihrer Website durch eine .htaccess-Datei schützen"](/pages/web/hosting/htaccess_protect_directory_by_password/)).

### Eine andere Indexdatei angeben

Standardmäßig ist die Datei **index** eines Verzeichnisses *index.html*, *index.htm* oder *index.php*. Wenn Sie möchten, dass es sich um eine andere Datei handelt, dann können Sie eine solche Zeile in Ihrem ".htaccess" hinzufügen:

```bash
DirectoryIndex File_Name
```

Wenn Sie zum Beispiel die Seite **empfang.html** als Indexseite verwenden möchten, fügen Sie folgende Zeile hinzu:

```bash
DirectoryIndex empfang.html
```

### Das Auflisten des Inhalts eines Verzeichnisses verhindern

Um zu verhindern, dass Internetnutzer alle in einem Verzeichnis enthaltenen Dateien ohne Datei **index** (.cgi, .html, .php usw.) auflisten, erstellen Sie eine "**.htaccess**" Datei mit folgender Zeile:

```bash
Options -Indexes
```

### Rewriting der URL durchführen

Dank des **mod_rewrite** Moduls des Apache HTTP Webservers auf Ihrem Webhosting erlaubt diese Funktion die Weiterleitung:

- alle HTTP Anfragen zu einer einzigen Datei Ihrer Website
- einen Teil der HTTP Anfragen zu einer einzigen Datei Ihrer Website
- Ihre Domain zu ihrer Subdomain "www"
- Anfragen zu einem bestimmten Ordner, ohne den betreffenden Ordner anzuzeigen;
- automatisch einen Besucher Ihrer Website mit HTTPS, wenn er diese mit einer URL mit HTTP abfragt.

Weitere Informationen finden Sie in unserer Anleitung: ["Die URL für den Zugang zu meiner Website mithilfe des mod_rewrite über die .htaccess-Datei umschreiben"](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Fehlermeldungen weiterleiten

Um Ihre fehlerhaften Nachrichten zu personalisieren und/oder auf eine Webseite weiterzuleiten, erstellen Sie eine "**.htaccess**" Datei mit folgender Codelinie:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Ersetzen Sie nur "**Error_Code_Number**"durch die Nummer des entsprechenden HTTP-Apache-Fehlercodes. 

Weitere Informationen zu dieser Funktion finden Sie in der [offiziellen Dokumentation Apache](https://httpd.apache.org/docs/trunk/en/custom-error.html){.external}.

Die gängigsten HTTP-Fehlercodes sind:

- 401: Authority required: Dieser Fehler entsteht, wenn ein Besucher beim Zugriff auf eine geschützte Datei oder ein geschütztes Verzeichnis einen falschen Login/Passwort eingibt.
- 403: Zugang denied: Dieser Fehler wird beim Zugriff auf ein Verzeichnis angezeigt, in dem die Datei *index.html* (oder *index.cgi* etc.) fehlt und die Serverkonfiguration die Anzeige der Dateien des Verzeichnisses untersagt.
- 404: Not Found: die Datei, die der Besucher sehen will, existiert nicht.
- 500: Internal Server Error: Dieser Fehler wird angezeigt, wenn ein Skript nicht korrekt ausgeführt wurde oder das Skript oder die Rechte des Skripts nicht korrekt sind.

Ersetzen Sie **"Message_Or_Destination** durch die durchzuführende Aktion. Um eine Nachricht direkt anzuzeigen, geben Sie die entsprechende Nachricht in Anführungszeichen ein. Geben Sie den Zugriffspfad auf diese Seite ein, um auf eine bestimmte Seite weiterzuleiten. 

Im Folgenden finden Sie zwei konkrete Beispiele:

- Sie möchten angeben *"Leider haben Sie keinen Zugriff auf diese Datei"*, wenn der Besucher einen Fehler bemerkt **403**. Fügen Sie die folgende Zeile in Ihrer ".htaccess" Datei hinzu:

```bash
ErrorDocument 403 "Leider haben Sie keinen Zugriff auf diese Datei"
```

- Sie möchten die Fehler **404** auf Ihre personalisierte Seite *404.html* (für Ihre Domain: domain.tld). Fügen Sie die folgende Zeile in Ihrer ".htaccess" Datei hinzu:

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Sie können einen Fehler auch auf ein Skript weiterleiten **C**ommon **G**ateway **I**Nterface (**CGI**). Sie können ein Skript in **CGI** codieren, um zum Beispiel folgende Aktionen durchzuführen:
 
- Eine Nachricht anzeigen;
- Den Besucher gemäß der ursprünglich angeforderten URL auf eine andere Datei weiterleiten (verfügbar in der Umgebungsvariable **REQUEST_URI**);
- eine E-Mail versenden.

Um zum Beispiel einen Fehler auf ein **CGI*** Skript weiterzuleiten, fügen Sie folgende Zeile in Ihrer ".htaccess" Datei ein:

```bash
ErrorDocument 404 /cgi-bin/fehler.cgi?type=404
```

Die obige Zeile leitet den Besucher, der einen Fehler **404** bemerkt, auf Ihr Skript um *fehler.cgi*. Dieser wird die darin enthaltenen Richtlinien insbesondere in Bezug auf den Fehler **404** umsetzen.

## Weiterführende Informationen <a name="go-further"></a>

[Mit dem FTP Bereich Ihres Webhostings verbinden](/pages/web/hosting/ftp_connection/)

[Den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess-Datei sperren?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Das Verwaltungsinterface Ihrer Website durch eine .htaccess-Datei schützen](/pages/web/hosting/htaccess_protect_directory_by_password/)

[Umschreiben der URL für den Zugang zu meiner Website mithilfe des mod_rewrite über die .htaccess-Datei](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.