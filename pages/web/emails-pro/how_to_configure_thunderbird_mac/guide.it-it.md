---
title: Configurare un account Email Pro su Thunderbird per macOS
slug: configurazione-thundebird-emailpro-mac
excerpt: Come configurare il tuo indirizzo Email Pro su Thunderbird per macOS
section: Configurazione di un client di posta
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/08/2021**

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci. Thunderbird è un client di posta gratuito e gratuito.

**Questa guida ti mostra come configurare il tuo indirizzo email Email Pro su Thunderbird su macOS.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 

## Prerequisiti

- Disporre di un account email [Email Pro](https://docs.ovh.com/it/emails-pro/)
- Aver installato il software Thunderbird sul tuo macOS
- Disporre delle credenziali associate all’indirizzo email da configurare
 
## Procedura

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**?**.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}, selezionando `Email Pro`{.action}. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
> 

### Aggiungi l'account

- Durante il primo avvio dell’applicazione un assistente di configurazione apparirà sullo schermo e ti inviterà a inserire il tuo indirizzo e-mail.

- **Se è già stato impostato** un account: clicca su `File`{.action} nella barra dei menu in alto nello schermo, poi `Nuovo`{.action} e infine `Ricevi un nuovo account di posta...`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-mac-emailpro01.png){.thumbnail}|Nella finestra che appare inserisci queste 3 informazioni: <br>- Nome completo (Nome visualizzato)<br>- Indirizzo di posta elettronica <br>- Password|
|Clicca su `Configura manualmente...`{.action} per inserire le impostazioni del server **IN ENTRATA**: <br>- Protocollo **IMAP** <br>- Server **ssl0.ovh.net** <br>- Port **993** <br>- SSL **SSL/TLS** <br>- Autenticazione **Password normale** <br>- Identificativo **del tuo indirizzo email completo**|![Thunderbird](images/thunderbird-mac-emailpro02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-mac-emailpro03.png){.thumbnail}|Inserisci le impostazioni del server **USCENTE**: <br>- Protocollo **SMTP** <br>- Server **ssl0.ovh.net** <br>- Port **465** <br>- SSL **SSL/TLS** <br>- Autenticazione **Password normale** <br>- Identificativo **del tuo indirizzo email completo**<br><br>Per completare la configurazione, clicca su `Fine`{.action}|



Nell'ambito di una configurazione in **POP**, i valori sono i seguenti:

|Tipo di server|Nome del server|Metodo di cifratura|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|995|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone anche un'applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. disponibile alla pagina <https://www.ovh.it/mail/> accessibile utilizzando le credenziali del tuo account. Se hai bisogno di aiuto per effettuare questa operazione, consulta [il tuo account Exchange dall'interfaccia OWA](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2016_guida_allutilizzo_di_outlook_web_app/).

### Recuperare un backup del tuo indirizzo email

Se è necessario effettuare un'operazione che potrebbe comportare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preliminare dell'account email in questione. Per effettuare questa operazione consulta il paragrafo "**Esporta**" nella sezione "**Thunderbird**" della nostra guida [Migrare manualmente il tuo indirizzo email](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/#esportare_1).

### Modifica i parametri esistenti

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**?**.mail.ovh.net", dove "?" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}, selezionando `Email Pro`{.action}. Il nome del server è visibile nel riquadro **Connessione** della scheda `Informazioni generali`{.action}.
> 

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

- Seleziona `Strumenti`{.action} dalla barra dei menu in alto nello schermo.
- Clicca su `Impostazioni account`{.action}.

![Thunderbird](images/thunderbird-mac-emailpro04.png){.thumbnail}

- Per modificare i parametri legati alla **ricezione** delle tue email, clicca su `Impostazioni server`{.action} nella colonna di sinistra sotto il tuo indirizzo email.

![Thunderbird](images/thunderbird-mac-emailpro05.png){.thumbnail}

- Per modificare le impostazioni relative **all'invio** delle tue email, clicca su `Server in uscita (SMTP)`{.action} in basso a sinistra.
- Clicca sull'indirizzo email corrispondente nella lista e poi clicca su `Modifica`{.action}.

![Thunderbird](images/thunderbird-mac-emailpro06.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.