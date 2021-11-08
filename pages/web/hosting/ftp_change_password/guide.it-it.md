---
title: 'Modificare la password di un utente FTP'
slug: modificare-la-password-utente-ftp
excerpt: 'Scopri come cambiare la password di un utente FTP creata sul tuo hosting Web OVH'
section: FTP e SSH
order: 1
---

**Ultimo aggiornamento: 23/08/2018**

## Obiettivo

Le offerte di hosting Web di OVH danno accesso a uno spazio di archiviazione che consente di mettere on line i file del tuo sito Internet. È possibile accedere a questo spazio tramite un utente FTP e la password associata. 

**Questa guida ti mostra come cambiare la password di un utente FTP creata sul tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Step 1: accedi alla gestione utenti FTP

Connettiti al tuo Spazio Clienti OVH, clicca su `Hosting`{.action} nella barra del menu a sinistra, poi seleziona il nome dell’hosting interessato. Infine, seleziona la scheda `FTP - SSH`{.action}.

La tabella mostra gli utenti FTP creati sul tuo hosting, i quali ti permettono di accedere al tuo spazio di archiviazione per mettere online i file del tuo sito iIternet. Durante l’installazione del tuo hosting, la creazione di un utente avviene di default.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### Step 2: modifica la password di un utente FTP

La modifica della password di un utente FTP creata sul tuo hosting si effettua in due modi diversi a seconda del piano di hosting:

- **per le offerte che non permettono di creare molteplici utenti FTP** (offerte Start 10M, Kimsufi Web e Perso): clicca sull’icona a forma di matita nella colonna `Password`{.action} della tabella, inserisci la nuova password nella casella di testo e infine confermala;

- **per le offerte che permettono di creare molteplici utenti FTP** (offerte Pro e Performance): nella tabella, clicca sull’icona a forma di ingranaggio a destra dell’utente scelto e infine su `Cambiare la password`{.action}. Nella finestra che appare, inserisci la nuova password, confermala e infine clicca sul pulsante `Conferma`{.action}.

La nuova password sarà attiva dopo alcuni minuti. 

> [!primary]
>
> Per motivi di sicurezza, durante l’inserimento dei dati ti invitiamo a rispettare i requisiti richiesti. Inoltre ti consigliamo di: 
>
> - non utilizzare due volte la stessa password
>
> - scegliere una password che non contenga le tue informazioni personali (ad esempio evita di inserire il tuo cognome, nome o data di nascita)
>
> - cambiare regolarmente la password
>
> - non scrivere la tua password su un pezzo di carta né inviarla al tuo indirizzo email
>
> - non salvare la password sul tuo browser, anche se ti viene proposto
>

### Step 3: accedi al tuo spazio di archiviazione

Una volta modificata la password dell’utente FTP, puoi accedere al tuo spazio di archiviazione.

Per compiere questa operazione, e a seconda della tuo piano di hosting, hai a disposizione diversi modi:

- **utilizzare l’FTP Explorer**: ti consente di accedere al tuo spazio di archiviazione dal tuo browser. Per utilizzarlo, clicca sul pulsante `FTP Explorer`{.action} dalla scheda `FTP - SSH`{.action};

- **utilizzare un software compatibile con il protocollo FTP**: in questo caso è necessario installare un software compatibile sul tuo computer (come ad esempio FileZilla);

- **utilizzare un accesso SSH**: per interagire con il tuo spazio di archiviazione dovrai utilizzare alcuni comandi da un terminale. Per l’utilizzo di questo tipo di accesso sono necessarie conoscenze più avanzate.

## Per saperne di più

[Per saperne di più sulla sicurezza delle password con l’aiuto dell’ANSSI](https://www.getsafeonline.org/protecting-yourself/passwords/){.external}.

[SSH sugli hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/){.external}.

[Utilizzo del software FileZilla con il tuo hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/){.external}.


Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.