---
title: Verifica il file system su un VPS
excerpt: Scopri come cercare errori in un file system
updated: 2023-09-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

**Questa guida ti mostra come diagnosticare i file system sui VPS OVHcloud utilizzando la modalità Rescue.**

> [!warning]
>OVHcloud fornisce i servizi di cui sei responsabile per la configurazione e la gestione. Sei quindi responsabile del loro corretto funzionamento.
>
>In caso di difficoltà nell'effettuare queste azioni, contatta un fornitore di servizi specializzato e/o contatta la nostra Community di utenti <https://community.ovh.com/en/>. OVHcloud non potrà fornirti assistenza tecnica al riguardo.
>

## Prerequisiti

- un [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### VPS GNU/Linux

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e avvia il riavvio del server in modalità Rescue. Se necessario, consulta la nostra [guida sulla modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

In seguito sarà possibile verificare la configurazione dei dischi:

```bash
lsblk
```

La partizione corrispondente al Rescue mode (`sda1` in questo esempio) è montata nella directory `/` .Mentre il disco del VPS è denominato `sdb` e non deve avere alcun punto di mount.

ad esempio,

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Se il risultato è simile a quello dell'esempio precedente e la colonna `MOUNTPOINT` è vuota nella riga corrispondente (`sdb1`), è possibile passare [allo step successivo](#fscheck).

Tuttavia, se il risultato indica l’esistenza di un punto di mount per la partizione VPS, è necessario smontarla.

ad esempio,


```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Nell'output di esempio sopra riportato, la partizione `sdb1` viene montata su `/mnt/`. Per verificare la partizione, è necessario eseguirne il mount.

Per smontare la partizione, esegui il comando:

```bash
umount /dev/partition_name
```

In questo esempio di configurazione, il comando sarebbe:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Ora puoi verificare la partizione con "fsck":

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 code, 849881/6525179 blocks
```

Se il risultato è vuoto, significa generalmente che il file system è pulito. Puoi comunque forzare una verifica:

```bash
fsck /dev/sdb1 -f
```

### VPS Windows

Le istruzioni sopra riportate non si applicano generalmente a un VPS Windows, in quanto la verifica del file system non supporta NTFS. È possibile effettuare una verifica di coerenza NTFS sulle partizioni.

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e avvia il riavvio del server in modalità Rescue. Se necessario, consulta la nostra [guida sulla modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

In seguito sarà possibile verificare la configurazione dei dischi:

```bash
lsblk
```

La partizione corrispondente al Rescue mode (`sda1` in questo esempio) è montata nella directory `/` .Mentre il disco del VPS è denominato `sdb` e non deve avere alcun punto di mount.

ad esempio,

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Se il risultato è simile a quello dell'esempio precedente e la colonna `MOUNTPOINT` è vuota nella riga corrispondente, è possibile passare [allo step successivo](#fscheckwin).

Tuttavia, se il risultato indica l’esistenza di un punto di mount per la partizione VPS, è necessario smontarla.

ad esempio,


```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Nell’output di esempio sopra riportato, la partizione interessata `sdb2` è montata su `/mnt/`. Per verificare la partizione, è necessario eseguirne il mount.

Per smontare la partizione, esegui il comando:

```bash
umount /dev/partition_name
```

In questo esempio di configurazione, il comando sarebbe:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

Il seguente comando verifica la coerenza della partizione e cerca di risolvere eventuali errori:

```bash
ntfsfix /dev/partition_name
```

In questo esempio di configurazione, il comando sarebbe:

```bash
ntfsfix /dev/sdb2
```

## Per saperne di più

[Attiva la modalità Rescue su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
