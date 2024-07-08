---
title: "Webhosting - Website auf HTTPS umstellen"
excerpt: "Erfahren Sie hier, wie Sie Ihre Website auf HTTPS umstellen, nachdem Sie ein SSL-Zertifikat aktiviert haben"
updated: 2024-02-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit Ihrem OVHcloud Webhosting verfügen Sie über ein [SSL-Zertifikat](/links/web/hosting-options-ssl). Mit diesem können Sie eine oder mehrere Ihrer Websites über eine gesicherte Verbindung mittels *HTTPS* erreichbar machen. Bevor Ihre Websites diese sichere Verbindung verwenden können, sind einige Schritte erforderlich.

**Diese Anleitung erklärt, wie Sie Ihre Website nach der Aktivierung eines SSL-Zertifikats auf HTTPS umstellen.**

## Voraussetzungen

- Auf Ihrem [OVHcloud Webhosting](/links/web/hosting){.external} ist ein [SSL-Zertifikat](https://www.ovhcloud.com/de/web-hosting/options/ssl){.external} installiert.
- Sie verfügen über mindestens eine Website, die auf Ihrem OVHcloud Webhosting installiert und verfügbar ist.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager), Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

Sicherheit nimmt im Internet einen hohen Stellenwert ein. Sie achten sicherlich besonders auf die Vertraulichkeit Ihrer Daten und die Art und Weise, wie diese über das Web übertragen werden. Im Allgemeinen vertrauen Internetnutzer eher Websites, die einen sicheren Datenaustausch ermöglichen, insbesondere wenn es sich um sensible Daten handelt. 

Wenn Sie eine Website mit einer sicheren Verbindung besuchen, zeigt Ihnen Ihr Webbrowser dies in der Adresszeile (URL) auf verschiedene Arten an, z.B.: 

- Ein Logo (normalerweise ein Vorhängeschloss)
- Eine Nachricht
- Eine Farbkodierung
- das verwendete Protokoll, *HTTPS* statt *HTTP*

Es wird dadurch leicht überprüfbar, ob Ihre Website über eine sichere Verbindung verfügt.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Die Umstellung Ihrer Website auf *HTTPS* kann ein heikler Vorgang sein**. Die meisten Aktionen werden im Quellcode der Website ausgeführt. Wenn diese nicht korrekt durchgeführt werden, kann es zu negativen SEO-Auswirkungen für Suchmaschinen (Google, Yahoo!, Bing, etc.) oder sogar zu einer völligen Nichterreichbarkeit Ihrer Website kommen.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wenn Sie Schwierigkeiten haben, die Schritte in diesem Tutorial durchzuführen, empfehlen wir, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

Im Folgenden finden Sie die wichtigsten Schritte, um Ihre Website auf *HTTPS* umzustellen:

