---
title: 'Installer l''image OverTheBox sur votre matériel'
description: 'Installer l''image OverTheBox sur votre matériel'
slug: installer-limage-overthebox-sur-votre-materiel
excerpt: 'Pour installer l''image  OverTheBox  vous aurez besoin de démarrer une distribution &quot;Live&quot; linux afin de copier l''image sur votre matériel.'
section: 'Configurations techniques complexes'
---

## Booter depuis une distribution linux live
Vous pouvez par exemple créer une clé usb bootable sous Ubuntu en suivant ce document : [http://doc.ubuntu-fr.org/live_usb](http://doc.ubuntu-fr.org/live_usb){.external} Vous aurez besoin d'un clavier et d'un écran.


## Identifier l'espace disque de destination
Avec la commande


```bash
cat /proc/partitions

root@OpenWrt:~# cat /proc/partitions
major minor  #blocks  name
 179        0    3866624 mmcblk0
 179        1       4096 mmcblk0p1
 179        2     524288 mmcblk0p2
 179       24       2048 mmcblk0rpmb
 179       16       2048 mmcblk0boot1
 179        8       2048 mmcblk0boot0
```

On identifie dans cette exemple que la destination d'installation sera **mmcbk0**


## Téléchargez l'image OverTheBox
Sur cette page vous pouvez retrouver les images d' **OverTheBox**  compilées : [http://downloads.overthebox.net/stable/targets/x86/64/](http://downloads.overthebox.net/stable/targets/x86/64/){.external}


```bash
wget http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz
```


## Installation

```bash
gunzip latest.img.gz
sudo dd if=latest.img of=/dev/mmcxxx
```

Vous avez simplement à remplacer  **mmcxxx**  par votre destination d'installation.

Retirez maintenant votre "live usb" et redémarrez votre matériel.