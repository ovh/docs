---
title: Configurare il Firewall Network
slug: firewall-network
section: Rete e IP
---

**Ultimo aggiornamento: 21/02/2018**

## Obiettivo

Per proteggere la propria infrastruttura e i server dei propri clienti, OVH propone il Firewall Network, un’opzione configurabile e integrata al sistema **anti-DDoS** (VAC) che permette di limitare l’esposizione di un servizio agli attacchi provenienti dalla rete pubblica.

**Questa guida ti mostra la procedura da seguire per configurare il servizio**.


> [!primary]
>
> Per maggiori informazioni sul VAC, la nostra tecnologia di protezione dagli attacchi DDoS, consulta questa pagina: <https://www.ovh.it/anti-ddos/>.
> 

![Il VAC in dettaglio](images/vac-inside.png){.thumbnail}


## Prerequisiti

- Disporre di un servizio OVH compatibile con il Firewall Network ([server dedicati](https://www.ovh.it/server_dedicati/){.external}, [VPS](https://www.ovh.it/vps/){.external}, [istanze Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external}, [Private Cloud](https://www.ovh.it/private-cloud/){.external}, [IP Failover](https://www.ovh.it/server_dedicati/ip_failover.xml){.external}...)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Possedere conoscenze di base delle reti


## Procedura

### Attiva il Firewall Network

> [!primary]
>
> Il Firewall Network protegge gli IP associati a una macchina. Non è quindi possibile effettuare una configurazione globale del server, ma sarà necessario eseguirne una per ciascun IP separatamente.
> 

Le operazioni di attivazione e configurazione possono essere effettuate manualmente dallo Spazio Cliente OVH, nella sezione `Dedicato`{.action} > `IP`{.action}. Clicca sull’icona a forma di ingranaggio a destra dell’IPv4 in questione e seleziona `Crea Firewall`{.action}:

![Attivazione del Firewall Network](images/firewall_creation.png){.thumbnail}

- Si apre una nuova finestra per confermare l’operazione:

![Conferma](images/creationvalid.png){.thumbnail}

- A questo punto è possibile attivare e configurare il firewall cliccando di nuovo sull’icona a forma di ingranaggio e poi su `Attiva il Firewall`{.action} e `Configura il Firewall`{.action}:

![Attivazione della configurazione](images/activationconfig.png){.thumbnail}

È possibile definire fino a **20 regole per IP**.


> [!warning]
>
> Il firewall si attiva automaticamente ogni volta che viene rilevato un DDoS e non è possibile disattivarlo fino a quando l’attacco non è terminato: è quindi importante che queste regole siano sempre aggiornate. Di default non sono presenti regole e tutte le connessioni sono autorizzate. Nel caso in cui siano già state configurate, ti consigliamo di controllarle regolarmente anche se le hai disattivate.
> 


> [!primary]
>
> - Di default, la frammentazione UDP è bloccata. Se utilizzi una VPN, ricorda di configurare correttamente il valore della tua Maximum Transmission Unit (MTU) in fase di attivazione del Firewall Network. Su OpenVPN, ad esempio, puoi selezionare `MTU test`{.action}.
> - Le regole del Firewall Network non vengono applicate all’interno della rete OVH e non hanno quindi alcun impatto sulle connessioni di questa rete.
>


### Configura il Firewall Network

Per aggiungere una regola, clicca sul pulsante `Aggiungi una regola`{.action}:


![Aggiungere una regola](images/ajoutregle1.png){.thumbnail}

Per ogni regola è necessario scegliere:

- una priorità (da 0 a 19, dove 0 è la prima regola applicata)
- un’azione (`Autorizza`{.action} o `Rifiuta`{.action})
- il protocollo
- un IP sorgente (facoltativo)
- la porta sorgente (solo TCP)
- la porta di destinazione (solo TCP)
- le opzioni TCP


![Dettagli dell’aggiunta di una regola](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorità 0: è consigliato abilitare il protocollo TCP su tutti gli IP con l’opzione `established`{.action}, che permette di verificare l’appartenenza del pacchetto a una sessione aperta precedentemente. Se non viene autorizzato, il server non riceverà i risultati del protocollo TCP per le richieste SYN/ACK.
> - Priorità 19: i pacchetti del protocollo IPv4 che non rispettano nessuna regola prima della 19 (l’ultima disponibile) vengono rifiutati.
> 


### Esempio di configurazione

Per lasciare aperte solo le porte SSH (22), HTTP (80), HTTPS (443), UDP (sulla porta 10000) autorizzando l’ICMP, è necessario seguire queste regole:

![Esempio di configurazione](images/exemple.png){.thumbnail}

Le regole sono ordinate cronologicamente da 0 (prima regola letta) a 19 (ultima regola letta). La catena si interrompe a partire dal momento in cui una regola è applicabile al pacchetto ricevuto.

Un pacchetto destinato alla porta 80/TCP, ad esempio, verrà catturato dalla regola 2 e quelle successive non saranno verificate. Un pacchetto destinato alla porta 25/TCP, invece, verrà catturato solo dall’ultima regola (19) e sarà rifiutato in quanto le comunicazioni sulla porta 25 non sono autorizzate dalle regole precedenti.

> [!warning]
>
> Se è in corso una mitigazione anti-DDoS, le regole vengono applicate anche se il Firewall Network è stato disabilitato. In caso di disattivazione, quindi, ricordati di eliminare le regole configurate.
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
