---
title: Configurare un account Exchange su Mail di macOS 
slug: configurazione-mail-macos
excerpt: Come configurare il tuo account Exchange su Mail di macOS El Capitan, Sierra e High Sierra
section: Configurazione di un client di posta elettronica Exchange
---

**Ultimo aggiornamento: 23/03/2018**

## Obiettivo

Gli account Exchange possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dall’applicazione che preferisci e usufruire di tutte le funzionalità collaborative riguardanti Exchange.

**Questa guida ti mostra come configurare il tuo account Exchange su Mail di macOS El Capitan, Sierra e High Sierra Sierra e High Sierra.**


## Prerequisiti

- Disporre di un’offerta [Exchange](https://www.ovhcloud.com/it/emails/){.external}
- Aver installato l’applicazione Mail sul proprio dispositivo
- Disporre delle credenziali associate all’account email da configurare 

> [!primary]
>
> Questa guida è valida per le versioni di macOS El Capitan, Sierra, High Sierra.
>

## Procedura

La configurazione dell’account può essere effettuata in due modi diversi:

- **in pochi click con il nostro tool Apple Devices**: accedi alla pagina <https://autodiscover.mail.ovh.net/AppleDevices/> e segui gli step di configurazione

- **tramite la configurazione guidata dell’applicazione Mail** disponibile sul tuo dispositivo

Questa guida descrive esclusivamente gli step di configurazione dell’applicazione Mail.

### Step 1: aggiungi il tuo account

Una volta avviata l’applicazione Mail sul tuo dispositivo, puoi aggiungere un nuovo account in due modi diversi.

- **Al primo avvio dell’applicazione** si apre una finestra da cui è possibile scegliere l’account da utilizzare con Mail. Seleziona `Exchange`{.action} e continua

- **Se hai già configurato un account**, clicca su `Mail`{.action} in alto nello schermo e poi su `Aggiungi account`{.action}. Seleziona `Exchange`{.action} e continua

![exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Inserisci le informazioni del tuo account:

|Informazione|Descrizione| 
|---|---| 
|Nome|Indica il nome che comparirà come mittente dei messaggi inviati da questo indirizzo|
|Indirizzo email|Inserisci l’indirizzo email completo|
|Password|Digita la password associata all’account|  

Clicca sul pulsante `Accedi`{.action}. Se le informazioni inserite sono esatte e se il nome del dominio è configurato correttamente sul tuo servizio Exchange, l’accesso all’account andrà a buon fine.

![exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Per il corretto funzionamento del tuo account assicurati che durante la scelta delle applicazioni la voce `Mail`{.action} sia selezionata. Le altre applicazioni possono utilizzare alcune delle funzionalità collaborative riguardanti Exchange. Una volta effettuata la scelta, clicca su `Fine`{.action}.

Puoi effettuare un test d’invio per verificare che l’account sia impostato correttamente.

![exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Se non riesci ad accedere all’account, ti suggeriamo di:

- verificare la configurazione del dominio impostato sul tuo servizio Exchange attraverso lo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} > scheda `Domini associati`{.action} > colonna `Diagnostica`{.action}

- provare a inserire manualmente le URL di connessione al servizio Exchange nonostante l’avviso di sicurezza del certificato e completare i campi `URL interno`{.action} e `URL esterno`{.action} con le informazioni del server su cui è ospitato il servizio Exchange.

Per ritrovare questo server, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca sul servizio Exchange interessato. Accedi poi alla scheda `Informazioni generali`{.action} e recupera il server che appare nel riquadro `Connessione`{.action}.

### Step 2: utilizza il tuo account 

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo: da questo momento puoi infatti inviare e ricevere messaggi.

OVH propone un’applicazione Web con [funzionalità collaborative](https://www.ovhcloud.com/it/emails/){.external}, disponibile alla pagina <https://pro1.mail.ovh.net> e accessibile con le credenziali del tuo account.

## Per saperne di più

[Configurare un account email su Mail di macOS](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_su_mail_di_mac_-_el_capitan/){.external}

[Configurare un account Email Pro su Mail di macOS](https://docs.ovh.com/it/emails-pro/configurare-email-pro-mail-macos/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>
