---
title: Configura un IP Failover su CentOS
excerpt: Configura un IP Failover su CentOS
slug: configura_un_ip_failover_su_centos
legacy_guide_number: g2044
---


## 
Per configurare un indirizzo IP Failover sulle tue istanze Public Cloud, ad esempio se sulla tua istanza ospiti più siti o progetti internazionali, acquista un indirizzo IP Failover o importalo da un altro servizio OVH.

Gli IP Failover non vengono configurati automaticamente.

Questa guida ti mostra come configurare l'interfaccia di rete della tua istanza per poter aggiungere un indirizzo IP Failover.


## Requisiti necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775)
- Un indirizzo IP Failover




## Configura l'interfaccia

- Modifica il file di configurazione utilizzando questi parametri:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parametri|Valori|
|---|---|
|X|numero dell'interfaccia principale (in genere eth0)|
|Y|numero dell'alias (parti da 0, poi 1, ecc... in base al numero di IP da configurare)|



- Aggiungi nel file:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Riavvia il servizio di rete

- Per riavviare i servizi di rete, utilizza il comando:

```
ifup ethX:Y
```





## 

- [Trasferisci un IP FailOver]({legacy}1890)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

