---
title: Upload auf Object Storage optimieren
excerpt: Upload auf Object Storage optimieren
slug: upload_auf_object_storage_optimieren
section: Object Storage Standard (Swift)
legacy_guide_number: g1951
---


##
Wenn Sie große Dateien auf Ihren Object Storage hochladen möchten (etwa Videos oder Festplatten-Images), können Sie den OpenStack Swift Client verwenden, um den Transfer durch Datei-Segmentierung zu optimieren.

In diesem Guide erfahren Sie, wie Sie mit diesem Feature den Upload Ihrer Dateien auf den Object Storage beschleunigen können.


## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API]({legacy}1851) mit Swift Client;
- [Laden der OpenStack Umgebungsvariablen]({legacy}1852).




##
OpenStack Swift ermöglicht Ihnen das Speichern von Dateien ohne Größenbeschränkung dank Segmentierung.

Wenn für den Upload ein Swift Client verwendet wird, bestimmt der Swift Proxy den Storage Node unter Verwendung eines Hash des Objektnamens. Demzufolge ist die Wahrscheinlichkeit groß, dass die Segmente in unterschiedlichen Storage Nodes gespeichert werden, wodurch die Daten mit höherer Geschwindigkeit geschrieben werden können.

So kann eine Datei von 10 GB aufgeteilt in 100 Segmente zu je 100 MB hochgeladen werden:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argument|Beschreibung|
|---|---|
|--segment-size|Größe der Segmente in Bytes|
|--segment-threads|Anzahl der Segmente|


Die Upload-Geschwindigkeit können Sie übrigens mithilfe von Programmen wie iftop messen.


##
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!
