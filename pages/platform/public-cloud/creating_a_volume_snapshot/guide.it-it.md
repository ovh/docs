---
title: Creare uno Snapshot di un volume
excerpt: Come creare uno Snapshot di un disco aggiuntivo Public Cloud
updated: 2023-04-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 21/04/2023**

## Obiettivo

Un **Volume Snapshot** è un punto di recupero archiviato nello stesso cluster di storage del volume originale. Le operazioni di creazione e ripristino sono rapide, ma in caso di malfunzionamenti sul cluster è possibile che il volume e il Volume Snapshot non siano disponibili.<br>
La creazione di un Volume Snapshot non richiede che il volume sia scollegato dall'istanza.

Questa opzione non deve essere confusa con un **Volume Backup** è un'immagine creata a partire dal tuo volume, salvata nel cluster Object Storage della localizzazione del volume originale.
Questo livello di resilienza è ideale e permette di reagire rapidamente a qualsiasi incidente sul volume creando un altro volume a partire dal backup.<br>
Per creare un backup del volume è necessario scollegarlo dall'istanza. Per ulteriori informazioni su questa opzione, consultare questa [guida](/pages/platform/public-cloud/volume-backup).

Creare uno Snapshot di un volume aggiuntivo corrisponde generalmente a due obiettivi:

- effettuare backup in pochi click e conservarli per il tempo necessario;
- utilizzare lo snapshot come modello per lo stesso volume

**Questa guida ti mostra come creare uno Snapshot di un volume dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Un volume [Block Storage](../crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza/) creato nel tuo progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto. Poi apri `Block Storage`{.action} nel menu a sinistra.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

A destra del volume interessato, clicca sui tre puntini `...`{.action} e poi su `Crea uno Snapshot`{.action} (non è necessario scollegare prima il volume dell'istanza). Se vuoi scollegare il tuo volume, consulta [questa sezione](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instancescollega-un-volume/#con-linux) della relativa guida per Linux e [questa sezione](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instancescollega-un-volume/#con-linux) per Windows.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Nella nuova finestra, è possibile assegnare un nome diverso allo Snapshot. Leggi le tariffe e clicca su `Crea uno Snapshot`{.action}.

Il tempo di creazione dello Snapshot dipende dalla quantità di dati presenti sul volume, dall'utilizzo delle risorse dell'istanza al momento dello Snapshot e da altri fattori specifici dell'host.

Ti consigliamo quindi di effettuare Snapshot al di fuori dei tuoi orari di produzione.

Ecco alcune altre buone pratiche:

- evita di creare Snapshot nelle ore di punta (tra le 04.00 e le 22.00, ora di Parigi)
- installa l'agente qemu-guest se non lo fai o prova a disattivarlo se necessario;
- prova a non "sollecitare" troppo il server durante la fase di creazione dello Snapshot (limitazione degli I/O, consumo di RAM, ecc...).

Dato che uno Snapshot di volume è un clone su tutto il disco, avrà la dimensione massima del volume iniziale, indipendentemente dall'allocazione effettiva di spazio disco.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Apri la sezione `Volume Snapshot`{.action} nella barra di navigazione a sinistra. Una volta creato lo Snapshot, verrà aggiunto a questa tabella.

Clicca sul pulsante `...`{.action} per eliminare uno Snapshot o `Creare un volume`{.action} a partire dallo Snapshot corrispondente. Per maggiori informazioni, consulta [questa guida](/pages/platform/public-cloud/create-volume-from-snapshot).

## Per saperne di più

[Creare un backup di un volume](/pages/platform/public-cloud/volume-backup)

[Creare un volume a partire da un backup](/pages/platform/public-cloud/create-volume-from-snapshot)

[Crea e configura un disco aggiuntivo sulla tua istanza](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance)

[Aumenta la spazio del tuo disco aggiuntivo](/pages/platform/public-cloud/increase_the_size_of_an_additional_disk)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.