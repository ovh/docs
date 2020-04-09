---
title: 'Configurare un account Email Pro su Mail di macOS'
slug: configurare-email-pro-mail-macos
excerpt: 'Come configurare il tuo account Email Pro su Mail di macOS El Capitan, Sierra e High Sierra'
section: 'Configurazione di un client di posta'
order: 4
---

**Ultimo aggiornamento: 09/04/2020**

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dall’applicazione che preferisci. 

Questa guida ti mostra come configurare il tuo servizio Email Pro su Mail di macOS El Capitan, Sierra e High Sierra.

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
> Questa guida è valida per le versioni di macOS El Capitan, Sierra e High Sierra.
>

## Procedura

La configurazione dell’account può essere effettuata in due modi diversi:

- **in pochi click con il nostro tool Apple Devices**: accedi alla pagina [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} e segui gli step di configurazione

- **tramite la configurazione guidata dell’applicazione Mail** disponibile sul tuo dispositivo

Questa guida descrive esclusivamente gli step di configurazione dell’applicazione Mail.

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
> 

Una volta avviata l’applicazione Mail sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi. 

- **Al primo avvio dell’applicazione** si apre una finestra da cui è possibile scegliere l’account da utilizzare con Mail. Seleziona `Altro account Mail...`{.action} e continua

- **Se hai già configurato un account**, clicca su `Mail`{.action} in alto nello schermo e poi su `Aggiungi account`{.action}. Seleziona `Altro account Mail...`{.action} e continua

![emailpro](images/configuration-mail-sierra-step1.png){.thumbnail}

Inserisci le informazioni del tuo account: 

|Informazione|Descrizione|  
|---|---|  
|Nome|Indica il nome che comparirà come mittente dei messaggi inviati da questo indirizzo| 
|Indirizzo e-mail|Inserisci l’indirizzo email completo| 
|Password|Digita la password associata all’account|  

Clicca sul pulsante `Accedi`{.action}, un messaggio ti inviterà a continuare e poi a inserire maggiori informazioni:

|Informazione|Descrizione|  
|---|---|  
|Tipo account|Seleziona l’opzione IMAP nel menu a tendina| 
|Server di posta in entrata|Inserisci il server pro**X**.mail.ovh.net| 
|Server di posta in uscita|Inserisci il server pro**X**.mail.ovh.net|  

Clicca di nuovo sul pulsante `Accedi`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![emailpro](images/configuration-mail-sierra-step2.png){.thumbnail}

Per il corretto funzionamento del tuo account assicurati che durante la scelta delle applicazioni la voce `Mail`{.action} sia selezionata, poi clicca su `Fine`{.action}. 

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio Email Pro: 

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|Sì|993|
|In uscita|pro**X**.mail.ovh.net|Sì|587|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web con [funzionalità collaborative](https://www.ovh.it/emails/){.external}, disponibile alla pagina [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} e accessibile con le credenziali del tuo account. 

## Per saperne di più

[Configurare un account email su Mail di macOS](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_su_mail_di_mac_-_el_capitan/){.external}

[Configurare un account Exchange su Mail di macOS](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-mail-macos/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.