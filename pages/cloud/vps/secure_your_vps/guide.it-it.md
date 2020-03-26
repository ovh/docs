---
title: 'Mettere in sicurezza un VPS'
slug: consigli-sicurezza-vps
section: 'Per iniziare'
---

**Ultimo aggiornamento: 26/02/2018**

## Obiettivo

Al momento dell’ordine, un VPS include una distribuzione preinstallata ma i protocolli di sicurezza non sono abilitati. OVHcloud non può intervenire sulla tua macchina: la protezione del VPS è quindi a tuo carico.

**Questa guida ti mostra le operazioni da effettuare per mettere in sicurezza il tuo server.**

 
> [!warning]
>
> OVHcloud mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è responsabilità dell’utente. Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo VPS. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 



## Prerequisiti

- Essere connesso al VPS in SSH (accesso root)


## Procedura

Questa guida è generica e le azioni descritte costituiscono esclusivamente una serie di consigli pratici. Alcuni comandi dovranno quindi essere adattati in base alla distribuzione utilizzata. Per alcune operazioni ti consiglieremo di utilizzare strumenti esterni: se hai bisogno di ulteriori informazioni, consulta la documentazione ufficiale di questi tool.

### Aggiorna il sistema

Gli sviluppatori delle distribuzioni rilasciano continuamente aggiornamenti dei pacchetti, spesso per motivi di sicurezza. La loro installazione è fondamentale per proteggere il tuo VPS.

Questa operazione prevede 2 fasi:

- aggiornamento della lista dei pacchetti

```sh
apt-get update
```

- installazione dei pacchetti

```sh
apt-get upgrade
```

Eseguendo regolarmente queste due azioni, il tuo sistema sarà sempre aggiornato. 


### Modifica la porta predefinita del servizio SSH


Modificare la porta del servizio SSH è una delle prime operazioni da effettuare sul tuo server. La porta di ascolto impostata di default è infatti la **22**, spesso sfruttata dagli hacker per realizzare attacchi sui server. Agire sulle impostazioni predefinite di questa porta permette di rendere la tua macchina meno facilmente raggiungibile.

Per modificare il file di configurazione del servizio, esegui questo comando:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Il comando `nano` è solo un esempio e può essere sostituito da `vim` o altri che consentono di effettuare questa operazione sul file sshd\_config.
>

Nella riga:

```sh
# What ports, IPs and protocols we listen for Port 22
```

sostituisci il numero 22 con quello di tua scelta, **assicurandoti di non inserire un numero di porta già in uso nel tuo sistema**. Salva le modifiche e chiudi il file di configurazione.

Riavvia il tuo servizio:

```sh
/etc/init.d/ssh restart
```

Da questo momento, per connetterti in SSH alla tua macchina è necessario specificare la nuova porta:

```sh
ssh root@tuovps.ovh.net -p NuovaPorta
```

### Modifica la password associata all’utente “root”

Durante l’installazione di una distribuzione, la password associata all’utente principale (root) viene creata automaticamente. Ti consigliamo di personalizzarla effettuando l’accesso con questo utente e digitando il comando:

```sh
passwd root
```

Il sistema ti chiederà di scegliere una nuova password e confermarla. Per motivi di sicurezza **la password inserita non sarà mostrata** e nessun carattere verrà visualizzato durante la digitazione.

La nuova password diventa subito effettiva e, dalla connessione successiva, sarà necessario utilizzarla per accedere al sistema.

### Crea un utente con diritti limitati e agisci sul sistema con i permessi di root

Per creare un nuovo utente, utilizza il comando:

```sh
adduser NomeNuovoUtente
```

e inserisci le informazioni richieste (nome, password, ecc...).

Questo utente sarà autorizzato a connettersi al tuo sistema in SSH con la password definita in fase di creazione.

Una volta effettuato l’accesso, per eseguire operazioni che richiedono i privilegi di root, sarà sufficiente digitare il comando:

```sh
su root
```

e inserire la password associata all’utente root per confermare l’operazione.

### Disattiva l’accesso dell’utente root al server 

