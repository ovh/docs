---
title: Object Storage Swift - Upload auf Object Storage optimieren
slug: pcs/optimised-method-for-uploading-files-to-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1951
order: 130
---

**Letzte Aktualisierung am 27.10.2021**

## Ziel

Wenn Sie große Dateien auf Ihren Object Storage hochladen möchten (etwa Videos oder Festplatten-Images), können Sie den OpenStack Swift Client verwenden, um den Transfer durch Datei-Segmentierung zu optimieren.

**In diesem Guide erfahren Sie, wie Sie mit diesem Feature den Upload Ihrer Dateien auf den Object Storage beschleunigen können.**

## Voraussetzungen

- [Umgebung für die Verwendung der OpenStack-API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/) mit Swift Client;
- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/).

## In der praktischen Anwendung

OpenStack Swift ermöglicht Ihnen das Speichern von Dateien ohne Größenbeschränkung dank Segmentierung.

Wenn für den Upload ein Swift Client verwendet wird, bestimmt der Swift Proxy den Storage Node unter Verwendung eines Hash des Objektnamens. Demzufolge ist die Wahrscheinlichkeit groß, dass die Segmente in unterschiedlichen Storage Nodes gespeichert werden, wodurch die Daten mit höherer Geschwindigkeit geschrieben werden können.

So kann eine Datei von 10 GB aufgeteilt in 100 Segmente zu je 100 MB hochgeladen werden:

```bash
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```

|Argument|Beschreibung|
|---|---|
|--segment-size|Größe der Segmente in Bytes|
|--segment-threads|Anzahl der Segmente|


Die Upload-Geschwindigkeit können Sie übrigens mithilfe von Programmen wie iftop messen.

##  Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
