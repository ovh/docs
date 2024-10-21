---
title: "Ihre Webseiten mit CDN beschleunigen"
excerpt: "Diese Anleitung erklärt, wie Sie die Ladezeiten Ihres Webhostings mit der CDN-Option verbessern"
updated: 2024-10-07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Sie können die Benutzerfreundlichkeit Ihrer Webseiten durch die Beschleunigung des Seitenaufbaus verbessern. Die effektivste Technik hierzu können Sie mit der Aktivierung eines CDN (Content Delivery Network) einsetzen. Diese Option ermöglicht das Zwischenspeichern statischer Dateien wie Bilder, CSS und Javascript auf Servern, die näher bei Ihren Besuchern liegen.

**Diese Anleitung erklärt, wie Sie die CDN-Option für Ihr Webhosting verwalten.**

## Definition

**Wie funktioniert ein CDN?**

Ein CDN (Content Delivery Network) bezeichnet ein Netzwerk für die Bereitstellung von Inhalten. Es werden mehrere Server weltweit bereitgestellt, um Ihre Webseiteninhalte anzuzeigen. Je näher diese Server bei Ihren Benutzern liegen, desto schneller funktioniert ihre Webseite.

Jeder Server speichert einen Teil Ihrer Webseite im Cache, um die Funktion zu gewährleisten. Im Allgemeinen ist es ratsam, so genannte statische Dateien einzubeziehen: Bilder, Javascript- und CSS-Dateien, die das ordnungsgemäße Funktionieren Ihrer Webseite ermöglichen, aber nur sehr selten geändert werden.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.

## In der praktischen Anwendung

###  Die CDN-Option aktivieren

> [!primary]
> 
> Die CDN-Option ist bereits in den Webhosting-Angeboten der Reihe "Performance" enthalten.

#### Wenn die CDN-Option nicht auf Ihrem Webhosting bestellt oder aktiviert wurde

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN-Option" danach auf `CDN bestellen`{.action} oder `Option aktivieren`{.action}, wenn die CDN-Option bereits in Ihrem Hosting enthalten ist.

> [!primary]
> 
> Wenn Sie eine CDN-Option von vor dem 19.11.2020 haben, können Sie das neue "Shared CDN" Angebot bestellen, indem Sie auf `CDN auf die neue Version updaten`{.action} klicken.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-a-cdn.png){.thumbnail}

Sie werden zum Bestellformular weitergeleitet. Sobald die Bestellung bezahlt wurde, ist Ihre Dienstleistung innerhalb weniger Minuten verfügbar.

#### Wenn die CDN Option bereits für Ihr Webhosting aktiviert ist

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf dem Tab `Multisite`{.action} auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `Domain bearbeiten`{.action}.

Haken Sie "CDN aktivieren" an, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/cdn-activation.png){.thumbnail}

> [!warning]
> 
> Wenn dem Webhosting unter `Multisite`{.action} eine externe Domain hinzugefügt wurde, müssen Sie die IP-Adresse des CDN Ihres Hostings in der DNS-Zone des Domainnamens angeben.
>
> Im [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) finden Sie die spezifische IP-Adresse des CDN Ihres Clusters.
 
**Warum kann ich mit der CDN-Option nicht von geolokalisierten IPs profitieren?**    

Das CDN basiert auf dem Prinzip der Anycast-IP. Statische Dateien werden effizienter bereitgestellt, indem nicht derselbe Server je nach Standort angefragt wird. Eine IP-Geolokalisierung ist daher nicht erforderlich.  
Bezüglich SEO (Suchmaschinenoptimierung) ist die Ladegeschwindigkeit Ihrer Webseite wichtiger als die Geolokalisierung der IP-Adressen Ihres Hostings.

### Shared CDN verwalten 

#### Den Shared CDN-Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Dies ist zum Beispiel der Fall, wenn Sie eine neue Version Ihrer Webseite erstellt haben. Sie können dann den CDN-Cache für jeden Ihrer Multisite-Einträge leeren.

