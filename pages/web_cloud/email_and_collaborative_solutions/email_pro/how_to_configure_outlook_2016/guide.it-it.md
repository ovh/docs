---
title: 'Email Pro - Configurare un account email su Outlook classico per Windows'
excerpt: 'Scopri come configurare il tuo account Email Pro su Outlook classico per Windows'
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare il tuo account email Email Pro su Outlook o successivamente su Windows.**

## Prerequisiti

- Disporre di un account email [Email Pro](/links/web/email-pro).
- Disporre dell'applicazione [Outlook classico](https://support.microsoft.com/it-it/office/installare-o-reinstallare-la-versione-classica-di-outlook-in-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) su Windows.
- Disporre delle credenziali associate all’indirizzo email da configurare.

/// details | Informazioni relative alla gestione e alla configurazione dei servizi OVHcloud

OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.

Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “[Per saperne di più](#go-further)” di questa guida.

///

## Procedura

> [!warning]
>
> Questa documentazione si applica esclusivamente a **Outlook classico** disponibile nella suite Microsoft 365. Se utilizzi il nuovo Outlook, consulta la nostra guida [E-mail Pro - Configurazione del tuo account E-mail Pro sul nuovo Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10).
>
> Per installare Outlook classico sul tuo computer Windows, scaricalo dalla pagina Microsoft "[Installare o reinstallare Outlook classico su un PC Windows](https://support.microsoft.com/it-it/office/installare-o-reinstallare-la-versione-classica-di-outlook-in-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e installalo.
>
> Una volta completata l'installazione, per distinguere le due versioni quando sono installate, digita "Outlook" nella barra di ricerca Windows. Potrai quindi notare la differenza come mostrato di seguito.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Aggiungi l'account <a name="add-account"></a>

> [!primary]
>
> Nel nostro esempio, utilizziamo la dicitura server: pro?.mail.ovh.net. Dovrai sostituire il "?" con il numero che indica il server del tuo servizio E-mail Pro.
>
> 1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager).
> 1. Vai alla sezione `Web Cloud`{.action}.
> 1. Clicca su `Email Pro`{.action}.
> 1. Seleziona la piattaforma interessata.
> 1. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni Generali`{.action}.

- **All'avvio iniziale dell'applicazione**: un assistente di configurazione appare e ti invita a inserire il tuo indirizzo e-mail. Passa direttamente all'etapa 1 più in basso su questa pagina.

- **Se è già stato configurato un account**: clicca su `File`{.action} nella barra del menu in alto sul tuo schermo, quindi su `Aggiungi un account`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

Per configurare il tuo indirizzo e-mail, segui le tappe cliccando sui tab sottostanti.

> **Passo 1**
>>
>> - Dalla finestra **Aggiungi un account**, seleziona `Configurazione manuale o tipi di server aggiuntivi`{.action}.
>> - Clicca su `Avanti`{.action} per continuare.
>> - Seleziona `POP o IMAP`{.action}.
>> - Clicca su `Avanti`{.action} per continuare.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
>>
> **Passo 2**
>>
>> Inserisci le informazioni di accesso al tuo account **(1)**:
>>
>> Informazioni sull'utente <br>
>> **Il tuo nome**: imposta un nome da visualizzare.<br>
>> **Indirizzo di posta**: lascia il tuo indirizzo e-mail completo.<br>
>>
>> Informazioni sul server <br>
>> **Tipo di account**: seleziona IMAP.<br>
>> **Server di posta in arrivo**: pro?.mail.ovh.net (la dicitura **"?"** va sostituita con il numero del tuo server).<br>
>> **Server di posta in uscita (SMTP)**: pro?.mail.ovh.net (la dicitura **"?"** va sostituita con il numero del tuo server).<br>
>>
>> Informazioni di accesso <br>
>> **Nome utente**: Inserisci il tuo indirizzo e-mail completo.<br>
>> **Password**: Inserisci la password associata al tuo indirizzo e-mail.<br>
>>
>> Clicca su `Impostazioni aggiuntive...`{.action} **(2)** e vai al passo successivo.
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Passo 3**
>>
>> Dalla scheda `Server in uscita`, seleziona `Il mio server in uscita (SMTP) richiede l'autenticazione`{.action} e lascia selezionato `Utilizzare gli stessi parametri del mio server di posta in entrata`{.action}.
>>
>> Dalla scheda `Opzioni avanzate`:
>>
>> - **Server entrante (IMAP)**: 993
>> - **Utilizzare il tipo di connessione crittografata seguente**: SSL/TLS
>> - **Server di posta in uscita (SMTP)**: 587
>> - **Utilizzare il tipo di connessione crittografata seguente**: STARTTLS
>>
>> Clicca su `OK`{.action} per confermare le informazioni. Clicca su `Avanti`{.action} per avviare la configurazione dell'account.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Passo 4**
>>
>> Clicca su `Avanti`{.action} per avviare la configurazione dell'account. Se i parametri sono validati, otterrai la finestra sottostante.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone anche un'applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. È possibile accedere alla Webmail OVHcloud [qui](/links/web/email) e connettersi con le credenziali del proprio indirizzo email. Per maggiori informazioni sul suo utilizzo, consulta la guida "[Consultare il suo account Exchange dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Recuperare un backup del tuo indirizzo email

