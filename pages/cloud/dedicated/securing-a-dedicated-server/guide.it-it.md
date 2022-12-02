---
title: 'Mettere in sicurezza un server dedicato'
slug: mettere-in-sicurezza-un-server-dedicato
excerpt: 'Scopri come proteggere un server dedicato grazie ad alcuni suggerimenti'
section: 'Per iniziare'
order: 2
---

**Ultimo aggiornamento: 04/10/2018**

## Obiettivo

Di default, i server dedicati non includono alcun protocollo di sicurezza. Pertanto, sarai tu ad occuparti di come proteggere il tuo server. Infatti, OVHcloud non potrà essere considerata responsabile di un problema di sicurezza della tua macchina.

**Scopri come mettere in sicurezza un server dedicato.**

> [!warning]
>
> OVHcloud mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>


## Prerequisiti

- Possedere un [server dedicato](https://www.ovh.it/server_dedicati/){.external}
- Essere connesso in SSH (accesso root) con Linux o come amministratore con Windows


## Procedura

> [!primary]
>
> Questa è una guida per uso generale. Alcuni comandi dovranno essere adattati in base alla distribuzione o al sistema operativo che utilizzi. In qualche caso ti suggeriremo l’utilizzo di strumenti esterni. Se hai dubbi riguardo al loro utilizzo, consulta le relative guide ufficiali.  

>

### Aggiorna il tuo sistema

Gli sviluppatori dei sistemi operativi e delle distribuzioni propongono aggiornamenti frequenti dei pacchetti, molto spesso per motivi di sicurezza. **L'aggiornamento continuo del sistema operativo e della distribuzione è un aspetto fondamentale per la sicurezza del server.**

Si tratta di un processo in due fasi che comprende l’aggiornamento dell’elenco dei pacchetti (l’elenco delle applicazioni installate) e quella dei pacchetti stessi.

#### Aggiornamento dell’elenco dei pacchetti

Aggiorna l’elenco dei pacchetti sul server utilizzando il seguente comando:

```sh
apt-get update
```

#### Aggiornamento dei pacchetti

Aggiorna i pacchetti sul server utilizzando il seguente comando:

```sh
apt-get upgrade
```

Una volta terminata l’operazione, il sistema sarà completamente aggiornato. È necessario effettuare regolarmente questa procedura.


### Modifica la porta di default del servizio SSH

Una delle prime operazioni da effettuare su un server è la configurazione del servizio SSH modificandone la porta di ascolto che, di default, è la 22. È consigliabile cambiarla in quanto buona parte dei tentativi di pirateria informatica sono effettuati da robot che attaccano solitamente la porta 22. Modificando questa impostazione, il tuo server risulterà più difficile da raggiungere.

> [!primary]
>
> Nei seguenti esempi, utilizzeremo l’editor di testo Linux **Nano**, ma puoi utilizzare qualunque editor di testo che ti consenta di modificare il file di configurazione.
>

Per modificare il file di configurazione del servizio, esegui questo comando:

```sh
nano /etc/ssh/sshd_config
```

Cerca nel file la seguente stringa:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Sostituisci il numero **22** con la porta che vuoi impostare, salva e infine chiudi il file di configurazione. **Assicurati di non digitare il numero di una porta già in uso** e riavvia il server.

Da questo momento, quando vorrai connetterti alla tua macchina in SSH, dovrai indicare la nuova porta:

```sh
ssh root@TuoServer.ovh.net -p NuovaPorta
```

> [!warning]
>
> Ricorda che la modifica della porta di default di SSH o qualsiasi altro protocollo costituisce un potenziale rischio. Non è possibile configurare alcuni servizi per utilizzarli con porte non standard e, pertanto, se si modifica la porta di default non funzioneranno.
>


### Modifica la password associata all’utente root

Dopo l’installazione di una distribuzione o di un sistema operativo, si genera automaticamente una password per l’accesso root. Ti consigliamo vivamente di personalizzare la tua password. Per eseguire la modifica, connettiti in SSH al tuo server e digita il seguente comando:

```sh
passwd root
```

Dopodiché inserisci la nuova password due volte. Per motivi di sicurezza,**la nuova password non appare durante la digitazione** e pertanto non sarà possibile visualizzare i caratteri inseriti.

Una volta eseguita quest’operazione, sarà necessario utilizzare la nuova password già dalla prossima connessione al sistema.


### Crea un account con diritti utente limitati

È consigliabile creare un account utente con accesso limitato al tuo server per un uso quotidiano. Per creare un nuovo utente, utilizza questo comando:

```sh
adduser Nome_Utente_Personalizzato
```

Inserisci le informazioni richieste (nome, password, ecc...).

Questo nuovo utente sarà autorizzato a connettersi al tuo sistema in SSH con la password definita in fase di creazione. Una volta effettuato l’accesso, per eseguire operazioni che richiedono i diritti di amministratore, sarà sufficiente digitare questo comando:

```sh
su root
```

Di seguito, inserisci la password associata all’utente root per confermare l’operazione.


### Disattiva l’accesso dell’utente root al server 

Nei sistemi UNIX, come Linux o macOS, l’utente root viene creato di default e dispone di tutti i diritti di amministratore sul tuo sistema. È sconsigliato, o addirittura pericoloso, consentire che il tuo server dedicato sia accessibile soltanto a questo utente, in quanto potrebbe eseguire operazioni irreversibili sul server.

Ti consigliamo quindi di disattivare l’accesso diretto degli utenti root in SSH. Per effettuare questa operazione, modifica il file di configurazione SSH come mostrato precedentemente per la modifica della porta di accesso al server.

Per fare ciò, stabilisci una connessione in SSH sul tuo server e digita il seguente comando:

```sh
nano /etc/ssh/sshd_config
```

Dopodiché, individua la sezione successiva e sostituisci «yes» con «no» nella stringa `PermitRootLogin`, come indicato qui di seguito:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Dopo aver salvato e chiuso il file di configurazione, riavvia il servizio SSH per applicare le modifiche utilizzando questo comando:

```sh
/etc/init.d/ssh restart
```

### Installa e configura il pacchetto Fail2ban

Fail2ban è un framework di prevenzione contro le intrusioni in grado di bloccare tentativi di accesso al tuo sistema da parte di indirizzi IP sconosciuti. Questo pacchetto è consigliato per proteggere il server da tutti gli attacchi di forza bruta.

Per installare Fail2ban, utilizza il seguente comando:

```sh
apt-get install fail2ban
```

Una volta completata l’operazione, è necessario adattare il file di configurazione in base alle tue esigenze. Prima di qualsiasi modifica, ti consigliamo di eseguire un backup del file di configurazione digitando:

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

Per maggiori informazioni su Fail2Ban, consulta la [documentazione ufficiale](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} del tool.


### Configura il firewall interno: iptables

Le distribuzioni di base dispongono di un servizio di firewall chiamato iptables, che di default non dispone di regole attive. Per verificarlo, esegui il comando:

```sh
iptables -L
```

Ti consigliamo di creare e adattare le regole di questo firewall in base alle tue necessità. Per maggiori informazioni sulla configurazione di iptables, consulta la [nostra guida](https://docs.ovh.com/it/dedicated/firewall-iptables/) e la documentazione ufficiale della tua distribuzione Linux.


### Configura il Network Firewall OVHcloud

I server dedicati di OVHcloud includono un firewall all’ingresso dell’infrastruttura, il Network Firewall. Attivandolo e configurandolo, è possibile bloccare i protocolli prima che arrivino al tuo server.

Per maggiori informazioni, consulta la nostra guida su come [configurare il Network Firewall](https://docs.ovh.com/it/dedicated/firewall-network/){.external}.


### Proteggi il tuo sistema e i tuoi dati

Il concetto di sicurezza non si limita esclusivamente alla protezione di un sistema dagli attacchi. La messa in sicurezza dei tuoi dati è un elemento fondamentale ed è per questo che OVHcloud ti offre uno spazio di backup di 500 GB incluso con il tuo server, che puoi attivare direttamente dal tuo Spazio Cliente ed eseguire l’accesso utilizzando i seguenti protocolli:

- FTP
- FTPS
- NFS
- CIFS

Per copiare i tuoi dati e trasferirli nel tuo spazio di backup, avrai bisogno di una soluzione di backup esterna.

Per ulteriori informazioni sulle nostre soluzioni di backup, consulta la guida [Backup storage](https://docs.ovh.com/gb/en/dedicated/services-backup-storage/){.external} (EN).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.