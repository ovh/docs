---
title: "Modificare la password di un utente FTP"
slug: modificare-la-password-utente-ftp
excerpt: "Questa guida ti mostra come cambiare la password di un utente FTP creata sul tuo hosting Web OVHcloud"
section: FTP e SSH
order: 03
updated: 2023-05-29
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 29/05/2023**

## Obiettivo

Le offerte di hosting Web OVHcloud danno accesso a uno spazio di archiviazione online dei file utilizzabile tramite il protocollo **FTP**: spazio di storage FTP.

L'accesso a questo spazio è possibile tramite **utente FTP** e la password associata.

Questo accesso permette in particolare di [pubblicare il vostro sito](/pages/web/hosting/hosting_how_to_get_my_website_online/).

**Questa guida ti mostra come modificare la password di un utente FTP creata sul tuo hosting Web OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/fr-ca/directory/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1 : accedere alla gestione utenti FTP

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla sezione `Web Cloud`{.action}, seleziona il tuo `Hosting`{.action} e scegli il nome dell'hosting. Seleziona la scheda `FTP-SSH`{.action}.

Una tabella mostra gli *utenti FTP* creati sul tuo hosting Web. Questi utenti ti permettono di accedere al tuo spazio di archiviazione FTP per mettere online i file del tuo sito web. Un utente viene creato automaticamente durante l'installazione del tuo hosting Web.

### Step 2 : modificare la password di un utente FTP

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, segui le indicazioni di questa [guida](/pages/account/customer/manage-ovh-password/).
>

La nuova password dovrà rispettare la **politica delle password** che segue :

- Minimo 8 caratteri
- Massimo 30 caratteri
- Almeno una lettera maiuscola;
- Almeno una lettera minuscola
- Almeno una cifra
- Essere composto esclusivamente da cifre e lettere.

In base al piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/), la modifica della password dell'utente FTP tramite la scheda `FTP-SSH`{.action} sarà effettuata su due sentieri diversi:

- **per le offerte che non permettono di creare un secondo utente FTP** (offerte *Start 10M* e *Personale*): clicca sul *pittogramma a forma di matita* nella colonna `Password`{.action} della tabella che appare, inserisci la nuova password **seguendo la politica delle password** e confermala cliccando sul *pulsante verde* di conferma.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **per le offerte che permettono di creare diversi utenti FTP** (offerte *Pro* e *Performance*): clicca sul pulsante `...`{.action} a destra dell'utente FTP interessato e poi su `Modifica la password`{.action}. Nella nuova finestra, inserisci la nuova password**seguendo la politica delle password**, confermala inserendola una seconda volta e clicca su `Conferma`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Consulta la scheda `Operazioni in corso`{.action} e aggiorna regolarmente la pagina. La modifica richiede solo pochi minuti per essere effettiva.

### Step 3: accedere al tuo spazio di archiviazione

Per accedere al tuo spazio di storage FTP, consulta la nostra guida ["Connettersi allo spazio di storage di un hosting Web"](/pages/web/hosting/ftp_connection/)".

## Per saperne di più <a name="go-further"></a>

[Impostare e gestire la password di un account OVHcloud](/pages/account/customer/manage-ovh-password/)

[Accedere allo spazio di storage di un hosting Web](/pages/web/hosting/ftp_connection/)

[Mettere online il tuo sito](/pages/web/hosting/hosting_how_to_get_my_website_online/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.