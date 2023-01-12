---
title: Ridimensiona un’istanza
excerpt: Ridimensiona un'istanza con Horizon
slug: ridimensiona_unistanza
legacy_guide_number: g1778
section: Gestione da Horizon
order: 08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 23/11/2021**

## Obiettivo

In seguito allo sviluppo della tua attività o semplicemente all’evoluzione delle tue esigenze, è possibile che le risorse della tua istanza non siano più sufficienti per rispondere alle tue necessità. Con il Public Cloud, puoi aumentare le risorse della tua istanza in modo semplice e veloce.

**Questa guida ti mostra la procedura da seguire per ridimensionare l'istanza dall'interfaccia OpenStack Horizon.**

> [!warning]
>
> Per i modelli classici è possibile solo il ridimensionamento verso un modello superiore.
> Questa operazione comporta anche l'interruzione dell'istanza durante l'operazione.
> 

> [!success]
>
> Le istanze di tipo *flex* permettono il ridimensionamento verso i modelli superiori o inferiori grazie a una dimensione di disco unica.
> 

## Prerequisiti

- [Aver creato un'istanza Public Cloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/#step-3-crea-unistanza) nel tuo account OVHcloud
- [Accedere all’interfaccia Horizon](../horizon/)

## Procedura

Accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/) e assicurati di essere nella regione corretta. Puoi verificarlo nell'angolo in alto a sinistra.</br>
Clicca sul menu `Compute`{.action} a sinistra e seleziona `Instances`{.action}. Seleziona `Resize Instance`{.action} nel menu a tendina a destra dell'istanza.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Scelta del template (*Flavor Choice*)

Questa sezione indica il template attuale (*old flavor*) e ti permette di selezionare un nuovo template (*new flavor*) per la risorsa dell'istanza.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Dettagli del template (*Flavor Details*)

In questa sezione vengono mostrate le risorse associate al template scelto. 

#### Limiti del Progetto (*Project Limits*)

Visualizza qui le risorse occupate rispetto alle risorse totali assegnate al progetto.

> [!warning]
> Non è possibile cambiare modelli durante il ridimensionamento di un'istanza. È possibile eseguire il ridimensionamento solo da un modello Linux a un altro modello Linux o da un modello Windows a un altro modello Windows.
>

### Opzioni avanzate (*Advanced Options*)

Questa sezione permette di gestire il partizionamento del disco (*Disk Partition*) e del gruppo di server (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Una volta terminata la configurazione, clicca su `Resize`{.action}.

### Ridimensionamento del disco con Windows

Attenzione: durante un ridimensionamento di un'istanza Windows, la dimensione della partizione non è automaticamente aggiornata, sarà quindi necessario estenderla utilizzando il **disk manager**:

- Clicca con il tasto destro sul menu `Start`{.action} e avviare il disk manager cliccando su `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

- Clicca con il tasto destro sulla partizione principale e poi su `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Clicca su `Next`{.action} per accedere al `Extend Volume Wizard`. Scegli le risorse del disco da estendere e clicca su `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Clicca su `Finish`{.action} per confermare la tua scelta.

![public-cloud](images/wizard2021.png){.thumbnail}

- La nuova dimensione del disco verrà visualizzata dal gestore del disco.

![public-cloud](images/2979.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.