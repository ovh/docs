---
title: "Zimbra - Sincronizzare un calendario CalDAV in un'applicazione"
excerpt: "Questa guida ti mostra come aggiungere un calendario Zimbra a un'applicazione tramite il protocollo CalDAV"
updated: 2026-01-29
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Obiettivo

I conti email Zimbra possono essere configurati su diversi software di posta elettronica compatibili. Questo ti permette di utilizzare il tuo indirizzo email dal dispositivo che preferisci. Zimbra include la funzionalità di calendario online, sincronizzabile da un software compatibile con il protocollo CalDAV.

**Questa guida ti mostra aggiungere un calendario Zimbra a un'applicazione tramite il protocollo CalDAV.**

## Prerequisiti

- Disporre di un indirizzo email Zimbra OVHcloud.
- Aver installato un'applicazione che supporta il protocollo di calendario CalDAV.
- Disporre delle credenziali associate all’indirizzo email associato al calendario da configurare.

## Procedura

### Cos'è il protocollo CalDAV?

CalDAV è un protocollo per la modifica di calendari e attività online. Gli indirizzi email Zimbra dispongono di calendari che utilizzano il protocollo CalDAV.

La configurazione del calendario CalDAV è simile a quella di un indirizzo email e richiede un'applicazione che supporti questo protocollo.

### Condividere un calendario

> [!warning]
>
> Questa sezione riguarda esclusivamente le offerte [Zimbra Starter o Pro](/links/web/emails) che dispongono della funzione di condivisione del calendario.

#### Condivisione pubblica in formato ICS

> [!primary]
>
> Il formato file ICS utilizzato qui è statico: la versione del file corrisponde al momento in cui l'utente genera il link. Ciò significa che un evento aggiunto dopo la generazione del link verso il file ICS non sarà presente né nel file né nel calendario in cui è importato. Non c'è sincronizzazione.

Per generare un link al file ICS, segui le seguenti fasi:

- Accedi al tuo indirizzo email Zimbra tramite il [webmail](/links/web/email).
- Vai alla scheda `Calendario`{.action}.
- Fai clic destro sul calendario interessato e clicca su `Condividi...`{.action}.
- Clicca sulla scheda `Rendere pubblico`{.action}.
- Seleziona la casella `Genera un collegamento pubblico`{.action}, copia o apri il link in un nuovo tab e scarica il file ICS.

![zimbra_app](images/zimbra-calendar-webmail-01.png){.thumbnail .w-600 .h-600}

Il file ICS che hai scaricato può essere importato in un calendario esistente o appena creato.

#### Condivisione tramite invito via email

A differenza della condivisione del file ICS, la condivisione tramite invito via email permette di condividere dinamicamente un calendario con altri account email dello stesso nome di dominio. Gli eventi e le azioni sul calendario condiviso saranno sincronizzati.

> [!warning]
>
> Solo gli indirizzi email dello stesso nome di dominio possono ricevere questo tipo di condivisione.

Per iniziare una condivisione su un'altro indirizzo email:

- Accedi al tuo indirizzo email Zimbra tramite il [webmail](/links/web/email).
- Vai alla scheda `Calendario`{.action}.
- Fai clic destro sul calendario interessato e clicca su `Condividi...`{.action}.
- Clicca sulla scheda `Invita tramite e-mail`{.action}.

![zimbra_app](images/zimbra-calendar-webmail-02.png){.thumbnail .w-600 .h-600}

Segui le seguenti fasi per condividere un calendario con uno o più account email:

> [!tabs]
> **Fase 1**
>>
>> Inserisci l'indirizzo email con cui desideri condividere il calendario.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-03.png){.thumbnail .w-600 .h-600}
>>
> **Fase 2**
>>
>> Imposta le autorizzazioni dell'account email sul calendario, quindi clicca su `Aggiungi`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-04.png){.thumbnail .w-600 .h-600}
>>
> **Fase 3**
>>
>> Ripeti le fasi 1 e 2 per condividere lo stesso calendario con altri account email dello stesso nome di dominio, quindi clicca su `Salva`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-05.png){.thumbnail .w-600 .h-600}
>>
> **Fase 4**
>>
>> Un'email viene inviata a ciascun destinatario della condivisione e permette di accettare o rifiutare il calendario condiviso. Indica inoltre i diritti attribuiti su questo calendario.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-06.png){.thumbnail .w-600 .h-600}

> [!primary]
>
> Se condividi il tuo calendario con un account email dello stesso nome di dominio che utilizza il webmail Roundcube (offerta MX Plan) o OWA (offerte Email Pro e Exchange), l'indirizzo email destinatario riceve un link per accedere al webmail Zimbra, permettendo di creare un account "ospite" per visualizzare il calendario.
>
> ![zimbra_app](images/zimbra-calendar-webmail-07.png){.thumbnail .w-600 .h-600}

### Configurare il calendario CalDAV su un software compatibile

Abbiamo selezionato applicazioni stabili e compatibili con il protocollo CalDAV.

