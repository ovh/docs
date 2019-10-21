---
title: 'Accedere come utente root e impostare una password'
slug: imposta_una_password_amministratore
excerpt: 'Come utilizzare l’utente amministratore e creare la password associata'
section: Tutorial
---

**Ultimo aggiornamento: 08/08/2019**

## Obiettivo

Alcune operazioni di gestione di un server (ad esempio, l’installazione di pacchetti) potrebbero richiedere un livello di permessi elevato: in questo caso, è necessario utilizzare l’utente amministratore, che sulle macchine Linux viene chiamato “root”.

**Questa guida ti mostra come impostare una password di root ed eseguire alcune operazioni di gestione con questo utente**.

## Prerequisiti

* Disporre di un progetto Public Cloud attivo
* Avere accesso al server via SSH

> [!primary]
>
> In questa guida l’utente predefinito è chiamato “admin”.
>

## Procedura

### Modificare la password "root"

Per prima cosa accedi al server utilizzando una connessione SSH.

Esegui il comando qui sotto e definisci una password per l’utente “admin” (per motivi di sicurezza, la password non verrà mostrata): 

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Aggiorna le applicazioni (Debian/Ubuntu)

Per l’update dei pacchetti software installati sul server, utilizza questo comando:

```
~$ sudo apt-get update
```

### Aggiorna il sistema (CentOS e Fedora)

Per l’update del sistema operativo installato sul server, utilizza questo comando:

```
~$ sudo yum update
```

### Modifica il file di configurazione

Per modificare un file di configurazione del server, utilizza questo comando:

```
~$ sudo vi /etc/hosts.allow
```

### Accedi come utente amministratore

Per effettuare l’accesso come utente root, utilizza questo comando:

```
~$ sudo su -
~#
```

Quando richiesto, inserisci la password associata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.