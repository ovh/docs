---
title: 'Configurare un account email su Outlook per macOS'
slug: configurazione-outlook-2016-mac
excerpt: 'Scopri come configurare il tuo indirizzo email MX Plan su Outlook 2016 per Mac'
section: Configurazione su computer
order: 02
---

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

Gli indirizzi email dell’offerta MX Plan possono essere configurati su un programma di posta elettronica compatibile. Ciò ti consente di inviare e ricevere messaggi dall’applicazione che preferisci.

Scopri come configurare il tuo indirizzo email MX Plan su Outlook 2016 per Mac.

## Prerequisiti

- Disporre di un indirizzo email MX Plan (ncluso in una soluzione MX Plan o in un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external})
- Aver installato l’applicazione Microsoft Outlook sul proprio Mac
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Se utilizzi Outlook 2016 per Windows, consulta la nostra guida per [Configurare un indirizzo email su Outlook 2016 per Windows](https://docs.ovh.com/it/emails/configurazione-outlook-2016/){.external}.
>

## Procedura

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione** compare un wizard che ti invita ad inserire il tuo indirizzo email

- **Se hai già configurato un account** clicca su `Strumenti`{.action} in alto e poi su `Account`{.action}. Nella finestra di dialogo che appare, clicca su `+`{.action} e poi su `Nuovo account`{.action}

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Inserisci il tuo indirizzo email e clicca su Avanti. Tra i provider, seleziona IMAP/POP poi compila i campi richiesti. 

|Informazione|Descrizione|
|---|---|
|Tipo account|Ti consigliamo di utilizzare l’impostazione predefinita **IMAP**. Tuttavia puoi selezionare POP (archiviazione di email sulla tua applicazione Outlook) nel menu a tendina.|
|Indirizzo di posta elettronica|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Mail.|
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo.|
|Password|Digita la password associata all’account.|
|Server in entrata |Inserisci il server 'ssl0.ovh.net' e seleziona la voce 'Utilizzare SSL per connettersi'.|
|Porta in entrata|Indica la porta '993'.|
|Server in uscita|Inserisci il server 'ssl0.ovh.net' e seleziona la voce 'Utilizzare SSL per connettersi'.|
|Porta in uscita|Indica la porta '465'.|

Una volta inseriti tutti i dati, clicca su `Aggiungi account`{.action}. Se le informazioni inserite sono corrette, la connessione all’account andrà a buon fine. 

Per verificare la corretta configurazione dell’account esegui un test di invio.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio MX Plan:

- **per una configurazione IMAP**

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|993|
|In uscita|ssl0.ovh.net|Sì|465|

- **per una configurazione POP**

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|995|
|In uscita|ssl0.ovh.net|Sì|465|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web con [funzionalità collaborative](https://www.ovhcloud.com/it/emails/){.external}, disponibile alla pagina [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external} e accessibile con le credenziali del tuo indirizzo email.

## Per saperne di più

[Configurare un account Email Pro su Outlook 2016 per Mac](https://docs.ovh.com/it/emails-pro/configurazione-outlook-2016-mac/){.external}.

[Configurare un account Exchange su Outlook 2016 per Mac](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-mac/){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.