Gehen Sie zum Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN leeren`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/sharedcdn-modify-cdn.png){.thumbnail}

#### Shared CDN-Optionen konfigurieren

Gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN bearbeiten`{.action}.

> [!warning]
> 
> Einige Optionen sind für das Hosting-Angebot "Basic" nicht verfügbar und erfordern die Aktivierung von [CDN Security](/links/web/hosting-options-cdn) oder [CDN Advanced](/links/web/hosting-options-cdn).

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/sharedcdn-modify-cdn.png){.thumbnail}

- **Always online**: Erlaubt die Online-Speicherung der CDN Daten im Fall eines Serverausfalls.

- **HTTP/2**: Protokoll, das die Sicherheit und Latenz Ihrer Webseite verbessert.

- **Dev-Mode**: Ermöglicht es Ihnen, den Cache während der Entwicklung Ihrer Webseite zu deaktivieren.

- **Brotli**: Typ der Komprimierung, um die Größe Ihrer Dateien im Cache zu optimieren.

- **Cache-Regel**: Erstellen Sie bis zu 5 Regeln. Sie definieren die Häufigkeit der Cache-Aktualisierungen für bestimmte Ressourcen Ihrer Webseite ([siehe nächster Schritt](./#eine-cache-regel-erstellen).)

Wenn Sie Ihre Optionen ausgewählt haben, klicken Sie auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/sharedcdn-option-settings.png){.thumbnail}

##### **Eine Cache-Regel erstellen** <a name="cacherules"></a>

Um eine Cache-Regel zu einem der Elemente Ihrer Seite hinzuzufügen, gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und anschließend auf `CDN konfigurieren`{.action}.

Klicken Sie unter **Cache-Regeln** auf den Button `Regel hinzufügen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/sharedcdn-create-cache-rule.png){.thumbnail}

- **Name der Regel**: Weisen Sie Ihrer Regel einen Namen zu.

- **URI**: Geben Sie die entsprechenden Ressourcen Ihrer Webseite über den Verzeichnispfad an. Für die Angebote CDN Basic und CDN Security können nur Dateierweiterungen angegeben werden.

- **Lebensdauer**: Geben Sie die Dauer des Caching der ausgewählten Ressource an.

- **Rangfolge**: Sortieren Sie Ihre Regeln nach Ausführungsordnung.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf den Button `Regel erstellen`{.action}.

Die Regeln erscheinen in der Liste. Sie können sie ändern, indem Sie auf `...`{.action} rechts neben der Regel klicken und dann auf `Regel ändern`{.action} oder eine Regel löschen, indem Sie `Regel löschen`{.action} auswählen.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/sharedcdn-cache-rules.png){.thumbnail}

Klicken Sie nach der Konfiguration Ihrer Regeln und Optionen auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

> [!warning]
>
> Um eine höhere Quota an Regeln und zusätzliche Einstellungen für die Erstellung von Cache-Regeln zu erhalten, können Sie sich für die [CDN Advanced Option](/links/web/hosting-options-cdn) entscheiden.

#### CDN Security Optionen konfigurieren

Gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann `CDN bearbeiten`{.action}. 

> [!primary]
>  Für die unten aufgeführten Optionen ist [CDN Security](/links/web/hosting-options-cdn) oder [CDN Advanced](/links/web/hosting-options-cdn) erforderlich.

- **Cross-Origin Resource Sharing (CORS)**: Geben Sie in der Liste die externen Domainnamen an, die auf die Ressourcen Ihrer Website zugreifen dürfen.

	Wenn die Funktion aktiviert ist, klicken Sie auf `Liste der externen Ressourcen bearbeiten`{.action}, um die Domainnamen hinzuzufügen, die Ihre Ressourcen teilen dürfen.

	![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/security-cors.png){.thumbnail}

	Nachdem Sie Ihre Liste fertiggestellt haben, klicken Sie auf `Bestätigen`{.action}.

> [!primary]
>
> Wenn Sie die CORS-Option aktivieren, ohne in der Liste Domains anzugeben, bedeutet dies, dass alle Domainnamen die Ressourcen Ihrer Website verwenden dürfen.

- **HTTPS-Redirect**: Schützen Sie den gesamten Traffic Ihrer Website, indem Sie ihn vorübergehend oder dauerhaft auf das HTTPS-Protokoll umleiten.

	Wenn die Funktion aktiviert ist, klicken Sie auf das Dropdown-Menü, um zwischen `Permanente Weiterleitung (301)` und `Temporäre Weiterleitung (302)` zu wählen.

	![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/security-https-redirect.png){.thumbnail}

- **HTTP Strict Transport Security (HSTS)**: Machen Sie Ihre Website nur über HTTPS zugänglich. Auf diese Weise ist Ihr Hosting sicher vor Downgrade- (oder Rollback-) Angriffen.

	Wenn die Funktion aktiviert ist, legen Sie den Zeitraum fest, in dem der Browser die HSTS-Funktion auf Ihrer Website anwenden wird.

	![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/security-hsts.png){.thumbnail}

> [!primary]
> 
> Wenn Sie die HSTS-Funktion auf Ihrer Website aktivieren, wird das HTTPS-Protokoll in Ihrem Browser für den Zeitraum bis zum Ende der so genannten "Höchstalter"-Periode aktiviert, auch wenn die Funktion in Ihrem Kundencenter deaktiviert wurde. Wenn der Cache jedoch im Browser geleert wird, der Ihre Website bereits besucht hat, wendet dieser den neuen Zustand der HSTS-Funktion an.

- **Mixed content**: Stellen Sie die Integrität aller Inhalte Ihrer Webseiten sicher. Die Seiten werden sicher geladen und tragen zu einem optimalen Benutzererlebnis bei. Alle internen und externen Ressourcen Ihrer Website müssen dabei in HTTPS verfügbar sein, um einen Browserfehler zu vermeiden.

- **Application Firewall**: Die **W**eb **A**pplication **F**irewall (WAF) schützt Ihre Seite vor betrügerischen Angriffen wie Code-Injection, unzulässige Anfragen oder Datendiebstahl. Es deckt die wichtigsten bekannten Sicherheitsgefahren im Web ab, indem die übertragenen Anfragen und Pakete gefiltert werden (die Liste der Schwachstellen wird von OVHcloud verwaltet und regelmäßig aktualisiert).  

> [!warning]
>
> Vor der Installation eines OVHcloud [1-Klick-Moduls](/pages/web_cloud/web_hosting/cms_install_1_click_modules) muss WAF deaktiviert werden, um eine Blockierung der Installation des Moduls zu vermeiden.

> [!primary]
>  
> Die WAF wird vollständig von OVHcloud verwaltet. Die Liste der Schwachstellen wird regelmäßig aktualisiert.

#### Konfiguration der CDN Advanced-Optionen

Gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann `CDN bearbeiten`{.action}.  

> [!primary]
>
>  Die unten aufgeführten Optionen erfordern das Abo eines [CDN Advanced](/links/web/hosting-options-cdn).

- **Geolocation HTTP Header**: Bestimmen Sie das Land des Besuchers, um die Ausgabe entsprechend anzupassen. Der Ländercode wird automatisch im Header jeder Anfrage hinzugefügt, um von Ihrem Original-Server bearbeitet zu werden. Die Identifikationselemente im Header werden unter den Bezeichnungen `Geo-Country-Code`, `Geo-Country-Name`, `Geo-Region`, `Geo-City` angegeben.

- **Prefetch**: Planen Sie das Laden der nächsten Ressource. Laden Sie sie automatisch im CDN Cache mithilfe des *header link* Ihrer Website. Dieser Mechanismus wird hauptsächlich verwendet, um CSS, JavaScript, Bilder, Favicons oder Schriftarten zu laden, die von der Website angefordert werden. 

	Im folgenden Beispiel wird, wenn die aktuelle Seite "Hi" anzeigt, eine Subanfrage das Vorladen der Ressource`/cache/style.css` auslösen.  

	```	
	<?php
	header("Link: </cache/style.css>; rel=prefetch");
	print 'Hi'
	?> 
	```

- **Mobile redirect**: Leiten Sie die Benutzer von Mobilgerät-Browsern automatisch auf eine optimierte Website um. Wahlweise systematisch umgeleitet auf den Root einer anderen Website oder die URL wird beibehalten, indem nur die Domain (oder die Subdomain) ersetzt wird.

- **Advanced Purge**: Individualiseren Sie die Leerung, indem Sie die zu löschenden Elemente des Caches auswählen: die gesamte Webseite, ein Ordner, eine URI, eine Dateierweiterung oder einen regulären Ausdruck. 

	Klicken Sie im Tab Multisite auf den Button `...`{.action}. rechts neben dem Multisite-Eintrag und dann auf `Cache leeren`{.action}. 

	![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/advanced-cdn-clear-cache-step-1.png){.thumbnail}

- **Query String**: Verwaltung des Inhalte-Caching basierend auf den Parametern (auch *Query String* genannt) der Anfrage-URL. Wählen Sie abhängig von Ihrer Konfiguration das Verhalten des CDN Caches aus:
	- *Deaktiviert*: Die Ressource wird mit unsortierten Parametern in den Cache gelegt. Dies führt zum Beispiel zu 2 Iterationen im CDN Cache für 2 URLs mit den gleichen Einstellungen in einer anderen Reihenfolge.
	- *Aktiviert - Einstellungen sortieren*: Die Ressource wird durch Sortieren ihrer Parameter in den Cache gelegt. Es wird sortiert, bevor die URL im CDN Cache gespeichert wird. So wird zum Beispiel nur eine Iteration für 2 URL mit den gleichen Parametern in einer anderen Reihenfolge gespeichert.
	- *Aktiviert - Einstellungen ignorieren*: Die Ressource wird ohne Parameter gecached. Der CDN Cache berücksichtigt die in der URL eingegebenen Parameter nicht, er speichert die URL also ohne die Parameter im Cache.

- **Prewarm**: Erzwingt das permanente Caching Ihrer wichtigsten Ressourcen. Das CDN antizipiert und aktualisiert den Cache automatisch, ohne auf eine benutzerseitige Anfrage zu warten. Diese Funktion gilt nur für statischen Inhalt mit einer TTL über 0 und einer Ressource von höchstens 1 GB. Ein Messindikator gibt den Ressourcenverbrauch in *Prewarm* an, abhängig von der Liste Ihrer URLs. Der Gesamtumfang der von diesen URLs aufgerufenen Ressourcen darf 1 GB nicht überschreiten.

	Um die URL-Liste zu definieren, die in *Prewarm* enthalten sein sollen, klicken Sie auf `Die Liste der URLs bearbeiten`{.action}.

	Geben Sie mithilfe der Felder `Protokoll`, `Domainname` und `Pfad der Ressource` einen Link zu einer Ressource ein, die Sie zur **Prewarm**-Funktion hinzufügen möchten, und klicken Sie dann auf `Hinzufügen`{.action}.

	Im unteren wird eine Liste mit allen Links, die Sie erzeugt haben, aufgebaut. Sie können die Links Ihrer Wahl löschen, indem Sie diese auswählen, und dann auf `Entfernen `{.action} klicken.

	![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/advanced-prewarm.png){.thumbnail}

- **Cache rule**: Erstellen Sie bis zu 100 Regeln. Mit ihnen wird die Häufigkeit der Cache-Aktualisierungen für bestimmte Ressourcen Ihrer Website definiert. Weitere Informationen finden Sie im [nächsten Schritt](#cacherulesadv).

Klicken Sie nach der Konfiguration Ihrer Optionen auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

##### **Eine erweiterte Cache-Regel erstellen** <a name="cacherulesadv"></a>

Um eine Cache-Regel zu einem der Elemente Ihrer Website hinzuzufügen, gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und anschließend auf `CDN bearbeiten`{.action}.

Klicken Sie unter **Cache-Regeln** auf den Button `Regel hinzufügen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/advanced-create-cache-rule.png){.thumbnail}

