---
title: "Exchange - Configura il tuo account di posta elettronica su Mail per iPhone e iPad"
excerpt: 'Scopri come configurare un account Exchange su un iPhone o un iPad tramite l’applicazione Mail'
updated: 2025-04-28
---

## Obiettivo

Gli account Exchange possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare il tuo account Exchange su un iPhone o un iPad tramite l'applicazione Mail.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo sito. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Disporre di un [account email Exchange](/links/web/emails)
- Aver installato l'applicazione Mail sul proprio dispositivo iOS
- Disporre delle credenziali associate all’account email da configurare

<!-- CP-NAV-START:web-exchange -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Exchange](/links/control-panel/web-exchange)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Exchange`{.action} > Seleziona la tua piattaforma

---
<!-- CP-NAV-END:web-exchange -->

## Procedura

### Aggiungi l’account <a name="addaccount"></a>

> [!warning]
>
> Nel nostro esempio, usiamo il nome del server: ex?.mail.ovh.net. Dovrai sostituire il "?" dalla cifra che indica il server del tuo servizio Exchange.
>
> Clicca su [questo link](/links/control-panel/web-exchange) per accedere alla sezione `Exchange`{.action}. Il nome del server viene visualizzato nella zona **Connessione** della scheda `Informazioni generali`{.action}.

Sulla schermata Home del tuo dispositivo clicca su `Impostazioni`{.action} (icona a ruota dentata). L'aggiunta di un account si effettua in diversi modi, a seconda della tua versione iOS:

- **Per iOS 7, 8, 9 e 10**: clicca su `Mail, Contatti, Calendario`{.action}, poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per iOS 11, 12 e 13**: clicca su `Account e password`{.action} e poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per le versioni iOS 14 e successive**: seguire le istruzioni riportate nella tabella seguente.

| | |
|---|---|
|![exchange](images/configuration-mailex-ios-step01.gif){.thumbnail}|1. Nelle `Impostazioni`, vai su `Mail`. <br><br> 2. Premi su `Account`.<br><br> 3. Clicca su `Aggiungi account`.<br><br> 4. Scegli `Microsoft Exchange`.|
|5. Inserisci il tuo **indirizzo email** e una **descrizione** del tuo account email, clicca su `Avanti`.<br><br>6. Seleziona `Configurazione manuale`.<br><br>|![exchange](images/configuration-mailex-ios-step02.png){.thumbnail}|
|![exchange](images/configuration-mailex-ios-step03.png){.thumbnail}|7. Inserisci: <br>- il server **ex?.mail.ovh.net** (sostituisci il server **?** per [numero del tuo server Exchange](#addaccount))<br>- il tuo **indirizzo email completo** nel nome utente <br>- la password del tuo indirizzo email|
|8. Assicurati di lasciare almeno `Selezionata Mail`{.action} affinché l'applicazione possa utilizzare questo account. Le altre applicazioni, come *Calendario* e *Note*, possono utilizzare alcune delle funzionalità collaborative legate ad Exchange.<br><br>9. Clicca su `Salva` per completare l'aggiunta del tuo account Exchange.|![exchange](images/configuration-mailex-ios-step04.png){.thumbnail}|

Per verificare la corretta configurazione dell’account esegui un test di invio.

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone un'applicazione Web con [funzionalità collaborative Exchange](/links/web/emails), disponibile all'indirizzo [Webmail](/links/web/email). e accessibile con le credenziali del tuo account.

> [!primary]
>
> In caso di difficoltà a ricevere o inviare email, consulta le nostre [FAQ sui servizi di posta OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
>

## Per saperne di più

> [!primary]
>
> Per informazioni sulla configurazione di un indirizzo email dall’applicazione Mail su iOS, consulta [il centro assistenza Apple](https://support.apple.com/it-it/102619).


[Configurare un indirizzo email compreso nell'offerta MX Plan o in una soluzione di hosting Web su un iPhone o un iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[Configurare un account Email Pro su un iPhone o un iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Contatta la nostra [Community di utenti](/links/community).