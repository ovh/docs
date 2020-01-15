---
title: 'Wie das API von vScope verwenden'
slug: vscopeapi
excerpt: 'Das API vScope ermöglicht Ihnen, die Aufnahmedaten in Ihren Anwendungen zu verwenden'
---

**Stand 25.11.2019**

## Ziel

OVHcloud stellt Ihnen ein Überwachungs- und Aufnahmetool Ihrer virtuellen Maschinen und Ihrer Infrastruktur zur Verfügung, das **vScope**.genannt wird

Es handelt sich um eine Website, in dem alle die Verwendung Ihrer Ressourcen betreffenden nützlichen Informationen gesammelt sind.

Diese Informationen sind auch über APIv6 und API Metrics verfügbar.

**Dieses Handbuch beschreibt die Verwendung dieser APIs**.

## Beschreibung

Der vScope stellt zwei Informationsarten zur Verfügung:

- Live- **Informationen**, die den Informationen der verschiedenen Bestandteile an einem Moment T entsprechen.
- Grafiken, die die vergangenen Daten der Leistung der verschiedenen Bestandteile wiederspiegeln. Beispiel: CPU, RAM einer virtuellen Maschine.


### Die Live-**Daten**sammeln

Die Live-**Daten** sind die von der Hauptseite der Benutzeroberfläche vScope aus verfügbaren Daten.

![vScope-API](images/vScope1.png){.thumbnail}

Sie können die Live-**Daten** für die folgenden Bestandteile wieder erlangen:

- filers
- Hosts:
- Virtuelle Maschinen

Die Verwendung des API geschieht über drei APIv--Anrufe:

#### Filers

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### virtuelle Maschinen

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### die historischen Daten sammeln (Grafiken)

Um die historischen Daten (Grafiken) zu sammeln und zu verwenden verwenden wir das Produkt **Metrics Data Platforms**.

Wir können über das Protokoll Opentsdb oder WARP10 Ihre Daten in der Form von Punkten wieder erlangen. Sie können diese Punkte über Ihre Anwendung auswerten oder sie der gewünschten Wiedergabe gemäß anzeigen.


Dieser Artikel deckt die Verwendung des Opentsdb-Protokolls für die unbearbeitete Anzeige von Daten (keine grafische Wiedergabe) ab.

Um die **Metrics Data Platforms** verwenden zu können, müssen Sie ein Token der Auslesung erhalten. Mit der neuen Version von vScope besitzt jeder Nutzer der Infrastruktur ein Token der Auslesung. 

Für den gewünschten Nutzer verwenden Sie den folgenden Anruf APIv6, um den Token der Auslesung wieder zu erlangen:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

Ihr Token befindet sich im Feld **token** des Ergebnisses.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    token: "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Für jede Bestandteilsart steht eine metrische Liste zur Verfügung und benötigt eine Anzahl von sehr präzisen Parametern (auch Label genannt).

#### Filers

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Verwendung des Filers in kB | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>datastore : pcc-000443 |

#### Hosts

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Verwendung des Prozessors des Hosts in Prozent | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51 |
| vscope.host.mem.usage.perc | Verwendung des Speichers des Hosts in Prozent | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51 |
| vscope.host.net.tx | Verwendung des Netzes des Hosts in der Aussendung | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Verwendung des Netzes des Hosts im Empfang | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Anzahl der vom Host ausgegebenen Netzpakete | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Anzahl der vom Host empfangenen Netzpakete | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>Host 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### virtuelle Maschinen

| Messwerte | Beschreibung | Label |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Verwendung des Prozessors des vm in Prozent | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.mem.usage.perc | Verwendung des Speichers des vm in Prozent | Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.cpu.ready |CPU ready des vm in Millisekunden | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.rx | Verwendung des Netzes des vm im Empfang | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.tx | Verwendung des Netzes des vm in der Ausgabe | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetsrx | Anzahl der vom vm empfangenen Netzpakete | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetstx | Anzahl der vom vm ausgegebenen Netzpakete | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.read | Anzahl der IOs des vm im Lesevorgang pro Sekunde | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.write | Anzahl der IOs des vm im Schreibvorgang pro Sekunde | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  Durchlassbereich der Festplatte des vm im Lesevorgang | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | Durchlassbereich der Festplatte des vm im Schreibvorgang | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.read | Latenz der Festplatte des vm im Schreibvorgang | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.write | Latenz der Festplatte des vm im Schreibvorgang | \- Datenzentrum : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |

#### Beispiel der Sammlung unter Verwendung des OpenTSDB-Protokolls

Jetzt, wo Sie Ihr Token, Ihren Endpunkt, und Ihre metrische Liste wieder erhalten haben werden Sie die Daten der Speichernutzung eines Host während des Zeitraums eines Tages erhalten.

Im Folgenden ein Beispiel eines Antrags:

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
D 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            | tags             |                                                                                                                                                                                           |
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}
```

Erläuterung der verschiedenen verwendeten Felder:

- lesen : der für die Durchführung des Antrags verwendete Nutzer (wird immer lesen sein);
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX : das vorher über APIv6 zurück erhaltene Token;
- opentsdb.gra1-ovh.metrics.ovh.net : Endpunkt OpenTSDB, ebenfalls über APIv6 zurück erhalten. Dieser Endpunkt kann je nach Ihrem Standort variieren;
- Start: der dem Datum des Beginns des Antrags entsprechende Zeitstempel;
- Anfragen: die Tabelle, die die zurück zu bekommenden metrischen Werte enthält. Mehrere metrische Werte können in einem einzigen Ersuchen wieder bekommen werden;
- Metrisch: Name des zurück zu erhaltenen metrischen Wertes;
- Aggregator: Name der Funktion der Aggregation (lesen Sie in der Dokumentation OpenTSDB für mehr Details nach);
- downsample: Name der Funktion des Musters (erlaubt die Reduzierung der Anzahl der zurück zu bekommenden Daten. optionale Parameter);
- tags: Liste von Labels in der Form von Schlüssel/Wert;

Andere Parameter können auch geliefert werden. Bitte lesen Sie für mehr Details in der Dokumentation von api OpenTSDB nach.

Sie werden einen Json mit der Zusammenfassung des Ersuchens bekommen und auch die assoziierten Zeitstempel mit dem Wert im Feld **dps**.
Beispiel:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        | tags             |                                                                                                                                                                                           |
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

Für mehr Details zu den Ersuchen OpenTSDB können Sie in der folgenden Dokumentation nachlesen: [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.