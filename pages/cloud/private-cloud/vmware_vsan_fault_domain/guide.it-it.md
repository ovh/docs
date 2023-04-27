---
title: Gestione dei domini di guasto vSAN
slug: vmware-vsan-fault-domain
excerpt: Come gestire i domini di guasto vSAN
section: Funzionalità VMware vSphere
updated: 2021-12-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 23/12/2021**

## Obiettivo

Questa guida ti mostra come funzionano e attuano i domini di guasti vSAN.

## Prerequisiti

- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Avere un utente attivo con diritti specifici per NSX (creato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver installato un [datastore vSan](https://docs.ovh.com/it/private-cloud/vmware-vsan/)

## Procedura

### Funzionamento

Un dominio di guasto (fault domain) si riferisce a un insieme di server, periferiche di archiviazione o componenti di rete raggruppati in una posizione fisica del datacenter e che possono essere interessati collettivamente in caso di guasto.

Su vSAN è possibile raggruppare i server in domini di guasti vSAN, tenendo conto della loro posizione fisica.
Per usufruire della resilienza offerta da vSAN è quindi necessario disporre di diversi domini di guasti, replicando così gli oggetti delle VM attraverso questi gruppi di server. Per maggiori informazioni, consulta [questa guida](https://core.vmware.com/resource/vmware-vsan-design-guide#sec8-sub3).

I server OVHcloud a tua disposizione sono distribuiti in rack differenti. In questo modo, è possibile creare domini di guasto vSAN in funzione di questi rack.

Ad esempio, la strategia predefinita vSAN (livello di tolleranza FTT=1 con RAID1 (Miroring) richiede almeno 3 domini di guasti (per 2 repliche + 1 oggetto witness).

### Attuazione

Si raccomanda di seguire questa procedura quando più server si trovano sulla stessa rack. Prediligi anche un numero identico di server per ogni dominio di guasto vSAN.
In questo modo i dati saranno distribuiti in modo più efficiente e tutelati meglio in caso di malfunzionamento di un dominio guasto.

Ogni server OVHcloud dispone delle informazioni relative alla baia in cui è ospitato.

Accedi al menu `Host and Clusters`{.action}, clicca sul server corrispondente e poi sulla scheda `Summary`{.action}. L'informazione si trova al livello di "Custom Attributes": attributo **Rack**.

![attribut Rack](images/01.png){.thumbnail}

Sempre nel menu `Host and Clusters`{.action}, seleziona il cluster interessato e clicca sulla scheda `Configure`{.action} e scegli il menu `vSAN`{.action} poi `Fault Domains`{.action}.

È sufficiente inserire il server nella casella **+** "Fault Domains".

![fault domain](images/02.png){.thumbnail}

Assegna un nome al dominio di guasto (puoi utilizzare, ad esempio, il nome della baia) nel campo "Fault domain name" e confermala cliccando su `CREATE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/03.png" alt="nome fault domain" class="thumbnail" width="70%" height="70%">

Lo stato di avanzamento dell'operazione è disponibile nella finestra `Recent Tasks`{.action}.

![fault domain Task](images/04.png){.thumbnail}

Ripeti l'operazione su tutti i domini di guasto presenti in rack diversi.

![aggiunta multipli fault domains](images/05.png){.thumbnail}

Aggiungi un server in un dominio di guasto esistente spostandolo sopra e confermala cliccando su `MOVE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/06.png" alt="aggiunta server" class="thumbnail" width="70%" height="70%">

Le informazioni sullo spazio disco utilizzato, disponibile e totale si visualizzano sorvolando il dominio di guasto.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/07.png" alt="fault domain information" class="thumbnail" width="60%" height="60%">

Il cluster vSAN dispone della resilienza dei dati tramite i domini di guasto.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
