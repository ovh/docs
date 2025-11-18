---
title: 'MX Plan / Zimbra Starter - Aggiungere un account e-mail sul nuovo Outlook per Windows'
excerpt: "Scopri come configurare il tuo indirizzo e-mail sul nuovo Outlook per Windows"
updated: 2025-09-26
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
</style>

## Obiettivo

Gli indirizzi e-mail delle offerte **MX Plan** e [Zimbra Starter](/links/web/emails-zimbra) possono essere configurati su un client di posta compatibile. Ciò ti consente di inviare e ricevere messaggi dall'applicazione che preferisci.

Il **nuovo Outlook** sostituisce dall'1 gennaio 2025 l'applicazione **Posta** su Windows. Per ulteriori informazioni, consulta la pagina ufficiale di Microsoft "[Outlook per Windows: Il futuro di Posta, Calendario e Persone in Windows 11](https://support.microsoft.com/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Scopri come configurare il tuo indirizzo e-mail MX Plan sul nuovo Outlook per Windows.**

## Prerequisiti

- Disporre di una soluzione e-mail OVHcloud precedentemente configurata, tra le seguenti:
    - **MX Plan** proposta con le nostre [offerte di hosting web](/links/web/hosting) o incluse in un [hosting gratuito 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (solo).
- Disporre della [nuova versione di Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) installata su Windows.
- Possedere le credenziali dell'indirizzo e-mail che si desidera configurare.

> [!warning]
>
> Questa documentazione si applica esclusivamente al **nuovo Outlook** e non a "[Outlook classico](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" disponibile nel pacchetto Microsoft 365 o precedentemente installato sul computer.

/// details | Informazioni relative alla gestione e alla configurazione dei servizi OVHcloud

OVHcloud mette a tua disposizione servizi di cui la configurazione, la gestione e la responsabilità ricadono su di te. Spetta quindi a te assicurarne il corretto funzionamento.

Ti mettiamo a disposizione questa guida per accompagnarti nel miglior modo possibile nelle attività più comuni. Tuttavia, ti consigliamo di rivolgerti a un [partner specializzato](/links/partner) e/o di contattare l'editore del servizio se incontri difficoltà. Non saremo infatti in grado di fornirti assistenza. Ulteriori informazioni nella sezione "[Per saperne di più](#go-further)" di questa guida.

///

## Procedura

### Aggiungere l'account <a name="add-account"></a>

> [!warning]
>
> È necessario selezionare la scheda dell'etichetta 3 corrispondente alla tua localizzazione (**EUROPA** o **AMERICA/ASIA-PACIFICO**) per ottenere i corretti valori.

> [!tabs]
> **Etichetta 1**
>> - Apri Outlook. Nella colonna di sinistra, clicca su `Aggiungi un account`{.action} per avviare la configurazione.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Etichetta 2**
>> - Inserisci il tuo indirizzo e-mail e clicca su `Continua`{.action}.
>> - Inserisci la tua password e clicca sul pulsante `Mostra altro`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Etichetta 3 EUROPA**
>> - Inserisci i seguenti parametri:
>>    - **Server IMAP in entrata**: imap.mail.ovh.net **o** ssl0.ovh.net.
>>    - **Porta**: 993.
>>    - **Tipo di connessione sicura**: SSL/TLS.
>>    - **Nome utente SMTP**: Inserisci l'indirizzo e-mail **completo**.
>>    - **Server SMTP in uscita**: smtp.mail.ovh.net **o** ssl0.ovh.net.
>>    - **Porta**: 465.
>>    - **Tipo di connessione sicura**: SSL/TLS.
>>    - **Password**: Non inserire nulla, verrà utilizzato il password inserito in precedenza.
>> - Clicca su `Continua`{.action} per finalizzare la configurazione.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Etichetta 3 AMERICA/ASIA-PACIFICO**
>> - Inserisci i seguenti parametri:
>>    - **Server IMAP in entrata**: imap.mail.ovh.ca.
>>    - **Porta**: 993.
>>    - **Tipo di connessione sicura**: SSL/TLS.
>>    - **Nome utente SMTP**: Inserisci l'indirizzo e-mail **completo**.
>>    - **Server SMTP in uscita**: smtp.mail.ovh.ca.
>>    - **Porta**: 465.
>>    - **Tipo di connessione sicura**: SSL/TLS.
>>    - **Password**: Non inserire nulla, verrà utilizzato il password inserito in precedenza.
>> - Clicca su `Continua`{.action} per finalizzare la configurazione.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### Utilizzare l'indirizzo e-mail <a name="use-account"></a>

Una volta configurato l'indirizzo e-mail, puoi iniziare a utilizzarlo! Ora puoi inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. Per accedere alla Webmail OVHcloud, clicca su [questo link](/links/web/email). E accessibile con le credenziali del tuo account.

### Modificare i parametri esistenti <a name="modify-settings"></a>

L'applicazione Outlook non consente di modificare i parametri del server del tuo account e-mail.

Se il tuo account e-mail è già configurato e desideri riconfigurararlo, devi eliminarlo e ricrearlo:

- Clicca sull'icona delle impostazioni `⛭`{.action} nella parte inferiore della colonna di sinistra.
- Nella sezione "I tuoi account" clicca su `Gestisci`{.action} a destra dell'indirizzo e-mail in questione.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Scorri verso il basso.
- Clicca su `Elimina`{.action} per avviare l'eliminazione.
- Determina se desideri eliminare solo su questo dispositivo o su altri dispositivi che utilizzano Outlook.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Una volta eliminato l'account e-mail, segui le istruzioni nella sezione "[Aggiungere l'account](#add-account)" di questa documentazione.

### Impostazioni generali di invio e ricezione <a name="settings-account"></a>

#### Impostazioni di ricezione IMAP e POP <a name="imap-pop"></a>

Per la ricezione delle e-mail, durante la scelta del tipo di account, ti consigliamo di utilizzare **IMAP**. Tuttavia, puoi anche selezionare **POP**.

> [!warning]
>
> È necessario inserire il valore corrispondente alla tua localizzazione (**EUROPA** o **AMERICA/ASIA-PACIFICO**).

Seleziona la scheda corrispondente al tuo tipo di configurazione:

> [!tabs]
> **Configurazione IMAP**
>>
>> - **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
>> - **Password**: Inserisci la password dell'indirizzo e-mail.
>> - **Server EUROPA (in entrata)**: imap.mail.ovh.net **o** ssl0.ovh.net.
>> - **Server AMERICA/ASIA-PACIFICO (in entrata)**: imap.mail.ovh.ca.
>> - **Porta**: 993.
>> - **Tipo di sicurezza**: SSL/TLS.
>>
> **Configurazione POP**
>>
>> - **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
>> - **Password**: Inserisci la password dell'indirizzo e-mail.
>> - **Server EUROPA (in entrata)**: pop.mail.ovh.net **o** ssl0.ovh.net.
>> - **Server AMERICA/ASIA-PACIFICO (in entrata)**: pop.mail.ovh.ca.
>> - **Porta**: 995.
>> - **Tipo di sicurezza**: SSL/TLS.

#### Impostazioni di invio SMTP <a name="smtp"></a>

Per l'invio delle e-mail, ecco i parametri **SMTP** da utilizzare:

**Configurazione SMTP**

- **Nome utente**: Inserisci l'indirizzo e-mail **completo**.
- **Password**: Inserisci la password dell'indirizzo e-mail.
- **Server EUROPA (in uscita)**: smtp.mail.ovh.net **o** ssl0.ovh.net.
- **Server AMERICA/ASIA-PACIFICO (in uscita)**: smtp.mail.ovh.ca.
- **Porta**: 465.
- **Tipo di sicurezza**: SSL/TLS.

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dal client di posta nuovo Outlook per Windows, consulta [il centro di supporto di Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primi passi con l'offerta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primi passi con l'offerta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).