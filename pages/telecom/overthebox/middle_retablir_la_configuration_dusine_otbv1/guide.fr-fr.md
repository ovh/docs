---
title: 'Rétablir la configuration d''usine OverTheBox Intel'
slug: retablir-la-configuration-dusine-otb-intel
excerpt: 'Afin de repartir sur de bonnes bases ou utiliser OverTheBox dans une nouvelle configuration, vous pouvez réinitialiser OverTheBox.  Ce guide propose plusieurs méthodes, chacune permet d''arriver au même résultat.'
section: 'Rétablir la configuration d''usine'
---

## Action manuelle
- Appuyez **rapidement** 5 fois de suite sur le bouton on/off (en moins de 2 secondes)


![overthebox](images/4364.png){.thumbnail}

- Attendez 15 minutes afin qu' **OverTheBox** soit de nouveau opérationnelle



> [!success]
>
> Votre  OvertheBox  est maintenant réinitialisée, vous pouvez la
> réinstaller en suivant la procédure du guide : Mes 10 premières minutes avec OverTheBox <docs/telecom/overthebox/mes_10_premieres_minutes_avec_overthebox/otbv1/>
> 


## Action dans l'interface OverTheBox

### Pour faire une simple suppression de votre configuration (uniquement à partir de la version 0.6.x)
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Cliquez sur **"System"**
- Cliquez sur **"Backup/Flash Firmware"**
- Cliquez sur **"Perform Reset"**


![overthebox](images/PerformReset.png){.thumbnail}


### Pour faire une restauration complète du système
- Téléchargez le fichier suivant sur votre ordinateur : [http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz](http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz){.external}
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Cliquez sur **"System"**
- Cliquez sur **"Backup/Flash Firmware"**


![overthebox](images/4365.png){.thumbnail}

Ensuite, dans la section  **Flash new firmware image** :

- Cliquez sur **"Parcourir"**
- Choisissez le fichier image que vous venez de télécharger
- Décochez la case **"Keep settings"** (afin de faire une véritable réinitialisation)
- Cliquez sur **"Flash image"**


![overthebox](images/4366.png){.thumbnail}

- Attendez 15 minutes afin qu' **OverTheBox** soit de nouveau opérationnelle



> [!success]
>
> Votre  OvertheBox  est maintenant réinitialisée, vous pouvez la
> réinstaller en suivant la procédure du guide : Mes 10 premières minutes avec OverTheBox <docs/telecom/overthebox/mes_10_premieres_minutes_avec_overthebox/otbv1/>
> 


## Action en commande (via SSH ou un écran branché sur l'OverTheBox)

### Pour faire une simple suppression de votre configuration (uniquement à partir de la version 0.6.x)
- Connectez vous en SSH à votre **OverTheBox** (ssh [root@overthebox.ovh](mailto:root@overthebox.ovh){.external}) ou branchez un écran directement sur l' **OverTheBox** en VGA puis un clavier en USB
- Tapez la commande :


```bash
firstboot -y
```


### Pour faire une restauration complète du système
- Connectez vous en SSH à votre **OverTheBox** (ssh [root@overthebox.ovh](mailto:root@overthebox.ovh){.external}) ou branchez un écran directement sur l' **OverTheBox** en VGA puis un clavier en USB
- Tapez la commande :


```bash
otb-action-sysupgrade
```

- Attendez 5 minutes afin qu'**OverTheBox** soit de nouveau opérationnelle



> [!success]
>
> Votre  OvertheBox  est maintenant réinitialisée, vous pouvez la
> réinstaller en suivant la procédure du guide : Mes 10 premières minutes avec OverTheBox <docs/telecom/overthebox/mes_10_premieres_minutes_avec_overthebox/otbv1/>
> 


## Action via une clef USB

### Création de la clef bootable sous Windows (logiciel Win32 Disk Imager)
- Téléchargez l'image **"Rescue"** [http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz](http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz){.external}

Cette image permettra à votre clef USB de devenir le "support de boot" de l' **OverTheBox**