* **Regelname**: Weisen Sie Ihrer Regel einen Namen zu.
* **Ressourcenart**: Wählen Sie aus den folgenden Optionen:
    * **Endung**: Geben Sie eine gültige Dateiendung ohne Punkt ein, zum Beispiel: css
    * **Ordner**:  Geben Sie einen gültigen Pfad zu einem Ordner im Wurzelverzeichnis Ihrer Website an.
    * **Eigener regulärer Ausdruck**: Gilt für alle URIs Ihrer Website.
    * **URI**: Geben Sie die Teilmenge der Ressourcen Ihrer Website über den URL-Pfad ein.
* **Ressource**: Definieren Sie die Attribute abhängig vom gewählten Ressourcentyp.
* **Laufzeit**: Geben Sie die Cache-Dauer der ausgewählten Ressource an.
* **Reihenfolge**: Sortieren Sie Ihre Regeln (von der niedrigsten zur höchsten) nach Ausführungsreihenfolge.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf den Button `Regel erstellen`{.action}.

Die Regeln erscheinen in einer Liste. Sie können eine Regel ändern, indem Sie auf `...`{.action} rechts von dieser und dann auf `Die Regel ändern`{.action} klicken. Sie können die Regel löschen, indem Sie auf `Die Regel löschen`{.action} klicken.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-cdn/advanced-cache-rules.png){.thumbnail}