Se è necessario effettuare un'operazione che potrebbe comportare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preliminare dell'account email in questione. Per effettuare questa operazione, consulta il paragrafo "**Esporta da Windows**" nella nostra guida "[Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#esporta-da-windows)".

### Modifica i parametri esistenti

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

- Vai su `File`{.action} dalla barra del menu in alto sul tuo schermo.
- Seleziona l'account da modificare nel menu a discesa **(1)**.
- Clicca su `Impostazioni dell'account`{.action} **(2)** in basso.
- Clicca su `Impostazioni dell'account...`{.action} **(3)** per aprire la finestra delle impostazioni.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}

- La finestra delle impostazioni degli account appare, seleziona l'account e-mail interessato e clicca su `Modifica...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Per configurare il tuo account, segui le istruzioni a partire dal **passo 2** nella sezione [Aggiungere l'account](#add-account) di questa guida.

### Impostazioni generali di invio e ricezione <a name="settings-account"></a>

#### Impostazioni di ricezione IMAP e POP <a name="imap-pop"></a>

Per la ricezione delle e-mail, quando si sceglie il tipo di account, ti consigliamo di utilizzare **IMAP**. Puoi però selezionare **POP**.

Seleziona la scheda corrispondente al tipo di configurazione:

> [!tabs]
> **Configurazione IMAP**
>>
>> - **Nome utente**: inserisci l'indirizzo e-mail **completo**.
>> - **Password**: inserisci la password dell'indirizzo e-mail.
>> - **Server entrante**: pro?.mail.ovh.net (sostituisci correttamente il "?" con il numero del tuo server).
>> - **Porta**: 993.
>> - **Tipo di sicurezza**: SSL/TLS.
>>
> **Configurazione POP**
>>
>> - **Nome utente**: inserisci l'indirizzo e-mail **completo**.
>> - **Password**: inserisci la password dell'indirizzo e-mail.
>> - **Server entrante**: pro?.mail.ovh.net (sostituisci correttamente il "?" con il numero del tuo server).
>> - **Porta**: 995.
>> - **Tipo di sicurezza**: SSL/TLS.

#### Impostazioni di invio SMTP <a name="smtp"></a>

Per l'invio delle e-mail, troverai qui sotto le impostazioni **SMTP** da utilizzare:

**Configurazione SMTP**

- **Nome utente**: inserisci l'indirizzo e-mail **completo**.
- **Password**: inserisci la password dell'indirizzo e-mail.
- **Server in uscita**: pro?.mail.ovh.net (sostituisci correttamente il "?" con il numero del tuo server).
- **Porta**: 587.
- **Tipo di sicurezza**: STARTTLS.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su macOS, vedere [Microsoft Help Center](https://support.microsoft.com/it-it/office/aggiungere-un-account-di-posta-in-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurare un account email su Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurare un account Exchange su Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Contatta la nostra [Community di utenti](/links/community).