---
title: 'Migrare un account Gmail verso OVHcloud con OVH Mail Migrator'
slug: migrazione-account-gmail-con-ovh-mail-migrator
excerpt: 'Questa guida ti mostra come migrare i tuoi account Gmail verso OVHcloud grazie al nostro tool OVH Mail Migrator.'
section: 'Migrazione di un account Exchange'
order: 3
---

**Ultimo aggiornamento: 03/02/2020**

## Obiettivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} è uno strumento creato per consentirti di migrare i tuoi account di posta elettronica da un hosting a un altro. Il processo include diversi tipi di contenuti, come email, contatti, calendari e task, a seconda della compatibilità con i tuoi account di posta elettronica OVHcloud. 

Questa guida ti spiega come utilizzare OMM per importare i vari elementi del tuo account Gmail verso un altro account di posta elettronica OVHcloud.

**Questa guida ti mostra come migrare i tuoi account Gmail verso un account di posta elettronica OVHcloud grazie al nostro tool OMM**.


## Prerequisiti

- Disporre di una soluzione email OVHcloud, come [Exchange](https://www.ovh.it/emails/){.external}, [Email Pro](https://www.ovh.it/emails/email-pro/){.external} o MX Plan (inclusa nel servizio MX Plan o in una [soluzione di hosting Web OVHcloud](https://www.ovh.it/hosting-web/){.external}).
- Disporre delle credenziali relative agli account email da migrare
- Disporre delle credenziali relative agli account e-mail OVHcloud che ricevono i dati migrati (gli account di destinazione).

## Procedura

### Step 1: esegui la migrazione di email e cartelle

> [!primary]
> Per rendere possibile la migrazione, è necessario attivare il protocollo IMAP sul tuo account Gmail. Per farlo, segui la guida di Google
> [come configurare IMAP per il tuo account Gmail](https://support.google.com/mail/answer/7126229?hl=it){.external}.

Una volta attivato IMAP, accedi a [OMM](https://omm.ovh.net/){.external}.

Clicca su `Migrazione`{.action} e poi su `Nuova migrazione`{.action}.

![omm](images/OMM-gmail-step01-01.png){.thumbnail}

Visualizzi la seguente finestra:

![omm](images/OMM-gmail-step01-02.png){.thumbnail}

Completa la tabella con le informazioni richieste per ogni sezione:

**Account di origine**

| Informazione            	| Descrizione                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Tipo di server         	| Seleziona **IMAP** nel menu a tendina.         									|
| URL del server          	| Inserisci **«imap.gmail.com»**.                       					 			  	|
| Login						| Inserisci il tuo indirizzo Gmail.															|
| Password				| Inserisci la password associata all’account Gmail.										|

**Account di destinazione**

| Informazione            	| Descrizione                                                                              							|
|------------------------	|-------------------------------------------------------------------------------------------------------------------|
| Tipo di server         	| Seleziona **“Hosted by OVH (Autodetect)”** nel menu a tendina.   											|
| URL del server          	| Questo campo è compilato automaticamente.                     					  		 							|
| Login						| Inserisci il tuo indirizzo email OVHcloud																			|
| Password				| Clicca su `rileva le impostazioni`{.action}e poi inserisci la password del tuo indirizzo email OVHcloud.	|

Nella sezione **Opzioni**, spunta la casella **”Mails”**, dato che le altre opzioni non sono disponibili in IMAP. La migrazione di contatti e calendari verrà realizzata negli Step 2 e 3.

![omm](images/OMM-gmail-step01-03.png){.thumbnail}

Nel riquadro **“Informazioni”**, inserisci un indirizzo email su cui riceverai una notifica dello stato di avanzamento della migrazione. Questo campo è facoltativo. Clicca su `Avvia la migrazione`{.action}

![omm](images/OMM-gmail-step01-04.png){.thumbnail}

A questo punto, compare una finestra con lo stato di avanzamento della migrazione (come mostrato qui di seguito). Puoi lasciarla aperta per seguire il processo di migrazione in tempo reale o chiuderla, e questo non inciderà in alcun modo sulla migrazione.

![omm](images/OMM-gmail-step01-06.png){.thumbnail}

> [!warning]
> All’avvio della migrazione, potresti visualizzare questi messaggi:

![omm](images/OMM-gmail-step01-05.png){.thumbnail}

In questo caso, accedi alla casella di posta in arrivo del tuo account Gmail e controlla se hai ricevuto l’email con oggetto: **“Avviso di sicurezza”** Si tratta di una misura di sicurezza adottata da Gmail. Per risolvere questa situazione, consulta la guida:  [Consentire alle applicazioni meno sicure di accedere al tuo account Gmail](../migrazione-account-gmail-con-ovh-mail-migrator/sicurezza-gmail/){.external}

Dopo aver **consentito l’accesso alle “applicazioni meno sicure”** su Gmail, puoi riavviare il processo di migrazione.

### Step 2: esegui la migrazione dei calendari

#### 2.1 Ripristina un backup del calendario su Gmail

Per importare il tuo calendario nel tuo account OVHcloud, recupera un backup del calendario dalla tua interfaccia Gmail. Per effettuare l’operazione, segui la guida ufficiale di Google :

[Come esportare i calendari per il tuo account Gmail](https://support.google.com/calendar/answer/37111?hl=it){.external}

Se disponi di più calendari sul tuo account Gmail, scarica un file di archivio da decomprimere. Ciascun calendario è disponibile in formato **.ics**.

#### 2.2 Importa il tuo calendario con OMM

> [!primary]
> La migrazione dei calendari tramite OMM è compatibile solo con gli account Exchange.

Dopo aver recuperato il backup del tuo calendario nel formato **.ics**, accedi a [OMM](https://omm.ovh.net/){.external}.

Clicca sulla scheda `PST/ICS/VCF`{.action} situata in alto e poi su `Nuova migrazione PST/ICS/VCF`{.action}.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Completa la tabella con le informazioni richieste per ogni sezione e poi clicca su `Avvia la migrazione`{.action}:

| Informazione            	| Descrizione                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Inserisci l’indirizzo email OVHcloud verso cui migrare il tuo calendario.           	|
| Password           	| Inserisci la password associata all’account di destinazione.                          	|
| Email di comunicazione 	| Inserisci un indirizzo email per ricevere notifiche sullo stato di avanzamento della migrazione e per riprendere il download di un file.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

 Clicca su `Scegli un file`{.action} per recuperare il file **.ics** del tuo calendario, dal tuo computer, e poi clicca su `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

A questo punto inserisci la password del tuo account di destinazione, quindi clicca su `Avvia la migrazione`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

A questo punto, compare una finestra con lo stato di avanzamento della migrazione (come mostrato qui di seguito). Puoi lasciarla aperta per seguire il processo di migrazione in tempo reale o chiuderla, e questo non inciderà in alcun modo sulla migrazione.

![omm](images/OMM-gmail-step02.png){.thumbnail}


### Step 3: esegui la migrazione dei contatti

> [!primary]
> La migrazione dei contatti tramite OMM è compatibile solo con gli account Exchange.

Per importare i tuoi contatti nel tuo account OVHcloud, recupera un backup dei contatti dalla tua interfaccia Gmail. Per effettuare l’operazione, segui la guida ufficiale di Google :

[Come esportare i contatti dal tuo account Gmail](https://support.google.com/contacts/answer/7199294?hl=it){.external}

> [!warning]
> L’esportazione deve essere effettuata nel formato vCard (**.vcf**) tramite l’interfaccia Gmail. Questa opzione ti viene proposta alla fine dell’esportazione.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Completa la tabella con le informazioni richieste per ogni sezione e poi clicca su `Avvia la migrazione`{.action}:

| Informazione            	| Descrizione                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Indica l’indirizzo email OVHcloud verso cui vuoi migrare i tuoi contatti.            	|
| Password           	| Inserisci la password associata all’account di destinazione.                          	|
| Email di comunicazione 	| Inserisci un indirizzo email per ricevere notifiche sullo stato di avanzamento della migrazione e per riprendere il download di un file.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

Clicca su `Scegli un file`{.action} per recuperare il file **.ics** dei tuoi contatti, dal tuo computer, e poi clicca su `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

A questo punto, inserisci la password del tuo account di destinazione, quindi clicca su `Avvia la migrazione`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

Compare una finestra con lo stato di avanzamento della migrazione. Puoi lasciarla aperta per seguire il processo di migrazione in tempo reale o chiuderla. Quest’ultima operazione non inciderà in alcun modo sulla migrazione.

![omm](images/OMM-gmail-step03.png){.thumbnail}


## Per saperne di più

[Consentire alle applicazioni meno sicure di accedere al tuo account Gmail](../migrazione-account-gmail-con-ovh-mail-migrator/sicurezza-gmail){.external}.

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en](https://community.ovh.com/en){.external}






