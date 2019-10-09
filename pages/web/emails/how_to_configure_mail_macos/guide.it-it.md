---
title: 'Configurare un account email su Mail di macOS'
slug: servizio_email_guida_alla_configurazione_su_mail_di_mac_-_el_capitan
excerpt: 'Scopri come configurare un indirizzo email MX Plan su Mail di macOS El Capitan, Sierra e High Sierra'
legacy_guide_number: g1965
---

**Ultimo aggiornamento: 11/09/2018**

## Obiettivo

Gli account MX Plan possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dall’applicazione che preferisci. 

**Questa guida ti mostra come configurare un account email MX Plan su Mail di macOS El Capitan, Sierra e High Sierra.**

## Prerequisiti

- Disporre di un account email MX Plan (compreso in una soluzione MX Plan o in piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external})
- Aver installato l’applicazione Mail sul proprio dispositivo
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Questa guida è valida per versioni di macOS El Capitan, Sierra, High Sierra. 
>

## Procedura

La configurazione dell’account può essere effettuata in due modi diversi:

- **in pochi click con il nostro tool Apple Devices**: accedi alla pagina [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} e segui gli step di configurazione

- **tramite la configurazione guidata dell’applicazione Mail** disponibile sul tuo dispositivo

Questa guida descrive esclusivamente gli step di configurazione dell’applicazione Mail.

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Mail sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione** si apre una finestra da cui è possibile scegliere l’account da utilizzare con Mail.  Seleziona `Altro account Mail...`{.action} e continua;

- **Se hai già configurato un account**, clicca su `Mail`{.action} in alto nello schermo e poi su `Aggiungi account`{.action}. Seleziona Altro account Mail... e continua.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Inserisci le informazioni del tuo account:

|Informazione|Descrizione|
|---|---|
|Nome|Inserisci l’indirizzo email completo|
|Indirizzo email|Inserisci l’indirizzo email completo|
|Password|Inserisci la password associata all’account|

Dopo aver cliccato sul pulsante `Accedi`{.action}, un messaggio ti inviterà a continuare, poi a inserire ulteriori informazioni:

|Informazione|Descrizione|
|---|---|
|Tipo account|L’opzione di default è **IMAP** (di default), ma puoi selezionare l’opzione **POP** (archiviazione di email in locale sulla tua applicazione Mail) nel menu a tendina |
|Server di posta in entrata|Inserisci il server “ssl0.ovh.net”|
|Server di posta in uscita|Inserisci il server “ssl0.ovh.net”|

Clicca di nuovo sul pulsante `Accedi`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Per il corretto funzionamento del tuo account assicurati che durante la scelta delle applicazioni la voce `Mail`{.action} sia selezionata, poi clicca su `Fine`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se hai necessità di inserire manualmente le preferenze per il tuo account, di seguito trovi i parametri da utilizzare con il nostro servizio MX Plan.

- **Per una configurazione in IMAP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|993|
|In uscita|ssl0.ovh.net|Sì|465| 

- **Per una configurazione in POP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|995|
|In uscita|ssl0.ovh.net|Sì|465|

### Step 2 : utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVH propone un’applicazione Web disponibile alla pagina [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} e accessibile con le credenziali del tuo account.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.