---
title: 'Configurare un account Email Pro su un iPhone o un iPad'
slug: configurazione-iphone-ios
excerpt: 'Come configurare un account Email Pro su un iPhone o un iPad tramite l’applicazione Mail'
section: 'Configurazione di un client di posta'
order: 3
---

**Ultimo aggiornamento: 09/04/2020**

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci. 

**Questa guida ti mostra come configurare il tuo account Email Pro su un iPhone o un iPad tramite l’applicazione Mail.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 


## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver installato l’applicazione Mail sul proprio dispositivo
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Questa guida è valida per le versioni iOS 7 e successive.
>

## Procedura

La configurazione dell’account può essere effettuata in due modi diversi:

- **in pochi click con il nostro tool Apple Devices**: accedi alla pagina <https://autodiscover.mail.ovh.net/AppleDevices/> e segui gli step di configurazione

- **tramite la configurazione guidata disponibile sul tuo dispositivo**

Questa guida descrive esclusivamente gli step per la configurazione delle email sul tuo dispositivo.


### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
>

Sulla schermata Home del tuo dispositivo clicca su `Impostazioni`{.action}. L’aggiunta di un account si effettua in due modi diversi a seconda della versione iOS:

- **per iOS 7, 8, 9, e 10** clicca su `Posta, Contatti, Calendari`{.action} > `Aggiungi account`{.action} > `Altro`{.action} > `Aggiungi account Mail`{.action} 

- **pour iOS 11** clicca su `Account e password`{.action} > `Aggiungi account`{.action} > `Altro`{.action} > `Aggiungi account Mail`{.action} 

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

Inserisci le informazioni del tuo account:

|Informazione|Descrizione|
|---|---|
|Nome|Indica il nome che comparirà come mittente dei messaggi inviati da questo indirizzo|
|Indirizzo email|Inserisci l’indirizzo email completo|
|Password|Digita la password associata all’account|
|Descrizione|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Mail|

Clicca sul pulsante `Avanti`{.action} e inserisci le informazioni richieste:

|Informazione|Descrizione|
|---|---|
|IMAP o POP|Mantieni l’impostazione predefinita **IMAP**|
|Nome host (server posta in arrivo)|Inserisci il server “pro**X**.mail.ovh.net”|
|Nome utente (server posta in arrivo)|Inserisci l’indirizzo email completo|
|Password (server posta in arrivo)|Digita la password associata all’account|  
|Nome (host server posta in uscita)|Inserisci il server “pro**X**.mail.ovh.net”|
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo|
|Password (server posta in uscita)|Digita la password associata all’account|

Clicca su `Avanti`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

Per il corretto funzionamento del tuo account assicurati che durante la scelta delle applicazioni la voce `Mail`{.action} sia selezionata, poi clicca su `Salva`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio Email Pro: 

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|Sì|993|
|In uscita|pro**X**.mail.ovh.net|Sì|587|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web con [funzionalità collaborative](https://www.ovh.it/emails/){.external}, disponibile alla pagina <https://www.ovh.it/mail/> e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un account email su un iPhone o un iPad](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_su_iphone_ios_91/){.external}

[Configurare un account Exchange su un iPhone o un iPad](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_automatica_con_ios_iphone-ipad/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}. 
