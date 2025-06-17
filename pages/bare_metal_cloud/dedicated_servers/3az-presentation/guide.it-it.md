---
title: "Bare Metal 3-AZ Region - Presentazione dell'offerta"
excerpt: 'Scopri il servizio Bare Metal 3-AZ, che offre massima disponibilità e ridondanza tra tre datacenter'
updated: 2025-06-04
---

## Obiettivo

OVHcloud propone il suo servizio Bare Metal nella [Region 3-AZ](/links/bare-metal/regions), un'evoluzione significativa nella strategia di regionalizzazione dell'azienda. Disponibile nell'area metropolitana di Parigi, questo servizio rappresenta un nuovo standard del settore in termini di affidabilità e performance dei server Bare Metal.

Il Bare Metal della regione 3-AZ risponde alle esigenze dei clienti che hanno bisogno di alta disponibilità e ridondanza nei loro piani di continuità di attività. Questo servizio fornisce server Bare Metal in tre datacenter vicini a Parigi, collegati da una rete a bassa latenza. Garantisce maggiore sicurezza, performance migliorate e funzionalità ininterrotte anche in caso di incidenti localizzati.

> [!primary]
>
> **Recensione importante - Evoluzione dell'offerta Bare Metal 3-AZ**
>
> A partire da maggio 2025, il modello di consegna dei server Bare Metal nella regione Parigi 3-AZ si evolve significativamente. Il precedente modello di consegna obbligatoria in cluster di 3 server (uno in ogni area di disponibilità) verrà abbandonato.
>
> **Modifiche chiave:**
>
> - I clienti potranno scegliere liberamente il numero esatto di server di cui hanno bisogno.
> - La ripartizione dei server tra le diverse zone di disponibilità (AZ) sarà totalmente personalizzabile.
> - Nessun obbligo di implementazione simultanea in tutte e tre le zone.
>
> **Importante:** le informazioni presentate in questa guida, in particolare quelle relative all'implementazione obbligatoria del cluster e, potenzialmente, all'esperienza utente che riflette questo modello, si applicano principalmente ai client i cui server sono stati consegnati *prima di maggio 2025* con il modello di cluster precedente. Le nuove installazioni a partire da maggio 2025 beneficeranno della flessibilità del nuovo modello e, potenzialmente, di un'interfaccia adattata. Per maggiori informazioni sullo stato di avanzamento del progetto o sull’adeguamento dell’infrastruttura esistente, contatta il gestore del tuo account o il supporto OVHcloud.
>

## Panoramica

### Scopo del Servizio

Il valore della Region 3-AZ risiede nell'offerta di diversi server identici distribuiti su tre zone di disponibilità all'interno della stessa Region. Questa configurazione garantisce elevata disponibilità e ridondanza dei dati, mantenendo la continuità operativa e riducendo il rischio di perdita dei dati. La distribuzione dei server mission critical riduce al minimo la latenza e migliora le prestazioni delle applicazioni.

### La regionalizzazione in OVHcloud

OVHcloud è presente in tutto il mondo, in particolare in Europa, Stati Uniti, Canada e Asia Pacifica. L'introduzione del concetto di Regione e il supporto delle Aree di Disponibilità è un'iniziativa strategica volta a fornire ai clienti prestazioni e resilienza ottimali. La regione di Parigi è la prima ad adottare il modello 3-AZ.

### Suggerimenti per la selezione delle Region

Per ottenere prestazioni ottimali, è necessario che una regione sia selezionata il più vicino possibile agli utenti. Per garantire una disponibilità mondiale, i servizi devono essere distribuiti su più regioni. La Region 3-AZ è ideale per i clienti che cercano la massima resilienza e deve essere utilizzata per creare progetti di applicazioni multi-AZ.

Nella sezione [Spazio Cliente OVHcloud](/links/manager), puoi visualizzare i tuoi cluster nella lista `Server dedicati`{.action} del menu `Bare Metal Cloud`{.action} cliccando sulla scheda `3-AZ Clusters`{.action}.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Fare clic sul nome del cluster nella tabella per visualizzare i dettagli.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Clicca sulla scheda `Nodi`{.action} per aprire la lista dei server del cluster.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Cliccando sul nome di un server/nodo in questa lista si apre la scheda `Informazioni generali`{.action} del server. Per maggiori informazioni, consulta la nostra guida:

[Come iniziare con un server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

## Per saperne di più

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
