---
title: Configura il firewall su Linux con iptables
excerpt: Scopri come proteggere un server con iptables
slug: firewall-iptables
section: Sicurezza
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 18/10/2022**

## Obiettivo

Il tuo server dedicato è dotato di un firewall. I firewall creano una barriera tra una rete di fiducia e una rete non affidabile.
I firewall funzionano definendo regole che disciplinano il traffico autorizzato e quello bloccato. Il firewall utilitario sviluppato per i sistemi Linux è iptables.

**Questa guida ti mostra come proteggere un server dedicato grazie agli iptables.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile. ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla sicurezza di un server, ti consigliamo di rivolgerti a un esperto del settore. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) nel proprio account OVHcloud
- Avere accesso amministratore (root/sudo) al server via SSH

## Procedura

> [!primary]
>
> Questa guida ti mostra i comandi per una distribuzione Ubuntu Server.
>
> Questa è una guida per uso generale. Alcuni comandi dovranno essere adattati in base alla distribuzione o al sistema operativo che utilizzi. In qualche caso ti suggeriremo l’utilizzo di strumenti esterni. Se hai dubbi riguardo al loro utilizzo, consulta le relative guide ufficiali.  
>

### Step 1: aggiorna il tuo sistema

Gli sviluppatori dei sistemi operativi e delle distribuzioni propongono aggiornamenti frequenti dei pacchetti, molto spesso per motivi di sicurezza. **Mantenere aggiornati la distribuzione ed il sistema operativo è un aspetto fondamentale per la sicurezza del server.**

Per maggiori informazioni, consulta la nostra guida sulla [sicurezza di un server dedicato](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/).

### Step 2: installare il firewall iptables su Ubuntu

> [!primary]
>
> Esistono due versioni differenti di iptables, per IPv4 e IPv6. Le regole di questa guida Linux iptables sono IPv4.
> Per configurare iptables per IPv6, utilizza il programma iptables6. Questi due diversi protocolli non funzionano insieme e devono essere configurati in modo indipendente.
>

iptables è installato di default sulla maggior parte dei sistemi Linux. Per confermare l'installazione di iptables, utilizza il comando:

```bash
sudo apt-get install iptables
```

L'esempio di uscita in Ubuntu conferma che l'ultima versione di iptables è già presente:

![version-iptable](images/step2-version-iptables.PNG){.thumbnail}

In genere, esegui il comando iptables come segue:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Ecco una lista di alcune opzioni iptables comuni:

- -A —append: Aggiungi una regola a una catena (alla fine).
- -C —check : Ricerca una regola che corrisponde alle esigenze della catena.
- -D —delete: Elimina le regole specificate di una catena.
- -F -flush: Elimina tutte le regole.
- -I —insert: Aggiungi una regola a una catena in una determinata posizione.
- -L —list: Mostra tutte le regole di un canale.
- -N -new-chain : Crea un nuovo canale.
- -v —verbose: Indica maggiori informazioni durante l'utilizzo di un'opzione di lista.
- -X —delete-chain: Elimina la catena fornita.

### Step 3: verificare lo stato attuale degli iptables

Per visualizzare tutte le regole attuali sul tuo server, inserisci questo comando nella finestra del terminale:

```bash
sudo iptables -L
```

Il sistema mostra lo stato delle tue catene.<br>
L'uscita elenca tre canali:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Step 4: autorizza il traffico su localhost

Per autorizzare il traffico del tuo sistema (il localhost), aggiungi la catena di entrata inserendo quanto segue:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Questo comando configura il firewall per accettare il traffico per l'interfaccia localhost (lo) (-i). Tutto quello che viene dal vostro sistema passerà attraverso il vostro firewall.
Devi definire questa regola per permettere alle applicazioni di comunicare con l'interfaccia localhost.

### Step 5: autorizzare il traffico su porti specifici <a name="step5"></a>

Queste regole autorizzano il traffico sui diversi porti che si specifica utilizzando i comandi elencati qui di seguito.
Una porta è un punto terminale di comunicazione specificato per un tipo specifico di dati.

Per autorizzare il traffico Web HTTP, inserisci questo comando:

