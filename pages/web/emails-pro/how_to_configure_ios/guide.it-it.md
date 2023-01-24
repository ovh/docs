---
title: 'Configurare un account Email Pro su un iPhone o un iPad'
slug: configurazione-iphone-ios
excerpt: 'Come configurare un account Email Pro su un iPhone o un iPad tramite l’applicazione Mail'
section: 'Configurazione di un client di posta'
order: 3
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/05/2020**

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare il tuo account Email Pro su un iPhone o un iPad tramite l’applicazione Mail.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo sito. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Disporre di un [account Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external}
- Aver installato l'applicazione Mail sul proprio dispositivo iOS
- Disporre delle credenziali associate all’account email da configurare

## Procedura

### Step 1: aggiungi il tuo account

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**?**.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}, selezionando `Email Pro`{.action}. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
> 

Sulla schermata Home del tuo dispositivo clicca su `Impostazioni`{.action} (icona a ruota dentata). L'aggiunta di un account si effettua in diversi modi, a seconda della tua versione iOS:

- **Per iOS 7, 8, 9 e 10**: clicca su `Mail, Contatti, Calendario`{.action}, poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per iOS 11**: clicca su `Account e password`{.action} e poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per le versioni attuali**: seguire le istruzioni riportate nella tabella seguente.

| | |
|---|---|
|![exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. Nelle `Impostazioni`, vai su `Mail`. <br><br> 2. Premi su `Account`.<br><br> 3. Clicca su `Aggiungi account`.<br><br> 4. Scegliete `Altro` in basso.|
|5. Clicca su `Aggiungi un account Mail`.<br><br>6. Inserisci il tuo **nome**, il tuo indirizzo **email**, la tua **password** e una **descrizione** del tuo account.<br><br>7. Clicca su `Avanti`.|![exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Seleziona il tipo di server di ricezione `IMAP` (consigliato) o `POP`.<br><br>Nelle sezioni `SERVER RICEVENTE` e `SERVER DI INVIO`, nonostante la dicitura "facoltativo", inserisci: <br>- l'hostname **pro?.mail.ovh.net** (sostituisci l'hostname "**?**" dal numero del server della tua Email Pro) <br>- il tuo indirizzo **email completo** nel nome utente <br>- la password del tuo indirizzo email|

Assicurati che, al termine della configurazione, la voce `Mail`{.action} sia selezionata in modo che l'applicazione possa utilizzare questo account e poi clicca su `Salva`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio.

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio Email Pro: 

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|pro**?**.mail.ovh.net|Sì|993|
|In uscita|pro**?**.mail.ovh.net|Sì|587|

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone un'applicazione Web con [funzionalità collaborative](https://www.ovhcloud.com/it/emails/){.external}, disponibile all'indirizzo <https://www.ovh.it/mail/>. e accessibile con le credenziali del tuo account.

> [!primary]
>
> In caso di difficoltà a ricevere o inviare email, consulta le nostre [FAQ sui servizi di posta OVHcloud](https://docs.ovh.com/it/emails/faq-emails/).
>

## Per saperne di più

[Configurare un indirizzo email compreso nell'offerta MX Plan o in una soluzione di hosting Web su un iPhone o un iPad](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_su_iphone_ios_91/)

[Configurare un account Exchange su un iPhone o un iPad](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_automatica_con_ios_iphone-ipad/)

[FAQ e-mail](https://docs.ovh.com/it/emails/faq-emails/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.