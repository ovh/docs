---
title: 'Trasferisci il tuo IP Failover'
excerpt: 'Trasferisci il tuo IP Failover'
slug: trasferisci_il_tuo_ip_failover
legacy_guide_number: g1890
section: Rete
---

**Ultimo aggiornamento 04/12/2019**

## Obiettivo
Questa guida ti mostra come trasferire un failover IP da un’istanza all’altra. Questa operazione, che permette generalmente di ridurre o eliminare i casi di indisponibilità del servizio, potrebbe essere necessaria, ad esempio, per:

- passare alla “nuova versione” di un sito
- continuare ad effettuare le tue operazioni su un server replicato, mentre esegui un intervento di manutenzione o aggiornamento sul tuo server di produzione.


## Prerequisiti

- Almeno due istanze Public Cloud attive
- Un indirizzo IP Failover
- Aver accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)


## Procedura

### Migrazione dell'IP Failover

Per prima cosa, Accedi alla sezione `Public Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona il tuo servizio. Seleziona Failover IP nella sezione **Network**.
Nel nostro esempio, un IP Failover è indirizzato verso "Instance_A" e vogliamo reindirizzarlo verso "Instance_B".

![IP-failover](images/failover2022.png){.thumbnail}

Clicca sui tre puntini a destra dell’indirizzo IP Failover e poi su ‘Modifica l’istanza associata’.

![IP-failover](images/modify3.2022.png){.thumbnail}

Clicca sulla casella accanto al server di destinazione

![IP-failover](images/modify1.png){.thumbnail}

- Clicca su Associa

- Dopo alcuni secondi il tuo spazio cliente sarà aggiornato e visualizzerai un messaggio di conferma dell’avvenuta migrazione.

![IP-failover](images/modify2.2022.png){.thumbnail}

> [!success]
>
> L’indirizzo IP può essere configurato sul server di destinazione prima o dopo aver effettuato la migrazione. Se è preconfigurato, inizierà a rispondere non appena il processo di instradamento (<i>routing</i>) sarà terminato.
>

## Per saperne di più

[Configura un IP failover](https://docs.ovh.com/it/public-cloud/configura-un-ip-failover/)

[Importa un IP Failover](https://docs.ovh.com/it/public-cloud/importa_un_ip_failover/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.