---
title: Mode Layer 3 (L3)
excerpt: Détails sur le mode Layer 3 (L3) pour OVHcloud Connect
updated: 2020-09-14
---

**Dernière mise à jour le 07/09/2020**

## Objectif

**Découvrez les détails sur l'implémentation et le mode de connexion du mode Layer 3 (L3) pour l'offre OVHcloud Connect.**

## En pratique

### Implémentation du mode L3

La configuration de OVHcloud Connect configuré en mode L3 diffère du mode  L2 car vous devez configurer le domaine L3 sur chaque DC/EndPoint et PoP/EntryPoint.

![Implémentation L3](images/occ-l3-implementation.png){.thumbnail}

Un domaine L3 est composé de :

* Un sous-réseau
* Un ASN BGP 

Le domaine L3 est une instance de routage IP fournie par OVHcloud. Le trafic est transféré entre un POP/EntryPoint et un DC/Endpoint, et non entre deux POP/EntryPoint. L'adressage IP interne entre les PoP/EntryPoint et DC/EndPoint n'est pas nécessaire. Dans le Datacentre, l'instance de routage à l'intérieur du domaine L3 est composée de deux équipements, appelés « A » et « B ».

De ce principe, il est désormais possible de gérer plusieurs services OVHcloud Connect :

![L3 Two POP](images/occ-l3-twopop.png){.thumbnail}

De ce fait, le L3 permet d'être compatibles avec du multi-DC :

![L3 Multi DC](images/occ-l3-multidc.png){.thumbnail}

Les deux exemples ci-dessus illustrent la configuration de deux services OVHcloud Connect, car chaque service OVHcloud équivaut à un PoP/EntryPoint. 

Règles :

* Vous pouvez avoir autant de services OVHcloud Connect L3 que vous le souhaitez dans le même vRack.
* Vous pouvez associer plusieurs EntryPoint/PoP à un EndPoint/DC.
* Vous pouvez associer plusieurs EndPoint/DC  à un seul EntryPoint/PoP.
* Vous ne pouvez pas associer deux EntryPoint/POP entre eux (c'est-à-dire que vous ne pouvez pas transférer le trafic entre eux).
* Un domaine L3 ne peut être associé qu'à un seul EndPoint/DC.
* Un domaine L3 (c'est-à-dire un sous-réseau) ne peut pas être étiré entre deux DC ou deux PoP.
* Un OVHcloud Connect L2 peut être mélangé avec plusieurs OVHcloud Connect L3 dans le même vRack.

![Règles L3](images/occ-l3-rules.gif){.thumbnail}

Le schéma ci-dessous montre la combinaison de L2 et L3. Ils peuvent se terminer dans le même DC OVHcloud ou non.

![L3 Mix L2](images/occ-l3-mixl2.png){.thumbnail}

### Détails du mode de connexion

Sur une architecture telle que décrite dans le schéma ci-dessous, deux domaines L3 sont nécessaires : PoP/EntryPoint et DC/EndPoint.

![Architecture L3](images/occ-l3-architecture.png){.thumbnail}

« IP Net A » fait partie du domaine L3 dans le DC. Voici alors les informations requises :

* Plan d'adressage IP (sous-réseau et masque de sous-réseau) avec une valeur minimale de masque de sous-réseau de /29.
* La première adresse IP est réservée à la passerelle virtuelle (si le protocole VRRP est utilisé).
* Les deux adresses IP suivantes sont réservées à l'instance de routage OVHcloud
* Toutes les autres adresses IP sont disponibles pour le client.

| Adresse IP | Rôle |
|:-----:|:-----:|
| A.B.C.0 | Sous-réseau |
| A.B.C.1 | Adresse du routeur virtuel OVHcloud (si activé) |
| A.B.C.2 | Routeur OVHcloud A |
| A.B.C.3 | Routeur OVHcloud B |

« IP Net B » fait partie du domaine L3 dans le POP. Voici alors les informations requises :

* Masque de sous-réseau pris en charge : /30 (notation CIDR)
* Première adresse IP pour l'instance de routage OVHcloud.
* Deuxième adresse IP pour l'équipement client.

| Adresse IP | Rôle |
|:-----:|:-----:|
| A.B.C.0 | Sous-réseau |
| A.B.C.1 | Routeur OVHcloud |
| A.B.C.2 | Routeur client |
| A.B.C.3 | Broadcast de sous-réseau |

#### Configuration VRRP dans le DC/EndPoint

Le protocole VRRP permet la redondance de routeurs sur les services OVHcloud.

* Chaque EndPoint/DC ne prend en charge qu'une seule instance VRRP.
* La valeur VRID VRRP est fournie par OVHcloud.
* Par défaut, le VRRP est master sur l'équipement « A ».
* Des routes statiques peuvent être configurées. 

#### Configuration BGP

Le protocole BGP est obligatoire dans le POP/EntryPoint et facultatif dans le DC/EndPoint. L'activation du protocole BGP dans le DC/EndPoint désactive la configuration VRRP.

* Chaque EntryPoint/POP et EndPoint/DC nécessite un AS. Cet AS doit être indépendant de l'AS BGP du client pour former une relation eBGP.
La valeur recommandée est dans la plage 64512-65534.
* Chaque EntryPoint/POP ne prend en charge qu'une seule session BGP (pas de Multihop eBGP)
* Avec plusieurs EntryPoint/POP, ECMP est automatiquement activé. MED et/ou AS-PATH doivent être réglés pour que le chemin soit sélectionné.
* Chaque EndPoint/DC prend en charge jusqu'à 4 peers BGP.
* Jusqu'à 100 préfixes peuvent être annoncés par session BGP.
* Pour chaque EndPoint/DC, vous devez établir une session BGP avec un équipement « A » et un équipement « B ».
* Par défaut, le protocole BFD est activé sur toutes les sessions BGP. Ce protocole est fortement recommandé du côté DC pour avoir une convergence plus rapide.

Par exemple, le réseau IP « B » sera annoncé au routeur OVHcloud via une session BGP.

![Rack BGP L3](images/occ-l3-bgpvrack.png){.thumbnail}

À un niveau plus global, la topologie BGP ressemblera à ceci :

![Topologie globale BGP L3](images/occ-l3-bgpglobal.png){.thumbnail}

#### Sélection du chemin BGP

Par défaut, tous les chemins disponibles sont activés à l'aide d'ECMP, jusqu'à 4 chemins peuvent être pris en charge. Ainsi, pour avoir une topologie active/passive avec deux POP/EntryPoint, nous pouvons utiliser as-path via prepend ou MED.

Si as-prepend est configuré sur les périphériques du client sur le POP2, la topologie ressemblera à :

![BGP L3 as-prepend ou med](images/occ-l3-bgpasprepend-med.png){.thumbnail}

Remarque : as-prepend n'est pas configurable sur les services OVHcloud.

L'utilisation de MED est une autre alternative pour obtenir la même topologie.


## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
