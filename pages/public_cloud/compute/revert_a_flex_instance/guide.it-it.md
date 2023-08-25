---
title: Passare da un'istanza flex a un'istanza classica
excerpt: Come modificare un'istanza flex dall'interfaccia OpenStack Horizon
updated: 2021-11-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


## Obiettivo

Un'istanza *flex* è un'istanza a disco unico (50 GB) che offre un processo più rapido per gli Snapshot. Permette un ridimensionamento verso modelli superiori o inferiori con spazio di storage fisso, mentre i modelli classici possono essere ridimensionati solo verso modelli superiori.</br> Con un'infrastruttura in costante evoluzione, potresti aver bisogno di aumentare lo spazio di storage della tua istanza. In questo caso, è necessario spostare l'istanza *flex* verso un modello classico. Questa operazione è possibile solo dall'interfaccia Horizon.

</br>**Questa guida ti mostra come passare da un modello *flex* a un modello classico e ridimensionare la tua istanza *flex* dall'interfaccia OpenStack Horizon.**

## Prerequisiti

- Disporre di un'[istanza Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#step-3-crea-unistanza) di tipo *flex*
- [Crea un accesso all'interfaccia Horizon](/pages/public_cloud/compute/introducing_horizon)

## Procedura

Accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/) e assicurati di essere nella regione corretta. Puoi verificarlo nell'angolo in alto a sinistra.

![Selezione della Region](images/region2021.png){.thumbnail}

Clicca sul menu `Compute`{.action} a sinistra e seleziona `Instances`{.action}. Seleziona `Resize Instance`{.action} nel menu a tendina a destra dell'istanza.

![Ridimensionare istanza](images/resizeinstance2021.png){.thumbnail}

**Scelta del template (*Flavor Choice*)** <a name="flavorchoice"></a>

Questa sezione indica il template attuale (*old flavor*) e ti permette di selezionare un nuovo template (*new flavor*) per la risorsa dell'istanza.

Nel nostro esempio, il nostro template è « b2-15-flex ». Possiamo tornare a un template classico « b2-15 » o aggiornare l'istanza verso il template « b2-30 » per avere più spazio di storage. Nel nostro caso, vorremmo aggiornare la nostra istanza verso il modello classico « b2-30 x per aumentare lo spazio di storage.

![Scegli un nuovo flavor](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Puoi passare da un modello Linux a un altro modello Linux e da un modello Windows a un altro modello Windows.
>
> - L'opzione *flex* non è disponibile per tutti i modelli.
>

**Opzioni avanzate (*Advanced Options*)**

Questa sezione permette di gestire il partizionamento del disco (*Disk Partition*) e del gruppo di server (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Per continuare, clicca sul pulsante `Resize`{.action}.

Una volta terminato il processo, la nostra istanza sarà migrata verso un modello classico con più spazio di storage.

![Nuova flavor applicata](images/newflavor.png){.thumbnail}

Se vuoi passare a un modello *flex*, puoi farlo eseguendo gli stessi passaggi menzionati [sopra](#flavorchoice) selezionando un template *flex* invece di un template classico. 

È inoltre possibile [modificare la configurazione dell'istanza](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#modifica-la-configurazione-dellistanza) dallo Spazio Cliente.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.