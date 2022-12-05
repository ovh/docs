---
title: Condividere una cartella con la Webmail OWA
excerpt: Come condividere una cartella tra account Exchange
slug: exchange_2016_condividi_una_cartella_con_la_webmail_owa
section: 'Outlook Web Application (OWA)'
order: 05
---


**Ultimo aggiornamento: 22/04/ 2020**

## Obiettivo

Non è sempre opportuno delegare l’utilizzo di un intero account di posta elettronica. La funzionalità di condivisione di una cartella Exchange ti  consente di concedere ad altri utenti l’accesso a determinate cartelle nel tuo account, assegnando autorizzazioni molto specifiche.

**Questa guida ti mostra come condividere cartelle e definire i diritti di accesso con Outlook Web App (OWA).**

> [!primary]
>
> Questa guida si riferisce ai nostri servizi Exchange, ma le istruzioni sono valide anche per gli account [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/).
>


## Prerequisiti

- Disporre di una [soluzione Exchange OVHcloud](https://www.ovhcloud.com/it/emails/hosted-exchange/) attiva
- Accedere all’account Exchange (indirizzo email e password)


## Procedura

### Step 1: definisci diritti di accesso per una cartella

Accedi al tuo account Exchange tramite la [Webmail OVHcloud](https://www.ovh.it/mail) Dal menu contestuale, clicca con il tasto destro su una delle cartelle da condividere e poi seleziona `Permessi di condivisione`{.action}.

![sharefolder](images/exchange-folder-step1.png){.thumbnail}

Nell’interfaccia successiva, clicca sul simbolo`+`{.action} per aggiungere un utente. Inizia a digitare per visualizzare i suggerimenti di contatto. Inserisci un indirizzo email completo oppure utilizza la `Directory di ricerca`{.action}.

È possibile scegliere una delle autorizzazioni predefinite (“Livello di autorizzazione”). Per prima cosa, è più facile selezionare una di queste autorizzazioni (ad esempio: “Autore”), per visualizzare le autorizzazioni consentite. Dopodiché, è possibile personalizzarle in base alle tue esigenze.

![sharefolder](images/exchange-folder-step2aag.gif){.thumbnail}

#### Dettagli autorizzazioni

- **Lettura**

|Autorizzazione|Descrizione|
|---|---|
|Nessuno|L’utente non può visualizzare il contenuto della cartella|
|Dettagli completi|L’utente può visualizzare il contenuto della cartella.|


- **Eliminazione elementi**

|Autorizzazione|Descrizione|
|---|---|
|Nessuno|L’utente non può eliminare alcun elemento.|
|I propri|L’utente può eliminare gli elementi che ha creato. |
|Tutti|L’utente può eliminare qualsiasi elemento all’interno della cartella.|


- **Scrittura**

|Autorizzazione|Descrizione|
|---|---|
|Crea elementi|L’utente può creare nuovi elementi all’interno della cartella.|
|Crea sottocartelle|L’utente può creare nuove sottocartelle all’interno della cartella condivisa.|
|Modifica propri|L’utente può modificare gli elementi che ha creato.|
|Modifica tutti|L’utente può modificare qualsiasi elemento all’interno della cartella.|


- **Altro**

|Autorizzazione|Descrizione|
|---|---|
|Proprietario cartella|L’utente ha le stesse autorizzazioni del proprietario (tutte le autorizzazioni).|
|Contatto cartella|L’utente riceverà notifiche e richieste relative alla cartella (modifiche dello stato, richieste di autorizzazione, messaggi di errore).|
|Cartella visibile|La cartella sarà visibile nell’account dell’utente.|

> [!primary]
>**Sottocartelle**
> 
> - Le sottocartelle create in una cartella condivisa erediteranno automaticamente le autorizzazioni della cartella madre. Se vuoi concedere nuove autorizzazioni per una cartella e le relative sottocartelle devono essere condivise, è necessario impostare autorizzazioni **per ogni sottocartella**.
> 
> - Se condividi una **sottocartella** di una cartella esistente che dispone di autorizzazioni configurate, assicurati di selezionare almeno l’opzione “Cartella visibile” nella **cartella madre**. Altrimenti, la sottocartella non sarà visibile nell’account dell’altro utente. (L’utente non sarà in grado di visualizzare il contenuto della cartella madre, se non concedi anche l’autorizzazione di “Lettura”.)
> 
> - Gli utenti non potranno eliminare le sottocartelle che non hanno creato.
> 
> - Gli utenti che dispongono dell’autorizzazione “Proprietario cartella” per una sottocartella possono rinominarla e concederle i diritti.

>


### Step 2: recupera una cartella condivisa

![sharefolder](images/exchange-folder-step3.png){.thumbnail}

Accedi al tuo account Exchange tramite la [Webmail OVHcloud](https://www.ovh.it/mail) Clicca con il tasto destro sul nome del tuo account nella barra di navigazione a sinistra e seleziona `Aggiungi una cartella condivisa`{.action}dal menu contestuale. Nella nuova pagina, indica il nome dell’account da cui è stata condivisa la cartella. Inizia a digitare per visualizzare i suggerimenti di contatto. Inserisci un indirizzo email completo oppure utilizza la `Directory di ricerca`{.action}. Clicca su `Aggiungi`{.action} per confermare. La nuova cartella condivisa apparirà immediatamente sotto le altre cartelle.


## Per saperne di più

[ Guida all’utilizzo di Outlook Web App con un account Exchange](../exchange_2016_guida_allutilizzo_di_outlook_web_app)

[Delegare i diritti su un account Exchange](../exchange_2013_assegna_i_diritti_full_access_a_un_account)

[Condividere calendari in OWA](../exchange_2016_condividi_un_calendario_con_la_webmail_owa)

Partecipa alla nostra community di utenti all’indirizzo <https://community.ovh.com/en/>.
