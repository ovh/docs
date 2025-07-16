---
title: "Zimbra Pro - Configurare un account email via EWS in Mail su Mac"
excerpt: "Scopri come configurare il tuo indirizzo email Zimbra Pro sull’applicazione Mail su Mac tramite il protocollo EWS"
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

Gli account Zimbra Pro possono essere configurati su un macOS utilizzando il protocollo EWS (**E**xchange **W**eb **S**services). In questo modo è possibile configurare tutte le funzionalità collaborative del proprio indirizzo email in una sola volta. L'applicazione Mail è disponibile nativamente su macOS.

**Scopri come configurare il tuo indirizzo email Zimbra Pro sull’applicazione Mail su Mac tramite il protocollo EWS.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. Garantire il corretto funzionamento di questi servizi è responsabilità dell’utente.
>
> Questa guida è progettata per aiutarvi a svolgere le attività più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [partner specializzato](https://marketplace.ovhcloud.com/c/support-collaboration) o il fornitore del servizio. Non saremo infatti in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di un indirizzo email [Zimbra Pro](/links/web/emails-zimbra).
- Aver installato l’applicazione Mail sul proprio Mac.
- Disporre delle credenziali associate all’indirizzo email da configurare.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

- **Al primo avvio dell’applicazione Mail**, comparirà direttamente un assistente di configurazione che ti inviterà a scegliere il tipo di account.

- **Se sull’applicazione Mail è già stato impostato un account**:
    - Clicca su `Mail`{.action} nella barra dei menu in alto nello schermo.
    - Clicca su `Account`{.action}.
    - Nella finestra "Account Internet" che appare, clicca su `Aggiungi un account`{.action}

![mail macOS](images/mail-macos-add-step00.png){.thumbnail .h-500}

Segui i passaggi di installazione cliccando sulle **3** schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> - Seleziona `Microsoft Exchange`{.action}.
>> - Definisci un **nome** e inserisci il tuo **indirizzo email**.
>> - Clicca su `Accedi`{.action}.
>>
>> ![mail macos](images/mail-macos-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> - Seleziona `Configura manualmente`{.action} dalla finestra che appare.
>> - Inserisci la **password** del tuo indirizzo email in aggiunta alle informazioni già inserite.
>>
>> ![mail macos](images/mail-macos-add-step02.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Verificate e completate le seguenti informazioni:
>>
>> - **Indirizzo email**: Inserisci il tuo indirizzo email completo.
>> - **Nome utente**: Inserisci l’indirizzo email completo.
>> - **Password**: Inserisci la password associata al tuo indirizzo e-mail.
>> - **URL interno**: Inserisci "zimbra1.mail.ovh.net".
>> - **URL esterno**: Inserisci "zimbra1.mail.ovh.net".
>>
>> Per completare la configurazione, clicca su `Accedi`{.action} e seleziona le funzionalità che vuoi esplorare sul tuo Mac.
>>
>> ![mail macos](images/mail-macos-add-step04.png){.thumbnail .h-500}
>>
>> > [!warning]
>> >
>> > È normale vedere apparire il messaggio in rosso "**Impossibile verificare il nome o la password dell'account**" quando viene visualizzata la finestra. Tuttavia, se il messaggio persiste dopo la convalida, significa che le informazioni inserite sono errate.

> [!warning]
>
> Se riscontri un problema di invio o di ricezione dopo aver seguito i passaggi di configurazione di cui sopra, consulta l'argomento "[Modifica le impostazioni esistenti](#modify-settings)" di questa guida.

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, puoi iniziare a utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi, ma anche gestire calendari e task.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. È possibile accedere alla [webmail OVHcloud](/links/web/email) con le credenziali del tuo indirizzo email. Per qualsiasi domanda relativa al suo utilizzo, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Come modificare le impostazioni esistenti? <a name="modify-settings"></a>

L’applicazione Mail su Mac non permette di modificare le impostazioni server di un account email Exchange.

Se il tuo account email è già configurato e vuoi modificarne le impostazioni, è necessario eliminarlo e ricrearlo.

Per eliminare un account email Exchange, segui le istruzioni qui sotto:

1. Clicca su `Mail`{.action} nella barra dei menu in alto nello schermo.
1. Clicca su `Account`{.action} e seleziona l’account email interessato.
1. Clicca su `Elimina l’account`{.action}.

![mail macos](images/mail-macos-modify-delete-01.png){.thumbnail .h-500}

> [!success]
>
> Una volta eliminato il tuo account email, segui gli step di installazione indicati nella sezione "[Aggiungi l’account](#add-account)" di questa guida.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per informazioni sulla configurazione di un indirizzo email dall’applicazione Mail su macOS, consulta il [centro assistenza Apple](https://support.apple.com/fr-fr/102619).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).