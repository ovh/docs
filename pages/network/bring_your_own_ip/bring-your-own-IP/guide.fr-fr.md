---
title: Comment utiliser la fonctionnalité Bring Your Own IP
excerpt: Découvrez comment importer facilement vos propres adresses IP en tant qu'Additional IP sur votre compte OVHcloud
updated: 2025-02-28
---

## Objectif

La fonctionnalité [Bring Your Own IP (BYOIP)](/links/network/byoip) vous permet d'utiliser des plages d'adresses IP que vous possédez déjà, en tant qu'Additional IPs directement sur le réseau et les produits OVHcloud.

Ces adresses IP seront importées sous la forme d'un bloc d'adresses IP de taille /24 et se comporteront comme un bloc de produit [Additional IP](/links/bare-metal/ip) OVHcloud classique.

## Prérequis

- [Avoir une plage d'IP dans un RIR pris en charge](#supportedrir)
- [Avoir une plage d'IP d'une taille prise en charge](#supportedsize)
- [Avoir une plage d'IP non utilisée sur Internet](#notinuseontheinternet)
- [Avoir une plage d'IP ou numéro AS avec une bonne réputation](#cleanipreputation)
- [Avoir choisi une région](#choosearegion)
- [Prouver que vous êtes propriétaire de la plage d'IP](#proveownershipip)
- [Prouver que vous êtes propriétaire du numéro AS](#proveownershipas)
- [Permettre à OVHcloud d'annoncer la plage d'IP](#announceip)

### Avoir une plage d'IP dans un RIR pris en charge <a name="supportedrir"></a>

Un [Regional Internet Registry](https://en.wikipedia.org/wiki/Regional_Internet_registry) (RIR) est une organisation qui gère les adresses IP dans une région donnée. 

Vous devez posséder (voir ci-dessous) un bloc d'adresses IPv4 public avec l'un des RIR suivants :

- [ARIN](https://www.arin.net/)
- [RIPE](https://www.ripe.net/)
- [APNIC](https://www.apnic.net/) (Veuillez noter que le support des National Internet Registries - NIRs - est expérimental pour le moment)

Veuillez noter que l'enregistrement WHOIS du bloc IPv4 fourni **doit correspondre exactement à la plage souhaitée**. La sélection d'un bloc IPv4 parent ou enfant vous empêchera d'utiliser cette plage.

Il est désormais possible d'utiliser des blocs IP ARIN, RIPE ou APNIC sur n'importe quelle région OVHcloud. Cette flexibilité accrue permet une gestion plus efficace et une allocation optimisée des adresses IP pour répondre aux besoins spécifiques de votre entreprise.

Contrairement à l'ancienne politique, où un bloc ARIN ne pouvait être utilisé qu'avec les services OVHcloud situés au Canada ou aux États-Unis, et un bloc RIPE ne pouvait être utilisé qu'avec les services OVHcloud situés en Europe, cette restriction a été levée.

Pour être considéré comme un bloc valide, les blocs importés doivent être de l'un des types suivants :

| ARIN (objet *Network type*) | RIPE (objet *status*) | APNIC (objet *status*) |
| :--- | :--- | :--- |
| &bull; Direct Allocation <br>&bull; Direct Assignment <br>&bull; Reallocated <br>&bull; Reassigned  |  &bull; ALLOCATED PA <br>&bull; LIR-PARTITIONED PA  <br>&bull; SUB-ALLOCATED PA  <br>&bull; ASSIGNED PA  <br>&bull; ASSIGNED PI  <br>&bull; LEGACY   |  &bull; Allocated-Portable <br>&bull; Allocated-Non-Portable <br>&bull; Assigned-Portable <br>&bull; Assigned-Non-Portable  |
| **Pour plus d'informations :** <br>&bull; [Using WhoIs - Network](https://www.arin.net/resources/registry/whois/#network) <br>&bull; [Reporting Reassignments](https://www.arin.net/resources/registry/reassignments/) | **Pour plus d'informations :** <br>[Description of the INETNUM Object](https://docs.db.ripe.net/entire-documentation-HTML.html#description-of-the-inetnum-object) |  **Pour plus d'informations :** <br>&bull; [INETNUM Quick Guide](https://www.apnic.net/manage-ip/using-whois/guide/inetnum/) <br>&bull; [Recording network assignments](https://www.apnic.net/manage-ip/using-whois/updating-whois/network-assignments/) |

### Avoir une plage d'IP d'une taille prise en charge <a name="supportedsize"></a>

Nous acceptons des blocs IP de taille /24 à /19. Voici le nombre de /24 que vous recevrez à partir de la plage importée :

|CIDR|Nombre de blocs /24|
|---|---|
| /24 | 1 |
| /23 | 2 |
| /22 | 4 |
| /21 | 8 |
| /20 | 16 |
| /19 | 32 |

### Avoir une plage d'IP non utilisée sur Internet <a name="notinuseontheinternet"></a>

La plage ne doit pas être annoncée ou utilisée sur Internet (aucune annonce en termes de protocole Border Gateway (BGP) sur au moins un réseau public). Vous êtes libre de ne pas respecter ce prérequis, auquel cas OVHcloud ne pourra pas garantir le bon fonctionnement et le support de ce service.

### Avoir une plage d'IP ou numéro AS avec une bonne réputation <a name="cleanipreputation"></a>

Nous pouvons refuser l'utilisation d'IPs/AS ayant une mauvaise réputation, et nous nous réservons le droit d'arrêter l'annonce des IPs/AS si leur réputation a un impact négatif sur la réputation d'OVHcloud.

### Avoir choisi une région <a name="choosearegion"></a>

Une région peut être vue comme une liste de datacenters où une IP peut être utilisée.

Vous devrez choisir une région où votre IP sera utilisée. Une fois la livraison effectuée, vous pourrez déplacer n'importe quel bloc de taille /24 obtenu à partir de la plage importée vers n'importe quel service OVHcloud dans la même région que celle choisie au moment de la commande.

Pour choisir une région, veuillez vous référer à la liste des régions disponibles accessible sur [cette page](/links/network/byoip).

### Prouver que vous êtes le propriétaire de la plage IP <a name="proveownershipip"></a>

Pour prouver que vous êtes le propriétaire de la plage, vous serez invité à entrer un jeton spécial que nous fournirons, dans l'objet public whois correspondant à votre plage. Cela se fera via le portail web du RIR gérant vos IPs. Ce jeton sera fourni à la commande.

- Pour RIPE, modifiez le champ « **descr** » de l'objet « **inetnum** » de l'IP.
- Pour ARIN, modifiez le champ « **Public Comments** » de l'objet « **Network** ».
- Pour APNIC, modifiez le champ « **remarks** » de l'objet « **inetnum** ».

Le jeton doit apparaître dans le champ de description (voir ci-dessus) de l'objet whois, sur une ligne dédiée. D'autres lignes peuvent être présentes, à condition que le jeton soit présent sur sa propre ligne dédiée dans la description. Le jeton doit être ajouté avant de passer la commande, et ne doit pas être retiré jusqu'à la fin du processus de livraison.

### Prouver que vous êtes le propriétaire du numéro AS (obligatoire uniquement si vous fournissez un numéro AS) <a name="proveownershipas"></a>

Pour prouver que vous êtes le propriétaire du numéro AS, vous serez invité à réutiliser le même jeton précédemment utilisé pour prouver la propriété de la plage IP, et à l'insérer dans l'objet public whois correspondant au numéro AS. Cela se fera via le portail web du RIR gérant votre numéro AS. Ce jeton sera fourni à la commande (il peut également être trouvé directement dans l'espace client OVHcloud, dans la section IP).

- Pour RIPE, modifiez le champ « **descr** » de l'objet « **aut-num** » du numéro AS.
- Pour ARIN, modifiez le champ « **Public Comments** » de l'objet « **ASN** ».
- Pour APNIC, modifiez le champ « **remarks** » de l'objet « **aut-num** ».

Le jeton doit apparaître dans le champ de description (voir ci-dessus) de l'objet whois, sur une ligne dédiée. D'autres lignes peuvent être présentes, à condition que le jeton soit présent sur sa propre ligne dédiée dans la description. Le jeton doit être ajouté avant de passer la commande, et ne doit pas être retiré jusqu'à la fin du processus de livraison.

### Permettre à OVHcloud d'annoncer la plage d'IP <a name="announceip"></a>

Sur le RIR où la plage IP est enregistrée, vous devrez créer un **objet route** pour elle (correspondant exactement à la plage IP), avec le **numéro AS** d'OVHcloud ("AS16276") ou votre propre numéro AS dans le champ **origin** de l'objet route.

Pour plus d'informations sur les objets route, veuillez consulter la page de documentation de votre RIR :

- RIPE - [Managing Route Objects](https://www.ripe.net/manage-ips-and-asns/db/support/managing-route-objects-in-the-irr)
- ARIN - [Submitting Routing Information](https://www.arin.net/resources/manage/irr/#submitting-routing-information)
- APNIC - [Creating Route Objects](https://www.apnic.net/manage-ip/using-whois/guide/creating-route-objects/)

> [!warning]
> Si votre bloc IP importé est déjà annoncé sur Internet depuis des sites autres qu'OVHcloud (cas du multihoming), vous risquez de perte de paquets ou d'autres problèmes de routage. Nous ne pourrons donc pas garantir la connectivité vers les services OVHcloud avec votre bloc IP importé.

## En pratique

### Comment commander un service BYOIP

Pour commencer, connectez-vous à l'[espace client OVHcloud](/links/manager), ouvrez le menu `Réseau`{.action} dans la barre latérale de gauche, puis sélectionnez `Adresses IP publiques`{.action}.

![Adresses IP publiques - Bouton BYOIP](images/byoip_public_ip.png){.thumbnail}

Cliquez sur le bouton `+ Bring Your Own IP`{.action} en haut de la page. Vous serez redirigé vers la page de configuration BYOIP.

![Commander BYOIP](images/byoip_order.png){.thumbnail}

Sélectionnez le **RIR** qui gère le bloc d'adresses IP public que vous souhaitez importer, puis sélectionnez la **région** où vous souhaitez que vos adresses IP soient situées. À partir de là, entrez la plage IP que vous souhaitez importer.

Vous pourrez ensuite choisir si vous souhaitez utiliser le AS d'OVHcloud (recommandé), ou votre propre AS, pour annoncer votre bloc IP. 

Si vous choisissez d'utiliser votre propre AS, vous devrez sélectionner le RIR qui gère votre ASN, puis remplir le champ correspondant. Si vous choisissez le AS d'OVHcloud, aucune information supplémentaire n'est requise.

![AS BYOIP - OVHcloud](images/byoip_as_ovhcloud.png){.thumbnail}

![AS BYOIP - Personnalisé](images/byoip_as_ovhcloud.png){.thumbnail}

Enfin, cliquez sur le bouton `Suivant`{.action} en bas de la page, ce qui ouvre une page de confirmation. Veuillez vous assurer que tous les prérequis sont respectés, puis cliquez sur le bouton `Confirmer`{.action} pour soumettre votre commande. 

![Soumettre la commande BYOIP](images/byoip_confirm.png){.thumbnail}

Tous vos blocs IP importés porteront une étiquette `BYOIP`.

![Étiquette BYOIP](images/byoip_tag.png){.thumbnail}

Comme il n'existe actuellement aucun moyen de filtrer les adresses IP publiques via les étiquettes, nous vous recommandons de les filtrer en cliquant sur la barre `Tous les types de service`{.action} en haut de la page, puis en sélectionnant `Toutes les adresses IP supplémentaires`{.action}. À partir de là, vous pourrez différencier vos adresses IP supplémentaires classiques des adresses importées en utilisant l'étiquette `BYOIP` mentionnée ci-dessus.

### Comment utiliser le produit

Les adresses IP importées se comporteront comme le produit d'Additional IP actuel. Une plage IP importée sera divisée en blocs /24 qui pourront être déplacés vers n'importe quel service dans la même région.<br>
Pour activer l'annonce de votre plage IP importée sur Internet, il vous suffit d'attribuer un de vos blocs à un produit éligible via le panneau de configuration ou l'API OVHcloud.<br>

> [!warning]
> Certaines opérations disponibles sur le produit Additional IP ne seront pas disponibles sur le produit BYOIP.
>
> Par exemple, vous ne pourrez pas personnaliser les WHOIS de vos blocs via l'espace client OVHcloud/API, car OVHcloud ne les possède pas.
>
> Pour la même raison, vous ne pourrez pas modifier les reverses de vos IPs directement via l'espace client OVHcloud/API.
>

<br>En cours de livraison, nous créerons des zones ARPA sur nos serveurs DNS et toute modification de reverse DNS via l'espace client OVHcloud/API sera appliquée sur ces zones. Cependant, ces modifications ne seront visibles publiquement que lorsque nos serveurs DNS recevront les délégations des zones ARPA par le RIR. (Cela est facultatif, si vous souhaitez continuer à gérer vous-même votre reverse DNS, vous pouvez le faire).

### Découpage de plages d'adresses <a name="range-slicing"></a>

Tout bloc IP importé peut être découpé en blocs plus petits et/ou en adresses individuelles.

> [!warning] 
> Pour pouvoir découper/fusionner un bloc IP existant, il doit être inutilisé (c'est-à-dire dans la zone de parking) et il ne doit pas y avoir de tâche en attente associée (par exemple, aucune opération de déplacement en attente).

Pour découper un bloc, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/bringYourOwnIp/slice
>

Utilisez les paramètres suivants :

- ip: le bloc IP que vous souhaitez découper, en notation CIDR.
- slicingSize: la taille résultante des blocs découpés, exprimée en taille de préfixe réseau, en bits. Par exemple, si vous souhaitez découper un bloc /24 en 2 blocs plus petits de taille /25, vous devez entrer la valeur "25".

> [!primary]
> Cet appel API est asynchrone, les nouveaux blocs sont disponibles peu de temps après l'appel. Ils seront utilisables comme n'importe quel autre bloc d'Additional IP ou adresse individuelle.

Vous pouvez prévisualiser les blocs résultants qui seraient créés pour chaque taille de bloc, en utilisant l'appel API suivant :

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/bringYourOwnIp/slice
>

Utilisez les paramètres suivants :

- ip: le bloc IP que vous souhaitez découper, en notation CIDR.

Pour fusionner à nouveau un bloc dans un bloc parent, utilisez cet appel API :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/bringYourOwnIp/aggregate
>

Utilisez les paramètres suivants :

- ip: le bloc IP que vous souhaitez fusionner, en notation CIDR.
- aggregationIp: le bloc résultant, en notation CIDR.

Le bloc résultant sera une agrégation de tous ses blocs enfants.

> [!primary]
> Cet appel API est asynchrone, les blocs réaggrégés sont disponibles peu de temps après l'appel.

Vous pouvez prévisualiser toutes les configurations possibles de blocs agrégés pour un bloc IP donné, en utilisant l'appel API suivant :

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/bringYourOwnIp/aggregate
>

Utilisez les paramètres suivants :

- ip: le bloc IP que vous souhaitez fusionner dans un bloc parent, en notation CIDR.

Cet appel renvoie une liste de blocs agrégés possibles et, pour chacun d'eux, donne la liste des blocs enfants à fusionner.

**Limites** :

- Les éléments de configuration associés à des adresses IP individuelles (/32), tels que les règles de pare-feu ou les entrées de nom de domaine inverse, seront conservés après les opérations de découpage/fusion.
- Les tâches API de découpage/fusion ne peuvent pas être suivies par le numéro de tâche asynchrone renvoyé par l'API, car les objets IP associés seront détruits lors du processus de découpage/fusion.
- La liste des adresses IP et des blocs renvoyée par l'API est triée par taille de préfixe réseau. Nous travaillons à fournir une solution pour lister les IPs par ordre numérique.
- Une fois découpé, les blocs plus petits ne peuvent pas être déplacés en dehors de la région choisie lors de la commande du produit.
- Le déplacement d'un bloc /24 entre les régions françaises ne fonctionnera pas s'il a été regroupé à partir d'un découpage antérieur.

## Comment annuler un service BYOIP

Depuis le [espace client OVHcloud](/links/manager), cliquez sur votre `nom de compte`{.action} en haut à droite, puis sélectionnez `Mes offres et services`{.action} dans le menu déroulant.

Dans la barre de recherche en haut à droite, à côté du bouton de filtre, tapez "byoip", puis appuyez sur la touche `Entrée`{.action} pour filtrer vos services BYOIP.

![Annulation BYOIP](images/byoip_cancel.png){.thumbnail}

Trouvez le service que vous souhaitez annuler, puis cliquez sur le bouton correspondant `...`{.action} à droite, et sélectionnez `Annuler mon abonnement`{.action}.

Une fenêtre de confirmation s'affichera :

![Confirmation d'annulation BYOIP](images/byoip_cancel_confirmation.png){.thumbnail}

Choisissez si vous souhaitez annuler le service immédiatement ou à la date d'expiration, puis cliquez sur `Oui, annuler`{.action}.

## FAQ

### Est-il possible d'importer une plage d'adresses IP inférieure à un /24 ?

Non, la taille minimale acceptée est un /24.

### Est-il possible d'importer une plage IP supérieure à un /19 ?

Pas au lancement de l'offre BYOIP. Cependant, si tel est votre souhait, nous vous invitons à nous contacter pour en discuter.

### Le fractionnement d'un bloc importé /24 en une taille de bloc plus petite (/25, /26, /27, /28, /29, /30) ou en /32 est-il pris en charge ?

Oui. Pour plus d'informations, veuillez vous reporter à la section [Découpage de plages d'addresses](#range-slicing) ci-dessus.

### Puis-je importer une adresse IP et un numéro AS qui ne sont pas dans le même RIR ?

Oui.

### Puis-je importer une plage d'adresses IP ou un numéro AS géré par AFRINIC/LACNIC ?

Pas pour le moment.

### Est-il possible d'utiliser une plage IP sur plusieurs régions ?

Non, une plage IP doit être utilisée dans une seule région.

### Est-il possible de changer la région d'une plage IP importée ?

Il n'est pas possible de changer la région d'une plage IP importée. Pour y parvenir, il vous faudrait résilier le produit et le commander à nouveau. En revanche, si vous avez choisi la région de Gravelines, Roubaix ou Strasbourg au moment de la commande et si vous avez commandé le service après le 1er janvier 2023, vous pourrez déplacer vos blocs IP sur ces 3 régions (et uniquement sur ces 3 régions).

Veuillez noter que, comme mentionné dans les limites du découpage de plage d'adresses, cela n'est possible que si le bloc que vous souhaitez déplacer **n'a pas été regroupé** à la suite d'un découpage antérieur.

### Comment savoir quels serveurs DNS OVHcloud géreront la zone ARPA pour mon IP importée ?

Leurs noms vous seront communiqués dans l'e-mail de livraison.

### Est-il possible d'importer une IPv6 ?

Pas pour le moment.

### Puis-je commander le service alors que ma plage IP est encore annoncée depuis un autre site ?

Oui, mais une fois le service BYOIP livré, vous devez immédiatement annuler l'annonce depuis l'autre site, car vous risquez des problèmes de connectivité avec les services hébergés chez OVHcloud. Dans ce cas, OVHcloud ne peut pas être tenu responsable.

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).