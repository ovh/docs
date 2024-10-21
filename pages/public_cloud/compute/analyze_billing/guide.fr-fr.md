---
title: 'Informations concernant le mode de facturation Public Cloud'
excerpt: 'Comprenez le mode de facturation des produits Public Cloud'
updated: 2024-04-19
---

## Objectif

L'un des principes du cloud computing repose sur ce qui s'appelle en anglais le **Pay as you go**, c'est à dire le paiement à l'utilisation.

Alors que le mode de facturation classique de la location de ressources informatiques repose généralement sur un contrat avec une durée prédéterminée plus ou moins longue (12 mois le plus souvent) et donc un engagement des deux parties sur cette période, le cloud computing propose d'adopter un fonctionnement plus souple : **payer en fin de mois pour le temps pendant lequel les ressources ont été utilisées**.

Ce fonctionnement ressemble à celui de certains opérateurs téléphoniques qui facturent en fin de mois les minutes de communication consommées. Ici OVHcloud facture les heures d'utilisation d'un serveur, d'un espace de stockage ou d'un autre élément du service.

**Ce document détaille les concepts de facturation de l'offre Public Cloud.**

## Prérequis

* Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/){.external} dans votre compte OVHcloud
* Une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps){.external}
* Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## Principe général

Le but est de fournir une facturation qui correspond au mieux à l'utilisation qu'ont les clients de ce service. Pour répondre à cet objectif, il est nécessaire de rendre la facturation granulaire, c'est pourquoi le plus souvent l'unité est le temps qui se compte en heure dans ce cas.

Pour chaque ressource sujette à facturation, un compteur d'heure démarre à la création de la ressource et se termine à sa suppression avec le principe du "chaque heure entamée est due".

En ce qui concerne spécifiquement les instances de type *Virtual Machines*, le compteur de facturation démarre lorsqu'une instance atteint le statut `ACTIVE` (affiché comme `Activée` dans l'espace client OVHcloud). En d'autres termes, la période pendant laquelle l'instance est en statut `BUILD` n'est pas facturée.

Chaque projet cloud a donc sa propre facture rassemblant l'ensemble des ressources facturées dans le mois, cette facture est éditée le 1er du mois suivant.

### Exemple

> [!warning]
> Veuillez noter qu'une instance horaire est facturée à l'heure, indépendamment du moment où l'instance est créée. Si vous souhaitez bénéficier de 60 minutes d'utilisation pour une heure de facturation, vous devez démarrer votre instance à la marque de l'heure, par exemple à 13h00 ou 14h00.
>

Un exemple permettera de mieux comprendre le fonctionnement.

* un utilisateur démarre une instance B2-15 le 4 du mois à 9:40
* le 8 du mois à 10:00, il ajoute 250 Go de volume additionnel (Classic Volume)
* il supprime l'ensemble le 12 du même mois à 16:30, après avoir terminé ce qu'il avait à faire avec ces ressources

Pour l'instance, du 4 du mois à 9:40 au 12 du même mois à 16:30, il y a 200 heures commencées. Elles sont facturées 0,111 euros par heure.

Pour le stockage, du 8 du mois à 10:00 au 12 du même mois à 16:30, il y a 103 heures commencées. Le Go de Classic Volume coûte 0,04 euros/mois (0,0000555556 euros/heure).

En fin de mois, la facture totalisera :

* 200 x 0,111
* 103 x 250 x 0,0000555556

Soit 23,63 euros.

> [!primary]
>
> Les prix affichés ici ne sont pas contractuels et sont donnés à titre d'exemple.
>

## En pratique

### Consulter ses factures

Pour consulter les factures d'un projet, dans l'onglet `Public Cloud`{.action} de l'espace client OVHcloud, sélectionnez le projet cloud concerné dans le menu de gauche. Cliquez ensuite sur `Billing Control`{.action} (dans la section `Project Management`) et enfin sur `Historique`{.action}.

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

Depuis cet écran, vous avez la possibilité :

* de voir le détail des ressources en dépliant chaque section
* de naviguer dans l'historique en allant vers le mois précédent ou le mois suivant

### Consulter sa consommation actuelle

La consommation actuelle (celle du mois en cours) peut être également consultée en cliquant sur l'onglet `Ma consommation actuelle`{.action}.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

La première partie, **"Déjà facturé"**, concerne les ressources facturées au mois (voir notamment les instances à facturation mensuelle plus bas). Ces ressources sont l'exception au *Pay as you go*. Les engagements sont facturés au mois et payables à l’avance. L’option d’engagement offre un avantage de coût à l’utilisateur.

La deuxième partie, **"Facturation à venir"**, concerne toutes les ressources en *Pay as you go*. Elle représente donc votre consommation depuis le début du mois jusqu'à aujourd'hui.

Vous pourrez également avoir une `Estimation de ma prochaine facture`{.action} (le prochain 1er du mois) basée sur une prévision de consommation tenant compte de la situation actuelle et une prévision de consommation pour le reste du mois en cours.

