---
title: 'Configurare un account Email Pro su Outlook 2016 per Windows'
slug: configurazione-outlook-2016
excerpt: 'Scopri come configurare un account Email Pro su Outlook 2016 per Windows'
section: 'Configurazione di un client di posta'
order: 1
---

**Ultimo aggiornamento: 08/04/2020**

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro su Outlook 2016 per Windows.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver installato il programma Microsoft Outlook 2016 sul tuo dispositivo
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Se utilizzi Outlook 2016 per Mac, consulta la nostra guida: [Configurare un account Email Pro su Outlook 2016 per Mac](https://docs.ovh.com/it/emails-pro/configurazione-outlook-2016-mac){.external}.
>

## Procedura

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
> 

Una volta avviata l’applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione:** un wizard appare sullo schermo e ti invita ad inserire il tuo indirizzo email

- **Se hai già configurato un account:** clicca su `File`{.action} in alto nello schermo e poi su `Aggiungi account`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Inserisci il tuo indirizzo email e clicca su `Opzioni avanzate`{.action}. Seleziona la voce accanto a `Configura un account manualmente`{.action} e poi clicca su `Connetti`{.action}.  Tra i tipi di account, scegli **IMAP**.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Compila i campi richiesti:

- **per la posta in entrata:**

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server 'pro**X**.mail.ovh.net'|
|Porta|Indica la porta '993'|
|Metodo di cifratura|Seleziona 'SSL/TLS'|
|Richiedere l’autorizzazione |Non selezionare la voce “Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione”.|

- **per la posta in uscita:**

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server 'pro**X**.mail.ovh.net'|
|Porta|Indica la porta '587'|
|Metodo di cifratura|Seleziona 'STARTTLS'|
|Richiedere l’autorizzazione |Non selezionare la voce “Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione”.|

Una volta inserite le informazioni, clicca su `Avanti`{.action} e inserisci la **password** dell’indirizzo email. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

Per verificare la corretta configurazione dell’account esegui un test di invio.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio Email Pro: 

|Tipo di server |Nome del server|Metodo di cifratura|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|SSL/TLS|993|
|In uscita|pro**X**.mail.ovh.net|STARTTLS|587|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web con [funzionalità collaborative](https://www.ovh.it/emails/){.external} disponibile all’indirizzo [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un indirizzo email compreso nell’offerta MX Plan o in un’offerta di hosting web su Outlook 2016 per Windows](https://docs.ovh.com/it/emails/configurazione-outlook-2016-mac/){.external}

[Configurare un account Exchange su Outlook 2016 per Windows](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-windows/){.external}


Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.