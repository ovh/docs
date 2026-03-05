---
title: Creare uno Snapshot di un volume
excerpt: Come creare uno Snapshot di un disco aggiuntivo Public Cloud
updated: 2025-04-28
---

## Obiettivo

Un **Volume Snapshot** è un punto di recupero archiviato nello stesso cluster di storage del volume originale. Le operazioni di creazione e ripristino sono rapide, ma in caso di malfunzionamenti sul cluster è possibile che il volume e il Volume Snapshot non siano disponibili.<br>
La creazione di un Volume Snapshot non richiede che il volume sia scollegato dall'istanza.

Questa opzione non deve essere confusa con un **Volume Backup** è un'immagine creata a partire dal tuo volume, salvata nel cluster Object Storage della localizzazione del volume originale.
Questo livello di resilienza è ideale e permette di reagire rapidamente a qualsiasi incidente sul volume creando un altro volume a partire dal backup.<br>
Per creare un backup del volume è necessario scollegarlo dall'istanza. Per ulteriori informazioni su questa opzione, consultare questa [guida](/pages/public_cloud/compute/volume-backup).

Creare uno Snapshot di un volume aggiuntivo corrisponde generalmente a due obiettivi:

- effettuare backup in pochi click e conservarli per il tempo necessario;
- utilizzare lo snapshot come modello per lo stesso volume

**Questa guida ti mostra come creare uno Snapshot di un volume dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Un volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) creato nel tuo progetto [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedura

Apri `Block Storage`{.action} nel menu a sinistra sotto **Storage e Backup**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra del volume interessato e seleziona `Crea un backup`{.action} (non è necessario scollegare prima il volume dalla relativa istanza). Per scollegare un volume, consulta la sezione "Scollega un volume" di [questa guida](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance).

È necessario selezionare `Volume Snapshot`{.action}, assegnargli un nome e cliccare su `Creare il backup`{.action}.

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

Clicca sul pulsante `...`{.action} per eliminare uno Snapshot o `Creare un volume`{.action} a partire dallo Snapshot corrispondente. Per maggiori informazioni, consulta [questa guida](/pages/public_cloud/compute/create-volume-from-snapshot).

## Per saperne di più

[Creare un backup di un volume](/pages/public_cloud/compute/volume-backup)

[Creare un volume a partire da un backup](/pages/public_cloud/compute/create-volume-from-snapshot)

[Crea e configura un disco aggiuntivo sulla tua istanza](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Aumenta la spazio del tuo disco aggiuntivo](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Contatta la nostra [Community di utenti](/links/community).