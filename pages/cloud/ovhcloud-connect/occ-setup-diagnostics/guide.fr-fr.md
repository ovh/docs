---
title: "Résoudre les erreurs fréquentes lors de la mise en service de OVHcloud Connect"
slug: occ-diagnostics
excerpt: "Découvrez comment résoudre les erreurs les plus fréquentes liées à la mise en service de OVHcloud Connect"
section: Premiers pas
order: 4
---

**Dernière mise à jour le 01/09/2021**

## Objectif

Découvrez comment résoudre les erreurs les plus fréquentes liées à la mise en service de OVHcloud Connect.

## Prérequis

- Posséder une [offre OVHcloud Connect](https://www.ovhcloud.com/fr/network-security/ovhcloud-connect/)

## En pratique

### OVHcloud Connect Direct (uniquement) : vérifier la présence de lumière sur le lien

Lors de la commande d’un lien OVHCloud Connect Direct, il est possible de voir côté OVHcloud les valeurs optiques IN/OUT. Vous pouvez demander des informations à ce sujet à votre équipe support.

- Si **OUT** est « **DOWN** », cela signifie que le port est en cours d'activation sur l'équipement OVHcloud. Le port devient actif (« **UP** ») au bout de quelques minutes.
- Si **IN** est « **DOWN** », les raisons suivantes peuvent en être à l'origine :
    - votre équipement n'est pas encore branché;
    - le port peut être désactivé;
    - un défaut est présent au niveau de l'interconnexion (Cross Connect).

> [!warning]
>
> - Pour rappel, l'interconnexion (Cross-Connect) est sous votre responsabilité contractuelle.
> - Avant de prendre contact avec les équipes OVHcloud, vous devez ouvrir un ticket auprès du PoP.
>

#### Vérification de la LOA

Une mauvaise interprétation de la position sur l'interconnexion (Cross-Connect) par le PoP peut engendrer une absence de lumière sur le lien OVHcloud Connect Direct.
Par exemple, le PoP peut indiquer qu'il n'y a pas d'interconnexion sur la position mentionnée sur la LOA.

##### **Comment lire les informations sur la LOA ?**

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

#### Inversion de fibre

S'il y a une inversion de fibre entre le PortA et le PortB, le lien sera « DOWN ».

Prenez contact avec le PoP pour vérifier qu'il n'y a pas d'inversion sur le patch panel.

### Vérification du peering

La vérification du peering doit être faite une fois que la lumière est « **UP** » des deux côtés.

Si le peering est « **DOWN** » d'un côté  ou des deux côtés, cela peut avoir plusieurs raisons :

- un défaut de SFP;
- une mauvaise configuration de l'auto-négociation;
- un conflit d'adresses IP;
- une mauvaise configuration du lien BGP.

#### Configuration SFP

Des valeurs optiques **UP** mais pas de lien Ethernet (interface **DOWN**) sont un symptôme d'un SFP mal configuré.

Le SFP à utiliser sur l'équipement client sur une liaison OVHcloud Connect dépend du lien commmandé. Vous devez utiliser un SFP conforme à la bande-passante commandée.

Si vous avez commandé un lien 1 Gbit/s, le SFP sera: 1000Base-LX/LH. Utilisez la commande suivante :

```
speed 1000
```

Si vous avez commandé un lien 10 Gbit/s, le SFP sera: 10GBase-LR. Utilisez la commande suivante :

```
speed 10000
```

Pour plus d'informations, consultez les [capacités et limites techniques de l'offre OVHcloud Connect](../occ-limits/)

#### Configuration de l'auto-négociation

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

#### Configuration du PoP/DC

Un conflit d'adresses IP peut survenir si vous avez sélectionné une adresse IP utilisée par OVHcloud.

Les règles de configuration des adresses IP en fonction du subnet sont les suivantes :

- subnet côté DC : /28 (valeur minimum) - Trois premières adresses IP pour OVHcloud - Vlan fixé à 0 (untagged).
- subnet côté PoP: /30 (valeur fixe) - Première adresse IP pour OVHcloud, deuxième adresse IP pour le client.

### Configuration du lien BGP

La BGP Area côté client doit être différente de celle côté OVHcloud.

- Range Area = AS BGP
- AS : n'importe lequel (de préférence entre 64512-65534)
- La zone AS d'OVHcloiud BGP et votre numéro d'AS BGP (côté PoP) doivent être différents.
- La zone AS d'OVHcloud BGP : peut être la même entre la configuration côté DC et la configuration côté PoP (recommandé)

### OVHcloud Connect Direct (uniquement) : mon offre n'est pas visible dans l'espace client

Un service OVHcloud Connect apparaît dans votre espace client OVHcloud dès lors qu'il est considéré comme **livré**.

En ce qui concerne l'offre OVHcloud Connect Direct, le service est **livré** dans les situations suivantes :

- dès lors que l'interconnexion (Cross-Connect) est établie par le client, de la lumière alors étant détectée côté OVHcloud.
- au bout de 60 jours après la commande si aucune lumière n'a été détectée.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
