---
title: Gestire un cluster di server Docker con Shipyard
excerpt: ''
slug: gestire_un_cluster_di_server_docker_con_shipyard
legacy_guide_number: g1762
hidden: true
---


## 
Shipyard è un'applicazione sviluppata dalla community degli utenti Docker. Può essere un'alternativa valida a Swarm e ha un'interfaccia grafica per gestire un cluster di macchine Docker: da quest'interfaccia puoi pianificare le attività e la distribuzione dei servizi delle risorse della macchina.
Il master genera i codici e certificati necessari ad autenticarti sulle altre macchine; inoltre, grazie al TLS, permette scambi al sicuro da intrusi sui nodi (solo le macchine con i certificati possono connettersi ai client Docker delle macchine distanti).

Per eseguire queste operazioni, consulta la [documentazione Docker ufficiale](https://docs.docker.com/articles/https/).

Una volta generati i certificati, occupati dei nodi. Nel nostro esempio il cluster è composto da 3 macchine (IP: 1.1.1.1, 2.2.2.2 e 3.3.3.3).

Copia i codici e i certificati generati nella cartella /etc/docker/certs/ sui nodi tramite il comando:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Per una maggiore sicurezza del cluster, inserisci le regole IPtables sulla macchina master e sui nodi.
Ecco un esempio delle regole IPtables applicabili.

Sui nodi

Installa le regole IPtables per:


```
# Conservare le connessioni stabilite
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Autorizzare il loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

# /!\ ATTENZIONE: verifica l'indirizzo IP inserito, deve corrispondere al tuo IP di connessione o all'indirizzo IP della macchina master, che saranno gli unici a poter accedere ai nodi in SSH.

# HTTP In
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ ATTENZIONE: verifica l'indirizzo IP inserito, deve corrispondere all'indirizzo IP della macchina master che sarà l'unico a poter accedere alla porta 2375.

# Impedire tutte le connessioni in entrata
iptables -P INPUT DROP
iptables -P FORWARD DROP
```


Quando hai definito le regole, registrale in modo che vengano eseguite all'avvio tramite:


```
apt-get install iptables-persistent
```


/!\ ATTENZIONE: ti consigliamo di verificare il funzionamento corretto delle regole prima di registrarle. Se non le hai ancora registrate, in caso di problemi esegui un semplice riavvio delle tue macchine per effettuare un reset delle regole.

In qualsiasi momento, puoi aggiungere regole IPtables e registrarle tramite:


```
iptables-persistent save
```


Sulla maccina master

Installa le regole IPtables per:


```
# Conservare le connessioni stabilite
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Autorizzare il loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard Web In
iptables -t filter -A INPUT -s «IP pubblico della tua connessione o della tua VPN» -p tcp --dport 8080 -j ACCEPT

# /!\ ATTENZIONE: verifica l'indirizzo IP inserito, deve corrispondere al tuo IP di connessione o alla tua VPN, che saranno gli unici a poter accedere all'interfaccia di Shipyard.

# SSH In
iptables -t filter -A INPUT -s « IP pubblico della tua connessione o della tua VPN » -p tcp --dport 22 -j ACCEPT

# /!\ ATTENZIONE: verifica l'indirizzo IP inserito, deve corrispondere al tuo IP di connessione o alla tua VPN, che saranno gli unici a poter accedere alla macchina master in SSH.

# Impedire tutte le connessioni in entrata
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Quando hai definito le regole, registrale in modo che si eseguano all'avvio tramite:


```
apt-get install iptables-persistent
```


/!\ ATTENZIONE: ti consigliamo di verificare il funzionamento corretto delle regole prima di registrarle. Se non le hai ancora registrate, in caso di problemi esegui un semplice riavvio delle tue macchine per effettuare un reset delle regole.

In qualsiasi momento, puoi aggiungere regole IPtables e registrarle tramite:


```
iptables-persistent save
```




## 
Dopo aver installato Docker sulle 3 macchine (cf. [la nostra guida](https://www.ovh.it/g1708.ottimizza_con_docker_il_tuo_sito_wordpress_ospitato_su_un_vps), puoi disporre anche delle istanze RunAbove in dotazione con Docker. Per maggiori informazioni, consulta [questa guida](https://community.runabove.com/kb/en/instances/docker-in-5-minutes-on-runabove-with-docker-machine.html)). Puoi attivare un Docker daemon su una porta (ad esempio la 2375, porta ufficiale assegnata dallo [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker)) per far dialogare le macchine con il master.
Per farlo, chiudi Docker su tutte le macchine con questo comando:


```
service docker stop
```


Accedi alla cartella che contiene i certificati:


```
cd /etc/docker/
```


Avvia Docker utilizzando la porta 2375 con autenticazione TLS eseguendo su tutti i nodi questo comando:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ ATTENZIONE: queste opzioni non sono permanenti e, se la macchina si riavvia, bisogna reinserirle per utilizzare di nuovo Docker. L'ideale è di definirle nella variabile d'ambiente $DOCKER_OPTS. In Ubuntu, puoi indicarle facilmente in /etc/default/docker

Anche qui trovi un « --label name=node1 » con cui puoi assegnare un nome a tutti i nodi con la stessa label (in questo modo, con un sistema di regole, potrai attivare un container Docker su un nodo specifico).

A questo punto puoi installare Shipyard sulla macchina master.


## 
Esegui un'istanza data volume di RethinkDB:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Avvia RethinkDB utilizzando il data volume creato:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```


/!\ ATTENZIONE: se il tuo server è accessibile direttamente da Internet, RethinkDB elabora pubblicamente le richieste inviate alle porte 49153 (istanza locale), 49154 (cluster) e 49155 (interfaccia Web).

Attiva il controller Shipyard associandolo al database utilizzando questo comando (--link shipyard-rethinkdb:rethinkdb):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```


Shipyard crea di default un utente "admin" con password "shipyard".

Prima di accedere all'interfaccia Web, ti consigliamo di cambiare la password di accesso a Shipyard.
Attiva un container per accedere alla CLI (Common Line Interface) di Shipyard:


```
docker run -it shipyard/shipyard-cli
```


Effettua il login:


```
shipyard cli> shipyard login
URL:http://<TUA_MACCHINA>:8000
Username: admin
Password: shipyard
Cambia la password
shipyard cli> shipyard change-password
Password: <TUA_PASSWORD>
Confirm: <ANCORA>
```


Clicca ctrl+d per uscire dalla CLI.

Accedi all'interfaccia di Shipyard http://<your-host-ip>:8080 e utilizza l'identificativo "admin" e la password scelta per effettuare il login.

Una volta eseguita questa operazione, registra le macchine (i nodi) nella sezione "engines" dell'interfaccia Web di Shipyard.

![](images/img_2612.jpg){.thumbnail}
Ricordati di copiare i tuoi certificati di sicurezza generati nelle tab SSL certificate, SSL key e CA certificate.
Esegui la stessa operazione per tutti i nodi (attenzione: definisci una sola label).

![](images/img_2613.jpg){.thumbnail}
Puoi anche aggiungere macchine tramite la CLI. Per farlo, avvia il container CLI di Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Trovi una "-v /etc/docker/certs/:/home/" con cui puoi creare una cartella comune tra la macchina master e il container CLI di Shipyard in esecuzione su questa stessa macchina. In questo modo il container può accedere ai certificati generati precedentemente.

Effettua il login:


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: tua_password
```


Poi esegui il comando:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Clicca ctrl+d per uscire dalla CLI.


## 
Nella sezione container, ora visualizzi e gestisci tutti i container in esecuzione sui vari nodi:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
scegli se avviare i container su tutti i nodi o solo su alcuni, selezionando la label corrispondente ai nodi su cui vuoi eseguire il deploy del container:

![](images/img_2616.jpg){.thumbnail}
A questo punto hai un sistema di gestione delle tue macchine Docker e puoi occuparti delle applicazioni/container nel tuo cluster in modo semplice e veloce con un'interfaccia grafica. Se vuoi provare Docker, accedi alla nostra Alpha Sailabove disponibile su [https://labs.runabove.com/docker/](https://labs.runabove.com/docker/). Stiamo realizzando anche un template Ubuntu 14.04 preinstallato su VPS Cloud e VPS Classic (disponibile con tutte le nostre offerte VPS, tranne Classic 1), in modo che la tua macchina sia pronta ad avviare i container usufruendo dei vantaggi delle offerte VPS OVH.

