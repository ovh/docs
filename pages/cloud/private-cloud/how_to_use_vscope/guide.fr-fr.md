---
title: Comprendre l'interface vScope
slug: vscope
excerpt: L'interface vScope vous permet de surveiller votre infrastructure
legacy_guide_number: '2163183'
section: Services et options OVH
order: 01
---

**Dernière mise à jour le 26/02/2019**

## Objectif

OVH vous met à disposition un outil de **supervision** et **monitoring** de vos machines virtuelles et de votre infrastructure qui se nomme **vScope**.

Il s’agit d’une page web où sont rassemblées toutes les informations **utiles** sur vos ressources.

**Ce guide décrit la lecture de cette interface**

## En pratique

Pour accèder à l'interface vScope, rendez vous sur la passerelle de votre cloud privé et cliquez sur l'icone vScope.

![](images/gatewayPCC.png){.thumbnail}

Sinon un lien d'accès au **vScope** est aussi disponible dans le manager.

![](images/managerLink.png){.thumbnail}

Dans les deux cas vous ouvrirez un nouvel onglet dans votre navigateur avec cette URL.

![](images/vScope12.png){.thumbnail}

Munissez-vous de votre **utilisateur** et **mot de passe** servant à la connexion de votre client vSphere afin de vous connecter à cette interface.

![](images/vScope11.png){.thumbnail}

Vous êtes maintenant connecté sur la page de votre **vScope** qui regroupe l'ensemble des informations utiles de vos ressources. Par exemple pour chaque host, vous visualisez immédiatement le nombre de Cores et de VM, la charge CPU et RAM, ainsi que le trafic réseau.

![](images/vScope.png){.thumbnail}

Nous allons détailler chaque élément de cette page.

En cas de différents **data-centres** dans un même **Private Cloud**, vous pouvez le choisir dans le menu déroulant. Concernant le **Last refresh** il correspond au dernier rafraîchissement de la **page Web** et non du **vScope** qui lui est mise à jour toutes les **2 à 5 minutes**.

![](images/vScope1.png){.thumbnail}

Le menu **Filer** renseigne sur l'utilisation de vos data-stores que ce soit au niveau du nombre de machine virtuelle ainsi que l'espace consommé.

![](images/vScope2.png){.thumbnail}

En cliquant sur l'icone **Graphs**, vous pouvez obtenir des données **précises** concernant la ressource.

![](images/vScope7.png){.thumbnail}

Le menu pour les hosts affiche en détail les caractéristiques de chaque host dans votre data-centre (**Cores, vCPUs, VM**) ainsi que leurs pourcentages d'utilisation et enfin la connectivité réseau et le nombre de carte réseau physique (**VMNic**).

![](images/vScope4.png){.thumbnail}

Voici la page qui détaille précisément la ressource. Vous avez également accès à un historique d’utilisation sur un jour, une semaine, un mois ou même un an.

![](images/vScope8.png){.thumbnail}

Voici la dernière catégorie qui détaille l'utilisation de chaque **machine virtuelle** dans votre data-centre avec en partie les informations suivantes :

- Etat des VMtools
- Trafic réseau
- Taille de la VM
- Activation FT (Fault Tolerance)
- CPU Ready Time
- Disk IO
- Disk Latency

![](images/vScope6.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.