Klicken Sie nach der Konfiguration Ihrer Regeln und Optionen auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

### Die CDN-Statistiken anzeigen

So greifen Sie auf die Statistiken des CDN zu:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf den Tab `Statistiken und Logs`{.action}.
6. Klicken Sie im Bereich `Statistiken der Seitenaufrufe` auf die Schaltfläche `Die Statistiken anzeigen`{.action}.
7. Sie werden zum Tool **OVHcloud Web Statistics** weitergeleitet. Klicken Sie oben auf das Formular `Domainauswahl`{.action} und wählen Sie einen Domainnamen aus, für den das CDN aktiv ist.
8. Klicken Sie in der rechten Spalte auf den Tab `Cache`{.action}.

Sie sehen nun die Statistiken des CDN für Ihre Domain.

Weitere Informationen finden Sie in unserer Anleitung „[Webhosting - Statistiken und Logs einer Website einsehen](/pages/web_cloud/web_hosting/logs_and_statistics)“.

### Wie kann ich meine Dateien im CDN zwischenspeichern?

**Verwendung eines CMS**

Die wichtigsten CMS erlauben die Installation zahlreicher Plugins, mit denen das Caching statischer Dateien so konfiguriert werden kann, dass sie vom CDN automatisch berücksichtigt werden. Andere ermöglichen die automatische Konfiguration statischer Dateien durch Aktivierung des im CMS integrierten Caching. Weitere Informationen finden Sie in der offiziellen Dokumentation des von Ihnen verwendeten CMS oder des Plugin-Editors.

