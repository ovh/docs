---
title: 'Creare un’istanza dall’interfaccia Horizon'
slug: crea_unistanza_con_horizon
excerpt: 'Come creare un’istanza dall’interfaccia Horizon'
section: Gestione da Horizon
legacy_guide_number: g1772
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 02/08/2022**

## Obiettivo

In alcuni casi potrebbe essere necessario creare istanze direttamente dall’interfaccia Horizon: questa operazione permette, ad esempio, di aggiungere più istanze contemporaneamente o configurare gruppi di sicurezza specifici da applicare alle istanze.

**Questa guida ti mostra come creare un’istanza dall’interfaccia Horizon**.

## Prerequisiti

- Disporre di un progetto [Public Cloud OVHcloud](https://www.ovhcloud.com/it/public-cloud/){.external}
- [Essere connesso all’interfaccia Horizon](https://docs.ovh.com/it/public-cloud/horizon/){.external} 

## Procedura

Per avviare la creazione di un’istanza, accedi all’interfaccia Horizon. Se hai bisogno di aiuto per effettuare questa operazione, consulta [la guida](https://docs.ovh.com/it/public-cloud/horizon/){.external}.

Clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

Visualizzi una pagina con tutte le istanze in esecuzione. Per avviarne una nuova, clicca sul pulsante `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

A questo punto completa i campi con le informazioni richieste aiutandoti, se necessario, con la tabella qui sotto (la lista non è esaustiva). 

|Campo|Descrizione|
|---|---|
|Availability Zone|Lascia “nova” (scelta predefinita)|
|Instance Name|Indica il nome che intendi assegnare all’istanza da creare|
|Flavor|Seleziona il tipo di istanza da creare|
|Count|Indica il numero di istanze da creare|
|Select Boot Source|Seleziona il metodo di creazione dell’istanza (avvio da immagine o Snapshot)|
|Device Name|Seleziona l’immagine dell’istanza (solo in caso di avvio da un’immagine)|
|Instance Snapshot|Seleziona lo Snapshot di un’istanza (solo in caso di avvio da uno Snapshot)|
|Key Pair|Seleziona una chiave SSH per accedere all’istanza (per creare una chiave, clicca sul simbolo “+”)|
|Security Groups|Seleziona il gruppo di sicurezza per l’istanza (autorizzazione all’apertura delle porte)|
|Networks|Seleziona dalla lista la rete o le reti tra quelle disponibili|
|Configuration|Indica la sorgente inserendo direttamente lo script o caricando un file|
|Customization Script|Inserisci il codice dello script (massimo 16 KB)|
|Load Customization Script from a file|Seleziona lo script di post-installazione|
|Disk Partition|Scegli tra “Automatica” o “Manuale”|
|Configuration Drive|Configura OpenStack per scrivere i metadati su un disco di configurazione specifico che all’avvio sarà associato all’istanza.|

> [!warning] 
>
> Anche se il campo "Key Pair" non è obbligatorio nell'interfaccia Horizon durante la creazione di un'istanza, la registrazione di una chiave SSH è assolutamente necessaria per potersi connettere a un'istanza. Senza chiave SSH, dovrai riavviare l'istanza in modalità Rescue per creare una password o aggiungere una chiave SSH nel file appropriato (per maggiori informazioni, consulta la guida [Sostituisci la tua chiave SSH in caso di perdita](../sostituisci_la_tua_chiave_ssh_in_caso_di_perdita/#procedura)).
>

Quando tutto è pronto, clicca su `Launch Instance`{.action} per avviare le istanze desiderate.

![createinstance](images/create-instance-step3.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.