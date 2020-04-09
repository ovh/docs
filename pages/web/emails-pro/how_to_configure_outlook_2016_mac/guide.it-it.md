---
title: 'Configurare un account Email Pro su Outlook 2016 per Mac'
slug: configurazione-outlook-2016-mac
excerpt: 'Scopri come configurare un account Email Pro su Outlook 2016 per Mac'
section: 'Configurazione di un client di posta'
order: 2
---

**Ultimo aggiornamento: 09/04/2020**

## Obiettivo

Gli account Email Pro possono essere configurati su diversi client di posta compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro su Outlook 2016 per Mac.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver installato l'applicazione Microsoft Outlook sul proprio Mac
- Disporre delle credenziali associate all'account email da configurare

> [!primary]
>
> Se utilizzi Outlook 2016 per Windows, consulta la nostra guida: [Configurare un account Exchange su Outlook 2016 per Windows](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-windows){.external}
>

## Procedura

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`
{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
>

Una volta avviata l'applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell'applicazione:** un wizard appare sullo schermo e ti invita ad inserire il tuo indirizzo email.

- **Se hai già configurato un account:** clicca su `Strumenti`{.action} nella barra del menu in alto e poi su `Account`{.action}. Nella finestra che appare, clicca su `+`{.action} e poi su `Nuovo account`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Inserisci il tuo indirizzo email e clicca su `Avanti`{.action}. Come provider, seleziona IMAP/POP e compila i campi richiesti. 

|Informazione|Descrizione|
|---|---|
|Tipo account|Mantieni l'impostazione predefinita **IMAP**|
|Indirizzo di posta elettronica|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Outlook.|
|Nome utente|Inserisci líindirizzo email completo|
|Password|Digita la password associata all'account|
|Server in entrata |Inserisci il server 'pro**X**.mail.ovh.net'. Seleziona la voce 'Utilizza SSL' per connetterti.|
|Porta in entrata|Indica la porta '993'.|
|Server in uscita|Inserisci il server 'pro**X**.mail.ovh.net'. Seleziona la voce 'Utilizza SSL' per connettersi.|
|Porta in uscita|Indica la porta '587'.|

Una volta inseriti tutti i dati, clicca su `Avanti`{.action}. Se le informazioni inserite sono corrette, la connessione all'account andrà a buon fine. 

Per verificare la corretta configurazione dell'account esegui un test di invio.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Se devi inserire manualmente le impostazioni nelle preferenze del tuo account, puoi trovare qui di seguito i parametri da utilizzare con il nostro servizio Email Pro: 

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|SÏ|993|
|In uscita|pro**X**.mail.ovh.net|SÏ|587|

### Step 2: utilizza il tuo account

Una volta configurato l'indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone anche un'applicazione Web con [funzionalità collaborative](https://www.ovh.com/fr/emails/){.external}, disponibile all'indirizzo [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external}. Puoi collegarti utilizzando le credenziali del tuo account.

## Per saperne di più

[Configurare un indirizzo email compreso nell'offerta MX Plan o in un'offerta di hosting Web su Outlook 2016 per Mac](https://docs.ovh.com/it/emails/configurazione-outlook-2016-mac/){.external}

[Configurare un account Exchange su Outlook 2016 per Mac](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-mac/){.external}

Contatta la nostra Community di utenti all'indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.