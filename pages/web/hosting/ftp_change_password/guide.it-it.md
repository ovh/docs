---
title: Modificare la password di un utente FTP
slug: modificare-password-utente-ftp
excerpt: Come impostare una nuova password per un utente FTP creato sul tuo hosting Web OVHcloud
section: FTP e SSH
order: 2
---

**Ultimo aggiornamento: 14/01/2022**

## Obiettivo

Le soluzioni di hosting Web OVHcloud consentono l'accesso a uno spazio di archiviazione online dei file utilizzabile tramite il protocollo **FTP**.<br>L'accesso a questo spazio è possibile tramite un utente FTP e la password ad esso associata.
<br>Questo accesso ti permetterà in particolare di [pubblicare online il tuo sito](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage).

**Questa guida ti mostra come modificare la password di un utente FTP creata sul tuo hosting Web OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#aller-plus-loin) su questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Procedura

### Step : accedere alla gestione utenti FTP

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), clicca sulla sezione `Web Cloud`{.action}, seleziona il tuo `hosting`{.action} e scegli il nome dell'hosting. Seleziona la scheda `FTP-SSH`{.action}.

Una tabella mostra gli utenti FTP creati sul tuo hosting. Questi utenti ti permettono di accedere al tuo spazio di archiviazione FTP per mettere online i file del tuo sito Internet. Un utente è creato automaticamente durante l’installazione del tuo hosting. 

### Step 2 : modificare la password di un utente FTP

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, segui le indicazioni di questa [guida](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

In base al piano di [hosting Web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), la modifica della password dell'utente FTP tramite la scheda `FTP-SSH`{.action} sarà effettuata su due sentieri diversi:

- **per le offerte che non permettono di creare un secondo utente FTP** (offerte Start 10M, Kimsufi Web e Personale): clicca sull'icona a forma di matita nella colonna `Password`{.action}, inserisci la nuova password e confermala cliccando sul pulsante verde.

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

Consulta la scheda Operazioni in corso` `{.action} e aggiorna regolarmente la pagina. La modifica richiede solo pochi minuti per essere effettiva.

### Step 3: accedere al tuo spazio di archiviazione

La connessione allo spazio di hosting dei tuoi file può essere effettuata in diversi modi:

- **FTP Explorer**\: questo software è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Per utilizzarlo, dalla scheda `FTP-SSH`{.action}, clicca sul pulsante `FTP Explorer`{.action};

- **un software FTP**\: dovrai installare sul tuo computer un software compatibile con il protocollo FTP (ad esempio, [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/));

- **un accesso SSH** (solo sulle offerte Pro e Performance): per utilizzare questo protocollo di connessione, consulta la guida [Utilizzare l'accesso SSH di un hosting Web](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/).

> [!primary]
>
> Per maggiori informazioni, consulta la guida ["Connettersi allo spazio di storage di un hosting Web"](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

## Spingiti oltre <a name="aller-plus-loin"></a>

[“Pillole di Sicurezza” di Clusit, l’Associazione Italiana per la Sicurezza Informatica](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/){.external}

[Utilizzo del software FileZilla con il tuo hosting](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[SSH sugli hosting Web](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/fr/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/>.
