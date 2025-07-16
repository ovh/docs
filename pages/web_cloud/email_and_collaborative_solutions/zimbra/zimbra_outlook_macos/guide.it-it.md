---
title: "Zimbra Pro - Configurare un account email via EWS su Outlook per Mac"
excerpt: "Scopri come configurare il tuo indirizzo email Zimbra Pro su Outlook per macOS tramite il protocollo EWS"
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

Gli account Zimbra Pro possono essere configurati su un Mac utilizzando il protocollo EWS (**E**xchange **W**eb **S**services). In questo modo è possibile configurare tutte le funzionalità collaborative del proprio indirizzo email in una sola volta. L'applicazione [Outlook su macOS](https://apps.apple.com/fr/app/microsoft-outlook/id985367838?mt=12) è disponibile sull'App Store di Apple.

**Questa guida ti mostra come configurare il tuo indirizzo email Zimbra Pro su Outlook per macOS tramite il protocollo EWS.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. Garantire il corretto funzionamento di questi servizi è responsabilità dell’utente.
>
> Questa guida è progettata per aiutarvi a svolgere le attività più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [partner specializzato](https://marketplace.ovhcloud.com/c/support-collaboration) o il fornitore del servizio. Non saremo infatti in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di un indirizzo email [Zimbra Pro](/links/web/emails-zimbra).
- Aver installato l’applicazione [Outlook su macOS](https://apps.apple.com/fr/app/microsoft-outlook/id985367838?mt=12).
- Disporre delle credenziali associate all’indirizzo email da configurare.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

- **Al primo avvio dell’applicazione Outlook**: un assistente di configurazione apparirà direttamente sullo schermo e ti inviterà a inserire il primo indirizzo email che desideri aggiungere.

- **Se un account è già impostato sull'applicazione Outlook**:
    1. Clicca su `Strumenti`{.action} nella barra del menu nella parte superiore dello schermo.
    2. Clicca su `Account`{.action}.
    3. Nella finestra "Account", clicca su `+`{.action} in basso a sinistra e poi su `Nuovo account`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Segui i passaggi di installazione cliccando sulle **3** schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Inserisci il tuo indirizzo email sotto la voce "Indirizzo di posta" e clicca su `Continua`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> Sono possibili due scenari:
>>
>> - **Se compare la finestra "IMAP/POP"** : clicca su `Non è un account POP/IMAP`{.action}, poi seleziona `Exchange`{.action} dalla finestra "Scegli il provider".
>> - **Se ti imbatti direttamente in "Scegli il fornitore"**, scegli `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Verificate e completate le seguenti informazioni:
>>
>> - **Metodo**: Scegli `Nome utente e password`.
>> - **Indirizzo email**: Inserisci l’indirizzo email completo.
>> - **DOMINIO\Nome utente o indirizzo di posta elettronica**: Inserisci l’indirizzo email completo.
>> - **Password**: Inserisci la password associata al tuo indirizzo email.
>> - **Server**: Inserisci "zimbra1.mail.ovh.net".
>>
>> Per completare la configurazione, clicca su `Aggiungi un account`{.action} e seleziona le funzionalità che vuoi esplorare sul tuo Mac.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Se riscontri un problema di invio o di ricezione dopo aver seguito i passaggi di configurazione di cui sopra, consulta l'argomento "[Modifica le impostazioni esistenti](#modify-settings)" di questa guida.

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, puoi iniziare a utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi, ma anche gestire calendari e task.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. È possibile accedere alla [webmail OVHcloud](/links/web/email) con le credenziali del tuo indirizzo email. Per qualsiasi domanda relativa al suo utilizzo, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Come modificare le impostazioni esistenti? <a name="modify-settings"></a>

Per modificare le impostazioni di un account email già configurato, segui le istruzioni seguenti:

1. Clicca su `Strumenti`{.action} nella barra del menu nella parte superiore dello schermo.
1. Clicca su `Account`{.action}.
1. Seleziona il tuo account nella colonna di sinistra.
1. Clicca su `Avanzate...`{.action} in basso a destra.

![outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

I parametri sono disponibili al **step 3** del capitolo "[Aggiungi account](#add-account)".

### Come eliminare un account email? <a name="delete-account"></a>

1. Clicca su `Strumenti`{.action} nella barra del menu nella parte superiore dello schermo.
1. Clicca su `Account`{.action}.
1. Seleziona il tuo account nella colonna di sinistra.
1. Clicca su `-`{.action} in basso a sinistra

![outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per informazioni sulla configurazione di un indirizzo email dall’applicazione Mail su macOS, consulta il [centro assistenza Apple](https://support.apple.com/it-it/102619).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).