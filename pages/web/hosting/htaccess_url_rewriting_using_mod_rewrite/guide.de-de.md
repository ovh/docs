---
title: "Tutorial - Die URL einer Website mit mod_rewrite über die .htaccess Datei umschreiben"
excerpt: "Diese Anleitung erklärt, wie Sie die Zugriffs-URL mithilfe des mod_rewrite über die .htaccess Datei neu schreiben."
slug: htaccess_url_rewriting_using_mod_rewrite
section: Weiterleitung und Authentifizierung
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 22.12.2022** 
  
## Ziel

Das Modul "**mod_rewrite**" ist eines der verfügbaren Module des Webservers **Apache**. **Apache** ist auf unserer gesamten Shared-Hosting-Infrastruktur installiert. Dieser Webserver erlaubt die Verwaltung der an Ihr Webhosting gerichtete HTTP-Anfragen.

Zum Beispiel nimmt Apache die HTTP-Anfragen entgegen, die von Webbrowsern der Besucher Ihrer Website generiert werden, und gibt die angeforderten Inhalte zurück. Die Webbrowser zeigen dann Ihren Besuchern die Inhalte Ihrer Website an.

"**mod_rewrite**" ermöglicht zum Beispiel folgende Umleitungen:

- Besucher, die Ihre Webseite mit einer URL über "HTTP" aufrufen, werden zu "HTTPS" weitergeleitet.
- Die Gesamtheit der für Ihre Website verwendeten URLs wird zu einem bestimmten Ordner oder einer bestimmten Datei geleitet.
- Besucher, die Ihre Webseite über eine URL ohne "www" aufrufen, werden zur entsprechenden URL Ihrer Website mit "www" weitergeleitet.

Das Modul "**mod_rewrite**" bietet hierbei endlose Möglichkeiten. Im Folgenden werden wir Ihnen einige der häufigsten Nutzungsbeispiele aufführen.

