---
title: Modifica i server DNS della tua istanza
excerpt: Modifica i server DNS della tua istanza
slug: modifica_i_server_dns_della_tua_istanza
legacy_guide_number: g1985
---


## 
Il server DNS configurato sulle tue istanze è, di default, quello di OVH (213.186.33.99).
Se vuoi modificarlo o aggiungerne un altro, ricordati che non puoi farlo semplicemente modificando il file resolv.conf, perché i server DNS sono assegnati automaticamente tramite server DHCP.

Questa guida ti mostra la procedura da seguire per modificare la configurazione DHCP e i server DNS della tua istanza.


## Requisiti necessari

- Un'istanza




## 

- Accedi all'istanza in SSH


```
user@postelocal:~$ ssh admin@ip_de_l'instance
```


- Accedi come utente amministratore


```
admin@instance:~$ sudo su
```



Per verificare qual è il server DNS impostato, leggi il file resolv.conf:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
```



- Modifica il file /etc/dhcp/dhclient.conf:


```
root@instance:~$ vim /etc/dhcp/dhclient.conf
```


- Inserisci la riga per aggiungere il nuovo server DNS a quello predefinito:


```
supersede domain-name-servers 213.186.33.99, 127.0.0.1;
```



A questo punto, nella tua istanza sono impostati 2 server DNS:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
nameserver 127.0.0.1
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

