---
title: 'Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019'
slug: ola-w2k19
excerpt: 'Attivare l''opzione OVHcloud Link Aggregation sul tuo server Windows Server 2019'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 11/11/2019**

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L’attivazione dell’opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile.

**Questa guida ti mostra come associare i Network Interface Controller (NIC) per utilizzarli con il servizio OLA su un sistema Windows Server 2019.**

## Prerequisiti

[Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](https://docs.ovh.com/it/dedicated/ola-manager){.external}

## Procedura

Il tipo di configurazione disponibile in OLA per i nostri NIC non permette di accedere al server in RDP. Per stabilire la connessione alla macchina è quindi necessario utilizzare IPMI. Per attivare il tool effettua il login allo [Spazio Cliente](https://www.ovh.com/manager/){.external}, seleziona il server nel menu a sinistra e clicca sulla scheda `IPMI`{.action}.

![remote kvm](images/remote_kvm.png){.thumbnail}

Clicca sul pulsante `Da una applet Java (KVM)`{.action}. Verrà scaricato un programma JNLP: aprilo e utilizza le credenziali associate al server per accedere.

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

## Conclusioni

OVHcloud offre ai clienti la libertà e la flessibilità di sfruttare il potenziale dell'hardware in modo che si adatti alle proprie esigenze. A questo punto dovresti essere in grado di configurare OVHcloud Link Aggregation (OLA) sul tuo sistema Windows Server 2019 e utilizzare le Network Interface Controller come interfacce private aggregate.