---
title: "Configurare un account Email Pro su Android con l'applicazione Microsoft Outlook"
excerpt: "Questa guida ti mostra come configurare un account Email Pro su Adroid con l'applicazione Microsoft Outlook"
updated: 2023-07-25
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Gli account Email Pro possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro su Android con l'applicazione Microsoft Outlook.**

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external}
- Aver installato l'applicazione Microsoft Outlook sul tuo dispositivo Android Puoi scaricarla dal *Google Play Store*.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/directory/) o di contattare l'amministratore del servizio. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
> 

## Procedura

### Step 1: recuperare le informazioni dell'account Email Pro <a name="step1"></a>

Accedi alla sezione `Web Cloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Nella colonna di sinistra, clicca su `Email Pro`{.action} e seleziona la piattaforma Email Pro dove vuoi configurare l'indirizzo email.

Nella nuova pagina clicca sulla scheda `Account email`{.action}.

![Outlook-android-emailpro-login](images/ol-android-ep-login.png){.thumbnail}

Recupera il nome del server Email Pr* che appare sotto la voce `Webmail`{.action}. Nel nostro esempio illustrato, `proX.mail.ovh.net`

> [!warning]
>
> Recupera il **bel nome** del server Email Pro dove si trova l'indirizzo email che vuoi configurare. in quanto potrebbe variare in base alla durata del servizio Email Pro (pro1.mail.ovh.net, pro2.mail.ovh.net, ecc...).
> 

Sempre nella scheda `Account email`{.action} della tua piattaforma *Email Pro*, viene visualizzata una tabella con il tuo indirizzo Email Pro.

Se non ricordi più la password di accesso all'indirizzo email che vuoi configurare, puoi modificarla con il pulsante `...`{.action} situato sulla stessa linea a destra dell'account email.

Seleziona `Modifica`{.action}, scegli una nuova password e confermala. Clicca su `Continua`{.action} e poi su `Conferma`{.action} nella seconda finestra.

La modifica della password viene presa in carico entro 15 minuti, approssimativamente.

> [!warning]
>
> Se modifichi la password del tuo indirizzo email e quest'ultima è già utilizzata da un altro dispositivo (client di posta, computer, tablet, smartphone, fotocopiatrice, ecc...), è necessario aggiornare la password su questi altri dispositivi.
> perché non saranno più in grado di connettersi al tuo indirizzo email tramite la password precedente.
>

Al termine del primo step, è necessario disporre di questi elementi:

- il nome del server Email Pro (pro1.mail.ovh.net, pro2.mail.ovh.net, ecc...)
- l'indirizzo email da configurare
- la password dell'indirizzo email da configurare

### Step 2: configura il tuo indirizzo su Android tramite l'applicazione Microsoft Outlook <a name="step2"></a>

Avvia sul tuo dispositivo Android l'applicazione Microsoft Outlook. Se non l'hai già installata, scaricala dal *Google Play Store*.

|||
|---|---|
|![Outlook-android-emailpro-login](images/Screenshot_Outlook_1.png){.thumbnail}|![Outlook-android-emailpro-login](images/Screenshot_Outlook_3.png){.thumbnail}|

Una volta aperto, clicca su `Aggiungi un account`{.action}, inserisci il tuo indirizzo email completo nella sezione `Inserisci il tuo indirizzo di posta`{.action} e clicca su `Continua`{.action}.

A questo punto, nella parte inferiore dello schermo sono disponibili due opzioni di configurazione: `IMAP`{.action} e `POP3`{.action}

|||
|---|---|
| ![Outlook-android-emailpro-login](images/Screenshot_Outlook_4.png){.thumbnail} | ![Outlook-android-emailpro-login](images/Screenshot_Outlook_2.png){.thumbnail} |

> [!success]
>
> Il protocollo di sincronizzazione **IMAP** permette di recuperare un'immagine delle email presenti nel tuo indirizzo Email Pro lato server per visualizzarle nella tua applicazione Microsoft Outlook, **senza** eliminare l'email dal server Email Pro in cui si trova il tuo indirizzo email. Questo protocollo è molto utile soprattutto se hai più dispositivi configurati con il tuo indirizzo email.
>
> Il protocollo **POP3** recupera di default l'email ricevuta sul server Email Pro, dove si trova il tuo indirizzo email per conservarla nell'applicazione/software configurato con quest'ultima. L'email non è più presente sul server Email Pro, ma è disponibile solo sul dispositivo configurato con il tuo indirizzo email tramite il protocollo POP.
> Questo protocollo non è consigliato se hai più dispositivi configurati con il tuo indirizzo email. Infatti, l'email sarà presente solo su uno dei dispositivi configurati in **POP3** e non su tutti i dispositivi configurati con il tuo indirizzo email.
>
> Tuttavia, nonostante la configurazione **POP3**, alcuni client di posta o applicazioni inviano comunque una copia dell'email sul server in cui si trova il tuo indirizzo email. Tale copia può essere conservata temporaneamente o permanentemente.
> Per sapere se l'applicazione o il software sono inclusi, contatta direttamente l'editor del software.
>


#### Caso n. 1: configurazione dell'applicazione Microsoft Outlook su Android con il protocollo IMAP

Seleziona `IMAP`{.action} in fondo allo schermo.

Nella nuova pagina, il tuo indirizzo email è preinserito.

Inserisci la password del tuo indirizzo Email Pro nel modulo `Password`{.action} appena sotto il punto in cui il tuo indirizzo email è già preinserito.

Nei due moduli che seguono, in modo totalmente **facoltativo**, inserisci una `Nome completo`{.action} e una `Descrizione`{.action}.

Seleziona la voce `PARAMETRI AVANZATI`{.action} per visualizzare il resto del menu di configurazione.

Compila i moduli utilizzando le informazioni indicate di seguito.

Per la sezione **Server di posta in entrata IMAP**:

 - **Nome host IMAP**: specifica il nome del tuo server Email Pro recuperato precedentemente durante lo [step 1](#step1): (esempi: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, ecc.)
 - **Port**: inserisci il numero di porta **993**;
 - **Tipo di sicurezza**: scegli dalla lista a tendina la sicurezza **SSL/TLS**
 - **Nome utente IMAP**: indica l'indirizzo email che vuoi configurare
 - **Password IMAP**: inserisci la password di accesso all'indirizzo email che vuoi configurare.

Per la sezione **Server di posta in uscita SMTP**:

 - **Nome host SMTP**: specifica il nome del tuo server Email Pro recuperato precedentemente durante lo [step 1](#step1): (esempi: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, ecc.)
 - **Port**: inserisci il numero di porta **587**;
 - **Tipo di sicurezza**: scegli la sicurezza dalla lista a tendina **StartTls**
 - **Nome utente SMTP**: indica l'indirizzo email che vuoi configurare
 - **Password SMTP**: inserisci la password di accesso all'indirizzo email che vuoi configurare.

Verifica che tutti i parametri inseriti corrispondano agli elementi indicati sopra e clicca su `V`{.action} in alto a destra.

#### Caso n. 2: configurazione dell'applicazione Microsoft Outlook su Android con il protocollo "POP3"

Clicca su `POP3`{.action} in basso sullo schermo. 

Nella nuova pagina, il tuo indirizzo email è preinserito.

Inserisci la password del tuo indirizzo Email Pro nel modulo `Password`{.action} appena sotto il punto in cui il tuo indirizzo email è già preinserito.

Nei due moduli che seguono, in modo totalmente **facoltativo**, inserisci una `Nome completo`{.action} e una `Descrizione`{.action}.

Seleziona la voce `PARAMETRI AVANZATI`{.action} per visualizzare il resto del menu di configurazione.

Compila i moduli utilizzando le informazioni indicate di seguito.

Per la sezione **Server di posta in entrata POP**:

 - **Nome host POP**: specifica il nome del tuo server Email Pro recuperato precedentemente durante lo [step 1](#step1): (esempi: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, ecc.)
 - **Port**: inserisci il numero di porta **995**;
 - **Tipo di sicurezza**: scegli dalla lista a tendina la sicurezza **SSL/TLS**
 - **Nome utente POP**: indica l'indirizzo email che vuoi configurare
 - **Password POP**: inserisci la password di accesso all'indirizzo email che vuoi configurare.

Per la sezione **Server di posta in uscita SMTP**:

 - **Nome host SMTP**: specifica il nome del tuo server Email Pro recuperato precedentemente durante lo [step 1](#step1): (esempi: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, ecc.)
 - **Port**: inserisci il numero di porta **587**;
 - **Tipo di sicurezza**: scegli la sicurezza dalla lista a tendina **StartTls**
 - **Nome utente SMTP**: indica l'indirizzo email che vuoi configurare
 - **Password SMTP**: inserisci la password di accesso all'indirizzo email che vuoi configurare.

Verifica che tutti i parametri inseriti corrispondano agli elementi indicati sopra e clicca su `V`{.action} in alto a destra.

### Step 3: completare la configurazione su Android dell'applicazione Microsoft Outlook

Dopo aver cliccato sull'icona a forma di `V`{.action}, l'applicazione eseguirà il test delle impostazioni e si connetterà al server Email Pro in cui si trova il tuo indirizzo email.
che successivamente sincronizza/recupera il contenuto del tuo indirizzo email per visualizzarlo sul tuo dispositivo.

Prova l'invio e la ricezione delle email dalla tua applicazione Microsoft Outlook per completare la configurazione.

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.