---
title: "Konfiguration von HTTP/2 auf dem OVHcloud Load Balancer"
excerpt: "Erfahren Sie, wie Sie die Frontends Ihres OVHcloud Load Balancers für die Verwendung mit dem HTTP/2-Protokoll auswählen und konfigurieren können"
updated: 2026-01-15
---

> [!primary]
> **Hinweis zur nativen Unterstützung von HTTP/2**
>
> Seit Juni 2025 unterstützen HTTP- und TLS-Frontends, die von den OVHcloud Load Balancer Diensten verwendet werden, das HTTP/2-Protokoll nativ.
>
> Diese Anleitung bleibt jedoch für TCP-Frontends anwendbar, die in Anwendungen mit hoher Leistung und geringer Latenz nützlich sein können.
>
> Um HTTP/2 auf bestehenden HTTP- und TLS-Frontends zu aktivieren, müssen Sie folgende Aktualisierungsanfrage über die API durchführen, wobei **{serviceName}** der interne Name Ihres Load Balancers ist.
>

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

## Ziel

Diese Anleitung hat zwei Hauptziele:

- Die Unterschiede zwischen TCP-, HTTP- und TLS-Frontends auf einem OVHcloud Load Balancer verstehen, sodass Sie beurteilen können, ob ein TCP-Frontend die beste Wahl für Ihre spezifischen Anforderungen ist, insbesondere wenn es um HTTP/2-Datenverkehr geht.
- Falls ein TCP-Frontend wünschenswert erscheint, finden Sie Schritt-für-Schritt-Anweisungen, wie Sie es konfigurieren können, um HTTP/2-Datenverkehr effektiv auf Ihre Back-End-Server zu verteilen.

## Voraussetzungen

- Sie haben einen [OVHcloud Load Balancer](/links/network/load-balancer).
- Sie haben ein TCP-Frontend auf Ihrem Load Balancer.
- Sie haben ein TCP-Back-End-Cluster mit mindestens einem Server.
- Sie haben die Back-End-Server konfiguriert, um HTTP/2 zu unterstützen.
- Sie haben Zugriff auf die [OVHcloud API](/links/api).

## In der praktischen Anwendung

### Warum HTTP/2 verwenden?

HTTP/2 bietet zahlreiche Vorteile, um die Leistung und Effizienz Ihrer Anwendungen zu verbessern:

- *Schnellere Ladezeiten* durch Multiplexing, das es ermöglicht, mehrere Anfragen parallel über dieselbe Verbindung zu senden.
- *Geringere Latenz* durch Begrenzung der Kommunikation zwischen Client und Server.
- *Optimierte Netzwerkperformance* durch Header-Komprimierung.

### Unterschiede zwischen HTTP/2 und TCP-Frontends

Ein TCP-Frontend arbeitet auf Layer 4 (Transportebene) des OSI-Modells. Wenn Sie ein TCP-Frontend konfigurieren, stellt der Load Balancer eine TCP-Verbindung zwischen dem Client und einem Back-End-Server her. Das bedeutet, dass der Load Balancer die HTTP/2-Daten innerhalb des TCP-Streams nicht analysiert oder versteht. Daher bieten TCP-Frontends aufgrund der geringen Verarbeitungsanforderungen eine hohe Leistung.

Da jedoch das Anwendungsprotokoll nicht verstanden wird, können keine fortgeschrittenen HTTP-spezifischen Optimierungen durchgeführt werden, wie z. B. inhaltsbasierte Weiterleitung oder Manipulation von HTTP-Headern.

HTTP- und TLS-Frontends hingegen arbeiten auf Layer 7 (Anwendungsebene). Wenn ein Client eine mit HTTP/2 kompatible Frontend verbindet, decodiert der Load Balancer die HTTP/2-Frames vollständig, bevor eine Verbindung zu einem Back-End-Server hergestellt wird.

Durch das Verständnis des Anwendungsprotokolls kann ein mit HTTP/2 kompatibles Frontend zahlreiche fortgeschrittene Funktionen bieten. Dazu gehören SSL/TLS-Terminierung (Entlastung der Back-End-Server von Verschlüsselungs-/Entschlüsselungsvorgängen), inhaltsbasierte Weiterleitung (z. B. Weiterleitung von Anfragen an verschiedene Back-End-Pools basierend auf URL-Pfad oder Headern), Anpassung von Anfragen/Antworten und HTTP/2-Multiplexing.

**Sie sollten ein TCP-Frontend verwenden, wenn:**

