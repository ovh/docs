---
title: 'Utilizzo dei gruppi (mailing list)'
excerpt: 'Come gestire la mailing list di Exchange'
updated: 2020-02-26
---

## Obiettivo

I gruppi Exchange consentono agli utenti di comunicare inviando email a un unico indirizzo di gruppo. Grazie a questa funzionalità di collaborazione, è possibile creare e gestire mailing list che includono utenti Exchange o utenti esterni.

**Questa guida ti mostra come utilizzare i gruppi Exchange tramite lo Spazio Cliente OVHcloud e Outlook Web App (OWA).**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una [soluzione Exchange OVHcloud](https://www.ovhcloud.com/it/emails/hosted-exchange/) attiva

## Procedura

### Step 1: crea un nuovo gruppo

Per prima cosa, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Webcloud`{.action}, e seleziona il tuo servizio cliccando su `Microsoft`{.action} > `Exchange`{.action}. Clicca sulla scheda `Gruppi`{.action} nel menu orizzontale.

![contactgroups](images/exchange-groups-step1.png){.thumbnail}

Quindi clicca su `Crea un gruppo di contatti`{.action}. A questo punto, si apre una nuova finestra in cui è possibile definire le impostazioni del gruppo:

![contactgroups](images/exchange-groups-step2.png){.thumbnail}

|Nome|Descrizione|
|---|---|
|Indirizzo email|Il nuovo indirizzo email per inviare messaggi alla Mailing List. Attenzione: non utilizzare un indirizzo email già esistente.|
|Nome del gruppo|Il nome che appare nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e nella [Webmail OVHcloud](https://www.ovh.it/mail/) (OWA).|
|Dimensione massima di entrata/uscita|Puoi specificare la dimensione massima dei messaggi in entrata e in uscita.|
|Nascondi in Outlook|Se spunti questa casella, l’indirizzo email del gruppo non apparirà nella lista degli indirizzi del servizio Exchange.|
|Autenticazione richiesta|Se spunti questa casella, solo gli utenti della stessa piattaforma potranno inviare un messaggio tramite l’indirizzo email del gruppo.|

> [!primary]
>
Attenzione: per ragioni di sicurezza, le opzioni “Gestisci gli abbonati” e “Gestisci i non abbonati” sono state disabilitate dai nostri amministratori. Ci scusiamo per l’inconveniente.
>

Clicca su `Avanti`{.action} per continuare.

Nella seconda pagina, indica i membri del gruppo e scegli gli ”Amministratori”. La scelta includerà soltanto gli indirizzi email e i contatti esterni precedentemente creati nel servizio.

![contactgroups](images/exchange-groups-step3.png){.thumbnail}

Attenzione: anche gli “Amministratori” devono essere impostati come “Contatti” per poter ricevere le email del gruppo.
Clicca su `Avanti`{.action} per continuare e infine su `Conferma`{.action} per completare l’operazione. 

### Step 2: gestire i gruppi

Il tuo gruppo appena creato sarà operativo in pochi minuti.  Per modificare le impostazioni sopra descritte, dalla lista dei gruppi, clicca sui tre puntini `...`{.action} e selezionale dal menu.

![contactgroups](images/exchange-groups-step4.png){.thumbnail}

Inoltre, visualizzi la voce del menu `Gestisci le deleghe`{.action}. Questa opzione ti consente di delegare l’accesso proprio come per un account Exchange. Per saperne di più, consulta [questa guida](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation).

![contactgroups](images/exchange-groups-step5.png){.thumbnail}

> [!primary]
>
Attenzione: qualsiasi modifica del servizio diventerà effettiva dopo alcuni minuti. È possibile controllare lo stato della maggior parte delle operazioni selezionando il pulsante `More+`{.action} e `Attività recenti`{.action} dal menu orizzontale.
>

### Step 3: invia messaggi a un gruppo con la Webmail OWA

Per verificare la tua Mailing List tramite [OVHcloud Webmail](https://www.ovh.it/mail)(OWA) invia un’email all’indirizzo del gruppo.

![contactgroups](images/exchange-groups-step6.png){.thumbnail}

## Per saperne di più 

[Delegare i diritti su un account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Guida all’utilizzo di Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Condividi un calendario con la Webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.