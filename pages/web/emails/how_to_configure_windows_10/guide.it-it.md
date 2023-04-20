---
title: 'Configurare un account MX Plan sull’applicazione Posta per Windows 10'
excerpt: 'Scopri come configurare un account email MX Plan sull’applicazione Posta per Windows'
legacy_guide_number: g2284
updated: 2018-04-04
---

**Ultimo aggiornamento: 19/07/2018**

## Obiettivo

Gli indirizzi email dell’offerta MX Plan possono essere configurati su un client di posta elettronica compatibile per consentirti di inviare e ricevere messaggi dall'applicazione che preferisci.

**Questa guida ti mostra come configurare il tuo indirizzo email MX Plan nell’applicazione Posta per Windows.**

## Prerequisiti

- Disporre di un indirizzo email MX Plan compreso nell’offerta MX Plan o in un’offerta di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Aver installato l’applicazione Posta sul proprio dispositivo
- Disporre delle credenziali associate all’indirizzo email da configurare

> [!primary]
>
> Utilizzi una versione precedente di Windows? Consulta la nostra documentazione: [Configurare un account di posta elettronica nell’applicazione Posta per Windows 8](/pages/web/emails/how_to_configure_windows_10){.external}
>

## Procedura

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Posta sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione**: si apre una finestra che ti invita a cliccare su `Aggiungi account`{.action}.

- **Se è già stato impostato un account**: clicca su `Account`{.action} nella barra dei menu a sinistra e poi su `Aggiungi account`{.action} nel menu che appare a destra.

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

Clicca su `Configurazione avanzata`{.action} e seleziona `Internet email`{.action} come tipo di account.

Inserisci le informazioni richieste:

|Informazione|Descrizione|
|---|---|
|Indirizzo di posta elettronica|Inserisci l’indirizzo email completo.|
|Nome utente|Inserisci l’indirizzo email completo.|
|Password|Digita la password associata all’account.|
|Nome dell’account|Inserisci un nome che ti permetterà di riconoscere questo account tra quelli presenti nella tua applicazione Posta.|
|Invia i tuoi messaggi utilizzando questo nome|Indica il nome che comparirà come mittente dei messaggi inviati da questo indirizzo.|
|Server di posta in entrata|Inserisci il server “ssl0.ovh.net”.|
|Tipo di account|Ti consigliamo di usare il protocollo **IMAP4**. Tuttavia puoi selezionare **POP** (archiviazione di email sulla tua applicazione Posta) nel menù a tendina.|
|Server di posta in uscita|Inserisci il server “ssl0.ovh.net”.|

Assicurati di aver selezionato correttamente le seguenti voci:

- “Il server in uscita richiede l’autenticazione”
- “Utilizzare lo stesso nome utente e la password per l’invio della posta”
- “Richiedere il protocollo SSL per la posta in entrata”
- “Richiedere il protocollo SSL per la posta in uscita”

Una volta inseriti tutti i dati, clicca su `Continua`{.action}. Se le informazioni inserite sono corrette, l’accesso all’account andrà a buon fine.

Per verificare la corretta configurazione dell’account esegui un test di invio.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio MX Plan: 

- **per la configurazione con IMAP4**

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|993|
|In uscita|ssl0.ovh.net|Sì|465|

- **per la configurazione con POP**

|Tipo di server |Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|995|
|In uscita|ssl0.ovh.net|Sì|465|

### Step 2: utilizza il tuo account

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVHcloud propone un’applicazione Web per accedere al tuo account email direttamente dal tuo browser, disponibile alla pagina <https://www.ovh.it/mail/> e accessibile con le credenziali del tuo account.
 
## Per saperne di più

[Configurare un account E-mail Pro nell’applicazione Posta per Windows](/pages/web/emails-pro/how_to_configure_windows_10)

[Configurare un account Exchange nell’applicazione Posta per Windows 10](/pages/web/microsoft-collaborative-solutions/how_to_configure_windows_10)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
