---
title: 'Configurare un indirizzo e-mail su Outlook per Mac'
slug: configurazione-outlook-2016-mac
excerpt: 'Scopri come configurare il tuo indirizzo e-mail MX Plan su Outlook 2016 per Mac'
section: Outlook
---

**Ultimo aggiornamento: 07/08/2018**

## Obiettivo

Gli indirizzi e-mail dell’offerta MX Plan possono essere configurati su un programma di posta elettronica compatibile. Ciò ti consente di inviare e ricevere messaggi dall’applicazione di tua scelta.

Scopri come configurare il tuo indirizzo e-mail MX Plan su Outlook 2016 per Mac.

## Prerequisiti

- Disporre di un indirizzo e-mail MX Plan compreso nell’offerta MX Plan o in un’offerta di [hosting web su OVH](https://www.ovh.it/hosting-web/).  
- Aver installato l’applicazione Microsoft Outlook sul proprio Mac.
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Utilizzi una versione precedente di Outlook per Mac? Consulta la nostra guida: [Configurare un indirizzo e-mail su Outlook 2011 per Mac](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_di_outlook_2011_su_mac/){.external}.
>
> Utilizzi Outlook 2016 per Windows? Consulta la nostra guida: [Configurare un indirizzo e-mail su Outlook 2016 per Windows](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016/){.external}.
>

## Procedura

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- Durante il primo avvio dell’applicazione un wizard ti inviterà a inserire il tuo indirizzo e-mail.

- **Se hai già configurato un account**, clicca su `Strumenti`{.action} in alto nello schermo e poi su `Account`{.action}. Nella finestra di dialogo che appare, clicca su + e poi su Nuovo account

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Inserisci il tuo indirizzo e-mail e clicca su Avanti. Tra i fornitori, seleziona IMAP/POP poi compila i campi richiesti. 

|Informazione|Descrizione|
|---|---|
|Tipo account|Ti consigliamo di utilizzare l’impostazione predefinita **IMAP**. Tuttavia puoi selezionare POP (archiviazione di e-mail sulla tua applicazione Outlook) nel menù a tendina.|
|Indirizzo di posta elettronica|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Mail.|
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo|
|Password|Digita la password associata all’account|
|Server in entrata |Inserisci il server “ssl0.ovh.net” Seleziona la voce Utilizzare SSL per connettersi.|
|Porta in entrata|Indica la porta 993.|
|Server in uscita|Inserisci il server “ssl0.ovh.net” Seleziona la voce Utilizzare SSL per connettersi.|
|Porta in uscita|Indica la porta 465.|

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

OVH propone un’applicazione Web per accedere al tuo account email direttamente dal tuo browser, disponibile alla pagina  disponibile all’indirizzo https://www.ovh.com/it/mail/. e accessibile con le credenziali del tuo indirizzo e-mail.

## Per saperne di più

[Configurare un account Email Pro su Outlook 2016 per Mac](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016-mac/){.external}.

[Configurare un account Exchange su Outlook 2016 per Mac](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016-mac/){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.