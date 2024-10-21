---
title: "Mettere in sicurezza un VPS"
excerpt: "Come impostare misure di sicurezza di base per proteggere il VPS da attacchi e accessi non autorizzati"
updated: 2024-02-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Al momento dell'ordine del tuo VPS, puoi scegliere una distribuzione o un sistema operativo da preinstallare. Il server è quindi pronto per essere utilizzato dopo la consegna. Tuttavia, in qualità di amministratore, è compito dell'utente attuare misure che garantiscano la sicurezza e la stabilità del sistema.

**Questa guida ti mostra come proteggere un server basato su GNU/Linux.**

> [!warning]
>
> OVHcloud mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a muovere i primi passi nell’utilizzo del tuo VPS. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Un [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- Avere un accesso amministratore (sudo) al server via SSH

## Procedura

> [!primary]
>
> Ricordate che questa guida generale si basa su un sistema operativo Ubuntu Server. Alcuni comandi devono essere adattati alla distribuzione utilizzata e alcuni trucchi ti invitano a utilizzare strumenti di terze parti. In caso di necessità, consulta la documentazione ufficiale relativa a queste applicazioni.
>
> Per configurare il tuo primo VPS OVHcloud, consulta la nostra guida [sulla messa in servizio di un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>

Questi esempi presuppongono la connessione come [utente con elevate autorizzazioni](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Aggiorna il tuo sistema operativo

Gli sviluppatori di distribuzioni e di sistemi operativi propongono frequenti aggiornamenti di pacchetti, molto spesso per ragioni di sicurezza.<br>
Garantire l'aggiornamento della distribuzione o del sistema operativo è un elemento essenziale per proteggere il VPS.

L'aggiornamento avverrà in due fasi.

- Aggiorna la lista dei pacchetti:

```bash
sudo apt update
```

- L'aggiornamento dei pacchetti in quanto tale:

```bash
sudo apt upgrade
```

Questa operazione deve essere effettuata regolarmente per mantenere un sistema aggiornato.

### Modifica la porta di default SSH <a name="changesshport"></a>

Una delle prime operazioni da effettuare sul tuo server è la configurazione della porta di ascolto del servizio SSH. Di default, viene definita sulla **porta 22**, quindi i tentativi di hack del server da parte dei robot indirizzeranno questa porta in priorità.
Modificare questo parametro a vantaggio di una porta diversa è una misura semplice per rafforzare la protezione del tuo server contro gli attacchi automatici.

Per farlo, modifica il file di configurazione del servizio con l'editor di testo scelto (`nano` è utilizzato in questo esempio):

```bash
sudo nano /etc/ssh/sshd_config
```

Dovrai trovare queste linee o equivalenti:

```console
#Port 49152
#AddressFamily any
#ListenAddress 0.0.0.0
```

Sostituisci il numero **22** con il numero di porta che preferisci.<br>
**Ricordati di non inserire un numero di porta già utilizzato sul tuo sistema**.
Per una maggiore sicurezza, utilizza un numero tra 49152 e 65535.<br>Salva e lascia il file di configurazione.


Se la riga è "commentata" (cioè preceduta da un "#") come nell'esempio precedente, assicurarsi di rimuovere il "#" prima di salvare il file, in modo che la modifica venga presa in considerazione. Esempio:

```console
Port 49152
#AddressFamily any
#ListenAddress 0.0.0.0
```

Riavvia il servizio:

```bash
sudo systemctl restart sshd
```

Ciò dovrebbe essere sufficiente per attuare le modifiche. In caso contrario, riavvia il VPS (`sudo reboot`).

**Per Ubuntu 23.04 e versioni successive**

Per le ultime versioni di Ubuntu, la configurazione SSH viene gestita nel file `ssh.socket`.

Per aggiornare la porta SSH, modifica la riga `Listenstream` nel file di configurazione con un editor di testo a tua scelta (`nano` utilizzato in questo esempio):

```console
[Socket]
ListenStream=49152
Accept=no
```

Salvare le modifiche ed eseguire i comandi seguenti:

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl restart ssh.service
```

Se è stato attivato il firewall del sistema operativo, assicurarsi di consentire la nuova porta secondo le regole del firewall.

Ricordati di indicare la nuova porta ad ogni richiesta di [connessione SSH al tuo server](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction):

```bash
ssh username@IPv4_VPS -p NewPortNumber
```

Esempio:

```bash
ssh ubuntu@203.0.113.100 -p 49152
```

### Crea un account con diritti utente limitati <a name="createuser"></a>

In genere, i compiti che non richiedono privilegi root devono essere eseguiti tramite un utente standard. Per maggiori informazioni, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Configura il firewall interno (iptables)

Le distribuzioni GNU/Linux correnti sono fornite con un servizio di firewall chiamato iptables, che di default non dispone di regole attive. Per verificarlo, esegui il comando:

```bash
iptables -L
```

Per maggiori informazioni su iptables, consulta la nostra [guida dedicata](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable).

Ti consigliamo di creare e adattare le regole del firewall in base alle tue necessità. Per maggiori informazioni sulle diverse operazioni, consulta la documentazione ufficiale della distribuzione utilizzata.

### Installer Fail2ban

Fail2ban è un framework di prevenzione contro le intrusioni il cui scopo è bloccare gli indirizzi IP da cui i robot o gli aggressori cercano di accedere al tuo sistema.<br>
Questo pacchetto è indispensabile, in alcuni casi, per proteggere il tuo server dagli attacchi di tipo *Brute Force* o *Denial of Service*.

Per installare il pacchetto software, utilizza questo comando:

```bash
sudo apt install fail2ban
```

Puoi personalizzare i file di configurazione Fail2ban per proteggere i servizi esposti a Internet pubblico dai ripetuti tentativi di connessione.

Come raccomandato da Fail2ban, crei un file di configurazione locale dei tuoi servizi copiando il file "jail.conf":

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Apri il file con un editor di testo:

```bash
sudo nano /etc/fail2ban/jail.local
```

Leggi le informazioni in alto nel file, in particolare i commenti sotto `[DEFAULT]`.

I parametri `[DEFAULT]` sono globali e si applicheranno quindi a tutti i servizi definiti per essere attivati (`enabled`) in questo file. 

È importante sapere che i parametri globali saranno presi in considerazione solo se nel file non ci sono valori diversi definiti nelle sezioni di servizio (`JAILS`).

Prendiamo ad esempio queste linee sotto `[DEFAULT]`:

```console
bantime = 10m
maxretry = 5
enabled = false
```

Questo significa che un indirizzo IP a partire dal quale un host tenta di connettersi sarà bloccato per dieci minuti dopo il quinto tentativo di apertura della sessione non andato a buon fine.<br>
Inoltre, tutti i parametri specificati da `[DEFAULT]` e nelle sezioni seguenti rimangono disattivati a meno che la linea `enabled = true` non sia aggiunta per un servizio (come indicato qui di seguito `# JAILS`).

Come esempio di utilizzo, avere queste linee nella sezione `[sshd]` attiverà restrizioni solo per il servizio OpenSSH:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

In questo esempio, se un tentativo di connessione SSH fallisce tre volte in cinque minuti, il periodo di divieto degli IP sarà di 30 minuti.

Se l'hai modificato, puoi sostituire "ssh" con il numero di porta reale.

L'approccio migliore consiste nell'attivare Fail2ban solo per i servizi eseguiti sul server. Ogni parametro personalizzato aggiunto con `# JAILS` avrà priorità sui valori predefiniti.

Una volta terminate le modifiche, salva il file e chiudi l'editor.

Riavvia il servizio per assicurarti che venga eseguito con le personalizzazioni applicate:

```bash
sudo service fail2ban restart
```

Fail2ban dispone di numerosi parametri e filtri di personalizzazione e di opzioni predefinite, ad esempio quando vuoi aggiungere uno strato di protezione a un server web Nginx.

Per maggiori informazioni e raccomandazioni su Fail2ban, consulta [la documentazione ufficiale](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} di questo tool.

### Configurazione del Network Firewall OVHcloud 

Le soluzioni OVHcloud includono la possibilità di attivare un firewall al punto di ingresso dell'infrastruttura, il Network Firewall. La corretta configurazione di questo firewall permette di bloccare le connessioni prima che arrivino sul tuo server.

Per attivare il Network Firewall, consulta la guida [Configurare il Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Proteggi il tuo sistema e i tuoi dati

Il concetto di sicurezza non si limita alla protezione di un sistema dagli attacchi.

La protezione dei dati è un elemento chiave e per questo OVHcloud offre diverse opzioni di backup come servizi:

- L'opzione `Snapshot` che ti permette di creare un'istantanea manuale.
- L'opzione di `backup automatico` permette di conservare i backup regolari del VPS (ad eccezione dei dischi supplementari).

Tutte le informazioni sulle soluzioni di backup disponibili per il tuo servizio sono disponibili sulla [pagina del prodotto](https://www.ovhcloud.com/it/vps/options/) e nelle [rispettive](/products/bare-metal-cloud-virtual-private-servers) guide.

## Per saperne di più

[Iniziare a utilizzare un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) 

[Configura il firewall su Windows](/pages/bare_metal_cloud/virtual_private_servers/activate-port-firewall-soft-win)

[Configura il firewall su Linux con iptables](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable)

[Configurare il Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
