---
title: 'Configurare un indirizzo e-mail su Outlook 2016 per Windows'
slug: configurazione-outlook-2016
excerpt: 'Scopri come configurare il tuo indirizzo e-mail MX Plan su Outlook 2016 per Windows'
section: Outlook
---

**Ultimo aggiornamento: 07/08/2018**

## Obiettivo

Gli indirizzi e-mail dell’offerta MX Plan possono essere configurati su un programma di posta elettronica compatibile. Ciò ti consente di inviare e ricevere messaggi dall’applicazione di tua scelta.

**Scopri come configurare il tuo indirizzo e-mail MX Plan su Outlook 2016 per Windows.**

## Prerequisiti

- Disporre di un indirizzo e-mail MX Plan compreso nell’offerta MX Plan o in un’[offerta di hosting web su OVH](https://www.ovh.it/hosting-web/){.external}).  
- Aver installato il programma Microsoft Outlook 2016 sul tuo dispositivo.
- Disporre delle credenziali associate all’account email da configurare.

> [!primary]
>
> Utilizzi una versione precedente di Outlook per Windows?  Consulta la nostra guida per [Outlook 2013](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2013/){.external} o per [Outlook 2010](https://docs.ovh.com/it/emails/email_condivisa_guida_alla_configurazione_di_outlook_2010/){.external}
>
> Utilizzi Outlook 2016 per Mac? Consulta la nostra guida: [Configurare un indirizzo e-mail su Outlook 2006 per Mac](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016-mac/){.external}. 
>

## Procedura

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Outlook sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- Al momento del primo avvio dell’applicazione comparirà un wizard ti inviterà a inserire il tuo indirizzo e-mail. 

- **Se hai già configurato un account**, clicca su `File`{.action} nella barra dei menù in alto nello schermo e poi su `Aggiungi account`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Ora inserisci il tuo indirizzo e-mail e clicca su Opzioni avanzate. Selezione la voce accanto a Configurare il mio account manualmente appena comparsa e clicca su Connetti

Tra i diversi tipi di account scegli tra IMAP e POP. Ti consigliamo di utilizzare IMAP Puoi anche selezionare POP per l’archiviazione totale delle e-mail sul vostro programma Outlook.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Compila i campi richiesti:

- per la posta in entrata

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server “ssl0.ovh.net”|
|Porta|Indica la porta «993»|
|Metodo di cifratura|Seleziona «SSL/TLS»|
|Richiedere l’autorizzazione |Non selezionare la voce «Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione».|

- per la posta in uscita:

|Informazione|Descrizione|
|---|---|
|Server|Inserisci il server “ssl0.ovh.net”|
|Porta|Indica la porta «465»|
|Metodo di cifratura|Seleziona «SSL/TLS»|
|Richiedere l’autorizzazione |Non selezionare la voce «Richiedere l’autenticazione tramite password sicura (SPA) durante la connessione».|

Una volta inserite le informazioni, clicca su Avanti e inserisci la password dell’indirizzo e-mail. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

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

OVH propone un’applicazione Web per accedere al tuo account email direttamente dal tuo browser, disponibile alla pagina  disponibile all’indirizzo https://www.ovh.com/it/mail/. e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un account Email Pro su Outlook 2016 per Windows](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016/){.external}

[Configurare un account Exchange su Outlook 2016 per Windows](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.