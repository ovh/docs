---
title: Modificare la password di un utente FTP
slug: modificare-la-password-utente-ftp
excerpt: Scopri come cambiare la password di un utente FTP creata sul tuo hosting Web OVH
section: FTP e SSH
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 18/08/2022**

## Obiettivo

Le soluzioni di hosting Web OVHcloud consentono l'accesso a uno spazio di archiviazione online dei file utilizzabile tramite il protocollo **FTP**.<br>L'accesso a questo spazio è possibile tramite un utente FTP e la password ad esso associata.
<br>Questo accesso ti permetterà in particolare di [pubblicare online il tuo sito](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#3-caricare-i-file).

**Questa guida ti mostra come modificare la password di un utente FTP creata sul tuo hosting Web OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1 : accedere alla gestione utenti FTP

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla sezione `Web Cloud`{.action}, seleziona il tuo `Hosting`{.action} e scegli il nome dell'hosting. Seleziona la scheda `FTP-SSH`{.action}.

Una tabella mostra gli utenti FTP creati sul tuo hosting. Questi utenti ti permettono di accedere al tuo spazio di archiviazione FTP per mettere online i file del tuo sito Internet. Un utente è creato automaticamente durante l’installazione del tuo hosting. 

### Step 2 : modificare la password di un utente FTP

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, segui le indicazioni di questa [guida](https://docs.ovh.com/it/customer/gestire-la-password/).
>

In base al piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/), la modifica della password dell'utente FTP tramite la scheda `FTP-SSH`{.action} sarà effettuata su due sentieri diversi:

- **per le offerte che non permettono di creare un secondo utente FTP** (offerte Start 10M e Personale): clicca sull'icona a forma di matita nella colonna `Password`{.action}, inserisci la nuova password e confermala cliccando sul pulsante verde.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **per le offerte che permettono di creare diversi utenti FTP** (offerte Pro e Performance): clicca sui tre puntini in corrispondenza dell'utente FTP interessato e poi su `Modifica la password`{.action}. Nella nuova finestra, inserisci la nuova password, confermala digitandone una seconda e clicca su `Conferma`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Scegli la nuova password del tuo database e annotiamolo. In entrambi i casi esso dovrà soddisfare le seguenti condizioni:

- Minimo 8 caratteri
- Massimo 30 caratteri
- Almeno una lettera maiuscola;
- Almeno una lettera minuscola
- Almeno una cifra
- Essere composto esclusivamente da cifre e lettere.

Consulta la scheda `Operazioni in corso`{.action} e aggiorna regolarmente la pagina. La modifica richiede solo pochi minuti per essere effettiva.

### Step 3: accedere al tuo spazio di archiviazione

La connessione allo spazio di hosting dei tuoi file può essere effettuata in diversi modi:

- **FTP Explorer**: questo software è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Per utilizzarlo, dalla scheda `FTP-SSH`{.action}, clicca sul pulsante `FTP Explorer`{.action};

> [!warning]
>
> FTP Explorer non è disponibile per l'offerta Cloud Web. Deve essere utilizzato uno dei due metodi seguenti.

- **Software FTP**: dovrai installare sul tuo computer un software compatibile con il protocollo FTP (ad esempio, [FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/));

- **Accesso SSH** (solo sulle offerte Pro e Performance): per utilizzare questo protocollo di connessione, consulta la guida "[Utilizzare l'accesso SSH di un hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/)".

> [!primary]
>
> Per maggiori informazioni, consulta la guida "[Connettersi allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/)".
>

## Per saperne di più <a name="gofurther"></a>

[Impostare e gestire la password di un account OVHcloud](https://docs.ovh.com/it/customer/gestire-la-password/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
