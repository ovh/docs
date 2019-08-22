---
title: 'Migrare un account email con OVH Mail Migrator'
slug: migrazione-account-email-con-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: 'Scopri come migrare i tuoi account di posta elettronica verso OVH grazie al nostro tool OVH Mail Migrator'
section: 'Migrazione di account'
---

** Ultimo aggiornamento: 05/09/2018 **

## Obiettivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} è uno strumento creato per consentirti di migrare i tuoi account di posta elettronica verso OVH. Il processo include diversi tipi di contenuti, come email, contatti, calendari e task, a seconda della compatibilità con i tuoi indirizzi email.

**Questa guida ti mostra come migrare i tuoi account email verso OVH grazie ad OVH Mail Migrator.**

## Prerequisiti

- Disporre di un account email OVH come le soluzioni [Exchange](https://www.ovh.it/emails/){.external}, [Email Pro](https://www.ovh.it/emails/email-pro/){.external} o MX Plan (all'interno di un piano MX Plan o in una [soluzione di hosting Web](https://www.ovh.it/hosting-web/){.external})
- Disporre delle credenziali relative agli account email da migrare
- Disporre delle credenziali relative agli account e-mail OVH che ricevono i dati migrati (gli account di destinazione).

## Procedura

[OVH Mail Migrator](https://omm.ovh.net/){.external} consente di effettuare tre diversi tipi di migrazione:

|Tipo di migrazione|Descrizione|
|---|---|
|Migrazione unica|Consente di migrare il contenuto di un indirizzo email verso un altro indirizzo email. Questa soluzione è indicata per migrare uno o più account (gli step devono essere ripetuti per ogni indirizzo migrato).|
|Migrazione per file|Consente di migrare il contenuto di un indirizzo email, precedentemente salvato in un file, verso un altro indirizzo email. I formati ammessi sono PST, ICS e VCF.|
|Progetto di migrazione multipla|Consente di effettuare diverse migrazioni in un solo progetto. Questa soluzione è per agli utenti che hanno la necessità di migrare una sequenza consecutiva di indirizzi.|

Prosegui la lettura di questa guida in base alla migrazione più adatta al tuo progetto.

### Realizza una migrazione unica

Una volta connesso alla pagina <https://omm.ovh.net/>, scorri il mouse sulla scheda  `Migrazione`{.action} nella barra del menu in alto e clicca su `Nuova migrazione`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Completa la pagina con le informazioni richieste per ogni sezione.

- **Account**: inserisci le informazioni dell’**account di origine** e dell'**account di destinazione**. Ti ricordiamo che il contenuto dell’**account di origine** sarà migrato verso l'**account di destinazione**.

|Informazione|Descrizione|
|---|---|
|Tipo di server|Seleziona il tipo di server corrispondente ai tuoi account. Se uno dei due è un indirizzo OVH, **Hosted by OVH (Autodetect)** può consentirti di completare automaticamente alcune informazioni.|
|URL del server|Inserisci l’indirizzo del server in cui sono ospitati i tuoi account. Questo campo può essere completato automaticamente durante la scelta del tipo di server. |
|Login|Inserisci l’indirizzo email completo dei tuoi account. |
|Account admin con delega|Questo campo appare soltanto con certi tipi di server.|
|Password|Digita la password associata all’account.|

- **Opzioni**: seleziona gli elementi da migrare. Certi contenuti potrebbero non essere disponibili in base al tipo di server scelto in precedenza.

- **Informazioni**: inserisci un indirizzo email sul quale vuoi ricevere le notifiche riguardo alla migrazione.

Una volta inserite le informazioni richieste, clicca sul pulsante `Inizia la migrazione`{.action}. Se tutti i dati inseriti sono corretti, il processo di migrazione avrà inizio.

La pagina che appare riporta nel dettaglio l’andamento della migrazione. Prendi nota dell’`ID della migrazione`{.action} e attendi il termine del processo, che avrà una durata diversa a seconda del numero degli elementi da migrare. Nel seguente paragrafo spieghiamo come monitorare lo stato di una migrazione unica.

### Monitora lo stato di una migrazione unica

Esistono due percorsi per accedere al monitoraggio di una migrazione unica:

- attraverso l’email ricevuta che ti informa dell’inizio della migrazione;
- accedendo alla pagina del tool <https://omm.ovh.net/>, facendo scorrere il mouse sulla scheda `Migrazione`{.action} nella barra del menu in alto e poi cliccando su `Monitora/Sincronizza`{.action}. Inserisci l’`ID della migrazione`{.action} e l’`Account di origine`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

La nuova pagina ti consente di seguire l’avanzamento della migrazione. Inoltre, un messaggio ti indica se il processo sta per cominciare, è in corso o è terminato.  A seconda dello stato, sono possibili diverse azioni:

|Azione|Descrizione|
|---|---|
|Interrompi il processo|Consente di annullare la migrazione, conservando gli elementi già migrati su un account di destinazione.|
|Rimuovi gli elementi migrati|Consente di eleminare gli elementi già migrati verso l’account di destinazione. Puoi cancellare alcuni elementi a partire da un punto di sincronizzazione specifico.|
|Sincronizza|Consente di recuperare nuovi elementi non migrati durante una precedente sincronizzazione tra l’account di origine e l’account di destinazione. Quest’azione equivale ad una migrazione degli elementi mancanti sull’account di destinazione rispetto all’account sorgente.|

### Realizza una migrazione per file

Connesso alla pagina <https://omm.ovh.net/>, scorri il mouse sulla scheda `Migrazione PST`{.action} nella barra del menu in alto e poi, a seconda della migrazione che vuoi realizzare, clicca su `Nuova migrazione PST`{.action}, `Nuova migrazione ICS`{.action} o `Nuova migrazione VCF`{.action}.

Per poter effettuare questo tipo di migrazione, è necessario che tu sia in possesso del file con il contenuto da migrare.

![omm](images/omm-migration-files.png){.thumbnail}

Inserisci le informazioni dell’**account di destinazione** poi clicca su `Inizia la migrazione`{.action}. Ti ricordiamo che il contenuto del file PST, ICS o VCF sarà migrato verso l’**account di destinazione**.

Se le informazioni inserite sono corrette, puoi selezionare il file sul tuo computer. Di seguito, clicca su `Upload`{.action} e rimani in attesa durante il download, che potrebbe richiedere un po’ di tempo a seconda della dimensione del file. Puoi consultare lo stato di avanzamento del download dalla stessa pagina.

Una volta terminato il download del file, inserisci nuovamente la password dell’**account di destinazione** poi clicca su `Inizia la migrazione`{.action}. Se le informazioni inserite sono corrette, puoi avviare la migrazione cliccando di nuovo su` Inizia la migrazione`{.action}.

La pagina che appare riporta nel dettaglio l’andamento della migrazione. Prendi nota dell’`ID della migrazione`{.action} e attendi il termine del processo, che avrà una durata diversa a seconda del numero degli elementi da migrare. Nel seguente paragrafo spieghiamo come monitorare lo stato di una migrazione per file.

### Monitora lo stato di una migrazione per file

Esistono due percorsi per accedere al monitoraggio di una migrazione per file PST, ICS o VCF:

- attraverso l’email ricevuta che ti informa dell’inizio della migrazione;

- accedendo alla pagina del tool <https://omm.ovh.net/>, facendo scorrere il mouse sulla scheda `Migrazione`{.action} nella barra del menu in alto e poi cliccando su `Monitora/Sincronizza`{.action}. Inserisci l’`ID della migrazione`{.action} e l’`Account di destinazione`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

La nuova pagina ti consente di seguire l’avanzamento della migrazione. Inoltre, un messaggio ti indica se il processo sta per cominciare, è in corso o è terminato.  A seconda dello stato, sono possibili diverse azioni:

|Azione|Descrizione|
|---|---|
|Interrompi il processo|Consente di annullare la migrazione, conservando gli elementi già migrati su un account di destinazione.|
|Rimuovi gli elementi migrati|Permette di eleminare gli elementi già migrati verso l’account di destinazione.|

### Realizza e monitora una progetto di migrazione multipla

Una volta connesso alla pagina <https://omm.ovh.net/>, scorri il mouse sulla scheda `Progetto`{.action} nella barra del menu in alto e clicca su `Nuovo progetto di migrazione multipla`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Inserisci le informazioni relative al **Nuovo Progetto**:

|Informazione|Descrizione|
|---|---|
|Nome|Assegna un nome al tuo progetto di migrazione.|
|Password del progetto|Aggiungi una password per il tuo progetto in modo da poterlo per gestire dal tool OVH Mail Migrator.|
|Email|Inserisci un indirizzo email che sarà utilizzato per seguire gli aggiornamenti e reimpostare la password.|

Poi clicca su `Crea il progetto`{.action}. La nuova pagina ti permette di gestire e seguire il tuo progetto di migrazione. Prendi nota dell’**Identificativo del progetto di migrazione**.

Da questo momento puoi avviare la migrazione dei tuoi account e accedere a diverse schede:

|Scheda|Descrizione|
|---|---|
|Continua|Consente di seguire l’avanzamento delle migrazioni del tuo progetto. Un pulsante ti dà anche la possibilità di mettere in attesa e riprendere le migrazioni.|
|Creazione multipla|Consente di aggiungere alla coda d’attesa diverse migrazioni grazie all’importazione di un file (CSVo Excel), il quale deve rispettare una formattazione specifica; ti consigliamo di utilizzare i modelli forniti.|
|Aggiungi|Consente di aggiungere migrazioni alla coda d’attesa, una per una. Tuttavia, puoi conservare i server di origine e quelli di destinazione come impostazione predefinita.|
|Opzioni|Consente di personalizzare gli elementi da migrare con OVH Mail Migrator, così come il numero di richieste simultanee che il tool può effettuare quando realizza le migrazioni.|
|Disconnessione|Consente di disconnettersi dalla pagina di monitoraggio del progetto, dando la possibilità di identificarsi per monitorare un altro eventuale progetto di migrazione.|

Se vuoi accedere nuovamente al monitoraggio del tuo progetto di migrazione, connettiti alla pagina <https://omm.ovh.net/>, scorri il mouse sulla scheda `Progetto`{.action} nella barra del menu in alto e poi clicca su `Segui un progetto`{.action}. Inserisci l’`Identificativo del progetto di migrazione`{.action} e la `Password`{.action} associata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
