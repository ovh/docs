---
title: Création v(x)lan
slug: creation-vlan-vxlan
excerpt: Apprenez à créer des VLAN (vRack) et des VxLAN (NSX)
legacy_guide_number: '2883618'
section: Fonctionnalités OVH
order: 02
---

**Dernière mise à jour le 30/01/2019**

## Objectifs

Dans une infrastructure Private Cloud, vous diposez de base de 10 VxLAN (SDDC et Dedicated Cloud) fournit par NSX, et de 11 VLAN (SDDC) fournit avec le vRack.

**Ce guide montre la création de V(x)LAN supplémentaires**

## En pratique

Dans les offres Private Cloud, vous disposez d'un switch virtuel distribué (vDS) pour les **Dedicated Cloud** et de deux switchs virtuels distribués pour les **SDDC**. 

Ces *vDS* comporte plusieurs *portGroup* ayant chacun leur utilité.

Le premier vDS commun aux deux offres dispose de deux types de *portGroup* : 

- le VMnetwork permettant de communiquer vers Internet
- Des VxLAN gérés par NSX, permettant d'isoler des communications privées à l'intérieur du Private Cloud.

Le second vDS, disponible uniquement sur SDDC dispose d'un seul type de *portGroup* : 

- Des VLAN permettant d'isoler des communications privées à l'intérieur du Private Cloud et entre les différents services OVH compatibles vRack (Serveur dédié, Public Cloud...). 

## VxLan - NSX 

Dans les offres SDDC et Dedicated Cloud vous disposez d'un premier switch virtuel. 

Sur ce switch, 10 VxLAN sont crée de base. En donnant le droit `NSX` dans [la gestion des utilisateurs de votre espace client](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#utilisateurs){.external-link}, vous pourrez accèder à l'interface NSX et ansi créer des VxLAN supplémentaires.

En premier lieu rendez vous dans la vue `Mise en réseau et sécurité` de votre client vSphere, et rendez vous dans `Commutateurs logiques`{.action}.

Cliquez sur le bouton `+`{.action} pour commencer la création :

![](images/createVxLAN.png){.thumbnail}

La première étape est de nommer votre **portGroup** :

![](images/nameVxLAN.PNG){.thumbnail}

Choisisez ensuite la zone de transport : 

![](images/transportZone.PNG){.thumbnail}

> [!primary]
>
> La zone de transport contrôle quels hôtes un commutateur logique peut atteindre. Dans une infrastructure Private Cloud, OVH crée une zone de transport par datacenter virtuels.
> Il est possible de créer une zone de transport commune aux différents datacenters virtuels, ou bien d'étendre celles existantes.
>
> La mode de plan de contrôle d'une zone de transport est en monodiffusion permettant la gestion de la communication entre les hôtes à l'aide des contrôleurs NSX.
>

La découverte d'adresses IP permet de limiter la saturation du trafic ARP dans les segments VXLAN individuels, c'est-à-dire entre les machines virtuelles connectées au même commutateur logique.

L'apprentissage MAC construit une table d'apprentissage VLAN/MAC sur chaque vNIC. Cette table est stockée avec les données dvfilter. Dans vMotion, dvfilter enregistre et restaure la table au nouvel emplacement. Puis, le commutateur génère des RARP pour toutes les entrées VLAN/MAC de la table. Vous voudrez peut-être activer l'apprentissage MAC si vous utilisez des cartes réseau virtuelles effectuant la jonction VLAN.

OVH recommande de n'utiliser que la découverte d'adresses IP.

Une fois tous ces éléments renseignés, vous pouvez confirmer la création :

![](images/ConfirmVxLAN.PNG){.thumbnail}

Votre portGroup est à présent crée et fonctionnel, vous le retrouverez dans le vue des commutateurs logiques : 

![](images/VxLANcreated.PNG){.thumbnail}

Mais également dans la vue `Mise en réseau`

![](images/VxLANnetworking.PNG){.thumbnail}

## VLan - vRack

Dans les offres SDDC, vous disposez d'un switch virtuel distribué (vDS) supplémentaire.

Sur ce switch, 11 VLANs sont crée de base (VLAN10 à VLAN20). En donnant le droit `administrateur` sur l'`Accès au V(X)LAN` dans [la gestion des utilisateurs de votre espace client](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#utilisateurs){.external-link}, vous pourrez créer des VLAN supplémentaires.

En premier lieu rendez vous dans la vue `mise en réseau` de votre client vSphere et déployez le dossier **vrack** puis clic droit sur le **dVS** finissant par *-vrack* et enfin **New Distributed Port Group**.

![](images/network.png){.thumbnail}

![](images/network1.png){.thumbnail}

La prochaine étape est de nommer votre **PortGroup** :

![](images/network2.png){.thumbnail}

Puis configurer les paramètres recommandé par OVH :

- **Port Binding** : Static (Réservation et assignation du port à une machine virtuelle)
- **Port allocation** : Elastic (Permet d'élargir à chaud le nombre de port)
- **Number of ports** : 24
- **VLAN type** : VLAN (Les autres sont [PVLAN](https://kb.vmware.com/s/article/1010691){.external-link} et Trunk)
- **VLAN ID** : 21 (Sachant que l'ID peut-être configuré de 1 à 4096)
- Cochez l'option "Customize default policies configuration)

![](images/network3.png){.thumbnail}

Vous avez **3** paramètres de sécurité qui peuvent être activé en fonction de votre besoin : 

- Promiscious mode (Elimine tout filtrage de réception que l'adaptateur de machine virtuelle peut effectuer afin que le système d'exploitation invité reçoive tout le trafic observé sur le réseau.)
- MAC address changes (Affecte le trafic qu'une machine virtuelle reçoit. Lorsque l'option est définie sur **Accepter**, ESXi accepte les demandes de modification de l'adresse MAC effective en une adresse différente de l'adresse MAC initiale.)
- Forged transmits (Affecte le trafic transmis à partir d'une machine virtuelle. Lorsque l'option est définie sur **Accepter**, ESXi ne compare les adresses MAC source et effective.)

> [!primary]
>
> l'utilisation la plus fréquente de ces 3 paramètres est le CARP, notamment utilisé sur **pfSense**
> 

![](images/network4.png){.thumbnail}

Nous laissons le [lissage de trafic](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external-link} désactivé.

![](images/network5.png){.thumbnail}

Au niveau du Load Balancing selectionnez **Route Based on IP hash** qui est la meilleure méthode en terme de redondance et répartition.

> [!warning]
>
> Attention au niveau de de la configuration de l'ordre du basculement, il est nécessaire de mettre la liason montante `lag1` en *Active* (connexion entre le réseau virtuel et le réseau physique), sinon, aucune communication entre les hôtes ne sera possible.
>

![](images/network6.png){.thumbnail}

Le `Netflow` est desactivé (rapport d'activité sur les flux de trafic)

![](images/network7.png){.thumbnail}

Enfin la finalisation de la création du `PortGroup` avec la possibilité de définir une description avec la gestion des politiques de droit suite à la création de celui-ci.

![](images/network9.png){.thumbnail}

![](images/network10.png){.thumbnail}

Nous constatons que le **VLAN21** est bien disponible et fonctionnel.

![](images/network11.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.