- Décompressez l'image grâce à un logiciel comme **winrar** afin d'obtenir le fichier **.img**
- Branchez votre clef USB sur l'ordinateur
- Téléchargez le logiciel **Win32 Disk Imager** et ouvrez le.
- Cliquez sur **"Parcourir"** pour retrouver le fichier **.img**
- Sélectionnez la clef USB dans le champs **Device**
- Cliquez sur **"write"**
- Une fois la procédure terminée, cliquez sur **"Exit"**


![overthebox](images/4463.png){.thumbnail}



> [!success]
>
> La clef USB est maintenant prête à être utilisée pour flasher l'OverTheBox
> 


### Création de la clef bootable sous Mac OS
Toute l'opération sera fera en ligne de commande, veuillez donc ouvrir le **Terminal**

- Télécharger l'image **"Rescue"** via la commande suivante


```bash
curl -C - -O http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz
```

Ce fichier permettra à votre clef USB de devenir le "support de boot" de l'**OverTheBox**

Il est ensuite impératif de connaitre le dossier désignant les partitions de votre clef USB, pour cela :

- Tapez la commande suivante juste après avoir branché la clef USB :


```bash
diskutil list
```

Vous obtiendrez plusieurs rubriques /dev/disk**X** (ou **X** est remplacé par un chiffre)

Le dossier correspondant à votre clef doit être le dernier et être désigné comme ceci : /dev/disk **X**  (external, physical). Vous pouvez vous en assurer en vérifiant que le nom de votre clef est bien affiché comme sur l'illustration suivante


![overthebox](images/4492.png){.thumbnail}

Maintenant que vous connaissez l'emplacement de votre clef USB, vous pouvez flasher cette dernière.

- Tapez la commande suivante ( **en remplaçant X par le bon chiffre de votre clef** ):


```bash
gunzip -c latest.img.gz | dd of=/dev/diskX
```

Veuillez patienter le temps de l’exécution, **cela peut durer plusieurs minutes**.



> [!success]
>
> La clef USB est maintenant prête à être utilisée pour flasher l'OverTheBox
> 


### Création de la clef bootable sous Linux
Toute l'opération sera fera en ligne de commande, veuillez donc ouvrir le **Terminal**

- Téléchargez l'image **"Rescue"** via la commande suivante


```bash
wget http://downloads.overthebox.net/stable/targets/x86/64/latest.img.gz
```

Ce fichier permettra à votre clef USB de devenir le "support de boot" de l'**OverTheBox**

Il est ensuite impératif de connaitre le dossier désignant les partitions de votre clef USB, pour cela :

- Tapez la commande suivante juste après avoir branché la clef USB :


```bash
df -h
```

Vous obtiendrez plusieurs rubriques /dev/sd**X** (ou **X** est remplacé par une lettre)

Le dossier correspondant à votre clef doit être le dernier, vous pouvez vous en assurer en vérifiant que le nom de votre clef est bien affiché dans les dernières lignes.

Maintenant que vous connaissez l'emplacement de votre clef USB, vous pouvez flasher cette dernière.

- Tapez la commande suivante ( **en remplaçant X par la bonne lettre de votre clef** ):


```bash
gunzip -c latest.img.gz | dd of=/dev/sdX
```

Veuillez patienter le temps de l’exécution, **cela peut durer plusieurs minutes**.



> [!success]
>
> La clef USB est maintenant prête à être utilisée pour flasher l'OverTheBox
> 


### Réinitialisation grâce à la clef bootable
- Débranchez l' **OverTheBox** du courant électrique
- Branchez la clef USB flashée sur un des ports USB au dos de l' **OverTheBox** (Ne pas brancher la clef sur le port USB de façade)


![overthebox](images/4374.png){.thumbnail}

- Rebranchez l' **OverTheBox** sur le courant électrique, le boitier commence déjà sa réinitialisation.
- Attendez jusqu'à ce que le **voyant de façade Power** soit éteint (cela peut prendre quelque minutes)
- Débranchez la clef USB puis redémarrez votre **OverTheBox** .



> [!success]
>
> Votre  OvertheBox  est maintenant réinitialisée, vous pouvez la
> réinstaller en suivant la procédure du guide : Mes 10 premières minutes avec OverTheBox <docs/telecom/overthebox/mes_10_premieres_minutes_avec_overthebox/otbv1/>
> 