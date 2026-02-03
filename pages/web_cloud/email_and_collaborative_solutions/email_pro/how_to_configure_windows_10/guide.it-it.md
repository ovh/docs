---
title: "E-mail Pro - Configurazione del tuo account E-mail Pro sul nuovo Outlook per Windows"
excerpt: "Scopri come configurare il tuo indirizzo E-mail Pro sul nuovo Outlook per Windows"
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

Gli indirizzi e-mail dell'offerta [E-mail Pro](/links/web/email-pro) possono essere configurati su un client di posta compatibile. Ciò ti consente di inviare e ricevere messaggi dall'applicazione che preferisci.

Il **nuovo Outlook** sostituisce, dal 1° gennaio 2025, l'applicazione **Posta** su Windows. Per ulteriori informazioni, consulta la pagina ufficiale di Microsoft "[Outlook per Windows: Il futuro di Posta, Calendario e Persone in Windows 11](https://support.microsoft.com/it-it/office/outlook-pour-windows-l-avenir-du-courrier-du-calendrier-et-des-personnes-sur-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Scopri come configurare il tuo indirizzo E-mail Pro sul nuovo Outlook per Windows.**

## Prerequisiti

- Disponi di un indirizzo [E-mail Pro](/links/web/email-pro).
- Disponi del [nuovo Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) per Windows.
- Possiedi le credenziali dell'indirizzo e-mail che desideri configurare.

/// details | Informazioni sulla gestione e configurazione dei servizi OVHcloud

OVHcloud mette a tua disposizione servizi di cui sei responsabile per la configurazione, gestione e funzionamento. Pertanto, spetta a te assicurarsi che funzionino correttamente.

Ti forniamo questa guida per aiutarti nelle operazioni più comuni. Tuttavia, ti consigliamo di contattare un [partner specializzato](/links/partner) e/o l'editore del servizio se incontri difficoltà. Non saremo in grado di fornirti assistenza. Ulteriori informazioni nella sezione "[Per saperne di più](#go-further)" di questa guida.

///

## Procedura

> [!warning]
>
> Questa documentazione si applica esclusivamente al **nuovo Outlook** e non a "[Outlook classico](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" disponibile nella suite Microsoft 365 o precedentemente installato sul tuo computer.
>
> Per distinguere le due versioni di Outlook quando sono installate, digita "Outlook" nella barra di ricerca di Windows. Potrai quindi notare la differenza come mostrato di seguito. Il nuovo Outlook non ha un'indicazione speciale.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}
>
> Per configurare il tuo indirizzo email Pro su Outlook classico, consulta la nostra guida "[E-mail Pro - Configurare un account email su Outlook classico per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)".

### Aggiungere l'account <a name="add-account"></a>

> [!warning]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro?.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
> 1. Accedi alla sezione `Web Cloud`{.action}.
> 1. Clicca su `Email Pro`{.action}.
> 1. Seleziona la piattaforma interessata. 
> 1. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
>

Per configurare il tuo indirizzo email, segui le fasi cliccando sui tab sottostanti.

> [!tabs]
> **Passaggio 1**
>> - Apri Outlook. Nella colonna di sinistra, clicca su `Aggiungi un account`{.action} per avviare la configurazione.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-400}
>>
> **Passaggio 2**
>> - Inserisci il tuo indirizzo e-mail e clicca su `Continua`{.action}.
>> - Inserisci la tua password e clicca sul pulsante `Mostra altro`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-400}
>>
> **Passaggio 3**
>> - Inserisci i seguenti parametri:
>>    - **Server IMAP in entrata**: pro?.mail.ovh.net
>>    - **Porta**: 993
>>    - **Tipo di connessione sicura**: SSL/TLS
>>    - **Nome utente SMTP**: L'indirizzo e-mail che stai aggiungendo.
>>    - **Server SMTP in uscita**: pro?.mail.ovh.net
>>    - **Porta**: 587
>>    - **Tipo di connessione sicura**: STARTTLS
>>    - **Password**: Non inserire nulla, verrà utilizzato il password inserito in precedenza.
>> - Clicca su `Continua`{.action} per completare la configurazione.
>>
>> ![outlook](images/configuration-newoutlook-windows-emp-03.png){.thumbnail .w-400}

### Utilizzare l'indirizzo e-mail <a name="use-account"></a>

Una volta configurato l'indirizzo e-mail, puoi iniziare a utilizzarlo! Ora puoi inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. Per accedere alla Webmail OVHcloud, clicca su [questo link](/links/web/email). E accessibile con le credenziali del tuo account.

### Modificare le impostazioni esistenti <a name="modify-settings"></a>

L'applicazione Outlook non consente di modificare i parametri del server per il tuo account e-mail.

Se l’account email è già stato configurato e vuoi modificarne le impostazioni, è necessario eliminarlo e ricrearlo:

- Clicca sull'icona delle impostazioni `⛭`{.action} nella parte inferiore della colonna di sinistra.
- Nella sezione "I tuoi account", clicca su `Gestisci`{.action} a destra dell'indirizzo e-mail in questione.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-400}

- Scorri verso il basso.
- Clicca su `Elimina`{.action} per avviare l'eliminazione.
- Scegli se eliminare l'account solo da questo dispositivo o anche da altri dispositivi che utilizzano Outlook.

![outlook](images/configuration-newoutlook-windows-emp-05.png){.thumbnail .w-400}

> [!success]
>
> Una volta eliminato l'account, segui le istruzioni nella sezione "[Aggiungere l'account](#add-account)" di questa documentazione.

### Impostazioni generali di invio e ricezione <a name="settings-account"></a>

#### Impostazioni IMAP e POP per la ricezione <a name="imap-pop"></a>

Per la ricezione delle e-mail, consigliamo di utilizzare **IMAP**. Tuttavia, puoi anche selezionare **POP**.

Seleziona la scheda corrispondente al tipo di configurazione:

> [!tabs]
> **Configurazione IMAP**
>>
>> - **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
>> - **Password**: Inserisci la password dell'indirizzo e-mail.
>> - **Server in entrata**: pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).
>> - **Porta**: 993.
>> - **Tipo di sicurezza**: SSL/TLS.
>>
> **Configurazione POP**
>>
>> - **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
>> - **Password**: Inserisci la password dell'indirizzo e-mail.
>> - **Server in entrata**: pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).
>> - **Porta**: 995.
>> - **Tipo di sicurezza**: SSL/TLS.

#### Impostazioni SMTP per l'invio <a name="smtp"></a>

Per l'invio delle e-mail, ecco i parametri **SMTP** da utilizzare:

**Configurazione SMTP**

- **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
- **Password**: Inserisci la password dell'indirizzo e-mail.
- **Server in uscita**: pro?.mail.ovh.net (sostituisci "?" con il numero del tuo server).
- **Porta**: 587.
- **Tipo di sicurezza**: STARTTLS.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail nel client del nuovo Outlook per Windows, consulta [il centro di aiuto di Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primi passi con la soluzione E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).