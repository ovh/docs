---
title: 'Migrare un account email con OVH Mail Migrator'
slug: migrazione-account-email-con-ovh-mail-migrator
excerpt: 'Scopri come migrare i tuoi account di posta elettronica verso OVH grazie al nostro tool OVH Mail Migrator'
section: 'Migrazione account'
order: 03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/11/2021**

## Obiettivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} è uno strumento creato da OVHcloud. che permette di migrare i tuoi account email verso i tuoi indirizzi email OVHcloud o verso un servizio esterno di posta elettronica. Il processo include diversi tipi di contenuti, come email, contatti, calendari e task, a seconda della compatibilità con i tuoi indirizzi email.

**Questa guida ti mostra come migrare i tuoi account email verso OVHcloud grazie al nostro tool OVH Mail Migrator.**

## Prerequisiti

- Disporre di un account email OVH come le soluzioni [Exchange](https://www.ovhcloud.com/it/emails/){.external}, [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external} o MX Plan (all'interno di un piano MX Plan o in una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external})
- Disporre delle credenziali relative agli account email da migrare
- Disporre delle credenziali relative agli account e-mail OVH che ricevono i dati migrati (gli account di destinazione).

## Procedura

**OVH Mail Migrator** Gestisce 3 tipi di migrazione:

- [Migrazione unica](#standalone): Migrare un account email verso un altro account email. Questa soluzione è consigliata per migrare uno o più account email (gli step devono essere ripetuti per ogni indirizzo migrato).
- [Migrazione per file](#file): Migrare il contenuto di un account email, precedentemente recuperato in un file, verso un altro indirizzo email. I formati ammessi sono PST, ICS e VCF.
- [Migrazione multipla (modalità di progetto)](#project): Consente di effettuare diverse migrazioni in un solo progetto. Questa soluzione è per agli utenti che hanno la necessità di migrare una sequenza consecutiva di indirizzi.

### Migrazione unica <a name="standalone"></a>

#### Avvia la migrazione

Dalla pagina <https://omm.ovh.net/>, nella scheda `Migrazione`{.action}, clicca su `Nuova migrazione`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Completa la pagina con le informazioni richieste per ogni sezione.

- **Account**: inserisci le informazioni dell’**account di origine** e del **account di destinazione**. Ti ricordiamo che il contenuto dell’**account di origine** sarà migrato verso il **account di destinazione**.

|Campo|Descrizione|
|---|---|
|Tipo di server|Seleziona il tipo di server corrispondente ai tuoi account. Se uno di questi è un indirizzo OVHcloud, **Hosted by OVHcloud (Autodetect)**, ti permette di completare automaticamente le informazioni, ad eccezione della password.|
|URL del server|Inserisci l’indirizzo del server in cui sono ospitati i tuoi account. Questo campo può essere completato automaticamente durante la scelta del tipo di server. |
|Login|Inserisci l'indirizzo email completo.|
|Account admin con delega|Questo campo appare soltanto con certi tipi di server.|
|Password|Inserisci la password associata all’account|

- **Opzioni**: seleziona gli elementi da migrare. Certi contenuti potrebbero non essere disponibili in base al tipo di server scelto in precedenza.

- **Informazioni**: inserisci un indirizzo email per ricevere notifiche sullo stato di avanzamento della migrazione.

Clicca su `Avvia la migrazione`{.action} dopo aver completato tutti i campi. Se tutti i dati inseriti sono corretti, il processo di migrazione avrà inizio.

La pagina che appare riporta nel dettaglio l’andamento della migrazione. Prendi nota dell’`ID della migrazione`{.action} e attendi il termine del processo, che avrà una durata diversa a seconda del numero degli elementi da migrare. Nel seguente paragrafo spieghiamo come monitorare lo stato di una migrazione unica.

#### Monitorare la migrazione  

Esistono due percorsi per accedere al monitoraggio di una migrazione unica:

- tramite l'email ricevuta, che ti informa sullo stato di avanzamento della migrazione;
- dalla pagina <https://omm.ovh.net/>, nella scheda `Migrazione`{.action}, clicca su `Segui / Sincronizza`{.action}. Inserisci l’`ID della migrazione`{.action} e l’`Account di origine`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

La nuova pagina ti consente di seguire l’avanzamento della migrazione. Inoltre, un messaggio ti indica se il processo sta per cominciare, è in corso o è terminato.  A seconda dello stato, sono possibili diverse azioni:

- `Interrompi il processo `{.action}: Consente di annullare la migrazione, conservando gli elementi già migrati su un account di destinazione.
- `Elimina gli elementi migrati`{.action}: Consente di eleminare gli elementi già migrati verso l’account di destinazione. Puoi cancellare alcuni elementi a partire da un punto di sincronizzazione specifico.
- `Sincronizzare`{.action}: Consente di recuperare nuovi elementi non migrati durante una precedente sincronizzazione tra l’account di origine e l’account di destinazione. Quest’azione equivale ad una migrazione degli elementi mancanti sull’account di destinazione rispetto all’account sorgente.

### Migrazione per file <a name="file"></a>

#### Avvia la migrazione

Dalla pagina <https://omm.ovh.net/>, nella scheda `PST / ICS / VCF`{.action} in alto, clicca su `Nuova migrazione PST / ICS / VCF`{.action}.

In questo caso, è necessario disporre del file con il contenuto da migrare sull'account email.

![omm](images/omm-migration-files.png){.thumbnail}

Inserisci le informazioni dell’**Account di destinazione** poi clicca su `Inizia la migrazione`{.action}.

Se le informazioni inserite sono corrette, puoi selezionare il file sul tuo computer. Poi clicca sul pulsante `Upload`{.action} e attendi il download; in base alla dimensione del file, potrebbe richiedere un certo tempo. Puoi consultare lo stato di avanzamento del download dalla stessa pagina.

Una volta scaricato il file su OMM, inserisci nuovamente la password dell'**account di destinazione** e clicca su `Inizia la migrazione`{.action}. Se le informazioni inserite sono corrette, è possibile avviare la migrazione cliccando sul pulsante `Inizia la migrazione`{.action}.

La pagina che appare riporta nel dettaglio l’andamento della migrazione. Conserva l'`Identificativo della migrazione`{.action} visualizzato e attendi la fine della migrazione. il tempo è variabile in base al numero di elementi da migrare. Per visualizzare di nuovo il monitoraggio, clicca qui sotto.

#### Monitorare la migrazione

Esistono due percorsi per accedere al monitoraggio di una migrazione per file PST, ICS o VCF:

- dall'email ricevuta che ti informa dell'inizio della migrazione

- dalla pagina, <https://omm.ovh.net/> selezionando la scheda `Migrazione`{.action} nella barra del menu sopra la pagina e cliccando su `Segui / Sincronizza`{.action}. Inserisci l’`ID della migrazione`{.action} e l’`Account di destinazione`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

La nuova pagina ti consente di seguire l’avanzamento della migrazione. Inoltre, un messaggio ti indica se il processo sta per cominciare, è in corso o è terminato.  A seconda dello stato, sono possibili diverse azioni:

- Interrompi il processo: Consente di annullare la migrazione, conservando gli elementi già migrati su un account di destinazione.
- Elimina gli elementi migrati: Permette di eliminare gli elementi migrati sull'account di destinazione.

### Realizza e monitora una migrazione multipla (modalità progetto) <a name="project"></a>

Dalla pagina <https://omm.ovh.net/>, nella scheda `Progetto`{.action}, clicca su `Nuovo progetto di migrazione multipla`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Completa le informazioni relative al **Nuovo Progetto**:

- Assegna un nome al tuo progetto di migrazione.
- Una password per accedere all'interfaccia di monitoraggio del tuo progetto di migrazione.
- un indirizzo email per ricevere notifiche sullo stato di avanzamento del tuo progetto di migrazione.

Clicca su `Crea il progetto`{.action}. La pagina successiva ti permette di gestire e seguire il tuo progetto di migrazione. Tieni sotto **il numero del progetto** visualizzato.

![omm](images/omm-migration-project01.png){.thumbnail}

A questo punto puoi avviare la migrazione dei tuoi account. L'interfaccia contiene diverse schede:

- `Continua`: Permette di seguire lo stato di avanzamento delle migrazioni sul tuo progetto. Disponi di un pulsante che permette di mettere in attesa e riprendere le migrazioni in corso.

- `Creazione multipla`: Consente di aggiungere alla coda d’attesa diverse migrazioni grazie all’importazione di un file (CSVo Excel), Quest'ultimo deve rispettare una formattazione precisa; ti consigliamo di utilizzare i modelli forniti. Il file si presenta in questa forma:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

È preferibile aprirlo con un software di fogli elettronici per completarlo.

- `Aggiungi`: Consente di aggiungere migrazioni in coda, account per account. È possibile conservare i server sorgente e di destinazione come valori predefiniti.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Opzioni`: Consente di personalizzare gli elementi da migrare con OVH Mail Migrator, così come il numero di richieste simultanee che il tool può effettuare quando realizza le migrazioni.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Disconnessione`: Permette di disconnettersi dalla pagina di monitoraggio del progetto, senza conseguenze sullo svolgimento della migrazione.

Accedi alla pagina <https://omm.ovh.net/> del tuo progetto di migrazione, nella scheda `Progetto`{.action}, clicca su `Segui un progetto`{.action}. Inserisci l’`Identificativo del progetto di migrazione`{.action} e la `Password`{.action} associata.

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