> [!success]
>
> Wenn Sie Ihr Wissen über die Verwendung von Apache "**mod_rewrite**" vertiefen möchten oder wenn das von Ihnen gesuchte Beispiel nicht in diesem Tutorial enthalten ist, lesen Sie die [offizielle Apache-Dokumentation](https://httpd.apache.org/docs/2.4/de/mod/mod_rewrite.html).
>

**Dieses Tutorial erklärt, wie Sie die URL Ihrer Website mithilfe von "mod_rewrite" in der Datei ".htaccess" umschreiben.**
 
## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
  
## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>
>
> Die nachfolgenden Code-Beispiele werden in einer ".htaccess"-Datei implementiert. Achtung: Die Regeln, die Sie in dieser Datei festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie Ihre Regeln deshalb systematisch, bevor Sie sie auf Ihre Website anwenden.
>

Die Datei ".htaccess", in der Apache "**mod_rewrite**" konfiguriert wird, kann in mehreren Ordnern abgelegt werden. Beachten Sie aber unbedingt die Regel, dass nur **eine einzige** ".htaccess"-Datei pro Ordner oder Unterordner vorhanden sein darf.

Die in einer ".htaccess"-Datei vorgenommenen Einstellungen gelten für das Verzeichnis, in dem sie sich befindet, sowie für alle Unterverzeichnisse.

Um Verzeichnisse zu bearbeiten (oder zu erstellen), loggen Sie sich in den FTP-Bereich Ihres Hostings ein. Bei Bedarf können Sie die Anleitung "[Mit dem Speicherplatz eines Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/)" zu Hilfe nehmen.

Im Folgenden finden Sie Beispiele für häufig verwendete Anwendungen von Apache "**mod_rewrite**". Einige davon können auch das SEO-Ranking Ihrer Website fördern.

### Alle HTTP-Anfragen auf eine Datei Ihrer Website umleiten

Bearbeiten Sie die Datei ".htaccess", die sich im Wurzelverzeichnis Ihrer Website befindet. Platzieren Sie den folgenden Code darin (ersetzen Sie in unserem Beispiel **test.php** durch den Namen Ihrer eigenen Datei):

```bash
RewriteEngine On
RewriteRule .* test.php
```

In unserem Beispiel werden alle Anfragen, die an Ihre Website gestellt werden, an die Datei **test.php** weitergeleitet.

### Einen Teil der HTTP-Anfragen auf eine Datei Ihrer Website umleiten

Bearbeiten Sie die Datei ".htaccess", die sich im Wurzelverzeichnis Ihrer Website befindet. Platzieren Sie den folgenden Code darin (wobei Sie in unserem Beispiel die Werte **thetest** und **/test_wslash/test.php** durch Ihre eigenen Werte ersetzen):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

In unserem Beispiel werden alle HTTP-Anfragen, die **/thetest** enthalten, auf die Datei **/test_wslash/test.php** umgeleitet.

### Ihren Domainnamen auf die Subdomain "www" umleiten

Diese Regel erzwingt, dass die Adresse/URL Ihrer Website auf die Subdomain "www" umgeschrieben wird.

Bearbeiten Sie die Datei ".htaccess", die sich im Wurzelverzeichnis Ihrer Website befindet. Fügen Sie dort den folgenden Code ein (ersetzen Sie in unserem Beispiel **domain.tld** durch Ihren eigenen Domainnamen):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Dieses Umschreiben der URL kann das SEO-Ranking Ihrer Website fördern.

### Anfragen an einen bestimmten Ordner umleiten, ohne diesen Ordner anzuzeigen

Wenn Sie ein OVHcloud Webhosting nutzen, wird Ihr Domainname (z.B. **domain.tld**) als `Multisite` deklariert, um den Inhalt eines bestimmten Zielordners anzuzeigen, der auch als Wurzelverzeichnis bzw. `root folder` der Website bezeichnet wird. Sie können den Namen dieses Wurzelverzeichnisses anpassen.

Lesen Sie unsere Anleitung zur [Einrichtung einer Multisite auf einem Webhosting](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/), wenn Sie weitere Informationen zu diesem Thema wünschen.

Eine Website muss nicht im obersten Wurzelverzeichnis abgelegt werden. Sie können auch einen Unterordner darin erstellen (z. B. **MyWebsite**), und darin die Dateien der Website platzieren.

In diesem Fall hat die URL für den Zugriff auf die Website folgende Form: **http://domain.tld/MyWebsite**.

Wenn sich Ihre Website-Dateien nicht direkt im Wurzelverzeichnis befinden, der für Ihren Domainnamen als Multisite deklariert wurde, und Sie den Namen des Unterordners nicht in der URL Ihrer Website anzeigen möchten, bearbeiten Sie die Datei ".htaccess" im Wurzelverzeichnis der Website. 

Platzieren Sie den folgenden Code darin (wobei Sie in unserem Beispiel die Werte **domain.tld** durch Ihren Domainnamen und **MyWebsite** durch den Namen Ihres eigenen Ordners ersetzen):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

In unserem Beispiel wird die Adresse Ihrer Website dann als **http://domain.tld** angezeigt, während die aufgerufene Seite in Wirklichkeit **http://domain.tld/MyWebsite** ist.

### Automatische Umleitung zur Verwendung von HTTPS, wenn die Website über eine HTTP-URL aufgerufen wurde

Mithilfe von SSL-Zertifikaten können Sie den Austausch, der über das Protokoll HTTP mit Ihrer Website erfolgt, verschlüsseln. Dadurch wird verhindert, dass unbefugte Personen oder Robots Daten sammeln, die zwischen der Website und dem Besucher ausgetauscht werden, wie z.B. Bankdaten.

Wenn Sie nicht über ein SSL-Zertifikat verfügen, lesen Sie unsere Anleitung zur [Verwaltung eines SSL-Zertifikats auf einem Webhosting](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/).

Manche von Ihren Seitenbesuchern verwendete Browser werden Ihre Website möglicherweise nicht automatisch über **https://** aufrufen. Dies stellt ein nicht zu unterschätzendes Risiko für die Daten dar, die zwischen Ihrer Website und Webbrowsern ausgetauscht werden.

Um dies zu verhindern, bearbeiten Sie die Datei ".htaccess", die sich im Wurzelverzeichnis Ihrer Website befindet. Fügen Sie dort den folgenden Code ein (ersetzen Sie in unserem Beispiel **domain.tld** durch Ihren eigenen Domainnamen):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

In unserem Beispiel werden alle Anfragen, die mit einer URL in "**http://**" gestellt werden, automatisch nach "**https://**" umgeschrieben. Die Besucher werden also auf die entsprechende Seite mit "**https://**" weitergeleitet.

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess Datei sperren?](https://docs.ovh.com/de/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Den Adminbereich Ihrer Website mit einer .htaccess Datei schützen](https://docs.ovh.com/de/hosting/hosting-htaccess-authentifizierung/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.