```bash
sudo iptables -A INPUT -p tcp —dport 80 -j ACCEPT
```

Per autorizzare solo il traffico SSH (Secure Shell) in entrata, inserisci (notare che si utilizza la porta 22, che è il numero di porta SSH predefinito). Se il vostro numero di porta è diverso, assicuratevi di adattare di conseguenza i comandi seguenti):

```bash
sudo iptables -A INPUT -p tcp —dport 22 -j ACCEPT
```

Per autorizzare il traffico Internet HTTPS, inserisci questo comando:

```bash
sudo iptables -A INPUT -p tcp —dport 443 -j ACCEPT
```

Le opzioni funzionano in questo modo:

- -p: Verifica il protocollo specificato (tcp).
- —dport: Specifica il porto di destinazione.
- -j jump : Effettua l'azione 

> [!warning]
> In caso di perdita dell'accesso al tuo server, puoi sempre utilizzare il tool KVM/IPMI per accedervi nuovamente e modificare la tua configurazione o eliminare le tue regole.
>
> Per maggiori informazioni sull'accesso a questo tool, consulta [questa guida](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/).  
> 

### Step 6: controlla il traffico per indirizzo IP

Per accettare il traffico da un indirizzo IP specifico, utilizza questo comando:

```bash
sudo iptables -A INPUT -s il tuo_indirizzo_IP_da_autorizzare -j ACCEPT
```

Sostituisci l'indirizzo IP nel comando con l'indirizzo IP che vuoi autorizzare.

Puoi anche bloccare il traffico a partire da un indirizzo IP 

```bash
sudo iptables -A INPUT -s il vostro_indirizzo_IP_a_bloccare -j DROP
```

Sostituisci l'indirizzo IP nel comando con l'indirizzo IP che vuoi bloccare.

Puoi rifiutare il traffico a partire da una gamma di indirizzi IP, con il seguente comando:

```bash
sudo iptables -A INPUT -m iprange —src-ordina il tuo_indirizzo_IP_di_inizio_il_tuo_indirizzo_IP_fine -j REJECT
```

Le opzioni iptables che abbiamo utilizzato negli esempi funzionano in questo modo:

- -m: Corrisponde all'opzione specificata.
- -iprange: Indica al sistema di attendere una gamma di indirizzi IP invece di una sola.
- —src-range: Identifica la gamma di indirizzi IP.

### Step 7: eliminare il traffico indesiderato

Se definisci regole di firewall iptables, è necessario impedire gli accessi non autorizzati eliminando ogni traffico proveniente da altre porte:

```bash
sudo iptables -A INPUT -j DROP
```

L'opzione -A aggiunge una nuova regola al canale. Se una connessione passa attraverso porti diversi da quelli da voi definiti, sarà abbandonata.

> [!warning]
> 
>Attenzione: se digiti questo ordine prima di effettuare [lo Step 5](#step5), bloccherai tutti gli accessi, incluso quello in corso, l'accesso SSH. Questo è particolarmente problematico per una macchina su cui puoi accedere a distanza. 
>

### Step 8: elimina una regola

Un metodo più preciso consiste nell'eliminare il numero di linea da una regola.

```bash
sudo iptables -P INPUT DROP 
```

Per prima cosa, individua tutte le regole inserendo:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Cerca la riga della regola del firewall che vuoi eliminare ed esegui questo comando:

```bash
sudo iptables -D INPUT <Number>
```

Sostituisci `Number` con il numero di riga che vuoi eliminare.

### Step 9: salva le tue modifiche

Durante il riavvio del sistema, iptables non mantiene le regole che hai creato.
Ogni volta che configuri iptables su Linux, le modifiche apportate si applicano solo fino al prossimo riavvio.

Per registrare le regole nei sistemi basati su Ubuntu, inserisci:

```bash
sudo -s iptables-save -c
```

Al prossimo avvio del sistema, gli iptables ricariceranno automaticamente le regole del firewall.

Da questo momento puoi configurare regole di firewall iptables base per il tuo server Linux.
Non esitare a sperimentare perché puoi sempre eliminare le regole di cui non hai bisogno, o svuotare tutte le regole e ricominciare.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
