---
title: 'Corriger la clé d’activation Windows Server'
excerpt: 'Découvrez comment modifier la clé d''activation de votre Windows Server'
slug: windows-key
section: Divers
---

**Dernière mise à jour le 2018/02/22**

## Objectif

Lors de l'installation d'un système d'exploitation Windows Server, il est possible que la clé d'activation ne soit pas correctement enregistrée. Dans ce cas, le système est installé avec une clé en version d'essai d'une durée de 120 jours. Passé ce délai, votre système ne sera plus utilisable.

**Ce guide vous explique comment corriger la clé d'activation de votre environnement Windows Server.**


## Prérequis

- Disposer d'un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} installé sous Windows.
- Disposer d'une licence Windows SPLA ou en [acheter une](https://www.ovh.com/fr/serveurs_dedies/tarification-licences-windows-2014.xml){.external}.
- Avoir un accès au bureau à distance.


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

Source : [Microsoft MSDN](http://ovh.to/Vc3xCSD){.external}.


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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.