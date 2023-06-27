---
title: 'Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019'
excerpt: "Attivare l'opzione OVHcloud Link Aggregation sul tuo server Windows Server 2019"
updated: 2021-03-25
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 25/03/2021**

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L’attivazione dell’opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile.

**Questa guida ti mostra come associare i Network Interface Controller (NIC) per utilizzarli con il servizio OLA su un sistema Windows Server 2019.**

## Prerequisiti

- [Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](/pages/cloud/dedicated/ola-enable-manager)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Il tipo di configurazione disponibile in OLA per i nostri NIC non permette di accedere al server in SSH. Per stabilire la connessione alla macchina è quindi necessario utilizzare IPMI.
<br>Per attivare il tool accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella sezione `Bare Metal Cloud`{.action}, seleziona il tuo server tra `Server dedicati`{.action} e clicca sulla scheda `IPMI`{.action} (1).

Clicca sul pulsante `Da una applet Java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Verrà scaricato un programma JNLP: aprilo e utilizza le credenziali associate al server per accedere.

Una volta effettuato il login alla macchina, apri Server Manager (se non si apre di default, è disponibile nel menu **Start**).

![server manager](images/local_server.png){.thumbnail}

A questo punto clicca sulla scheda `Local Server`{.action} a sinistra e clicca sul pulsante `Disabled`{.action} vicino a **NIC Teaming**.

![local server](images/server_manager.png){.thumbnail}

Si apre una nuova finestra: nella sezione **TEAMS**, clicca su `TASKS`{.action} e seleziona **New Team** dal menu a tendina.

![nic teaming](images/nic_teaming.png){.thumbnail}

Assegna un nome al team e spunta i NIC da utilizzare con OLA. Clicca sulla freccia verso il basso in corrispondenza di **Additional properties** e modifica il `Teaming mode` in LACP. Una volta verificata la correttezza delle informazioni inserite, clicca su `OK`{.action}.

![new team](images/new_team.png){.thumbnail}

Potrebbero essere necessari un paio di minuti prima che il team NIC risulti online. Una volta terminato, clicca sull’icona della connessione di rete in basso a destra e poi sul pulsante `Network & Internet settings`{.action}. Seleziona **Ethernet** nella barra laterale sinistra.

![network button](images/network_button.png){.thumbnail}

Clicca su `Change adapter options`{.action}.

![ethernet](images/ethernet.png){.thumbnail}

A questo punto clicca con il tasto destro sul team NIC e seleziona **Properties** nel menu a tendina.

![properties](images/properties.png){.thumbnail}

Nella nuova finestra, clicca due volte su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![ipv4](images/ipv4.png){.thumbnail}

Seleziona `Use the following IP address`{.action} e aggiungi l’IP privato e la sottorete scelta. Una volta verificata la correttezza delle impostazioni, clicca su `OK`{.action}.

![ipv42](images/ipv42.png){.thumbnail}

Per testare il corretto funzionamento del nuovo NIC team creato, effettua il ping di un altro server presente nella stessa vRack. Se funziona, la procedura è conclusa. In caso contrario, verifica nuovamente la configurazione o prova a riavviare il server.

## Per saperne di più

[Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](/pages/cloud/dedicated/ola-enable-manager).

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Debian 9](/pages/cloud/dedicated/ola-enable-debian9).

[Configurare un NIC per il servizio OVHcloud Link Aggregation in CentOS 7](/pages/cloud/dedicated/ola-enable-centos7).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
