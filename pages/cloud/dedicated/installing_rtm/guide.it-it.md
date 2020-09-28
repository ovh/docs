---
title: 'Installare Real Time Monitoring (RTM)'
slug: installare-rtm
excerpt: 'Come utilizzare Real Time Monitoring su Linux e Windows'
section: 'Diagnostica e modalità Rescue'
---

**Ultimo aggiornamento 24/03/2020**

## Obiettivo

Real Time Monitoring (RTM) è uno strumento che consente di monitorare parzialmente il server e la sua attività. Nello Spazio Cliente OVHcloud sono disponibili i dati relativi a CPU, RAM, partizioni del disco, porte aperte, ecc… Per visualizzare queste informazioni è necessario il pacchetto RTM.

**Questa guida ti mostra come installare il tool Real Time Monitoring su server Linux.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Avere accesso al server via SSH (o interfaccia grafica) con l’utente root


## Procedura

> [!primary]
>
> Alcune restrizioni del firewall potrebbero impedire il corretto monitoraggio dell’infrastruttura anche se RTM è stato installato. Ricorda di autorizzare gli indirizzi IP per il monitoring OVHcloud per accedere al server. Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh) (in inglese). 
> 

### RTM su Linux

#### Componenti

Sui server dedicati, RTM raccoglie costantemente le informazioni relative a CPU, RAM, dischi, RAID e hardware. Qui di seguito puoi trovare alcune informazioni sui componenti in uso.

##### Beamium

https://github.com/ovh/beamium

Beamium raccoglie le metriche degli endpoint HTTP, come _http://127.0.0.1:9100/metrics_, e supporta i formati Prometheus Sensision.  

Una volta attivato, questo tool può filtrare e trasferire i dati verso una piattaforma Warp 10™ Time Series e,  durante l’acquisizione delle metriche, utilizza DFO (Disk Fail Over) per evitare eventuali perdite dovute a problemi di rete o servizi non raggiungibili.

Breamium è scritto in Rust per garantire efficacia, prestazioni elevate ed evitare sovraccarichi.

Esempio di configurazione:

```sh
# noderig endpoint to fetch
scrapers:
  noderig:
    url: http://127.0.0.1:9100/metrics
    format: sensision
    period: 60000

# Warp10 platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 526873a6b912637ee4c44b525413
    Size : 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retrieve it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
Il file di configurazione si compilerà automaticamente una volta completata l’installazione.

##### Noderig

https://github.com/ovh/noderig

Nodering raccoglie le metriche del sistema operativo e le espone tramite un URL HTTP (http://127.0.0.1:9100/metrics).  Ogni collector è facilmente configurabile grazie a un semplice cursore di livello.

Metriche Noderig:

* CPU
* Memoria
* Carico
* Disco
* Rete
* Collector esterni

Esempio di configurazione:

```sh
cpu: 1
mem: 1
load: 2
disk: 2
net: 2
net-opts:
  interfaces:
    - eth0
    - eth1
period: 60000
collectors: /opt/noderig
```


##### RTM Binaries

**rtmHardware**:

- Raccoglie dati relativi ad hardware (scheda madre, periferiche PCI, stato di salute del disco, ecc…)  e software (ad esempio, versione del kernel e del BIOS).

**rtmHourly**:

- Raccoglie dati relativi a processi più utilizzati, porte aperte, numero di processi in esecuzione.

**rtmRaidCheck**:

- Verifica lo stato di salute del RAID, se disponibile.

### Installa RTM automaticamente

Una volta effettuato l’accesso al server via SSH, esegui semplicemente questo comando:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Questa operazione potrebbe non funzionare correttamente a causa di alcune dipendenze.  In questo caso è necessario procedere con l’installazione manuale descritta di seguito. 
>

### Installa manualmente RTM

#### Installazione manuale su Debian/Ubuntu


##### Step 1: Aggiungi i repository OVHcloud 

- tramite **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- manualmente

Su **Debian**:

`<distribution codename>` indica il nome della tua distribuzione, ad esempio “buster”).
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
```

Su **Ubuntu**:

`<distribution codename>` indica il nome della tua distribuzione, ad esempio “bionic”).
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Aggiungi queste righe e salva il file:
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main

```
> [!primary]
> 
> Per quanto riguarda le attuali distribuzioni, i pacchetti necessari potrebbero non essere ancora inclusi nei repository delle versioni aggiornate di Linux. In quel caso, usa il codename di una versione meno recente Ubuntu.
>


##### Step 2: Installa la chiave del repository:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Step 3: Installa i pacchetti RTM:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Installazione manuale su CentOS

Aggiungi i repository per RTM e metriche su CentOS:

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Aggiungi queste righe e salva il file:

```sh
[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Installa i pacchetti RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Installazione manuale su FreeBSD

Aggiungi i repository per RTM e metriche su FreeBSD:

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Aggiungi queste righe e salva il file:

```sh
# OVH mirror
RTM: {
  url: "http://last.public.ovh.rtm.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
Metrics: {
  url: "http://last-public-ovh-metrics.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
```
Installa i pacchetti RTM:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
yum install ovh-rtm-metrics-toolkit
```
Avvia i servizi:

```sh
service noderig start
service beamium start
```

> [!primary]
>**RTM su Windows**
>
Al momento il pacchetto RTM non è compatibile con i sistemi Windows. Lavoriamo continuamente per sviluppare e migliorare i nostri servizi, e a breve sarà disponibile anche una versione per Windows.
>


### Avere accesso allo Spazio Cliente OVHcloud

Una volta installato RTM, è possibile visualizzare i dati di monitoraggio per il tuo server dal tuo Spazio Cliente OVHcloud.  (Potrebbe essere necessario aggiornare il browser o disconnettersi e accedere nuovamente). Accedi alla sezione `Server`{.action} e seleziona il tuo server nel menu a sinistra. Nella scheda `Informazioni generali`{.action} sono infatti disponibili i dati degli elementi controllati.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Per saperne di più

[Indirizzi IP per il monitoring OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh) (in inglese)

[Visualizzare i propri dati](https://docs.ovh.com/gb/en/metrics/usecase-visualize) (in inglese)

[Attivare e utilizzare il Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.