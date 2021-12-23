---
title: Introduzione a SSH
slug: introduzione-ssh
excerpt: Come utilizzare il servizio SSH per accedere al tuo server
section: SSH e chiave SSH
order: 1
---

**Ultimo aggiornamento: 19/01/2018**

## Obiettivo

Il protocollo di comunicazione SSH (Secure SHell) è installato nativamente su tutti i server OVH (VPS, server dedicati, istanze Public Cloud).

**Questa guida ti mostra come utilizzare il servizio SSH per accedere al tuo server.**

## Prerequisiti

- SSH, installato su tutti i server, permette di connettersi alle macchine in modo sicuro e di averne il totale controllo

## Procedura

### Software compatibili

I software che consentono una connessione tramite SSH sono numerosi. Eccone alcuni.

#### Per Windows

- [PuTTY](http://www.putty.org/){.external} (gratuito)
- [MobaXterm](https://mobaxterm.mobatek.net/) (versione gratuita e a pagamento)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (a pagamento)

A partire dalle ultime versioni di Windows 10 e Windows Server, attivando la modalità sviluppatore è possibile accedere a una console bash. Per maggiori informazioni, consulta la documentazione Microsoft: <https://docs.microsoft.com/it-it/windows/wsl/install-win10>.

#### Per Mac

- Il tool `Terminal`{.action} viene fornito con Mac OS X ed è preinstallato sulla macchina.

#### Per Linux

- I tool `Console`{.action} o `Terminal`{.action} sono preinstallati e possono essere utilizzati per la connessione in SSH
- Il pacchetto `Terminator` permette di gestire contemporaneamente più terminali grazie alla visualizzazione multi-tab. Per maggiori informazioni, consulta la documentazione di Ubuntu: <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>
- [OpenSSH](http://www.openssh.com){.external} (gratuito)

### Accedi in SSH

#### Step 1: prima connessione

Per connettersi al server in SSH, è necessario disporre di due informazioni:

- indirizzo IPv4 o nome della macchina
- password di root della macchina (ricevuta via email al momento dell'installazione)

Per effettuare la connessione, esegui questo comando:

```sh
ssh root@IP_del_server
```

oppure

```sh
ssh root@nome_del_server
```

Visualizzerai questo messaggio:

```sh
The authenticity of host servername (IP_del_server) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_du_serveur (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Alla prima connessione, il client SSH riceve un <i>fingerprint</i> della chiave RSA, ovvero un’impronta digitale del server al quale ti stai connettendo. La chiave viene verificata a ogni nuova connessione, un messaggio ti informerà in caso di modifica. La comparsa della notifica può dipendere da diversi motivi, ad esempio:

- la macchina è stata reinstallata
- il server SSH è stato reinstallato
- stai provando ad accedere a un'altra macchina

Al primo accesso è necessario accettare l'impronta, che verrà salvata dal client SSH sul tuo PC.

#### Step 2: manuale

Nelle distribuzioni Linux è possibile consultare un manuale con tutti i comandi disponibili e i loro argomenti.

```sh
man bash
```

#### Step 3: aggiornamento

Il tuo client SSH deve essere sempre aggiornato, così come la versione della tua distribuzione. Per verificare la versione installata, esegui questo comando:

```sh
ssh -V
```

In caso di dubbi, consulta la documentazione del client SSH che stai utilizzando.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community>.