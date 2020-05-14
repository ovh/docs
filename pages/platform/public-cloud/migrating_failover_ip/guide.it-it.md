---
title: 'Trasferisci il tuo IP Failover'
excerpt: 'Trasferisci il tuo IP Failover'
slug: trasferisci_il_tuo_ip_failover
legacy_guide_number: g1890
---

**Ultimo aggiornamento 04/12/2019**

## Obiettivo
Questa guida ti mostra come trasferire un failover IP da un’istanza all’altra. Questa operazione, che permette generalmente di ridurre o eliminare i casi di indisponibilità del servizio, potrebbe essere necessaria, ad esempio, per:

- passare alla “nuova versione” di un sito
- continuare ad effettuare le tue operazioni su un server replicato, mentre esegui un intervento di manutenzione o aggiornamento sul tuo server di produzione.


## Prerequisiti

- Almeno due istanze Public Cloud attive
- Un IP Failover


## Procedura

- Per prima cosa, vai alla sezione Network del menu a sinistra e clicca su Failover IP. Come puoi notare, l’indirizzo IP Failover è instradato all’istanza_A e noi intendiamo reindirizzarlo verso l’istanza_B.

![IP-failover](images/failover.png){.thumbnail}

Clicca sui tre puntini a destra dell’indirizzo IP Failover e poi su ‘Modifica l’istanza associata’.

![IP-failover](images/modify.png){.thumbnail}

Clicca sulla casella accanto al server di destinazione

![IP-failover](images/modify1.png){.thumbnail}

- Clicca su Associa

- Dopo alcuni secondi il tuo spazio cliente sarà aggiornato e visualizzerai un messaggio di conferma dell’avvenuta migrazione.

![IP-failover](images/modify2.png){.thumbnail}


L’indirizzo IP può essere configurato sul server di destinazione prima o dopo aver effettuato la migrazione. Se è preconfigurato, inizierà a rispondere non appena il processo di instradamento (<i>routing</i>) sarà terminato.


## Per saperne di più

[Ritorna all’indice delle guide Cloud]({legacy}1785)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.