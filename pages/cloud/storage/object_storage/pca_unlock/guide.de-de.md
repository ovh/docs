---
title: Object Storage Swift - Auf Public Cloud Archive gespeicherte Daten freigeben
slug: pca/unlock
excerpt: Erfahren Sie hier, wie Sie Ihre Archive freigeben
section: OpenStack Swift Archive Storage Class Specifics
order: 030
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 12.04.2022**

## Ziel

Public Cloud Archive ist eine Cold Storage Lösung für das Hosting großer Datenmengen ohne Größenbeschränkung und zu sehr attraktiven Preisen.

Da Cold Storage Daten nur selten Zugriff benötigen, ist eine Freigabeanforderung (*Unfreeze*) notwendig, was eine Verzögerung des Datenabrufs nach sich zieht. Dieser Zeitraum variiert je nach Datenalter und Häufigkeit des Datenzugriffs.

## Voraussetzungen

- *Unfreeze* im OVHcloud Kundencenter:
    - Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- *Unfreeze* über python-swiftclient:
    - [Umgebung für die Verwendung der OpenStack-API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/) indem python-swiftclient installiert wird.
    - [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/).

## In der praktischen Anwendung

### Objekte über das Kundencenter abrufen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Cloud Archive`{.action}.

Um das Archiv freizugeben, klicken Sie auf den Button `...`{.action} rechts und dann auf `Unfreeze`{.action}, um den Vorgang zu starten.

![Unfreeze](images/unfreeze.png){.thumbnail}

Sobald der Prozess läuft, werden Datum und Uhrzeit der Verfügbarkeit Ihres Archivs in der Spalte `Verfügbarkeit` angezeigt.

![Frist](images/unfreeze_result.png){.thumbnail}

Ihre Datei wird nach Ablauf dieser Frist zum Download verfügbar sein. Sie können dann den Download direkt im Browser oder über einen [Swift/SFTP/SCP Client](https://docs.ovh.com/gb/en/storage/pca/sftp/) ausführen.

### Objekte über python-swiftclient abrufen

Überprüfen Sie den Zustand des herunterzuladenden Objekts:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: sealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txbb0eff9ebf9442eab0d02-0061123b5a
X-Openstack-Request-Id: txbb0eff9ebf9442eab0d02-0061123b5a
     X-Iplb-Request-Id: 6DBEFE1E:942A_3626E64B:01BB_61123B59_649EACF:8F28
       X-Iplb-Instance: 12308
```

Diese Zeile zeigt an, dass das Objekt eingefroren ist:

```
X-Ovh-Retrieval-State: sealed
```

Der Befehl `swift download` gibt daher einen Fehler 429 zurück:

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

Überprüfen des Status mit `swift stat`:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealing
           X-Timestamp: 1628584780.95458
 X-Ovh-Retrieval-Delay: 14313
            X-Trans-Id: tx9012d12434a447bd81528-0061123c54
X-Openstack-Request-Id: tx9012d12434a447bd81528-0061123c54
     X-Iplb-Request-Id: 6DBEFE1E:94D0_3626E64B:01BB_61123C54_6823B54:10ABF
       X-Iplb-Instance: 12309
```

Diese Zeile zeigt an, dass das Objekt freigegeben wird:

```
X-Ovh-Retrieval-State: unsealing
```

In der folgenden Zeile wird der Zeitraum (in Sekunden) angegeben, bis das Objekt heruntergeladen werden kann:

```
X-Ovh-Retrieval-Delay: 14313
```

Status nach Ablauf der Frist:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txaf1eac9ceb8a45efb36e1-0061127482
X-Openstack-Request-Id: txaf1eac9ceb8a45efb36e1-0061127482
     X-Iplb-Request-Id: 6DBEFE1E:ACCC_3626E64B:01BB_61127482_E75B0:1B979
       X-Iplb-Instance: 38343
```

Diese Zeile zeigt an, dass das Objekt bereit ist:

```
X-Ovh-Retrieval-State: unsealed
```

Das Objekt herunterladen:

```bash
swift download <pca_container> <object>
```

```bash
swift download <pca_container> <object>
<object> [auth 0.961s, headers 1.767s, total 1.768s, 0.001 MB/s]
```

#### Objekt-Download automatisieren

> [!primary]
>
> Diese Funktion erfordert das Paket `at`.
>

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

```bash
X_OVH_RETRIEVAL_DELAY=$(swift download <pca_container> <object> | awk -F ": " '/X-Ovh-Retrieval-Delay/ {print $2}'
RETRIEVAL_DELAY=$((${X_OVH_RETRIEVAL_DELAY} / 60 + 2))
swift download <pca_container> <object> | at now + ${RETRIEVAL_DELAY} minutes
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