- Sie andere nicht-HTTP-Dienste auslasten müssen (z. B. Datenbanken, benutzerdefinierte TCP-Anwendungen, SSH).
- Sie maximale Leistung und minimale Latenz benötigen.
- Ihre Back-End-Server bereits die SSL/TLS-Terminierung übernehmen.
- Sie keine fortgeschrittenen HTTP-spezifischen Funktionen benötigen, wie z. B. inhaltsbasierte Weiterleitung, Manipulation von HTTP-Headern oder HTTP/2-Protokoll-Optimierungen.

**Sie sollten ein mit HTTP/2 kompatibles Frontend verwenden, wenn:**

- Sie hauptsächlich Webverkehr (HTTP/HTTPS) auslasten
- Sie die Leistungsverbesserungen von HTTP/2 zwischen Client und Load Balancer nutzen möchten.
- Sie die SSL/TLS-Terminierung von Ihren Back-End-Servern abladen möchten.
- Sie eine fortgeschrittene Weiterleitungslogik basierend auf HTTP-Headern, URLs oder anderen Anwendungsebenen-Attributen benötigen.
- Sie die Client-Erfahrung durch die Nutzung von HTTP/2-Funktionen optimieren möchten.

*Falls Sie sich für die Verwendung eines TCP-Frontends entscheiden, folgen Sie den nächsten Schritten dieser Anleitung, um es für die Verwendung mit HTTP/2 zu konfigurieren*.

### Konfigurieren des TCP-Frontend für die Verwendung mit HTTP/2

> [!warning]
>
> Es ist wichtig, dass die verschiedenen Elemente in der richtigen Reihenfolge angelegt werden: Die Routen werden zuerst konfiguriert, damit ihnen anschließend Regeln hinzugefügt werden können.
> 

#### Eine Route hinzufügen

Im Folgenden werden wir eine Route zu unserer Dienstleistung hinzufügen.

##### Über die API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
> 

> [!warning]
>
> Der Parameter `weight` erlaubt Ihnen, die Bewertungsreihenfolge Ihrer Routen zu definieren. Die erste, die validiert wird, wird ausgeführt.
> 

Parameter:

|Feld|Wert und Beschreibung|
|---|---|
|serviceName|Kennzeichner Ihres OVHcloud Load Balancers|
|frontendId|Kennzeichner Ihres TCP-Frontend-Ports 443|
|displayName|"HTTP2 TCP route"|
|weight|(leer)|
|action.type|"farm"|
|action.target|Kennzeichner Ihrer TCP-Farm, die HTTP/2 verarbeiten kann|

#### Eine Regel hinzufügen

Wir werden nun eine Regel zu unserer Route hinzufügen.

##### Über die API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
> 

Parameter:

|Feld|Wert und Beschreibung|
|---|---|
|serviceName|Kennzeichner Ihres OVHcloud Load Balancers|
|routeId|Kennzeichner der zuvor erstellten Route|
|field|"protocol" Der Name des Feldes, das von der Regel überprüft werden muss|
|match|"is" Der Typ der Überprüfung, die durchgeführt werden muss|
|pattern|"http/2.0" Der Wert, der für das angegebene Feld überprüft werden muss|

#### Änderungen anwenden

Die vorgenommenen Änderungen müssen in jeder für Ihren Dienst konfigurierten Zone *explizit angewendet* werden. Erst dann werden sie für Ihre Besucher sichtbar. So können Sie auch komplexere Konfigurationsänderungen in einem Mal durchführen.

Falls Sie mehrere Zonen haben, ist die gleiche Konfiguration für jede einzeln vorzunehmen.

##### Über die API

Aktualisieren einer Zone:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

Parameter:

|Feld|Wert und Beschreibung|
|---|---|
|serviceName|Kennzeichner Ihres OVHcloud Load Balancers|
|zone|Kennzeichner der Zone, auf die Sie Ihre Konfiguration anwenden möchten|

### Bestätigen

Nachdem Sie die oben stehenden Schritte durchgeführt haben, verfügen Sie über einen funktionsbereiten Load Balancer für Ihre HTTP/2-Server. Sie können jetzt den Status des Dienstes kontrollieren, indem Sie eine Anfrage an Ihren OVHcloud Load Balancer senden und die Antwort überprüfen:

```bash
curl -I --http2 https://www.ovh.de/
HTTP/2 200
```

## Weiterführende Informationen

Wenn Sie weitere Informationen zum HTTP/2-Protokoll wünschen, besuchen Sie <https://http2.github.io/>.

Treten Sie unserer [User Community](/links/community) bei.