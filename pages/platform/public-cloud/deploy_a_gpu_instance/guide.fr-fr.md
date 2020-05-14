---
title: 'Déployer une instance GPU'
slug: deployer-une-instance-gpu
excerpt: 'Découvrez comment déployer une instance GPU sous Linux ou Windows'
section: 'Base de connaissances'
---

**Dernière mise à jour le 6 décembre 2019**

## Objectif

Les instances GPU sont techniquement similaires aux instances de la gamme 2017, mais elles disposent en plus d’une carte graphique (processeur graphique ou GPU). La technologie utilisée (*pci_passthrough*) permet au système d’exploitation de l’instance de contrôler le processeur graphique exactement comme le ferait une machine physique.

Les processeurs graphiques proposés sont des NVIDIA Tesla V100. 

> [!warning]
>
> Actuellement, les instances GPU ne sont disponibles qu’avec les datacenters des régions GRA3, GRA5, GRA7 et BHS3. Il vous faudra probablement créer un nouveau projet et choisir la nouvelle de gamme 2017. [En savoir plus.](https://docs.ovh.com/fr/public-cloud/faq-comment-comprendre-la-nouvelle-nomenclature-de-la-gamme-2017/)
> 

**Ce guide explique comment déployer une instance GPU sous Linux ou Windows**

## Prérequis

- Avoir créé un projet Public Cloud qui a accès aux régions où le GPU est disponible (GRA3, GRA5, GRA7 et BHS3)

## En pratique

Vous trouverez ci-dessous les instructions à suivre pour déployer une instance GPU sous Linux ou Windows.
Veuillez noter que vous ne pouvez pas changer le système d’exploitation d’une instance, la faisant passer, par exemple, de Linux à Windows ou l’inverse. Par conséquent, vous devez prendre soin de choisir le bon système d’exploitation par défaut de votre instance au moment de sa création.


### Sous Linux

Toutes les images que nous proposons peuvent être utilisées sur une instance GPU.

> [!primary]
>
> Si vous n’êtes pas à l’aise avec la compilation manuelle de module noyau, nous vous recommandons d’utiliser une distribution officiellement prise en charge par Nvidia, et pour laquelle ce dernier fournit des drivers *clé-en-main* :<https://developer.nvidia.com/cuda-downloads>.
> 

Une fois connecté à [votre espace client OVHcloud](https://www.ovh.com/auth/?action=alleraugestionnaire){.external} dans votre projet Public Cloud, cliquez sur `Créer une instance`{.action} et choisissez une instance GPU :

![public-cloud](images/gpu.png){.thumbnail}

Sélectionnez ensuite la distribution Linux de votre choix :

![public-cloud](images/linuxchoice.png){.thumbnail}

L’instance démarre quelques secondes plus tard. Vous pourrez ensuite vous y connecter et vérifier la présence de la carte graphique : 

```ssh
lspci | grep -i nvidia
Contrôleur 00:05.0 3D : NVIDIA Corporation GV100GL [Tesla V100 PCIe 16 Go] (rév. a1)
```

La carte graphique est présente mais pas encore utilisable. Pour pouvoir l’utiliser, vous devrez d’abord installer un driver NVIDIA. Vous trouverez la liste des paquets à l’adresse suivante : [Liste des paquets Linux disponibles](https://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Il vous faudra ensuite saisir les commandes suivantes :

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> La commande Linux peut varier en fonction de votre distribution. En cas de doute, veuillez consulter le guide officiel de votre version.
> 


Une fois l’instance redémarrée, la carte graphique apparaît dans l’utilitaire NVIDIA :

```sh
nvidia-smi
Vendredi 6 décembre  12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26 C    P0    35 W / 250 W |      0 MiB / 16130 MiB |      5%      Par défaut |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

L’instance GPU est maintenant pleinement fonctionnelle et prête à l’emploi.


### Sous Windows

Il existe des incompatibilités entre le pilote NVIDIA et la solution de virtualisation *KVM/pci_passthrough*. **Les images Windows standard ne fonctionnent pas.**
Pour cette raison, nous fournissons des images spéciales, reposant sur BIOS virtuel UEFI, qui permettent au driver de fonctionner correctement (s’applique uniquement aux instances G1, G2 et G3 - gamme 2017 ou antérieure).

Une fois connecté à [votre espace client OVHcloud](https://www.ovh.com/auth/?action=alleraugestionnaire){.external} dans votre projet Public Cloud, cliquez sur `Créer une instance`{.action} et choisissez une instance GPU :

![public-cloud](images/gpu.png){.thumbnail}

Sélectionnez ensuite la version Windows de votre choix : 

![public-cloud](images/oschoice.png){.thumbnail}

Une fois votre instance GPU démarrée, il vous faudra installer le pilote NVIDIA depuis le [site web officiel](https://www.nvidia.com/Download/index.aspx){.external}.

Démarrez une instance en utilisant l’un des types de GPU disponibles (t1-45, t1-90, t1-180, etc.). Cette opération ne devrait prendre que quelques minutes.

Ensuite, il ne reste plus qu’à installer le pilote requis, qui s’affichera ensuite ici :

![public-cloud](images/driverson.png){.thumbnail}

![public-cloud](images/devicemanager.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.