**Ohne Verwendung eines CMS**

Sie können auch dann vom CDN-Cache profitieren, wenn Sie kein CMS verwenden. Hierzu müssen Sie bei HTTP-Anfragen Header hinzufügen. Es gibt verschiedene Methoden zum Hinzufügen dieser Header. Am einfachsten definieren Sie Regeln in einer *.htaccess* Datei basierend auf Dateierweiterungen.

```htaccess
# Bilder eine Woche lang zwischenspeichern
    <FilesMatch "\.(jpg|jpeg|png|gif)$">
    Header-Set Cache-Control "max-age=604800, public"
    </FilesMatch>

# Caching von Javascript und CSS für einen Monat
    <FilesMatch "\.(js|css)$">
    Header-Set Cache-Control "max-age=2592000"
    </FilesMatch>
```

> [!warning]
>
> Das Caching über HTTP-Header ermöglicht das Zwischenspeichern innerhalb des CDN, aber auch innerhalb des Browsers Ihrer Benutzer. Um zu verhindern, dass Ihre Besucher eine zu alte zwischengespeicherte Version verwenden, wird empfohlen, die Namen der Dateien bei jeder neuen Version zu ändern.
> 

### Die CDN-Option für eine Website deaktivieren

Diese Aktion ermöglicht die Deaktivierung des CDN für einen oder mehrere Ihrer Multisite-Einträge, ohne die CDN-Option von Ihrem Webhosting zu entfernen.