> [!primary]
>
> Ces informations sont données à titre indicatif puisque la situation peut
> changer à tout moment suivant vos actions (ajout ou suppression de
> ressources).
>

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Si vous souhaitez être alerté lorsque la projection de votre consommation dépasse un certain seuil, vous pouvez le faire depuis cet écran. Lorsque la projection dépasse le seuil paramétré, un mail vous est alors envoyé pour vous informer de la situation.

### Les instances

Les prix des instances cloud (ou serveurs cloud) sont donnés dans l'interface client OVHcloud avant de démarrer une instance. Il peuvent également être directement consultés sur la [page tarif](https://www.ovhcloud.com/fr/public-cloud/prices/){.external}.

> [!primary]
>
> La bande passante des instances n'est pas facturée.
>

Chaque modèle d'instance est disponible selon deux modes de facturation : à l'heure ou au mois.

> [!alert]
>
> La facturation d'une instance s'arrête quand l'instance est supprimée
> définitivement. Les états « arrêtée », « en pause », ou autre continuent à faire
> tourner le compteur de facturation tant que l'instance n'est pas supprimée.
> Dans les deux modes de facturation, l'unité de temps entamée est facturée.
>

#### Tarif à l'heure

Cette tarification suit le modèle du *Pay as you go* expliqué plus haut.

Ces instances seront payées le 1er du mois suivant pour les heures consommées pendant le mois courant.

##### **Suspendre (shelve) une instance**

Dans le cas d'une instance à l'heure, il est possible de suspendre (*shelve*) une instance, c'est à dire la réserver pour libérer les ressources qui lui sont dédiées tout en conservant la même IP. Dans ce cas, les données de votre disque local seront stockées dans un snapshot créé lorsque l'instance est *shelved*. Seul le snapshot sera facturé.

> [!warning]
>
> Ce processus n'est fonctionnel que pour les instances à l'heure, il n'arrêtera pas la facturation de votre instance mais réduira son coût.
>

Pour plus d'informations sur la façon de procéder, consultez ce [guide](/pages/public_cloud/compute/suspend_or_pause_an_instance).

#### Tarif mensuel

Cette tarification offre une réduction d'environ 50% par rapport au tarif à l'heure. C'est la facturation typique du Cloud.

Chaque mois entamé est facturé même si l’instance est supprimée avant la fin du mois.

### Le stockage

Les offres de stockage sont généralement annoncées avec un prix au Go par mois. Pour ramener le prix au Go par heure, on divise simplement par 720 qui correspond au nombre d'heures moyen dans un mois. Le résultat de ce calcul permet de savoir combien coûte un élément stocké sur une période en heure.

Le calcul est : ( Prix du Go au mois / 720 ) x le nombre d'heure x le nombre de Go

Le nombre de Go par heure correspond à la quantitée maximale de Go stockée au cours de l'heure. Par exemple, si vous aviez 15 Go à 16h20, 17 Go à 16h40 et 14 Go à 16h50, alors OVH retiendra 17 Go pour la tranche horaire 16h-17h.

Les prix du stockage sont disponibles directement sur [le site public OVHcloud](https://www.ovhcloud.com/fr/public-cloud/storage/){.external}.

#### Volumes additionnels

Les volumes additionnels sont facturés simplement au Go provisionné avec un prix différent selon la gamme.

#### Backup de volumes additionnels

Les backups de volumes additionnels sont facturés de la même manière que les volumes eux-mêmes.

#### Snapshots de volumes additionnels

Les snapshots de volumes additionnels sont facturés de la même manière que les volumes eux-mêmes.

#### Snapshots et images d'instance

Les snapshots d'instances comme les images (hors catalogue d'images fourni par OVH) sont facturés à un prix fixe au Go par mois, quel que soit l'instance d'origine ou le type d'image. Rendez-vous sur la [page tarifs](https://www.ovhcloud.com/fr/public-cloud/prices/){.external} pour connaitre le tarif.

### Object Storage

Deux éléments sont facturés pour ce qui concerne l'Object Storage :

* le stockage des objets en lui-même, c'est à dire le volume en Go réellement consommé
* le trafic sortant, c'est à dire la quantité de données sortantes du service comprise dans le corps des requêtes (le body HTTP)

> [!primary]
>
> Le trafic sortant entre le service de stockage d'objet et les instances est
> facturé de la même manière que si la destination était Internet.
>

> [!alert]
>
> La consultation des objets depuis votre espace client OVHcloud est considérée, de
> la même manière, comme du trafic sortant.
>

### Archives

Trois éléments sont facturés pour ce qui concerne le stockage d'archives :

* le stockage des archives en lui-même, c'est à dire le volume en Go réellement consommé
* le trafic entrant, c'est à dire la quantité de données entrantes dans le service comprise dans le corps des requêtes (le body HTTP)
* le trafic sortant, c'est à dire la quantité de données sortantes du service comprise dans le corps des requêtes (le body HTTP)

> [!primary]
>
> Le trafic sortant entre le service d'archivage et les instances est facturé
> de la même manière que si la destination était internet.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