- **Per Windows**: Segui il capitolo [Aggiungi un calendario su Thunderbird](#thunderbird)
- **Per macOS**: Segui il capitolo [Aggiungi un calendario su macOS](#apple-macos) o [Aggiungi un calendario su Thunderbird](#thunderbird)
- **Per Linux**: Segui il capitolo [Aggiungi un calendario su Thunderbird](#thunderbird)
- **Per iPhone e iPad**: Segui il capitolo [Aggiungi un calendario su iOS e ipadOS](#apple-ios)
- **Per Android**: consulta la guida [Zimbra - Configurare un account email sull’applicazione mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios).

> [!warning]
>
> I dispositivi Android non offrono attualmente il supporto nativo CalDAV. Inoltre non abbiamo trovato un'applicazione di terze parti stabile in grado di sincronizzare i calendari Zimbra delle nostre offerte.
>
> L'unica applicazione Zimbra, basata sul suo Webmail, è in grado di consultare i calendari online su un dispositivo Android.

#### Impostazioni generali per un calendario CalDAV Zimbra <a name="general-settings"></a>

Se si utilizza un'applicazione compatibile con CalDAV, è necessario conoscere le impostazioni generali per l'impostazione di un calendario CalDAV Zimbra:

- **Server / Indirizzo / URL**: inserisci il valore `zimbra1.mail.ovh.net`. Per alcuni software è necessario aggiungere il protocollo "https" all’indirizzo, inserisci il valore `https://zimbra1.mail.ovh.net`.
- **Nome utente**: inserisci l'indirizzo email completo associato al calendario.
- **Password**: inserisci la password dell’indirizzo email associato al calendario.

#### Aggiungere un calendario su Thunderbird <a name="thunderbird"></a>

> [!primary]
>
> [Mozilla Thunderbird](https://www.thunderbird.net/) è disponibile su Windows, macOS e Linux. I passaggi di installazione seguenti sono stati eseguiti da macOS, ma si applicano allo stesso modo su Windows e Linux.

Apri Thunderbird e clicca sull’icona "Agenda" nella colonna a sinistra.

Segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> - Fare clic su `Nuovo calendario`{.action} nella parte inferiore della colonna del calendario oppure fare clic con il tasto destro su un calendario esistente e selezionare `Nuovo calendario`{.action} dal menu a comparsa.
>> - Seleziona `In rete` e clicca su `Seguente`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird01.png){.thumbnail .w-600 .h-600}
>>
> **Step 2**
>>
>> Inserire le informazioni di connessione al calendario:
>>
>> - **Nome utente**: inserisci l'indirizzo email completo associato al calendario.
>> - **Indirizzo**: immettere il valore `zimbra1.mail.ovh.net`.
>> - **Questo indirizzo non richiede un identificativo di accesso**: non selezionare questa casella di controllo e ti verrà chiesto di inserire la password associata all'indirizzo email indicato sopra.
>> - **Supporto modalità offline**: è possibile lasciare selezionata questa opzione.
>>
>> Clicca su `Trova agende`{.action} per avviare la sincronizzazione del calendario. Nella nuova finestra, inserisci la password associata al nome utente e conferma l’operazione.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird02.png){.thumbnail .w-600 .h-600}
>>
> **Step 3**
>>
>> La finestra qui sotto appare con gli elementi CalDAV presenti su un account email Zimbra. Seleziona gli elementi che vuoi far apparire nel calendario Thunderbird e clicca su `Accedi`{.action} per completare la configurazione.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird03.png){.thumbnail .w-600 .h-600}
>>

#### Aggiungere un calendario su iOS e ipadOS <a name="apple-ios"></a>

> [!warning]
>
> La configurazione qui sotto è stata realizzata a partire da un iPhone. Tuttavia, la manipolazione rimane la stessa da un iPad.

Per aggiungere un calendario CalDAV sull’applicazione Apple `Calendario` del tuo iPhone o iPad, segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Vai alle `Impostazioni`{.action} del tuo iPhone o iPad. Consulta la sezione `Calendario`{.action} scorrendo il menu o digitando "Calendario" nella barra di ricerca delle impostazioni.
>>
>> ![zimbra_app](images/zimbra-calendar-ios01.png){.thumbnail .w-600 .h-600}
>>
> **Step 2**
>>
>> Accedi alla sezione `Account Calendario`{.action} e seleziona `Aggiungi account`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-ios02.png){.thumbnail .w-600 .h-600}
>>
> **Step 3**
>>
>> Seleziona `Altro`{.action}, poi seleziona `Aggiungi un account CalDAV`{.action} nella sezione "CALENDARIO".
>>
>> ![zimbra_app](images/zimbra-calendar-ios03.png){.thumbnail .w-600 .h-600}
>>
> **Step 4**
>>
>> Inserire le informazioni di connessione al calendario:
>>
>> - **Server**: inserisci il valore `zimbra1.mail.ovh.net`.
>> - **Nome utente**: inserisci l'indirizzo email completo associato al calendario.
>> - **Password**: inserisci la password dell’indirizzo email.
>> - **Descrizione**: aggiungere una descrizione al calendario.
>>
>> Conferma cliccando sul pulsante `Avanti`{.action}.
>>
>> Scegliete le applicazioni `Calendario` e `Promemoria` che utilizzeranno le informazioni del calendario Zimbra.
>>
>> ![zimbra_app](images/zimbra-calendar-ios04.png){.thumbnail .w-600 .h-600}
>>

#### Aggiungere un calendario su macOS <a name="apple-macos"></a>

Per aggiungere un calendario CalDAV sull’applicazione Apple `Calendario` del tuo Mac, avvia l’applicazione e segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Clicca su `Calendario`{.action} nella barra del menu superiore e poi su `Aggiungi un account`{.action}. Seleziona `Aggiungi un account CalDAV` e clicca su `Continua`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos01.png){.thumbnail .w-600 .h-600}
>>
> **Step 2**
>>
>> Nella finestra di configurazione, inserisci queste informazioni:
>>
>> - **Tipo di account**: scegli `Manuale` nel menu a tendina.
>> - **Nome utente**: inserisci l'indirizzo email completo associato al calendario.
>> - **Password**: inserisci la password dell’indirizzo email.
>> - **Indirizzo del server**: immettere il valore `zimbra1.mail.ovh.net`.
>>
>> Per terminare, clicca su `Accedi`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos02.png){.thumbnail .w-600 .h-600}
>>

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurare un indirizzo email Zimbra su un client di posta](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ soluzione Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).