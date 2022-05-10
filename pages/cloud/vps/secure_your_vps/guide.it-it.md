---
title: 'Mettere in sicurezza un VPS'
slug: consigli-sicurezza-vps
section: 'Per iniziare'
excerpt: Scopri gli elementi di base per rendere sicuro il tuo VPS
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 15/01/2021**

## Obiettivo

Al momento dell'ordine del tuo VPS, puoi scegliere una distribuzione o un sistema operativo da preinstallare. Il server è quindi pronto per essere utilizzato dopo la consegna. Tuttavia, in qualità di amministratore, è compito dell'utente attuare misure che garantiscano la sicurezza e la stabilità del sistema.

**Questa guida ti mostra come mettere in sicurezza il tuo server.**
 
> [!warning]
>
> OVHcloud mette a disposizione le macchine di cui è responsabile. Non abbiamo accesso ai dati ospitati su queste macchine e non siamo gli amministratori. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla sicurezza del tuo server, ti consigliamo di rivolgerti a un esperto del settore. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 

## Prerequisiti

- un'offerta [VPS](https://www.ovhcloud.com/it/vps/) sul tuo account OVHcloud
- accesso amministrativo (root) via SSH al tuo server

## Procedura

> [!primary]
>
> Ricordate che questa è una guida generale. Alcuni ordini devono essere adattati alla distribuzione o al sistema operativo utilizzato. A volte ti consigliamo di utilizzare strumenti di terze parti. Se hai bisogno di assistenza, consulta la documentazione ufficiale di queste applicazioni.
>
> Per configurare il tuo primo VPS OVHcloud, consulta la nostra guida [sulla messa in servizio di un VPS](../iniziare-a-utilizzare-vps/).
>

### Aggiorna il sistema

Gli sviluppatori delle distribuzioni effettuano numerosi aggiornamenti dei pacchetti, spesso per ragioni di sicurezza. La loro installazione è fondamentale per proteggere il tuo VPS.

L'aggiornamento avverrà in due fasi.

- Aggiorna la lista dei pacchetti:

```sh
apt-get update
```

- L'aggiornamento dei pacchetti:

```sh
apt-get upgrade
```

Questa operazione deve essere effettuata regolarmente per mantenere un sistema aggiornato.


### Modifica la porta di default del servizio SSH

Una delle prime operazioni da effettuare sul tuo server è configurare il servizio SSH modificando la porta di ascolto. È impostato sulla **porta 22** di default. Di conseguenza, i tentativi di pirateria informatica da parte dei robot puntano su questa porta. Modificare questo parametro con l'aiuto di un'altra porta è una misura semplice per rafforzare la protezione del tuo server contro gli attacchi automatici.

Per modificare il file di configurazione del servizio, esegui questo comando:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Il comando `nano` è indicato come esempio, puoi utilizzare il comando `vim` o qualsiasi altro comando che permetta di modificare i file di configurazione.
>

In seguito, è necessario trovare le seguenti righe:

```sh
# What ports, IPs and protocols we listen for
Port 22
```

Sostituisci il numero **22** con il numero di porta che preferisci. **Non inserisci il numero di porta già utilizzato sul tuo sistema**. Per motivi di sicurezza, utilizza un numero compreso tra 49152 e 65535. <br>Salva e lascia il file di configurazione.

Riavvia il servizio:

```sh
systemctl restart sshd
```

Ciò dovrebbe bastare per applicare le modifiche. È possibile riavviare il VPS (`~$ reboot`).

Ricordati di indicare la nuova porta ogni volta che chiedi una connessione SSH al tuo server, ad esempio:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Modifica della password associata all'utente "root"

Ti consigliamo vivamente di modificare la password dell'utente root in modo da non lasciarla al valore predefinito su un nuovo sistema. Per maggiori informazioni, consulta [questa guida](../root-password/).

### Crea un utente con diritti limitati

In genere, i compiti che non richiedono privilegi root devono essere eseguiti tramite un utente standard. Per creare un utente, esegui questo comando:

```sh
adduser CustomUserName
```

Inserisci le informazioni richieste (nome, password, ecc...).

