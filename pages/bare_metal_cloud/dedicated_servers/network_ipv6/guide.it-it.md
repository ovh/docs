---
title: 'Configurare IPv6 sur un server dedicato'
excerpt: 'Scopri come configurare indirizzi IPv6 sulla nostra infrastruttura'
updated: 2024-07-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La versione 6 del Protocollo Internet (IPv6) è l’ultima versione del Protocollo Internet (IP). È stata studiata per sopperire alla prevista saturazione degli indirizzi del suo predecessore, IPv4, utilizzando indirizzi a 128-bit invece che a 32-bit. I server di gamma High Grade, Scale e Advance (da luglio 2024) vengono consegnati con un blocco /56 IPv6, mentre i vecchi server con un blocco/64 IPv6. Un server consegnato con un blocco /56 IPv6, permette di disporre fino a 18 quintilioni di indirizzi IP.

**Questa guida spiega con vari esempi come configurare indirizzi IPv6 sul tuo server.**

> [!warning]
> OVHcloud fornisce servizi la cui gestione e configurazione sono sotto la tua completa supervisione. Pertanto spetta a te garantire che tali servizi funzionino correttamente.
>
> Questa guida ti mostra come effettuare le operazioni più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni, consulta la sezione “Per saperne di più” della guida.
>

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) nel tuo account OVHcloud.
- Tutti i dati del tuo IPv6 (prefisso, gateway, etc.).
- Una conoscenza basilare di reti e [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

> [!warning]
> Ti ricordiamo che i server Kimsufi sono forniti con un solo blocco IPv6 (/128). L'IPv6 sarà configurato automaticamente al momento dell'installazione del sistema operativo.
>

## Procedura

Le sezioni seguenti contengono le configurazioni delle distribuzioni che attualmente offriamo e delle distribuzioni/sistemi operativi più comunemente utilizzati. Il primo passo è sempre quello di connettersi al server utilizzando SSH o una sessione di connessione GUI (RDP per un server Windows).

Sui server dedicati, il primo IPv6 viene dichiarato come 2607:5300:xxxx:xxxx::/64. Ad esempio, se abbiamo assegnato al vostro server l'intervallo IPv6: `2607:5300:abcd:efgh::/64`, il primo IPv6 sul vostro server è: `2607:5300:abcd:efgh::/64`.

Di default, il primo IPv6 è configurato sulla maggior parte delle distribuzioni Linux recenti che offriamo all'installazione, quindi il gateway è già incluso nel file di configurazione. Nella maggior parte dei casi, non sarà necessario aggiungerlo manualmente.

Prima di iniziare, e al fine di utilizzare la stessa terminologia in tutta la documentazione, vi invitiamo a dare un'occhiata alla tabella seguente. Essa si riferisce ai termini che utilizzeremo in questa documentazione:

|Termine|Descrizione|Esempio|
|---|---|---|
|YOUR_IPV6|Indirizzo IPv6 del blocco IPv6 assegnato al server|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Questo è il prefisso (o *netmask*) del tuo blocco IPv6, generalmente di 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Gateway del blocco IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff o fe80::1|

Nei nostri esempi, utilizzeremo l’editor di testo `nano`. È possibile utilizzare l'editor di testo desiderato.

### Gateway predefinito

Il primo step consiste nel recuperare il gateway IPv6 assegnato al tuo server. È possibile utilizzare due metodi. Prosegui nella lettura di questa guida in base alla modalità che intendi utilizzare.

- [Ottenere informazioni sulla rete tramite lo Spazio Cliente OVHcloud](#viacontrolpanel).
- [Ottenere informazioni sulla rete tramite API](#viaapi).

#### Dallo Spazio Cliente OVHcloud <a name="viacontrolpanel"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server dedicati`{.action}.


Il gateway IPv6 assegnato al tuo server è visualizzato nella sezione `Rete` della scheda `Informazioni generali`{.action}. Una volta effettuata la copia, passa allo [Step 2: applica la configurazione IPv6](#applyipv6).


![configureipv6](images/ipv6_information.png){.thumbnail}


#### Tramite le API OVHcloud <a name="viaapi"></a>

Un altro modo per recuperare le informazioni di rete del tuo server è [utilizzare l’API OVHcloud](/pages/manage_and_operate/api/first-steps).


Eseguite la chiamata API che segue, indicando il nome interno del server (esempio: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network


Ti ricordiamo che gli "0" di testa possono essere eliminati in un gateway IPv6.

Esempio:

IPv6_GATEWAY: `2607:5300:60:62FF:00FF:00FF:00FF:00FF` può anche essere scritto come `2607:5300:60:62FF:FF:FF:FF`.

> [!warning]
> 
> Prima di modificare un file di configurazione, crea sempre un backup dell'originale per poterlo ripristinare in caso di problemi. 
> 

### Sistemi operativi Debian e basati su Debian (Debian 12 escluso)

La configurazione di esempio qui sotto è basata su Debian 11 (Bullseye).

> [!warning]
>
> Prima di seguire i passaggi qui indicati, consigliamo vivamente di disabilitare l’auto-configurazione dell’IPv6 e gli annunci del router per non incorrere in problemi noti. Puoi farlo aggiungendo le righe che seguono al tuo file `sysctl.conf`, che trovi in /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Dopodiché, puoi applicare queste regole con il comando che segue: `sudo sysctl -p`.
> 

#### Step 1: Utilizza l’SSH per connetterti al tuo server

```sh
ssh user@serverIP
```

#### Step 2: Crea un backup

Il file di configurazione di rete del server si trova in `/etc/network/interfaces.d`. Prima di continuare, creare un backup del file utilizzando uno dei comandi seguenti:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Step 3: Modifica il file di configurazione di rete.

Non modificare le righe esistenti nel file di configurazione. Aggiungi le linee per la configurazione IPv6, sostituendo `YOUR_IPv6` e `IPv6_PREFIX` con i tuoi valori. In questo esempio, l’interfaccia di rete è chiamata `eth0`. L’interfaccia del tuo server può essere diversa.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address YOUR_IPv6
    netmask IPv6_PREFIX

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Debian 10**

```console
iface eth0 inet6 static 
    address YOUR_IPv6
    netmask 64
post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

È possibile aggiungere ulteriori indirizzi IPv6 con le seguenti righe: `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, ecc.

Per assicurarti che l’IPv6 sia attivo o disattivato quando l’interfaccia eth0 è attiva o disattiva, aggiungi questa riga alla configurazione:

`down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
`down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`

**Esempio di configurazione:**

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/56
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Aggiunta di indirizzi IPv6 aggiuntivi:

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64
    up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
    up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Step 4: Salva il file e applica le modifiche

Salva le tue modifiche sul file, quindi riavvia la rete o il server per applicare le modifiche.

```sh
sudo /etc/init.d/networking restart
```

#### Step 5: Testa la connettività IPv6

Per testare la connettività IPv6, esegui il comando:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Se non sei in grado di testare (effettuare il ping di) questo indirizzo IPv6, verifica la tua configurazione e riprova. Accertati anche che la macchina da cui stai effettuando il test sia connessa all’IPv6. Se ancora non funziona, testa la tua configurazione in [Modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 38 e versioni successive

La configurazione di esempio qui sotto è basata su Fedora 39.

Fedora ora utilizza i file chiave (*keyfiles*).
In precedenza Fedora utilizzava i profili di rete archiviati da NetworkManager in formato ifcfg nella directory `/etc/sysconfig/network-scripts/`.<br>
A causa della riduzione di valore del ifcfg, NetworkManager non crea più i nuovi profili in questo formato per impostazione predefinita. Il file di configurazione è ora disponibile in `/etc/NetworkManager/system-connections/`.

In questo esempio, il nostro file si chiama `cloud-init-eno1.nmconnection`.

#### Step 1: Utilizza l’SSH per connetterti al tuo server

```sh
ssh user@serverIP
```

#### Step 2: Crea un backup

> [!primary]
>
> Tieni presente che il nome del file di rete nel nostro esempio potrebbe essere diverso dal tuo. Sostituiscilo con il nome del tuo file.
>

Ti consigliamo di effettuare una copia del file sorgente per poter ripristinare la versione precedente se necessario:

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Step 3: Modifica il file di configurazione di rete

Modificare il file aggiungendo le righe seguenti, senza modificare il file originale. Sostituire i valori generici (`YOUR_IPV6` e `IPv6_PREFIX`) con i valori specifici. Per evitare confusione, è stata omessa anche la configurazione IPv4, mentre la configurazione IPv6 viene eseguita nello stesso file di configurazione.

```sh
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
dns=2001:41d0:3:163::1;
```

Se è necessario configurare più indirizzi IPv6, la configurazione dovrebbe essere simile alla seguente:

```sh
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
dns=2001:41d0:3:163::1;
```

**Esempio di configurazione:**

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

In seguito modificheremo il file di configurazione:

```sh
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Aggiunta di indirizzi IPv6 aggiuntivi:

```sh
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
address3=2607:5300:adce:f2cd::2/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Step 4: Salva il file e applica le modifiche

Salva le tue modifiche sul file, quindi riavvia la rete o il server per applicare le modifiche.

```sh
sudo systemctl restart NetworkManager
```

#### Step 5: Testa la connettività IPv6

Per testare la connettività IPv6, esegui il comando:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Se non sei in grado di testare (effettuare il ping di) questo indirizzo IPv6, verifica la tua configurazione e riprova. Accertati anche che la macchina da cui stai effettuando il test sia connessa all’IPv6. Se ancora non funziona, testa la tua configurazione in [Modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).


### Debian 12, Ubuntu 20.04 e versioni successive

La configurazione di esempio riportata di seguito si basa su Ubuntu 22.04 (Jammy Jellyfish).

I file di configurazione di rete si trovano nella directory `/etc/netplan/`. Di default, il file di configurazione principale è chiamato `50-cloud-init.yaml`.

#### Step 1: Utilizza l’SSH per connetterti al tuo server

```sh
ssh user@serverIP
```

#### Step 2: Crea il file di configurazione di rete

L'approccio migliore è quello di creare un file di configurazione separato con estensione .yaml per configurare gli indirizzi IPv6 nella directory `/etc/netplan/`. In questo modo, è possibile ripristinare facilmente le modifiche in caso di errore.

Nel nostro esempio, il file si chiama `51-cloud-init-ipv6.yaml`:

```sh
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### Step 3: Modifica il file di configurazione di rete.

Servendoti di un editor di testo, modificare il file `51-cloud-init-ipv6.yaml` aggiungendo le righe seguenti alle sezioni interessate, come indicato nell'esempio qui sotto.

Sostituisci i valori generici (`YOUR_IPV6`e `IPV6_PREFIX`) e l'interfaccia di rete (se il tuo server non utilizza **eno3**) con i valori specifici.

```yaml
network:
    version: 2
    ethernets:
         eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPV6_PREFIX
```

Se è necessario configurare più indirizzi IPv6, la configurazione dovrebbe essere simile alla seguente:


```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
              - ADDITIONAL_IPV6_1/IPv6_PREFIX
              - ADDITIONAL_IPV6_2/IPv6_PREFIX
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento del file, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura. E' necessario solo il tasto spazio. 
>

**Esempio di configurazione:**

```sh
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

In seguito modificheremo il file di configurazione:

```yaml
network:
    version: 2
    ethernets:
          eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
```

Aggiunta di indirizzi IPv6 aggiuntivi:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
```

#### Step 4: Testare e applicare la configurazione

Per testare la configurazione esegui questo comando:

```sh
sudo netplan try
```

Se è corretta, applicala utilizzando il seguente comando:

```sh
sudo netplan apply
```

#### Step 5: Testa la connettività IPv6

Per testare la connettività IPv6, esegui il comando:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### CentOS 7, Alma Linux (8 & 9) e Rocky Linux (8 & 9)

La configurazione di esempio qui sotto è basata su CentOS 7.

Il file di configurazione di rete si trova nella directory `/etc/sysconfig/network-scripts`. Nel nostro esempio, si chiama `ifcfg-eth0`.

#### Step 1: utilizza SSH per connetterti al tuo server

```sh
ssh user@serverIP
```

#### Step 2: Crea un backup

> [!primary]
>
> Tieni presente che il nome del file di rete nel nostro esempio potrebbe essere diverso dal tuo. Adattalo al tuo nome di file.
>

Prima di tutto, fai una copia del file di configurazione, in modo da poter tornare indietro in qualsiasi momento:

```sh
sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

#### Step 3: Modifica il file di configurazione di rete

Nel file di configurazione aperto, aggiungere le righe seguenti se mancano. Sostituire i valori generici (`YOUR_IPv6`, `IPV6_GATEWAY` e `IPV6_PREFIX`) con i valori specifici. Inoltre, abbiamo omesso la configurazione IPv4 per evitare confusione, ma la configurazione IPv6 viene eseguita nello stesso file di configurazione.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Se sulla stessa macchina necessiti di più indirizzi IPv6, aggiungili nella riga `IPV6ADDR_SECONDARIES`, separandoli con uno spazio:

```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Esempio di configurazione:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

In seguito modificheremo il file di configurazione:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Aggiunta di indirizzi IPv6 aggiuntivi:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
```

#### Step 4: Salva il file e applica le modifiche

Salvare le modifiche nel file e riavviare la rete con uno dei comandi seguenti:

```sh
sudo systemctl restart network
```

**Per Alma Linux e Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

È inoltre possibile riavviare il server per applicare le modifiche.

#### Step 5: Testa la connettività IPv6

Per testare la connettività IPv6, esegui il comando:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### ### Windows Server 2016 e versioni successive 

#### Step 1: Utilizza l’RDP per connetterti al tuo server

Per ulteriori informazioni fai riferimento a [questa guida](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#accedi-al-tuo-server).

#### Step 2: Apri la configurazione di rete del tuo server

Innanzitutto, clicca sull’icona della rete nell’area notifiche per andare al `Centro connessioni di rete e condivisione`{.action}.

![Centro connessioni di rete e condivisione](images/ipv6_network_sharing_center.png){.thumbnail}

Clicca su `Modifica impostazioni scheda di rete`{.action}.

![Modifica impostazioni scheda di rete](images/ipv6_change_adapter_settings.png){.thumbnail}.

Clicca con il tasto destro sulla tua scheda di rete, quindi su `Proprietà`{.action}.

![Proprietà scheda di rete](images/ipv6_network_adapter_properties.png){.thumbnail}

Seleziona `Internet Protocol Versione 6`{.action}, quindi clicca su `Proprietà`{.action}.

![Proprietà](images/ipv6_properties.png){.thumbnail}

#### Step 3: Modifica la configurazione di rete 

Inserisci la configurazione IPv6 (`IPv6 address` e `Default gateway`), spunta la casella `Conferma le impostazioni all’uscita` e clicca sul pulsante `OK`{.action} per confermare le modifiche.

![Proprietà](images/ipv6_configuration.png){.thumbnail}

### Diagnosi

Avete configurato il vostro IPv6 ma non funziona nulla? 

Esiste una semplice procedura per determinare se il difetto è nella configurazione o nella rete OVHcloud.

Innanzitutto, [metti il tuo server in modalità di salvataggio] (/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Quindi utilizzare i seguenti comandi per configurare il proprio IPv6 in modo non persistente, sostituendo "YOUR_IPV6", "IPV6_PREFIX" e "IPV6_GATEWAY" con le proprie informazioni:

Se dopo aver testato la tua connessione riscontri ancora dei problemi, crea una richiesta di assistenza per l’esame delle tue configurazioni. È necessario fornire quando segue:

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Testare nuovamente la rete con un ping6, ad esempio:

```sh
ping6 ipv6.google.com
```

Se il server risponde, è probabile che uno degli step della configurazione iniziale non sia stato seguito accuratamente.

In ogni caso, non esitare a [contattare il nostro team di supporto](https://help.ovhcloud.com/csm?id=csm_get_help) per richiedere una revisione delle configurazioni. Sarà necessario fornire:

- Il nome e la versione del sistema operativo che utilizzi sul tuo server;
- Il nome e la directory del file di configurazione di rete;
- Il contenuto di quel file. 

## Per saperne di più

Partecipa alla nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
