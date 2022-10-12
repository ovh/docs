---
title: Lastverteilungstyp
slug: lastverteilungstyp-lb
excerpt: Diese Anleitung beschreibt die verschiedenen Lastverteilungsmethoden des OVH Loadbalancers
section: Konfiguration
---

**Stand 22.03.2018**

## Einleitung

Der neue OVH Loadbalancer bietet Ihnen mehrere Lastverteilungstypen für Ihre Dienste. Die gewählte Methode bestimmt, wie der OVH Loadbalancer die empfangenen Anfragen auf Ihre Server aufteilt.

**Diese Anleitung gibt eine Einführung zu den verschiedenen Lastverteilungstypen und zeigt Ihnen, wie Sie diese ändern können.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.
- Sie haben eine Serverfarm erstellt.


## Beschreibung

### Die verschiedenen Lastverteilungstypen

Lastverteilung (engl. „Load Balancing“) wird in Serverfarmen verwendet. Diese Einstellung bestimmt, wie Anfragen zwischen den verschiedenen Servern einer Farm aufgeteilt werden.

Weitere Informationen zu den Grundbestandteilen des OVH Loadbalancers finden Sie in der [Einführung zum OVH Loadbalancer](https://docs.ovh.com/de/load-balancer/einfuehrung-lb/){.external}.

|Algorithmus|Funktion|
|---|---|
|First|Der erste verfügbare Server empfängt die Verbindung. Der Server wird entsprechend seiner ID ausgewählt, immer von der kleinsten zur größten.|
|LeastConn|Wählt den Server mit den wenigsten aktiven Verbindungen aus. Diese Einstellung wird für längere Sitzungen mit geringem Traffic empfohlen. Der *RoundRobin* Algorithmus wird auf Gruppen von Servern mit gleicher Anzahl an Verbindungen angewendet.|
|RoundRobin|Wählt einen Server nach dem anderen für jede Verbindung. **Dieser Algorithmus ist standardmäßig eingestellt.**|
|Source|Dieser Algorithmus wendet eine *Hashfunktion* auf die Quell-IP an und teilt anschließend das Ergebnis durch die Anzahl der aktuell aktiven Server. So wird die gleiche Quell-IP immer auf denselben Server weitergeleitet, solange dieser aktiv ist.|
|URI|Dieser Algorithmus wendet eine *Hashfunktion* auf einen Teil oder den kompletten URI an und teilt anschließend das Ergebnis durch die Anzahl der aktuell aktiven Server. So wird der gleiche URI immer auf denselben Server weitergeleitet, solange dieser aktiv ist.|


### Lastverteilungstyp einer Farm über das Kundencenter anpassen

- Im Bereich `Serverfarmen`{.action} Ihres OVH Loadbalancers werden Ihnen die aktuell eingerichteten Serverfarmen angezeigt. Um eine der Farmen zu bearbeiten, klicken Sie einfach auf die drei Punkte rechts neben der entsprechenden Farm (2) und anschließend auf `Ändern`{.action}:

![Serverfarm bearbeiten](images/server_cluster_change.png){.thumbnail}

In den `erweiterten Einstellungen`{.action} können Sie Ihren `Lastverteilungstyp`{.action} ändern:

![Serverfarm bearbeiten](images/distrib_mode_edit.png){.thumbnail}

Wenn Sie den gewünschten Lastverteilungstyp ausgewählt haben, klicken Sie auf `Update`{.action} und dann auf `Die Konfiguration anwenden`{.action} in dem angezeigten gelben Banner:

![Konfiguration anwenden](images/apply_config.png){.thumbnail}


### Lastverteilungstyp einer Farm über die API anpassen

Sie können die Einstellungen des Lastverteilungstyps anpassen, indem Sie die entsprechenden Einstellungen in den Serverfarmen vornehmen.

- Details einer Farm einsehen

Mit dieser API-Funktion können Sie sich die Details einer Farm anzeigen lassen, wenn Sie deren ID kennen. Im folgenden Beispiel werden wir eine HTTP-Farm bearbeiten:

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Einstellung|Bedeutung|
|---|---|
|ServiceName*|ID Ihres Loadbalancer Dienstes|
|farmId*|ID der Farm|

|Antwort (BackendHttp)|Bedeutung|
|---|---|
|farmId|ID der Farm|
|balance|Aktuell auf der Farm konfigurierter Lastverteilungstyp|
|zone|Name der Zone, in der die Farm konfiguriert ist|
|port|Port, der verwendet wird, um die Server zu kontaktieren|
|probe|Aktuell auf der Farm konfigurierte Monitoring-Sonde|
|displayName|Name der Farm|
|stickiness|Aktuell auf der Farm konfigurierte Verbindungsüberwachung|

- Lastverteilungstyp anpassen

Mit diesem Aufrufbefehl können Sie die Konfiguration einer Farm bearbeiten, wenn Sie deren ID kennen. Im folgenden Beispiel werden wir eine HTTP-Farm bearbeiten. Um den Lastverteilungstyp zu ändern, aktualisieren Sie das Feld `BackendHttp.balance` mit einem verfügbaren Lastverteilungstyp:

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{id}
> 

|Einstellung|Bedeutung|
|---|---|
|ServiceName*|ID Ihres Loadbalancer Dienstes|
|farmId*|ID der Farm|
|BackendHttp.balance|Der gewünschte Lastverteilungstyp für diese Farm|

- Änderungen anwenden

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Einstellung|Bedeutung|
|---|---|
|ServiceName*|ID Ihres Loadbalancer Dienstes|
|zone*|Name der Zone, in der die Konfiguration angewendet werden soll|


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
