---
title: Configura un IP Failover a caldo
excerpt: Configura un IP Failover a caldo
slug: configura_un_ip_failover_a_caldo
legacy_guide_number: g1884
---


## 
Per utilizzare temporaneamente un indirizzo IP Failover non è necessario modificare il tuo file di configurazione di rete, è sufficiente una semplice riga di comando.

Questa guida ti mostra come configurare un IP Failover sulla tua istanza (solo con distribuzioni Linux).
Questa configurazione non è permanente: in caso di riavvio del tuo server virtuale, la configurazione dell'IP viene cancellata. Per impostare una configurazione permanente, consulta la guida:

- [Configura un IP Failover permanente]({legacy}1885).




## Requisiti necessari

- Possedere un'istanza Public Cloud
- Aver importato un IP Failover verso il progetto Public Cloud
- Essere connesso all'istanza via SSH


In questa guida, l'IP Fail Over è indicato con la stringa di caratteri X.X.X.X. Sostituisci questo valore con il tuo IP Failover.


## 

- Apri un terminale e inserisci:

```
admin@vserver1:~$ sudo ip addr add X.X.X.X/32 dev eth0
```


- Esempio

```
admin@vserver1:~$ sudo ip addr add 87.98.177.67/32 dev eth0
```


Verifica

Per verificare la corretta coonfigurazione dell'IP, è sufficiente eseguire un semplice ping test da un terminale diverso da quello appena configurato (ad esempio, la riga di comando del tuo pc Windows, Linux o Mac).

Esempio:

```
user@hostname:~$ ping 87.98.177.67
PING 87.98.177.67 (87.98.177.67) 56(84) bytes of data.
64 bytes from 87.98.177.67: icmp_req=1 ttl=60 time=0.819 ms
64 bytes from 87.98.177.67: icmp_req=2 ttl=60 time=0.564 ms
64 bytes from 87.98.177.67: icmp_req=3 ttl=60 time=0.615 ms
64 bytes from 87.98.177.67: icmp_req=4 ttl=60 time=0.559 ms
^C
--- 87.98.177.67 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.559/0.639/0.819/0.107 ms
```


L'IP risponde correttamente.


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

