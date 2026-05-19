---
title: "Modificare la password di un utente FTP"
excerpt: "Questa guida ti mostra come cambiare la password di un utente FTP creata sul tuo hosting Web OVHcloud"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

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
<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Modificare la password di un utente FTP

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, consulta la guida "[Impostare e gestire la password di un account OVHcloud](/pages/account_and_service_management/account_information/manage-ovh-password)".

In base al piano di [hosting Web OVHcloud](/links/web/hosting), la password del tuo utente FTP si modifica in due modi diversi.

**Clicca sulla tua offerta per visualizzare il contenuto.**

<!-- CP-STEPS-START:change-ftp-password-perso -->
/// details | Offerte Perso e Hosting gratuito 100M (un solo utente FTP)

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Una tabella mostra gli *utenti FTP* creati sul tuo hosting Web. Clicca sul *pittogramma a forma di matita* nella colonna `Password`{.action}, inserisci la nuova password **seguendo la politica delle password** e confermala cliccando sul *pulsante verde* di conferma.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-perso -->

<!-- CP-STEPS-START:change-ftp-password-pro-performance -->
/// details | Offerte Pro e Performance (più utenti FTP)

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Una tabella mostra gli *utenti FTP* creati sul tuo hosting Web. Clicca sul pulsante `...`{.action} a destra dell'utente FTP interessato e poi su `Modificare la password`{.action}. Nella nuova finestra, inserisci la nuova password **seguendo la politica delle password**, confermala inserendola una seconda volta e clicca su `Conferma`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-pro-performance -->

> [!primary]
>
> La nuova password dovrà rispettare la seguente **politica delle password**:
>
> - Minimo 9 caratteri
> - Massimo 30 caratteri
> - Almeno una lettera maiuscola
> - Almeno una lettera minuscola
> - Almeno una cifra
> - Essere composta esclusivamente da cifre e lettere

Consulta la scheda `Operazioni in corso`{.action} e aggiorna regolarmente la pagina. La modifica richiede solo pochi minuti per essere effettiva.

### Accedere al tuo spazio di storage

Per accedere al tuo spazio di storage FTP, consulta la nostra guida ["Connettersi allo spazio di storage di un hosting Web"](/pages/web_cloud/web_hosting/ftp_connection)".

## Per saperne di più <a name="go-further"></a>

[Impostare e gestire la password di un account OVHcloud](/pages/account_and_service_management/account_information/manage-ovh-password)

[Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Mettere online il tuo sito](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).