---
title: "Email Pro - Configurare un account email su Outlook per iOS"
excerpt: "Scopri come configurare il tuo indirizzo Email Pro sull’applicazione mobile Outlook per iOS"
updated: 2025-04-28
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili. per permetterti di utilizzare il tuo indirizzo email dal dispositivo che preferisci. L'applicazione Microsoft Outlook su iOS è disponibile gratuitamente dall'App Store di Apple.

**Scopri come configurare il tuo indirizzo Email Pro sull’applicazione mobile Outlook per iOS**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther).

## Prerequisiti

- Disporre di un indirizzo [Email Pro](/links/web/email-pro).
- Avere l’applicazione Outlook sul proprio dispositivo mobile [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Disporre delle credenziali associate all’indirizzo email da configurare.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro?.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
> 1. Accedi alla sezione `Web Cloud`{.action}.
> 1. Clicca su `Email Pro`{.action}.
> 1. Seleziona la piattaforma interessata. 
> 1. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
>

- **Al primo avvio dell’applicazione** : compare l’assistente di configurazione, clicca su `Aggiungi account`{.action}.

![outlook iOS](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Se è già stato impostato un account**:
    1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o l’icona di casa " &#8962;" in alto a sinistra dello schermo.
    2. Premere l'ingranaggio &#9881; nella parte inferiore sinistra dello schermo.
    3. Clicca su `Account`{.action} nel menu **Impostazioni**.
    4. Clicca su `Aggiungi un account`{.action}.
    5. Clicca su `Account di posta`{.action}.

![outlook iOS](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Inserisci il tuo indirizzo email e clicca su `Aggiungi un account`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Step 2**
>>
>> Avete due possibilità:
>>
>> - Se nella parte superiore della pagina è presente la voce "**IMAP**", andare al Step 3.
>> - Se nella finestra Parametro account è visualizzato "**Exchange**" in alto, clicca sul pulsante `?` nell’angolo in alto a destra dello schermo **(1)**, poi seleziona `Cambia provider account`{.action} **(2)**. Seleziona `IMAP` **(3)** e passa allo Step 3.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Step 3**
>>
>> Nella finestra successiva, spunta `Impostazioni avanzate`{.action} e inserisci le informazioni seguenti:
>>
>> - **Indirizzo email**
>> - **Nome visualizzato**: inserisci l’indirizzo email completo
>> - **Descrizione**
>> - **Server di posta in entrata IMAP**:<br>- **Nome host IMAP**: digitare pro?.mail.ovh.net (sostituire "?" con il numero del server)<br>- **Porta IMAP**: 993<br>- **Nome utente IMAP**: l'indirizzo e-mail completo<br>- **Password IMAP**: quello dell'indirizzo e-mail<br>- **Sicurezza porta**: SSL
>> - **Server di posta in uscita SMTP**:<br>- **Host Name SMTP**: inserisci `pro?.mail.ovh.net` (sostituisci bene "?" con il numero del tuo server)<br>- **Porta SMTP**: 587<br>- **Username SMTP**: il tuo indirizzo email completo<br>- **Password SMTP**: quello del tuo indirizzo email<br>- **Sicurezza della porta**: errori dell'ordine STARTLS
>>
>> Per completare la configurazione, clicca su `Connessione`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Se, dopo aver seguito i passaggi di configurazione di cui sopra, si verifica un errore di invio o di ricezione, vedere "[Modifica le impostazioni esistenti](#modify-settings)".

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. Per consultare la guida, clicca su questo link: [Webmail](/links/web/email). e accessibile con le credenziali del tuo account. Per maggiori informazioni sul suo utilizzo, consulta la nostra guida [consultare il proprio account dall’interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Modifica le impostazioni esistenti <a name="modify-settings"></a>

1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o l’icona di casa "&#8962;" in alto a sinistra dello schermo.
2. Premere l'ingranaggio "&#9881;" nella parte inferiore sinistra dello schermo.
3. Clicca su `Account`{.action} nel menu **Impostazioni**.
4. Selezionare l'account.
5. Clicca su `Modifica le informazioni di connessione`{.action}.

![outlook iOS](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

I parametri sono disponibili al **Step 3** del capitolo [Aggiungi account](#add-account).

### Eliminare un account email <a name="delete"></a>

1. Clicca sul cerchio che contiene le iniziali dell’account email consultato o l’icona di casa "&#8962;" in alto a sinistra dello schermo.
2. Premere l'ingranaggio "&#9881;" nella parte inferiore sinistra dello schermo.
3. Clicca su `Account`{.action} nel menu **Impostazioni**.
4. Selezionare l'account.
5. Clicca su `Elimina l’account`{.action}.

![outlook iOS](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### Richiamo dei parametri POP, IMAP e SMTP <a name="popimap-settings"></a>

#### Parametri di ricezione IMAP e POP

Per la ricezione delle email, durante la scelta del tipo di account, ti consigliamo di utilizzare il **IMAP**. Tuttavia, è possibile selezionare **POP**.

Fare clic sulla scheda relativa al protocollo di ricezione:

> [!tabs]
> **Configurazione IMAP**
>>
>> - **Nome utente**: Inserisci l'indirizzo email **completo**
>> - **Password**: Inserisci la password dell’indirizzo email
>> - **Server (in entrata)**: pro?.mail.ovh.net
>> - **Porta**: 993
>> - **Tipo di sicurezza**: SSL/TLS
>>
> **Configurazione POP**
>>
>> - **Nome utente**: Inserisci l'indirizzo email **completo**
>> - **Password**: Inserisci la password dell’indirizzo email
>> - **Server (in entrata)**: pro?.mail.ovh.net
>> - **Porta**: 995
>> - **Tipo di sicurezza**: SSL/TLS

#### Parametri di invio SMTP

Per l’invio delle email, se hai necessità di inserire manualmente le impostazioni **SMTP** nelle preferenze dell’account, trovi qui sotto le impostazioni da utilizzare:

**Configurazione SMTP**

- **Nome utente**: Inserisci l'indirizzo email **completo**
- **Password**: Inserisci la password dell’indirizzo email
- **Server (in entrata)**: pro?.mail.ovh.net
- **Porta**: 587
- **Tipo di sicurezza**: SSL/TLS

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su iOS, vedere [Microsoft Help Center](https://support.microsoft.com/office/set-up-the-outlook-app-for-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Per prestazioni specializzate (referenziazione, sviluppo, etc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un'assistenza per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).