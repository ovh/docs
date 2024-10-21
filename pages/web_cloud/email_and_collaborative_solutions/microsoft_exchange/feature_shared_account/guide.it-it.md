---
title: Crea e utilizza un account condiviso
excerpt: Aggiungi e utilizza un account condiviso sulla tua soluzione Exchange
updated: 2023-09-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un **account condiviso** è una casella email condivisa tra più account Exchange e accessibile solo tramite questi ultimi. Se un account condiviso non possiede password, è necessario delegare il suo accesso a uno o più account della piattaforma Exchange.
<br>Gli account condivisi sono accessibili, grazie a una delega, da OWA (Webmail Exchange) o tramite il client di posta Outlook.

**Questa guida ti mostra come creare e gestire un account condiviso sulla piattaforma Exchange.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una soluzione [Exchange OVHcloud](https://www.ovhcloud.com/it/emails/hosted-exchange/)

## Procedura

### Aggiungi un account condiviso

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Accedi alla sezione `Web Cloud`{.action} e seleziona il tuo servizio di `Microsoft`{.action} e poi `Exchange`{.action}.

Seleziona la scheda `Account condivisi`{.action} nel menu orizzontale e clicca su `Aggiungi un account condiviso`{.action}.

![email](images/exchange-shared_accounts01.png){.thumbnail}

Inserisci i campi richiesti:

|Funzionalità|Descrizione|
|---|---|
|Account email|Scegli il nome del tuo account condiviso. **Non deve trattarsi di un indirizzo email esistente.**|
|Quota|Indica la quota di storage desiderata per il tuo account condiviso, [in base allo spazio disponibile](#size).|
|Nome da visualizzare|Il nome visualizzato durante un invio dal tuo account condiviso.|
|Nascondi l'indirizzo nella rubrica|Nascondere l'indirizzo nella rubrica permette di garantire che l'indirizzo dell'account condiviso non sia visibile nella lista degli indirizzi della tua piattaforma Exchange.|

<a name="size"></a>

> [!primary]
>
> Lo spazio disponibile per creare un account condiviso dipende dal numero di account sottoscritti sulla piattaforma. Ogni account Exchange sottoscritto sulla piattaforma sblocca 5 GB per gli account condivisi.
>
> **esempio:**
>
> Hai attivato 4 account Exchange sulla tua piattaforma, quindi hai **4 x 5GB**, cioè **20 GB** di spazio assegnato per gli account condivisi della tua piattaforma.

Clicca su `Seguente`{.action} per visualizzare il riepilogo. Per completare l'operazione, clicca su `Conferma`{.action}.

![email](images/exchange-shared_accounts02.png){.thumbnail}

### Gestisci la delega di un account condiviso

Una volta creato il tuo account condiviso, è necessario delegare l'accesso a uno o più account della tua piattaforma.

Un account condiviso non è direttamente accessibile perché non possiede una password. Non è quindi configurabile direttamente in un client di tipo Outlook o accessibile dalla Webmail.

È necessario creare una delega tra un account Exchange e un account condiviso.

Dalla scheda `Account condivisi`{.action} della tua piattaforma Exchange, clicca sul pulsante `...`{.action} davanti all'account condiviso e poi clicca su `Configura le deleghe`{.action}. Potrai scegliere, nella tua lista di account, quelli che avranno la possibilità di accedere all'account condiviso.

![email](images/exchange-shared_accounts03.png){.thumbnail}

Scegli le azioni possibili sull'account selezionato:

|Funzionalità|Descrizione|
|---|---|
|Diritto di invio|Permette all'account email selezionato di effettuare un invio come l'indirizzo email condiviso.|
|Diritto di invio "da parte di"|Permette all'account email selezionato di effettuare un invio "da parte di" l'indirizzo email condiviso.|
|Diritto di accesso|Autorizza l'account email selezionato a visualizzare e gestire un account condiviso con OWA (webmail) o Outlook.|

Clicca su `Seguente`{.action} e `Conferma`{.action} per salvare le modifiche.

![email](images/exchange-shared_accounts04.png){.thumbnail}

Nel nostro esempio, permettiamo agli account **guide-exchange@** e **test@** di avere accesso all'account condiviso **shared_test@**.
<br>L'account email **guide-exchange@**avrà anche il diritto di inviare email "come" **shared_test@**.
<br>L'account email **test@** potrà anche inviare email "da parte di" **shared_test@**.

### Utilizzo di un account condiviso con OWA (Webmail)

Accedi alla Webmail Exchange (OWA) all'indirizzo <https://www.ovh.it/mail/> con un account email con diritto di accesso all'account condiviso.
<br>Nel nostro esempio, ci connettiamo con l'account **guide-exchange@**.

Nella colonna di sinistra clicca con il tasto destro sulla colonna principale dell'indirizzo email e poi su `Aggiungi una cartella condivisa`{.action}. 

![email](images/exchange-shared_accounts05.png){.thumbnail}

Digita il nome del tuo account condiviso e clicca su `Aggiungi`{.action} quando è stato trovato nella rubrica Exchange.

![email](images/exchange-shared_accounts06.png){.thumbnail}

Nel nostro esempio, l'account condiviso adesso è accessibile dall'account **guida-exchange@**.

![email](images/exchange-shared_accounts07.png){.thumbnail}

### Utilizzo dell'account condiviso da Outlook

Dal tuo software Outlook, troverai il tuo account condiviso nella colonna di sinistra, come sulla webmail.

![email](images/exchange-shared_accounts10.png){.thumbnail}

## Per saperne di più

[Consulta il tuo account Exchange dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Delegare permessi su un account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Condividi un calendario con la Webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Aggiungi un piede di pagina ai tuoi account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
