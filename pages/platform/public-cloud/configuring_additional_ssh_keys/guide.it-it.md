---
title: Configura chiavi SSH aggiuntive
excerpt: Come configurare chiavi SSH aggiuntive per la tua istanza Public Cloud
slug: configura_chiavi_ssh_aggiuntive
section: Tutorial
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 04/02/2022**

## Obiettivo
 
Durante la creazione di un'istanza, è possibile configurare una sola chiave SSH per la connessione iniziale. Per consentire l'accesso della tua istanza ad altri utenti, è possibile aggiungere chiavi supplementari configurando il file *authorized_keys*.

**Questa guida ti mostra come configurare chiavi SSH aggiuntive per le connessioni alla tua istanza.**

## Prerequisiti

- Disporre di un'[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) sul proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Avere accesso alla tua istanza via SSH come amministratore (root)

## Procedura

> [!primary]
>
Per salvare una chiave SSH nello Spazio Cliente OVHcloud, ti consigliamo di utilizzare la cifratura RSA o ECDSA. ED25519 non è attualmente supportato.
>

### Crea la chiave SSH

Per creare una nuova chiave SSH, consulta la [guida sui primi step con il Public Cloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/).

### Configurazione del nuovo utente

[Accedi alla tua istanza in SSH](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/#connect-to-instance) e crea un nuovo utente utilizzando questi comandi:

```bash
~$ sudo adduser user2

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

Apri il file *authorized_keys* nella cartella personale del nuovo utente con un editor di testo:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Aggiungi nel file la chiave pubblica creata al primo step. Registra e chiudi l'editor.

Se la cartella .ssh non esiste ancora, puoi crearla utilizzando questo comando:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Puoi configurare più chiavi SSH aggiungendole ai file *authorized_keys* delle cartelle utente corrispondenti.

Adesso puoi connetterti con l'utente e la chiave privata configurate precedentemente:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Per saperne di più

[Creare una prima istanza Public Cloud e connettersi](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)

[Modifica la chiave SSH in caso di perdita](https://docs.ovh.com/it/public-cloud/sostituisci_la_tua_chiave_ssh_in_caso_di_perdita/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
