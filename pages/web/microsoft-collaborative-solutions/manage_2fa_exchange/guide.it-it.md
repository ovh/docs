---
title: 'Attivare la doppia autenticazione su un account Exchange'
slug: attiva_2fa_exchange
excerpt: 'Come attivare la doppia autenticazione su un account Exchange'
section: 'Funzionalità degli account Exchange'
order: 3
---

**Ultimo aggiornamento: 11/03/2020**

## Obiettivo

Per rafforzare la sicurezza del tuo account Exchange, puoi attivare l’autenticazione a due fattori (2FA), che consiste nell’inserire un nuovo codice, in aggiunta alla password, ogni volta che accedi al tuo account. Questo codice è generato da un’applicazione *one-time password* (OTP) da installare sul tuo smartphone o tablet.

**Questa guida ti mostra come attivare l’autenticazione a due fattori sul tuo account Exchange.**

## Prerequisiti

- Disporre di una soluzione [Exchange OVHcloud](https://www.ovh.it/emails/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Aver installato un’applicazione OTP su smartphone o tablet Android o iOS. 

> [!primary]
>**Le applicazioni OTP per dispositivi mobili**
>
> Esistono numerose applicazioni OTP. Eccone due, gratuite:
> 
> - Per Android: Free OTP 
> - Per iOS: OTP Auth.
> 

## Procedura

### Prima configurazione

#### Step 1: attiva la doppia autenticazione sulla piattaforma 

Al momento della prima configurazione, è necessario attivare la doppia autenticazione sulla piattaforma prima di attivarla su un account.

Accedi all’area “Web” del tuo[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Seleziona il tuo servizio cliccando su `Microsoft`{.action} > `Exchange`{.action} nel menu a sinistra.

Quindi seleziona la scheda `Sicurezza`{.action} della tua piattaforma e clicca su `Attiva`{.action}, sotto alla voce “Doppia autenticazione”. Infine, scorri fino in fondo alla pagina e clicca su `Salva modifiche`{.action} per completare l’operazione.

![2fa-exchange](images/2fa-exchange.gif){.thumbnail}

#### Step 2: attiva la doppia autenticazione

Una volta attivata la doppia autenticazione sulla piattaforma, è possibile attivarla su uno dei tuoi account.

Sempre dalla piattaforma Exchange, seleziona la scheda `Account email`{.action}. Clicca sui tre puntini `...`{.action} a destra dell’account su cui vuoi attivare la doppia autenticazione e poi clicca su `Attiva la doppia autenticazione`{.action}.

![2fa-exchange](images/2fa-exchange-01.png){.thumbnail}

Per associare il tuo account all’applicazione OTP, accedi alla [webmail](https://www.ovh.it/mail).

Al momento della prima connessione, compare un codice QR. Scansionalo tramite l’applicazione OTP, quindi inserisci il codice appena generato per effettuare l’accesso.

![2fa-exchange](images/2fa-exchange-02.png){.thumbnail}

Per le connessioni successive, sarà necessario inserire solo il codice generato dalla tua applicazione.

### Disattiva la doppia autenticazione

La doppia autenticazione può essere disattivata in tre modi diversi:

Accedi all’area “Web” del tuo[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Seleziona il tuo servizio cliccando su `Microsoft`{.action} > `Exchange`{.action} nel menu a sinistra.

Dalla scheda `Account email`{.action} della piattaforma Exchange, clicca sui tre puntini `...`{.action} a destra dell’account su cui la doppia autenticazione è già attiva.

![2fa-exchange](images/2fa-exchange-04.png){.thumbnail}

Seleziona l’opzione che preferisci in base alla seguente tabella:

| N°                 	| Funzionalità    | Descrizione                                                                                                        	
|----------------------------------	|------------------|------------------|
| 1. | Disattivare la doppia autenticazione | Consente di sospendere la doppia autenticazione per un determinato periodo di tempo espresso in ore. Una volta scaduto il termine, la doppia autenticazione sarà riattivata. <br> *Esempio: un utente ha dimenticato il suo smartphone e non può autenticarsi con l’applicazione OTP.*   |
| 2. | Reimpostare la doppia autenticazione | Consente di reimpostare il codice QR richiesto al momento del tuo primo accesso alla Webmail.<br> *Esempio: un utente ha cambiato smartphone e deve riconfigurare l’applicazione OTP.* |
| 3. | Rimuovere la doppia autenticazione via SMS | Consente di rimuovere completamente la doppia autenticazione dal tuo account. | 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
