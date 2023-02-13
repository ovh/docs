---
title: Configura una nuova installazione di Windows Server
slug: windows-first-config
routes:
    canonical: 'https://docs.ovh.com/it/vps/windows-first-config/'
excerpt: Come attivare la connessione a desktop remoto e la risposta ICMP
section: Per iniziare
updated: 2022-01-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 18/01/2022**

## Obiettivo

Dopo una nuova installazione di un sistema operativo Windows Server su un server dedicato, l'accesso remoto e la risposta ICMP (Internet Control Message Protocol) possono essere disattivati.

**Questa guida ti mostra come configurare Windows per riattivare l'ICMP e autorizzare le connessioni tramite il protocollo Remote Desktop Protocol.**

## Prerequisiti

- Una distribuzione Windows installata su un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: accesso al KVM

Per accedere alla console KVM del tuo server dedicato, consulta la [guida KVM](../utilizzo-ipmi-server-dedicati/#utilizza-kvm-sul-tuo-browser-web-solo-per-i-server-piu-recenti).

### Step 2: completare l'installazione di Windows

Una volta stabilita la sessione KVM, visualizzi gli schermi di configurazione iniziale. È necessario configurare qui il tuo **paese/regione**, la **lingua di Windows** e la tua **disposizione di tastiera**. Una volta completata l'operazione clicca su `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

Nel secondo schermo, inserisci una password per il tuo account Amministratore e confermala, poi clicca su `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows applicherà le tue impostazioni e mostrerà la schermata di connessione. Clicca sul pulsante `Send CtrlAltDel`{.action} nell'angolo superiore destro per connetterti.

![KVM](images/setup-05.png){.thumbnail}

Inserisci la password creata per il tuo account Amministratore e clicca sulla freccia.

![KVM](images/setup-06.png){.thumbnail}

La configurazione iniziale è stata completata. Una volta connesso, è necessario modificare i parametri del firewall Windows.

### Step 3: modifica il firewall Windows

Apri gli `strumenti di amministrazione`{.action} del pannello di configurazione `Sistema e Sicurezza`{.action} e clicca su `Firewall Windows con sicurezza avanzata`{.action}.

![Admin](images/windows4.png){.thumbnail}

Puoi attivare qui le regole "ICMP" e "Remote Desktop" (desktop remoto) rispettive. Clicca con il tasto destro sulla regola e seleziona `Autorizza la regola`{.action} nel menu contestuale.

![Attivo](images/windows5.png){.thumbnail}

A questo punto il tuo server dovrebbe rispondere alle richieste che utilizzano questi protocolli.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
