---
title: Mettre à jour le firewall CISCO ASA
excerpt: Découvrez comment mettre à jour votre firewall CISCO ASA
slug: mettre-a-jour-firewall-cisco-asa
section: Utilisation avancée
---

**Dernière mise à jour le 2018/03/01**

## Objectif

Pour protéger de manière optimale votre système, votre firewall CISCO Adaptive Security Appliance (ASA) doit bénéficier des derniers patchs de mise à jour. Ceux-ci permettent de pallier les éventuelles failles de sécurité.

**Ce guide vous explique comment effectuer la mise à jour de votre firewall CISCO ASA.**

## Prérequis

- Avoir accès à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

### Désactiver l'ASA depuis l'espace client

La procédure de mise à jour va nécessiter plusieurs redémarrages. Nous vous conseillons donc de désactiver l'ASA pour ne pas rendre le serveur indisponible pendant la procédure de mise à jour.

Pour cela, rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Dédié`{.action}. Choisissez ensuite votre serveur dédié, puis `Firewall Cisco ASA`{.action}. Cliquez enfin à droite sur `Désactiver le firewall Cisco ASA`{.action}

![Désactivation de l'ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Enregistrer la configuration

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager (ou ASDM), puis choisissez `File`{.action} et `Save Running Configuration to Flash`{.action} :

![Enregistrement de la configuration via ASDM](images/asa1.jpg){.thumbnail}

#### Deuxième méthode en SSH

Connectez-vous en SSH à l'ASA :

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Tapez ensuite la commande suivante :

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Sauvegarder la configuration

Créez un fichier local, par exemple `backupAsa.txt`. Connectez-vous ensuite dans ASDM et allez dans `Tools`{.action}, puis `Backup Configurations`{.action}.

![Sauvegarder la configuration via ASDM 1](images/asa2.jpg){.thumbnail}

Dans le menu contextuel qui s'est ouvert, choisissez le fichier local que vous avez créé précédemment (avec `Browse Local...`{.action}), puis sauvegardez la configuration avec `Backup`{.action}.

![Sauvegarder la configuration via ASDM 2](images/asa3.jpg){.thumbnail}


### Redémarrer l'ASA

Cette étape est importante, car il est nécessaire de vous assurer que l'ASA fonctionne et soit accessible après un simple redémarrage.

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager, puis choisissez `Tools`{.action} et `System Reload...`{.action} :

![Redémarrer l'ASA via l'ASDM 1](images/asa5.jpg){.thumbnail}

Pour un redémarrage immédiat, dans la fenêtre qui est apparue, choisissez dans `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![Redémarrer l'ASA via l'ASDM 2](images/asa6.jpg){.thumbnail}

![Redémarrer l'ASA via l'ASDM 3](images/asa7.jpg){.thumbnail}


#### Deuxième méthode en SSH

Connectez-vous en SSH à l'ASA et entrez la commande `reload` :

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Le redémarrage pour recharger la configuration va prendre quelques minutes .


### Réactiver l'ASA depuis l'espace client

Comme pour la première étape, rendez-vous dans votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Dédié`{.action}. Choisissez ensuite votre serveur dédié, puis `Firewall Cisco ASA`{.action}. Enfin, cliquez à droite sur `Activer le firewall Cisco ASA`{.action}.

![Activation de l'ASA](images/customer_panel_asa_enable.png){.thumbnail}


Après le redémarrage, quand l'ASA est en marche, vérifiez que tous les services sur votre serveur fonctionnent. Si tout est fonctionnel, passez à l'étape suivante. Si vous rencontrez des blocages, effectuez les vérifications adéquates pour résoudre les dysfonctionnements avant de passer aux étapes suivantes.


### Désactiver à nouveau l'ASA depuis l'espace client

Il est à nouveau temps de désactiver l'ASA comme lors de la première étape.

Pour cela, rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Dédié`{.action}. Choisissez ensuite votre serveur dédié puis `Firewall Cisco ASA`{.action}. Enfin, cliquez à droite sur `Désactiver le firewall Cisco ASA`{.action}.

