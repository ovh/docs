---
title: 'Ihre Webseiten mit CDN beschleunigen'
excerpt: 'Erfahren Sie hier, wie Sie die Ladezeiten Ihres Webhostings mit der CDN-Option verbessern'
slug: verwendung_des_geocache_boosters_auf_einem_webhosting
section: 'Webseitenoptimierung'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 09.12.2021**

## Ziel

Sie können die Benutzererfahrung durch die Beschleunigung Ihrer Website verbessern, indem Sie die effektivste Technik, d. h. die Aktivierung eines CDN (Content Delivery Network) anwenden. Letzteres ermöglicht das Zwischenspeichern statischer Dateien wie Bilder, CSS und Javascript auf Servern, die näher bei Ihren Kunden liegen.

**Erfahren Sie, wie Sie die CDN-Option für Ihr Webhosting verwalten. **

## Definition

**Wie funktioniert ein CDN?**

Das CDN (Content Delivery Network) ist buchstäblich ein Netzwerk für die Bereitstellung von Inhalten. Es werden mehrere Server weltweit bereitgestellt, um Ihre Website anzuzeigen. Je näher diese Server bei Ihren Benutzern liegen, desto schneller funktioniert ihre Website.

Jeder Server speichert einen Teil Ihrer Website im Cache, um die Funktion zu gewährleisten. Im Allgemeinen ist es ratsam, so genannte statische Dateien einzubeziehen: Bilder, Javascript- und CSS-Dateien, die das ordnungsgemäße Funktionieren Ihrer Website ermöglichen, aber nur sehr selten geändert werden.

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}angemeldet.
- Sie verfügen über ein [OVH-Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.

## In der praktischen Anwendung

###  Die CDN Option einrichten

> [!primary]
> 
> Die CDN-Option ist bereits in den Webhosting-Angeboten von Performance enthalten.

####  Wenn die CDN Option nicht auf Ihrem Webhosting bestellt oder aktiviert wird

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie dann `Web Cloud`{.action} aus. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie das entsprechende Angebot aus. Klicken Sie auf `...`{.action}. rechts neben "CDN Option" und dann auf `CDN bestellen`{.action} oder Die `Option aktivieren`{.action}, wenn die CDN Option bereits in Ihrem Hosting enthalten ist.

> [!primary]
> 
> Wenn Sie eine CDN Option vor dem 19.11.2020 haben, können Sie das neue Shared CDN Angebot bestellen, indem Sie auf `Das CDN auf die obere Version updaten`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Sie werden zur Generierung des Bestellformulars weitergeleitet. Sobald die Bestellung bezahlt wurde, ist Ihre Dienstleistung innerhalb weniger Minuten verfügbar.

#### Wenn die CDN Option bereits für Ihr Webhosting aktiviert ist

Loggen Sie sich in Ihr  [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie dann `Web Cloud`{.action} aus. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie das entsprechende Angebot aus. Klicken Sie auf der Registerkarte `Multisite`{.action} auf das Zahnrad rechts neben dem Multisite-Eintrag und dann auf `Ändern`{.action}.

Kreuzen Sie „CDN aktivieren an“, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Liegt der Domainname, der an mehreren Standorten im Webhosting hinzugefügt wurde, außerhalb von OVHcloud, müssen Sie die IP-Adresse des CDN Ihres Hostings in der DNS-Zone des Domainnamens angeben.<br>
> In der [Liste der IP-Adressen der Cluster und Webhosting](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/){.external} finden Sie die spezifische IP-Adresse des CDN Ihres Clusters.

 
**Warum kann ich die geolokalisierte IP mit der CDN Option nicht nutzen?** <br>
<br>
Das CDN basiert auf dem Prinzip der Anycast-IP. Sie werden nicht denselben Server zu Ihrer geografischen Position abfragen, was die Ladezeit Ihrer statischen Dateien sehr effektiv verkürzt. Eine IP-Geolokalisierung ist daher nicht erforderlich. <br>
SEO (Suchmaschinen-Referenzierung): Die Geschwindigkeit der Anzeige Ihrer Website ist wichtiger als die Geolokalisierung der IP-Adresse Ihres Hostings.

### Shared CDN verwalten 

> [!primary]
> 
> Die Shared CDN Option ist bereits in den Performance Webhosting Angeboten enthalten oder seit dem 19.11.20 zur Bestellung verfügbar. Für ältere Versionen lesen Sie den Abschnitt "[CDN Business verwalten"](#cdnbusiness).

#### Den Shared CDN Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Zum Beispiel, wenn Sie eine neue Version Ihrer Website erstellen. Sie können den Cache für jeden Ihrer Multisite-Einträge leeren.

Gehen Sie auf die Registerkarte `Multisite`{.action} Ihres Webhostings, klicken Sie auf  `...`{.action} rechts neben dem Multisite-Eintrag und `danach Das CDN löschen`{.action}.

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Shared CDN Optionen konfigurieren

Gehen Sie auf die Registerkarte `Multisite`{.action} Ihres Hostings, klicken Sie auf  `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN ändern`{.action}. 

> [!warning]
> 
> Einige Optionen sind für das Basic Angebot gesperrt und erfordern die Aktivierung von [CDN](https://www.ovhcloud.com/de/web-hosting/options/cdn/) Security oder [CDN Advanced](https://www.ovhcloud.com/de/web-hosting/options/cdn/)

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Immer online**: Erlaubt die Online-Speicherung der CDN Daten im Fall eines Serverausfalls.

- **HTTP/2**: Protokoll, das die Sicherheit und Latenz Ihrer Website verbessert.

- **Dev-Mode**\: ermöglicht es Ihnen, den Cache während der Entwicklung Ihrer Website zu deaktivieren.

- **Brotli**\:  Typ der Komprimierung, um die Größe Ihrer Dateien im Cache zu optimieren.

- **Cache-Regel**: Erstellen Sie bis zu 5 Regeln. Sie definieren die Häufigkeit der Cache-Aktualisierungen für bestimmte Ressourcen Ihrer Website. ([den nächsten Schritt](#cacherules) folgen) 

Wenn Sie Ihre Optionen ausgewählt haben, klicken Sie im folgenden Fenster auf `Konfiguration anwenden`{.action} und dann auf `Konfiguration bestätigen`{.action}..

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### **Eine Cache-Regel erstellen** <a name="cacherules"></a>

Um eine Cache-Regel zu einem der Elemente Ihrer Website hinzuzufügen, gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und anschließend auf `CDN konfigurieren`{.action}.

Klicken Sie unter **Cache-Regeln** auf den Button `Regel hinzufügen`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Regelname**: Weisen Sie Ihrer Regel einen Namen zu.

- **URI**: Geben Sie die Teilmenge der Ressourcen Ihrer Website über deren Weg in die URL ein. Für die Angebote CDN-Basic und CDN-Security können nur Dateierweiterungen angegeben werden. 

- **Laufzeit**\: Geben Sie die Dauer des Caching der ausgewählten Ressource an.

- **Einstufung**:  Sortieren Sie Ihre Regeln (von der niedrigsten zur höchsten) nach Ausführungsreihenfolge.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf den Button `Regel erstellen`{.action}.

Die Regeln erscheinen in einer Liste. Sie können eine Regel ändern, indem Sie rechts auf `...`{.action}. und dann auf `Regel ändern`{.action}. oder durch Klicken auf die `Regel löschen`{.action}.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Wenn Sie Ihre Regeln konfiguriert haben und Ihre Optionen ausgewählt haben, klicken Sie auf `Konfiguration anwenden`{.action} und dann auf `Konfiguration im folgenden`{.action} Fenster bestätigen.

> [!warning]
>
> Um ein höheres Quota an Regeln und zusätzliche Einstellungen für die Erstellung von Cache-Regeln zu erhalten, können Sie sich für die [CDN Advanced Option entscheiden](https://www.ovhcloud.com/de/web-hosting/options/cdn/)

#### CDN Security Optionen konfigurieren

Gehen Sie auf die Registerkarte `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN ändern`{.action}. 

> [!primary]
>  Für die unten aufgeführten Optionen ist das [CDN security](https://www.ovhcloud.com/de/web-hosting/options/cdn/) oder [CDN Advanced erforderlich](https://www.ovhcloud.com/de/web-hosting/options/cdn/)

Gehen Sie auf die Registerkarte `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und `dann CDN ändern`{.action}. 

- **Cross-Origin Resource Sharing (CORS)**: Geben Sie in der Liste die externen Domainnamen an, die zum Teilen auf die Ressourcen Ihrer Website zugreifen dürfen. 

	Wenn die Funktion aktiviert ist, klicken Sie auf `Bearbeiten der Liste der externen Ressourcen`{.action}, um die Domainnamen hinzuzufügen, die Ihre Ressourcen teilen dürfen.

	![CDN](images/manage_CDNsecurity_01.png){.thumbnail}

	Nachdem Sie Ihre Liste ausgefüllt haben, klicken Sie auf `Bestätigen`{.action}.

> [!primary]
>
> Wenn Sie die CORS-Option aktivieren, ohne in der Liste Domainnamen anzugeben, bedeutet dies, dass alle Domainnamen die Ressourcen Ihrer Website verwenden dürfen.

- **HTTPS-redirect**: Schützen Sie den gesamten Traffic Ihrer Website, indem Sie ihn vorübergehend oder dauerhaft auf das HTTPS-Protokoll umleiten.

	Wenn die Funktion aktiviert ist, klicken Sie auf das Dropdown-Menü, um zwischen `Permanente Weiterleitung (301)` oder `Temporäre Weiterleitung (302)` zu wählen.

	![CDN](images/manage_CDNsecurity_02.png){.thumbnail}

- **HTTP Streng Transport Security (HSTS)**: Machen Sie Ihre Website nur über HTTPS zugänglich. Ihre Weblösung ist so gegen Downgrade (oder Repli-Angriffe) geschützt.

	Wenn die Funktion aktiviert ist, legen Sie die Lebensdauer fest, während der der Browser die HSTS-Funktion auf Ihrer Website anwenden wird. 

	![CDN](images/manage_CDNsecurity_03.png){.thumbnail}

> [!primary]
> 
> Wenn Sie die HSTS-Funktion auf Ihrer Website aktivieren, wird das HTTPS-Protokoll in Ihrem Browser für den Zeitraum bis zum Ende der so genannten "Höchstalter"-Periode aktiviert, auch wenn die Funktion in Ihrem Kundencenter deaktiviert wurde. Wenn der Cache jedoch im Browser geleert wird, der Ihre Website bereits besucht hat, wendet dieser den neuen Zustand der HSTS-Funktion an.

- **Mixed content**: Laden Sie den gesamten Inhalt Ihrer Webseiten auf sichere Weise auf und tragen Sie so zu einer optimalen Nutzererfahrung bei. Alle internen und externen Ressourcen Ihrer Website müssen über HTTPS verfügbar sein, um einen Sicherheitsfehler des Browsers zu vermeiden.

- **Application Firewall**: Die **W**eb **A**pplication **F**irewall (WAF) schützt Ihre Seite vor betrügerischen Angriffen wie Code-Injection, unzulässige Anfragen oder Datendiebstahl. Es deckt die wichtigsten bekannten Lücken im Web ab, indem die übertragenen Anfragen und Pakete gefiltert werden (die Liste der Sicherheitslücken wird von OVHcloud verwaltet und regelmäßig aktualisiert, um Ihren Schutz zu erweitern).  

> [!warning]
>
> Für die Installation eines [1-Klick](../modules-en-1-clic/)-Moduls von OVHcloud muss das WAF deaktiviert werden, um eine Blockierung der Installation des Moduls zu vermeiden.

> [!primary]
>  
> Das WAF wird vollständig von OVHcloud verwaltet, die Liste der Sicherheitslücken wird regelmäßig aktualisiert.

#### Konfiguration der Advanced CDN Optionen

Gehen Sie auf die Registerkarte `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN ändern`{.action}. 

> [!primary]
>
>  Die unten aufgeführten Optionen erfordern die Bestellung des [CDN Advanced](https://www.ovhcloud.com/de/web-hosting/options/cdn/)

- **HTTP Geolokalisierungs-Header**: Wählen Sie das Land des Besuchers aus, um das angebotene Experiment zu personalisieren. Der Ländercode wird automatisch im Header jeder Anfrage hinzugefügt, um von Ihrem Original-Server bearbeitet zu werden. Die Identifikationselemente im Header werden unter den Bezeichnungen `Geo-Country-Code`, `Geo-Country-Name`, `Geo-Region`, `Geo-City` angegeben.

- **Prefetch**: Planen Sie das Laden der nächsten Ressource. Laden Sie sie automatisch im CDN Cache durch den *header link* Ihrer Website ein. Dieser Mechanismus wird hauptsächlich verwendet, um die CSS, JavaScript, Images, Favicons oder Webpolicen, die das Thema der Website erfordert, zu laden. 

	Im folgenden Beispiel wird, wenn Sie auf der aktuellen Seite "Hello"stehen, eine Subanfrage das Vorladen der Ressource /cache/style.css `auslösen`.  

	```	
	<?php
	header("Link: </cache/style.css>; rel=prefetch");
	print 'Hello'
	?> 
	```

- **Mobilfunk**:  Leiten Sie die Besucher "Mobil" automatisch auf eine optimierte Website um. Wahlweise: systematisch auf die Wurzel einer anderen Website umleiten oder die URL beibehalten, indem nur die Domain (oder die Subdomain) ersetzt wird.

- **Advanced Purge**: Personalisieren Sie Ihr Purge, indem Sie die zu ledenden Elemente des Caches auswählen: die gesamte Webseite, ein Ordner, ein URI, eine Dateierweiterung oder einen regelmäßigen personalisierten Ausdruck. 

	Klicken Sie im Tab Multisite auf den Button `...`{.action}. rechts neben dem Multisite-Eintrag und dann auf `Das CDN löschen`{.action}. 

	![CDN](images/manage_CDNadvanced_01.png){.thumbnail}

- **Query String**: Verwaltung des Caching von Inhalten basierend auf den Einstellungen (auch *Query String* genannt) der URL Anfrage. Wählen Sie abhängig von Ihrer Konfiguration das Verhalten des CDN Caches aus:
	- *Deaktiviert*: Die Ressource wird mit ihren unsortierten Einstellungen in den Cache gelegt. Dies führt zum Beispiel zu 2 Iterationen im CDN Cache für 2 URLs mit den gleichen Einstellungen in einer anderen Reihenfolge.
	- *Aktiviert - Einstellungen sortieren*: Die Ressource wird durch Sortieren ihrer Einstellungen in den Cache gelegt. Es wird sortiert, bevor die URL im CDN Cache gespeichert wird. So wird zum Beispiel nur eine Iteration für 2 URL mit den gleichen Einstellungen in einer anderen Reihenfolge gespeichert.
	- *Aktiviert - Die Einstellungen ignorieren*: Die Ressource wird ohne Parameter gecached. Der CDN Cache berücksichtigt die in der URL eingegebenen Einstellungen nicht, er speichert die URL also ohne die Einstellungen im Cache.

- **Prewarm**: Zwingen Sie das permanente Caching Ihrer wichtigsten Ressourcen. Das CDN antizipiert und aktualisiert den Cache automatisch, ohne dass vom Benutzer eine Anfrage angefordert wird. Diese Funktion gilt nur für statischen Inhalt mit einer TTL über 0 und einer Ressource von höchstens 1 GB. Ein Messgerät gibt den Ressourcenverbrauch in *Prewarm* an, abhängig von der Liste Ihrer URLs. Der Gesamtumfang der von diesen URLs aufgerufenen Ressourcen darf 1 GB nicht überschreiten.

	Um die Liste der URLs zu definieren, die in *Prewarm* enthalten sein müssen, klicken Sie auf `Die Liste der URLs bearbeiten`{.action}.

	Geben Sie mithilfe der Felder `Protokoll`, `Domainname` und `Pfad der Ressource` eine der Links zu einer Ressource ein, die Sie zur **Prewarm**-Funktion hinzufügen möchten, und klicken Sie dann auf  `Hinzufügen`{.action}.

	Im unteren Rahmen bildet sich eine Liste mit allen Links, die Sie aufgelistet haben. Sie können die Links Ihrer Wahl löschen, indem Sie diese auswählen, und dann auf `Entfernen klicken`{.action}.

	![CDN](images/manage_CDNadvanced_02.png){.thumbnail}

- **Cache rule**: Erstellen Sie bis zu 100 Regeln. Sie definieren die Häufigkeit der Cache-Aktualisierungen für bestimmte Ressourcen Ihrer Website. Weitere Informationen finden Sie im [nächsten](#cacherulesadv) Schritt.

Wenn Sie Ihre Optionen ausgewählt haben, klicken Sie auf `Konfiguration anwenden`{.action} und dann auf `Konfiguration`{.action} im folgenden Fenster bestätigen.

##### **Eine erweiterte Cache-Regel erstellen** <a name="cacherulesadv"></a>

Um eine Cache-Regel zu einem der Elemente Ihrer Website hinzuzufügen, gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und anschließend auf `CDN konfigurieren`{.action}.

Klicken Sie unter **Cache-Regeln** auf den Button `Regel hinzufügen`{.action}.

![CDN](images/manage_CDNadvanced_03.png){.thumbnail}
- **Regelname**: Weisen Sie Ihrer Regel einen Namen zu.
- **Ressourcenart**: Wählen Sie aus den folgenden Optionen:
	- **Endung**: Bitte geben Sie eine gültige Dateiendung an, ohne einen Fokus zu erstellen, zum Beispiel: CSS
	- **Ordner**:  Bitte geben Sie einen gültigen Pfad für eines der Ordner im Wurzelverzeichnis Ihrer Website an.
	- **Regelmäßiger personalisierter Ausdruck**: Sie gilt für alle URIs Ihrer Website.
	- **URI**: Geben Sie die Teilmenge der Ressourcen Ihrer Website über deren Weg in die URL ein.
- **Ressource**\: Definieren Sie die Attribute abhängig vom gewählten Ressourcentyp.
- **Laufzeit**: Geben Sie die Cache-Dauer der ausgewählten Ressource an.
- **Klassifizierung**:  Sortieren Sie Ihre Regeln (von der niedrigsten zur höchsten) nach Ausführungsreihenfolge.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf den Button `Regel erstellen`{.action}.

Die Regeln erscheinen in einer Liste. Sie können eine Regel ändern, indem Sie auf `...`{.action} rechts von dieser und dann auf `Die Regel ändern`{.action}. Sie können die Regel löschen, indem Sie auf `Die Regel löschen klicken`{.action}.

![CDN](images/manage_CDNadvanced_04.png){.thumbnail}

Wenn Sie Ihre Regeln konfiguriert haben und Ihre Optionen ausgewählt haben, klicken Sie auf `Konfiguration anwenden`{.action} und dann auf `Konfiguration im folgenden`{.action} Fenster bestätigen.

### Die CDN Statistiken anzeigen

Im Tab `Multisites`{.action} Ihres Webhostings können Sie unter der Tabelle die Statistiken Ihres CDN einsehen, die die Anzahl der gemessenen Anfragen pro Minute anzeigen.

![CDN](images/manage_CDNstat_01.png){.thumbnail}

### Ihr CDN Business verwalten <a name="cdnbusiness"></a>

> [!primary]
> 
> Die CDN Option ist bereits in den Performance Webhosting Angeboten oder den vor dem 19.11.2020 bestellten Angeboten enthalten.

#### Den CDN-Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Zum Beispiel, wenn Sie eine neue Version Ihrer Website erstellen. In diesem Fall können Sie den CDN-Cache vollständig leeren.

Loggen Sie sich in Ihr  [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie dann `Web Cloud`{.action} aus. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie das entsprechende Angebot aus. Klicken Sie auf `...`{.action} rechts neben "CDN Option" und danach auf  `Den Cache leeren`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Wie kann ich meine Dateien im CDN zwischenspeichern?

**Verwendung eines CMS**

Die wichtigsten CMS bieten zahlreiche Plugins, die es erlauben, das Caching statischer Dateien so zu konfigurieren, dass diese automatisch vom CDN berücksichtigt werden. Andere ermöglichen die automatische Konfiguration statischer Dateien durch Aktivierung des im CMS integrierten Caching. Weitere Informationen finden Sie in der offiziellen Dokumentation des von Ihnen verwendeten CMS oder des Plugin-Editors.

**Ohne Verwendung eines CMS**

Sie können auch dann vom CDN-Cache profitieren, wenn Sie kein CMS verwenden. Hierzu müssen Sie bei HTTP-Anforderungen Header hinzufügen. Es gibt verschiedene Methoden zum Hinzufügen dieser Header. Eine der einfachsten ist, Regeln in einer .htaccess-Datei zu definieren, abhängig von den Dateierweiterungen.

```htaccess
1. # Bilder 1 Woche lang ausblenden
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header-Set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Cache von Javascript und CSS für 1 Monat
7. <FilesMatch "\.(js|css)$">
8. Header-Set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> Das Zwischenspeichern über HTTP-Header ermöglicht das Zwischenspeichern innerhalb des CDN, aber auch innerhalb des Browsers Ihrer Benutzer. Um zu verhindern, dass Ihre Besucher eine zu alte zwischengespeicherte Version anzeigen, wird empfohlen, die Namen der Dateien bei jeder neuen Version zu ändern.
> 

### Die CDN Option für eine Website deaktivieren

Mit dieser Aktion kann das CDN für einen oder mehrere Ihrer Multisite-Einträge deaktiviert werden, ohne die CDN-Option aus Ihrem Webhosting zu entfernen.

Begeben Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und wählen Sie dann `Web Cloud`{.action} aus. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie das entsprechende Angebot aus. Klicken Sie im Tab `Multisite`{.action} auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `Ändern`{.action}.

Entfernen Sie das Kreuz auf „CDN aktivieren“, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Die CDN Option auf Ihrem Hosting löschen

Der Zweck dieser Aktion besteht darin, die CDN-Option für Ihr gesamtes Webhosting zu entfernen.

Begeben Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und wählen Sie dann `Web Cloud`{.action} aus. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie das entsprechende Angebot aus. Klicken Sie auf `...`{.action} rechts neben "CDN Option" und danach auf  `Das CDN kündigen`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Bestätigen Sie die Kündigung, indem Sie auf `Bestätigen`{.action} klicken.

> [!warning]
>
> Sie erhalten eine E-Mail mit dem Verfahren zum Schließen Ihres CDN. Befolgen Sie die Anweisungen, um die Anforderung zu bestätigen oder abzubrechen. 
> 


### Überprüfen, ob Ihr CDN in Betrieb ist

Um sicherzustellen, dass das CDN in Ihrem Domainnamen aktiv ist, können Sie eine Überprüfung über ein Terminal mit dem folgenden Befehl durchführen:

```
curl -i http://yourpersonnaldomain.ovh/
```

Wenn Ihr Domain-Name vom CDN gut unterstützt wird, erhalten Sie das folgende Ergebnis:

```
HTTP/1.1 200 OK
Datum: Mo, 01. Januar 2020 00:00:00 GMT
Inhaltstyp: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instanz: 12345
```

Die Hinweise „*X-CDN*“ bestätigen, dass Sie das CDN reibungslos durchlaufen.

Falls der Domainname das CDN nicht durchläuft, erhalten Sie das folgende Ergebnis:

```
HTTP/1.1 200 OK
Datum: Mo, 01. Januar 2020 00:00:00 GMT
Inhaltstyp: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instanz: 12345
```

Das Fehlen des Hinweises „*X-CDN*“ zeigt an, dass Sie das CDN nicht durchlaufen.

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
