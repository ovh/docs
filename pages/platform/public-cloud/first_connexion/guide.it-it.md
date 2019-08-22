---
title: 'Connettersi a un’istanza Public Cloud'
slug: prima-connessione
legacy_guide_number: 1787
excerpt: 'Scopri come connettersi a un’istanza Public Cloud'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 20/09/2018**

## Obiettivo

Per connettersi a un’istanza Public Cloud, il procedimento da seguire è simile quello di una connessione «normale» a un server dedicato (VPS, server dedicato, ecc...), ma in questo caso con un utente specifico.

**Questa guida ti mostra come connettersi a un’istanza Public Cloud su Linux o Windows.**


## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Aver creato un’[istanza Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external}


## Procedura

### Connettersi a un’istanza Linux da un ambiente Linux/Mac

Utilizza il seguente comando SSH per eseguire la connessione alla tua istanza Public Cloud:

```sh
ssh*utente*@IP_istanza
```

Nel Public Cloud, l’utente varia in base alle distribuzioni utilizzate. Ecco una tabella (non esaustiva) degli utenti in base alle distribuzioni:

|Distribuzioni|Utente|
|---|---|
|Archilinux|arch|
|Centos 6|centos|
|Centos 7|centos|
|CoreOS|Core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|FreeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> Se ti connetti direttamente, avrai i diritti dell’utente corrispondente. Se vuoi usufruire dei privilegi da *super-utente*, utilizza il comando `sudo`.
>


- Avviso sul certificato digitale del server SSH remoto:

Al momento della prima connessione, dovrai confermare l’autenticità dell’host cliccando su `yes`.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Connettersi a un’istanza Linux da un ambiente Windows

Per connetterti a un’istanza Linux da Windows, è sufficiente utilizzare un programma di tipo [PuTTY](https://www.putty.org/){.external} o - per le ultime versioni di Windows 10 - utilizzare le [funzioni predefinite](https://docs.microsoft.com/en-us/windows/wsl/about){.external}. Basterà poi seguire gli stessi passaggi descritti in precedenza per Linux.


### Connettersi a un’istanza Windows

#### Completare l'installazione

Dopo aver creato la tua istanza, è necessario portare a termine il cosiddetto *Sysprep*. Per fare ciò, avvia la console VNC dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}:

![Console VNC](images/vnc_console.png)

Durante il primo step, puoi scegliere il tuo Paese, la lingua desiderata e la lingua della tastiera. Poi clicca su `Next`{.action}:

![Choix de la langue dans le sysprep](images/sysprep_first_step.png)

In seguito, scegli la password per l’utente *administrator*:

![Choix du mot de passe dans le sysprep](images/sysprep_first_step.png)

Non ti resta che confermare la tua scelta cliccando su `Finish`{.action}. L’istanza si riavvierà e potrai connetterti al server Windows.


#### Connettersi a Windows

La connessione alla tua istanza Windows avviene direttamente attraverso la funzione `Desktop remoto` da Risorse del computer in ambiente Windows:

![Choix du mot de passe dans le sysprep](images/remote_desktop.png)

Negli step successivi basterà precisare l’IP della tua istanza (primo step della tua connessione tramite il desktop remoto) e poi aggiungere il tuo nome utente (*administrator*) e la password che hai scelto.

![Bureau à distance - Connexion](images/remote_desktop_connection_IP.png)

![Bureau à distance - Connexion utilisateur](images/remote_desktop_connection_user.png)

Un messaggio ti chiederà di confermare la connessione: clicca su `Sì`{.action} o `Yes`{.action}.

![Validation de la connexion](images/connection_validation.png)

Da questo momento sei connesso alla tua istanza.

> [!primary]
>
> In caso di problemi di connessione alla tua istanza Windows, verifica che il firewall Windows autorizzi la connessione RDP. Per maggiori informazioni consulta questa [guida](https://docs.ovh.com/it/vps/windows-first-config/){.external}.
>


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.