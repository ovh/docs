---
title: 'Configurare frame Jumbo nella vRack'
slug: 'network-jumbo'
excerpt: 'Come configurare i Jumbo frame nella vRack'
section: 'vRack'
---

**Ultimo aggiornamento: 17/08/2020**

## Obiettivo

I *Jumbo frame* sono frame Ethernet con un payload compreso tra 1500 e 9000 byte. Il loro utilizzo permette di minimizzare il tempo di elaborazione del routing e, nel caso della vRack, consente l’ottimizzazione del traffico.

**Questa guida ti mostra come configurare la distribuzione Linux installata in modo che utilizzi i frame Jumbo all’interno della vRack.**

## Prerequisiti

- Disporre di una [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Avviare una shell con i permessi di root

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

> [!primary]
>
> La dimensione MTU deve essere identica su tutti gli host di una stessa sottorete. 
>

## Procedura

### Verifica la MTU

```sh
ip link show | grep mtu
```

### Definisci una nuova dimensione e testa il comando

```sh
ip link set <nome dell’interfaccia> mtu 9000
```

### Rendi permanente la modifica 

Modifica il file `/etc/network/interface`e aggiungi queste righe:

#### Per un’interfaccia gestita tramite DHCP

```sh
Auto <nome dell’interfaccia>

Iface <nome dell’interfaccia> inet dhcp

  Pre-up /sbin/ip link set dev <nome dell’interfaccia> up mtu 9000
```

#### Per un’interfaccia con IP statico

```sh
Auto <nome dell’interfaccia>

Iface <nome dell’interfaccia> inet static
  mtu 9000
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
