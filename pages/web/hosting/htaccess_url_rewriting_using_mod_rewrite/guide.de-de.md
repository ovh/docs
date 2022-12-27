---
title: "Tutorial - Die URL für den Zugang zu meiner Website mithilfe des mod_rewrite-Modells über die .htaccess Datei neu schreiben"
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

"**mod_rewrite**" ist eines der auf dem HTTP Webserver verfügbaren Module **Apache**. **Apache** wird auf unserer gesamten Shared-Hosting-Infrastruktur installiert. Dieser Webserver erlaubt die Verwaltung aller auf Ihr Webhosting übertragenen HTTP-Anfragen.

Zum Beispiel holt Apache die HTTP-Anfragen ab, die von den Webbrowsern der Besucher Ihrer Website generiert werden, und gibt ihnen die von diesen Anfragen angeforderten Inhalte zurück. Die Webbrowser zeigen dann Ihren Besuchern die Inhalte Ihrer Website an.

"**mod_rewrite**" ermöglicht zum Beispiel die Umschreibung und Weiterleitung:

- ein Besucher, der Ihre URL in "HTTP" eingibt, direkt zur URL Ihrer Website in "HTTPS" weitergeleitet wird;
- die Gesamtheit der für Ihre Website verwendeten URLs zu einem bestimmten Ordner oder einer bestimmten Datei
- ein Besucher, der Ihre URL ohne "www" eingibt, direkt zu der URL Ihrer Website mit den "www"..

"**mod_rewrite**" bietet unendliche Möglichkeiten. Im Folgenden werden wir Ihnen einige der häufigsten Nutzungsbeispiele zeigen.

