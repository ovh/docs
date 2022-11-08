---
title: Utiliser la fonctionnalité Bring Your Own IP
excerpt: Découvrez comment importer facilement votre propre adresse IP comme Additional IP dans votre compte OVHcloud
slug: bring-your-own-ip
section: Bring Your Own IP
order: 1
---

**Dernière mise à jour le 08/11/2022**

## Objectif

La fonctionnalité [Bring Your Own IP (BYOIP)](https://www.ovhcloud.com/fr/network/byoip/) vous permet d'utiliser les plages d'adresses IP que vous possédez déjà en tant qu'adresses Additional IP, directement sur le réseau et les produits OVHcloud.

Ces adresses IP seront importées sous la forme d'un bloc d'adresses IP de taille /24 et se comporteront comme une adresse [Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/) OVHcloud.

## Prérequis

- [Avoir une plage d'IP dans un RIR pris en charge](#supportedrir)
- [Avoir une plage d'IP d'une taille prise en charge](#supportedsize)
- [Avoir une plage d'IP non utilisée sur Internet](#notinuseontheinternet)
- [Avoir une plage d'IP ou numéro AS avec une réputation propre](#cleanipreputation)
- [Choix du campus](#chooseacampus)
- [Prouver que vous êtes propriétaire de la plage d'IP](#proveownership)
- [Prouver que vous êtes propriétaire du numéro AS](#proveownershipas)
- [Permettre à OVHcloud d'annoncer la plage d'IP](#announceip)

### Avoir une plage d'IP dans un RIR pris en charge <a name="haveaniprangeinasupportedRIR"></a>

Un Registre Internet régional (RIR) est une autorité régionale qui gère les adresses IP dans une région donnée. 

Vous devez posséder (voir ci-dessous) un bloc IPv4 public auprès de l'un des RIR suivants :

- [ARIN](https://www.arin.net/)
- [RIPE](https://www.ripe.net/)

Un bloc ARIN ne peut être utilisé qu’avec des services OVHcloud situés au Canada ou aux Etats-Unis, tandis qu’un bloc RIPE ne peut être utilisé qu’avec des services OVHcloud situés en Europe.

Pour que le bloc soit considéré comme valide, les blocs importés doivent être de type suivants :

- ARIN (object «Network type »)
    - Direct Allocation
    - Direct Assignment

Vous pouvez consulter les pages <https://www.arin.net/resources/registry/whois/#network> et <https://www.arin.net/resources/registry/reassignments/> pour plus d’informations sur les objets « Network type ».

- RIPE (object « status »)
    - ASSIGNED PI
    - LEGACY
    - ALLOCATED PA

Vous pouvez consulter la page [« Description of the INETNUM Object »](https://apps.db.ripe.net/docs/04.RPSL-Object-Types/02-Descriptions-of-Primary-Objects.html#description-of-the-inetnum-object) pour plus d’informations sur les objets « status ».

### Avoir une plage d'IP d'une taille prise en charge <a name="haveaniprangeofasupportedsize"></a>

Nous acceptons les blocs IP de tailles comprises entre /24 et /19. Vous trouverez ci-dessous le nombre de /24 que vous recevrez en fonction de la plage importée :

|CIDR|Nombre de /24|
|---|---|
| /24 | 1 |
| /23 | 2 |
| /22 | 4 |
| /21 | 8 |
| /20 | 16 |
| /19 | 32 |

### Avoir une plage d'IP non utilisée sur Internet <a name="haveaniprangenotinuseontheinternet"></a>

La plage d'IP ne doit pas être annoncée ou utilisée sur Internet (pas d'annonce en terme de Border Gateway Protocol (BGP) sur au moins un réseau public).

### Avoir une plage d'IP ou numéro AS avec une réputation propre <a name="haveacleanipreputation"></a>

Nous pouvons refuser l’utilisation d’adresses IP ou de numéros AS ayant une mauvaise réputation, et nous nous réservons le droit de ne plus les annoncer si leur réputation a un impact négatif sur la réputation d’OVHcloud.

### Choix du campus <a name="chooseacampus"></a>

Un campus peut être vu comme une liste de centre de données où une IP peut être utilisée.

Vous devrez choisir un campus où votre IP sera utilisée. Une fois la livraison effectuée, vous pourrez déplacer n’importe quel bloc de taille /24, obtenu à partir de la plage importée, vers n’importe quel service OVHcloud dans le même campus que celui choisi au moment de la commande.

Vous trouverez ci-dessous une liste des campus actuels :

- RBX (Roubaix)
    - rbx (1-8)
- GRA (Gravelines)
    - gra (1-3)
- SBG (Strasbourg)
    - sbg (1-5)
- WAW (Warsaw)
    - waw1
- LIM (Limburg)
    - lim (1,3)
- ERI (Erith)
    - eri1
- BHS (Beauharnois)
    - bhs (1-8)
- SGP (Singapore)
    - sgp1
- VIN (Vint Hill)
    - vin1
- HIL (Hillsboro)
    - hil1
- SYD (Sydney 1)
    - syd1
- SY2 (Sydney 2)
    - syd2

La liste des campus disponibles dépendra de votre situation géographique et du RIR de l'IP. Vous trouverez ci-dessous la liste de tous les campus IP sur lesquels nous prévoyons de l'offre BYOIP. Cependant, il est possible que tous les campus ne soient pas pris en charge dès le lancement :

|**Le RIR des adresses IP du client est :**|**ARIN**|**RIPE**|
|---|---|---|
|**Campus disponibles :** |BHS<br>SGP<br>SYD<br>SY2|RBX<br>GRA<br>SBG<br>WAW<br>LIM<br>ERI|

### Prouver que vous êtes propriétaire de la plage d'adresses IP <a name="proveownershipontheiprange"></a>

Afin de prouver que vous êtes le propriétaire de la plage d'adresses IP, il vous sera demandé de renseigner un *token* spécial que nous mettrons à disposition, dans l'objet *whois* public correspondant à votre plage.<br>
Cela se fera via le portail web du RIR gérant vos adresses IP. Ce token sera fourni lors de la commande (il peut aussi être trouvé directement dans l'espace client OVHcloud, dans la section IP).

- Pour RIPE, éditez le champ « **descr** » de l'objet « **inetnum** » de l'IP.
- Pour ARIN, éditez le champ « **Public Comments** » de l'objet « **Network** ».

Il est nécessaire que le token apparaisse dans le champ de description (voir ci-dessus) de l'objet WHOIS, sur une ligne dédiée. D'autres lignes peuvent être présentes, à condition que le token soit présent dans sa propre ligne dédiée dans la description. Le token doit être ajouté avant la commande et ne doit pas être supprimé avant la fin de la livraison.

### Prouver que vous êtes propriétaire du numéro AS (requis uniquement si vous fournissez un numéro AS) <a name="proveownershipoftheasnumber"></a>

Afin de prouver que vous êtes le propriétaire du numéro AS, il vous sera demandé de réutiliser le même *token* précédemment utilisé pour prouver la propriété de la plage d'adresses IP, et de l'insérer dans l'objet WHOIS public correspondant au numéro AS.<br>
Cela se fera via le portail web du RIR gérant votre numéro AS. Ce token sera fourni lors de la commande.

- Pour RIPE, éditez le champ « **descr** » de l'objet « **aut-num** » du numéro AS.
- Pour ARIN, éditez le champ « **Public Comments** » de l'objet « **ASN** ».

Il est nécessaire que le token apparaisse dans le champ de description (voir ci-dessus) de l'objet WHOIS, sur une ligne dédiée. D'autres lignes peuvent être présentes, à condition que le token soit présent dans sa propre ligne dédiée dans la description. Le token doit être ajouté avant la commande et ne doit pas être supprimé avant la fin de la livraison.

### Permettre à OVHcloud d'annoncer la plage d'IP

Sur le RIR où la plage d'adresses IP est inscrite, il faudra créer un objet de routage pour celle-ci (correspondant exactement à la plage d'IP), avec le numéro **AS** de OVHcloud ("AS16276") ou votre propre numéro AS dans le champ origine de l'objet de routage.

## En pratique

### Comment utiliser les adresses IP

Les adresses IP importées se comporteront comme le produit Additional IP OVHcloud. Une plage d'adresses IP importée sera fractionnée en blocs de /24 pouvant être déplacés vers n’importe quel service d’un même campus.

> [!warning]
> Certaines opérations disponibles sur l'offre Additional IP ne seront pas disponibles sur l'offre BYOIP.
>
> Par exemple, il ne vous sera pas possible de personnaliser le WHOIS de vos blocs via l'espace client ou l'API OVHcloud, car OVHcloud n'en est pas propriétaire.
>
> Pour la même raison, il ne vous sera pas possible de modifier les *reverse* de vos IPs dès leur réception directement via l'espace client ou l'API OVHcloud.
>

Lors de la livraison, nous créerons des zones ARPA sur nos serveurs DNS et toute modification de *reverse DNS* via l'espace client ou l'API OVHcloud y sera appliquée. Ces modifications seront visibles au public lorsque nos serveurs DNS auront reçu les délégations des zones ARPA par le RIR (ceci est facultatif, si vous voulez continuer à gérer votre *reverse DNS* par vous-même, vous pouvez le faire).

## FAQ

### Est-il possible d'importer une plage d'adresses IP inférieure à un /24 ?

Non, la taille minimum acceptée est un /24.

### Est-il possible d'importer une plage d'adresses IP supérieure à un /19 ?

Pas au lancement de l'offre BYOIP. Cependant, si tel est votre souhait, nous vous invitons à nous contacter pour en discuter.

### Le fractionnement d'un bloc importé /24 en une taille de bloc plus petite (/25, /26, /27, /28, /29/30) ou en /32 est-il pris en charge ?

Pas pour le moment.

### Puis-je importer une plage d'adresses IP ARIN dans des campus acceptant uniquement des plages d'adresses IP RIPE et inversement ?

Pas pour le moment.

### Puis-je importer un numéro AS ARIN avec une plage d'adresses IP RIPE et inversement ?

Oui.

### Puis-je importer une plage d’adresses IP ou un numéro AS géré par IP APNIC/AFRINIC/LACNIC ?

Pas pour le moment.

### Est-il possible d'utiliser une plage d'adresses IP sur plusieurs campus ?

Non, une plage d'IP doit être utilisée dans un seul campus.

### Est-il possible de changer le campus d'une adresse IP importée ?

Pas pour le moment. Pour y parvenir, il vous faudrait libérer le produit et le racheter (pour l'instant c'est la seule façon de procéder).

### Comment savoir quels serveurs DNS OVHcloud géreront la zone ARPA de mon IP importée ?

Leurs noms vous seront communiqués dans l'e-mail de livraison.

### Est-il possible d'importer une IPv6 ?

Pas pour le moment.

## Allez plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
