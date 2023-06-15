---
title: "Come configurare il NIC handle per aggregare i link OVHcloud in SLES 15"
slug: ola-sles15
excerpt: Attiva OVHcloud Link Aggregation sul tuo server SLES 15
section: Utilizzo avanzato
order: 4
updated: 2023-03-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 07/03/2023**

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è sviluppata dai nostri team per aumentare la disponibilità dei server e migliorare l'efficacia delle connessioni di rete. In pochi click è possibile aggregare le schede di rete e rendere ridondanti i collegamenti di rete. Ciò significa che in caso di guasto di un collegamento, il traffico viene automaticamente reindirizzato verso un altro collegamento disponibile.

**Questa guida ti mostra come raggruppare i tuoi NIC (Network Interface Controller) per utilizzarli con il servizio OLA su SLES 15.**

## Prerequisiti

- [Aver configurato il NIC handle per la funzionalità OVHcloud Link Aggregation dallo Spazio Cliente OVHcloud](https://docs.ovh.com/it/dedicated/ola-manager/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Dal momento che i nostri NIC su OLA sono configurati privatamente, non è possibile connettersi in SSH al server. Per accedere al server è quindi necessario utilizzare il tool IPMI.

accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e selezionando la scheda `Bare Metal Cloud`{.action}. Seleziona il tuo server nella lista sotto la rubrica `Server dedicati`{.action}.

Clicca sulla scheda `IPMI`{.action} (1) e poi sul pulsante `Da un applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Verrà scaricato un software JNLP. Avvia il software per accedere all'IPMI. Accedi utilizzando le informazioni di identificazione associate al server.

Di default, utilizzando un modello OVHcloud, i NIC saranno nominati *eth1* e *eth2*. Se non utilizzi un modello OVHcloud, puoi recuperare i nomi delle interfacce utilizzando il seguente comando:

```bash
ip a
```

> [!primary]
>
> Il comando restituirà diverse "interfacce". In caso di difficoltà nell'identificazione dei NIC fisici, la prima interfaccia avrà sempre l'indirizzo IP pubblico del server assegnato di default.
>

Una volta identificati i nomi dei tuoi due NIC-handle, è necessario creare il NIC-bonding o aggregare i link sul sistema operativo. Per effettuare questa operazione, crea il file di interfacce sull'editor di testo scelto utilizzando il seguente comando:

```bash
vi /etc/sysconfig/network/ifcfg-bond0
```

Aprirà un file di testo vuoto. Per configurare l'interfaccia di aggregazione, inserisci queste righe nel file di testo:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> Puoi utilizzare qualsiasi indirizzo IP o sottorete privata che desideri.
> Se il tuo server possiede più di 2 interfacce di rete, puoi aggiungerle nella configurazione inserendo il numero del parametro `BONDING_SLAVE_`, ad esempio `BONDING_SLAVE_2='eth3`.
>

Salva e lascia il file una volta confermato che l'informazione è corretta.  A questo punto è necessario configurare le due interfacce fisiche. Di default, su un server OVHcloud solo *eth1* dispone di un file di configurazione. Apri il comando:

```bash
vi /etc/sysconfig/network/ifcfg-eth1
```

Di default, il file mostrerà questo testo:

```bash
# Created by cloud-init on instance boot automatically, do not edit.
#
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> Gli indirizzi IP saranno differenti per ogni server.
>

È necessario modificare questo file per visualizzare questo testo:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> L'indirizzo hardware (indirizzo MAC) del NIC handle può essere recuperato utilizzando il comando `ip utilizzato in precedenza`. Sarà il numero accanto a `link/ether` del risultato visualizzato.
>

L'*#* davanti a una linea indica che il server non saprà questa linea durante la lettura del file. significa che queste righe non saranno prese in carico durante la creazione del file di interfaccia per *eth1*.

Per creare il file di configurazione *eth2*, utilizza questo comando:

```bash
vi /etc/sysconfig/network/ifcfg-eth2
```

Questa volta il file sarà vuoto. Aggiungi questo contenuto:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Riavvia il servizio di rete utilizzando questo comando:

```bash
wicked ifreload all
```

Per verificare che questa aggregazione funzioni, effettua un ping verso un altro server sulla stessa vRack. Se l'operazione funziona, il processo di configurazione è completato. In caso contrario, verifica la configurazione o prova a riavviare il server.

Per verificare le impostazioni utilizzate dall'interfaccia ifcfg-bond0, utilizza questo comando:

```bash
/proc/net/bonding/bond0
```

## Per saperne di più

[Configurare l'aggregazione dei link OLA nel tuo Spazio Cliente](https://docs.ovh.com/it/dedicated/ola-manager/).

[Come configurare il NIC handle per aggregare i link OVHcloud su Debian 9](https://docs.ovh.com/it/dedicated/ola-debian9/).

[Come configurare il NIC handle per l'aggregazione di link OVHcloud con CentOS 7](https://docs.ovh.com/it/dedicated/ola-centos7/).

[Come configurare il tuo NIC handle per aggregare i link OVHcloud con Windows Server 2019](https://docs.ovh.com/it/dedicated/ola-w2k19/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
