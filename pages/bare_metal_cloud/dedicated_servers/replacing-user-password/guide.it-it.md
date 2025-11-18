---
title: "Come recuperare l'accesso al server in caso di perdita della password dell'utente"
excerpt: "Scopri come configurare una nuova password per un account utente su un sistema operativo GNU/Linux in modalità Rescue OVHcloud"
updated: 2025-10-02
---

## Obiettivo

Senza un’altra modalità di autenticazione o un altro account utente, la perdita della password significa che non è più possibile connettersi al server in modo normale.

In questo caso, è possibile accedere al server tramite la modalità Rescue di OVHcloud, che permette di utilizzare una password provvisoria e modificare i file.

**Questa guida ti mostra come reimpostare la password dell’account utente nel caso in cui non si disponga più dell’accesso al server.**

> [!primary]
>
> Per recuperare l'accesso a un server al quale ti connetti con una chiave SSH, consulta la nostra guida "[Come sostituire una coppia di chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Prerequisiti

- Disporre di un [server dedicato](/links/bare-metal/bare-metal) o di un [VPS](/links/bare-metal/vps) nel proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!primary]
>
> Questa guida non si applica alle installazioni di **Windows** Server. Consulta le nostre guide "[Come cambiare la password amministratore su un server dedicato Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)" e "[Come cambiare la password amministratore su un VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)".
>

## Procedura

Non dimenticare di consultare anche le nostre guide di primo passo:

- Per un [server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Per un [server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Per un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente all’amministrazione, all’utilizzo o all’implementazione dei servizi di un server, ti consigliamo di contattare un [provider specializzato](/links/partner) o [la nostra Community](https://community.ovh.com/en/).
>

<a name="step1"></a>

### Step 1 - Riavvia il server in modalità Rescue

Segui gli step delle nostre guide in modalità Rescue per connetterti al tuo server e montare le tue partizioni:

- [Utilizzare il Rescue mode su un server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Utilizzare il Rescue mode su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Per continuare, è necessario montare la partizione di sistema e disporre dell'accesso in scrittura al file system.

Ciò significa che è stata immessa una versione del comando seguente nella shell della modalità Rescue:

```bash
chroot path/to/partition/mountpoint/
```

Il comando esatto dipende dal punto di montaggio utilizzato. Ad esempio, se la partizione è stata montata su `/mnt`, il comando sarà il seguente:

```bash
chroot /mnt/
```

### Step 2 - Identificare gli account utente e reimpostare la password

Dopo aver montato la partizione ed eseguito `chroot /mnt` (o l’equivalente), disporrai dei privilegi **root** sul sistema montato.

Se necessario, prima di modificare una password, **identifica gli account esistenti** utilizzando questo comando:

```bash
cat /etc/passwd
```

Esempio di risultato (collegamento):

```console
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
.
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin
syslog:x:102:102::/nonexistent:/usr/sbin/nologin
sshd:x:105:65534::/run/sshd:/usr/sbin/nologin
.
user1:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
```

Il nome dell'utente è disponibile nell'elenco degli account.

Per modificare la password di un account specifico (ad esempio: **user1**), utilizza questo comando:

```bash
passwd user1
```

Inserisci due volte la nuova password:

```console
# New password:
# Retype new password:
# passwd: password updated successfully
```

In una distribuzione GNU/Linux, **il prompt della password non visualizza le voci della tastiera**.

> [!primary]
>
> Evita di eseguire il comando `passwd` senza argomenti: questo comando modifica la password dell'account corrente (che è spesso **root** dopo l'esecuzione di `chroot`).
> Specifica sempre `passwd <utente>`.

Utilizza la modalità di avvio **normal** del tuo server quando lo riavvii dallo [Spazio Cliente OVHcloud](/links/manager).

Se necessario, consulta la [guida del Rescue mode](#step1).

L'account utente modificato ora ha accesso al server con la nuova password.

## Per saperne di più

[Creare e utilizzare chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Modalità Rescue per un server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modalità Rescue per un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.