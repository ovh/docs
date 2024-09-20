---
title: "Come configurare chiavi SSH aggiuntive su un’istanza"
excerpt: "Scopri come configurare chiavi SSH aggiuntive per gli account utente e aggiungerle alla tua istanza Public Cloud"
updated: 2024-09-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Durante la creazione di un’istanza dallo Spazio Cliente, è possibile aggiungere una sola chiave SSH per l’account utente preconfigurato. Per connettersi all’istanza con altri account utente, è possibile creare più chiavi e aggiungerle all’istanza in pochi step.

**Questa guida ti mostra come configurare chiavi SSH aggiuntive per le connessioni all’istanza.**

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. È quindi vostra responsabilità assicurarvi che funzionino correttamente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di problemi, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) o [la nostra community](/links/community).
>

## Prerequisiti

- Un’ [istanza Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- [Accesso amministrativo all’istanza via SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## Procedura

> [!primary]
>
> Attualmente sono supportati i formati chiave SSH **RSA**, **ECDSA** e **ED25519**.
>
> Si noti che le istruzioni riportate di seguito sono destinate all'uso generale e sono basate su un sistema operativo server Ubuntu. Alcuni comandi potrebbero richiedere la personalizzazione in base alla distribuzione o al sistema operativo in uso.
>

### Step 1: crea una nuova coppia di chiavi SSH

Se necessario, utilizza la nostra [guida sulle chiavi SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) per creare una nuova coppia di chiavi SSH.  
Se necessario, è possibile trovare informazioni su [gestione di più chiavi](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) anche sulla workstation locale.

### Step 2: configura un nuovo account utente

[Accedi alla tua istanza](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e utilizza i seguenti comandi per creare un nuovo account utente e una cartella `.ssh`:

```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Senza altri passaggi, l’account utente `user2` di questo esempio non dispone di autorizzazioni elevate. Se è necessario concedere a questo account privilegi root sulla tua istanza, aggiungilo al `sudo group`:

```bash
sudo usermod -aG sudo user2
```

Per maggiori informazioni sulle autorizzazioni degli utenti e sugli argomenti correlati, consulta la nostra [guida dell'account utente](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Step 3: aggiungi la chiave pubblica SSH alla tua istanza

#### Trasferimento di chiavi pubbliche create su sistemi basati su GNU/Linux, macOS o BSD

Se hai creato le coppie di chiavi SSH su un sistema basato su GNU/Linux, macOS o BSD, puoi utilizzare il comando `ssh-copy-id` per aggiungere le chiavi pubbliche al tuo server.

L'utilità `ssh-copy-id` copia le chiavi pubbliche nel file `~/.ssh/authorized_keys` sul server remoto specificato e crea automaticamente il file in questa directory, se necessario.

```bash
ssh-copy-id username@IP_ADDRESS
```

Di default, `ssh-copy-id` tenterà di trasferire **tutte** le chiavi pubbliche nella directory `~/.ssh` dell’utente locale. Per aggiungere una sola chiave pubblica, è possibile specificare il file di chiave con l'opzione `-i` seguita dal percorso del file:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Esempio:

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

Verrà richiesto di inserire la password associata all’utente. In caso di esito positivo, riceverai un messaggio simile al seguente:

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Se viene visualizzato un messaggio di errore, è comunque possibile aggiungere manualmente le chiavi pubbliche eseguendo la procedura seguente.

> [!primary]
>
> Per motivi di sicurezza e per una corretta pratica aziendale, una coppia di chiavi non deve essere utilizzata da più utenti. Poiché ogni utente dei sistemi GNU/Linux ha il proprio file `authorized_keys` in `~/.ssh/`, è possibile utilizzare il comando `ssh-copy-id` come indicato in precedenza e adattare `KeyFileName` e `user` dopo aver [creato la coppia di chiavi](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Aggiunta manuale di chiavi pubbliche all'istanza

[Accedi alla tua istanza](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e apri il file `authorized_keys` nella cartella personale del nuovo utente con il tuo editor di testo preferito (`nano` in questo esempio):

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Incollare la **stringa di chiave pubblica** in questo file. Salvare il file e uscire dall'editor.

Riavvia l’istanza (`sudo reboot`) o riavvia il servizio OpenSSH utilizzando uno dei comandi seguenti (il comando appropriato può variare in base al sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Il nuovo utente può ora connettersi all’istanza dal dispositivo che archivia la chiave SSH privata corrispondente:

```bash
ssh username@IP_ADDRESS
```

Esempio:

```bash
ssh user2@203.0.113.102
```

Per saperne di più sull'utilizzo delle chiavi SSH con le istanze Public Cloud, consulta la [guida sulle chiavi SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Per saperne di più

[Creare istanze Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Come sostituire una coppia di chiavi SSH su un’istanza Public Cloud con la modalità Rescue](/pages/public_cloud/compute/replacing_lost_ssh_key)

Contatta la nostra [Community di utenti](/links/community).
