---
title: Esegui uno script durante la creazione della tua istanza
excerpt: Esegui uno script durante la creazione della tua istanza
slug: esegui_uno_script_durante_la_creazione_della_tua_istanza
legacy_guide_number: g1932
---


## 
In alcuni casi, può essere utile eseguire uno script durante la creazione della tua istanza, ad esempio per aggiungere più chiavi SSH o configurare automaticamente il tuo servizio SSH.

Questa guida ti mostra come eseguire uno script durante la creazione della tua istanza utilizzando Cloud-init e le API OpenStack.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## Crea uno script
Esistono vari tipi di script che possono essere utili durante la creazione di un'istanza. Ad esempio, script di shell:


- Aggiungi un nuovo utente:


```
#!/bin/bash

adduser ovh -gecos "" --disabled-password
echo "ovh ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

mkdir /home/ovh/.ssh
echo "TUA_CHIAVE_SSH_PUBBLICA" > /home/ovh/.ssh/authorized_keys
```



Questo script ti permette di creare un utente ovh, assegnargli i permessi sudo e aggiungere la sua chiave SSH.


- Modifica la configurazione SSH:


```
#!/bin/bash

sed -i 's/Port\ 22/Port\ 2211/g' /etc/ssh/sshd_config
sed -i 's/PermitRootLogin\ yes/PermitRootLogin\ no/g' /etc/ssh/sshd_config
service ssh restart
```



Questo script ti permette di modificare la porta SSH predefinita (22 -> 2211) e vietare l'accesso all'utente root.


- Aggiorna i pacchetti e installa un server WEB:


```
#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y apache2 php5
```




## Attenzione!
Questo script può aumentare il tempo necessario alla creazione dell'istanza.
Durante la creazione della tua istanza, puoi eseguire anche script cloud-config:


- Crea un utente con 2 chiavi SSH:


```
#cloud-config

users:
- name: ovh
groups: sudo
shell: /bin/bash
sudo: ['ALL=(ALL) NOPASSWD:ALL']
ssh-authorized-keys:
- SSH_KEY1
- SSH_KEY2
```



Questo script ti permette di creare un utente ovh con i permessi sudo e la possibilità di connettersi con 2 diverse chiavi SSH.

## Attenzione!
L'utente "admin" non verrà creato, ma sarà sostituito dal tuo utente.


## Crea la tua istanza
Dopo aver recuperato la lista delle immagini e dei modelli di istanza, puoi eseguire lo script con Cloud-init utilizzando l'argomento --user-data:


```
root@server:~# nova boot --key_name SSH_KEY --image bdcb5042-3548-40d0-b06f-79551d3b4377 --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --user-data ./adduser.sh Instance1
```


Una volta verificata la correttezza dei dati inseriti, il tuo utente e i relativi permessi vengono aggiunti al termine della creazione dell'istanza:


```
root@server:~# ssh ovh@149.xxx.xxx.194

Last login: Tue Oct 20 07:51:58 2015 from proxy-109-190-254-35.ovh.net

ovh@instance1:~$ sudo su
root@instance1:/home/ovh#
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

