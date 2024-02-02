---
title: "Configurer le BGP entre deux PCC via NSX-T"
excerpt: "Decouvrez comment configurer le bgp entre deux pcc à l'aide de NSX"
updated: 2024-02-01
---
 
## Objectif
  
**Ce guide vous détaille comment configurer votre réseau BGP pour inter-connecter deux machines virtuelles provenant de deux PCC différents**
  
## Prérequis

- Avoir deux PCC.
- Avoir un Vlan de créé.

## En pratique
  
### Configuration des PCC

Pour la configuration d'exemple, deux PCC sont utilisés : 
  - DE
  - UK
  
Pour la connection entre nos deux PCCs, nous utiliserons le VLAN 12.

> [!primary]
> Pour configuration des PCCs, veuillez accéder à votre interface NSX dans la section `Networking`{.action}.  Puis suivez les différentes étapes ci-dessous.
> Notez aussi que pour chaque étape de la configuration s'effectue sur les deux environnements.

#### Segment Creation

Dans la section `Segments` > `Add Segment`, créez un segment dans la région de transport **ovh-tz-vrack** sur le VLAN 12. Attribuez une adresse IP quelconque à la passerelle, car nous n'avons pas l'intention de l'utiliser.

> [!tabs]
> **De**
>>![SegmentCreationDE](images/segment_creation_de.png)
> **UK**
>> ![SegmentCreationUK](images/segment_creation_uk.png)

#### Overlay Segment

Créer un segment d'overlay à l'emplacement prévu pour le déploiement de notre machine virtuelle. Utilisez 172.16.0.254 (DE) ou 192.168.0.254 (UK) comme adresse IP de la passerelle sur ce segment. Configurez éventuellement un serveur DHCP pour simplifier le déploiement, bien que cela ne soit pas obligatoire. Veuillez noter que nous connectons actuellement notre segment au ovh-T1-gw T1, mais cette configuration sera modifiée ultérieurement.

> [!tabs]
> **DE**
>>![OverlaySegmentDE](images/segment_overlay_de.png)
>>![OverlaySegmentDE2](images/segment_overlay_de_2.png)
> **UK** 
>>![OverlaySegmentUK](images/segment_overlay_uk.png)
>>![OverlaySegmentUK2](images/segment_overlay_uk_2.png)

#### VRF Creation DE

1. Pour la création d'un Virtual Routing Firewall (VRF). Rendez vous dans la section `Connectivity` > `Tier-0 Gateways` > `Add Gateway` > `VRF`.

> [!tabs]
> **DE**
>> ![VRFCreationDE](images/vrf_creation_de.png)
> **UK**
>> ![VRFCreationUK](images/vrf_creation_uk.png)

2. Nommez votre VRF selon vos besoins et connectez le à la passerelle **ovh-T0-gw**, enregistrez et continuez la configuration.

> [!tabs]
> **DE**
>> ![VRFCreationDE2](images/vrf_creation_de_2.png)
>> ![VRFCreationDE3](images/vrf_creation_de_3.png)
> **UK**
>> ![VRFCreationUk2](images/vrf_creation_uk_2.png)
>> ![VRFCreationUk2](images/vrf_creation_uk_3.png)

