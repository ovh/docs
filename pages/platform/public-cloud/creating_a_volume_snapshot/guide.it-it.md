---
title: Creare uno Snapshot di un volume
slug: creating-volume-snapshot
excerpt: Come creare uno Snapshot di un disco aggiuntivo Public Cloud
section: Storage
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 13/01/2023**

## Obiettivo

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

A destra del volume interessato, clicca sui tre puntini `...`{.action} e poi su `Crea uno Snapshot`{.action} (non è necessario scollegare prima il volume dell'istanza).

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

Clicca sul pulsante `...`{.action} per eliminare uno Snapshot o `Creare un volume`{.action} a partire dallo Snapshot corrispondente. Per maggiori informazioni, consulta [questa guida](../creare-volume-da-backup/).

## Per saperne di più

[Creare un volume a partire da un backup](../creare-volume-da-backup/)

[Crea e configura un disco aggiuntivo sulla tua istanza](../crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza/)

[Aumenta la spazio del tuo disco aggiuntivo](../aumenta_la_spazio_del_tuo_disco_aggiuntivo/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.