![Désactivation de l'ASA](images/customer_panel_asa_disable.png){.thumbnail}


### Vérifier le fichier binaire actuellement utilisé

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager, puis rendez-vous dans `Device Information`{.action}, puis `General`{.action}. Là, vous retrouverez votre version d'ASA et d'ASDM. Nous vous conseillons de les noter et de les conserver.

![Vérifier les binaires via l'ASDM](images/asa9.jpg){.thumbnail}


#### Deuxième méthode en SSH

Connectez-vous en SSH et entrez la commande suivante :


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system* : la version de l'ASA
- *asdm image* : la version de l'ASDM


### Vérifier quel fichier binaire doit être utilisé

Pour trouver le fichier binaire à utiliser, référez-vous au tableau suivant :

|Version actuelle ASA|Première version vers laquelle mettre à jour|Mettre ensuite à jour vers|
|---|---|---|
|8.2(x) et antérieures|8.4(6)|9.1(3) et suivantes|
|8.3(x)|8.4(6)|9.1(3) et suivantes|
|8.4(1) jusqu'à 8.4(4)|8.4(6) ou 9.0(2+)|9.1(3) et suivantes|
|8.4(5+)|Aucune|9.1(3) et suivantes|
|8.5(1)|9.0(2+)|9.1(3) et suivantes|
|8.6(1)|9.0(2+)|9.1(3) et suivantes|
|9.0(1)|9.0(2+)|9.1(3) et suivantes|
|9.0(2+)|Aucune|9.1(3) et suivantes|
|9.1(1)|9.1(2)|9.1(3) et suivantes|
|9.1(2+)|Aucune|9.1(3) et suivantes|
|9.2(x)|Aucune|9.2(2) et suivantes|

Par exemple, si votre ASA est sur une version 8.4(2), il faudra d'abord mettre à jour votre système vers la version 8.4(6), puis mettre à jour vers 8.4(7+) ou 9.2+.


Pour plus d'informations reportez-vous à la [documentation Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> Pour des firewall Cisco ASA avec 256 Mo de mémoire, nous vous conseillons de mettre à jour la version 8.4(x) uniquement. Les versions 9.1(x) et 9.2(x) vont utiliser quasiment l'intégralité des 256 Mo sans être en production.
>

Vous pouvez vérifier la version que vous possédez avec l'une des deux solutions suivantes :

- En SSH avec cette commande :

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- Dans ASDM, partie `Tools`{.action}, puis `Command Line Interface...`{.action} :

![Vérifier la version du binaire dans l'ASDM 1](images/asa10.jpg){.thumbnail}

![Vérifier la version du binaire dans l'ASDM 2](images/asa11.jpg){.thumbnail}


### Retirer les fichiers binaires non utilisés

Avant d'ajouter les nouveaux fichiers binaires, il convient de retirer les anciens.

#### Première méthode via l'ASDM
Connectez-vous au Cisco Adaptive Security Device Manager. Allez ensuite dans `Tools`{.action}, puis `File Management...`{.action}.

![Retirer les fichiers binaires non utilisés dans l'ASDM 1](images/asa12.jpg){.thumbnail}

Supprimez ensuite les fichiers binaires (*.bin*) non utilisés. Il ne vous restera alors plus qu'un fichier pour l'ASA et un pour l'ASDM sur le disque.

![Retirer les fichiers binaires non utilisés dans l'ASDM 2](images/asa13.jpg){.thumbnail}


#### Deuxième méthode en SSH

Connectez-vous en SSH à votre ASA, puis retirez les fichiers après les avoir listés :

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Ajouter et installer les fichiers binaires ASDM

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager. Allez ensuite dans `Tools`{.action}, puis cliquez sur `Upgrade Software from Local Computer...`{.action}.

![Ajouter et installer les fichiers binaires ASDM via l'ASDM 1](images/asa14.jpg){.thumbnail}

Dans l'écran suivant choisissez :

- *Image to upload* : ASDM ;
- *Local File Patch* : tapez `Browse Local Files`{.action} et choisissez votre version du fichier binaire de l'ASDM.

Validez ensuite votre choix en cliquant sur `Upload Image`{.action}, puis validez avec `Yes`{.action} pour confirmer que cette image doit devenir l'image de démarrage :

![Ajouter et installer les fichiers binaires ASDM via l'ASDM 2](images/asa15.jpg){.thumbnail}

![Ajouter et installer les fichiers binaires ASDM via l'ASDM 3](images/asa16.jpg){.thumbnail}


#### Deuxième méthode en SSH

Le fichier binaire doit au préalable être placé sur un serveur FTP et vous devez configurer en SSH l'ASA pour l'utiliser et en sauvegarder la configuration :

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Ajouter et installer les nouveaux fichiers binaires ASA

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager. Allez dans `Tools`{.action}, puis cliquez sur `Upgrade Software from Local Computer...`{.action}.

![Ajouter et installer les fichiers binaires ASA via l'ASDM 1](images/asa14.jpg){.thumbnail}

Dans l'écran suivant choisissez :

- *Image to upload* : ASA ;
- *Local File Patch* : tapez `Browse Local Files`{.action} et choisissez votre version du fichier binaire de l'ASA.

 
Validez ensuite votre choix en cliquant sur `Upload Image`{.action}, puis validez avec `Yes`{.action} pour confirmer que cette image doit devenir l'image de démarrage :

![Ajouter et installer les fichiers binaires ASA via l'ASDM 2](images/asa18.jpg){.thumbnail}

![Ajouter et installer les fichiers binaires ASA via l'ASDM 3](images/asa20.jpg){.thumbnail}


#### Deuxième méthode en SSH

Connectez-vous en SSH et entrez ensuite les commandes suivantes :

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Redémarrer l'ASA

Cette étape est importante, car il est indispensable de s'assurer que l'ASA fonctionne et soit accessible après un simple redémarrage.

#### Première méthode via l'ASDM

Connectez-vous au Cisco Adaptive Security Device Manager. Choisissez ensuite `Tools`{.action}, puis `System Reload...`{.action} :

![Redémarrer l'ASA via l'ASDM 1](images/asa5.jpg){.thumbnail}

Dans la fenêtre qui est apparue, pour un redémarrage immédiat, choisissez dans `Reload Start Time` : `Now`{.action}, puis cliquez sur `Schedule Reload`{.action} :

![Redémarrer l'ASA via l'ASDM 2](images/asa6.jpg){.thumbnail}

![Redémarrer l'ASA via l'ASDM 3](images/asa7.jpg){.thumbnail}


#### Deuxième méthode en SSH

Connectez-vous en SSH à l'ASA et entrez la commande `reload` :

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Le redémarrage pour recharger la configuration va prendre quelques minutes.

 

> [!warning]
>
> Si à cette étape vous n’arrivez pas à ajouter le fichier binaire de l’ASA, redémarrez pour mettre à jour l'ASDM puis retirez le binaire ASDM inutilisé pour libérer de l'espace.
> 
> Mettez ensuite à jour le binaire ASA en suivant la procédure détaillée ci-dessus.
>

 

### Corriger la configuration

Pendant la mise à jour de l'ASA depuis les versions antérieures à la 8.4.6, vous trouverez cette nouvelle configuration après le redémarrage :

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


La configuration doit être corrigée comme suit :

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Firewall Cisco ASA à jour](images/asa10.jpg){.thumbnail}

![Firewall Cisco ASA à jour](images/asa23.jpg){.thumbnail}



### Réactiver l'ASA depuis l'espace client

Comme pour la première étape, rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} partie `Dédié`{.action}. Choisissez ensuite votre serveur dédié puis `Firewall Cisco ASA`{.action}. Enfin, cliquez à droite sur `Activer le firewall Cisco ASA`{.action}.

![Activation de l'ASA](images/customer_panel_asa_enable.png){.thumbnail}



Votre ASA est désormais à jour.

![Firewall Cisco ASA à jour](images/asa22.jpg){.thumbnail}



## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
