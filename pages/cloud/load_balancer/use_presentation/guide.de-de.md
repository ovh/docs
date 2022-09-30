---
title: Einführung zum OVH Loadbalancer 
slug: einfuehrung-lb 
excerpt: In dieser Anleitung erhalten Sie einen ersten Überblick über die neue OVH Loadbalancer Lösung 
section: Erste Schritte 
order: 1
---

**Stand 22.03.2018**

## Einleitung

Unser neues **OVH Loadbalancer** Angebot dient der Lastverteilung (engl. Load Balancing) und verbindet eine einfache Konfiguration mit maximaler Zuverlässigkeit. Konfigurieren Sie einfach Ihre Produkte mit dem OVH Loadbalancer. Wir kümmern uns um den Rest.

**Erfahren Sie jetzt alles Wichtige zum neuen OVH Loadbalancer Angebot.**

## Voraussetzungen

- Keine spezifischen Voraussetzungen


## Beschreibung

 
Dieses neue Angebot basiert auf bewährten Open-Source-Lösungen: HAProxy für TCP-Traffic und Nginx für UDP-Traffic.

Der OVH Loadbalancer bietet Ihnen Lastverteilung ohne Limits und funktioniert problemlos mit verschiedenen Protokollen: 

|Typ|Beschreibung|Vorteile|Technologie| 
|---|---|---|---| 
|HTTP|Für alle Webservices mit HTTP/HTTPS|Optimiert für L7-Verarbeitung (Anwendungsebene)|HAProxy| 
|TCP|Für alle Netzwerkdienste, die kein HTTP verwenden|Unterstützt alle TCP-Anwendungen|HAProxy| 
|UDP|Für alle Arten von UDP-Traffic|Unterstützt alle UDP-Anwendungen|Nginx|

Folgende Leistungen sind bei dem neuen Dienst inklusive:

 - OVH DDoS-Schutz
 - Unterstützung verschiedener geografischer Zonen (Anycast)
 - erweiterte HTTP/HTTPS-Funktionen (Weiterleitungen, Header, ACL, …)
 - kompatibel mit Additional IP
 - vRack Unterstützung
 - Redundanz: Ihr OVH Loadbalancer läuft auf isolierten Instanzen, die ihrerseits auf komplett getrennter und redundanter Hardware laufen

### Grundbestandteile

- Das neue OVH Loadbalancer Angebot besteht aus drei wesentlichen Komponenten:

![Allgemein](images/diag_gen.png){.thumbnail}

|Komponente|Funktion| 
|---|---| 
|Frontend|Das Frontend bestimmt den Protokolltyp (HTTP/TCP/UDP) des OVH Loadbalancers. Außerdem enthält es den Listening-Port des Dienstes.| 
|Farm|Die Farm empfängt den Traffic des Frontends und ist zuständig für die eigentliche Lastverteilung| 
|Server|Die Server erhalten den verteilten Traffic und antworten über die Applikation|

Mit diesen drei Grundbestandteilen, die gemeinsam den Loadbalancer bilden, können fast alle möglichen Loadbalancing-Methoden konfiguriert werden.


### Was spricht für die Verwendung des OVH Loadbalancers?

#### Traffic-Last verteilen

Dies ist die zentrale Funktion eines jeden Lastverteilers, der OVH Loadbalancer kann jedoch viel mehr.

![Traffic-Last verteilen](images/distribute_load.png){.thumbnail}

#### Downtime verhindern

Der OVH Loadbalancer erkennt automatisch, wenn ein Server nicht antwortet. In diesem Fall leitet er wenn möglich den für den betroffenen Server bestimmten Traffic auf einen anderen Server weiter. So wird das Problem behoben, ohne Ihre Webdienste zu beeinträchtigen.

![Downtimes verhindern](images/eliminate_downtimes.png){.thumbnail}

#### Ihre Infrastruktur nach Bedarf skalieren

Sie können jederzeit und ohne Dienstunterbrechung Farmen, Frontends oder Server zu Ihrem OVH Loadbalancer hinzufügen oder entfernen.

![Ihre Infrastruktur flexibel skalieren](images/facilitate_maintenance.png){.thumbnail}


#### Wartungen vereinfachen

Für geplante Wartungen Ihrer Infrastruktur können Sie eine Farm ganz einfach in Downtime setzen, damit sie vorübergehend keinen Datenverkehr mehr empfängt. So können Sie leicht eingreifen und Ihren Server wieder hinzufügen, sobald die Wartung abgeschlossen ist.

![Wartungen vereinfachen](images/scale_easily.png){.thumbnail}


#### Dienste kombinieren

Sie können verschiedene OVH Dienstleistungen im Loadbalancer kombinieren, zum Beispiel:

- Public Cloud Instanzen mit Additional IP
- VPS mit Additional IP
- Dedicated Server mit Additional IP
- vRack

![Dienste kombinieren](images/mix_and_match.png){.thumbnail}

#### Anycast

Sie können die Last auf verschiedene geografische Zonen verteilen:

![Anycast](images/anycast.png){.thumbnail}


#### Jede Art von Traffic verteilen

Der OVH Loadbalancer ist nicht länger auf HTTP-Traffic begrenzt. Sie können ihn auch für alle Arten von TCP- oder UDP-Traffic verwenden.


#### E-Mail-Server

Verteilen Sie die Last zwischen Ihren E-Mail-Servern:

![E-Mail](images/mail.png){.thumbnail}


#### Datenbanken

Sorgen Sie für gleichmäßige Verteilung und Redundanz Ihrer Datenbanken:

![Database](images/database.png){.thumbnail}


## Weiterführende Informationen

[Mehr zum Thema Lastverteilung](http://ovh.to/PhFmeK8){.external}.

[Mehr zum Thema HAProxy](http://www.haproxy.org/#desc){.external}.

[Mehr zum Thema Nginx](https://de.wikipedia.org/wiki/Nginx){.external}.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.