- [Schritt 1 - SSL-Zertifikat für das Webhosting aktivieren](#enable-ssl): Ein SSL-Zertifikat aktivieren oder überprüfen, das auf Ihrem Webhosting bzw. Ihrer Website installiert ist.
- [Schritt 2 - Technische Umgebung Ihrer Website überprüfen](#check-environment): Überprüfung, ob die Umstellung Ihrer Website auf *HTTPS* zu Störungen führt, bevor Sie Änderungen vornehmen.
- [Schritt 3 - *HTTPS* auf Ihrer Website aktivieren](#https-enable): Auf Ihrer Website die Verwendung des *HTTPS* Protokolls einrichten. Die in dieser Anleitung gezeigte Methode ist nicht universell und hängt von der verwendeten Website ab.
- [Schritt 4 - Überprüfen Sie, ob Ihre Website ordnungsgemäß funktioniert](#check-your-website): Sicherstellen, dass Ihre Website korrekt angezeigt wird, nachdem *HTTPS* aktiviert wurde.

### Schritt 1 - SSL-Zertifikat für das Webhosting aktivieren <a name="enable-ssl"></a>

Um ein SSL-Zertifikat für Ihr Webhosting zu aktivieren oder zu überprüfen, ob bereits ein SSL-Zertifikat für Ihre Website installiert ist, lesen Sie unsere Anleitung: „[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)“.

### Schritt 2 - Technische Umgebung für Ihre Website überprüfen <a name="check-environment"></a>

Bevor Sie Änderungen an der Konfiguration Ihrer Website vornehmen, ist es wichtig sicherzustellen, dass Sie das *HTTPS* Protokoll korrekt verwenden können. Es gibt kein universelles Vorgehen, da es von der Website abhängt, die Sie verwenden.

Die folgenden Informationen sind daher generisch. Wir empfehlen Ihnen im Zweifel einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren.

#### 2.1 - Vermeiden Sie das Mischen von HTTP- und HTTPS-Inhalten

Wenn Ihre Website in *HTTPS* angezeigt wird, sollten Sie es vermeiden, Inhalte in *HTTP* und *HTTPS* auf Webseiten bzw. der Website insgesamt zu mischen. Wenn Ihre Website also *HTTPS* verwendet, stellen Sie sicher, dass alle Inhalte mit *HTTPS* geladen werden.

Ist das nicht der Fall, bieten Sie auf Ihrer Website Inhalte an, die von Webbrowsern als gemischt (*Mixed Content*) eingestuft werden, d.h. Inhalte, die auf einer als sicher eingestuften Seite als potenziell unsicher eingestuft werden.

Es gibt zwei mögliche Szenarien für *Mixed Content*:

- **Die Website wird korrekt angezeigt, aber in der Adressleiste befindet sich eine Warnung**. Inhalte, die von Ihrem Webbrowser als passiv eingestuft werden (Bilder, Videos, etc.), werden von einer nicht gesicherten Quelle auf Ihre Seite geladen.

- **Teile der Website werden nicht angezeigt, und in der Adressleiste befindet sich eine Warnung**. Inhalte, die von Ihrem Webbrowser als aktiv eingestuft wurden (Skripte, Iframe, CSS-Dateien, etc.), wurden wegen einer nicht sicheren Quelle blockiert.

Stellen Sie sicher, dass der gesamte Inhalt, der von Ihrer Website geladen wird, aus einer sicheren Quelle stammt.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Beachten Sie, dass auch wenn Ihr Hosting über ein SSL-Zertifikat verfügt, die darauf gehosteten Inhalte über *HTTP* oder *HTTPS* geladen werden können. Dies hängt davon ab, wie Sie diese Inhalte im Code Ihrer Website identifiziert haben. Überprüfen Sie daher, dass alle Inhalte, die Sie von Ihrer Website laden, das *HTTPS*-Protokoll verwenden.

Achten Sie beispielsweise besonders auf die Adressen, die Sie im Code Ihrer Website verwenden. Wenn möglich:

- Bevorzugen Sie relative Adressen wie: `../img/header.png`.
- Vermeiden Sie absolute Adressen, die das *HTTP*-Protokoll enthalten, wie: `http://domain.tld/img/header.png`.

Passen Sie bei Bedarf den Code Ihrer Website entsprechend an. 

Wenn Sie eine *turn-key* Website (WordPress, PrestaShop, Drupal, Joomla!) verwenden, ist die Struktur in der Regel bereits für die Umstellung auf *HTTPS* ausgelegt. Sie sollten keine Änderungen am Code Ihrer Website vornehmen müssen.

#### 2.2 - Erstellen Sie keine doppelten Inhalte

Je nachdem, wie Ihre Website codiert ist, stellen Sie sicher, dass sie nicht über verschiedene Adressen erreichbar ist, zum Beispiel über *HTTP* und *HTTPS*. Ist das der Fall, kann von mehreren verschiedenen Adressen aus auf denselben Inhalt zugegriffen werden, was von Suchmaschinen als doppelter Inhalt (*duplicate content*) betrachtet wird.

Dadurch kann das Suchmaschinen-Ranking Ihrer Website herabgesetzt werden. Stellen Sie daher sicher, dass Ihr Code die Verwendung von *HTTPS* erzwingt, indem Sie eine Rewrite-Regel einfügen, wenn Sie *HTTPS* aktivieren möchten.

Wenn Sie eine *turn-key* Website verwenden, verwaltet deren Struktur automatisch die Umschreiberegeln. Sie sollten also keine Änderungen am Code Ihrer Website vornehmen müssen.

### Schritt 3 - HTTPS auf Ihrer Website aktivieren <a name="https-enable"></a>

Sobald Ihr Webhosting über ein aktives SSL-Zertifikat verfügt, die betreffende [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) über eine aktive SSL-Verbindung verfügt und Ihre Website für die Umstellung auf *HTTPS* bereit ist, können Sie diese aktivieren.

> [!warning]
>
> Bevor Sie mit der Durchführung von Maßnahmen beginnen, empfehlen wir Ihnen, ein vollständiges Backup Ihrer Website zu erstellen. Dieses Backup muss nicht nur die Dateien auf dem [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_save_and_backup), sondern auch die Dateien der [Datenbank](/pages/web_cloud/web_hosting/sql_database_export) enthalten, wenn die Website eine solche verwendet.
>
> In diesem Schritt müssen die Aktionen direkt in den Dateien ausgeführt werden, aus denen Ihre Website besteht. Wenden Sie sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner).
>

Es gibt verschiedene Möglichkeiten, *HTTPS* für Ihre Website zu aktivieren. Für diesen Vorgang sind in der Konfiguration der Website, die Sie verwenden, einige Änderungen erforderlich. Die folgenden Informationen können Ihnen bei der Aktivierung helfen, können aber je nach Anwendungsfall unvollständig oder irrelevant sein.

- **Sie verwenden eine *turn-key* Website (WordPress, PrestaShop, Drupal, Joomla!, etc.)**:

Die Aktivierung von *HTTPS* erfolgt in der Regel über das Verwaltungsinterface Ihrer Website. Die Bezeichnung und das genaue Vorgehen zur Aktivierung von *HTTPS* hängen von der verwendeten Software ab. 

Sie können beispielsweise eine Einstellung namens "*HTTPS* erzwingen" aktivieren oder dem vollständigen Link Ihrer Website ein `s` hinzuzufügen: „**http**://domain.tld“ würde dann zu „**https**://domain.tld“.

Wenn Sie nicht wissen, wie Sie diese Aktion über das Verwaltungsinterface Ihrer *turn-key* Website durchführen, oder wenn Sie sich nicht sicher sind, lesen Sie die offizielle Dokumentation des Herausgebers. 

- **Sie nutzen eine Website, die von Ihnen (oder einem Dienstleister) erstellt wurde**: 

Die Aktivierung von *HTTPS* muss wahrscheinlich direkt im Code Ihrer Website erfolgen. Wenn Sie über die notwendigen Kenntnisse verfügen, ändern Sie den Code Ihrer Website, um sie an die Verwendung von *HTTPS* anzupassen. Wenn Sie sich nicht sicher sind, welche Einstellungen Sie vornehmen sollen, wenden Sie sich an den Entwickler Ihrer Website. 

Im Folgenden finden Sie Beispiele für Skripts, die Sie bei Bedarf in eine **.htaccess**-Datei einfügen können. Diese ersetzen jedoch nicht die Hilfe eines Webmasters. Ersetzen Sie den im ersten Skript enthaltenen Domainnamen `domain.tld` durch Ihren eigenen Domainnamen und passen Sie ihn bei Bedarf an.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Dieses erste Beispielskript leitet alle URLs, die über Port 80 mit *HTTP* empfangen wurden, zu der sicheren URL mit *HTTPS* `https://domain.tld/` um.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

In diesem zweiten Beispielskript werden alle URLs, die über das *HTTP*-Protokoll empfangen wurden, in *HTTPS* umgewandelt, während der Rest der URL nach den `://`-Zeichen erhalten bleibt.

Überprüfen Sie in diesem zweiten Beispiel, ob alle Ihre Ziel-Domains oder Subdomains über ein aktives SSL-Zertifikat verfügen.

**Achtung**, für die Hosting-Angebote [Cloud Web](/links/web/hosting-cloud-web-offer) ist folgendes Skript zu verwenden:

```bash
RewriteEngine On
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

### Schritt 4 - Überprüfen Sie die Funktion Ihrer Website <a name="check-your-website"></a>

Überprüfen Sie nach der Aktivierung von *HTTPS* auf Ihrer Website, ob diese ordnungsgemäß funktioniert und alle Inhalte wie vor der Änderung angezeigt werden. Prüfen Sie hierzu auf der Website, ob Meldungen oder Warnungen erscheinen, und ob das Layout Ihrer Website überall korrekt angezeigt wird. 

Wenn Sie eine Störung feststellen, versuchen Sie diese zu beheben oder deaktivieren Sie *HTTPS*. Bei Bedarf können Sie auch ein vollständiges Backup Ihrer Website in [Schritt 3](#https-enable) erstellen.

Wenn Ihre Website korrekt angezeigt wird und nach der Umstellung auf *HTTPS* keine Warnung angezeigt wird, haben Sie die Änderung korrekt durchgeführt. Wenn Sie *HTTPS* auf einer anderen Website aktivieren möchten, wiederholen Sie die in dieser Anleitung beschriebenen Schritte.

## Weiterführende Informationen <a name="go-further"></a>

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
