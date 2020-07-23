---
title: 'Creare una chiave SSH'
slug: creare-chiave-ssh-dedicata
excerpt: 'Come generare una chiave SSH per connettersi in modo sicuro a un server dedicato'
section: 'Per iniziare'
order: 4
---

**Ultimo aggiornamento: 22/07/2020**

## Obiettivo

Il protocollo SSH consente un canale sicuro su una rete non protetta in un’architettura client-server, connettendo un client SSH con un server SSH. La creazione di una chiave SSH consente di ottenere una chiave pubblica e una chiave privata. È possibile collocare la chiave pubblica su qualsiasi server e poi sbloccarlo connettendosi con un client che dispone già della chiave privata. Se le chiavi corrispondono, la connessione avverrà automaticamente, senza la necessità di inserire una password.

**Questa guida ti mostra come generare una chiave SSH per accedere in modo sicuro al tuo server.**

> [!primary]
>
Ti ricordiamo che le chiavi SSH non sono utilizzate sulle istanze con sistema operativo Windows, dove invece è necessario inserire nome utente e password.
>

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Un [server dedicato](https://www.ovh.it/server_dedicati/) nel tuo account OVHcloud
- Accesso come amministratore (root) mediante SSH al tuo VPS (opzionale)

## Procedura

### Crea una chiave SSH su Linux e Mac

Su una macchina Mac o Linux, apri il tool Terminal (prompt dei comandi).

Assicurati di avere una cartella “.ssh” nella tua directory $HOME. Se la cartella non esiste, creala:

```sh
# mkdir ~/.ssh
```

Esagui il seguente comando per creare una chiave RSA da 4096 bit:

```sh
# ssh-keygen -b 4096
```
L’utilizzo dell’opzione “-t” con il comando sopra citato consente di specificare un metodo crittografico, ad esempio:

```sh
# ssh-keygen -t ed25519 -a 256
```

Il comando ti chiederà di salvare la chiave appena creata:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Una volta confermata l’operazione, potrai inserire una passphrase, una sorta di password per proteggere la tua chiave SSH. Ti consigliamo di effettuare questa procedura per una maggiore sicurezza.

È necessario salvare la chiave SSH nella directory “.ssh”.

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
|o +   .  . o ..  |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> La chiave privata dovrebbe essere custodita in un luogo sicuro e l’accesso limitato agli utenti autorizzati.
> 

Per leggere ed esportare la tua chiave pubblica, utilizza il comando “cat” sul file della chiave e copia il seguente risultato: 

```ssh
# cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

### Crea una chiave SSH con PuTTY (per Windows)

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) è uno dei client SSH più utilizzati su Windows e può essere utilizzato per connettersi da remoto a un server Linux. Il software associato, [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe), può essere utilizzato per creare chiavi SSH.

Per poter generare la chiave, scarica [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe).

A questo punto, esegui il software e seleziona il tipo di chiave. Nel nostro esempio, abbiamo scelto una chiave RSA da 4096 bit. Clicca sul pulsante `Generate`{.action} per avviare la procedura.

![putty key](images/puttygen_01.png){.thumbnail}

Muovi il mouse in modo casuale nell’area situata sotto la barra di avanzamento, come mostrato qui sotto:

![putty key](images/puttygen_02.gif){.thumbnail}

Continua a muovere il mouse finché la barra di avanzamento è completa. La chiave è ora generata e pronta per l‘utilizzo.

![putty key](images/puttygen_03.png){.thumbnail}


### Aggiungi chiavi SSH al tuo server

Naviga nella tua $HOME directory e crea la cartella “.ssh” (se non esiste):

```ssh
$ mkdir ~/.ssh
```

Per conservare la chiave dell’utente attuale, apri un file chiamato “authorized_keys” con l’editor di testo che preferisci:

```ssh
$ nano ~/.ssh/authorized_keys
```

Copia e incolla la tua **chiave pubblica** in questo nuovo file. Salva il file ed esci dall’editor. Riavvia il tuo server o soltanto il server OpenSSH (il comando corretto potrebbe variare in base al tuo sistema operativo):

```ssh
$ systemctl restart sshd
```

Per verificare se la tua chiave è stata configurata correttamente, prova ad accedere al server in SSH usando il comando seguente: Sostituisci “IP_ADDRESSorHOSTNAME" con l’indirizzo IP o l’hostname del server a cui stai tentando di accedere:

```ssh
$ ssh user@IP_ADDRESSorHOSTNAME
```

#### Aggiungi chiavi supplementari al tuo server

Per aggiungere chiavi SSH per utenti supplementari, ripeti semplicemente gli step precedenti, usando però la directory $HOME per generare una chiave unica per ciascun utente.

#### Elimina le chiavi autorizzate dal tuo server

Dal tuo file “authorized_keys” elimina la chiave corrispondente all’utente il cui accesso è stato revocato. Dopo aver rimosso la chiave, salva il file ed esci dall’editor di testo.

### Importa la chiave SSH nello Spazio Cliente OVHcloud

Lo Spazio Cliente OVHcloud consente di salvare le chiavi pubbliche usando uno dei tipi di crittografia supportati (attualmente RSA, ECDSA, ED25519). 

Apri la barra di navigazione, clicca sul tuo nome in alto a destra e utilizza il menu di scelta rapida`Prodotti e servizi`{.action}.

![SSH key control panel](images/SSH_keys_panel_1.png){.thumbnail}

Nel menu “I tuoi servizi”, seleziona la scheda `Chiavi SSH`{.action} e clicca su `Aggiungi una chiave SSH`{.action}.

![SSH key control panel](images/SSH_keys_panel_2.png){.thumbnail}

Seleziona “Dedicato” dal menu a tendina.

Nella nuova finestra, inserisci un identificativo (un nome a tua scelta) per la chiave. Incolla la stringa della chiave (copiata dal tuo file “.pub”) nel campo “Chiave”.

![SSH key control panel](images/SSH_keys_panel_3.png){.thumbnail}

Se hai copiato per intero il risultato, l’identificativo che segue la chiave dovrebbe essere già incluso. Ricordati che per salvare la chiave, sarà sempre necessario indicare il tuo identificativo dopo aver incollato la chiave. È un requisito dello Spazio Cliente OVHcloud. (Vedi un esempio del formato qui di seguito.) Clicca su `Conferma`{.action} per salvare la tua chiave pubblica.

> [!primary]
>
> Qualsiasi chiave salvata nella sezione “Dedicato” potrà essere utilizzata anche per il tuo VPS. Per le chiavi SSH relative ai servizi Public Cloud, consulta [questa guida](https://docs.ovh.com/it/public-cloud/creare-chiave-ssh/).
>


## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.