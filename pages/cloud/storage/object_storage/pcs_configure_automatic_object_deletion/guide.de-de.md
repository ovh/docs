---
title: Object Storage Swift - Automatisches Löschen von Objekten konfigurieren
excerpt: Automatisches Löschen von Objekten konfigurieren
slug: pcs/configure-automatic-object-deletion
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1950
order: 070
---


## Ziel
Um Ihnen die Verwaltung Ihres Object Storage zu vereinfachen, können Sie die Lebensdauer gewisser dateien vordefinieren.

So können Sie beispielsweise Backups nur für einen bestimmten Zeitraum aufbewahren.

In diesem Guide erfahren Sie, wie Sie das automatische Löschen von Dateien nach Ablauf einer festgelegten Frist oder zu einem bestimmten Datum konfigurieren.


## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API]({legacy}1851) mit Swift Client;
- [Laden der OpenStack Umgebungsvariablen]({legacy}1852).




## In der praktischen Anwendung
Sie haben hierfür zwei Möglichkeiten zur Bestimmung des Zeitpunktes, zu dem Ihre Dateien gelöscht werden sollen:

- nach Ablauf einer bestimmten Anzahl von Sekunden;
- zu einem vordefinierten Zeitpunkt.




### Nach Ablauf einer bestimmten Anzahl von Sekunden
Hierfür müssen Sie den Header X-Delete-After für Ihre Objekte konfigurieren:


```bash
root@server:~$ swift copy --header "X-Delete-After: 3600" container test.txt
```


Die Datei test.txt wird nach Ablauf einer Stunde gelöscht.


### Zu einem vordefinierten Zeitpunkt
Hierfür müssen Sie zunächst einmal den gewünschten Zeitpunkt im Epoch-Format kennen.

Es gibt spezielle [Konverter](http://www.epochconverter.com/), die Ihnen diesen Schritt erleichtern.

Anschließend geben Sie dieses Datum im Header X-Delete-At an:


```bash
root@server:~$ swift copy --header "X-Delete-At: 1448928000000" container test.txt
```


Die Datei test.txt wird am 01. Dezember 2015 gelöscht.


## Weiterführende Informationen
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!
