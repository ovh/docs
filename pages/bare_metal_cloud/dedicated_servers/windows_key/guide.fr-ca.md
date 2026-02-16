---
title: "Corriger la clé d’activation Windows Server"
excerpt: "Découvrez comment modifier la clé d'activation de votre Windows Server"
updated: 2026-01-06
---

## Objectif

Lors de l'installation d'un système d'exploitation Windows Server, il est possible que la clé d'activation ne soit pas correctement enregistrée. Dans ce cas, le système est installé avec une clé en version d'essai d'une durée de 120 jours. Passé ce délai, votre système ne sera plus utilisable.

**Ce guide vous explique comment modifier la clé d'activation de votre environnement Windows Server.**

## Prérequis

- Disposer d'un [serveur dédié OVHcloud](/links/bare-metal/os) exécutant Windows Server ou d'une machine virtuelle exécutant Windows Server sur un service [Managed VMware](/links/hosted-private-cloud/vmware-images-licenses).
- Disposer d'une licence Windows SPLA dans votre compte OVHcloud
- Avoir un accès administratif à votre serveur via une connexion bureau à distance

## En pratique

### Retirer la clé précédente

Lorsque votre système est en version d'essai, une clé par défaut est enregistrée. Pour la modifier, ouvrez l'utilitaire `Exécuter`{.action} (touche de logo Windows + `R`{.action}) :

![Activation de l'utilitaire Exécuter](images/executer.png){.thumbnail}

![Exécuter](images/executer2.png){.thumbnail}

Dans cet utilitaire, renseignez la commande suivante :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Ajouter la nouvelle clé

Vous pouvez désormais ajouter la nouvelle clé. Pour cela, retournez à nouveau dans l'utilitaire `Exécuter`{.action} et renseignez la commande suivante :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLEF KMS
```

Vous trouverez les clés de produit des versions prises en charge de Windows Server dans le tableau disponible sur la [page Web officielle de Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Les versions Core utilisent les mêmes clés KMS que les versions non Core.
> 

### Utiliser kms.ovh.net

Afin que votre clé soit associée à notre robot d'activation, utilisez la commande ci-dessous dans l'utilitaire `Exécuter`{.action} :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Si vous utilisez un VPS ou une instance Public Cloud, il faut utiliser `kms.cloud.ovh.net`.
> 

### Activer le système

Enfin, pour activer votre système Windows, il vous reste désormais à effectuer la commande ci-dessous :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
