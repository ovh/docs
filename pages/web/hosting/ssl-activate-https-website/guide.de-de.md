---
title: 'Website mit SSL-Zertifikat auf HTTPS umstellen'
slug: website-umstellen-https-ssl
excerpt: 'Hier erfahren Sie, wie Sie Ihre Website mit einem SSL-Zertifikat auf HTTPS umstellen.'
section: 'SSL'
order: 02
---

**Stand 04.10.2022**

## Einleitung

Bei Ihrem OVHcloud Webhosting können Sie ein SSL-Zertifikat verwenden. Damit haben Sie die Möglichkeit, eine oder mehrere Ihrer Websites mit einer sicheren Verbindung auszustatten und über HTTPS verfügbar zu machen. Bevor Sie allerdings alle Vorteile der sicheren SSL-Verbindung nutzen können, sind noch ein paar Schritte nötig.

**In dieser Anleitung erfahren Sie, wie Sie mit einem SSL-Zertifikat Ihre Website auf HTTPS umstellen.**

## Voraussetzungen

- Auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} ist ein [SSL-Zertifikat](https://www.ovh.de/ssl/){.external} installiert.
- Sie besitzen mindestens eine Website, die über Ihr OVHcloud Webhosting eingerichtet und zugänglich ist.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

## Beschreibung

Sicherheit wird im Internet immer wichtiger. Auch Sie selbst achten sicherlich ganz besonders auf die Vertraulichkeit Ihrer Daten und die Art und Weise, wie diese über das Internet übertragen werden. Im Allgemeinen vertrauen Internetnutzer eher solchen Seiten, die eine sichere Verbindung ermöglichen, und dies natürlich ganz besonders bei der Weitergabe vertraulicher Daten. 

Wenn Sie eine Internetseite mit sicherer Verbindung besuchen, kann Ihr Browser dies in der Adresszeile gleich auf mehrere Arten anzeigen: ein kleines Icon (normalerweise ein Vorhängeschloss), eine Meldung, manchmal eine farbige Hervorhebung und nicht zuletzt die Verwendung des HTTPS-Protokolls statt HTTP. Es ist also für jeden Besucher offensichtlich, ob Ihre Website gesichert ist oder nicht.

![HTTPS Website](images/activate-https-website-ssl-step1.png){.thumbnail}

**Die Umstellung Ihrer Website auf HTTPS ist ein heikler Vorgang.** Sie umfasst einige Schritte, bei denen insbesondere Änderungen an der Konfiguration Ihrer Website (dem Code) nötig sind. Wenn diese nicht korrekt durchgeführt werden, kann dies verschiedene negative Folgen haben, etwa ein schlechteres SEO-Ranking oder schlimmstenfalls die Nichtverfügbarkeit Ihrer Website. 

Folgende Tabelle enthält eine Übersicht der verschiedenen Schritte der Umstellung.

|Schritt|Aktion|Beschreibung|
|---|---|---|
|1|SSL-Zertifikat für das Hosting aktivieren|Im ersten Schritt aktivieren Sie Ihr SSL-Zertifikat bzw. überprüfen, ob es korrekt auf dem Hosting installiert und für die betreffende Website aktiviert ist.|
|2|Technische Umgebung überprüfen|Im zweiten Schritt überprüfen Sie, ob die Umstellung Ihrer Website auf HTTPS negative Folgen haben könnte, bevor Sie tatsächlich mit Änderungen beginnen.|
|3|HTTPS für die Website aktivieren|Im dritten Schritt aktivieren Sie die Verwendung des HTTPS-Protokolls für Ihre Website. Die genaue Umsetzung dieses Vorgangs hängt von Art und Aufbau der von Ihnen verwendeten Website ab.|
|4|Korrektes Funktionieren der Website überprüfen|Im vierten und letzten Schritt überprüfen Sie, ob Ihre Website auch nach Aktivierung von HTTPS ordnungsgemäß funktioniert.|

### Schritt 1: SSL-Zertifikat für das Hosting aktivieren

Die Aktivierung des SSL-Zertifikats für Ihr Webhosting erfolgt über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Zwei getrennte Maßnahmen sind hier notwendig:

|Aktion|Beschreibung|
|---|---|
|SSL-Zertifikat auf Ihrem Hosting aktivieren|Erlaubt OVHcloud die Installation eines SSL-Zertifikats auf Ihrem Hosting. Dabei haben Sie die Wahl zwischen verschiedenen Arten von Zertifikaten. Bitte wählen Sie das für Sie passende Angebot aus.|
|SSL für die betreffende Multisite aktivieren|Die Website, für die Sie HTTPS verwenden möchten, muss auf Ihrem Hosting als „Multisite“ konfiguriert sein. Stellen Sie sicher, dass SSL für die Seite aktiviert und funktional ist.|

Wie diese beiden Schritte genau funktionieren, erfahren Sie in unserer Anleitung „[SSL-Zertifikat auf einem Webhosting verwalten](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/){.external}“. Wenn Sie Ihr OVHcloud Hosting neu erworben haben, ist möglicherweise ein kostenloses SSL-Zertifikat vorinstalliert und die Multisite verfügt bereits über eine aktive SSL-Verbindung.

Um dies zu überprüfen, loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden. Unter „SSL-Zertifikat“ müsste ein kleines „Ja“ stehen, was anzeigt, dass bereits ein SSL-Zertifikat auf Ihrem Webhosting installiert ist. 

![HTTPS Website](images/activate-https-website-ssl-step2.png){.thumbnail}

Gehen Sie dann auf den Tab `Multisite`{.action}. Die angezeigte Tabelle listet alle Domains auf, die Ihrem Hosting hinzugefügt wurden. In der Spalte „SSL“ finden Sie Informationen zum Aktivierungsstatus der sicheren SSL-Verbindung für die verschiedenen Multisites. 

![HTTPS Website](images/activate-https-website-ssl-step3.png){.thumbnail}

Sollte sich bei dieser Kontrolle herausstellen, dass offenbar kein SSL-Zertifikat korrekt auf Ihrem Webhosting installiert und/oder für die betreffende Multisite aktiviert wurde, lesen Sie bitte unsere Anleitung „[SSL-Zertifikat auf einem Webhosting verwalten](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/){.external}“.

### Schritt 2: Technische Umgebung überprüfen

Bevor Sie etwaige Änderungen an der Konfiguration Ihrer Website vornehmen, sollten Sie unbedingt sicherstellen, dass das HTTPS-Protokoll korrekt verwendet werden kann. Hierfür gibt es kein universelles Vorgehen, weil dies von der konkret von Ihnen verwendeten Website abhängt. 

Wir empfehlen Ihnen jedoch dringend, die unten aufgeführten Aspekte zu berücksichtigen. Bitte beachten Sie hierbei, dass diese Informationen Ihnen zwar bestmöglich helfen sollen, aber nicht die Beratung durch einen kompetenten Webmaster ersetzen können.

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung. 
>

#### 2.1 Mischen von HTTP- und HTTPS-Inhalten vermeiden

Als allgemeine Grundregel gilt, dass weder auf einer einzelnen Webseite noch auf einer HTTPS-Website insgesamt HTTP- und HTTPS-Inhalte gemischt vorkommen sollten. Wenn Sie also eine HTTPS-Website betreiben wollen, stellen Sie sicher, dass alle Inhalte via HTTPS geladen werden.

Ist dies nicht der Fall, bietet Ihre Website gemischte Inhalte an, was von Browsern als *<i>Mixed Content</i>* erkannt wird. Dies bedeutet, dass Sie potenziell unsichere Inhalte auf einer als sicher angezeigten Website anbieten. Das kann je nach Art des <i>Mixed Content</i> unterschiedliche Folgen haben:

- **Die Website wird korrekt angezeigt, aber in der Adresszeile erscheint eine Warnung**. Dies kann bedeuten, dass passiver Inhalt (Bilder, Videos usw.) aus einer nicht sicheren Quelle geladen wird.

- **Manche Bereiche der Website werden nicht korrekt angezeigt und in der Adresszeile erscheint eine Warnung**. Dies kann bedeuten, dass aktive Inhalte (Skripts, iFrames, CSS-Dateien usw.) aus einer nicht gesicherten Quelle blockiert wurden.

Daher ist es unerlässlich, dass sämtliche Inhalte Ihrer Website aus einer sicheren Quelle geladen werden. 

![HTTPS Website](images/activate-https-website-ssl-step4.png){.thumbnail}

Beachten Sie, dass auch wenn Ihr Hosting über ein SSL-Zertifikat verfügt, die darauf gehosteten Inhalte via HTTP oder HTTPS geladen werden können. Dies hängt davon ab, wie Sie die Inhalte im Code Ihrer Website identifiziert haben. Stellen Sie daher sicher, dass alle über Ihre Website geladenen Inhalte das HTTPS-Protokoll verwenden.

Achten Sie beispielsweise auf im Code Ihrer Website verwendete Adressen. Wenn möglich:

- verwenden Sie bevorzugt relative Adressen wie `./img/header.png` und
- vermeiden Sie absolute Adressen, die das HTTP-Protokoll verwenden, etwa `http://mypersonaldomain.ovh/img/header.png`.

Falls nötig, muss der Code Ihrer Website entsprechend angepasst werden. Wenn Sie jedoch eine schlüsselfertige Website (z. B. WordPress) verwenden, ist deren Struktur in der Regel unmittelbar für den Wechsel auf HTTPS verwendbar. In diesem Fall müssen Sie also keine Anpassungen im Code vornehmen.

#### 2.2 <i>Duplicate Content</i> vermeiden

Je nachdem, wie Ihre Website codiert ist, muss sichergestellt werden, dass sie nicht über verschiedene Adressen erreichbar ist, etwa sowohl über HTTP als auch HTTPS. Wenn dies nämlich der Fall ist, sind dieselben Inhalte über unterschiedliche Adressen aufrufbar, was Suchmaschinen als *Duplicate Content* („doppelten Inhalt“) erkennen.

Auch dies kann sich negativ auf das Suchmaschinenranking Ihrer Website auswirken. Daher ist es sinnvoll sicherzustellen, dass die Website die Verwendung von HTTPS „erzwingt“. Das funktioniert über eine „<i>Rewrite</i>-Regel“, die Sie in den Code Ihrer Website implementieren sollten, wenn Sie HTTPS aktivieren möchten.

Auch hier ist es für Sie praktisch, wenn Sie eine schlüsselfertige Website (z. B. WordPress) verwenden; in diesem Fall werden die <i>Rewrite</i>-Regeln nämlich automatisch verwaltet und Sie müssen selbst keine Anpassungen im Code vornehmen.

### Schritt 3: HTTPS für die Website aktivieren

Wenn Ihr Webhosting dann über ein funktionales SSL-Zertifikat sowie die betreffende Multisite über eine aktive SSL-Verbindung verfügt und Sie außerdem sichergestellt haben, dass Ihre Website für die Umstellung bereit ist, können Sie HTTPS aktivieren.

> [!warning]
>
> Bevor Sie tatsächlich mit der Umstellung beginnen, empfehlen wir Ihnen, ein vollständiges Backup Ihrer Website zu machen, d. h. sowohl die gespeicherten Dateien zu sichern als auch die Datenbank, falls Ihre Website eine verwendet. 
>

Es gibt verschiedene Arten, HTTPS für eine Website zu aktivieren. Für den Vorgang sind in jedem Fall mehrere Anpassungen in der Konfiguration der Website notwendig. Die folgenden Informationen sollen Ihnen bei der Aktivierung helfen. Bitte beachten Sie jedoch, dass Sie für Ihren speziellen Fall möglicherweise unvollständig oder nicht zutreffend sind.

- **Sie verwenden eine schlüsselfertige Website (wie WordPress)**: 

Die Aktivierung von HTTPS erfolgt normalerweise über das Verwaltungsinterface Ihrer Website. Die Bezeichnung und das genaue Vorgehen hängen dabei vom Website-Typ ab. 

So kann es beispielsweise einen Parameter mit der Bezeichnung „HTTPS erzwingen“ geben, den Sie einfach aktivieren können, oder der Link der Website muss angepasst und ein „s“ hinzugefügt werden: „**http**://mypersonaldomain.ovh“ würde dann also zu „**https**://mypersonaldomain.ovh“.

Wenn Sie sich nicht sicher sind, wie Sie diesen Vorgang über Ihr Verwaltungsinterface ausführen, können Sie die offizielle Dokumentation des Herausgebers Ihrer Website zurate ziehen. 

- **Sie verwenden eine Website, die Sie selbst codiert haben (oder jemand anderes in Ihrem Auftrag)**: 

Hier muss HTTPS definitiv direkt im Code Ihrer Website aktiviert werden. Wenn Sie über die notwendigen Kenntnisse verfügen, passen Sie den Code entsprechend an, um Ihre Website auf HTTPS umzustellen. Andernfalls nehmen Sie Kontakt mit dem Webmaster auf, der die Website für Sie erstellt hat. 

Als allgemeine Hilfe für diesen Vorgang finden Sie unten ein Beispiel für ein Skript zum Einfügen in die **.htaccess**-Datei. Dies ersetzt jedoch nicht die Beratung durch einen kompetenten Webmaster. Achten Sie darauf, den Platzhalter in diesem Skript durch Ihren eigenen Domainnamen zu ersetzen und das Skript nötigenfalls anzupassen.

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

> [!warning]
>
> Für die [Cloud Web](https://www.ovhcloud.com/de/web-hosting/cloud-web-offer/) Hosting-Angebote ist folgendes Skript zu verwenden:
> ```
> RewriteEngine On
> RewriteCond %{ENV:HTTPS} !on
> RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
> ```
>

### Schritt 4: Korrektes Funktionieren der Website überprüfen

Nachdem Sie HTTPS für Ihre Website aktiviert haben, überprüfen Sie, ob diese weiterhin korrekt funktioniert und alle Inhalte wie vor der Änderung angezeigt werden. Versuchen Sie hierfür, die Seite zu laden und achten Sie darauf, ob Meldungen oder Warnhinweise erscheinen. Nehmen Sie sich dann noch kurz Zeit, um Layout und Formatierung verschiedener Bereiche Ihrer Website zu kontrollieren. 

Wir empfehlen Ihnen, schon bei der kleinsten Fehlfunktion diese schnellstmöglich zu beheben oder vorsichtshalber HTTPS vorläufig zu deaktivieren. Bei Bedarf können Sie das im vorherigen Schritt erstellte vollständige Backup Ihrer Website verwenden.

Wenn Ihre Website korrekt angezeigt und nach der Umstellung auf HTTPS kein Warnhinweis angezeigt wird, haben Sie alles korrekt ausgeführt. Wenn Sie HTTPS für eine andere Website aktivieren möchten, führen Sie alle in dieser Anleitung beschriebenen Schritte erneut aus.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
