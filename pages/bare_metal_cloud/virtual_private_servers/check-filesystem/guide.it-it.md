---
title: Verifica il file system su un VPS
excerpt: Scopri come cercare errori in un file system
updated: 2021-04-20
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
- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

#### VPS GNU/Linux

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e avvia il riavvio del server in modalità Rescue. Se necessario, consulta la nostra [guida sulla modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Sulle gamme precedenti di VPS, le tue partizioni saranno automaticamente installate in modalità Rescue. Per verificarlo, esegui questo comando:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

L'esempio di risultato mostra un punto di mount esistente. Ciò significa che la partizione da verificare deve essere rimossa:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Se il tuo VPS è recente, la colonna `MOUNTPOINT` dovrebbe essere vuota e potrai ignorare lo step precedente.

Ora puoi verificare la partizione con "fsck":

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 code, 849881/6525179 blocks
```

Se il risultato è vuoto, significa generalmente che il file system è pulito. Puoi comunque forzare una verifica:

```bash
$ fsck /dev/sdb1 -f
```

### VPS Windows

Le istruzioni sopra riportate non si applicano generalmente a un VPS Windows, in quanto la verifica del file system non supporta NTFS. È possibile effettuare una verifica di coerenza NTFS sulle partizioni.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e avvia il riavvio del server in modalità Rescue. Se necessario, consulta la nostra [guida sulla modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Sulle gamme precedenti di VPS, le tue partizioni saranno automaticamente installate in modalità Rescue. Per verificarlo, esegui il comando:


```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

L'esempio di risultato mostra i punti di mount esistenti. Ciò significa che la partizione da verificare deve essere rimossa:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Se il tuo VPS è recente, la colonna `MOUNTPOINT` dovrebbe essere vuota e potrai ignorare lo step precedente.

Il seguente comando verifica la coerenza della partizione e cerca di risolvere eventuali errori:

```bash
$ ntfsfix /dev/sdb1
```

## Per saperne di più

[Attiva la modalità Rescue su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
