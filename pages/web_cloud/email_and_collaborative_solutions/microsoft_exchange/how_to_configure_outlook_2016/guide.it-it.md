---
title: 'Exchange - Configurare un account email su Outlook classico per Windows'
excerpt: 'Come configurare un account Exchange su Outlook classico per Windows'
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

Gli account Exchange possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci. Microsoft Outlook è il software consigliato per utilizzare un indirizzo email Exchange con le sue funzioni collaborative.

**Questa guida ti mostra come configurare un account Exchange su Microsoft Outlook per Windows.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YeGXo10CX8?si=mINBBXq6qb4MiFEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prerequisiti

- Disporre di una soluzione [Exchange](/links/web/emails)
- Aver installato [Outlook classico](https://support.microsoft.com/it-it/office/installare-o-reinstallare-la-versione-classica-di-outlook-in-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) su Windows.
- Disporre delle credenziali associate all’indirizzo email da configurare
- Il record SRV di OVHcloud deve essere configurato correttamente nella zona DNS del nome di dominio, consulta la nostra guida "[Aggiungere un dominio sul servizio Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".

/// details | Informazioni relative alla gestione e alla configurazione dei servizi OVHcloud

OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.

Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “[Per saperne di più](#go-further)” di questa guida.

///

> [!primary]
>
> Utilizzi Outlook e poi per Mac? Consulta la nostra documentazione: [Configurare un account Exchange su Outlook per Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).

## Procedura

> [!warning]
>
> Prima di iniziare la configurazione, è importante notare che l’applicazione Outlook inclusa gratuitamente con Windows 11 è [incompatibile](https://learn.microsoft.com/it-it/microsoft-365-apps/outlook/get-started/supported-account-types) con le offerte Exchange OVHcloud, *on-premises*. Lei dovrà utilizzare la versione **Outlook classica**.
>
> Per installare Outlook classico sul computer Windows, scaricarlo dalla pagina Microsoft "[Installa o reinstalla Outlook classico su un PC Windows](https://support.microsoft.com/it-it/office/installare-o-reinstallare-la-versione-classica-di-outlook-in-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e installarlo.
>
> Al termine dell'installazione, per distinguere le due versioni quando vengono installate, digitare Outlook nella barra di ricerca di Windows. La differenza è visibile come mostrato qui di seguito.
>
> ![outlook di Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Aggiungi l'account <a name="add-account"></a>

- **All'avvio iniziale dell'applicazione**: un assistente di configurazione appare e ti invita a inserire il tuo indirizzo e-mail.

- **Se hai già configurato un account**, clicca su `File`{.action} nella barra dei menù in alto nello schermo e poi su `Aggiungi account`{.action}.

![Outlook](images/config-outlook-exchange01.png){.thumbnail .h-500}

- Lascia selezionato `Account di posta` e completa le seguenti informazioni:
    - **Nome**: imposta un nome da visualizzare.
    - **Indirizzo di posta**: inserisci il tuo indirizzo e-mail completo.
    - **Password**: inserisci la password associata al tuo indirizzo e-mail.
    - **Conferma password**: reinserisci la password associata al tuo indirizzo e-mail.
- Clicca su `Avanti`{.action} per continuare.

![exchange](images/config-outlook-exchange02.png){.thumbnail .h-500}

- Se la configurazione del tuo nome di dominio è valida, potrebbe apparire un messaggio di autorizzazione alla connessione al server Exchange OVHcloud. Clicca su `Autorizza`{.action} **(1)** per permettere la configurazione automatica del tuo account Exchange.
- Apparirà una seconda finestra di autenticazione, inserisci la password del tuo indirizzo e-mail **(2)**.

![exchange](images/config-outlook-exchange03.png){.thumbnail .h-500}

Dopo l'autorizzazione e l'autenticazione al server Exchange OVHcloud, la configurazione sarà completata e il tuo account sarà operativo.

### Utilizzare l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

Il tuo indirizzo email Exchange e tutte le sue funzioni collaborative sono disponibili anche tramite l'interfaccia [OWA](/links/web/email). Per maggiori informazioni sul suo utilizzo, consulta la guida "[Consultare il suo account Exchange dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Modificare le impostazioni esistenti

> [!warning]
>
> Non è possibile modificare le impostazioni del server di un account Exchange. Se riscontri un'anomalia relativa alla sincronizzazione con il server, è necessario eliminare l'account di Outlook e configurarlo nuovamente. Per farlo, segui le istruzioni riportate di seguito.

Se il tuo account e-mail è già configurato e devi accedere alle impostazioni dell'account per eliminarlo:

- Vai su `File`{.action} dalla barra del menu in alto sul tuo schermo.
- Seleziona l'account da modificare nel menu a discesa **(1)**.
- Clicca su `Impostazioni account`{.action} **(2)** in basso.
- Clicca su `Impostazioni account...`{.action} **(3)** per accedere alla finestra delle impostazioni.

![Outlook](images/config-outlook-exchange04.png){.thumbnail .h-500}

- Appare la finestra delle impostazioni degli account, seleziona l'account e-mail interessato e clicca su `Elimina`{.action}.

![Outlook](images/config-outlook-exchange05.png){.thumbnail .h-500}

Una volta eliminato l'account Exchange, segui la parte "[Aggiungi l'account](#add-account)" di questa guida per configurare nuovamente il tuo account e-mail.

### Recuperare un backup del tuo indirizzo email

Se è necessario effettuare un'operazione che potrebbe comportare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preliminare dell'account email in questione. Per effettuare questa operazione, consulta il paragrafo "**Esporta da Windows**" nella nostra guida "[Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#esporta-da-windows)".

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su Windows, vedere [Microsoft Help Center](https://support.microsoft.com/it-it/office/aggiungere-un-account-di-posta-in-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurare un account email su Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurare un account Email Pro su Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Contatta la nostra [Community di utenti](/links/community).