Il nuovo utente sarà autorizzato a connettersi via SSH. Durante la connessione, utilizza le informazioni di identificazione specificate.

Una volta effettuato l'accesso con queste credenziali, per eseguire operazioni che richiedono i diritti di amministratore, esegui questo comando:

```sh
su root
```

Inserisci la password quando sei invitato e la connessione attiva sarà trasferita all'utente root.

### Disattiva l'accesso al server tramite l'utente root

L'utente root viene creato di default sui sistemi GNU/Linux. Con l'accesso root si ottiene il maggior numero di autorizzazioni su un sistema operativo. Lasciare che il VPS sia accessibile esclusivamente tramite l'accesso root non è consigliato né pericoloso, in quanto può causare operazioni irreversibilmente dannose.

Ti consigliamo di disattivare l'accesso diretto all'utente root tramite il protocollo SSH. Ricordati di creare un altro utente prima di seguire gli step qui sotto.

È necessario modificare il file di configurazione SSH come descritto in precedenza:

```sh
nano /etc/ssh/sshd_config
```

Localizza la sezione seguente:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Sostituisci **yes** con **no** sulla linea `PermitRootLogin`.

Per applicare la modifica, riavvia il servizio SSH:

```sh
systemctl restart sshd
```

In seguito, le connessioni al tuo server tramite l'utente root (`ssh root@IPv4_of_your_VPS`) saranno rifiutate.

### Installazione di Fail2ban

Fail2ban è un framework di prevenzione contro le intrusioni in grado di bloccare tentativi di accesso al tuo sistema da parte di indirizzi IP sconosciuti. Questo software è consigliato, anche essenziale, per proteggersi contro qualsiasi attacco brutale ai tuoi servizi.

Per installare il pacchetto software, utilizza questo comando:

```sh
apt-get install fail2ban
```

Una volta completata l'operazione, è necessario modificare il file di configurazione per adattarlo all'utilizzo. Prima di apportare qualsiasi modifica, ti consigliamo di eseguire un backup del file di configurazione digitando questo comando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

A questo punto, apporta le modifiche necessarie:

```sh
nano /etc/fail2ban/jail.conf
```

Una volta terminate le modifiche, riavvia il sistema digitando il seguente comando:

```sh
/etc/init.d/fail2ban restart
```

Per maggiori informazioni su Fail2Ban, consulta la documentazione ufficiale di questo tool cliccando su [questo link](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configurazione del firewall interno (iptable)

Le distribuzioni Linux e UNIX vengono fornite con un servizio di firewall chiamato iptables, che di default non dispone di regole attive. Per verificarlo, esegui il comando:

```sh
iptables -L
```

In questo caso, ti consigliamo di creare regole su questo firewall e adattarle al tuo utilizzo. Per maggiori informazioni sulle diverse operazioni, consulta la documentazione ufficiale della distribuzione utilizzata.

### Configurazione del Firewall Network OVHcloud 

Le soluzioni OVHcloud includono la possibilità di attivare un firewall al punto di ingresso dell'infrastruttura, il Firewall Network. La corretta configurazione di questo firewall permette di bloccare le connessioni prima che arrivino sul tuo server.

Per attivare il Firewall Network, consulta la guida [Configurare il Firewall Network](../../dedicated/firewall-network/).

### Proteggi il tuo sistema e i tuoi dati

Il concetto di sicurezza non si limita alla protezione di un sistema dagli attacchi.

La protezione dei dati è un elemento chiave e per questo OVHcloud offre diverse opzioni di backup come servizi:

- L'opzione `Snapshot` che ti permette di creare un'istantanea manuale.
- L'opzione di `backup automatico` permette di conservare i backup regolari del VPS (ad eccezione dei dischi supplementari).

Tutte le informazioni sulle soluzioni di backup disponibili per il tuo servizio sono disponibili sulla [pagina del prodotto](https://www.ovhcloud.com/it/vps/options/) e nelle [rispettive](../) guide.

## Per saperne di più

[Iniziare a utilizzare un VPS](../iniziare-a-utilizzare-vps/) 

[Configurare il Firewall Network](../../dedicated/firewall-network/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
