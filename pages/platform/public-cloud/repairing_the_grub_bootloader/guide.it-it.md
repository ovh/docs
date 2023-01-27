---
title: Riparare il bootloader GRUB
slug: riparare-il-bootloader-grub
excerpt: Guida alla riparazione del bootloader GRUB su un'istanza
section: Tutorial
updated: 2020-11-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/11/2020**

## Obiettivo

Potrebbe essere necessario riparare il bootloader GRUB. Questa guida ti mostra come eseguire l'operazione per ripristinare il funzionamento dell'istanza.

## Prerequisiti

- L'istanza deve essere in modalità Rescue (consulta la guida [Attivare un'istanza in modalità Rescue](../riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/))

## Procedura

Accedi all'istanza tramite il VNC [dello Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o via SSH.

Imposta questi comandi per montare il file system remoto e avviare la riparazione di GRUB:

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

### Aggiorna GRUB (o GRUB2)

Aggiorna GRUB:

```sh
grub-install /dev/sdb
update-grub
```

Aggiorna GRUB2:

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

A questo punto, è possibile rimuovere l'istanza dal Rescue mode. (Consulta la guida [Attivare un'istanza in modalità Rescue](../riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/))

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.