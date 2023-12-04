---
title: 'Activation du mode promiscuité sur une machine virtuelle'
excerpt: 'Découvrez comment activer le mode promiscuité sur une machine virtuelle pour le bon fonctionnement de certains protocoles HA comme le CARP'
updated: 2023-05-25
---

## Objectif

Le mode promiscuité élimine tout filtrage de réception que la carte réseau de la machine virtuelle peut effectuer, afin que le système d'exploitation invité reçoive tout le trafic observé sur le réseau. Par défaut, la carte réseau de la machine virtuelle ne peut pas fonctionner en mode promiscuité.

Il peut être nécessaire dans certains cas d'activer le mode promiscuité pour le bon fonctionnement de certains protocoles HA comme le Common Address Redundancy Protocol (CARP).

## Prérequis

- Une infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/)
- Avoir un identifiant utilisateur vSphere actif (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))

## En pratique

Il convient de différencier deux situations. En fonction du Distributed Virtual Switch (DVS) concerné, les solutions seront différentes :

- dvs public (nom : pcc-xxx-xx-xxx-xx_DCxxx-dvs, vmnetwork ou vxlan)
- dvs vrack (nom : pcc-xxx-xx-xxx-xx_DCxxx-vrack, vlan vrack)

### DVS Public

#### Récupérer les informations

Les clients sont désormais autonomes pour effectuer cette action via notre API. Les appels API suivants peuvent être utilisés.

Récupérez tout d'abord le **vmid** et le **datacenterid**. Ces informations peuvent également être obtenues depuis vSphere.

**Depuis l'API OVHcloud :**

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter
>

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
>

**Depuis vSphere :**

Connectez-vous d’abord à votre vSphere et sélectionnez la VM dans la liste des VM de l’onglet de gauche :

![select VM](images/vcenter_select_vm_edit.png){.thumbnail}

Vous pouvez alors récupérer le **vmid** depuis l'URL :

![retrieve vmid](images/vcenter_vmID_edit.png){.thumbnail}

#### Activer le mode promiscuité sur une machine virtuelle

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp
>

Renseignez les informations suivantes :

- `serviceName` : nom de votre PCC
- `vmId` : vmId précédemment récupéré depuis vSphere ou via l'API
- `datacenterId` : récupéré précédemment via l'API
- `macAddress` : la macAddress de l'interface réseau de la VM où CARP doit être activé

#### Désactiver le mode promiscuité sur une machine virtuelle

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableCarp
>

#### Vérifier si l'option est activée ou non sur la machine virtuelle

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

### DVS vRack

Dans ce cas, vous pouvez effectuer la manipulation directement depuis vSphere en suivant la procédure ci-dessous.

#### Activation du mode promiscuité sur un port dans vSphere

Tout d'abord il faut vérifier que le DVS autorise bien d'avoir une configuration différente sur le port (par défaut, c'est celle du DVS qui est appliquée).

Pour ce faire, faites un clic droit sur le portgroup, cliquez sur `Modifier les paramètres`{.action} puis sur `Avancé`{.action} et vérifiez que `Autorisé` est coché dans la ligne `Stratégie de sécurité`.

![security policy](images/Securitypolicy.png){.thumbnail}

Vous pouvez ensuite sélectionner le port où la VM est connectée et cliquer sur le crayon en haut à gauche.

![port](images/Port.png){.thumbnail}

Vous pourrez alors, dans la section `Sécurité`, cocher `Remplacer` et modifier la stratégie de sécurité sur `Accepter` pour les trois options, si ce n'est pas déjà le cas.

![security policy](images/Security.png){.thumbnail}

#### Activation du mode de promiscuité sur la totalité d'un portgroup dans vSphere

Cette manipulation ne doit jamais être faite sur un DVS public, uniquement sur un DVS vrack.

Vous pouvez faire la modification directement sur le portgroup, cela aura l'avantage d'appliquer la configuration à tous les ports (et vous évitera donc de devoir le faire à la création/restauration d'une VM).

Cependant, cela peut représenter un défaut de sécurité car les adaptateurs en mode promiscuité ont accès aux paquets, même si certains de ces paquets sont reçus uniquement par un adaptateur réseau spécifique. Cela signifie qu'un administrateur ou un utilisateur racine (root) dans une machine virtuelle peut potentiellement voir le trafic destiné à d'autres hôtes ou systèmes d'exploitation invités.

Il est donc important de procéder en connaissance de cause.

En pratique, il suffit de faire un clic droit sur le portgroup concerné, puis de cliquer sur `Modifier les paramètres`{.action}. Allez ensuite dans la section `Sécurité` et modifiez la stratégie de sécurité vers `Accepter` pour les trois options, si ce n'est pas déjà le cas.

![port group](images/Portgroup.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.