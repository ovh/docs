---
title: Sostituisci la tua chiave SSH in caso di perdita
excerpt: Sostituisci la tua chiave SSH in caso di perdita
slug: sostituisci_la_tua_chiave_ssh_in_caso_di_perdita
legacy_guide_number: g2069
---


## 
Se hai smarrito la tua chiave SSH privata, ad esempio in seguito alla reinstallazione della tua macchina, non puoi più accedere alla tua istanza. Nel caso tu non abbia configurato un metodo di autenticazione alternativo, puoi recuperare l'accesso utilizzando la modalità Rescue.

Questa funzione ti permette di accedere alla tua istanza grazie a una password e modificare i tuoi file.

Questa guida ti mostra come configurare il file authorized_keys dell'utente admin per aggiungere una nuova chiave SSH e recuperare l’accesso alla tua istanza.


## Requisiti necessari

- [Crea chiavi SSH]({legacy}1769)
- [Riavvia la tua istanza in modalità di ripristino (Rescue mode)]({legacy}2029)




## 
Dopo aver configurato il disco della tua istanza in Rescue mode, puoi accedere a tutti i tuoi file.

Il file che contiene le tue chiavi SSH è:


```
/home/NOME_UTENTE/.ssh/authorized_keys
```


Per aggiungere la tua nuova chiave SSH, è sufficiente modificare questo file aggiungendo la nuova chiave:


```
admin@instance:~$ sudo vim /mnt/home/NOME_UTENTE/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Informazioni:
Per modificare la chiave SSH del tuo utente predefinito, accedi alla sua cartella personale.

Ad esempio, per l'utente admin, il file si trova in questa cartella:


```
/home/admin/.ssh/authorized_keys
```


Per un'istanza Ubuntu 15.10, l'utente predefinito sarà ubuntu e il file si troverà in questa cartella:


```
/home/ubuntu/.ssh/authorized_keys
```



## Informazioni utili:
Per l'utente admin, è possibile modificare la password del tuo utente predefinito impostando il Rescue mode e eseguendo questi comandi:


- cambia la directory di root per accedere direttamente al disco dell'istanza:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- modifica la password admin:


```
root@instance:/# passwd admin
```



Una volta completata la modifica, riavvia la tua istanza e accedi utilizzando la tua nuova chiave SSH.


## 

- [Configura chiavi SSH aggiuntive]({legacy}1924)
- [Imposta una password amministratore]({legacy}1786)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

