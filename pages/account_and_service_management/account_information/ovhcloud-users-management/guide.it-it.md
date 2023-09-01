---
title: 'Gestire gli utenti dei servizi OVHcloud'
excerpt: 'Come aggiungere nuovi utenti dal tuo account OVHcloud'
updated: 2023-07-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

OVHcloud ti offre la possibilità di creare utenti che possano eseguire operazioni di lettura e scrittura nel tuo Spazio Cliente. Questo significa che puoi fornire ai dipendenti della tua azienda un accesso ai tuoi servizi OVHcloud, senza dover ricorrere a pratiche rischiose come la condivisione di password o di codici di doppia autenticazione.

> [!primary]
>
> La gestione degli utenti è diversa dalla gestione dei contatti. Un utente avrà accesso a tutte le sezioni dello Spazio Cliente in base al livello di diritti che gli è stato concesso.
>
> Le gestione dei contatti consiste, invece, nel delegare la completa gestione degli aspetti amministrativi, tecnici o di fatturazione di uno o più servizi sul tuo account OVHcloud. Per maggiori informazioni sulla gestione dei contatti, consulta [questa guida](/pages/account_and_service_management/account_information/managing_contacts).
>

**Questa guida ti mostra i diversi privilegi di cui un utente può usufruire e il metodo per aggiungere e gestire gli utenti.**

## Prerequisiti

- Disporre di un account OVHcloud attivo
- Avere accesso allo Spazio Cliente OVHcloud

## Procedura

### Gestione degli utenti

#### Aggiungi un utente

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul tuo`nome`{.action} (1) e poi sulle tue iniziali (2).
A questo punto, clicca sulla scheda `Gestione utenti`{.action} (3), quindi su `Aggiungi un utente`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

Nella nuova finestra, inserisci le informazioni richieste. Clicca su `Conferma`{.action} per completare l’operazione.

![users-management](images/usersmanagement2.png){.thumbnail}

| Campo | Descrizione |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identificativo | Ad esempio, inserisci il nome dell’utente oppure il suo ruolo. |
| Email | Inserisci l’indirizzo email dell’utente |
| Password | Definisci la password dell'utente. Potrà modificarla più avanti, una volta creato il suo accesso. <br>Per impostare la password, consulta [la guida sulla gestione delle password](/pages/account_and_service_management/account_information/manage-ovh-password). |
| Gruppo | Scegli un gruppo tra quelli disponibili |
| Descrizione | È possibile aggiungere una descrizione dell’utente Esempio: il suo ruolo nell’azienda |

L’utente otterrà quindi il proprio identificativo composto dall’identificativo numerico del tuo account (indicato nel menu “Gestione degli utenti”) e dal suo nome utente, entrambi i valori sono separati da uno slash “/”.

Esempio: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

A questo punto l’utente appena creato potrà accedere allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}usando questo identificativo. 

Inoltre potrà modificare password e proteggere l’accesso al tuo account attivando la doppia autenticazione (solo ed esclusivamente per il suo accesso in qualità di utente). A questo proposito consulta [la guida relativa all’attivazione della doppia autenticazione](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa){.external}.

#### Gestisci gli utenti

Per modificare, disattivare/attivare o rimuovere un utente clicca sui tre puntini `...`{.action} situati a destra in corrispondenza del nome utente.

![users-management](images/usersmanagement4.png){.thumbnail}

La modifica dell’utente ti consentirà di aggiornare il suo indirizzo-mail, i suoi privilegi e infine il suo profilo.

![users-management](images/usersmanagement6.png){.thumbnail}

### Gestione dei gruppi

#### Aggiungi un gruppo

Nella scheda `Gestione utenti`{.action}, clicca su `Dichiarare un gruppo`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

Viene visualizzata una finestra in cui è necessario completare i campi richiesti. Clicca su `Conferma`{.action} per creare l’utente.

![users-management](images/usersmanagement8.png){.thumbnail}

I gruppi assegnano un livello di privilegio predefinito agli utenti che contengono, in base al ruolo scelto:

| Ruolo | Dettagli |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| Nessuno | Non concede l’accesso allo Spazio Cliente OVHcloud se non è stata applicata una politica IAM. |
| Sola Lettura | Consente l’accesso in lettura allo Spazio Cliente OVHcloud e a tutte le sue sezioni. |
| Amministrazione limitata | Consente l'accesso in scrittura allo Spazio Cliente OVHcloud e a tutte le sue sezioni, ad eccezione della gestione degli utenti**. |
| Amministratore | Consente l’accesso in scrittura allo Spazio Cliente OVHcloud e a tutte le sue sezioni, **inclusa** la gestione degli utenti. |

#### Gestisci i gruppi

Per aggiornare o eliminare un gruppo, clicca sul pulsante `...`{.action} a destra del nome del gruppo.

![users-management](images/usersmanagement9.png){.thumbnail}

Quando si modifica un gruppo, è possibile modificarne la descrizione e il ruolo.

![users-management](images/usersmanagement10.png){.thumbnail}

### Gestione dei diritti

Oltre al ruolo associato ai gruppi di utenti, è possibile perfezionare i privilegi di accesso tramite l’interfaccia IAM OVHcloud.

Consulta la nostra guida su [la gestione delle politiche IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.