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

**Letzte Aktualisierung am 19.11.2020**

## Ziel

Sie können die Benutzerfreundlichkeit Ihrer Webseiten durch die Beschleunigung des Seitenaufbaus verbessern. Die effektivste Technik hierzu können Sie mit der Aktivierung eines CDN (Content Delivery Network) einsetzen. Diese Option ermöglicht das Zwischenspeichern statischer Dateien wie Bilder, CSS und Javascript auf Servern, die näher bei Ihren Besuchern liegen.

**Diese Anleitung erklärt, wie Sie die CDN-Option für Ihr Webhosting verwalten.**

## Definition

**Wie funktioniert ein CDN?**

Ein CDN (Content Delivery Network) bezeichnet ein Netzwerk für die Bereitstellung von Inhalten. Es werden mehrere Server weltweit bereitgestellt, um Ihre Webseiteninhalte anzuzeigen. Je näher diese Server bei Ihren Benutzern liegen, desto schneller funktioniert ihre Webseite.

Jeder Server speichert einen Teil Ihrer Webseite im Cache, um die Funktion zu gewährleisten. Im Allgemeinen ist es ratsam, so genannte statische Dateien einzubeziehen: Bilder, Javascript- und CSS-Dateien, die das ordnungsgemäße Funktionieren Ihrer Webseite ermöglichen, aber nur sehr selten geändert werden.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.

## In der praktischen Anwendung

###  Die CDN-Option aktivieren

> [!primary]
> 
> Die CDN-Option ist bereits in den Webhosting-Angeboten der Reihe "Performance" enthalten.

#### Wenn die CDN-Option nicht auf Ihrem Webhosting bestellt oder aktiviert wurde

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web Cloud`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN-Option" danach auf `CDN bestellen`{.action} oder `Option aktivieren`{.action}, wenn die CDN-Option bereits in Ihrem Hosting enthalten ist.

> [!primary]
> 
> Wenn Sie eine CDN-Option von vor dem 19.11.2020 haben, können Sie das neue "Shared CDN" Angebot bestellen, indem Sie auf `CDN auf die neue Version updaten`{.action} klicken.

![CDN](images/manage_CDN_01.png){.thumbnail}

Sie werden zum Bestellformular weitergeleitet. Sobald die Bestellung bezahlt wurde, ist Ihre Dienstleistung innerhalb weniger Minuten verfügbar.

#### Wenn die CDN-Option bereits für Ihr Webhosting aktiviert ist

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf dem Tab `Multisite`{.action} auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `Domain bearbeiten`{.action}.

Haken Sie "CDN aktivieren" an, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Wenn dem Webhosting unter `Multisite`{.action} eine externe Domain hinzugefügt wurde, müssen Sie die IP-Adresse des CDN Ihres Hostings in der DNS-Zone des Domainnamens angeben.
>
> Im [Verzeichnis von IP-Adressen für die Webhosting Cluster](../verzeichnis-der-ip-adressen-web-hosting-cluster) finden Sie die spezifische IP-Adresse des CDN Ihres Clusters.
 
**Warum kann ich mit der CDN-Option nicht von der geolokalisierten IP profitieren?**    

Das CDN basiert auf dem Prinzip der Anycast-IP. Statische Dateien werden effizienter bereitgestellt, indem nicht derselbe Server je nach Standort angefragt wird. Eine IP-Geolokalisierung ist daher nicht erforderlich.  
Bezüglich SEO (Suchmaschinenoptimierung) ist die Geschwindigkeit der Anzeige Ihrer Webseite wichtiger als die Geolokalisierung der IP-Adressen Ihres Hostings.

### Shared CDN verwalten 

> [!primary]
> 
> Die Shared CDN-Option ist bereits in den Webhosting-Angeboten der Reihe "Performance" enthalten und seit dem 19.11.20 zur Bestellung verfügbar. Für ältere Versionen lesen Sie den Abschnitt "[CDN verwalten (Legacy)](./#cdn-verwalten-legacy_2)".

#### Den Shared CDN-Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Dies ist zum Beispiel der Fall, wenn Sie eine neue Version Ihrer Webseite erstellt haben. Sie können dann den CDN-Cache für jeden Ihrer Multisite-Einträge leeren.

Gehen Sie zum Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN leeren`{.action}. 

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Shared CDN-Optionen konfigurieren

Gehen Sie zum Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `CDN bearbeiten`{.action}.

> [!warning]
> 
> Einige Optionen sind für das Hosting-Angebot "Basic" nicht verfügbar.

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Immer online**: Erlaubt die Online-Speicherung der CDN Daten im Fall eines Serverausfalls.

- **HTTP/2**: Protokoll, das die Sicherheit und Latenz Ihrer Webseite verbessert.

- **Dev-Mode**: Ermöglicht es Ihnen, den Cache während der Entwicklung Ihrer Webseite zu deaktivieren.

