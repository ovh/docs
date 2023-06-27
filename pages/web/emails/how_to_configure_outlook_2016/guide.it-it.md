---
title: 'Configurare un account email su Outlook per Windows'
excerpt: 'Scopri come configurare un indirizzo email MX Plan su Outlook per Windows'
updated: 2021-06-05
---

 
> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>
 
**Ultimo aggiornamento: 05/06/2021**

## Obiettivo

Gli account MX Plan possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare il tuo indirizzo email MX Plan su Outlook 2016 o successivo per Windows.**


> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 


## Prerequisiti

- Disporre di un account email MX Plan incluso nel servizio MX Plan o in una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Disporre di un software Microsoft Outlook 2016 o successivo
- Disporre delle credenziali associate all’indirizzo email da configurare
 
> [!primary]
>
> Utilizzi Outlook 2016 per Mac? Consulta la nostra guida:  [Configurare un indirizzo e-mail su Outlook 2006 per Mac](/pages/web/emails/how_to_configure_outlook_2016_mac). 
>

## Procedura

### Aggiungi l'account

- Durante il primo avvio dell’applicazione un assistente di configurazione apparirà sullo schermo e ti inviterà a inserire il tuo indirizzo e-mail.

- **Se hai già configurato un account**, clicca su `File`{.action} nella barra dei menù in alto nello schermo e poi su `Aggiungi account`{.action}.

- Ora inserisci il tuo indirizzo e-mail e clicca su Opzioni avanzate.  Selezione la voce accanto a Configurare il mio account manualmente appena comparsa e clicca su Connetti 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

| | |
|---|---|
|![Outlook](images/config-outlook-mxplan02.png){.thumbnail}|Tra i diversi tipi di account, scegli tra IMAP e POP. <br>Ti consigliamo di utilizzare IMAP|
|Inserisci la password del tuo indirizzo email e clicca su `Avanti`{.action}. |![Outlook](images/config-outlook-mxplan03.png){.thumbnail}|
|![Outlook](images/config-outlook-mxplan04.png){.thumbnail}|Se Outlook non è riuscito a configurare automaticamente il tuo indirizzo, visualizzi questa finestra. <br>Clicca su `Modifica le impostazioni dell'account`{.action} |
|Inserisci nella **Posta in entrata**: <br>- il server **ssl0.ovh.net** <br>- Port **993**<br>- Crittografia **SSL/TLS**<br><br>Inserisci nella **Posta in uscita**: <br>- il server **ssl0.ovh.net** <br>- Port **465**<br>- Crittografia **SSL/TLS**<br><br>Clicca su `Seguente`{.action} per confermare l'operazione. |![Outlook](images/config-outlook-mxplan05.png){.thumbnail}|


Nell'ambito di una configurazione in **POP**, i valori sono i seguenti:

|Tipo di server|Nome del server|Metodo di cifratura|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|SSL/TLS|995|
|In uscita|ssl0.ovh.net|SSL/TLS|465|

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone anche un'applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. disponibile alla pagina <https://www.ovh.it/mail/> accessibile utilizzando le credenziali del tuo account. Per maggiori informazioni sul suo utilizzo, consulta la guida [Consultare il suo account Exchange dall'interfaccia OWA](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2016_guida_allutilizzo_di_outlook_web_app/).

### Recuperare un backup del tuo indirizzo email

Se è necessario effettuare un'operazione che potrebbe comportare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preliminare dell'account email in questione. Per effettuare questa operazione, consulta il paragrafo "**Esporta da Windows**" nella nostra guida [Migrare manualmente il tuo indirizzo email](/pages/web/emails/manual_email_migration#esporta-da-windows).

### Modifica i parametri esistenti

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

- Accedi al `File`{.action} dalla barra dei menu in alto nello schermo e seleziona l'account da modificare nel menu a tendina **(1)**.
- Clicca su `Impostazioni dell'account`{.action}**(2)** sotto.
- Clicca su `Impostazioni del server`{.action}**(3)** per accedere alla finestra delle impostazioni.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

La finestra è divisa in due parti: **Posta in entrata** e **Posta in uscita**. Clicca sull'uno o sull'altro per poterli modificare.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}


## Per saperne di più

[Configurare un account Email Pro su Outlook 2016 per Windows](/pages/web/emails-pro/how_to_configure_outlook_2016){.external}

[Configurare un account Exchange su Outlook 2016 per Windows](/pages/web/microsoft-collaborative-solutions/how_to_configure_outlook_2016){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.