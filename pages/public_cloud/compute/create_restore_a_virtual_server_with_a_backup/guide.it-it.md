---
title: 'Crea/ripristina il tuo server virtuale da un backup'
excerpt: 'Crea/ripristina il tuo server virtuale da un backup'
legacy_guide_number: g1882
updated: 2021-03-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 19/03/2021**

## Obiettivo

Lo Spazio Cliente OVHcloud ti permette di creare i [backup delle tue istanze](/pages/public_cloud/compute/save_an_instance) in pochi click e automatizzare questo processo.
Ripristinare un’istanza utilizzando un backup è necessario, ad esempio, se hai effettuato un’operazione scorretta sulla sua configurazione o semplicemente per crearne una nuova. Puoi utilizzare questi backup di istanze per due ragioni principali:

- Creare un'istanza basata sul backup per duplicare l'istanza di origine ad esempio, se configuri un'infrastruttura di load balancing.
- Ripristinare un'istanza a partire da un backup Ad esempio, se le modifiche recenti hanno interrotto le configurazioni critiche sull'istanza.

**Questa guida ti mostra come duplicare o ripristinare le istanze utilizzando i backup.**

## Prerequisiti

- Disporre del backup di un’istanza Public Cloud A questo proposito, consulta [la guida dedicata alla creazione di un backup](/pages/public_cloud/compute/save_an_instance)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Crea un’istanza a partire da un backup

Accedi allo [Spazio Cliente[e seleziona `Public Cloud`{.action}. Clicca su `Instance Backup`{.action} nel menu a sinistra.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

e clicca sui `...`{.action} a destra del tuo backup e infine su `Crea un’istanza`{.action}.

Si apre una versione abbreviata della pagina di creazione dell'istanza nella quale è possibile modificare alcune opzioni.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Alcuni elementi sono predefiniti:

- **Localizzazione**: la tua istanza sarà creata nello stesso datacenter del tuo backup.
- **Immagine**: corrisponderà al tuo backup.
- **Modello**: saranno disponibili solo quelli che possono ospitare la tua immagine, in base alla tua quota.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Definisci il nome della nuova istanza, la chiave SSH, la vRack e il periodo di fatturazione, poi clicca sul pulsante `Crea l'istanza`{.action}.

Per maggiori informazioni sulla creazione di un’istanza, consulta [questa guida](/pages/public_cloud/compute/public-cloud-first-steps#step-3-crea-unistanza/).

> [!primary]
>
> Per creare un’istanza in un datacenter diverso da quello del backup, è necessario trasferirla nell’area corrispondente. Consulta quindi la [guida sul trasferimento del backup di un’istanza tra datacenter](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>

### Ripristinare un’istanza a partire da un backup

Accedi allo [Spazio Cliente[e seleziona `Public Cloud`{.action}. Clicca sulle `istanze`{.action} nel menu a sinistra.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'istanza che vuoi ripristinare e clicca su `Modifica`{.action}.

Visualizzi la pagina di modifica dell’istanza dalla quale è possibile modificare:

- Nome dell'istanza
- Immagine dell'istanza
- Modello dell’istanza
- La fatturazione dell’istanza (soltanto da “Oraria” a “Mensile”).

Effettua le modifiche necessarie e seleziona la scheda `Backup`{.action} nella sezione "Immagine".

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Seleziona un backup nella lista dei backup disponibili. Clicca su `Modifica l'immagine`{.action} se vuoi sostituire l'immagine corrente con il backup.

L'istanza avrà lo stato di `reinstallazione` fino al completamento del processo. Potrebbe essere necessario aggiornare la pagina nel browser per visualizzare lo stato attuale.

> [!warning]
>
> Come indicato nel riquadro giallo, la tua istanza non conserverà i dati generati dopo la creazione di questo backup.
>

## Per saperne di più

[Creazione e connessione a una prima istanza Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Effettuare lo Snapshot di un'istanza](/pages/public_cloud/compute/save_an_instance)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
