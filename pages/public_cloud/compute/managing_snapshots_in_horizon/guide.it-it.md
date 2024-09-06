---
title: Gestisci gli snapshot di un’istanza con Horizon
excerpt: Gestisci gli snapshot di un'istanza con Horizon
updated: 2024-09-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Durante la tua attività, potresti avere bisogno di eseguire un backup dei tuoi dati, delle tue configurazioni o di tutte le tue istanze.
Creando degli snapshot, puoi effettuare una copia della tua istanza o ripristinare sulla tua istanza una configurazione precedente.

**Questa guida ti mostra come gestire gli Snapshot dall'interfaccia OpenStack Horizon.**

## Prerequisiti

- Aver [creato un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#step-3-crea-unistanza) nel tuo account OVHcloud
- [Accedere all’interfaccia Horizon](/pages/public_cloud/compute/introducing_horizon)

## Procedura

### Crea lo Snapshot

Accedi all'interfaccia Horizon e assicurati di essere nella regione giusta. Potete controllarlo in alto a sinistra. 

![Selezione della Region](images/region2021.png){.thumbnail}

Clicca sul menu `Compute`{.action} a sinistra e poi su `Instances`{.action}. Clicca su `Create Snapshot`{.action} sulla riga dell'istanza corrispondente.

![Create Snapshot](images/createsnapshot.png){.thumbnail}

Nella nuova finestra inserisci le informazioni richieste:

* Snapshot Name: definisci un nome per lo snapshot e clicca su `Create Snapshot`{.action}.

![Create Snapshot](images/createsnapshot2.png){.thumbnail}

Lo Snapshot sarà successivamente elencato nella sezione `Images`{.action}. Ti consigliamo di assegnare un nome esplicito a ogni Snapshot.

### Ripristino uno snapshot

È possibile ripristinare uno snapshot creando una nuova istanza a partire da essa.

Nell’interfaccia di Horizon, clicca sul menu `Compute`{.action} a sinistra e poi su `Images`{.action}.

Clicca su `Launch`{.action} in corrispondenza dello Snapshot selezionato.

![restore snapshot](images/restoresnapshot.png){.thumbnail}

Per completare il ripristino dello Snapshot, nella finestra pop-up è necessario selezionare un certo numero di opzioni.

> [!tabs]
> **Details**
>>
>> **Nome istanza (*Instance name*):** Specificare il nome desiderato per l’istanza.<br>
>> **Count:** Seleziona il numero di istanze da avviare dallo Snapshot.<br><br>
>>![snapshot](images/restoresnapshot1.png){.thumbnail}<br>
>>
> **Flavor**
>>
>> Selezionate il *flavor* desiderato. Assicurati di selezionare una versione con risorse uguali o superiori alle dimensioni dell'immagine (snapshot).<br><br><br>
>>![network](images/restoresnapshot2.png){.thumbnail}<br>
>>
> **Rete (*Network*)**
>>
>> Seleziona una rete pubblica (Ext-Net) da associare all’istanza.<br><br>
>>![network](images/restoresnapshot3.png){.thumbnail}<br>
>>
> **Keypair**
>>
>> Selezionare (3), creare (1) o importare (2) una coppia di chiavi.<br><br>
>>![network](images/restoresnapshot4.png){.thumbnail}<br>
>>

Clicca su `Launch Instance`{.action} per avviare la creazione dell’istanza.

### Elimina uno Snapshot

Nell'interfaccia horizon, clicca sul menu `Compute`{.action} a sinistra e poi su `Images`{.action}.

Clicca sulla freccia a tendina accanto allo Snapshot da eliminare e clicca su `Delete Image`{.action}. Conferma l'eliminazione dello Snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
