---
title: 'Quota im CDN verwalten'
slug: quota-cdn
excerpt: 'So funktionieren Traffic-Limits in Ihrem CDN'
section: 'Erste Schritte'
order: 3
---

**Stand 03.04.2019**

## Einleitung

Mithilfe des Content Delivery Network (CDN) können Sie die Antwortzeiten von Websites für Ihre Benutzer optimieren. Jede Verbindung mit Ihrer Website erzeugt dabei einen Datenstrom, der Quota (das Gesamtdatenlimit des Traffics zu und von Ihrem CDN) verbraucht.

**In dieser Anleitung erhalten Sie alle Informationen zur Verwaltung des Quotas in Ihrem CDN.**


## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.


## Beschreibung

### Quota bestellen

Bei der Bestellung erhalten Sie **1 TB** Traffic-Quota. Bitte beachten Sie, dass dieses nicht jeden Monat automatisch erneuert wird. Ist das Quota aufgebraucht (egal über welchen Zeitraum), muss neues Quota bestellt werden.

Wenn Sie zusätzliches Quota benötigen, können Sie dieses direkt über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} bestellen.

![Quota hinzufügen](images/add_quota.png){.thumbnail}


Die Preise für das Quota finden Sie auf der zugehörigen [Webseite](https://www.ovh.de/cdn/infrastructure/){.external}.

Sobald nur noch **100 GB** übrig sind, erhalten Sie eine automatische Warnung zu Ihrem Quota-Verbrauch, damit Sie rechtzeitig weitere Bandbreite bestellen können. Wenn Ihr Quota aufgebraucht ist, wird automatisch die `bypass`-Funktion aktiviert, bis Sie weiteres Quota bestellt haben.


### Traffic-Abrechnung für das CDN Angebot

> [!primary]
>
> Ihnen wird der gesamte ausgehende Traffic des CDN berechnet.  
>

Zum Beispiel:

![Quota-Verbrauch](images/quota_used.png){.thumbnail}


- 21,74 MB an Dateien wurden bereits in den Cache geladen. Das CDN konnte direkt auf Anfragen zu diesen Dateien reagieren.

- 72,96 MB an Dateien wurden direkt vom *Backend* hinter dem CDN abgerufen. Welche Dateien in den Cache und welche direkt vom *Backend* geladen werden, ist in den Cache-Regeln Ihrer Domain festgelegt.


Unabhängig davon, ob die Dateien in den Cache gelegt oder vom *Backend* aus über Ihr CDN geladen werden, **beide Arten von Traffic werden von Ihrem Quota abgezogen**. Aus diesem Grund empfehlen wir Ihnen, eine spezielle Subdomain für Dateien anzulegen, die in den Cache geladen werden, und für die übrigen Dateien Domains zu verwenden, die auf das *Backend* weisen.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.