---
title: 'Configurare un blocco di indirizzi IP nella vRack'
slug: configurare-blocco-ip-nella-vRack
excerpt: 'Scopri come configurare un blocco di indirizzi IP nella vRack'
section: vRack
---

**Ultimo aggiornamento: 26/07/2022**

## Obiettivo

Oltre a consentire un indirizzamento IP privato, la [vRack](https://www.ovh.it/soluzioni/vrack/){.external} permette di dirigere il traffico IP pubblico tramite la porta vRack del server attraverso un blocco di indirizzi IP pubblici.

**Questa guida ti mostra come configurare un blocco di indirizzi IP pubblici da utilizzare con la vRack.**


## Prerequisiti

- Disporre di un blocco pubblico di indirizzi IP nel proprio account, con almeno quattro indirizzi
- Aver selezionato un intervallo di indirizzi IP privati
- Disporre di un [server compatibile con la vRack](https://www.ovh.it/server_dedicati/){.external}
- Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Essere connesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

> [!primary]
>
> In questa guida utilizzeremo, a titolo di esempio, un blocco IP di 46.105.135.96/28 e l’interfaccia di rete secondaria `eth1`{.action} (dedicata alla vRack).
>

### Aggiungi il blocco IP alla vRack

> [!warning]
>
> Quando un blocco IP viene aggiunto alla vRack, non è più collegato a un server fisico.
>
> Questa configurazione permette di configurare gli IP di uno stesso blocco su più server, a condizione che questi server siano tutti nella stessa vRack del blocco IP. Il blocco IP deve avere almeno 2 indirizzi IP utilizzabili o più per farlo.
>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e clicca su `Network`{.action}. In seguito, apri il menu `vRack`{.action}

Seleziona la tua vRack nella lista per visualizzare la lista dei servizi ammissibili. Clicca sul blocco IP che vuoi aggiungere alla vRack e clicca su `Aggiungi`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Configura un indirizzo IP utilizzabile

Nel caso della vRack, il primo, il penultimo e l’ultimo indirizzo di un determinato blocco IP sono sempre riservati rispettivamente all’indirizzo di rete, al gateway di rete e al *broadcast* di rete. Questo significa che il primo indirizzo utilizzabile è il secondo indirizzo del blocco, come indicato di seguito:

```sh
46.105.135.96   # Riservato : indirizzo di rete
46.105.135.97   # Primo IP utilizzabile
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
46.105.135.109   # Ultimo IP utilizzabile
46.105.135.110   # Riservato : gateway di rete  
46.105.135.111   # Riservato : broadcast di rete
```

Per configurare il primo indirizzo IP utilizzabile, è necessario modificare il file di configurazione di rete come indicato qui di seguito: In questo esempio, utilizziamo la <i>subnet mask </i>**255.255.255.240**.

> [!primary]
>
> La <i>subnet mask</i> utilizzata in questo esempio è adatta al nostro blocco IP, ma può variare in base alla dimensione del blocco. Nel momento in cui acquisti un blocco IP, ricevi un’email con le indicazioni riguardo alla <i>subnet mask</i> da utilizzare.
>


```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Crea una nuova tabella di routing IP

Come prima cosa è necessario scaricare e installare **iproute2**, un pacchetto per configurare manualmente il routing IP sul server. Pertanto, stabilisci una connessione SSH con il tuo server e inserisci il seguente comando:



```sh
apt-get install iproute2
```

Successivamente, è necessario creare una nuova rotta IP per la vRack. Per aggiungere una nuova regola di traffico, modifica il file come indicato di seguito:

```sh
/etc/iproute2/rt_tables

# # #
# reserved values
# # #
255	local
254	main
253	default
0	unspec
# # #
local
# # #
#1	inr.ruhep
1 vrack
```

### Modifica il file di configurazione di rete

> [!primary]
>
> In questo esempio, il file di configurazione di rete si trova in `/etc/network/interfaces`{.action}. A seconda del sistema operativo utilizzato, questo file può essere situato altrove. In caso di dubbi, consulta la documentazione ufficiale della tua distribuzione.
>

Infine, non ti resta che modificare il file di configurazione di rete per tenere conto della nuova regola di traffico e instradare il traffico vRack attraverso l’indirizzo di gateway di rete **46.105.135.110**.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Riavvia il server per applicare tutte le modifiche.


## Per saperne di più

[Configurare due o più server dedicati nella vRack](https://docs.ovh.com/it/dedicated/configurare-server-dedicati-vrack/){.external}

[Creare due o più VLAN nella vRack](https://docs.ovh.com/it/dedicated/creare-vlan-vrack/){.external}

[Configurare la vRack tra un’istanza Public Cloud e un server dedicato](https://docs.ovh.com/it/dedicated/configurare-vrack-tra-pci-e-server-dedicato/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.