---
title: 'Activer des machines virtuelles sous Windows Server installées dans Nutanix by OVHcloud avec des licences SPLA OVHcloud'
slug: activate-ovhcloud-windows-licence
excerpt: "Découvrez comment activer une machine virtuelle Windows Server installée dans Nutanix by OVHcloud avec une licence SPLA OVHcloud"
section: "Utilisation avancée"
order: 04
---

**Dernière mise à jour le 21/12/2022**

## Objectif

**Ce tutoriel décrit la procédure pour activer des licences Windows fournies par OVHcloud dans une solution Nutanix by OVHcloud**

> [!warning]
> Ce tutoriel vous explique comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes et décrit les actions à effectuer dans un contexte spécifique. Vous devrez peut-être adapter les instructions en fonction de votre situation.
>
> Si vous éprouvez des difficultés à appliquer ces instructions, nous vous recommandons de faire appel à un prestataire spécialisé. Pour plus d'informations, consultez la section [Aller plus loin](#gofurther) de ce tutoriel.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Une licence Windows fournie par OVHcloud.
- Une machine virtuelle sous Windows Server. Vous pouvez vous aider de ce guide pour installer une machine virtuelle sous Windows [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/).
- Que la machine virtuelle se connecte à Internet au travers du rtVrack (Par exemple via la passerelle par défaut).

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

Voici la liste des clés KMS disponibles pour chaque système d'exploitation :

|Système d'exploitation|Clé KMS|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Entreprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Entreprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Pro|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|
|Windows Server 2022 Standard|VDYBN-27WPP-V4HQT-9VMD4-VMK7H|
|Windows Server 2022 Datacenter|WX4NM-KYWYW-QJJR4-XV3QB-6VM33|

Source : [Microsoft](https://docs.microsoft.com/en-gb/windows-server/get-started/kmsclientkeys){.external}

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
