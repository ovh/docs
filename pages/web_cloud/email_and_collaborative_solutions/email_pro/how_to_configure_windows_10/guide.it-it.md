---
title: 'Configurare un account Email Pro sull’applicazione Posta per Windows 10'
excerpt: 'Scopri come configurare un account Email Pro sull’applicazione Posta per Windows 10'
updated: 2020-03-18
---

## Obiettivo

Gli account Email Pro possono essere configurati su diversi client di posta elettronica compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro sull’applicazione Posta per Windows 10.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external}
- Aver installato l’applicazione Posta sul proprio dispositivo
- Disporre delle credenziali associate all’account email da configurare

## Procedura

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**?**.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}, selezionando `Email Pro`{.action}. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
> 

Una volta avviata l’applicazione Posta sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione**: si apre una finestra che ti invita a cliccare su `Aggiungi account`{.action}.

- **Se è già stato impostato un account**: clicca su `Account`{.action} nella barra dei menu a sinistra e poi su `Aggiungi account`{.action} nel menu che appare a destra.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Clicca su `Configurazione avanzata`{.action} e seleziona `Internet email`{.action} come tipo di account.

Inserisci le informazioni richieste:

|Informazione|Descrizione|
|---|---|
|Indirizzo di posta elettronica|Inserisci l’indirizzo email completo.|
|Nome utente|Inserisci l’indirizzo email completo.|
|Password|Digita la password associata all’account.|
|Nome dell’account|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Posta.|
|Invia i tuoi messaggi utilizzando questo nome|Indica il nome che comparirà come mittente dei messaggi inviati da questo indirizzo|
|Server di posta in entrata|Inserisci il server “pro**?**.mail.ovh.net:993”.|
|Tipo di account|Ti consigliamo di usare il protocollo **IMAP4**. Tuttavia puoi selezionare **POP** (archiviazione di email nella tua applicazione Posta) nel menu a tendina.|
|Server di posta in uscita|Inserisci il server “pro**?**.mail.ovh.net:587”.|

Assicurati di aver selezionato correttamente le seguenti voci:

- “Il server in uscita richiede l’autenticazione”
- “Utilizzare lo stesso nome utente e la password per l’invio della posta”
- ”Richiedere il protocollo SSL per la posta in entrata”
- ”Richiedere il protocollo SSL per la posta in uscita”

Una volta inseriti tutti i dati, clicca su `Continua`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

Per verificare la corretta configurazione dell’account esegui un test di invio.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio Email Pro:

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|pro**?**.mail.ovh.net|Sì|993|
|In uscita|pro**?**.mail.ovh.net|Sì|587|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web con [funzionalità collaborative](https://www.ovhcloud.com/it/emails/){.external}. disponibile alla pagina <https://www.ovh.it/mail/> e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un account MX Plan sull’applicazione Posta per Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10){.external}

[Configurare un account Exchange sull’applicazione Posta per Windows 10](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.