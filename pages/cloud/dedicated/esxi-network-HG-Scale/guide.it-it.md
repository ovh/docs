---
title: Configurare la rete su ESXi sulle gamme High Grade & SCALE
slug: esxi-network-hg-scale
excerpt: Come configurare la rete su ESXi sulle gamme High Grade & SCALE
section: Utilizzo avanzato
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 09/05/2022**

## Obiettivo

Sulle gamme High Grade & SCALE, il funzionamento degli Additional IP in modalità *bridged* (tramite MAC virtuali) non è possibile. È quindi necessario configurare gli Additional IP in modalità routing o tramite la vRack.

> [!primary]
>
> Ad oggi, la documentazione include solo la soluzione tramite la vRack.
>

**Questa guida ti mostra come configurare la rete su ESXi.**

## Prerequisiti

* Disporre di un blocco pubblico di indirizzi IP nel proprio account, con almeno quattro indirizzi. Il blocco deve essere puntato verso la vRack.
* Aver selezionato un intervallo di indirizzi IP privati
* Disporre di un [server dedicato compatibile con la vRack](https://www.ovhcloud.com/it/bare-metal/){.external}
* Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>
> Su queste gamme di server, ci sono 4 schede di rete. Per sfruttare tutta la banda passante, è necessario creare degli aggregati. La nostra documentazione si basa su questi aggregati di schede di rete.
>
> **Per contro, ESXi non supporta nativamente il LACP.**
> Nessuna ridondanza sarà quindi disponibile. Non sarà inoltre possibile gestire tutta la banda passante delle schede di rete del tuo server.
>

> [!warning]
>
> Nell'interfaccia grafica ESXi è presente un difetto noto. L'esecuzione di questi passaggi in questa interfaccia comporterebbe quindi una configurazione non funzionale. Per applicare questa configurazione è necessario utilizzare l'interfaccia della linea di comando in SSH.
>

### Additional IP via vRack

Per prima cosa, aggiungi il tuo blocco pubblico di indirizzi IP alla vRack. Accedi alla sezione `Bare Metal Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e apri il menu `vRack`{.action}.

Seleziona la tua vRack nella lista per visualizzare la lista dei servizi ammissibili. Clicca sul blocco pubblico di indirizzi IP che vuoi aggiungere alla vRack e poi clicca su `Aggiungi`{.action}.

#### Configurazione iniziale

![schema esxi](images/schema_esxi_A01_2022.png){.thumbnail}

In questo esempio:

* le interfacce pubbliche sono `vmnic2` e `vmnic3`;
* le interfacce private sono su `vmnic0` e `vmnic1`.

Un primo vSwitch esiste ma comporta solo un'interfaccia `vmnic2`.

> [!primary]
>
> Verifica che la tua configurazione sia analoga. Le informazioni relative ai MAC e alle interfacce pubbliche o private sono disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o tramite l'API OVHcloud.
>

#### Spiegazioni

Ora è necessario:

* creare l'aggregato sul vSwitch pubblico;
* creare la vSwitch per la vRack;
* creare un gruppo di porti;
* creare le VM utilizzando il nuovo gruppo di porte come interfaccia di rete.

#### Configura ESXi

> [!primary]
>
> Le operazioni devono essere effettuate in modalità comandi (shell) e non dall'interfaccia grafica (GUI) di ESXi.
>

##### **Creazione dell'aggregato in modalità LACP sul vSwitch che porta le interfacce pubbliche**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Risultato:

![schema esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### **Creazione di vSwitch e dell'aggregato per la vRack sulle interfacce private**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Risultato:

![schema esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Configurazione della VM**

Le VM devono avere in interfaccia di rete il nuovo gruppo di porte `portgroupvRackvSwitch`.

![schema esxi](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Creazione di un gruppo di porte per il nuovo vSwitch "vRackvSwitch"**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Configura un indirizzo IP utilizzabile

Nel caso della vRack, il primo e gli ultimi due indirizzi di un determinato blocco IP sono sempre riservati rispettivamente all'indirizzo della rete, al suo gateway e al suo indirizzo di *broadcast*. Questo significa che il primo indirizzo utilizzabile è il secondo indirizzo del blocco, come indicato di seguito:

```sh
46.105.135.96 # Riservato : indirizzo della rete
46.105.135.97 # Primo indirizzo utilizzabile
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Ultimo indirizzo utilizzabile
46.105.135.110 # Riservato : passerella di rete
46.105.135.111 # Riservato : indirizzo di broadcast di rete
```

Per configurare il primo indirizzo IP utilizzabile, è necessario modificare il file di configurazione di rete come indicato qui di seguito: In questo esempio, utilizziamo la subnet mask **255.255.255.240**.

> [!primary]
>
> La subnet mask utilizzata in questo esempio è adatta al nostro blocco IP, ma può variare in base alla dimensione del blocco. Nel momento in cui acquisti un blocco IP, ricevi un’email con le indicazioni riguardo alla subnet mask da utilizzare.
>

#### Esempio di configurazione di una VM cliente con Debian

Contenuto del file `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
