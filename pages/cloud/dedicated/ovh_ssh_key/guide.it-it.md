---
title: Installare la chiave SSH OVH
slug: chiave-ssh-ovh
excerpt: Come configurare una chiave SSH OVH per consentire l'intervento dei nostri amministratori
section: SSH e chiave SSH
---

**Ultimo aggiornamento: 30/01/2018**

## Obiettivo

In alcuni casi, potrebbe essere necessario l'intervento di un amministratore OVH sulla tua infrastruttura dedicata. 

**Questa guida ti mostra la procedura di installazione di una chiave SSH OVH per consentire l'accesso ai nostri amministratori e come disattivarla a intervento terminato.**

## Prerequisiti

- Avere [accesso in SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external} (root)

## Procedura

### Step 1: installa la chiave

Accedi in SSH ed esegui questo comando:

- per i server ospitati in OVH Europa:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- per i server ospitati in OVH Canada:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Se l'operazione è andata a buon fine, è stato creato il file `authorized_keys2`, che contiene informazioni in questo formato: 

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Step 2: correggi eventuali errori

Anche se la chiave è stata installata correttamente, è possibile che i nostri amministratori non riescano ad accedere al tuo server. In questo caso, è necessario verificare:

#### l’esistenza del file */root/.ssh /authorized_keys2* 

Per assicurarti della presenza del file, esegui il comando:


```sh
cat /root/.ssh/authorized_keys2
```

#### che il server SSH sia configurato in modo da accettare le connessioni da root

Per effettuare questa operazione, controlla nel file `/etc/ssh/sshd_config` questi parametri:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

A questo punto, riavvia il servizio SSH:

```sh
/etc/init.d/sshd restart
```

#### che la *home directory* dell'utente root sia effettivamente /root

Per farlo, utilizza il comando `/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Il sesto elemento della riga (gli elementi sono separati da **:**) deve essere /root.

#### che l’applicazione firewall non blocchi l'accesso

In caso di utilizzo di un’applicazione firewall, è necessario aggiungere una regola di autorizzazione per la sorgente cache-ng.ovh.net (cache-ng.ovh.ca per un server in Canada) impostando come porta di destinazione la tua porta SSH (di default, la 22). Ecco un esempio di regola iptables:

**Per un server in Francia**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Per un server in Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Verifica che la porta SSH non sia stata personalizzata e, in caso contrario, precisa questa informazione in modo che l'amministratore possa connettersi.


### Step 3: disattiva la chiave

Una volta che l'amministratore ha completato l’intervento è possibile disabilitare la chiave SSH. Per farlo, è sufficiente modificare il file `authorized_keys2` e aggiungere un commento (con **#**) come indicato qui sotto:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Per saperne di più

[Introduzione a SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.