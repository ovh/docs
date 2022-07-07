---
title: Configura una nuova installazione di Windows Server
slug: windows-first-config
excerpt: Come attivare la connessione a desktop remoto, ICMP e log di avvio
section: Per iniziare
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 06/05/2022**

## Obiettivo

Dopo una nuova installazione di un sistema operativo Windows Server su un VPS, l'accesso remoto e la risposta ICMP (Internet Control Message Protocol) possono essere disattivati.<br>
Tuttavia, è possibile utilizzare il KVM di OVHcloud per accedere al tuo VPS e configurare il firewall Windows per riattivare ICMP e autorizzare le connessioni tramite il Remote Desktop Protocol.<br>
L'attivazione dei log di avvio (*boot log*) Windows può essere utile per la diagnostica di errori sul server.

**Questa guida ti mostra come attivare ICMP, Remote Desktop Protocol e i log di avvio su un VPS Windows.**

## Prerequisiti

- Una distribuzione Windows installata su un [VPS](https://www.ovhcloud.com/it/vps/).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: accesso al KVM

Per accedere alla console KVM del tuo VPS, consulta la [guida KVM VPS](../utilizza_il_kvm_sul_tuo_vps/).

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

### Attivazione dei log di avvio (boot log) Windows (facoltativo)

Accedi al tuo server tramite una sessione "Remote Desktop" (desktop remoto) o [KVM](../utilizza_il_kvm_sul_tuo_vps/). Apri il menu Start di Windows e clicca su `Esegui`{.action}.

![Bootlog](images/windowsboot1.png){.thumbnail}

Inserisci "msconfig" e clicca su `OK`{.action}.

![Bootlog](images/windowsboot2.png){.thumbnail}

Nella nuova finestra, spunta la casella accanto a `Boot log`. Clicca su `OK`{.action}.

![Bootlog](images/windowsboot3.png){.thumbnail}

Al prossimo avvio del tuo server, i log saranno registrati in un file .txt. La via del file è `C:\Windows\ntbtlog.txt`.

Per accedere al contenuto di questo file in modalità Rescue, segui le indicazioni descritte nella [guida sulla modalità Rescue del VPS](../rescue/).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
