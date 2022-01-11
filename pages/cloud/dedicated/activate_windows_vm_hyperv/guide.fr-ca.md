---
title: 'Activer des Machines Windows utilisant Hyper-V sur un Windows Server sous licence OVHcloud'
slug: activate-windows-vm-hyperv
excerpt: "Apprenez à créer et activer une machine virtuelle à l'aide de Hyper-V sur un serveur Windows sous licence OVHcloud"
section: 'Tutoriel'
---

**Dernière mise à jour le 06/01/2022**

## Objectif

**Ce tutoriel fournit quelques informations de base sur la création de machines virtuelles sous Hyper-V sur un Windows Server sous licence OVHcloud.**

> [!warning]
> Ce tutoriel vous explique comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes et décrit les actions à effectuer dans un contexte spécifique. Vous devrez peut-être adapter les instructions en fonction de votre situation.
>
> Si vous éprouvez des difficultés à appliquer ces instructions, nous vous recommandons de faire appel à un prestataire spécialisé. Pour plus d'informations, consultez la section [Aller plus loin](#gofurther) de ce tutoriel.
>

## Prérequis

- [Un serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal){.external} avec Windows Server installé.
- Le rôle Hyper-V installé
- Une licence Windows fournie par OVHcloud

## En pratique

Ce tutoriel suppose que vous avez déjà installé le rôle Hyper-V et que vous avez accès au gestionnaire Hyper-V. Si vous ne l'avez pas fait, vous pouvez consulter le guide de Microsoft sur l'installation du rôle Hyper-V [ici](https://docs.microsoft.com/fr-ca/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server){.external}.

### Création d'un réseau NAT

Tout d’abord, Windows Server va demander l’activation de l’OS invité via NAT (sauf si vous aviez une licence SPLA à attacher à un KMS spécifique). Ouvrez une session PowerShell en tant qu'administrateur. Nous allons le créer avec la commande suivante :

```sh
PS C:\Windows\system32> New-VMSwitch -SwitchName "NAT" -SwitchType Internal
Name SwitchType NetAdapterInterfaceDescription
---- ---------- ------------------------------
NAT Internal
```

Après cela, confirmez que l'adaptateur a été correctement créé avec :

```sh
PS C:\Windows\system32> Get-VMSwitch

Name SwitchType NetAdapterInterfaceDescription
---- ---------- ------------------------------
Intel(R) Ethernet Controller X550 - Virtual Switch External Intel(R) Ethernet Controller X550
Intel(R) Ethernet Controller X550 #2 - Virtual Switch External Intel(R) Ethernet Controller X550 #2
NAT Internal
```

Nous constatons que le commutateur virtuel « NAT » a été créé avec succès. Une fois créé, il faudra valider le `InterfaceIndex` ou « interface ID » pour cette étape, comme ceci :

```sh
PS C:\Windows\system32> Get-NetAdapter
Name                     InterfaceDescription                  ifIndex Status
MacAddress             LinkSpeed
----                     --------------------                  ------- ------
----------             ---------
vEthernet(Intel(R) Et... Hyper-V Virtual Ethernet Adapter #2       9      Up 
D0-50-99-D7-2C-89      10 Gbps
Ethernet                 Intel(R) Ethernet Controller X550         7      Up 
D0-50-99-D7-2C-8A      10 Gbps
Ethernet 2               Intel(R) Ethernet Controller X550 #2      5      Up 
D0-50-99-D7-2C-89      10 Gbps
vEthernet (NAT)          Hyper-V Virtual Ethernet Adapter #3      24      Up 
00-15-5D-17-DD-04      10 Gbps
vEthernet(Intel(R) Et... Hyper-V Virtual Ethernet Adapter         12      Up 
D0-50-99-D7-2C-8A      10 Gbps
```

Dans notre cas, nous voyons que notre ID de carte « NAT » est 24.

Ensuite, créons un réseau de NAT qui permettra à notre VM de se connecter à Internet ; nous verrons les informations qui s'affichent une fois l'exécution terminée :

```sh
PS C:\Windows\system32> New-NetIPAddress -IPAddress 192.168.0.1 -PrefixLength 24 -InterfaceIndex 24
IPAddress : 192.168.0.1
InterfaceIndex : 24
InterfaceAlias : vEthernet (NAT)
AddressFamily : IPv4
Type : Unicast
PrefixLength : 24
PrefixOrigin : Manual
SuffixOrigin : Manual
AddressState : Tentative
ValidLifetime : Infinite ([TimeSpan]::MaxValue)
PreferredLifetime : Infinite ([TimeSpan]::MaxValue)
SkipAsSource : False
PolicyStore : ActiveStore

IPAddress : 192.168.0.1
InterfaceIndex : 24
InterfaceAlias : vEthernet (NAT)
AddressFamily : IPv4
Type : Unicast
PrefixLength : 24
PrefixOrigin : Manual
SuffixOrigin : Manual
AddressState : Invalid
ValidLifetime : Infinite ([TimeSpan]::MaxValue)
PreferredLifetime : Infinite ([TimeSpan]::MaxValue)
SkipAsSource : False
PolicyStore : PersistentStore
```

> [!primary]
> 
> La valeur de l'adresse IP sera l'adresse IP de la passerelle interne de votre machine virtuelle à configurer ; elle connectera le service WinNAT à l'intérieur de l'hôte pour atteindre Internet. Le `PrefixLength` sera le préfixe netmask de l'IP donnée précédemment, et enfin le `InterfaceIndex` sera l'ID du switch virtuel créé à l'étape précédente (dans notre cas, son ID est 24).
>

Enfin, créons le réseau qui sera utilisé par notre service WinNAT pour atteindre Internet via la commande suivante :

```sh
PS C:\Windows\system32> New-NetNat -Name MyNATnetwork -InternalIPInterfaceAddressPrefix 192.168.0.0/24
Name : MyNATnetwork
ExternalIPInterfaceAddressPrefix :
InternalIPInterfaceAddressPrefix : 192.168.0.0/24
IcmpQueryTimeout : 30
TcpEstablishedConnectionTimeout : 1800
TcpTransientConnectionTimeout : 120
TcpFilteringBehavior : AddressDependentFiltering
UdpFilteringBehavior : AddressDependentFiltering
UdpIdleSessionTimeout : 120
UdpInboundRefresh : False
Store : Local
Active : True
```

> [!primary]
> 
> Le paramètre `Name` va définir le nom de ce réseau, ainsi que le paramètre `InternalIPInterfaceAddressPrefix` qui se connectera au réseau souhaité ; dans notre cas, le réseau est celui créé avant :
>
> - 192.168.0.0 est l'IP du réseau
> - 192.168.0.1 est la gateway pour vos machines virtuelles
> - 192.168.0.2 - 192.168.0.254 seront utilisées comme IPs pour vos machines virtuelles
>

### Activation de la VM

À ce stade, le réseau sera correctement paramétré pour cette validation. Créez une nouvelle VM Windows Server 2019 Standard (nous avons utilisé l'ISO d'évaluation téléchargeable depuis le site officiel de Microsoft). Une fois installée, configurez votre machine virtuelle avec une IP de la gamme configurée sur le commutateur virtuel (par exemple : 192.168.0.2/24) :

![VM Configuration](images/vm-conf.png){.thumbnail}

Le .ISO utilisé ayant activé le « mode Evaluation », nous devons transférer cet OS invité vers la version Standard. Lancez la commande suivante sur votre CMD :

```sh
C:\Users\Administrator> DISM.exe /Online /Set-Edition:ServerStandard /ProductKey:N69G4-B89J2-4G8F4-WWYCCJ464C /AcceptEula
```

> [!primary]
> 
> Cette licence (N69G4-B89J2-4G8F4-WWYCC-J464C) appartient à notre référentiel de licences de validation KMS actuel pour Windows Server 2019 Standard. Vous pouvez récupérer chacune de nos clés de licence actuelles depuis le guide suivant : [Corriger la clé d'activation Windows Server](../windows-key)
>

Redémarrez votre machine virtuelle, puis procédez comme suit pour configurer le serveur KMS et activer Windows.

Configuration du serveur KMS :

```sh
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net 
```

Activation de Windows :

```sh
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

Votre VM doit être maintenant activée.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
