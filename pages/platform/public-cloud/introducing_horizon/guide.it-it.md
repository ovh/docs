---
title: Introduzione a Horizon
excerpt: Scopri le principali sezioni dell'interfaccia Horizon
slug: horizon
section: Gestione da Horizon
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 16/03/2022**

## Obiettivo

L'interfaccia Horizon, originariamente proposta con OpenStack, è stata adattata da OVHcloud per offrire funzionalità complementari rispetto a quelle disponibili nel Spazio Cliente OVHcloud.

**Scopri le sezioni principali dell'interfaccia Horizon.**

## Prerequisiti

- Disporre di un [progetto Public Cloud](https://docs.ovh.com/it/public-cloud/create_a_public_cloud_project/) nel tuo account OVHcloud
- Un utente [OpenStack](../creation-and-deletion-of-openstack-user/) creato nel tuo progetto

## Procedura

### Connettersi a OpenStack Horizon

Apri la pagina di connessione a [Horizon](https://horizon.cloud.ovh.net/auth/login/) e inserisci le [credenziali OpenStack](../creation-and-deletion-of-openstack-user/) precedentemente create, poi clicca su `Connect`{.action}.

Clicca su `Horizon`{.action} nel menu di sinistra sotto "Management Interfaces" dopo aver aperto il tuo progetto `Public Cloud`{.action} nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

### Scelta della Region del datacenter

Diversamente dallo Spazio Cliente OVHcloud, Horizon separa i tuoi servizi in base alla localizzazione. Puoi scegliere la regione dal menu in alto a sinistra:

![public-cloud](images/region2021.png){.thumbnail}

### Menu laterale sinistro

Questo menu ti permette di navigare rapidamente nel progetto e nelle diverse funzionalità associate.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Panoramica (*Overview*)**

- **Sintesi delle quote (*Limit Summary*)**

Horizon offre una sintesi delle quote, che ti permette di vedere le risorse occupate e disponibili per i tuoi progetti:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Riepilogo dell'uso (*Usage Summary*)**

Visualizzi un riepilogo dell'utilizzo delle istanze del progetto. Il periodo di ricerca può essere personalizzato per limitare il riepilogo a un periodo desiderato.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Uso (*Usage*)**

È inoltre disponibile un riepilogo delle tue modalità di utilizzo. Si tratta di un riepilogo dei diversi servizi associati al progetto, come ad esempio l'elenco delle istanze.

![public-cloud](images/usage2021.png){.thumbnail}

Il riepilogo è scaricabile in formato CSV, che permette di estrarre le informazioni per poterle poi analizzare con altri strumenti. Basta cliccare su `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Questa pagina permette di visualizzare e amministrare le istanze. Ad esempio, è possibile creare nuove istanze, metterle in pausa, accedere alla console dell'istanza, ecc...

- **Images**

Consulta e gestisci, tramite questo menu, le immagini, cioè i templates e gli snapshot associati al tuo progetto.

- **Key Pairs**

Qui puoi listare e creare le tue chiavi SSH per la connessione alle tue istanze.

##### **Volumes**

Questo menu ti permette di visualizzare e gestire i volumi, i backup e gli snapshot di volumi.

![volume](images/volumes2021.png){.thumbnail}

##### **Network**

Elenca e gestisci qui le tue reti e i diversi gruppi di sicurezza. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

Questo menu ti permette di orchestrare diverse applicazioni cloud composite.<br>
Per maggiori informazioni, consulta la [documentazione OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orchestrazione](images/orchestration2021.png){.thumbnail}

#### Identity

Questo menu permette di visualizzare le informazioni sui tuoi progetti.

### Menu utente

In alto a destra dell'interfaccia Horizon, un menu utente ti permette in particolare di: 

- Modificare i parametri di visualizzazione dell'interfaccia.
- Scaricare un file « OpenRC » con le credenziali utente.
- Disconnettersi dall'interfaccia Horizon.

![public-cloud](images/username2021.png){.thumbnail}

## Per saperne di più

[Scopri l'interfaccia Public Cloud](https://docs.ovh.com/it/public-cloud/interfaccia-public-cloud/)
 
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.