3. Configurez deux interfaces, une pour chaque edge. Choisissez deux adresses libres de votre plage IP du VLAN (pour l'exemple nous prenons 10.0.0.1/.2/.3/.4), puis connectez-les au segment VLAN12 précédemment créé.
   
> [!tabs]
> **DE**
>> ![VRFCreationDE4](images/vrf_creation_de_4.png)
>> ![VRFCreationDE5](images/vrf_creation_de_5.png)
> **UK**
>> ![VRFCreationUK4](images/vrf_creation_uk_4.png)
>> ![VRFCreationUK5](images/vrf_creation_uk_5.png)

4. Verifiez que vos deux interfaces soient créées et que leur status soit en `Success` (section `Tier-0 Gateway`).

> [!tabs]
> **DE**
>> ![VRFCreationDE6](images/vrf_creation_de_6.png)
> **UK**
>> ![VRFCreationUK6](images/vrf_creation_uk_6.png)

#### T1 Creation

Dans la section `Tier-1 Gateways` > `Add Tier-1 Gateway` créez une nouvelle passerelle T1. Choisissez un nom en fonction de vos besoins, puis connectez-la au VRF précédemment créé ,et enfin, reliez-la votre cluster Edge.

> [!tabs]
> **DE**
>> ![T1CreationDE](images/t1_creation_de.png)
> **UK**
>> ![T1CreationUK](images/t1_creation_uk.png)

#### Connection du Segment & T1

Modifiez le Segment DE que nous venons de créer et changez la passerelle **GW** en **T1**.
Vous devriez obtenir ce résultat.

> [!tabs]
> **DE**
>> ![ConnectionSegmentT1DE](images/connection_segment_de_to_t1.png).
>> ![ResultSegmentDE](images/result_segment_de.png)
> **UK**
>> ![ConnectionSegmentT1UK](images/result_segment_uk.png)

#### Création des machines virtuelles

Créez une machine virtuelle dans le portgroup respectif **De Segment** ou **UK Segment**. Si vous avez déployé un service DHCP, l'adresse IP devrait être attribuée automatiquement. Dans le cas contraire, configurez une adresse IP statique pour votre machine virtuelle.

> [!tabs]
> **DE**
>> ![CreationVMDE](images/creation_vm_de.png)
> **UK**
>> ![CreationVMUK](images/creation_vm_uk.png)

### Préparation du NSX pour le routage BGP

>[!primary]
> Actuellement la fonctionnalité des nombres AS n'est pas disponible au niveau VRF. Elle le sera avec la version 4.1.1 de NSX. L'AS est 65000 sur les deux PCC si vous ne modifiez rien, car il est configuré nativement au niveau T0 par l'automatisation.
> Une documentation est en cours de redaction si vous voulez le changer au niveau T0.

Vous pouvez voir vos configuration BGP en éditant votre passerelle T0. 

> [!tabs]
> **DE**
>> AS de l'environnement DE est 65000, les IPs des Edges sont 10.0.0.1 and 10.0.0.2
>> ![ASEdgeDE](images/as_edge_de.png)
> **UK**
>> AS de l'environnement UK est 65000, les IPs des Edges sont 10.0.0.3 et 10.0.0.4.
>> ![ASEdgeUK](images/as_edge_uk.png)

#### Configuration du VRF

Toujours sur l'edition de votre VRF, activez le BGP et ajoutez l'environnement à joindre.

> [!tabs]
> **DE**
>> ![UPBGPDE](images/bgp_up_de.png)
>> ![BGPNeighborsDE](images/bgp_up_neighbors_de.png)
> **UK**
>> ![UPBGPUK](images/bgp_up_uk.png)
>> ![BGPNeighborsUK](images/bgp_up_neighbors_uk.png)

**Configurer une redistribution de routes**

Il est nécessaire de mettre en place une redistribution des routes des segments connectés.
Pour cela rendez-vous dans la section `Route Re-distribution` de votre VRF (En dessous de celle du BGP).

![BGPRouteRedistribution](images/bgp_set_route_redistribution.png)

Ajoutez une règle de route de redistribution qui sera connectée à votre segment T1.

> [!tabs]
> **DE**
>> ![BGPRouteRedistributionDE](images/bgp_set_route_redistribution_de.png)
>> ![BGPRouteRedistributionDE2](images/bgp_set_route_redistribution_de_2.png)
>> ![BGPRouteRedistributionDE3](images/bgp_set_route_redistribution_de_3.png)
> **UK**
>> ![BGPRouteRedistributionUK](images/bgp_set_route_redistribution_uk.png)
>> ![BGPRouteRedistributionUK2](images/bgp_set_route_redistribution_uk_2.png)
>> ![BGPRouteRedistributionUK3](images/bgp_set_route_redistribution_uk_3.png)

**Sur votre passerelle T1**

Dans la section `Route Advertisement` de votre passerelle T1, autorisez `All Connected Segments & Service Ports`.

> [!tabs]
> **DE**
>> ![RouteAdvertisementDE](images/t1_route_advertisement_de.png)
> **UK**
>> ![RouteAdversitementUK](images/t1_route_advertisement_uk.png)

### Resultats

Pour vérifier le bon fonctionnement de vos configurations et de votre lien, effectuez un test de ping entre les différentes machines virtuelles.

> [!tabs]
> **DE**
>> ![PingDEtoUK](images/ping_DE_to_UK.png)
> **UK**
>> ![PingUKtoDE](images/ping_Uk_to_DE.png)

### Vue Topology

Vous pouvez retrouver la vue topologique de votre configuration dans les différents NSX dans la section `Networking` > `Networking Topology`.

> [!tabs]
> **DE**
>> ![TopologyDE](images/topology_de.png)
> **UK**
>> ![TopologyUK](images/topology_uk.png)

## Aller plus loin
  
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