L’utente root viene creato di default sui sistemi UNIX ed è quello che possiede il maggior numero di permessi sul tuo sistema. È pericoloso e sconsigliato che sia l’unico autorizzato ad accedere al VPS, in quanto in grado di effettuare operazioni irreversibili sul server.

Ti consigliamo quindi di disattivare l’accesso diretto di questo utente tramite il protocollo SSH.

Per effettuare questa operazione, modifica il file di configurazione SSH come fatto precedentemente per la porta di accesso al VPS:

```sh
nano /etc/ssh/sshd_config
```

Trova questa sezione all’interno del file:

```sh
# Authentication: LoginGraceTime 120 PermitRootLogin yes StrictModes yes
```

Nella riga `PermitRootLogin`, sostituisci **yes** con **no**.

Riavvia il servizio SSH per applicare la modifica:

```sh
/etc/init.d/ssh restart
```

A questo punto, utilizza l’utente appena creato per accedere al tuo sistema.


### Installa e configura il pacchetto Fail2ban

Fail2ban è un framework di prevenzione contro le intrusioni in grado di bloccare tentativi di accesso al tuo sistema da parte di indirizzi IP sconosciuti. Questo pacchetto è indispensabile per proteggere i tuoi servizi da attacchi di tipo brute force.

Per installarlo, esegui questo comando:

```sh
apt-get install fail2ban
```

Una volta completata l’operazione, è necessario adattare il file di configurazione in base alle tue esigenze. Prima di effettuare qualsiasi modifica sul file, ti consigliamo di eseguirne un backup con il comando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

A questo punto, apporta le modifiche necessarie:

```sh
nano /etc/fail2ban/jail.conf
```

e riavvia il servizio:

```sh
/etc/init.d/fail2ban restart
```

Per maggiori informazioni su Fail2Ban, consulta la [documentazione ufficiale](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} del tool.

### Configura il firewall interno: iptables

Le distribuzioni server includono un servizio di firewall, chiamato iptables, che di default non dispone di regole attive. Per verificarlo, esegui il comando:

```sh
iptables -L
```

Ti consigliamo di creare e adattare le regole di questo firewall in base alle tue necessità. Per maggiori informazioni sulle diverse operazioni disponibili, consulta la documentazione ufficiale della distribuzione utilizzata.

### Configura il Firewall Network OVHcloud

OVHcloud propone il servizio Firewall Network, un firewall all’ingresso dell’infrastruttura la cui attivazione e configurazione consente di bloccare i protocolli prima che arrivino al tuo server.

Per consultare la nostra guida relativa a questa soluzione, [clicca qui](https://docs.ovh.com/it/dedicated/firewall-network/){.external}.

### Proteggi il tuo sistema e i tuoi dati

Il concetto di sicurezza non si limita esclusivamente alla protezione di un sistema dagli attacchi.

Anche la sicurezza dei dati è un elemento fondamentale e per salvaguardarlo OVHcloud propone tre opzioni di backup:

- `Snapshot`, un’istantanea della tua macchina virtuale creata manualmente (disponibile su VPS SSD, Cloud e Cloud RAM)
- `Backup automatizzato`, una copia giornaliera del tuo VPS (disco aggiuntivo escluso) esportata e replicata tre volte prima di essere disponibile nello Spazio Cliente OVHcloud (disponibile esclusivamente su VPS Cloud e Cloud RAM)
- `Backup Storage`, una soluzione per archiviare e recuperare manualmente i file su uno spazio disco dedicato. I protocolli disponibili per eseguire queste operazioni sono FTP, NFS e CIFS, compatibili con tutti i sistemi operativi. Grazie a questa opzione i dati sono al sicuro in caso di interruzione di servizio (disponibile esclusivamente su VPS Cloud e Cloud RAM)

Per maggiori informazioni sulle nostre soluzioni di storage per VPS: <https://www.ovhcloud.com/it/vps/>.

## Per saperne di più

[Configurare il Firewall Network](https://docs.ovh.com/it/dedicated/firewall-network/)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
