---
title: Configura chiavi SSH aggiuntive
excerpt: Configura chiavi SSH aggiuntive
slug: configura_chiavi_ssh_aggiuntive
legacy_guide_number: g1924
---


## 
Quando crei un'istanza è possibile impostare solo una chiave SSH.
Puoi però configurare il file authorized_keys per autorizzare altri utenti in possesso di chiavi SSH ad accedere alla tua istanza.

Questa guida ti mostra come configurare sulla tua istanza le chiavi SSH aggiuntive che consentono l'accesso ad altri utenti.


## Requisiti necessari

- Un'istanza




## Crea la chiave SSH
Per creare una chiave SSH, consulta la guida:

- [Crea chiavi SSH]({legacy}1769)


Non è necessario aggiungerla nel tuo Spazio Cliente OVH.


## Configura il nuovo utente

- Accedi alla tua istanza
- Crea un nuovo utente

```
admin@serveur-1:~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```


- Aggiungi la chiave pubblica SSH nella home directory del nuovo utente

```
admin@serveur-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```



Se la cartella .ssh non esiste, puoi crearla con questo comando:

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```


A questo punto, puoi connetterti all'utente utilizzando la chiave privata associata a quella che hai configurato.

```
root@serveur:~$ ssh user2@149.xxx.xxx.22

Linux serveur-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@serveur-1:~$
```


Per configurare altre chiavi SSH per l'utente admin, aggiungile nel file authorized_keys corrispondente.

```
admin@serveur-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

