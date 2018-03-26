---
title: Configurare un account email su un iPhone o un iPad
excerpt: Come configurare un account email MX Plan su un iPhone o un iPad
slug: servizio_email_guida_alla_configurazione_su_iphone_ios_91
section: Apple
---

**Ultimo aggiornamento: 19/03/2018**

## Obiettivo

Gli account email del servizio MX Plan possono essere configurati su client o applicazioni di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account email MX Plan su un iPhone o un iPad.**

## Prerequisiti

- Disporre di un account email MX Plan incluso nel servizio MX Plan o in una soluzione di [Web hosting OVH](https://www.ovh.it/hosting-web/){.external}
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

Sulla schermata Home del tuo dispositivo clicca su `Impostazioni`{.action}. L’aggiunta di un account si effettua in due modi diversi a seconda della versione iOS:

- **per iOS 7, 8, 9, e 10** clicca su `Posta, Contatti, Calendari`{.action} > `Aggiungi account`{.action} > `Altro`{.action} > `Aggiungi account Mail`{.action} 

- **per iOS 11** clicca su `Account e password`{.action} > `Aggiungi account`{.action} > `Altro`{.action} > `Aggiungi account Mail`{.action} 

![exchange](images/configuration-mail-ios-step1.png){.thumbnail}

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
|IMAP o POP|Ti consigliamo di utilizzare l’impostazione predefinita **IMAP**. Se invece vuoi archiviare le email in locale sul tuo client, scegli l’opzione **POP**|
|Nome host (server posta in arrivo)|Inserisci il server “ssl0.ovh.net”|
|Nome utente (server posta in arrivo)|Inserisci l’indirizzo email completo|
|Password (server posta in arrivo)|Digita la password associata all’account|  
|Nome host (server posta in uscita)|Inserisci il server “ssl0.ovh.net”|
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo|
|Password (server posta in uscita)|Digita la password associata all’account| 

Clicca su `Avanti`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Per il corretto funzionamento del tuo account assicurati che durante la scelta delle applicazioni la voce `Mail`{.action} sia selezionata, poi clicca su `Salva`{.action}. 

Per verificare la corretta configurazione dell’account esegui un test di invio dall’applicazione Mail del tuo dispositivo.

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio MX Plan: 

- **per una configurazione IMAP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|993|
|In uscita|ssl0.ovh.net|Sì|465|

- **per una configurazione POP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|995|
|In uscita|ssl0.ovh.net|Sì|465|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVH propone un’applicazione Web per accedere al tuo account email direttamente dal tuo browser, disponibile alla pagina <https://mail.ovh.net/it/> e accessibile con le credenziali del tuo account. 

## Per saperne di più

[Configurare un account Email Pro su un iPhone o un iPad](https://docs.ovh.com/it/emails-pro/configurazione-iphone-ios/){.external}

[Configurare un account Exchange su un iPhone o un iPad](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_automatica_con_ios_iphone-ipad/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.