---
title: 'Email Pro - Configurare un account email su Outlook classico per Windows'
excerpt: 'Scopri come configurare il tuo account Email Pro su Outlook classico per Windows'
updated: 2026-01-30
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

<!-- CP-NAV-START:web-email-pro -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Email Pro](/links/control-panel/web-email-pro)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Email Pro`{.action} > Seleziona la tua piattaforma

---
<!-- CP-NAV-END:web-email-pro -->

/// details | Informazioni relative alla gestione e alla configurazione dei servizi OVHcloud

OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.

Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “[Per saperne di più](#go-further)” di questa guida.

///

## Procedura

> [!warning]
>
> Questa documentazione si applica esclusivamente a **Outlook classico** disponibile nella suite Microsoft 365. Se utilizzi il nuovo Outlook, consulta la nostra guida [Email Pro - Configurazione del tuo account Email Pro sul nuovo Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10).
>
> Per installare Outlook classico sul tuo computer Windows, scaricalo dalla pagina Microsoft "[Installare o reinstallare Outlook classico su un PC Windows](https://support.microsoft.com/it-it/office/installare-o-reinstallare-la-versione-classica-di-outlook-in-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e installalo.
>
> Una volta completata l'installazione, per distinguere le due versioni quando sono installate, digita "Outlook" nella barra di ricerca Windows. Potrai quindi notare la differenza come mostrato di seguito.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Aggiungi l'account <a name="add-account"></a>

> [!primary]
>
> Nel nostro esempio, utilizziamo la dicitura server: pro?.mail.ovh.net. Dovrai sostituire il "?" con il numero che indica il server del tuo servizio Email Pro.
>
> Clicca su [questo link](/links/control-panel/web-email-pro) per accedere alla sezione `Email Pro`{.action}. Il nome del server viene visualizzato nella zona **Connessione** della scheda `Informazioni generali`{.action}.

- **All'avvio iniziale dell'applicazione**: un assistente di configurazione appare e ti invita a inserire il tuo indirizzo e-mail. Passa direttamente all'etapa 1 più in basso su questa pagina.

- **Se è già stato configurato un account**: clicca su `File`{.action} nella barra del menu in alto sul tuo schermo, quindi su `Aggiungi un account`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

**Su Windows 11, l'interfaccia di Outlook classico può variare quando si aggiunge un account.**

A seconda della storia d'uso di Outlook sul computer interessato, una configurazione specifica può causare la visualizzazione di un'interfaccia diversa. In alcuni casi, l'interfaccia detta "moderna" (**interfaccia 1**) può essere disattivata a favore dell'interfaccia storica (**interfaccia 2**).

Per questo motivo, vi invitiamo a consultare il capitolo corrispondente all'interfaccia visualizzata sul vostro schermo.

#### Configurazione con l'interfaccia 1 <a name="add-account-int1"></a>

Per configurare il vostro indirizzo e-mail, seguite le fasi cliccando sui tab sottostanti.

> [!tabs]
> **Passo 1**
>>
>> Inserite il vostro indirizzo e-mail, quindi cliccate su `Opzioni avanzate`{.action}.
>>
>> Selezionate la casella `Configura il mio account manualmente`{.action} e cliccate su `Connessione`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro02.png){.thumbnail .h-500}
>>
> **Passo 2**
>>
>> Tra i tipi di account proposti, scegliete IMAP o POP.
>>
>> Consigliamo l'utilizzo del protocollo IMAP.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro03.png){.thumbnail .h-500}
>>
> **Passo 3**
>>
>> Inserite la password del vostro indirizzo e-mail, quindi cliccate su `Connetti`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro04.png){.thumbnail .h-500}
>>
> **Passo 4**
>>
>> Se Outlook non riesce a configurare automaticamente l'account, si visualizza la finestra seguente.
>>
>> Cliccate su `Modifica le impostazioni dell'account`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro05.png){.thumbnail .h-500}
>>
> **Passo 5**
>>
>> Nella sezione **Posta in arrivo**, inserite:
>> 
>> - Server: **pro**?**.mail.ovh.net** (sostituite bene il "**?**" con il numero del vostro server)
>> - Porta: **993**
>> - Metodo di crittografia: **SSL/TLS**
>>
>> Nella sezione **Posta in uscita**, inserite:
>>
>> - Server: **pro**?**.mail.ovh.net** (sostituite bene il "**?**" con il numero del vostro server)
>> - Porta: **587**
>> - Metodo di crittografia: **STARTTLS**
>>
>> Cliccate su `Avanti`{.action} per confermare.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro06.png){.thumbnail .h-500}
>>

#### Configurazione con l'interfaccia 2 <a name="add-account-int2"></a>

Per configurare il vostro indirizzo e-mail, seguite le fasi cliccando sui tab sottostanti.

> [!tabs]
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

**Su Windows 11, l'interfaccia di Outlook classico può variare quando modificate un account.**

A seconda della storia d'uso di Outlook sul computer interessato, una configurazione specifica può causare la visualizzazione di un'interfaccia diversa. In alcuni casi, l'interfaccia detta "moderna" (**interfaccia 1**) può essere disattivata a favore dell'interfaccia storica (**interfaccia 2**).

Per questo motivo, vi invitiamo a consultare il capitolo corrispondente all'interfaccia visualizzata sul vostro schermo.

> [!tabs]
> **Interfaccia 1**
>>
>> Se il vostro account e-mail è già configurato e dovete accedere alle sue impostazioni per modificarle:
>>
>> - Cliccate su `File`{.action} nella barra del menu in alto sullo schermo, quindi selezionate l'account da modificare nel menu a discesa **(1)**.
>> - Cliccate su `Impostazioni dell'account`{.action } **(2)** in basso.
>> - Selezionate `Impostazioni del server`{.action} **(3)** per visualizzare la finestra di configurazione.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro07.png){.thumbnail}
>>
>> La finestra è divisa in due parti, **Posta in arrivo** e **Posta in uscita**. Cliccate sulla parte che desiderate modificare.
>>
>> > [!primary]
>> >
>> > Nel nostro esempio, il nome del server utilizzato è "pro**?**.mail.ovh.net". Dovrete sostituire il carattere "?" con il numero corrispondente al server del vostro servizio Email Pro.
>> >
>> > Clicca su [questo link](/links/control-panel/web-email-pro) per accedere alla sezione `Email Pro`{.action}. Il nome del server viene visualizzato nella zona **Connessione** della scheda `Informazioni generali`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-emailpro08.png){.thumbnail}
>>
> **Interfaccia 2**
>>
>> Se il vostro account e-mail è già configurato e dovete accedere alle sue impostazioni per modificarle:
>>
>> - Cliccate su `File`{.action} nella barra del menu in alto sullo schermo, quindi selezionate l'account da modificare nel menu a discesa **(1)**.
>> - Cliccate su `Impostazioni dell'account`{.action} **(2)** in basso.
>> - Cliccate su `Impostazioni dell'account...`{.action} **(3)** per accedere alla finestra di configurazione.
>>
>> ![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}
>>
>> - Si visualizza la finestra delle impostazioni degli account: selezionate l'account e-mail interessato, quindi cliccate su `Modifica...`{.action}.
>>
>> ![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}
>>
>> Per configurare il vostro account, seguite le istruzioni a partire dal **passo 2** nella sezione "[Aggiungi l'account - Configurazione con l'interfaccia 2](#add-account-int2)" di questa guida.
>>

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