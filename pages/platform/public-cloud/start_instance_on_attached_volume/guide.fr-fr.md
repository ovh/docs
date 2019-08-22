---
title: Démarrer une instance sur un volume attaché
slug: demarrer-une-instance-sur-un-volume-attache
legacy_guide_number: 2064
section: Base de connaissances
---


## Préambule
Les serveurs cloud sont livrés avec un disque d'origine qui est copié à partir d'une image système (Debian 8, Windows 10...). Il est possible d'utiliser également des volumes supplémentaires, ce sont des disques persistant qui vont permettre de stocker des données.

Il est également possible de déployer un système d'exploitation sur un volume et de démarrer dessus. Le serveur cloud démarrera alors sur ce volume au lieu du disque d'origine.


![public-cloud](images/3704.png){.thumbnail}



> [!success]
>
> OpenStack permet nativement de démarrer depuis un volume. Il suffit de rendre
> le volume bootable et de démarrer le serveur cloud à partir de ce volume.
> L'effet de bord de cette manipulation sera de faire disparaitre le disque
> d'origine puisque le volume viendra en lieu et place de celui ci. La
> fonctionnalité décrite dans ce guide permet d'éviter de ne pas avoir accès
> au disque de d'origine et donc de profiter de sa volumétrie.
> 


### Prérequis
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}
- Un volume avec un système d'exploitation


## Configuration du Volume

### Marquer le volume comme prioritaire dans l'ordre de boot
Une metadata doit être ajoutée au volume pour que le serveur cloud puisse prioriser ce disque lors de la phase de boot.


```bash
cinder metadata 897ec71d-bae2-4394-b8c1-4d8fd373a725 set boot_from=True
```


### Attacher le volume
Une fois que le volume est paramétré avec la metadata boot_from à True, il faut attacher le volume à l'instance.


```bash
nova volume-attach myinstance01 897ec71d-bae2-4394-b8c1-4d8fd373a72
```


## Redemarrage de l'instance
Pour que l'instance démarre sur le volume additionnel, il faut redémarrer l'instance.

Soit par l'action nova stop, puis nova start, soit par un reboot forcé.


```bash
nova reboot --hard myinstance01
```



> [!alert]
>
> Un reboot "soft" ne sera pas suffisant pour la prise en compte.
> 

Pour constater le bon ordre de démarrage, il suffit de regarder les points de montage.


```bash
$ lsblk
NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda    252:0    0  10G  0 disk
└─vda1 252:1    0  10G  0 part
vdb    252:16   0  15G  0 disk
└─vdb1 252:17   0  15G  0 part /
```

Le point de montage / est bien monté depuis /dev/vdb1.