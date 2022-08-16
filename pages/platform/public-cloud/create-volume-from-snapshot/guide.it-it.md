---
title: Creare un volume a partire da un backup
slug: creare-volume-da-backup
excerpt: Come creare dischi aggiuntivi a partire da un backup di un disco supplementare
section: Storage
order: 4
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 02/04/2021**

## Obiettivo

Per creare dischi aggiuntivi per le tue istanze Public Cloud è possibile utilizzare il backup di un disco supplementare.

Ciò può essere utile nei seguenti casi:

- Per ripristinare i dati del disco aggiuntivi
- Per avere uno spazio di storage high availability e performante con i tuoi dati
- Spostare i dati verso un'altra istanza

**Scopri come creare e configurare un disco aggiuntivo su una delle tue istanze tramite il backup di un disco.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
- Disporre di un'[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external} sul proprio account OVHcloud
- Disco nella stessa Region OpenStack
- Avere accesso alla tua istanza via SSH come amministratore (root)

## Procedura

### Crea il disco a partire da un backup

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto. Clicca su `Volume Snapshot`{.action} nella barra di navigazione di sinistra sotto `Storage`.

A destra del backup che preferisci, clicca sul pulsante `...`{.action} e poi su `Crea un volume`{.action}.

![crea volume](images/volume01.png){.thumbnail}

Inserisci il nome del nuovo disco e la sua capacità e clicca su `Crea il volume`{.action}.

![crea volume](images/volume02.png){.thumbnail}

La creazione del disco potrebbe richiedere alcuni minuti, a seconda della sua dimensione.

### Associa il disco a un'istanza

Una volta creato il disco, puoi decidere di associarlo a un'istanza. clicca su `Block Storage`{.action} nella barra di navigazione di sinistra su `Storage`.

A destra del volume scelto, clicca sul pulsante `...`{.action} e poi su `Associa all'istanza`{.action}.

![associare volume](images/volume03.png){.thumbnail}

Seleziona l'istanza e clicca su `Conferma`{.action} per associare il disco.

![associare volume](images/volume04.png){.thumbnail}

Il processo di associazione del disco all'istanza sta per iniziare e potrebbe richiedere alcuni minuti.

![associare volume](images/volume05.png){.thumbnail}

> [!warning]
Evitare la navigazione fuori dalla scheda in corso durante l'associazione del disco. Ciò può interrompere il processo.
>

Una volta effettuato l'associazione, puoi seguire gli step successivi [con Linux](../crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza/#da-linux) o [Windows](../crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza/#da-windows).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
