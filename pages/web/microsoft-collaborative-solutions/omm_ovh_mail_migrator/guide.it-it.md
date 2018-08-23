---
title: 'Migra i tuoi account email con OVH Mail Migrator'
slug: migrazione-account-email-con-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: 'Scopri come migrare i tuoi account di posta elettronica verso OVH grazie al nostro tool OVH Mail Migrator'
section: 'Migrazione di account'
---

**Ultimo aggiornamento: 23/08/2018**

## Obiettivo

[OVH Mail Migrator](https://omm.ovh.net){.external} è un tool creato da OVH. Esso consente di migrare i tuoi account di posta elettronica verso i tuoi indirizzi e-mail OVH. Il processo si occupa di diversi tipi di contenuto, quali e-mail, contatti, calendari e contatti, fintanto che questi ultimi siano compatibili con i tuoi indirizzi e-mail. 

**Scopri come migrare i tuoi account di posta elettronica verso OVH grazie al nostro tool OVH Mail Migrator**

## Prerequisiti

- Disporre di un servizio e-mail in OVH, come un’offerta [Exchange](https://www.ovh.it/emails/hosted-exchange/){.external}, [E-mail Pro](https://www.ovh.it/emails/email-pro/){.external}  o MX Plan (tramite l’offerta MX Plan o inclusa nell’offerta di [hosting web OVH](https://www.ovh.it/hosting-web/){.external} ).
- Disporre delle credenziali relative agli account e-mail che desiderate migrare (gli account sorgente).
- Disporre delle credenziali relative agli account e-mail OVH che ricevono i dati migrati (gli account di destinazione).

## Procedura

[OVH Mail Migrator](https://omm.ovh.net){.external} è accessibile dalla pagina [https://omm.ovh.net/](https://omm.ovh.net/). Esso gestisce tre tipi di migrazione e permette di seguirle. 

|Tipo di migrazione|Descrizione|
|---|---|
|Migrazione unica|Migra il contenuto di un indirizzo e-mail verso un altro indirizzo e-mail. Si consiglia questa soluzione per migrare uno o alcuni indirizzi (gli step devono essere ripetuti per ogni indirizzo migrato).|
|Migrazione per file|Migra il contenuto di un indirizzo e-mail, previamente salvato in un file, verso un altro indirizzo e-mail. I formati PST, ICS e VCF sono presi in carico qui. |
|Migrazione multipla (modalità progetto)|Consente di gestire diverse migrazioni in un solo progetto. Questa soluzione è destinata alle persone che desiderano migrare una sequenza consecutiva di indirizzi. |

Prosegui la lettura di questa guida in base alla migrazione più adeguata al tuo progetto. 

### Realizza una migrazione unica

una volta connesso alla pagina [https://omm.ovh.net](https://omm.ovh.net), scorri il mouse sulla scheda `Migrazione`{.action} nella barra dei menu in alto e clicca su `Nuova migrazione`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Sulla pagina che si apre, completa le informazioni richieste per ogni sezione. 

- **Account**: inserite le informazioni dell’account sorgente e dell’account di destinazione. Si ricorda che, il contenuto dell’account sorgente sarà migrato verso l’account di destinazione. 

|Informazione|Descrizione|
|---|---|
|Tipo di server|Seleziona il tipo di server corrispondente ai vostri account. Se uno dei due è un indirizzo OVH, Hosted by OVH (Autodetect) può consentirti di completare automaticamente alcune informazioni.|
|URL del server|Inserisci l’indirizzo del server in cui sono ospitati i tuoi account.  Questo campo può essere completato automaticamente durante la scelta del tipo di server.|
|Login|Inserisci l’indirizzo email completo dei tuoi account.|
|Account amministratore con delega |Questo campo appare soltanto con certi tipi di server.|
|Password|Digita la password associata all’account.|

- **Opzioni**: seleziona gli elementi che desiderate migrare.  Certi contenuti possono essere disponibili a seconda del tipo di server scelto in precedenza. 

- **Informazioni**: Inserisci un indirizzo e-mail che riceverà delle notifiche riguardo all’avanzamento del tuo progetto di migrazione. 

Una volta inserite le informazioni richieste, clicca sul pulsante Avviare la migrazione. Se queste ultime sono sono corrette, il processo avrà inizio. 

La pagina che appare espone nei dettagli il monitoraggio della migrazione. Ricordati di conservare lo username di migrazione mostrato e attendi il termine del processo; quest’ultimo varia a seconda del numero degli elementi da migrare. Se desideri accedere nuovamente al monitoraggio prosegui verso il modulo «Seguire il monitoraggio unico» qui di seguito. 

### Seguire una migrazione unica

Esistono due percorsi per accedere al monitoraggio di una migrazione unica: 

- dalla e-mail ricevuta che ti informa dell’inizio della migrazione.
- dalla pagina del tool [https://omm.ovh.net](https://omm.ovh.net), facendo scorrere il mouse sulla scheda `Migrazione`{.action} nella barra dei menù in alto e poi cliccando su `Seguire/Sincronizzare`{.action}. Dovrai inserire quindi lo username di `migrazione`{.action} e `l’Account`{.action} sorgente interessato. 

![omm](images/omm-migration-track.png){.thumbnail}

La pagina che si apre ti permette di seguire l’avanzamento della migrazione. Un messaggio ti indica che il processo sta per cominciare, è in corso o è terminato. A seconda dello stato, sono possibili più interazioni. 

|action|Descrizione|
|---|---|
|Interrompere il processo |Permette di annullare la migrazione Gli elementi già migrati saranno conservati su un account di destinazione.|
|Rimuovere gli elementi migrati|Permette di eleminare gli elementi già migrati verso l’account di destinazione. Puoi cancellare alcuni elementi a partire da un punto di sincronizzazione specifico.|
|Sincronizzare|Permette di recuperare nuovi elementi non migrati durante una precedente sincronizzazione tra l’account sorgente e l’account di destinazione.  Consideriamo quest’azione come una migrazione degli elementi mancanti sull’account di destinazione rispetto all’account sorgente.|

### Realizza una migrazione unica per file

Connesso alla pagina [https://omm.ovh.net](https://omm.ovh.net), scorri il mouse sulla scheda `PST/ICS/VCF`{.action} nella barra dei menù in alto alla pagina poi, a seconda della migrazione che desideri realizzare, clicca su `Nuova migrazione PST`{.action}, `Nuova migrazione ICS`{.action} o `Nuova migrazione VCF`{.action}. 

A questo punto dovrai essere in possesso del file con il contenuto da migrare. 

![omm](images/omm-migration-files.png){.thumbnail}

Sulla pagina che appare, inserisci le informazioni dell’account di destinazione poi clicca sul pulsante Avvia la migrazione. Si ricorda che, il contenuto dell’account sorgente sarà migrato verso l’account di destinazione. 

Se le informazioni inserite sono corrette, sarai invitato a selezionare il file sul tuo computer. In seguito, clicca su Upload e rimani in attesa durante il download; ciò potrebbe richiedere un po’ di tempo a seconda della dimensione del file. Puoi consultare lo stato di avanzamento del download da questa pagina.

Una volta terminato il download del file, inserisci nuovamente la password dall’account di destinazione poi clicca su Avviare la migrazione. Se le informazioni inserite sono corrette, potrai avviare la migrazione cliccando di nuovo sul pulsante Avviare la migrazione. 

La pagina che si apre espone nei dettagli il monitoraggio della migrazione.  Ricordati di conservare lo username di migrazione che appare e attendi il termine del processo; quest’ultimo varia a seconda del numero degli elementi da migrare.  Se desideri accedere nuovamente al monitoraggio prosegui verso il modulo «Seguire il monitoraggio per file» qui di seguito. 

### Realizza una migrazione unica per file

Esistono due percorsi per accedere al monitoraggio di una migrazione per file PST, ICS o VCF: 

- dalla e-mail ricevuta che ti informa dell’inizio della migrazione.

- dalla pagina del tool [https://omm.ovh.net](https://omm.ovh.net), facendo scorrere il mouse sulla scheda `Migrazione`{.action} nella barra dei menù in alto e poi cliccando su `Seguire/Sincronizzare`{.action}.  Dovrai inserire quindi lo username di `migrazione`{.action} e `l’Account`{.action} di destinazione interessato. 

![omm](images/omm-migration-track.png){.thumbnail}

La pagina che si apre ti permette di seguire l’avanzamento della migrazione. Un messaggio ti indica che il processo sta per cominciare, è in corso o è terminato. A seconda dello stato, sono possibili più interazioni. 

|action|Descrizione|
|---|---|
|Interrompere il processo |Permette di annullare la migrazione Gli elementi già migrati saranno conservati sull’account di destinazione.|
|Rimuovere gli elementi migrati|Permette di eleminare gli elementi già migrati verso l’account di destinazione.|

### Realizzare e seguire una migrazione multipla (modalità progetto)

una volta connesso alla pagina [https://omm.ovh.net](https://omm.ovh.net), scorri il mouse sulla scheda `Migrazione`{.action} nella barra dei menu in alto e clicca su `Nuova migrazione`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Sulla pagina che compare, completa le informazioni relative al Nuovo Progetto: 

|Informazione|Descrizione|
|---|---|
|Cognome|Attribuisci un nome al tuo progetto di migrazione.|
|Password|Aggiungi una password al tuo progetto in modo da poterlo per gestire dal tool OVH Mail Migrator.|
|Email|Inserisci un indirizzo e-mail che riceverà delle notifiche riguardo all’avanzamento del tuo progetto di migrazione.|

Poi clicca su Crea il progetto. La pagina che si apre ti permette di gestire e di seguire il tuo progetto di migrazione. Ricordati di conservare lo username del progetto visualizzato. 

Da questo momento puoi avviare la migrazione degli account. Per fare questo, puoi accedere a diverse schede: 

|Scheda|Descrizione|
|---|---|
|Continuare|Permette di seguire l’avanzamento delle migrazioni del tuo progetto.  Un pulsante ti offre anche la possibilità si mettere in attesa e riprendere le migrazioni.|
|Creazione multipla |Permettere di aggiungere alla lista d’attesa diverse migrazioni grazie all’importazione di un file (CSVo Excel). Quest’ultimo deve rispettare una formattazione specifica; ti consigliamo di utilizzare i modelli forniti.|
|Aggiungere |Permette di aggiungere account per account delle migrazioni alla lista d’attesa. Tuttavia puoi conservare i server sorgente e quelli di destinazione come valore predefinito.|
|Opzioni|Permette di personalizzare gli elementi che il tool OVH Mail Migrator deve migrare e il numero di richieste simultanee che il tool può effettuare quando realizza le migrazioni.|
|Disconnessione|Permette di disconnetterti dalla pagina di monitoraggio del progetto; ciò ti offre la possibilità di identificarti per seguire un altro eventuale progetto di migrazione.|

Se desideri accedere nuovamente al monitoraggio del tuo progetto di migrazione, connettiti alla pagina, scorri il mouse sulla scheda `Progetto`{.action} nella barra dei menu in alto e poi clicca su `Monitorare un progetto`{.action}. Dovrai inserire quindi lo `username del progetto`{.action} di migrazione e `la Password`{.action} ad esso associata. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.