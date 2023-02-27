---
title: 'Configurare un indirizzo email su Android tramite l’applicazione Gmail'
slug: configurazione-android-6
excerpt: 'Scopri come configurare un indirizzo email MX Plan su Android tramite l’applicazione Gmail'
section: Configurazione su smartphone
order: 02
updated: 2018-03-12
---

**Ultimo aggiornamento: 23/08/2018**

## Obiettivo

Gli indirizzi email dell’offerta MX Plan possono essere configurati su diversi client di posta elettronica compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

Questa guida ti mostra come configurare un indirizzo email MX Plan su Android tramite l’applicazione Gmail.

## Prerequisiti

- Disporre di un account email MX Plan incluso nel servizio MX Plan o in una soluzione di [Web hosting OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Aver installato l’applicazione Gmail sul proprio dispositivo, che puoi scaricare da Google Play Store
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Questa guida è stata realizzata utilizzando un dispositivo Nexus 6 con Android 7.1.1 . In questa guida utilizziamo l’applicazione Gmail scaricabile da Play Store. Se invece desideri utilizzare un’altra applicazione, la procedura da seguire potrebbe essere diversa.
>

## Procedura

### Step 1: aggiungi il tuo account

Sulla schermata Home del tuo dispositivo clicca sull’ `applicazione Gmail`{.action}. L’aggiunta di un account si può effettuare in due modi diversi:

- Se non è stato impostato nessun account: dopo la schermata di benvenuto clicca su `Aggiungi un indirizzo email`{.action}. Quindi seleziona `Altro`{.action}.

- Se è già stato impostato un account: clicca sull’icona con i tre puntini in alto a sinistra e poi su quella a forma di freccia che trovi a destra del nome dell’account già impostato.  Quindi clicca su `Aggiungi un account`{.action} e seleziona `Altro`{.action}. 

![mxplan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Inserisci il tuo indirizzo email e clicca su `Avanti`{.action}.

Durante la scelta del tipo di account, ti consigliamo di utilizzare IMAP.  Puoi comunque selezionare POP: questa scelta comporta un’archiviazione in locale delle email sulla tua applicazione Gmail e non è quindi consigliabile se consulti il tuo indirizzo da diversi client di posta elettronica. 

Inserisci la password del tuo indirizzo email e clicca su `Avanti`{.action}.

![mxplan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Imposta i parametri del server in entrata:

|Informazione|Descrizione| 
|---|---| 
|Nome utente|Inserisci l’indirizzo email completo|  
|Password|Digita la password associata all’account|
|Server|Inserisci il server “ssl0.ovh.net”|

Fai clic su `Avanti`{.action} e inserisci le impostazioni del server in uscita. 

|Informazione|Descrizione| 
|---|---| 
|Richiedere una connessione|Assicurati che questo pulsante sia selezionato|
|Nome utente|Inserisci l’indirizzo email completo|  
|Password|Digita la password associata all’account|
|Server SMTP|Inserisci il server “ssl0.ovh.net”|

Clicca su `Avanti`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![mxplan](images/configuration-gmail-application-android-step3.png){.thumbnail}

Definisci le opzioni dell’account e poi clicca su `Avanti`{.action}. A questo punto attribuisci un nome all’account appena creato per riconoscerlo tra gli altri presenti nella tua applicazione, così come il nome che sarà visualizzato nei tuoi messaggi di posta inviata. Una volta terminate queste operazioni clicca su `Avanti`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se hai necessità di inserire manualmente alcuni campi tecnici nelle preferenze del tuo account, qui di seguito troverai i parametri da utilizzare con la nostra offerta MX Plan:

- **per una configurazione IMAP**

|Tipo di server|Nome del server|Tipo di sicurezza|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|993|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

- **per una configurazione POP**

|Tipo di server|Nome del server|Tipo di sicurezza|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|995|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web per accedere al tuo account email direttamente dal tuo browser, disponibile alla pagina <https://www.ovh.it/mail/> e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un account Email Pro su Android tramite l’applicazione Gmail](https://docs.ovh.com/it/emails-pro/configurazione-android/){.external}

[Configurare un account Exchange su Android tramite l’applicazione Gmail](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_configurazione_di_android/){.external}


Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.