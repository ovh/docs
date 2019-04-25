---
title: 'Utilizzare il plugin OVH Network'
slug: plugin-ovh-network
excerpt: 'Scopri come utilizzare il plugin OVH Network con la soluzione Private Cloud'
legacy_guide_number: '7766560'
section: 'Funzionalità OVH'
---

**Ultimo aggiornamento: 13/11/2018**

## Obiettivo

OVH ha sviluppato il plugin OVH Network per consentire ai propri utenti di gestire in modo più preciso tutti gli indirizzi IP associati al loro [Private Cloud](https://www.ovh.it/private-cloud/){.external}.

**Questa guida ti mostra come utilizzare il plugin OVH Network con la soluzione Private Cloud.**

## Prerequisiti

* Disporre di un servizio [Private Cloud](https://www.ovh.it/private-cloud/){.external}
* Disporre di un blocco di indirizzi IP associato al servizio [Private Cloud](https://www.ovh.it/private-cloud/){.external}
* Essere connesso all’interfaccia di gestione vSphere

## Procedura

Clicca sul menu `Host and Cluster`{.action} e seleziona un datacenter o un cluster dell’infrastruttura. Poi clicca su `Manage`{.action} e `OVH Network`{.action}.

![Plugin OVH Network](images/network_01.png){.thumbnail}

Arriverai quindi alla sezione `Summary`{.action}, che riepiloga i blocchi di indirizzi IP e le informazioni principali di ogni blocco.

![Informations sur les IP et les blocs](images/network_02.png){.thumbnail}

Selezionando un blocco IP nel menu **IP Blocchi** è possibile visualizzare l'elenco degli indirizzi IP che costituiscono il tuo blocco. Ogni blocco contiene **5 IP dedicati** alla configurazione e all'alta disponibilità, che sono i seguenti:

- il primo IP, che annuncia il blocco sul router
- l’ultimo IP, che è quello di **broadcast**
- il penultimo, utilizzato come **gateway**
- i due IP prima del gateway, che si utilizzano sui router come **HSRP** (Hot Standby Router Protocol).

![Blocs d'IP](images/network_03.png){.thumbnail}

Al fine indicare al plugin OVH che i tuoi IP pubblici sono già in uso, è necessario inoltrare una richiesta ARP (_arping_) dalla o dalle macchine virtuali che utilizzano questi indirizzi. Alcune configurazioni con un firewall virtuale non permettono di tracciare gli indirizzi MAC se il protocollo ARP non è autorizzato.

Puoi successivamente configurare i tuoi Reverse IP, per un server di posta elettronica, ad esempio. Puoi eseguire questa configurazione anche dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e dalle [API OVH](https://api.ovh.com/){.external}. Clicca sui tre puntini verticali a sinistra dell’IP e poi su `Edit Reverse`{.action}.

![Bouton Edition Reverse](images/network_04.png){.thumbnail}

Seleziona Reverse e poi clicca su `Confirm`{.action}.

![Édition du reverse](images/network_05.png){.thumbnail}

Questo pulsante si trova a destra dell’IP, nella lista degli indirizzi IP del blocco.

![Édition des IP](images/network_06.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.