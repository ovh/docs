---
title: 'Configurare un account Email Pro su Android tramite l’applicazione Gmail'
slug: configurazione-android
excerpt: 'Scopri come configurare un account Email Pro su Android tramite l’applicazione Gmail'
section: 'Configurazione di un client di posta'
order: 5
---

**Ultimo aggiornamento: 09/04/2020**

## Obiettivo

È possibile configurare un account Email Pro su diversi client di posta elettronica compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro su Android tramite l’applicazione Gmail.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver installato l’applicazione Gmail sul proprio dispositivo, che puoi scaricare da Google Play Store
- Disporre delle credenziali associate all’account email da configurare

> [!primary]
>
> Questa guida è stata realizzata da un dispositivo Nexus 6 dotato della versione 7.1.1 di Android. Per una questione di uniformità, utilizziamo l’applicazione Gmail scaricabile da Play Store. Se invece desideri utilizzare un’altra applicazione, la procedura da seguire sarà diversa.
>

## Procedura

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
> 

Sulla schermata Home del tuo dispositivo clicca sull’applicazione `Gmail`{.action}. L’aggiunta di un account si può effettuare in due modi diversi:

- Se non è stato impostato nessun account: dopo la schermata di benvenuto clicca su `Aggiungi un indirizzo e-mail`{.action}. Quindi seleziona `Altro`{.action}; 

- Se è già stato impostato un account: clicca sull’icona con i tre puntini in alto a sinistra e poi su quella a forma di freccia che trovi a destra del nome dell’account già impostato. Quindi clicca su `Aggiungi un account`{.action} e seleziona `Altro`{.action}. 

![emailpro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Inserisci il tuo indirizzo email e clicca su `Avanti`{.action}.

Nel momento in cui scegli il tipo di account seleziona IMAP e poi digita la password del tuo indirizzo email. Clicca su `Avanti`{.action} per continuare con la configurazione.

![emailpro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Imposta i parametri del server in entrata. 

|Informazione|Descrizione| 
|---|---| 
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo.|  
|Password|Digita la password associata all’account.|
|Server|Inserisci il server 'pro**X**.mail.ovh.net'.|

Clicca su `Avanti`{.action} e inserisci le impostazioni del server in uscita. 

|Informazione|Descrizione| 
|---|---| 
|Richiedere una connessione |Assicurati che il pulsante sia selezionato.|
|Nome utente (server posta in uscita)|Inserisci l’indirizzo email completo.|  
|Password|Digita la password associata all’account.|
|Server SMTP|Inserisci il server 'pro**X**.mail.ovh.net'.|

Clicca su `Avanti`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

![emailpro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Definisci le opzioni dell’account e poi clicca su `Avanti`{.action}. A questo punto attribuisci un nome all’account appena creato per riconoscerlo tra gli altri presenti nella tua applicazione, così come il nome che sarà visualizzato nei tuoi messaggi di posta inviata.  Una volta terminate queste operazioni clicca su `Avanti`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se devi inserire manualmente dei campi tecnici nelle preferenze del tuo account, puoi trovare qui di seguito i parametri da utilizzare con il nostro servizio Email Pro:

|Tipo di server |Nome del server|Tipo di sicurezza|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|SSL/TLS|993|
|In uscita|pro**X**.mail.ovh.net|STARTTLS|587|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web con [funzionalità collaborative](https://www.ovh.it/emails/){.external}, disponibile alla pagina [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} e accessibile con le credenziali del tuo indirizzo email.

## Per saperne di più

[Configurare un indirizzo email su Android tramite l’applicazione Gmail](https://docs.ovh.com/it/emails/configurazione-android-6/){.external}

[Configurare un account Exchange su Android tramite l’applicazione Gmail](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_configurazione_di_android/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}. 