---
title: 'Activer des VM Windows installées sur Nutanix by OVHcloud'
excerpt: "Découvrez comment activer une VM Windows Server installée dans Nutanix by OVHcloud avec une licence OVHcloud"
updated: 2022-12-21
---

## Objectif

**Ce tutoriel décrit la procédure pour activer des licences Windows fournies par OVHcloud dans une solution Nutanix by OVHcloud.**

> [!warning]
> Ce tutoriel vous explique comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes et décrit les actions à effectuer dans un contexte spécifique. Vous devrez peut-être adapter les instructions en fonction de votre situation.
>
> Si vous éprouvez des difficultés à appliquer ces instructions, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/). Pour plus d'informations, consultez la section [Aller plus loin](#gofurther) de ce tutoriel.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Une licence Windows fournie par OVHcloud.
- Une machine virtuelle sous Windows Server. Vous pouvez vous aider de ce guide pour installer une machine virtuelle sous Windows : [Gestion des machines virtuelles](/pages/hosted_private_cloud/nutanix_on_ovhcloud/06-virtual-machine-management).
- La machine virtuelle se connecte à Internet au travers du rtvRack (par exemple via la passerelle par défaut).

## En pratique

### Retirer la clé précédente

Lorsque votre système est en version d'essai, une clé par défaut est enregistrée. Pour la modifier, ouvrez l'utilitaire `Exécuter`{.action} (touche de logo Windows + `R`{.action}) :

![Activation de l'utilitaire Exécuter](images/01-run01.png){.thumbnail}

![Exécuter](images/01-run02.png){.thumbnail}

Dans cet utilitaire, renseignez la commande suivante :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Ajouter la nouvelle clé

Vous pouvez désormais ajouter la nouvelle clé. Pour cela, retournez dans l'utilitaire `Exécuter`{.action} et renseignez la commande suivante :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLEF KMS
```

Vous trouverez les clés de licence des versions prises en charge de Windows Server dans le tableau disponible sur la [page Web officielle de Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Les versions Core utilisent les mêmes clés KMS que les versions non Core.
> 

### Utiliser kms.ovh.net

Afin que votre clé soit associée à notre robot d'activation, utilisez la commande ci-dessous dans l'utilitaire `Exécuter`{.action} :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

## Activer le système

Enfin, pour activer votre système Windows, il vous reste désormais à exxécuter la commande ci-dessous :

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
