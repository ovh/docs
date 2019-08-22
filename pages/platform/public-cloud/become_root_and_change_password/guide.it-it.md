---
title: Imposta una password amministratore
excerpt: Imposta una password amministratore
slug: imposta_una_password_amministratore
legacy_guide_number: g1786
---


## 
Per effettuare alcune azioni, potresti avere bisogno di accedere come utente amministratore o eseguire operazioni con i privilegi di root, in particolare per:

- installare pacchetti
- impostare una password utente o amministratore (indispensabile per accedere al KVM)
- eseguire alcune operazioni amministrative




## Requisiti necessari

- []({legacy}1775)
- essere connesso in SSH con l'utente predefinito (admin o il nome della distribuzione per le immagini più recenti)



## Informazioni
In questa guida l'utente predefinito è admin.


## Definisci una password

- Imposta una password per l'utente admin (la password non viene visualizzata per motivi di sicurezza):

```
~$ sudo passwd
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```


- Imposta una password per l'utente root (la password non viene visualizzata per motivi di sicurezza):

```
~$ sudo passwd root
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```





## Altri esempi

- Aggiorna la cache dei pacchetti (Debian/Ubuntu)

```
~$ sudo apt-get update
```


- Aggiorna il sistema (CentOS/Fedora)

```
~$ sudo yum update
```


- Modifica un file di configurazione:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Accedi come utente amministratore

```
~$ sudo su -
~#
```


- Imposta una password di root:

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Imposta una password per l'utente admin

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

