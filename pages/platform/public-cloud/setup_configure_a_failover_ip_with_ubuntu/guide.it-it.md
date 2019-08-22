---
title: Configura un IP Failover su Ubuntu
excerpt: Configura un IP Failover su Ubuntu
slug: configura_un_ip_failover_su_ubuntu
legacy_guide_number: g2043
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
vi /etc/network/interfaces
```


- Alla fine del file, aggiungi:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parametri|Valori|
|---|---|
|X|numero dell'interfaccia principale (in genere eth0)|
|xxx.xxx.xxx.xxx|IP Failover da configurare|
|Y|numero dell'alias (parti da 0, poi 1, ecc... in base al numero di IP da configurare)|


Se devi aggiungere più IP, utilizza sempre gli stessi parametri incrementando il valore di Y (numero dell'alias).


## Riavvia il servizio di rete

- Per riavviare i servizi di rete, utilizza il comando:

```
service networking restart
```





## 

- [Trasferisci un IP FailOver]({legacy}1890)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

