---
title: "Modificare la password di un utente FTP"
excerpt: "Questa guida ti mostra come cambiare la password di un utente FTP creata sul tuo hosting Web OVHcloud"
updated: 2025-10-14
---

## Obiettivo

Le offerte di hosting Web OVHcloud danno accesso a uno spazio di archiviazione online dei file utilizzabile tramite il protocollo **FTP**: spazio di storage FTP.

L'accesso a questo spazio è possibile tramite **utente FTP** e la password associata.

Questo accesso permette in particolare di [pubblicare il vostro sito](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Questa guida ti mostra come modificare la password di un utente FTP creata sul tuo hosting Web OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### 1 - Accedere alla gestione utenti FTP

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP -SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Una tabella mostra gli *utenti FTP* creati sul tuo hosting Web. Questi utenti ti permettono di accedere al tuo spazio di archiviazione FTP per mettere online i file del tuo sito web. Un utente viene creato automaticamente durante l'installazione del tuo hosting Web.

### 2 - Modificare la password di un utente FTP

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, segui le indicazioni di questa [guida](/pages/account_and_service_management/account_information/manage-ovh-password).
>

In base al piano di [hosting Web OVHcloud](/links/web/hosting), la modifica della password dell'utente FTP tramite la scheda `FTP - SSH`{.action} sarà effettuata su due sentieri diversi:

- **per le offerte che non permettono di creare un secondo utente FTP** (offerte *Personale* e *Hosting gratuito 100M*): clicca sul *pittogramma a forma di matita* nella colonna `Password`{.action} della tabella che appare, inserisci la nuova password **seguendo la politica delle password** e confermala cliccando sul *pulsante verde* di conferma.

![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

- **per le offerte che permettono di creare diversi utenti FTP** (offerte *Pro* e *Performance*): clicca sul pulsante `...`{.action} a destra dell'utente FTP interessato e poi su `Modifica la password`{.action}. Nella nuova finestra, inserisci la nuova password**seguendo la politica delle password**, confermala inserendola una seconda volta e clicca su `Conferma`{.action}.

![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

> [!primary]
>
> La nuova password dovrà rispettare la **politica delle password** che segue :
>
>- Minimo 9 caratteri
>- Massimo 30 caratteri
>- Almeno una lettera maiuscola;
>- Almeno una lettera minuscola
>- Almeno una cifra
>- Essere composto esclusivamente da cifre e lettere.

Consulta la scheda `Operazioni in corso`{.action} e aggiorna regolarmente la pagina. La modifica richiede solo pochi minuti per essere effettiva.

### 3 - Accedere al tuo spazio di archiviazione

Per accedere al tuo spazio di storage FTP, consulta la nostra guida ["Connettersi allo spazio di storage di un hosting Web"](/pages/web_cloud/web_hosting/ftp_connection)".

## Per saperne di più <a name="go-further"></a>

[Impostare e gestire la password di un account OVHcloud](/pages/account_and_service_management/account_information/manage-ovh-password)

[Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Mettere online il tuo sito](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).