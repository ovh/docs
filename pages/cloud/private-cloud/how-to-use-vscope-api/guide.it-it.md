---
title: 'Utilizzare l’API di vScope'
slug: vscopeapi
excerpt: 'Come utilizzare i dati di monitoraggio nelle tue applicazioni tramite l’API vScope'
section: 'Servizi e opzioni OVH'
order: 1
---

**Ultimo aggiornamento: 09/12/2019**

## Obiettivo

Per ogni servizio Private Cloud, OVHcloud mette a disposizione il tool VScope, uno strumento di monitoraggio per macchine virtuali e infrastrutture.

Si tratta di una pagina Web che contiene tutte le informazioni utili relative alle proprie risorse, disponibili anche via APIv6 e API Metrics.

**Questa guida ti mostra come recuperare i valori monitorati via API.**

## Procedura

vScope mette a disposizione due tipi di informazioni:

- **dati live**, relativi allo stato dei diversi componenti in un istante T
- **grafici**, che rappresentano lo storico delle prestazioni dei diversi componenti (ad esempio, CPU e RAM di una macchina virtuale)


### Raccogli i dati live

I dati live sono disponibili nella pagina principale dell’interfaccia vScope.

![vScope-API](images/vScope1.png){.thumbnail}

Queste informazioni sono relative ai seguenti componenti:

- filer
- host
- macchine virtuali

Per recuperarle tramite APIv6 è necessario eseguire queste tre chiamate:

#### Filer

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Host

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Macchine virtuali

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Ottieni lo storico dei dati (Graphs)

Per effettuare questa operazione è possibile utilizzare il servizio **Metrics Data Platforms**: grazie ai protocolli Opentsdb e WARP10 i dati possono essere recuperati sotto forma di punti utilizzabili tramite applicazione o visualizzabili direttamente con il rendering desiderato.

La procedura descritta in questa guida è relativa all’utilizzo del protocollo Opentsdb per la visualizzazione grezza dei dati acquisiti, senza rappresentazione grafica.

Per accedere al servizio **Metrics Data Platforms** è necessario disporre di un token di lettura: la nuova versione di vScope, infatti, ne prevede uno per ogni utilizzatore dell’infrastruttura. 

Per recuperare il codice di un utente specifico, effettua questa chiamata APIv6: 

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

L’informazione richiesta viene mostrata nel campo **token** del risultato.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Per ogni tipo di componente è disponibile una lista di metriche, che richiede un numero di parametri (detti label) molto preciso.

#### Filer

| Metriche | Descrizione | Label |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Utilizzo del filer in kB | datacenter: pcc-37-187-228-180_datacenter869, <br>datastore: pcc-000443 |

#### Host

| Metriche | Descrizione | Label |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Percentuale di utilizzo del processore dell’host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51 |
| vscope.host.mem.usage.perc | Percentuale di utilizzo della memoria dell’host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51 |
| vscope.host.net.tx | Utilizzo della rete dell’host in uscita | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Utilizzo della rete dell’host in entrata | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Numero di pacchetti di rete trasmessi dall’host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Numero di pacchetti di rete ricevuti dall’host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |

#### Macchine Virtuali

| Metriche | Descrizione | Label |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Percentuale di utilizzo del processore della VM | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.mem.usage.perc | Percentuale di utilizzo della memoria dell’host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.cpu.ready |CPU Ready della VM in millisecondi | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.rx | Utilizzo della rete della VM in ricezione | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.tx | Utilizzo della rete della VM in trasmissione | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.packetsrx | Numero di pacchetti di rete ricevuti dalla VM | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.packetstx | Numero di pacchetti di rete trasmessi dalla VM | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.io.read | Numero di IOPS della VM in lettura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.io.write | Numero di IOPS della VM in scrittura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.bandwidth.read |  Banda passante del disco della VM in lettura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.bandwidth.write | Banda passante del disco della VM in scrittura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.latency.read | Latenza del disco della VM in lettura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.latency.write | Latenza del disco della VM in scrittura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |

#### Esempio di raccolta con il protocollo OpenTSDB

Una volta recuperati il token, l’endpoint e la lista delle metriche è possibile estrarre, ad esempio, i dati relativi all’utilizzo della memoria di un host su base giornaliera.

La richiesta sarà di questo tipo:

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
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
}'
```

Ecco la descrizione dei campi impiegati:

- read: user utilizzato per effettuare la richiesta (sarà sempre “read”)
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX: token recuperato precedentemente via APIv6
- opentsdb.gra1-ovh.metrics.ovh.net: endpoint OpenTSDB, anch’esso recuperato via APIv6. Questo endpoint può variare in base alla localizzazione
- start: timestamp corrispondente alla data di inizio della richiesta
- queries: tabella con le metriche da recuperare (con una sola richiesta è possibile recuperare più metriche)
- metric: nome della metrica da recuperare
- aggregator: nome della fuzione di aggregazione (per maggiori dettagli, consulta la documentazione ufficiale OpenTSDB)
- downsample: nome della funzione di campionamento (parametro opzionale che permette di ridurre il numero di dati da recuperare) 
- tags: lista dei label in formato chiave/valore

Questa lista di parametri non è esaustiva e, oltre a quelli indicati, ne sono disponibili altri. Per maggiori informazioni, consulta la documentazione ufficiale dell’API OpenTSDB.

Il risultato restituito sarà un file JSON con il riepilogo della richiesta e, nei campi **dps**, i timestamp associati ai diversi valori. 
Esempio:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
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

Per maggiori informazioni sulle richieste OpenTSDB, consulta la documentazione disponibile alla pagina [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.