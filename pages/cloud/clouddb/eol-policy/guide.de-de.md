---
title: Policy for end of life in managed database
slug: managed-db-life-cycle-policy
section: 'Technische Ressourcen'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 07.01.2022**

## Ziel

OVHcloud gemanagte Datenbanken bieten mehrere Datenbankmanagementsysteme (DBMS) wie MySQL oder PostgreSQL an. Jede Version dieser Software erreicht irgendwann das Ende des Verkaufs und dann das Ende des Supports. Sie kann dann von unseren Diensten aktualisiert oder eingestellt werden ("Lebensende"). Wir möchten Ihnen dabei helfen, den Lebenszyklus der von OVHcloud verwalteten Datenbanken zu verstehen, um deren Weiterentwicklung besser vorherzusehen und vorzubereiten.

**Hier erfahren Sie, wie Datenbanken, die von OVHcloud verwaltet werden, am Ende ihrer Lebensdauer erstellt werden.**

## Voraussetzungen

über eines oder mehrere der folgenden Angebote verfügen:

- Ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit Datenbanken.
- Ein [Start SQL Datenbank-Paket](https://www.ovhcloud.com/de/web-hosting/options/start-sql/).
- Ein [SQL Private Server](https://www.ovhcloud.com/de/web-hosting/options/).
- Ein [Cloud Databases Server](https://www.ovh.de/cloud/cloud-databases/).

## In der praktischen Anwendung

### Erfasste Produkte

Die Endhaltbarkeitsstrategie umfasst:

- Public Cloud Databases, dedizierte DBMS Instanzen, die über das öffentliche Netzwerk erreichbar sind ([siehe Ankündigungen](https://docs.ovh.com/gb/en/clouddb/clouddb-eos-eol/)).

- Cloud Databases Web Hosting (auch als SQLPrivé Dienste bekannt), dedizierte DBMS Instanzen, die über das Hosting Web Netzwerk erreichbar sind ([siehe Ankündigungen](https://docs.ovh.com/gb/en/hosting/sql_eos_eol)).

- SharedSQL Web Hosting Dienste, MySQL Datenbanken, die über das Hosting Web-Netzwerk erreichbar sind ([siehe Ankündigungen](https://docs.ovh.com/gb/en/hosting/sql_eos_eol)).

### Definitionen und Leitlinien für die Politik zum Ende der Lebensdauer

![Timeline](images/ovh.eol.policy.timeline.png)

EOL = End of Life

#### "End of Life"- EOL

Dies ist die Veröffentlichung der Daten zum Ende des Verkaufs und zum Ende des Supports. OVHcloud wird in der Regel 90 Tage nach der Bekanntgabe eines Endes der Lebensdauer und seiner Anwendung einhalten.

#### Verkaufsende ("End of Sale")

Die betroffene Ware kann nach diesem Datum nicht mehr bestellt werden. Wie bereits angekündigt gilt diese Regel mindestens 90 Tage nach der Bekanntgabe des Endes der Nutzungsdauer.

#### Ende des Supports ("End of Support")

das Datum, bis zu dem der Kunde gemäß den Vertragsbedingungen der Dienstleistung oder den allgemeinen Vertragsbedingungen der Sicherheit Anspruch auf Produktunterstützung hat.
Nach diesem Zeitpunkt ist das Produkt nicht mehr Gegenstand von Hilfsdiensten und gilt als veraltet.
Gilt mindestens 6 Monate nach der Bekanntgabe des Endes der Lebensdauer.

#### **Veraltet**

Sie kommt nach dem Ende der Unterstützung.

Wenn ein Dienst mit verwalteten Datenbanken von OVHcloud überholt wird, kann er in die beiden folgenden Fälle eintreten.
Da Ihre Dienstleistung Auswirkungen haben kann, erhalten Sie mindestens einen Monat vor der Veralterung eine E-Mail-Benachrichtigung.

**Größere Aktualisierung der Dienstleistung**

Ihre Dienstleistung bleibt aktiv und wir aktualisieren das DBMS auf eine neue größere Version.
Diese Art von Updates kann zu unerwünschten Verhaltensweisen Ihrer Anwendungen führen. Deshalb empfehlen wir den Kunden, Änderungen der Versionen ihrer Datenbanken vorauszusehen und nicht bis zum Ende des Supports zu warten.

**Diensteinstellung**

Anstatt das DBMS Ihrer Dienstleistung auf die nächste verfügbare Hauptversion zu aktualisieren, können wir aus mehreren Gründen den Dienst einstellen:

- Das Update wird vom Herausgeber des DBMS nicht empfohlen.

- Die Entwicklung des DBMS ist abgeschlossen.

Die Einstellung kann je nach Fall auf zwei Arten erfolgen:

- Wir beenden die Verlängerung des Dienstes. In diesem Fall wird der Dienst am Ende des Vertragszeitraums eingestellt.

- Wir stellen den Service auf und schreiben Ihnen Überschüsse.

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.