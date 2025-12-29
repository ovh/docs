---
title: "Zimbra Pro - Configurare un account email con ActiveSync su Outlook per iOS"
excerpt: "Scopri come configurare il tuo indirizzo email Zimbra Pro sull’applicazione mobile Outlook per iOS tramite il protocollo ActiveSync"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Obiettivo

> [!primary]
> Questa guida è per i clienti che dispongono di un servizio di posta elettronica [Zimbra Pro](/links/web/emails-zimbra). Questo servizio sarà disponibile in beta a partire da luglio 2025.

Gli account Zimbra Pro possono essere configurati su un iPhone utilizzando il protocollo ActiveSync. In questo modo è possibile configurare tutte le funzionalità collaborative del proprio indirizzo email in una sola volta. L'applicazione Microsoft Outlook su iOS è disponibile gratuitamente dall'App Store di Apple.

**Questa guida ti mostra come configurare il tuo indirizzo email Zimbra Pro sull’applicazione mobile Outlook per iOS tramite il protocollo ActiveSync.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. Garantire il corretto funzionamento di questi servizi è responsabilità dell’utente.
>
> Questa guida è progettata per aiutarvi a svolgere le attività più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [partner specializzato](/links/partner) o il fornitore del servizio. Non saremo infatti in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di un indirizzo email [Zimbra Pro](/links/web/emails-zimbra).
- Aver installato l’applicazione [Outlook for iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Disporre delle credenziali associate all’indirizzo email da configurare.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

- **Al primo avvio dell’applicazione Outlook**, verrà visualizzata un’assistente di configurazione:
    - Clicca su `Aggiungi account`{.action}.

  ![outlook-ios](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Se un account è già impostato sull'applicazione Outlook**:
    1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o sull’icona di casa (`⌂`{.action}) in alto a sinistra dello schermo.
    2. Premere l'ingranaggio (`⛭`{.action}) nella parte inferiore sinistra dello schermo.
    3. Clicca su `Account`{.action} nel menu **Impostazioni**.
    4. Clicca su `Aggiungi un account`{.action}.
    5. Clicca su `Account di posta`{.action}.

  ![outlook-ios](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Segui i passaggi di installazione cliccando sulle **3** schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Inserisci il tuo indirizzo email e clicca su `Aggiungi un account`{.action}.
>>
>> ![outlook-ios](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> Sono possibili due scenari:
>>
>> - Se nella parte superiore della pagina compare la voce "**IMAP**": clicca sul pulsante `?` nell’angolo in alto a destra dello schermo **(1)**, poi seleziona `Cambia provider account`{.action} **(2)**. Seleziona `Exchange` **(3)** e passa allo Step 3.
>>
>> ![outlook-ios](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Se sei diretto alla scelta del tipo di account, seleziona `Exchange`.
>>
> **Step 3**
>>
>> Nella finestra successiva, spunta `Impostazioni avanzate`{.action} e inserisci le informazioni seguenti:
>>
>> - **Indirizzo email**: Inserisci il tuo indirizzo email completo.
>> - **Password**: Inserisci la password associata al tuo indirizzo email.
>> - **Descrizione**: Inserisci un nome che permetta di identificare questo account tra quelli registrati su Outlook.
>> - **Server**: inserisci "zimbra1.mail.ovh.net".
>> - **Dominio**: Lasciare vuoto questo campo.
>> - **Nome utente**: inserisci il tuo indirizzo email completo.
>>
>> Per completare la configurazione, clicca su `Connessione`{.action}.
>>
>> ![outlook-ios](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Se riscontri un problema di invio o di ricezione dopo aver seguito i passaggi di configurazione di cui sopra, consulta l'argomento "[Modifica le impostazioni esistenti](#modify-settings)" di questa guida.

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, puoi iniziare a utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi, ma anche gestire calendari e task.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. È possibile accedere alla [webmail OVHcloud](/links/web/email) con le credenziali del tuo indirizzo email. Per qualsiasi domanda relativa al suo utilizzo, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Come modificare le impostazioni esistenti? <a name="modify-settings"></a>

1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o l’icona della casa (`⌂`{.action}) nella parte superiore sinistra dello schermo.
1. Premere l'ingranaggio (`⛭`{.action}) nella parte inferiore sinistra dello schermo.
1. Clicca su `Account`{.action} nel menu **Impostazioni**.
1. Selezionare l'account.
1. Clicca su `Modifica le informazioni di connessione`{.action}.

![outlook-ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

I parametri sono disponibili al **step 3** del capitolo "[Aggiungi account](#add-account)".

### Come eliminare un account email? <a name="delete-account"></a>

1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o l’icona della casa (`⌂`{.action}) nella parte superiore sinistra dello schermo.
1. Premere l'ingranaggio (`⛭`{.action}) nella parte inferiore sinistra dello schermo.
1. Clicca su `Account`{.action} nel menu **Impostazioni**.
1. Selezionare l'account.
1. Clicca su `Elimina l’account`{.action}.

![outlook-ios](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su iOS, consultare il [centro assistenza Microsoft](https://support.microsoft.com/it-it/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).