> [!warning]
>
> Die Deaktivierung der CDN-Option für eine Website erfordert die Änderung der IP-Adresse, die für die Weiterleitung Ihres Domainnamens auf Ihr Webhosting verwendet wird.
> Diese Änderung erfolgt automatisch, wenn die aktive DNS-Zone Ihres Domainnamens auch über den [OVHcloud Account](/links/manager) verwaltet wird, der Ihr Webhosting enthält.
>
> Wenn dies nicht der Fall ist, müssen Sie die beiden folgenden Aktionen ausführen:
>
> - Ermitteln Sie mithilfe unserer Anleitung „[Webhosting: Die IP-Adressen unserer Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“ die **Standard-IP-Adresse** des Clusters ab, auf dem sich Ihr Webhosting befindet.
> - Ändern Sie die IP-Adresse in der aktiven DNS-Zone Ihres Domainnamens manuell oder wenden Sie sich an Ihren DNS-Anbieter, um das Update für Sie durchzuführen.
>
> Die Änderung eines Eintrags in der aktiven DNS-Zone eines Domainnamens führt zu einer Propagationsverzögerung von **4** bis **24** Stunden, um voll wirksam zu sein. Bis diese Propagierung abgeschlossen ist, wird möglicherweise eine Seite mit dem Code **520** angezeigt. Dies hängt damit zusammen, dass Teile des DNS-Netzwerks die Anfragen immer noch an die IP-Adresse des CDN weiterleiten, das mit Ihrem Webhosting verbunden ist.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web`{.action} und dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf dem Tab `Multisite`{.action} auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `Domain bearbeiten`{.action}.

Entfernen Sie den Haken bei "CDN aktivieren", klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/cdn-deactivation.png){.thumbnail}

### Die CDN-Option entfernen

Sie können hiermit die CDN-Option für Ihr gesamtes Webhosting kündigen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN-Option" und danach auf `CDN kündigen`{.action}.

![CDN](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/cancel-the-cdn.png){.thumbnail}

Bestätigen Sie die Kündigung, indem Sie auf `Bestätigen`{.action} klicken.

> [!warning]
>
> Sie erhalten eine E-Mail mit dem Verfahren zum Schließen Ihres CDN. Befolgen Sie die Anweisungen, um die Aktion zu bestätigen oder abzubrechen. 
> 

### Überprüfen, ob Ihr CDN in Betrieb ist

Um sicherzustellen, dass das CDN für Ihren Domainnamen aktiv ist, können Sie eine Überprüfung über ein Terminal mit dem folgenden Befehl durchführen:

```bash
curl -i http://yourpersonaldomain.ovh/
```

Wenn Ihr Domain-Name vom CDN unterstützt wird, erhalten Sie das folgende Ergebnis:

```console
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```

Die Ausgaben vom Typ "X-CDN" bestätigen, dass Ihr CDN funktioniert.

Falls der Domainname das CDN nicht verwendet, erhalten Sie das folgende Ergebnis:

```console
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

Das Fehlen von "X-CDN" zeigt an, dass der Aufruf der Domain das CDN nicht durchlaufen hat.

## Weiterführende Informationen
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
