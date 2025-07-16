---
title: "Zimbra Pro - Configurare un account email con ActiveSync su Outlook per Android"
excerpt: "Scopri come configurare il tuo indirizzo email Zimbra Pro sull’applicazione mobile Outlook per Android tramite il protocollo ActiveSync"
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

Gli account Zimbra Pro possono essere configurati su un cellulare Android utilizzando il protocollo ActiveSync. In questo modo è possibile configurare tutte le funzionalità collaborative del proprio indirizzo email in una sola volta. L'applicazione Microsoft Outlook su Android è disponibile gratuitamente dal Google Play Store.

**Questa guida ti mostra come configurare il tuo indirizzo email Zimbra Pro sull’applicazione mobile Outlook per Android tramite il protocollo ActiveSync.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. Garantire il corretto funzionamento di questi servizi è responsabilità dell’utente.
>
> Questa guida è progettata per aiutarvi a svolgere le attività più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [partner specializzato](https://marketplace.ovhcloud.com/c/support-collaboration) o il fornitore del servizio. Non saremo infatti in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di un indirizzo email [Zimbra Pro](/links/web/emails-zimbra).
- Aver installato l’[applicazione Outlook](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=it) sul proprio dispositivo mobile Android.
- Disporre delle credenziali associate all’indirizzo email da configurare.

> [!primary]
>
> Questa guida è stata realizzata da un dispositivo che utilizza la versione 14 di Android.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

- **Al primo avvio dell’applicazione Outlook**, verrà visualizzata un’assistente di configurazione:
    - Clicca su `Aggiungi account`{.action}.

  ![outlook android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **Se un account è già impostato sull'applicazione Outlook**:
    - Clicca sulla busta (`✉`{.action}) in alto a sinistra.
    - Clicca sul pulsante `+`{.action} nella barra verticale sinistra.
    - Clicca su `Aggiungi account`{.action}.

  ![outlook android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Segui i passaggi di installazione cliccando sulle **3** schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Inserisci il tuo indirizzo email e clicca su `Continua`{.action}.
>>
>> ![outlook android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> ![android outlook](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Seleziona **Exchange** nella lista dei tipi di account.
>> - **O**, se si ottiene una finestra che richiede di selezionare il protocollo **IMAP** o **POP3**, premere l'uno o l'altro. Nella finestra successiva, clicca sul pulsante `?`{.action} nell’angolo in alto a destra dello schermo e seleziona `Cambia provider account`{.action}. Seleziona `Exchange`.
>>
>> ![outlook android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Nella finestra successiva, spunta `Impostazioni avanzate`{.action} e inserisci le informazioni seguenti:
>>
>> - **Indirizzo email**: Inserisci il tuo indirizzo email completo.
>> - **Descrizione**: Inserisci un nome che permetta di identificare questo account tra quelli registrati su Outlook.
>> - **Server**: Inserisci "zimbra1.mail.ovh.net".
>> - **Dominio**: Lasciare vuoto questo campo.
>> - **Nome utente**: Inserisci il tuo indirizzo email completo.
>>
>> Per completare la configurazione, clicca sul pulsante " &#10003;".
>>
>> ![outlook android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, puoi iniziare a utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi, ma anche gestire calendari e task.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. È possibile accedere alla [webmail OVHcloud](/links/web/email) con le credenziali del tuo indirizzo email. Per qualsiasi domanda relativa al suo utilizzo, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Come modificare le impostazioni esistenti? <a name="modify-settings"></a>

L’applicazione Outlook non permette di modificare le impostazioni server dell’account email.

Se il tuo account email è già configurato e vuoi modificarne le impostazioni, è necessario eliminarlo e ricrearlo:

1. Premere la busta (`✉`{.action}) nell'angolo superiore sinistro dello schermo.
2. Premere l’icona di regolazione (`⛭`{.action}) nella parte inferiore della colonna sinistra.
3. Nella sezione "Generale", clicca su `Account` per visualizzare tutti gli indirizzi email configurati sull’applicazione.

  ![outlook android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Seleziona l’account email interessato.
5. Clicca su `Elimina l’account`{.action}.
6. Clicca su `Elimina`{.action} quando compare la domanda "Vuoi eliminare l'account?".

  ![outlook android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Una volta eliminato il tuo account email, segui gli step di installazione indicati nella sezione "[Aggiungi l’account](#add-account)" di questa guida.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su Android, consultare il [centro assistenza Microsoft](https://support.microsoft.com/it-it/office/configurare-la-posta-elettronica-nell-app-outlook-per-android-886db551-8dfa-4fd5-b835-f8e532091872).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).