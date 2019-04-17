---
title: 'Configurare un account email su Outlook 2016 per Windows'
slug: configurazione-outlook-2016
excerpt: 'Scopri come configurare un indirizzo email MX Plan su Outlook 2016 per Windows'
section: Outlook
---

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

Gli indirizzi email MX Plan possono essere configurati su un programma di posta elettronica compatibile. Ciò ti consente di inviare e ricevere messaggi dall’applicazione che preferisci.

**Questa guida ti mostra come configurare il tuo indirizzo email MX Plan su Outlook 2016 per Windows.**

## Prerequisiti

- Disporre di un indirizzo email MX Plan (incluso in una soluzione MX Plan o in un [piano di hosting Web OVH](https://www.ovh.it/hosting-web/){.external})
- Aver installato il programma Microsoft Outlook 2016 sul tuo dispositivo
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Se utilizzi una versione precedente di Outlook per Windows, consulta la nostra guida per [Outlook 2007](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_di_outlook_2007/){.external} o per [Outlook 2010](https://docs.ovh.com/it/emails/email_condivisa_guida_alla_configurazione_di_outlook_2010/){.external}
>
> Se utilizzi Outlook 2016 per Mac, Consulta la nostra guida per [Configurare un indirizzo email su Outlook 2006 per Mac](https://docs.ovh.com/it/emails/configurazione-outlook-2016-mac/){.external}. 
>

## Procedura

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione** compare un wizard che ti invita ad inserire il tuo indirizzo email

- **Se hai già configurato un account** clicca su `File`{.action} nella barra del menu in alto e poi su `Aggiungi account`{.action}

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Ora inserisci il tuo indirizzo email e clicca su `Opzioni avanzate`{.action}. Seleziona la voce accanto a `Configurare il mio account manualmente`{.action} e clicca su `Connetti`{.action}.

Tra i diversi tipi di account scegli tra IMAP e POP, anche se ti suggeriamo di utilizzare IMAP. Puoi anche selezionare POP per l’archiviazione totale delle email sul tuo programma Outlook.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Compila i campi richiesti:

- per la posta in entrata

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server 'ssl0.ovh.net'|
|Porta|Indica la porta '993'|
|Metodo di cifratura|Seleziona 'SSL/TLS'|
|Richiedere l’autorizzazione |Non selezionare la voce 'Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione'|

- per la posta in uscita:

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server 'ssl0.ovh.net'|
|Porta|Indica la porta '465'|
|Metodo di cifratura|Seleziona 'SSL/TLS'|
|Richiedere l’autorizzazione|Non selezionare la voce 'Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione'|

Una volta inserite le informazioni, clicca su `Avanti`{.action} e inserisci la password dell’indirizzo email. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

Per verificare la corretta configurazione dell’account esegui un test di invio.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio MX Plan: 

- **per una configurazione IMAP**

|Tipo di server |Nome del server|Metodo di cifratura|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|993|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

- **per una configurazione POP**

|Tipo di server |Nome del server|Metodo di cifratura|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|995|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVH propone anche un’applicazione Web disponibile alla pagina [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} e accessibile con le credenziali del tuo indirizzo email.

## Per saperne di più

[Configurare un account Email Pro su Outlook 2016 per Windows](https://docs.ovh.com/it/emails-pro/configurazione-outlook-2016/){.external}

[Configurare un account Exchange su Outlook 2016 per Windows](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-windows/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.
