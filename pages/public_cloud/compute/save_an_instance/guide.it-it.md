---
title: "Effettuare il backup di un'istanza"
excerpt: "Come eseguire le prime operazioni su un'istanza Public Cloud dallo Spazio Cliente OVHcloud"
updated: 2024-07-03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Crea un backup unico di un'istanza o configura una pianificazione per automatizzare i backup delle tue istanze. I backup possono essere utilizzati per ripristinare lo stato dell'istanza o per creare una nuova istanza identica.

**Questa guida ti mostra come creare backup manuali e automatici di un'istanza Public Cloud.**

## Prerequisiti

- Disporre di un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) sul proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Effettua un backup dell’istanza

> [!warning]
> Questa opzione è disponibile solo via **Cold Snapshot** per le istanze Metal. L'istanza Metal passerà in modalità Rescue e, una volta effettuato il backup, l'istanza sarà riavviata in modalità normale.
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e apri il tuo progetto `Public Cloud`{.action}. Clicca sulle `Instances`{.action} nel menu a sinistra.

Clicca sul pulsante `...`{.action} a destra dell'istanza e seleziona `Crea un backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Assegna un nome al backup nella nuova pagina. Leggi le tariffe e clicca su `Conferma`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Non è possibile monitorare l'avanzamento del backup in tempo reale. Tuttavia, nella sezione `Instance Backup`{.action} sotto `Storage`{.action} nel menu di sinistra, lo stato `Backup in corso...` verrà visualizzato durante il processo.

![public-cloud-instance-backup](images/backup_in_progress.png){.thumbnail}

Una volta terminato il backup, sarà disponibile nella sezione `Instance Backup`{.action} sotto `Storage`{.action} nel menu di sinistra.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Creare un backup automatizzato di un'istanza

Clicca sui tre puntini `...`{.action} a destra dell'istanza e seleziona `Crea un backup automatizzato`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Puoi configurare questi parametri di backup:

#### **Il workflow** 

Al momento esiste un unico workflow. Crea un backup per l'istanza e il suo volume principale.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **La risorsa** 

È possibile selezionare l'istanza da salvare.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **La pianificazione** 

È possibile definire una pianificazione di backup personalizzata o scegliere una delle frequenze predefinite:

- Backup giornaliero con retention degli ultimi 7 backup
- Backup giornaliero con retention degli ultimi 14 backup

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Il nome** 

Inserisci un nome per la pianificazione del backup automatico. Leggi le informazioni relative alla tariffazione e imposta il calendario cliccando sul pulsante `Crea`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Gestione di backup e pianificazione

Le pianificazioni possono essere create ed eliminate nella sezione `Workflow Management`{.action}, che si trova sotto `Storage`{.action} nel menu di sinistra.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

I backup delle istanze sono gestiti nella sezione `Instance Backup`{.action}, che si trova sotto `Storage`{.action} nel menu di sinistra.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> L’opzione di backup dell’istanza deve essere eliminata separatamente se non vuoi più che ti venga fatturata. L’eliminazione di un’istanza non comporta l’eliminazione delle opzioni ad essa associate.
>

> [!warning]
> **Si noti che non è possibile eliminare un backup dell'istanza se un'istanza creata da questo backup è in esecuzione al momento dell'azione di eliminazione.**

Questa guida ti mostra come utilizzare i backup per clonare o ripristinare le istanze in [questa guida](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Per saperne di più

[Crea/ripristina il tuo server virtuale da un backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.