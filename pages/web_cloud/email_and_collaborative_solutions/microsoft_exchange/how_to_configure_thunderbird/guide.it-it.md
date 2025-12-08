---
title: "Exchange - Configurare l'indirizzo e-mail su Thunderbird per Windows"
excerpt: 'Scopri come configurare il tuo indirizzo e-mail Exchange su Thunderbird per Windows'
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
.w-400 {
  max-width:400px !important;
}
</style>

## Obiettivo

I conti Exchange possono essere configurati su diversi software di posta elettronica compatibili. Questo ti permette di utilizzare il tuo indirizzo e-mail dal dispositivo che preferisci. Thunderbird è un client di posta elettronica gratuito e open source.

**Scopri come configurare il tuo indirizzo e-mail Exchange su Thunderbird per Windows.**

## Prerequisiti

- Disporre di un indirizzo e-mail [Hosted Exchange](/links/web/emails-hosted-exchange) o [Private Exchange](/links/web/emails-private-exchange).
- Avere installato il software Thunderbird sul tuo dispositivo Windows.
- Disporre delle credenziali relative all'indirizzo e-mail che desideri configurare.

/// details | Informazioni relative alla gestione e configurazione dei servizi OVHcloud

Questo manuale ti mostra come utilizzare le soluzioni OVHcloud con strumenti esterni e le modifiche da apportare in contesti specifici. Potrebbe essere necessario adattare le istruzioni in base alla tua situazione.

Se riscontri difficoltà nell'esecuzione di queste operazioni, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) e/o di discuterne con la nostra comunità. OVHcloud non può fornire supporto tecnico sull'utilizzo di strumenti esterni. Per ulteriori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

///

## Procedura

> [!primary]
>
> Nel nostro esempio, utilizziamo il nome del server: ex?.mail.ovh.net. Dovrai sostituire il "?" con il numero che identifica il server del tuo servizio Exchange.
>
> Per trovare il nome del server:
>
> 1. Accedi al tuo [spazio client OVHcloud](/links/manager).
> 2. Vai alla sezione `Web Cloud`{.action}.
> 3. Nella sezione `MICROSOFT`, clicca su `Exchange`{.action}.
> 4. Seleziona la piattaforma desiderata.
> 5. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.

### Aggiungere il conto

- **All'avvio iniziale dell'applicazione**: un assistente di configurazione apparirà e ti chiederà di inserire il tuo indirizzo e-mail.

- **Se un conto è già configurato sull'applicazione**:

    1. Clicca sul menu `☰`{.action} nella barra orizzontale superiore.
    2. Clicca su `Nuovo Conto`{.action}.
    3. Clicca su `Indirizzo E-mail`{.action}.

![thunderbird](images/configuration-thunderbird-win-01.png){.thumbnail .w-600}

Segui le fasi di configurazione cliccando successivamente sui **5** tab sottostanti:

> [!tabs]
> **Passagio 1**
>>
>> Nella finestra che appare, inserisci le seguenti 2 informazioni:
>>
>>  - Il tuo nome completo (nome visualizzato).
>>  - L'indirizzo e-mail da configurare.
>>
>> Clicca su `Continua`{.action} per completare le impostazioni.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-02.png){.thumbnail .w-600}
>>
> **Passagio 2**
>>
>> Quando Thunderbird rileva un dominio OVHcloud, viene proposta una configurazione automatica relativa all'offerta MX Plan. Clicca su `MODIFICA CONFIGURAZIONE`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Passagio 3**
>>
>> Impostazioni del server di ricezione:
>>
>>  - **Protocollo** : IMAP
>>  - **Nome host** : ex?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
>>  - **Porta** : 993
>>  - **Sicurezza della connessione** : SSL/TLS
>>  - **Metodo di autenticazione** : Password normale
>>  - **Nome utente** : Il tuo indirizzo e-mail completo
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-04.png){.thumbnail .w-600}
>>
> **Passagio 4**
>>
>> Impostazioni del server di invio:
>>
>>  - **Protocollo** : SMTP 
>>  - **Nome host** : ex?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
>>  - **Porta** : 587
>>  - **Sicurezza della connessione** : STARTTLS
>>  - **Metodo di autenticazione** : Password normale
>>  - **Nome utente** : Il tuo indirizzo e-mail completo
>> 
>> 1. Clicca su `Testa`{.action} per verificare le impostazioni inserite.
>> 2. Clicca su `Continua`{.action} per confermare queste impostazioni.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-05.png){.thumbnail .w-600}
>>
> **Passagio 5**
>>
>> Inserisci la password associata all'indirizzo e-mail, quindi clicca su `Continua`{.action} per completare la configurazione.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configurazione POP**
>
> Se desideri una configurazione POP per il tuo indirizzo e-mail, sostituisci le impostazioni del **passagio 3** con le seguenti:
>
> Impostazioni del server di ricezione:
>
> - **Protocollo** : POP3
> - **Nome host** : ex?.mail.ovh.net (sostituisci il "?" con il numero del tuo server)
> - **Porta** : 995
> - **Sicurezza della connessione** : SSL/TLS
> - **Metodo di autenticazione** : Password normale
> - **Nome utente** : Il tuo indirizzo e-mail completo

### Utilizzare l'indirizzo e-mail

Una volta che il tuo indirizzo e-mail è configurato, puoi iniziare a utilizzarlo! Puoi inviare e ricevere e-mail immediatamente.

OVHcloud offre anche un'applicazione web che ti permette di accedere al tuo indirizzo e-mail da un browser Internet. Per accedere al Webmail OVHcloud, clicca su [questo link](/links/web/email). Puoi accedere utilizzando le credenziali del tuo indirizzo e-mail.

### Recuperare un backup del tuo indirizzo e-mail

Se devi effettuare un'operazione che potrebbe causare la perdita dei dati del tuo account e-mail, ti consigliamo di effettuare un backup preventivo dell'account e-mail interessato. Per farlo, consulta il paragrafo "**Esportare**" nella sezione "**Thunderbird**" della nostra guida "[Migra manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificare le impostazioni esistenti

Se il tuo account e-mail è già configurato e devi accedere alle impostazioni dell'account per modificarle:

1. Clicca sul menu `☰`{.action} nella barra orizzontale superiore.
2. Clicca su `Impostazioni account`{.action}.

![Thunderbird](images/configuration-thunderbird-win-07.png){.thumbnail .w-600}

- Per modificare le impostazioni relative alla **ricezione** delle tue e-mail, clicca su `Impostazioni server`{.action} nella colonna di sinistra sotto il tuo indirizzo e-mail.

![thunderbird](images/configuration-thunderbird-exchange-win-08.png){.thumbnail .w-600}

- Per modificare le impostazioni relative all'**invio** delle tue e-mail, clicca su `Server in uscita (SMTP)`{.action} in fondo alla colonna di sinistra.
- Clicca sull'indirizzo e-mail desiderato nell'elenco, quindi clicca su `Modifica`{.action}.

![thunderbird](images/configuration-thunderbird-exchange-win-09.png){.thumbnail .w-600}

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo e-mail dal client di posta elettronica Thunderbird, consulta [il centro di supporto di Mozilla](https://support.mozilla.org/products/thunderbird).

[Iniziare a utilizzare Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Iniziare a utilizzare Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).