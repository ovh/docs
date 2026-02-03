---
title: "Email Pro - Configurare un indirizzo email su Outlook per Android"
excerpt: "Questa guida ti mostra come configurare un account Email Pro su Adroid con l'applicazione Microsoft Outlook"
updated: 2025-08-18
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

Gli account Email Pro possono essere configurati su client di posta compatibili. per permetterti di utilizzare il tuo indirizzo email dal dispositivo che preferisci. L'applicazione Microsoft Outlook su Android è disponibile gratuitamente dal Google Play Store.

**Questa guida ti mostra come configurare un account Email Pro su Android con l'applicazione Microsoft Outlook.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner) o di contattare l'amministratore del servizio. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.

## Prerequisiti

- Disporre di una soluzione [Email Pro](/links/web/email-pro)
- Avere l’applicazione Outlook sul proprio dispositivo mobile [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=it).
- Disporre delle credenziali associate all’indirizzo email da configurare.

## Procedura

### Aggiungi l'account <a name="add-account"></a>

> [!warning]
>
> Nei nostri esempi, utilizziamo la dicitura server: pro?.mail.ovh.net. Sostituisci "?" con il numero che indica il server del tuo servizio Email Pro.
>
> Ritrova questa cifra nel tuo [Spazio Cliente OVHcloud](/links/manager), nella sezione `Web Cloud`{.action} poi `Email Pro`{.action}. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.

- **Al primo avvio dell’applicazione** : compare l’assistente di configurazione, clicca su `Aggiungi account`{.action}.

![outlook android email pro](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Se è già stato impostato un account**:
    - Premere lo skin " &#9993;" in alto a sinistra.
    - Clicca sul pulsante `+`{.action} nella barra verticale sinistra.
    - Clicca su `Aggiungi account`{.action}.

![outlook android email pro](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Inserisci il tuo indirizzo email e clicca su `Continua`{.action}.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Step 2**
>>
>> Selezionare il protocollo di ricezione, **IMAP**(consigliato) o **POP3**.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> > [!warning]
>> >
>> > Se la finestra di scelta del protocollo non appare, clicca sul pulsante `?` nell’angolo superiore destro dello schermo e seleziona `Cambia provider account`{.action}. Seleziona `IMAP`(consigliato) o `POP3`.<br>
>> >![outlook android email pro](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Step 3 - IMAP**
>>
>> Nella finestra successiva, spunta `Impostazioni avanzate`{.action} e inserisci le informazioni seguenti:
>>
>> - **Indirizzo email**
>> - **Nome visualizzato**: inserisci l’indirizzo email completo
>> - **Descrizione**
>> - **Server di posta in entrata IMAP**:<br>- **Nome host IMAP**: digita pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).<br>- **Porta**: 993<br>- **Tipo di sicurezza**: SSL/TLS<br>- **Nome utente IMAP**: il tuo indirizzo email completo<br>- **Password IMAP**: quello del tuo indirizzo email
>> - **Server di posta in uscita SMTP**:<br>- **Host Name SMTP**: inserisci pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).<br>- **Porta**: 587<br>- **Tipo di sicurezza**: STARTTLS<br>- **Username SMTP**: indirizzo email completo<br>- **Password SMTP**: indirizzo email
>>
>> Per completare la configurazione, clicca sul pulsante "&#10003;".
>>
>> ![outlook android email pro](images/outlook-app-android-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>
> **Step 3 - POP3**
>>
>> Nella finestra successiva, spunta `Impostazioni avanzate`{.action} e inserisci le informazioni seguenti:
>>
>> - **Indirizzo email**
>> - **Nome visualizzato**: Inserisci l’indirizzo email completo
>> - **Descrizione**
>> - **Server di posta in entrata POP3**:<br>- **Host Name POP3**: inserisci pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).<br>- **Porta**: 995<br>- **Tipo di sicurezza**: SSL/TLS<br>- **Username POP3**: il tuo indirizzo email completo<br>- **Password POP3*: quello del tuo indirizzo email
>> - **Server di posta in uscita SMTP**:<br>- **Host Name SMTP**: inserisci pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).<br>- **Porta**: 587<br>- **Tipo di sicurezza**: STARTTLS<br>- **Username SMTP**: indirizzo email completo<br>- **Password SMTP**: indirizzo email
>>
>> Per completare la configurazione, clicca sul pulsante "&#10003;".
>>
>> ![outlook android email pro](images/outlook-app-android-add-step03-pop-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Se, dopo aver seguito i passaggi di configurazione di cui sopra, si verifica un errore di invio o di ricezione, vedere "[Modifica le impostazioni esistenti](#modify-settings)".

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! Da questo momento è possibile inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. Per consultare la guida, clicca su questo link: [Webmail](/links/web/email). e accessibile con le credenziali del tuo account. Per maggiori informazioni sul suo utilizzo, consulta la nostra guida [consultare il proprio account dall’interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Modifica le impostazioni esistenti <a name="modify-settings"></a>

L’applicazione Outlook non permette di modificare le impostazioni server dell’account email.

Se il tuo account email è già stato configurato e vuoi configurarlo di nuovo, è necessario eliminarlo e ricrearlo:

1. Premere lo skin " &#9993;" nell'angolo superiore sinistro dello schermo.
2. Premere l'icona di regolazione " &#9965;" nella parte inferiore della colonna sinistra.
3. Nella sezione "Generale", clicca su `Account` per visualizzare tutti gli indirizzi email configurati sull’applicazione.

![outlook android email pro](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Seleziona l’account email associato.
- Clicca su `Elimina l’account`{.action}.
- Clicca su `Elimina`{.action} alla domanda "Vuoi eliminare l'account?".

![outlook android email pro](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Una volta eliminato l’account email, segui le istruzioni riportate nella sezione "[Aggiungi l’account](#add-account)" di questa guida.

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
- **Server (in uscita)**: pro?.mail.ovh.net
- **Porta**: 587
- **Tipo di sicurezza**: STARTTLS

> [!primary]
>
> **Modifica la configurazione**
>
> Se il tuo indirizzo email è configurato in **IMAP** e vuoi modificare questa configurazione in **POP**, elimina l’account e poi ricrealo in **POP**. Consulta il capitolo "[Modifica le impostazioni esistenti](#modify-settings)" di questa guida.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dall'applicazione Outlook su Android, vedere [Microsoft Help Center](https://support.microsoft.com/it-it/office/configurare-la-posta-elettronica-nell-app-outlook-per-android-886db551-8dfa-4fd5-b835-f8e532091872).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).