---
title: Ridimensiona un’istanza
excerpt: Ridimensiona un'istanza dallo Spazio Cliente OVHcloud
slug: resize-an-instance-manager
section: Gestione dallo Spazio Cliente OVHcloud
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/08/2022**

## Obiettivo

In seguito allo sviluppo della tua attività o semplicemente all’evoluzione delle tue esigenze, è possibile che le risorse della tua istanza non siano più sufficienti per rispondere alle tue necessità. Con il Public Cloud, puoi aumentare le risorse della tua istanza in modo semplice e veloce.

**Questa guida ti mostra la procedura da seguire per ridimensionare l'istanza dallo Spazio Cliente OVHcloud.**

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

- Disporre di un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) sul proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), alla sezione `Public Cloud`{.action}, seleziona il tuo progetto. Clicca sulle `istanze`{.action} nel menu a sinistra. 

Clicca sui tre puntini `...`{.action} a destra dell'istanza e seleziona `Modifica`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

Nella nuova scheda, fai scorrere la pagina fino alla sezione **Modello** per selezionare il modello che preferisci.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> Per i modelli classici, puoi passare a qualsiasi modello con dischi simili o più grandi. Non puoi passare a un modello con un disco più piccolo.<br/>
>
> Solo **le istanze flessibili** possono essere aggiornate e retrogradate mantenendo una dimensione di disco fissa di 50 GB.
>

Se il tuo disco è uguale o inferiore a 50 GB, puoi passare a un'`istanza flessibile`{.action} se vuoi.

> [!warning]
> Attenzione: nel caso di un'istanza di tipo *flex*, non è possibile passare verso un'istanza classica attraverso lo Spazio Cliente. Per maggiori informazioni, consulta la nostra guida [Passare da un’istanza flex a un’istanza classica](https://docs.ovh.com/it/public-cloud/modificare-un-istanza-flex/).
>

Una volta effettuata la selezione, clicca su `Modifica il modello`{.action} per confermare la tua scelta.

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