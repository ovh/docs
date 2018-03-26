---
title: Modifica l’hostname della tua istanza
excerpt: Modifica l'hostname della tua istanza
slug: modifica_lhostname_della_tua_istanza
legacy_guide_number: g1928
---


## 
Cloud-Init ti permette di personalizzare la tua istanza Public Cloud durante la sua creazione e a ogni riavvio.
Se vuoi modificare il tuo hostname, ad esempio in caso di errore durante la creazione della tua istanza o per riconfigurare il tuo server, disattiva il modulo Cloud-Init incaricato di configurare l'hostname.

Questa guida ti mostra come riconfigurare cloud-init per modificare l'hostname della tua istanza.


## Requisiti necessari

- Un'istanza




## Disabilita il modulo cloud-init

- Modifica il file di configurazione:

```
admin@serveur-1:~$ sudo vim /etc/cloud/cloud.cfg
```


- Modifica lo stato di questi moduli:

```
preserve_hostname: true
manage_etc_hosts: false
```





## Modifica l'hostname

- Modifica il file /etc/hostname:

```
admin@serveur-1:~$ sudo vim /etc/hostname

webserver
```


- Modifica il file /etc/hosts:

```
admin@serveur-1:~$ sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```


- Riavvia la tua istanza

```
admin@serveur-1:~$ sudo reboot
```



La modifica dell'hostname viene applicata subito dopo il riavvio:

```
admin@webserver:~$ sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

