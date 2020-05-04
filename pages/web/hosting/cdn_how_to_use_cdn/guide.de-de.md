---
title: 'Ihre Webseiten mit CDN beschleunigen'
excerpt: 'Erfahren Sie hier, wie Sie die Ladezeiten Ihres Webhostings mit der CDN-Option verbessern'
slug: verwendung_des_geocache_boosters_auf_einem_webhosting
legacy_guide_number: g1290
section: Webhosting-Konfiguration
---

**Letzte Aktualisierung am 19.03.2020**

## Ziel

Sie können die Benutzerfreundlichkeit Ihrer Webseiten durch die Beschleunigung des Seitenaufbaus verbessern. Die effektivste Technik hierzu können Sie mit der Aktivierung eines CDN (Content Delivery Network) einsetzen. Diese Option ermöglicht das Zwischenspeichern statischer Dateien wie Bilder, CSS und Javascript auf Servern, die näher bei Ihren Besuchern liegen.

**Diese Anleitung erklärt, wie Sie die CDN-Option für Ihr Webhosting verwalten. **

## Definition

**Wie funktioniert ein CDN?**

Ein CDN (Content Delivery Network) bezeichnet buchstäblich ein Netzwerk für die Bereitstellung von Inhalten. Es werden mehrere Server weltweit bereitgestellt, um Ihre Webseiteninhalte anzuzeigen. Je näher diese Server bei Ihren Benutzern liegen, desto schneller funktioniert ihre Webseite.

Jeder Server speichert einen Teil Ihrer Webseite im Cache, um die Funktion zu gewährleisten. Im Allgemeinen ist es ratsam, so genannte statische Dateien einzubeziehen: Bilder, Javascript- und CSS-Dateien, die das ordnungsgemäße Funktionieren Ihrer Webseite ermöglichen, aber nur sehr selten geändert werden.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.

## In der praktischen Anwendung

###  Die CDN-Option aktivieren

> [!primary]
> 
> Die CDN-Option ist bereits in den Webhosting-Angeboten der Reihe „Performance“ enthalten.

####  Wenn Sie kein CDN auf Ihrem Webhosting haben

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN Option" und danach auf `CDN bestellen`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Sie werden zur Generierung des Bestellformulars weitergeleitet. Sobald die Bestellung bezahlt wurde, ist Ihre Dienstleistung innerhalb weniger Minuten verfügbar.

#### Wenn das CDN auf Ihrem Webhosting bereits aktiviert ist

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf der Registerkarte `Multisite`{.action} auf das Zahnrad rechts neben dem Multisite-Eintrag und dann auf `Ändern`{.action}.

Setzen Sie den Haken bei „CDN aktivieren“, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Wenn dem Webhosting unter `Multisite`{.action} eine externe Domain hinzugefügt wurde, müssen Sie die IP-Adresse des CDN Ihres Hostings in der DNS-Zone des Domainnamens angeben.
>
> Im [Verzeichnis von IP-Adressen für die Webhosting Cluster](../verzeichnis-der-ip-adressen-web-hosting-cluster) finden Sie die spezifische IP-Adresse des CDN Ihres Clusters.

 
**Warum kann ich mit der CDN-Option nicht von der geolokalisierten IP profitieren?**    

Das CDN basiert auf dem Prinzip der Anycast-IP. Statische Dateien werden effizienter bereitgestellt, indem nicht derselbe Server je nach Standort angefragt wird. Eine IP-Geolokalisierung ist daher nicht erforderlich.  
Bezüglich SEO (Suchmaschinenoptimierung) ist die Geschwindigkeit der Anzeige Ihrer Webseite wichtiger als die Geolokalisierung der IP-Adressen Ihres Hostings.


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



### Den CDN-Cache leeren

Es ist manchmal nützlich, den CDN-Cache zu leeren, insbesondere, wenn Sie Ihre statischen Dateien ändern. Dies ist zum Beispiel der Fall, wenn Sie eine neue Version Ihrer Webseite erstellt haben.  Sie können dann den CDN-Cache vollständig leeren.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN Option" und danach auf `Cache leeren`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Die CDN-Option deaktivieren

Diese Aktion ermöglicht die Deaktivierung des CDN für einen oder mehrere Ihrer Multisite-Einträge, ohne die CDN-Option von Ihrem Webhosting zu entfernen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus. Klicken Sie auf der Registerkarte `Multisite`{.action} auf das Zahnrad rechts neben dem Multisite-Eintrag und dann auf `Ändern`{.action}.

Entfernen Sie den Haken bei „CDN aktivieren“, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Die CDN-Option entfernen

Sie können hiermit die CDN-Option für Ihr gesamtes Webhosting kündigen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie auf `...`{.action} rechts neben "CDN Option" und danach auf `CDN kündigen`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Bestätigen Sie die Kündigung, indem Sie auf `Bestätigen`{.action} klicken.

> [!warning]
>
> Sie erhalten eine E-Mail mit dem Verfahren zum Schließen Ihres CDN. Befolgen Sie die Anweisungen, um die Aktion zu bestätigen oder abzubrechen. 
> 


### Überprüfen, ob Ihr CDN in Betrieb ist

Um sicherzustellen, dass das CDN für Ihren Domainnamen aktiv ist, können Sie eine Überprüfung über ein Terminal mit dem folgenden Befehl durchführen:

```
curl -i http://yourpersonnaldomain.ovh/
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
Die Ausgaben vom Typ „X-CDN“ bestätigen, dass Ihr CDN funktioniert.

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

Das Fehlen von „X-CDN“ zeigt an, dass der Aufruf der Domain das CDN nicht durchlaufen hat.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
