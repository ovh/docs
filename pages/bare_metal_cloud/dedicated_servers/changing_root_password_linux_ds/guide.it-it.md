---
title: Modificare la password di root su un server dedicato
excerpt: Come modificare la password di root del tuo server dedicato
updated: 2021-02-16
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


## Obiettivo

Potrebbe essere necessario modificare la password di root (o quella dell'utente admin/sudo) sul tuo sistema operativo GNU/Linux.
<br>Sono possibili due scenari:

- Accedi sempre via SSH
- Non puoi connetterti via SSH perché hai perso la password

**Questa guida ti mostra come modificare la password amministratore in base alla situazione iniziale.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/)
- Disporre delle credenziali di accesso ricevute via email dopo l'installazione (se ancora valide)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) (per utilizzare la modalità Rescue)

> [!warning]
>OVHcloud fornisce i servizi di cui sei responsabile per la configurazione e la gestione. Sei quindi responsabile del loro corretto funzionamento.
>
>Questa guida ti mostra come eseguire le operazioni necessarie per eseguire l'operazione. Tuttavia, in caso di difficoltà o dubbi relativamente all'amministrazione, all'utilizzo o alla realizzazione dei servizi su un server, ti consigliamo di contattare un fornitore di servizi specializzato.
>

## Procedura

### Modifica la password se hai sempre accesso (utente sudo o root)

Accedi al tuo server via SSH. Se necessario, passa all'utente root:

```bash
sudo su -
#
```

Per modificare la password dell'utente attuale, digita `passwd`. Successivamente, digita due volte la tua nuova password come indicato di seguito:

```bash
passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Ti ricordiamo che su una distribuzione GNU/Linux, i caratteri della password **non appaiono** man mano che le digitate.
>

### Modifica la password se l'hai persa

#### Step 1: individua la partizione di sistema

Dopo aver riavviato il server in [modalità Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), è necessario identificare la partizione di sistema. Per eseguire questa operazione, esegui il comando:

```bash
fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Nel nostro esempio, la partizione di sistema è /dev/hda1.

> [!primary]
>
> Se il tuo server dispone di una configurazione RAID, è necessario montare il volume raid:
>
> - con un RAID software, la tua partizione radice sarà `/dev/mdX`;
> - con un RAID hardware, la tua partizione radice sarà `/dev/sdX`.
>

#### Step 2: esegui il mount della partizione di sistema

Una volta individuata la partizione di sistema puoi effettuarne il mount attraverso il seguente comando:

```bash
mount /dev/hda1 /mnt/
```

#### Step 3: modifica la partizione di root

Di default, la partizione di sistema è bloccata per la modifica. Per effettuare l'accesso in scrittura, esegui questo comando:

```bash
chroot /mnt
```

#### Step 4: modifica la password di root

L'ultimo step consiste nel modificare la password con il seguente comando:

```
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Una volta completato questo step, modifica la modalità di avvio sul tuo server per `Booter sull'hard disk`{.action} e riavvialo. La password di root è stata modificata.

## Per saperne di più

[Attivare e utilizzare la modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Modificare la password amministratore su un server dedicato Windows](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.