---
title: 'Erste Konfiguration einer Domain im CDN'
slug: erste-domain-konfiguration-im-cdn
excerpt: 'Hier erfahren Sie, wie Sie eine Domain im OVH CDN konfigurieren.'
section: 'Erste Schritte'
order: 2
---

**Stand 24.04.2019**

## Einleitung

Bei der ersten Konfiguration des Content Delivery Network (CDN) müssen zunächst über das OVH Kundencenter Domains angegeben und bestimmte Einstellungen vorgenommen werden, damit das CDN optimal genutzt werden kann.

**In dieser Anleitung erfahren Sie, welche Einstellungen im Kundencenter durchzuführen sind und wie Sie das OVH CDN optimal nutzen.**


## Voraussetzungen

- Sie nutzen das [OVH Content Delivery Network (CDN)](https://www.ovh.de/cdn/){.external}.
- Sie haben Zugriff auf die Verwaltung der DNS-Zone Ihrer Domain.
- Sie haben Zugriff auf Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Beschreibung

### Domain zum CDN hinzufügen

Fügen Sie dem CDN zunächst eine Subdomain Ihrer Wahl hinzu, damit es HTTP(S)-Anfragen für diese Domain akzeptiert.

Gehen Sie dazu im [OVH Kundencenter ](https://www.ovh.com/auth/?action=gotomanager){.external} in den Bereich `Dedicated`{.action} und dann auf `NAS und CDN`{.action}.

Klicken Sie auf `Eine Domain zum CDN hinzufügen`{.action}:

![CDN Kundencenter](images/cdn_customer_panel.png){.thumbnail}

Im ersten Schritt können Sie die Subdomain auswählen, die Sie zum CDN hinzufügen möchten:

![Subdomain zum CDN hinzufügen](images/add_cdn_domain_step_1.png){.thumbnail}

Im Feld *Backend* wählen Sie entweder ein vorhandenes *Backend* aus (wenn Sie nicht zum ersten Mal eine Domain hinzufügen) oder geben die IP-Adresse eines neuen *Backends* ein:

![Backend hinzufügen](images/add_cdn_domain_step_2.png){.thumbnail}


Ihre Domain steht kurze Zeit später im Kundencenter zur Verfügung und Sie können diese konfigurieren.

Damit Ihre Anfragen korrekt über unsere CDN Infrastruktur laufen, muss die DNS-Zone der betreffenden Subdomain bearbeitet werden. Verweisen Sie hierzu einen CNAME-Eintrag auf **cdn.*ihredomain.ovh*.web.cdn.anycast.me** (ersetzen Sie „ihredomain.ovh“ mit Ihrem Domainnamen).


> [!warning]
>
> Es ist wichtig, hierzu einen CNAME-Eintrag zu verwenden. Nur mit einem CNAME-Eintrag kann die `Bypass`-Funktion korrekt funktionieren. Wenn Sie einen A-Eintrag verwenden, funktioniert zwar das CDN, aber Sie können die *Bypass*-Funktion nicht nutzen.
>


Wenn Sie die DNS-Zone Ihrer Subdomain über das Kundencenter konfigurieren, können Sie folgenden Eintrag hinzufügen (ersetzen Sie stets die Beispieldomain mit Ihrer eigenen Subdomain):

![CNAME-Eintrag](images/cname_field.png){.thumbnail}

 

### Dateiablage im Cache überprüfen
Um zu überprüfen, ob eine Datei sicher im Cache gespeichert ist, verwenden Sie folgenden Befehl:

```sh
curl -I http://sub.domain/
```

Sie erhalten ein ähnliches Ergebnis wie folgt:

```bash
HTTP/1.1 200 OK
Date: Tue, 09 Jan 2018 10:30:57 GMT
Content-Type: text/plain
Last-Modified: Fri, 29 Dec 2017 13:30:42 GMT
ETag: W/"(5a464382-4ddf"
Expires: Wed, 09 Jan 2019 10:30:58 GMT
X-IPLB-Instance: 5905
Vary: Accept-Encoding
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 51.254.41.128/26
X-Cacheable: Matched cache
Accept-Ranges: bytes
Connection: keep-alive
```

Wenn Ihre Datei korrekt aus dem Cache aufgerufen werden kann, wird Ihnen in der Ausgabe `Matched cache` angezeigt.

Außerdem wird der Präsenzpunkt (PoP) angezeigt, von dem aus Ihre Datei aufgerufen wurde (in unserem Beispiel *rbx1*).

Diese Informationen können Sie auch über Ihren Webbrowser abrufen. Gehen Sie hierzu in den Entwicklertools auf den Tab `Netzwerk` (Funktionstaste F12). Wenn Sie auf die Datei klicken, die Sie überprüfen möchten, werden Ihnen die HTTP-Antwort sowie die zugehörigen Header angezeigt.


### Gründe für die Verwendung einer spezifischen Subdomain anstelle der Hauptdomain

Für die Hauptdomain kann kein CNAME-Eintrag erstellt werden. Diese Einschränkung ist bedingt durch die RFC-Standards, die auf Ebene der DNS-Zone angewendet werden.

Zudem wird die Datei- und Rechnungsverwaltung vereinfacht, wenn Sie den Dateien, die Sie im Cache ablegen möchten, eine bestimmte Subdomain zuweisen.

- Dateiverwaltung: Nur Dateien, die über diese Subdomain aufgerufen werden, werden im Cache gespeichert. So können Sie dynamische Dateien oder solche, die Sie nicht im Cache speichern möchten, weiterhin über Ihre Hauptdomain aufrufen. Dadurch wird es auch einfacher, den Ursprung von Anzeigeproblemen auf Ihrer Website zu ermitteln.
- Rechnungsverwaltung: Der gesamte Traffic (egal ob im Cache gespeichert oder nicht), der über die CDN Infrastruktur läuft, wird Ihnen in Rechnung gestellt. Somit können Sie mithilfe einer spezifischen Subdomain die Anzahl der unnötigen Aufrufe über das CDN reduzieren und Ihren Quota-Verbrauch optimieren.


### Weitere erforderliche Aktionen zur Konfiguration einer neuen Subdomain

Wenn Sie eine neue Subdomain für die Nutzung unseres CDN einrichten möchten, müssen wahrscheinlich einige Parameter auf Ihrer Website und in Ihrem Webservice angepasst werden.

Vergewissern Sie sich zunächst, dass Ihr Webservice korrekt auf die Subdomain reagiert. Richten Sie dazu für diese Domain einen [*vhost*](https://de.wikipedia.org/wiki/Virtual_Hosting){.external} ein − entweder mit einem eigenen Zielordner oder als Alias einer anderen Domain.

Wenn die Domain korrekt in Ihrem Webservice reagiert, müssen Sie nur den HTML-Code bearbeiten, um die Quellen der Dateien zu ändern, die über das CDN geleitet werden sollen. Stellen Sie sicher, dass diese korrekt über Ihre Subdomain aufgerufen werden.

 
## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.