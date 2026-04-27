---
title: "OVHcloud Link Aggregation tramite lo Spazio Cliente (Dedicato)"
excerpt: "Attiva OVHcloud Link Aggregation (OLA) sul tuo server dedicato direttamente dallo Spazio Cliente OVHcloud"
updated: 2026-04-20
---

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L’attivazione dell’opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile.<br>
L'aggregazione si basa sulla tecnologia IEEE 802.3ad o Link Aggregation Control Protocol (LACP).

**Questa guida ti mostra come configurare il servizio OLA nello Spazio Cliente di OVHcloud.**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](/links/bare-metal/bare-metal) di gamma Advance, Scale o High Grade
- Disporre di un sistema operativo / Hypervisor che supporta il protocollo di aggregazione 802.3ad (LACP)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server dedicati`{.action} > Seleziona il tuo server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

> [!warning]
>
> La configurazione OLA viene eseguita su tutte le interfacce di rete. Esse formeranno un aggregato del tipo "aggregazione privata".
>
> Con l'implementazione di OLA, l'IP pubblico non sarà più accessibile.
>

### Configurare OLA nel tuo Spazio Cliente OVHcloud

Per iniziare la configurazione di OLA, apri la scheda `Interfacce di rete`{.action} nella pagina di gestione del tuo server.

Clicca sul pulsante `Aggregazione delle reti`{.action} nella sezione **Controller delle interfacce di rete (NIC)**.

Verranno visualizzate due tabelle:
- A sinistra, la configurazione attuale delle tue interfacce di rete;
- A destra, la configurazione simulata delle tue interfacce di rete aggregate.

Nel campo sotto le tabelle, inserisci un nome per la tua aggregazione di collegamenti.

Dopo aver verificato che la configurazione dell'aggregazione soddisfi i requisiti di rete, clicca su `Attivare aggregazione`{.action} per procedere.

Questa operazione potrebbe richiedere qualche minuto. Lo step successivo consisterà nella configurazione delle interfacce del sistema operativo come NIC bond o NIC team. Per conoscere la procedura da seguire, consulta la nostra documentazione disponibile relativa ai sistemi operativi più diffusi:

- [Configurare un NIC per il servizio OVHcloud Link Aggregation in Debian 9 tramite ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Configurare un NIC per il servizio OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Verifica dello stato OLA

Puoi verificare lo stato della tua aggregazione di collegamenti (OLA) nella scheda `Interfacce di rete`{.action}. In fondo alla sezione **Banda passante**, individua la riga **OVHcloud Link Aggregation**.

Esistono quattro possibili etichette di stato:
- **Non disponibile**: OLA non è supportato su questo modello di server dedicato.
- **Disponibile**: OLA è supportato ma non è configurato.
- **Attivo - Completamente privato**: OLA è attivato; tutte le interfacce fisiche sono aggregate in un unico collegamento privato per l'utilizzo con vRack.
- **Attivo - LAG doppio**: OLA è pre-attivato; le interfacce fisiche sono divise in due aggregati separati (uno pubblico, uno privato).

> [!primary]
> **Nota:** Lo stato **Attivo - LAG doppio** è una configurazione specifica generalmente riservata alle gamme di server Scale e High-Grade, che dispongono di quattro interfacce di rete fisiche.
>

### Ripristina OLA ai valori predefiniti

Per ripristinare OLA ai valori predefiniti, clicca sul pulsante `Disaggrega le reti`{.action} nella sezione **Controller delle interfacce di rete (NIC)**. Clicca su `Conferma`{.action} nel menu contestuale.

L'operazione potrebbe richiedere alcuni minuti.

## Per saperne di più

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Debian 9 tramite ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Configurare un NIC per il servizio OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

Contatta la nostra [Community di utenti](/links/community).
