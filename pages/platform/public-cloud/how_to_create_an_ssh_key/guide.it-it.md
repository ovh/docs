---
title: 'Creare una chiave SSH'
slug: creare-chiave-ssh
excerpt: 'Come generare una chiave SSH per accedere alla tua istanza'
section: Sicurezza
---

**Ultimo aggiornamento: 20/12/2019**

## Obiettivo

Durante la creazione di un’[istanza Public Cloud](https://www.ovh.it/public-cloud/){.external} non viene inviata nessuna email con le credenziali di accesso, perché l’autenticazione avviene tramite chiavi SSH sicure.

**Questa guida ti mostra come generare una chiave SSH per accedere a un’istanza.**

> [!primary]
>
Ti ricordiamo che le chiavi SSH non sono utilizzate sulle istanze con sistema operativo Windows, dove invece è necessario inserire nome utente e password.
>

## Prerequisiti

* Aver creato un progetto [Public Cloud](https://www.ovh.it/public-cloud/){.external} nel tuo account OVHcloud
* Avere accesso allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Crea una chiave SSH su Linux e Mac

Apri il tool **Terminal** (prompt dei comandi) ed esegui il seguente comando per generare una chiave SSH da 4096 bit:

```sh
# ssh-keygen -b 4096
```

Il risultato restituito chiederà di salvare la chiave appena creata:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> La parte privata della chiave dovrebbe essere custodita in un luogo sicuro e l’accesso limitato agli utenti autorizzati.
> 

Una volta salvata la chiave, l’interfaccia a riga di comando mostrerà questi elementi:

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The key's randomart image is:
+---[RSA 4096]----+
|      .          |
|                 |
| .               |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+-----------------+
```

Per leggere e visualizzare la chiave, utilizza questo comando:

```ssh
# cat .ssh/id_rsa.pub
```

Il risultato restituito sarà di questo tipo:

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Crea una chiave SSH su Windows

#### Con PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} è uno dei client SSH più utilizzati su Windows e può essere utilizzato per connettersi da remoto a un server Linux. Il software associato, **PuTTYgen**, può essere utilizzato per creare chiavi SSH.

Per poter generare la chiave, scarica [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}.

Avvia il programma, seleziona `RSA` come tipo di chiave, inserisci `4096` come numero di bit da generare e clicca sul pulsante `Generate`{.action}.

![generate key](images/puttygen-01.png){.thumbnail}

Muovi il mouse in modo casuale nell’area situata sotto la barra di avanzamento, come mostrato qui sotto:

![generate key](images/puttygen-02.gif){.thumbnail}

La barra inizierà a riempirsi gradualmente e, una volta piena, la chiave sarà pronta.

![generate key](images/puttygen-03.png){.thumbnail}

### Importa la chiave SSH nello Spazio Cliente

Per prima cosa seleziona e copia il testo della chiave pubblica, poi accedi alla sezione `Public Cloud`{.action} dello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.



![cloud menu](images/cloud-menu.png){.thumbnail}

Seleziona il tuo progetto Public Cloud nel menu a sinistra.

![select project](images/select-project.png){.thumbnail}

Sempre nella colonna a sinistra, seleziona `SSH keys`{.action} e clicca sul pulsante `Aggiungi una chiave SSH`{.action}, poi incolla il codice da 4096 bit nell’area corrispondente.

![save ssh key](images/save-key.png){.thumbnail}

Conferma l’operazione: la chiave verrà salvata nello Spazio Cliente e verrà richiesta per l’autenticazione.

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.