> [!success]
>
> Wenn Sie Ihr Wissen über die Verwendung von Apache "**mod_rewrite**" vertiefen möchten oder wenn das von Ihnen gesuchte Beispiel nicht in dem nachfolgenden Tutorial erscheint, lesen Sie die [offizielle Apache-Dokumentation](https://httpd.apache.org/docs/2.4/de/mod/mod_rewrite.html).
>

**Diese Anleitung erklärt, wie Sie die Zugriffs-URL Ihrer Website mithilfe des mod_rewrite-Modells in der .htaccess Datei neu schreiben**
 
## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
  
## In der praktischen Anwendung

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>
>
> Die folgenden Beispiele sollen in einer ".htaccess"-Datei implementiert werden. Achtung: Die Regeln, die Sie in dieser Datei festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie die Regeln, die Sie hinzufügen, systematisch, bevor Sie sie auf Ihre Website anwenden.
>

Die Datei ".htaccess", in der Sie das "**mod_rewrite**" des Apache konfigurieren, kann in mehreren verschiedenen Ordnern abgelegt werden. Sie müssen lediglich die Regel beachten, dass eine **einzige** ".htaccess"-Datei pro Ordner oder Unterordner vorhanden sein muss.

Die in einer ".htaccess"-Datei vorgenommenen Einstellungen gelten für das Verzeichnis, in dem sie sich befindet, sowie für alle ihre Unterverzeichnisse.

Um Verzeichnisse zu bearbeiten (oder zu erstellen), loggen Sie sich in den FTP-Bereich Ihres Hostings ein. Bei Bedarf können Sie die Anleitung "[Zugang zu meinem Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/)" zu Hilfe nehmen.

Im Folgenden finden Sie einige der häufigsten Beispiele für die Verwendung von Apache "**mod_rewrite**". Einige von ihnen können auch das SEO-Ranking Ihrer Website fördern.

### Leiten Sie alle HTTP-Anfragen an eine einzige Datei auf Ihrer Website um.

Bearbeiten Sie die Datei ".htaccess", die sich im Stammverzeichnis Ihrer Website befindet. Platzieren Sie den folgenden Code darin (ersetzen Sie in unserem Beispiel **test.php** durch den Namen Ihrer eigenen Datei):

```bash
RewriteEngine On
RewriteRule .* test.php
```

In unserem Beispiel werden alle Anfragen, die an Ihre Website gestellt werden, an die Datei **test.php** weitergeleitet.

### Einen Teil der HTTP-Anfragen an eine einzelne Datei auf Ihrer Website umleiten.

Bearbeiten Sie die Datei ".htaccess", die sich im Stammverzeichnis Ihrer Website befindet. Platzieren Sie den folgenden Code darin (wobei Sie in unserem Beispiel die Werte **thetest** und **/test_wslash/test.php** durch die Namen Ihrer eigenen Dateien ersetzen):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

In unserem Beispiel werden alle HTTP-Anfragen, die **/thetest** enthalten, auf die Datei **/test_wslash/test.php** umgeleitet.

### Leiten Sie Ihren Domainnamen auf seine Subdomain mit "www" um.

Diese Umschreibungsregel erzwingt, dass die Adresse/URL Ihrer Website mit ihrer Subdomain auf "www" umgeschrieben wird.

Bearbeiten Sie die Datei ".htaccess", die sich im Stammverzeichnis Ihrer Website befindet. Fügen Sie dort den folgenden Code ein (ersetzen Sie in unserem Beispiel **domain.tld** durch Ihren eigenen Domainnamen):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Dieses Umschreiben der URL kann das SEO-Ranking Ihrer Website fördern.

### Anfragen an einen bestimmten Ordner umleiten, ohne den betreffenden Ordner anzuzeigen.

Wenn Sie ein OVHcloud Shared Hosting nutzen, wird Ihr Domainname (z.B. **domain.tld**) als `Multisites` deklariert, um den Inhalt eines Zielordners anzuzeigen, den man auch `Wurzelverzeichnis` nennt. Sie können den Namen dieses `Wurzelverzeichnis` anpassen.

Lesen Sie unsere Anleitung zur [Einrichtung einer Multisite auf einem Shared Hosting](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/), wenn Sie weitere Informationen zu diesem Thema wünschen.

Einige Benutzer legen ihre Website nicht direkt auf der Basis des `Wurzelverzeichnis` an. Sie erstellen dann einen Unterordner (z. B. **MyWebsite**) in ihrem `Wurzelverzeichnis`, in dem sie ihre Website ablegen.

In diesem Fall hat die URL für den Zugriff auf die Website folgende Form: **http://domain.tld/MyWebsite**.

Wenn sich Ihre Website nicht direkt im `Wurzelverzeichnis` befindet, der für Ihren Domainnamen als Multisite deklariert wurde, und Sie den Namen des Ordners nicht in der URL Ihrer Website anzeigen möchten, bearbeiten Sie die Datei ".htaccess", die sich im Root-Verzeichnis befindet, das Ihre Website enthält. 

Platzieren Sie den folgenden Code darin (wobei Sie in unserem Beispiel die Werte **domain.tld** durch Ihren Domainnamen und **MyWebsite** durch den Namen Ihres eigenen Ordners ersetzen):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

In unserem Beispiel zwingt dies die Adresse Ihrer Website, vom Typ **http://domain.tld** zu sein, während die aufgerufene Seite in Wirklichkeit **http://domain.tld/MyWebsite** ist.

### Automatische Umleitung eines Besuchers auf Ihre HTTPS-Website, wenn er sie mit einer HTTP-URL aufruft.

Mithilfe von SSL-Zertifikaten können Sie den Austausch, der über HTTP mit Ihrer Website erfolgt, verschlüsseln. Dadurch wird verhindert, dass bösartige Personen oder Robots Daten sammeln, die zwischen der Website und dem Besucher ausgetauscht werden, wie z. B. Bankdaten.

Wenn Sie nicht über ein SSL-Zertifikat verfügen, lesen Sie unsere Anleitung zur [Verwaltung eines SSL-Zertifikats auf einem OVHcloud Shared Hosting](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/).

Einige Ihrer Besucher vergessen möglicherweise, die URL für den Zugriff auf Ihre Website als **https://** einzugeben: Dies stellt ein nicht zu unterschätzendes Risiko für die Daten dar, die zwischen Ihrer Website und ihren Internetbrowsern ausgetauscht werden.

Um dies zu verhindern, bearbeiten Sie die Datei ".htaccess", die sich im Stammverzeichnis Ihrer Website befindet. Fügen Sie dort den folgenden Code ein (ersetzen Sie in unserem Beispiel **domain.tld** durch Ihren eigenen Domainnamen):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

In unserem Beispiel werden alle Suchanfragen, die mit einer URL in "**http://**" gestellt werden, automatisch in "**https://**" umgeschrieben. Die Besucher werden also auf Ihre Seite mit "**https://**" weitergeleitet.

## Weiterführende Informationen <a name="go-further"></a>

[Den Zugriff auf meine Website für bestimmte IP-Adressen über eine .htaccess-Datei blockieren](https://docs.ovh.com/de/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Schützen Sie die Administrationsoberfläche Ihrer Website durch eine .htaccess-Datei](https://docs.ovh.com/de/hosting/hosting-htaccess-authentifizierung/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.