---
title: 'Configurare un NIC per il servizio OVHcloud Link Aggregation in CentOS 7'
slug: ola-centos7
excerpt: 'Attivare l''opzione OVHcloud Link Aggregation sul tuo server CentOS 7'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 11/11/2019**

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L’attivazione dell’opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile.

**Questa guida ti mostra come associare i Network Interface Controller (NIC) per utilizzarli con il servizio OLA su un sistema CentOS 7.**

## Prerequisiti

[Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](https://docs.ovh.com/it/dedicated/ola-manager){.external}

## Procedura

Il tipo di configurazione disponibile in OLA per i nostri NIC non permette di accedere al server in SSH. Per stabilire la connessione alla macchina è quindi necessario utilizzare IPMI. Per attivare il tool effettua il login allo [Spazio Cliente](https://www.ovh.com/manager/){.external}, seleziona il server nel menu a sinistra e clicca sulla scheda `IPMI`{.action}.

![remote_kvm](images/remote_kvm.png){.thumbnail}

Clicca sul pulsante `Da una applet Java (KVM)`{.action}. Verrà scaricato un programma JNLP: aprilo e utilizza le credenziali associate al server per accedere.

Se utilizzi un template OVHcloud, il nome delle schede di rete assegnato di default sarà **ethX** o **enoX**. In caso contrario è possibile trovare i nomi delle interfacce eseguendo questo comando:

```bash
ip a
```

> [!primary]
>
> Il risultato restituito mostrerà diverse "interfacce". In caso di difficoltà nel determinare i propri NIC fisici, è utile considerare che gli indirizzi IP pubblici del server sono associati di default alla prima interfaccia.
>

Una volta individuati i nomi dei due NIC sarà possibile configurarne il bonding nel sistema operativo. Il primo step consiste nel definire un'interfaccia bond creando il file di configurazione in un editor di testo con questo comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

Si aprirà un file di testo vuoto. Per configurare l’interfaccia bond, inserisci queste righe:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> È possibile utilizzare qualsiasi indirizzo IP privato e sottorete.
>

Una volta verificata la correttezza delle informazioni inserite, salva e esci dal file. A questo punto è necessario configurare entrambe le interfacce fisiche. Di default, sui server OVHcloud solo **eth0** avrà un file di configurazione. Per aprirlo, utilizza questo comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

Il risultato predefinito sarà di questo tipo:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Gli indirizzi IP saranno diversi per ogni server.
>

Modifica il file per ottenere questo risultato:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> Per recuperare l'indirizzo hardware (MAC address) del NIC è possibile utilizzare il comando `ip a` utilizzato in precedenza: l’informazione corrisponde ai numeri accanto a "link/etere" nell'output.
>

Il simbolo *#* iniziale indica che il server ignorerà la riga corrispondente durante la lettura del file. È quindi possibile non tenere in considerazione queste righe durante la creazione del file di interfaccia per *eth1*. Per creare la configurazione *eth1*, utilizza il comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Questa volta il file sarà vuoto, quindi sarà necessario aggiungere questo contenuto al file:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

A questo punto riavvia il servizio di rete con il comando:

```bash
systemctl restart network
```

Per testare il corretto funzionamento della nuova interfaccia creata, effettua il ping di un altro server presente nella stessa vRack. Se funziona, la procedura è conclusa. In caso contrario, verifica nuovamente la configurazione o prova a riavviare il server.

## Conclusioni

OVHcloud offre ai clienti la libertà e la flessibilità di sfruttare il potenziale dell'hardware in modo che si adatti alle proprie esigenze. A questo punto dovresti essere in grado di configurare OVHcloud Link Aggregation (OLA) sul tuo sistema CentOS 7 e utilizzare le Network Interface Controller come interfacce private aggregate.