- **Brotli**: Typ der Komprimierung, um die Größe Ihrer Dateien im Cache zu optimieren.

- **Cache-Regel**: Erstellen Sie bis zu 5 Regeln. Sie definieren die Häufigkeit der Cache-Aktualisierungen für bestimmte Ressourcen Ihrer Webseite ([siehe nächster Schritt](./#eine-cache-regel-erstellen).)

Wenn Sie Ihre Optionen ausgewählt haben, klicken Sie auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### Eine Cache-Regel erstellen

Um eine Cache-Regel zu einem der Elemente Ihrer Seite hinzuzufügen, gehen Sie auf den Tab `Multisite`{.action} Ihres Hostings, klicken Sie auf `...`{.action} rechts neben dem Multisite-Eintrag und anschließend auf `CDN konfigurieren`{.action}.

Klicken Sie unter **Cache-Regeln** auf den Button `Regel hinzufügen`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Regelname**: Weisen Sie Ihrer Regel einen Namen zu.

- **URI**: Geben Sie die entsprechenden Ressourcen Ihrer Webseite über den Verzeichnispfad an. Für das CDN Angebot "Basic" können Sie nur eine Dateierweiterung angeben.

- **Laufzeit**: Geben Sie die Lebensdauer der Regel für die gewählte Ressource an.

- **Einstufung**: Sortieren Sie Ihre Regeln nach Ausführungsordnung (von der niedrigsten zur höchsten).

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf den Button `Regel erstellen`{.action}.

Die Regeln erscheinen in der Liste. Sie können sie ändern, indem Sie auf `...`{.action} rechts neben der Regel klicken und dann auf `Regel ändern`{.action} oder eine Regel löschen, indem Sie auf `Regel löschen`{.action} auswählen.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Klicken Sie nach der Konfiguration Ihrer Regeln und Optionen auf `Konfiguration anwenden`{.action} und dann auf `Bestätigen`{.action}.

### CDN verwalten (Legacy)

> [!primary]
> 
> Die CDN-Option ist bereits in den Webhosting-Angeboten der Reihe „Performance“ oder in vor dem 19.11.20 bestellten Angeboten enthalten.

#### Den CDN-Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Dies ist zum Beispiel der Fall, wenn Sie eine neue Version Ihrer Webseite erstellt haben.  Sie können dann den CDN-Cache vollständig leeren.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web Cloud`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN-Option" und danach auf `Cache leeren`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Wie kann ich meine Dateien im CDN zwischenspeichern?

**Verwendung eines CMS**

Die wichtigsten CMS erlauben die Installation zahlreicher Plugins, mit denen das Caching statischer Dateien so konfiguriert werden kann, dass sie vom CDN automatisch berücksichtigt werden. Andere ermöglichen die automatische Konfiguration statischer Dateien durch Aktivierung des im CMS integrierten Caching. Weitere Informationen finden Sie in der offiziellen Dokumentation des von Ihnen verwendeten CMS oder des Plugin-Editors.

**Ohne Verwendung eines CMS**

Sie können auch dann vom CDN-Cache profitieren, wenn Sie kein CMS verwenden. Hierzu müssen Sie bei HTTP-Anfragen Header hinzufügen. Es gibt verschiedene Methoden zum Hinzufügen dieser Header. Am einfachsten definieren Sie Regeln in einer *.htaccess* Datei basierend auf Dateierweiterungen.

```
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

### Die CDN-Option deaktivieren

Diese Aktion ermöglicht die Deaktivierung des CDN für einen oder mehrere Ihrer Multisite-Einträge, ohne die CDN-Option von Ihrem Webhosting zu entfernen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf dem Tab `Multisite`{.action} auf `...`{.action} rechts neben dem Multisite-Eintrag und dann auf `Domain bearbeiten`{.action}.

Entfernen Sie den Haken bei "CDN aktivieren", klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Die CDN-Option entfernen

Sie können hiermit die CDN-Option für Ihr gesamtes Webhosting kündigen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web Cloud`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN-Option" und danach auf `CDN kündigen`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Bestätigen Sie die Kündigung, indem Sie auf `Bestätigen`{.action} klicken.

> [!warning]
>
> Sie erhalten eine E-Mail mit dem Verfahren zum Schließen Ihres CDN. Befolgen Sie die Anweisungen, um die Aktion zu bestätigen oder abzubrechen. 
> 


### Überprüfen, ob Ihr CDN in Betrieb ist

Um sicherzustellen, dass das CDN für Ihren Domainnamen aktiv ist, können Sie eine Überprüfung über ein Terminal mit dem folgenden Befehl durchführen:

```
curl -i http://yourpersonaldomain.ovh/
```

Wenn Ihr Domain-Name vom CDN unterstützt wird, erhalten Sie das folgende Ergebnis:

```sh
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

```sh
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

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
