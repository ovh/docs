---
title: "Résoudre les erreurs fréquentes lors de la mise en service de OVHcloud Connect"
excerpt: "Découvrez comment résoudre les erreurs les plus fréquentes liées à la mise en service de OVHcloud Connect"
updated: 2021-09-02
---


## Objectif

Découvrez comment résoudre les erreurs les plus fréquentes liées à la mise en service de OVHcloud Connect.

## Prérequis

- Posséder une [offre OVHcloud Connect](https://www.ovhcloud.com/fr-ca/network-security/ovhcloud-connect/)

## En pratique

Un service OVHcloud Connect apparaît dans votre espace client OVHcloud et ne peut être configuré que lorsqu'il est considéré comme **livré**.

En ce qui concerne l'offre **OVHcloud Connect Direct**, le service est **livré** dans les situations suivantes :

- dès lors que OVHcloud détecte de la lumière sur la position indiquée dans la LOA. Cette détection suggère que l'interconnexion (Cross-Connect) a été réalisée par le client.
- au bout de 60 jours après la commande si aucune lumière n'a été détectée.

### Vérification de la LOA

Une mauvaise interprétation de la position sur l'interconnexion (Cross-Connect) par le PoP peut engendrer une absence de lumière sur le lien OVHcloud Connect Direct.
Par exemple, le PoP peut indiquer qu'il n'y a pas d'interconnexion sur la position mentionnée sur la LOA.

#### Comment lire les informations sur la LOA ?

Voici un exemple d'informations sur la LOA :

```
Equipment: 103 PA3:OG:00GMC3:OVH Patch Panel: PP:0103:1132697
Port: P16/FO31-32/BCK Fiber Termination: SC/PC
```

Voici l'interprétation de ces informations :

- Cabinet (position de la baie où se trouve le RACK) : **103**
- Cage (RACK) : **PA3:OG:00GMC3:OVH**
- PatchPanel Z-side (position du switch) : **PP:0103:1132697**
- Position (sur le switch) : **16**
- FiberOptic / Port A : **31**
- FiberOptic / Port B : **32**
- Side (face avant ou arrière) : **BACK**
- Fiber Termination : **SC/PC**

### OVHcloud Connect Direct (uniquement) : vérifier la présence de lumière sur le lien

> [!warning]
>
> - Pour rappel, l'interconnexion (Cross-Connect) est contractuellement de votre responsabilité.
> - Avant de prendre contact avec les équipes OVHcloud, vous devez ouvrir un ticket auprès du PoP concerné par la LOA.
>

#### Avant la livraison du service

Lors de la commande d’un lien OVHcloud Connect Direct, il est possible de voir côté OVHcloud les valeurs optiques IN/OUT. Vous pouvez demander des informations à ce sujet à votre équipe support.

Si le service n'est pas encore livré, nos équipes support pourront vérifier le statut des valeurs optiques IN et OUT côté infrastructure OVHcloud.

#### Après la livraison du service

Dans votre espace client OVHcloud, vérifiez les valeurs optiques IN/OUT :

- Si la valeur **OUT** est « **DOWN** », les raisons suivantes peuvent en être à l'origine :
    - le port côté OVHcloud n'émet pas de lumière;
    - le service est en cours de résiliation;
    - le port est verrouillé dans votre espace client OVHcloud;
    - il y a un défaut sur le SFP.
- Si **IN** est « **DOWN** », les raisons suivantes peuvent en être à l'origine :
    - votre équipement n'est pas encore branché;
    - le port peut être désactivé ou a un défaut qui l'empêche d'émettre de la lumière;
    - un défaut est présent au niveau de l'interconnexion (Cross Connect).

### Inversion de fibre Tx/Rx

S'il y a une inversion de fibre entre le Port A et le Port B, la lumière n'est pas reçue au bon endroit et le port **IN (Rx)** affichera **DOWN**. Si votre service n'est pas encore livré, contactez le support pour connaître l'état du lien.

Prenez contact avec le PoP concerné par la LOA pour vérifier qu'il n'y a pas d'inversion Tx/Rx sur l'interconnexion (Cross Connect).

### Vérification du peering

La vérification du peering doit être faite une fois que la lumière est « **UP** » des deux côtés.

Si le peering ne peut pas être établi (DOWN) d'un côté ou des deux côtés, cela peut avoir plusieurs raisons :

- un défaut de SFP;
- l'auto-négociation n'est pas désactivée côté client;
- un conflit d'adresses IP;
- une mauvaise configuration du lien BGP.

#### Configuration SFP

Des valeurs optiques **UP** mais pas de lien Ethernet (interface **DOWN**) sont un symptôme d'un SFP mal configuré.

Le SFP à utiliser sur l'équipement client pour une liaison OVHcloud Connect dépend du lien commmandé. Vous devez utiliser un SFP conforme à la bande-passante commandée.

Si vous avez commandé un lien 1 Gbit/s, le SFP sera: 1000Base-LX/LH. Utilisez la commande suivante :

```
speed 1000
```

Si vous avez commandé un lien 10 Gbit/s, le SFP sera: 10GBase-LR. Utilisez la commande suivante :

```
speed 10000
```

Pour plus d'informations, consultez les [capacités et limites techniques de l'offre OVHcloud Connect](/pages/network/ovhcloud_connect/occ-limits)

#### Désactiver l'auto-négociation

L'auto-négociation n'est pas supportée dans l'offre OVHcloud Connect. Ce paramètre doit être désactivé.

Pour désactiver l'auto-négociation sur un équipement Cisco, utilisez la commande :

```
no negotiate auto
```

ou

```
no speed negotiate
```

Sur Cisco IOS, utilisez la commande suivante :

```
speed nonegotiate
```

Sur Cisco NX-OS, utilisez la commande suivante :

```
speed 1000
no negotiate auto
```

#### Configuration IP du PoP/DC

Un conflit d'adresses IP peut survenir si vous utilisez une/des adresse(s) IP normalement réservée(s) pour OVHcloud.

Les règles d'attribution des adresses IP en fonction du subnet sont les suivantes :

- subnet côté DC : /28 (valeur minimum) - Les trois premières adresses IP sont réservées pour OVHcloud - Vlan fixé à 0 (untagged).
- subnet côté PoP: /30 (valeur fixe) - La pemière adresse IP est réservée pour OVHcloud, deuxième adresse IP pour le client.

#### Configuration du lien BGP

La BGP Area côté client doit être différente de celle côté OVHcloud.

- Range Area = AS BGP
- Numéro d'AS : Nous recommandons des ASN entre 64512 et 65534. Le choix reste libre, à l'exception des numéros suivants qui sont réservés pour OVHcloud :
     - 65501 si le PoP est en Europe
     - 65502 si le PoP est au Canada
     - 65519 si le PoP est en Asie
- La zone AS d'OVHcloud BGP et votre numéro d'AS BGP (côté PoP) doivent être différents.
- La zone AS d'OVHcloud BGP : peut être la même entre la configuration côté DC et la configuration côté PoP (recommandé).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
