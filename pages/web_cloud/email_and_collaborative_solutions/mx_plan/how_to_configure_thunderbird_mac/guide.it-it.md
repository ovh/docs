---
title: "MX Plan - Configurare l'indirizzo e-mail in Thunderbird per macOS"
excerpt: 'Scopri come configurare il tuo indirizzo e-mail  MX Plan in Thunderbird per macOS'
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

Gli account email  MX Plan possono essere configurati su diversi client di posta elettronica compatibili. Questo ti permette di utilizzare il tuo indirizzo email dal dispositivo di tua scelta. Thunderbird è un client di posta elettronica gratuito e open source.

**Scopri come configurare il tuo indirizzo e-mail  MX Plan in Thunderbird per macOS.**

## Prerequisiti

- Disporre di un'offerta  MX Plan. Questa è disponibile tramite:
    - Un'offerta di [hosting Web](/links/web/hosting).
    - Un [hosting gratuito 100M](/links/web/domains-free-hosting) incluso con un nome di dominio (precedentemente attivato).
    - Un'offerta  MX Plan ordinata separatamente.
    - Disporre di un indirizzo email [Zimbra Starter](/links/web/zimbra).
- Avere installato il software Thunderbird sul tuo Mac.
- Disporre delle credenziali relative all'indirizzo email che desideri configurare.

/// details | Informazioni relative alla gestione e configurazione dei servizi OVHcloud

Questo guida ti mostra come utilizzare le soluzioni OVHcloud con strumenti esterni e le modifiche necessarie in contesti specifici. Potrebbe essere necessario adattare le istruzioni in base alla tua situazione.

Se riscontri difficoltà nell'esecuzione di queste operazioni, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) e/o di discuterne con la nostra comunità. OVHcloud non può fornire supporto tecnico sull'utilizzo di strumenti esterni. Per ulteriori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

///

## Procedura

### Aggiungere l'account

- **All'avvio iniziale dell'applicazione**: viene visualizzato un assistente di configurazione che ti chiede di inserire il tuo indirizzo email.

- **Se un account è già configurato sull'applicazione**:

    1. Fare clic sul menu `☰`{.action} nella barra orizzontale superiore.
    2. Fare clic su `Nuovo Account`{.action}.
    3. Fare clic su `Indirizzo Email`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

> [!warning]
>
> È necessario annotare il valore corrispondente alla tua località (**EUROPA** o **AMERICA / ASIA-PACIFICO**).

Segui le fasi di configurazione facendo clic successivamente sui **5** tab seguenti:

> [!tabs]
> **Passagio 1**
>>
>> Nella finestra che appare, inserisci le 2 seguenti informazioni:
>>
>>  - Il tuo nome completo (nome visualizzato).
>>  - L'indirizzo email da configurare.
>>
>> Fare clic su `Continua`{.action} per completare le impostazioni.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-02.png){.thumbnail .w-600}
>>
> **Passagio 2**
>>
>> Quando Thunderbird rileva un nome di dominio OVHcloud, viene proposta una configurazione automatica relativa all'offerta  MX Plan:
>>
>>  - Se le informazioni sono corrette, fare clic su `Continua`{.action} e passare al passagio 5.
>>  - Altrimenti, fare clic su `MODIFICA LA CONFIGURAZIONE`{.action} per effettuare una configurazione manuale.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Passagio 3**
>>
>> Impostazioni del server di ricezione:
>>
>>  - **Protocollo**: IMAP
>>  - **Nome host EUROPA (entrante)**: imap.mail.ovh.net **o** ssl0.ovh.net
>>  - **Nome host AMERICA/ASIA-PACIFICO (entrante)**: imap.mail.ovh.ca
>>  - **Porta**: 993
>>  - **Sicurezza della connessione**: SSL/TLS
>>  - **Metodo di autenticazione**: Password normale
>>  - **Nome utente**: Il tuo indirizzo email completo
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-04.png){.thumbnail .w-600}
>>
> **Passagio 4**
>>
>> Impostazioni del server di invio:
>>
>>  - **Protocollo**: SMTP
>>  - **Server EUROPA (uscita)**: smtp.mail.ovh.net **o** ssl0.ovh.net
>>  - **Server AMERICA/ASIA-PACIFICO (uscita)**: smtp.mail.ovh.ca
>>  - **Porta**: 587
>>  - **Sicurezza della connessione**: STARTTLS
>>  - **Metodo di autenticazione**: Password normale
>>  - **Nome utente**: Il tuo indirizzo email completo
>> 
>> 1. Fare clic su `Testa`{.action} per verificare i parametri inseriti.
>> 2. Fare clic su `Continua`{.action} per validare questi parametri.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-05.png){.thumbnail .w-600}
>>
> **Passagio 5**
>>
>> Inserisci la password associata all'indirizzo email, quindi fare clic su `Continua`{.action} per completare la configurazione.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configurazione POP**
>
> Se desideri una configurazione POP per il tuo indirizzo email, sostituisci i parametri del **passagio 3** con i seguenti:
>
> Impostazioni del server di ricezione:
>
> - **Protocollo**: POP3
> - **Nome host EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net
> - **Nome host AMERICA/ASIA-PACIFICO (entrante)**: pop.mail.ovh.ca
> - **Porta**: 995
> - **Sicurezza della connessione**: SSL/TLS
> - **Metodo di autenticazione**: Password normale
> - **Nome utente**: Il tuo indirizzo email completo

### Utilizzare l'indirizzo email

Una volta configurato il tuo indirizzo email, puoi iniziare a utilizzarlo! Puoi ora inviare e ricevere email.

OVHcloud offre anche un'applicazione web per accedere al tuo indirizzo email da un browser. Per accedere al Webmail di OVHcloud, clicca su [questo link](/links/web/email). Puoi accedervi utilizzando le credenziali del tuo indirizzo email.

### Recuperare un backup del tuo indirizzo email

Se devi effettuare un'operazione che potrebbe causare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preventivo dell'account email interessato. Per farlo, consulta il paragrafo "**Esporta**" nella sezione "**Thunderbird**" della nostra guida "[Migra manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificare le impostazioni esistenti

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

1. Fare clic sul menu `☰`{.action} nella barra orizzontale superiore.
2. Fare clic su `Impostazioni account`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Per modificare le impostazioni relative alla **ricezione** delle tue email, fare clic su `Impostazioni server`{.action} nella colonna di sinistra sotto il tuo indirizzo email.

![thunderbird](images/configuration-thunderbird-mxplan-mac-08.png){.thumbnail .w-600}

- Per modificare le impostazioni relative all'**invio** delle tue email, fare clic su `Server in uscita (SMTP)`{.action} in fondo alla colonna di sinistra.
- Fare clic sull'indirizzo email interessato nell'elenco, quindi fare clic su `Modifica`{.action}.

![thunderbird](images/configuration-thunderbird-mxplan-mac-09.png){.thumbnail .w-600}

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per ulteriori informazioni sulla configurazione di un indirizzo email dal client di posta elettronica Thunderbird, consulta [il centro assistenza di Mozilla](https://support.mozilla.org/products/thunderbird).

[Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).