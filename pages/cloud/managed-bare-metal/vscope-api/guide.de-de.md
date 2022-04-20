---
title: vScope API verwenden
slug: vscopeapi
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/vscopeapi/'
excerpt: Die vScope API ermöglicht Ihnen, die Monitoringdaten in Ihren Anwendungen zu verwenden
section: OVHcloud Dienste und Optionen
---

**Letzte Aktualisierung am 18.11.2020**

## Ziel

OVHcloud stellt Ihnen mit **vScope** ein Überwachungstool für Ihre virtuellen Maschinen und Ihre Infrastruktur zur Verfügung.

Es handelt sich um eine Website, auf der alle nützlichen Informationen zur Verwendung Ihrer Ressourcen gesammelt sind.

Diese Informationen sind auch über APIv6 und API Metrics verfügbar.

**Diese Anleitung beschreibt die Verwendung dieser APIs.**

## Voraussetzungen

- Sie verfügen über eine [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/) Infrastruktur.
- Sie sind im Verwaltungsinterface von vScope eingeloggt.

## In der praktischen Anwendung

Das Tool vScope stellt zwei Arten von Informationen zur Verfügung:

- Live-Informationen, die den Daten der verschiedenen Komponenten zu einem Zeitpunkt “T” entsprechen.
- Grafiken, die die früheren Leistungsdaten der verschiedenen Komponenten veranschaulichen. Zum Beispiel: CPU und RAM einer virtuellen Maschine.


### Die Live-Daten sammeln

Die Live-Daten sind die von der Hauptseite der Benutzeroberfläche vScope aus verfügbaren Daten.

![vScope-API](images/vScope1.png){.thumbnail}

Sie können die Live-Daten für die folgenden Komponenten abrufen:

- Filer
- Hosts
- Virtuelle Maschinen

Die Verwendung geschieht über drei API-Aufrufe:

#### Filer

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### VMs

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Die historischen Daten sammeln (Grafiken)

Um die historischen Daten (Grafiken) zu sammeln und zu verwenden, nutzen wir dem Dienst **Metrics Data Platforms**.

Über das Protokoll Opentsdb oder WARP10 können Sie Ihre Daten in Form von Punkten abrufen. Sie können diese Punkte nach Belieben mit Ihrer Anwendung auswerten oder sie direkt anzeigen.


Der folgende Abschnitt erklärt die Verwendung des Protokolls OpenTSDB für die unbearbeitete Anzeige von Daten (keine grafische Wiedergabe).

Um die **Metrics Data Platforms** verwenden zu können, müssen Sie ein Lesetoken (*read*) erhalten. Mit der neuen Version von vScope besitzt jeder Nutzer der Infrastruktur ein Lesetoken. 

Für den jeweiligen Nutzer verwenden Sie den folgenden APIv6-Aufruf für das Lesetoken:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/metricsToken
> 

Ihr Token befindet sich im Feld **token** des Ergebnisses.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    token: "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Für jede Art von Komponenten steht eine metrische Liste zur Verfügung und erfordert eine Anzahl von sehr präzisen Parametern (auch Label genannt).

#### Filer

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Verwendung des Filers in kB | Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>datastore : pcc-000443 |

#### Hosts

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Verwendung des Prozessors des Hosts in Prozent | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51 |
| vscope.host.mem.usage.perc | Verwendung des Speichers des Hosts in Prozent | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51 |
| vscope.host.net.tx | Verwendung des Host-Netzwerks beim Senden | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Verwendung des Host-Netzwerks beim Empfang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Anzahl der vom Host gesendeten Netzwerk-Pakete | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Anzahl der vom Host empfangenen Netzwerk-Pakete | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### virtuelle Maschinen

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Verwendung des Prozessors der VM in Prozent | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.mem.usage.perc | Verwendung des Speichers der VM in Prozent | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.cpu.ready |CPU ready der VM in Millisekunden | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.rx | Verwendung des Netzwerks der VM beim Empfang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.tx | Verwendung des Netzwerks der VM bei der Übertragung | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetsrx | Anzahl der von der VM empfangenen Netzwerk-Pakete | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetstx | Anzahl der von der VM gesendeten Netzwerk-Pakete | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.read | Anzahl der IOs der VM im Lesevorgang pro Sekunde | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.write | Anzahl der IOs der VM im Schreibvorgang pro Sekunde | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  Bandbreite der Festplatte der VM beim Lesevorgang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | Bandbreite der Festplatte der VM beim Schreibvorgang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.read | Latenz der Festplatte der VM beim Lesevorgang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.write | Latenz der Festplatte der VM beim Schreibvorgang | \- Rechenzentrum: pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |

#### Beispiel einer Datensammlung unter Verwendung des OpenTSDB-Protokolls

Jetzt, da Sie Ihr Token, Ihren Endpunkt und Ihre metrische Liste abgerufen haben, erhalten Sie die Daten zur Speichernutzung über den Zeitraum eines Tages.

Hier ein Beispiel für eine Abfrage.

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
D 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}
```

Erläuterung der verschiedenen verwendeten Felder:

- **read**: der für die Durchführung des Antrags verwendete Nutzer (dies wird immer *read* sein);
- **XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX**: das vorher über APIv6 abgerufene Token;
- **opentsdb.gra1-ovh.metrics.ovh.net**: Endpunkt OpenTSDB, ebenfalls über APIv6 abgerufen. Dieser Endpunkt kann je nach Ihrem Standort variieren;
- **start**: der dem Datum des Beginns der Abfrage entsprechende Zeitstempel;
- **queries**: Tabelle mit den abzufragenden Metriken. Mehrere metrische Werte können in einer einzigen Abfrage abgerufen werden;
- **metric**: Name der abzufragenden Metrik;
- **aggregator**: Name der Aggregationsfunktion (weitere Details entnehmen Sie bitte der Dokumentation zu OpenTSDB);
- **downsample**: Name der Stichprobenfunktion (optional, ermöglicht es, die Zahl der abzurufenden Daten zu reduzieren);
- **tags**: Liste von Labels in der Form Schlüssel/Wert;

Andere Parameter können auch geliefert werden. Bitte lesen Sie für mehr Details in der Dokumentation der OpenTSDB API nach.

Sie werden dann ein *json* mit der Zusammenfassung der Abfrage erhalten, sowie die mit dem Wert im Feld **dps** verbundenen Zeitstempel.

Beispiel:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51"
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

Für mehr Details zu API Calls mit OpenTSDB können Sie in der folgenden Dokumentation nachlesen: [OpenTSDB API query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
