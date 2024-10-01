---
title: 'Installation des VMware Tools'
excerpt: 'Découvrez comment installer les VMware tools sur Linux ou Windows'
updated: 2022-02-01
---

## Objectif

Les VMware Tools améliorent les performances d'une machine virtuelle et permettent d'utiliser un grand nombre de ses fonctionnalités simples dans les produits VMware.

**Ce guide expose les différentes étapes à suivre afin de procéder à leur installation.**

## Prérequis

- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](/links/manager))

## En pratique

La procédure d'installation des VMware Tools varie en fonction du système d'exploitation de la machine virtuelle. Pour obtenir des informations concernant la procédure spécifique à chaque OS, consultez la [documentation VMware concernant les VMware Tools](https://kb.vmware.com/s/article/1014294){.external-link}.

### Linux

#### Versions récentes

La plupart des distributions Linux récentes proposent l'installation des VMware Tools via leurs systèmes de gestion de paquets, sous le nom [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link}.

Cela permet de maintenir à jour les VMware Tools de la même manière que les autres composants du système d'exploitation de la machine virtuelle. 

Si la distribution que vous utilisez le propose, vous pourrez trouver les *Open VM Tools* sous le nom de paquet suivant : *open-vm-tools*

Cette méthode d'installation est valide à minima pour les versions de GNU/Linux suivantes :

- Fedora 19 et supérieur
- Debian 7.x et supérieur
- openSUSE 11.x et supérieur
- Ubuntu 12.04 LTS et supérieur
- Red Hat Enterprise Linux 7.0 et supérieur
- CentOS 7.0 and et supérieur
- Oracle Linux 7.0 et supérieur
- SUSE Linux Enterprise 11 SP4 et supérieur

#### Anciennes versions

Afin de monter le disque des VMware tools depuis le web client Vsphere, faites un clic droit sur la VM, puis cliquez sur `Guest OS`{.action} et enfin sur `Install VMware Tools`{.action}. 

![installer VMware Tools](images/tools.png){.thumbnail}

Montez ensuite le volume activé par la commande :

```sh
>     # mount /dev/cdrom /mnt
```

Puis décompressez l’archive des VMwareTools. Ici, dans /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!primary]
>
> Si vous voulez répondre par défaut aux réponses proposées et ne pas être interrompu pendant l'installation, rajoutez « default » en argument à la ligne d'installation.
> 

Une fois l’installation finalisée, le disque des tools sera automatiquement désinscrit du système.

### Windows

Une fois le volume monté via l’option « Install/Upgrade VMware Tools », retrouvez le disque dans le « poste de travail » de votre VM. Faire un double clic sur celui-ci afin de lancer l’installation des Tools :

![VMware tools windows](images/windows.jpg){.thumbnail}

L'assistant d'installation va alors se lancer pour demander d'accepter les licences et le type d'installation à choisir (Nous vous conseillons l'installation complète).

Une fois l'installation terminée, il vous proposera de redémarrer la machine pour prendre en compte les modifications. Le lecteur CD sera automatiquement démonté à la fin de l'installation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
