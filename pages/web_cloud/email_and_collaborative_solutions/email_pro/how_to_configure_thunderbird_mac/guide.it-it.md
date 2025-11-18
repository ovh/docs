---
title: "Email Pro - Configurare l'indirizzo email in Thunderbird per macOS"
excerpt: 'Scopri come configurare il tuo indirizzo Email Pro in Thunderbird per macOS'
updated: 2025-09-19
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

Gli account Email Pro possono essere configurati su diversi software di posta elettronica compatibili. Questo ti permette di utilizzare il tuo indirizzo email dal dispositivo di tua scelta. Thunderbird è un client di posta elettronica gratuito e open source.

**Scopri come configurare il tuo indirizzo Email Pro in Thunderbird per macOS.**

## Prerequisiti

- Disporre di un indirizzo [Email Pro](/links/web/email-pro).
- Avere installato il software Thunderbird sul tuo Mac.
- Disporre delle credenziali relative all'indirizzo email che desideri configurare.

/// details | Informazioni sulla gestione e configurazione dei servizi OVHcloud

Questo guida ti mostra come utilizzare le soluzioni OVHcloud con strumenti esterni e le modifiche necessarie in contesti specifici. Potrebbe essere necessario adattare le istruzioni in base alla tua situazione.

Se riscontri difficoltà nell'esecuzione di queste operazioni, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) e/o di discuterne con la nostra community. OVHcloud non può fornire supporto tecnico sull'utilizzo di strumenti esterni. Per ulteriori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

///

## Procedura

> [!warning]
>
> Nel nostro esempio utilizziamo la dicitura del server: pro?.mail.ovh.net. Dovrai sostituire il "?" con il numero che identifica il server del tuo servizio Email Pro.
>
> 1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager).
> 1. Vai nella sezione `Web Cloud`{.action}.
> 1. Clicca su `Email Pro`{.action}.
> 1. Seleziona la piattaforma interessata.
> 1. Il nome del server è visibile nell'area **Connessione** della scheda `Informazioni Generali`{.action}.

### Aggiungere l'account

- **All'avvio iniziale dell'applicazione**: un assistente di configurazione verrà visualizzato e ti chiederà di inserire il tuo indirizzo email.

- **Se un account è già configurato sull'applicazione**:

    1. Clicca sul menu `☰`{.action} nella barra orizzontale superiore.
    2. Clicca su `Nuovo Account`{.action}.
    3. Clicca su `Indirizzo Email`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

Segui le fasi di configurazione cliccando successivamente sui seguenti **5** tab:

> [!tabs]
> **Passagio 1**
>>
>> Nella finestra visualizzata, inserisci le seguenti 2 informazioni:
>>
>>  - Il tuo nome completo (nome visualizzato).
>>  - L'indirizzo email da configurare.
>>
>> Clicca su `Avanti`{.action} per completare le impostazioni.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-02.png){.thumbnail .w-600}
>>
> **Passagio 2**
>>
>> Quando Thunderbird rileva un nome di dominio OVHcloud, viene proposta una configurazione automatica relativa all'offerta MX Plan. Clicca su `MODIFICA CONFIGURAZIONE`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Passagio 3**
>>
>> Impostazioni del server di ricezione:
>>
>>  - **Protocollo**: IMAP
>>  - **Nome host**: pro?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
>>  - **Porta**: 993
>>  - **Sicurezza della connessione**: SSL/TLS
>>  - **Metodo di autenticazione**: Password normale
>>  - **Nome utente**: Il tuo indirizzo email completo
>>
>> ![thunderbird](images/configuration-thunderbird-emp-04.png){.thumbnail .w-600}
>>
> **Passagio 4**
>>
>> Impostazioni del server di invio:
>>
>>  - **Protocollo**: SMTP 
>>  - **Nome host**: pro?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
>>  - **Porta**: 587
>>  - **Sicurezza della connessione**: STARTTLS
>>  - **Metodo di autenticazione**: Password normale
>>  - **Nome utente**: Il tuo indirizzo email completo
>> 
>> 1. Clicca su `Testa`{.action} per verificare le impostazioni inserite.
>> 2. Clicca su `Avanti`{.action} per confermare queste impostazioni.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-05.png){.thumbnail .w-600}
>>
> **Passagio 5**
>>
>> Inserisci la password associata all'indirizzo email e clicca su `Avanti`{.action} per completare la configurazione.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configurazione POP**
>
> Se desideri una configurazione POP per il tuo indirizzo email, sostituisci le impostazioni del **passagio 3** con le seguenti:
>
> Impostazioni del server di ricezione:
>
> - **Protocollo**: POP3
> - **Nome host**: pro?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
> - **Porta**: 995
> - **Sicurezza della connessione**: SSL/TLS
> - **Metodo di autenticazione**: Password normale
> - **Nome utente**: Il tuo indirizzo email completo

### Utilizzare l'indirizzo email

Una volta configurato il tuo indirizzo email, puoi iniziare a utilizzarlo! Puoi ora inviare e ricevere email.

OVHcloud offre anche un'applicazione web per accedere al tuo indirizzo email da un browser. Per accedere al Webmail OVHcloud, clicca su [questo link](/links/web/email). Puoi accedere utilizzando le credenziali del tuo indirizzo email.

### Creare un backup del tuo indirizzo email

Se devi effettuare un'operazione che potrebbe causare la perdita dei dati del tuo account email, ti consigliamo di creare un backup preventivo dell'account email interessato. Per farlo, consulta il paragrafo "**Esportare**" nella sezione "**Thunderbird**" della nostra guida "[Migra manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificare le impostazioni esistenti

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

1. Clicca sul menu `☰`{.action} nella barra orizzontale superiore.
2. Clicca su `Impostazioni account`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Per modificare le impostazioni relative alla **ricezione** delle tue email, clicca su `Impostazioni server`{.action} nella colonna di sinistra sotto il tuo indirizzo email.

![thunderbird](images/configuration-thunderbird-emp-mac-08.png){.thumbnail .w-600}

- Per modificare le impostazioni relative all'**invio** delle tue email, clicca su `Server in uscita (SMTP)`{.action} in fondo alla colonna di sinistra.
- Clicca sull'indirizzo email interessato nell'elenco e poi clicca su `Modifica`{.action}.

![thunderbird](images/configuration-thunderbird-emp-mac-09.png){.thumbnail .w-600}

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo email dal client di posta elettronica Thunderbird, consulta il [centro di supporto di Mozilla](https://support.mozilla.org/products/thunderbird).

[Iniziare a utilizzare la soluzione Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).