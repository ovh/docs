---
title: Configurare un indirizzo IP in alias
excerpt: Come aggiungere indirizzi Additional IP alla tua configurazione VPS
updated: 2024-04-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). Questo non ha alcun impatto sulla sua funzionalità.
>

## Obiettivo

L'alias IP (*IP aliasing* in inglese) è una configurazione di rete speciale per i tuoi server OVHcloud, che ti permette di associare più indirizzi IP su un'unica interfaccia di rete.

**Questa guida ti mostra come aggiungere indirizzi Additional IP alla tua configurazione di rete.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile. ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente ad amministrazione e sicurezza, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/). Per maggiori informazioni consulta la sezione "Per saperne di più".
>

## Prerequisiti

- Disporre di una soluzione [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- Disporre di un [indirizzo Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/)
- Avere un accesso amministrator (sudo) via SSH o GUI sul tuo server
- Possedere conoscenze di base sulle reti e la loro amministrazione

## Procedura

Questa guida ti mostra le configurazioni delle distribuzioni/dei sistemi operativi più comunemente utilizzati. Il primo step consiste sempre nell'connettersi al tuo server tramite SSH o tramite una sessione di connessione all'interfaccia grafica utente (RDP per un VPS Windows). Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni (Administratore/Sudo).

> [!primary]
>
Per quanto riguarda le diverse versioni di distribuzione, ti ricordiamo che la procedura per configurare la tua interfaccia di rete e i nomi di file possono essere stati modificati. In caso di difficoltà o dubbi, consulta la documentazione relativa al tuo sistema operativo.
>

**Si prega di prendere nota della terminologia che verrà utilizzata negli esempi di codice e nelle istruzioni dettagliate contenute in questa guida:**

|Termine|Descrizione|Esempi|
|---|---|---|
|ADDITIONAL_IP|Indirizzo Additional IP attribuito al tuo servizio|203.0.113.0|
|NETWORK_INTERFACE|Nome dell'interfaccia di rete|*eth0*, *ens3*|
|ID|ID dell'alias IP, che inizia con *0* (in base al numero di indirizzi IP aggiuntivi da configurare)|*0*, *1*|

### Debian 10/11

#### Step 1: disattiva la configurazione automatica della rete

Apri il percorso per accedere al file seguente con un editor di testo:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Inserisci la riga seguente, poi registra e lascia l'editor.

```console
network: {config: disabled}
```

La creazione di questo file di configurazione impedisce l'esecuzione automatica delle modifiche apportate alla configurazione della tua rete.

#### Step 2: crea un backup

Per impostazione predefinita, il file di configurazione si trova nel percorso `etc/network/interfaces.d`.

Nel nostro esempio, il nostro file si chiama `50-cloud-init`, quindi facciamo una copia del file `50-cloud-init` utilizzando il seguente comando:

```bash
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

In caso di errore, è possibile annullare le modifiche utilizzando i comandi seguenti:

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Step 3: modifica il file di configurazione

Verifica il nome dell’interfaccia di rete con questo comando:

```bash
ip a
```

Aprire il file di configurazione di rete per modificarlo con il comando seguente:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Per configurare l'indirizzo Additional IP, aggiungere un'interfaccia virtuale o un alias Ethernet all'interfaccia di rete. Nel nostro esempio, la nostra interfaccia si chiama `eth0`, quindi il nostro primo alias è `eth0:0`. Per ogni indirizzo Additional IP che vuoi configurare.

Non modificare le righe esistenti nel file di configurazione, aggiungi il tuo indirizzo Additional IP al file come segue, sostituendo `NETWORK_INTERFACE`, `ID` e `ADDITIONAL_IP` con i tuoi valori:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Se si configura più di un indirizzo Additional IP, il file di configurazione dovrebbe essere simile al seguente:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP1
address ADDITIONAL_IP2
netmask 255.255.255.255
```

**Esempio**

```console
auto eth0:0
iface eth0:0 inet static
address 203.0.113.0
netmask 255.255.255.255
```

#### Step 4: riavvia l'interfaccia

Applica le modifiche utilizzando il seguente comando:

```bash
sudo systemctl restart networking
```

### Debian 12, Ubuntu 20.04 e versioni successive

Il file di configurazione degli indirizzi Additional IP si trova nel file `/etc/netplan/`. In questo esempio, si chiama `50-cloud-init.yaml`.

È consigliabile creare un file di configurazione separato per definire gli indirizzi Additional IP. In questo modo è possibile annullare le modifiche in caso di errore.

#### Step 1: Crea il file di configurazione di rete

Nel nostro esempio, il nostro file si chiama `51-cloud-init.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init.yaml
```

#### Step 2: modifica il file di configurazione

Per verificare il nome della tua interfaccia di rete, esegui questo comando:

```bash
ip a
```

Apri il file di configurazione di rete per modificarlo con questo comando:

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Non modificare le linee esistenti nel file di configurazione. Aggiungi il tuo indirizzo Additional IP aggiungendo un secondo blocco di configurazione per l'interfaccia pubblica, come nell'esempio seguente:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP/32    
```

Se è necessario configurare più di un indirizzo Additional IP, il file di configurazione dovrebbe essere simile al seguente:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32 
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento del file, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura.
>

**Esempio**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.0/32
```

Salva e chiudi il file.

#### Step 3: applicare la nuova configurazione di rete

Per testare la tua configurazione utilizza questo comando:

```bash
sudo netplan try
```

Se è corretta, applicala utilizzando il seguente comando:

```bash
sudo netplan apply
```

Ripeti questa procedura per ogni indirizzo Additional IP.

### CentOS 7, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

Il file di configurazione principale si trova nella cartella `/etc/sysconfig/network-scripts/`. In questo esempio, si chiama `ifcfg-eth0`. Prima di apportare modifiche, verificare il nome effettivo del file nella cartella.

Per ogni indirizzo Additional IP da configurare, crea un file di configurazione separato con le seguenti impostazioni: `ifcfg-NETWORK_INTERFACE:ID`. Dove `NETWORK_INTERFACE` rappresenta l’interfaccia fisica e `ID` rappresenta l’interfaccia di rete virtuale o l’alias ethernet che inizia con un valore di 0. Ad esempio, per la nostra interfaccia chiamata `eth0` il primo alias è `eth0:0`, il secondo alias è `eth0:1`, ecc.

#### Step 1: determina l’interfaccia

Verifica il nome dell’interfaccia di rete con questo comando:

```bash
ip a
```

#### Step 2: crea il file di configurazione

Creare innanzitutto il file di configurazione. Sostituisci `NETWORK_INTERFACE:ID` con i tuoi valori.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```


Successivamente, modifica il file con il contenuto seguente, sostituendo `NETWORK_INTERFACE:ID` e `ADDITIONAL_IP` con i tuoi valori:

```console
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
ONBOOT=yes
```

**Esempio**

```console
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=203.0.113.0
NETMASK=255.255.255.255
BROADCAST=203.0.113.0
ONBOOT=yes
```

#### Step 3: riavvia l’interfaccia

```bash
sudo systemctl restart network
```

#### Per AlmaLinux e Rocky Linux

```bash
sudo systemctl restart Network Manager
```

### Fedora 37 e versioni successive

Fedora ora utilizza i file chiave. In precedenza NetworkManager memorizzava i profili di rete in formato ifcfg in questa directory: `/etc/sysconfig/network-scripts/`. Tuttavia, il formato ifcfg è ora obsoleto. Per impostazione predefinita, NetworkManager non crea più nuovi profili in questo formato. Il file di configurazione è ora disponibile in `/etc/NetworkManager/system-connections/`.

#### Step 1: crea un backup

Nel nostro esempio, il nostro file si chiama `cloud-init-eno1.nmconnection`, quindi facciamo una copia del file `cloud-init-eno1.nmconnection` utilizzando il seguente comando:

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

In caso di errore, è possibile annullare le modifiche utilizzando i comandi seguenti:

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Step 2: modifica il file di configurazione

> [!primary]
> Ti ricordiamo che il nome del file di rete nel nostro esempio potrebbe essere diverso dal tuo. Adatta i comandi al tuo nome di file.
>

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Non modificare le righe esistenti nel file di configurazione, aggiungi l’Additional IP al file come segue, sostituendo `ADDITIONAL_IP/32` con i tuoi valori:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Per configurare due indirizzi Additional IP, la configurazione dovrebbe essere simile alla seguente:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Esempio**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.0/32
```

#### Step 3: riavvia l’interfaccia

Riavvia l’interfaccia:

```bash
sudo systemctl restart Network Manager
```

### cPanel

#### Step 1: accedi alla sezione di gestione degli IP del WHM

Dallo Spazio Cliente WHM, clicca su `IP Functions`{.action} e seleziona `Add a New IP Address`{.action} nel menu a sinistra.

![Add new IP](images/cpanel-alma-1.png){.thumbnail}

#### Step 2: aggiungi le informazioni degli Additional IP

Inserisci il tuo indirizzo Additional IP nel campo "New IP or IP range to add" nel formato "xxx.xxx.xxx.xxx".

Seleziona `255.255.255.255` come subnet mask e clicca su `Submit`{.action}.

![enter new IP information](images/cpanel-alma-2.png){.thumbnail}

> [!warning]
>
> Attenzione: se hai diversi IP da configurare sullo stesso blocco e li aggiungi tutti contemporaneamente, il sistema WHM ti obbligherà a utilizzare la subnet mask `255.255.255.0`. Non è consigliabile utilizzare questa configurazione, è necessario aggiungere ogni IP singolarmente per poter utilizzare la subnet mask appropriata `255.255.255.255`.
>

#### Step 3: verifica la configurazione IP corrente

Nella sezione `IP Functions`{.action}, clicca su `Show or Delete Current IP Addresses`{.action} per verificare che l’indirizzo Additional IP sia stato aggiunto correttamente.

![check configured IP](images/cpanel-alma-3.png){.thumbnail}

### Plesk

#### Step 1: accedere alla gestione IP di Plesk

Nel pannello di configurazione Plesk, seleziona `Tools & Settings`{.action} nella barra laterale sinistra.

![accesso alla gestione degli indirizzi IP](images/pleskip1.png){.thumbnail}

Clicca su `IP Addresses`{.action} con **Tools & Settings**.

#### Step 2: aggiungi le informazioni IP supplementari

In questa sezione, clicca sul pulsante `Add IP Address`{.action}.

![aggiungi informazioni IP](images/Plesk-2024-vps.png){.thumbnail}

Inserisci il tuo indirizzo Additional IP nella forma `xxx.xxx.xxx.xxx/32` nel campo "IP address and subnet mask" e clicca su `OK`{.action}.

![aggiungi informazioni IP](images/Plesk-additional-ip.png){.thumbnail}

#### Step 3: verifica la configurazione IP corrente

Per verificare che l'indirizzo Additional IP sia stato aggiunto correttamente, accedi alla sezione "IP Addresses".

![configurazione IP attuale](images/plesk-final-configuration.png){.thumbnail}

### Windows Server 2016

#### Step 1: verifica la configurazione di rete

Clicca con il tasto destro sul pulsante `Start Menu`{.action} e apri `Run`{.action}.

Clicca su `cmd` e clicca su `OK`{.action} per aprire l'applicazione della riga di comando.

![compromesso](images/vps_win07.png){.thumbnail}

Per recuperare la configurazione IP corrente, inserisci `ipconfig` nel prompt dei comandi.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : openstacklocal
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

#### Step 2: modifica le proprietà IPv4

1. Accedi al menu `Start`{.action}, poi `Control Panel`{.action}, `Network and Internet`{.action}, `Network and Sharing Centre`{.action} e `Change Adapter Settings`{.action} nella barra di sinistra;
2. clicca con il tasto destro su `Ethernet`{.action};
3. clicca su `Properties`{.action};
4. Seleziona `Internet Protocol Version 4 (TCP/IPv4)`{.action} e clicca su `Properties`{.action};
5. Clicca su `Use the following IP address`{.action} e inserisci l'IP principale del tuo server, la subnet mask e il gateway predefinito ottenuto con il comando `ipconfig`{.action} qui sopra. Nella casella "Preferred DNS Server" digitare "213.186.33.99".

![change the ip configuration](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Attenzione: se le informazioni inserite non sono corrette, il server non sarà più raggiungibile. Sarà necessario effettuare le correzioni tramite il KVM.
>

#### Step 3: aggiungi l'indirizzo Additional IP nelle Impostazioni TCP/IP avanzate

Nella nuova finestra, clicca su `Add...`{.action} sotto "IP addresses". Inserisci il tuo indirizzo Additional IP e la subnet mask (255.255.255.255).

![sezione di configurazione avanzata](images/configure-additional-ip.png){.thumbnail}

Per confermare, clicca su `Add`{.action}.

![Additional IP configuration](images/additional-ip-config.png){.thumbnail}

Fare quindi clic su `OK`{.action} per applicare la configurazione.

![Configurazione del trasferimento IP](images/final-configuration.png){.thumbnail}

Si perderà la connessione al server per alcuni secondi.

#### Step 4: verifica la nuova configurazione di rete

Apri il prompt dei comandi (cmd) e inserisci `ipconfig`. La configurazione deve includere il nuovo indirizzo Additional IP.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   IPv4 Address. . . . . . . . . . . : 203.0.113.0
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

### Diagnostica

Per prima cosa, riavvia il server tramite la linea di comando o l'interfaccia utente. Se non riesci ancora a stabilire una connessione tra la rete pubblica e il tuo indirizzo IP dell'alias e sospetti un problema di rete, riavvia il server in [modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue). A questo punto puoi configurare l'indirizzo Additional IP direttamente sul server.

Una volta effettuato l'accesso al server via SSH, esegui questo comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Per testare la connessione, ti basta inviare un ping al tuo indirizzo Additional IP dall'esterno. Se risponde in modalità Rescue, significa probabilmente che si è verificato un errore di configurazione. Se l'IP non funziona ancora, informi i nostri team del supporto creando un [ticket di assistenza](https://help.ovhcloud.com/csm?id=csm_get_help).

## Per saperne di più

[Attiva la modalità Rescue su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.