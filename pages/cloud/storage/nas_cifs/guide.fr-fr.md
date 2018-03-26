---
title: Monter votre NAS sur Windows Serveur via CIFS
slug: nas/nas-cifs
excerpt: Decouvrez ici comment monter un NAS sur un Windows Serveur via CIFS.
section: NAS
---


## Prérequis
Pour effectuer le montage d'un partage CIFS , il vous faut :

- Une distribution Windows Serveur sur un Serveur dédié, un VPS ou une Instance Public Cloud.
- Un NAS OVH


## Configuration
- (Windows Serveur 2008) Cliquez sur le menu "démarrez" > "Tous les programmes" > "Accessoires" > "Invite de commandes".
- (Windows Serveur 2012) Cliquez sur l'icône "power shell" dans la barre des tâches.
- (Windows Serveur 2016) Cliquez sur le menu "démarrez", puis sur l'icône du "power shell".
- Puis exécutez la commande suivante :


```bash
net use z: \\IP_SERVEUR_CIFS\CHEMIN_CIFS
```


### Exemples
- Montage CIFS pour un Mini-NAS :


```bash
net use z: \\10.16.100.10\nas-000041_mininas-000212
```

- Montage CIFS pour un NAS ou NAS-HA  :


```bash
net use z: \\10.16.101.8\zpool-000206_partition1
```



> [!alert]
>
> L'utilisateur SMB/CIFS est "nobody", les modifications de droits avec cet utilisateur peut générer des conflits avec des droits NFS existants.
> 