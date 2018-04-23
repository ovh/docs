---
title: 'Modifier les serveurs DNS d''un nom de domaine OVH'
slug: generalites-serveurs-dns
excerpt: 'Apprenez à modifier les serveurs DNS de votre nom de domaine OVH'
section: 'DNS et zone DNS'
order: 1
---

**Dernière mise à jour le 23/04/2018**

## Objectif

Les serveurs DNS hébergent la configuration DNS des noms de domaine. Ces dernières, que l'on peut appeler des zones DNS, se composent d’informations techniques : des enregistrements. Dans une utilisation classique, ceux-ci permettent de faire le lien entre votre nom de domaine et le ou les serveurs qui hébergent votre site internet et vos adresses e-mail.

On peut donc dire que ces enregistrements DNS, stockés sur des serveurs DNS, permettent à vos noms de domaine d'être joignables sur Internet.

**Apprenez à modifier les serveurs DNS de votre nom de domaine OVH.**

## Prérequis

- Disposer d'un nom de domaine enregistré chez OVH.
- Disposer d'un accès à la gestion du nom de domaine concerné depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Si votre nom de domaine n'a pas été enregistré chez OVH, vous devez réaliser la modification des serveurs DNS depuis l'interface du prestataire gérant votre nom de domaine.
>

## En pratique

**L'édition des serveurs DNS d'un nom de domaine est une manipulation sensible** : effectuer un changement inopportun pourrait rendre l'accès à votre site internet et la réception de nouveaux messages sur vos adresses e-mail impossibles. Comprendre les impacts d'une telle modification vous permettra de mieux appréhender le changement que vous allez opérer.

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous modifiez la configuration DNS que celui-ci utilise. La nouvelle est donc stockée sur les nouveaux serveurs DNS paramétrés, remplaçant ainsi l'ancienne. Techniquement, le domaine utilise donc une nouvelle zone DNS.

Attention toutefois :

- le contenu de l'ancienne configuration DNS n'est pas automatiquement répliqué vers la nouvelle. Assurez-vous donc que celle-ci comporte tous les éléments nécessaires au bon fonctionnement des services liés à votre nom de domaine (comme un site internet et des adresses e-mail) ;

- si vous ne souhaitez modifier qu'un seul élément de la configuration DNS actuelle (comme la modification d'un enregistrement), nous vous conseillons plutôt d'éditer la zone DNS en vous aidant de notre documentation : [« Éditer une zone DNS OVH »](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}.

> [!warning]
>
> Avant d'initier tout changement, assurez-vous que la manipulation ne rendra pas inaccessible votre nom de domaine. Si vous n'en êtes pas sûr, prenez contact avec la personne vous demandant de faire cette modification afin de vous en assurer.
>

### Étape 1 : accéder à la gestion des serveurs DNS de votre domaine

Pour démarrer cette manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Domaines`{.action} dans la barre de services à gauche, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Serveurs DNS`{.action}.

Le tableau qui apparaît affiche les serveurs DNS actuellement paramétrés chez OVH pour votre nom de domaine. Plusieurs serveurs DNS peuvent apparaître, tous symbolisés par une ligne du tableau.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Étape 2 : éditer les serveurs DNS de votre domaine

Pour débuter l'édition des serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action}.

Dans les zones de texte qui apparaissent, modifiez les serveurs DNS actuels par ceux que vous souhaitez paramétrer. Pour ajouter des serveurs supplémentaires à la liste existante, appuyez sur le `+`{.action} à droite de la dernière ligne du tableau pour faire apparaître une zone de texte supplémentaire.

Une fois les informations complétées, cliquez sur le bouton `Appliquer la configuration`{.action}. Les statuts des serveurs DNS s'actualisent alors dans le tableau reflétant l'édition que vous venez de réaliser.

> [!primary]
>
> Un bouton `Réinitialiser les serveurs DNS`{.action} permet de changer les serveurs DNS actuels du nom de domaine pour les serveurs OVH d'origine. Nous vous conseillons d'utiliser uniquement cette possibilité si vous souhaitez de nouveau utiliser les serveurs DNS d'OVH. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Étape 3 : patienter durant la modification

Une fois la manipulation réalisée, il est nécessaire de patienter le temps que celle-ci soit prise en compte. Deux délais successifs entrent en ligne de compte :

- le changement réalisé chez OVH doit être pris en compte par l'organisme gérant l'extension de votre nom de domaine. Vous pouvez en suivre l'avancement depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, rubrique `Domaines`{.action} dans la barre de services à gauche, puis dans `Opérations en cours`{.action} ;

- une fois le changement pris en compte par l'organisme gérant l'extension de votre domaine, un temps de propagation de 48 heures maximum est nécessaire afin que le changement soit pleinement effectif.

## Aller plus loin

[Éditer une zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.