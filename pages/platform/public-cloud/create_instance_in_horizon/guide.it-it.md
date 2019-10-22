---
title: 'Creare un’istanza dall’interfaccia Horizon'
slug: crea_unistanza_con_horizon
excerpt: 'Come creare un’istanza dall’interfaccia Horizon'
section: 'Dall’interfaccia Horizon'
legacy_guide_number: g1772
---

**Ultimo aggiornamento: 21/08/2019**

## Obiettivo

In alcuni casi potrebbe essere necessario creare istanze direttamente dall’interfaccia Horizon: questa operazione permette, ad esempio, di aggiungere più istanze contemporaneamente o configurare gruppi di sicurezza specifici da applicare alle istanze.

**Questa guida ti mostra come creare un’istanza dall’interfaccia Horizon**.

## Prerequisiti

- Disporre di un progetto [Public Cloud OVH](https://www.ovh.it/public-cloud/){.external}
- [Essere connesso all’interfaccia Horizon](https://docs.ovh.com/it/public-cloud/crea_un_utente_per_accedere_a_horizon/){.external} 

## Procedura

Per avviare la creazione di un’istanza, accedi all’interfaccia Horizon. Se hai bisogno di aiuto per effettuare questa operazione, consulta la guida [Creare un utente per accedere a Horizon](https://docs.ovh.com/it/public-cloud/crea_un_utente_per_accedere_a_horizon/){.external}.

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
|Load Customization Script from a fi|Seleziona lo script di post-installazione|
|Disk Partition|Scegli tra “Automatica” o “Manuale”|
|Configuration Drive|Configura OpenStack per scrivere i metadati su un disco di configurazione specifico che all’avvio sarà associato all’istanza.|

Quando tutto è pronto, clicca su `Launch Instance`{.action} per avviare le istanze desiderate.

![createinstance](images/create-instance-step3.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.