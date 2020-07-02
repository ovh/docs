---
title: 'Modifier les serveurs DNS d''un nom de domaine OVHcloud'
slug: generalites-serveurs-dns
excerpt: 'Apprenez à modifier les serveurs DNS de votre nom de domaine OVHcloud'
section: 'DNS et zone DNS'
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les serveurs DNS sont conçus pour stocker les configurations DNS des noms de domaine. Ces zones de configuration, aussi appelées zones DNS, contiennent des informations techniques sous forme d'enregistrements. Ces enregistrements DNS sont généralement utilisés pour relier votre nom de domaine au ou aux serveurs qui hébergent votre site web et vos adresses de messagerie.

En d'autres termes, ces enregistrements stockés sur des serveurs DNS rendent vos noms de domaine accessibles sur Internet.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud.**

## Prérequis

- Posséder un nom de domaine enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](../../customer/gestion-des-contacts/){.external} le nom de domaine depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Si votre nom de domaine n'est pas enregistré avec OVHcloud, vous devrez modifier les serveurs DNS à l'aide de l'interface fournie par le prestataire de services qui le gère.
>

## En pratique

**Nous vous recommandons vivement de faire particulièrement attention lorsque vous modifiez les serveurs DNS d’un nom de domaine.** Des modifications incorrectes peuvent rendre votre site web inaccessible et empêcher vos adresses de messagerie de recevoir de nouveaux e-mails. Comprendre les impacts d’une telle modification vous permettra de mieux appréhender le changement que vous allez opérer.

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous changez sa configuration DNS. La nouvelle remplace l'ancienne et est stockée sur les serveurs DNS nouvellement définis. Techniquement, le nom de domaine utilise ensuite une nouvelle zone DNS.

Toutefois, il est important de noter que :

- le contenu de l'ancienne configuration DNS n'est pas automatiquement répliqué dans la nouvelle configuration. Assurez-vous que votre nouvelle configuration inclut toutes les informations requises pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie) ;

- si vous ne souhaitez modifier qu'un seul élément de votre configuration DNS actuelle (par exemple un enregistrement DNS), nous vous recommandons de suivre notre guide pour modifier la zone DNS à la place : « [Modification d'une zone DNS OVHcloud](../editer-ma-zone-dns/){.external} » ;

- certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements...). En cas de doute, vérifiez auprès du registre responsable de la fin du domaine.

> [!warning]
>
> Avant de commencer à apporter des modifications, assurez-vous que celles-ci ne rendront pas votre nom de domaine inaccessible. Si vous n'êtes pas sûr de cela, veuillez contacter la personne qui vous demande d'apporter ces modifications.
>

### Étape 1 : accéder à la zone de gestion des serveurs DNS OVHcloud du  domaine

Tout d'abord, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Domaines`{.action} dans la barre de services située à gauche, puis choisissez le nom de domaine concerné. Ensuite, accédez à l'onglet `Serveurs DNS`{.action}.

Le tableau qui apparaît affiche les serveurs DNS actuellement définis avec OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Étape 2 : modifier les serveurs DNS du nom de domaine

Pour commencer à modifier vos serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action}.

Dans les champs de texte, remplacez les détails actuels du serveur DNS par les informations relatives aux nouveaux serveurs que vous souhaitez définir. Pour ajouter d'autres serveurs à la liste active, cliquez sur l'icône `+`{.action} située à droite de la dernière ligne du tableau. Une ligne supplémentaire apparaît alors dans le tableau, avec des champs de texte que vous pouvez compléter.

Une fois que vous avez entré ces informations, cliquez sur `Appliquer la configuration`{.action}. Les statuts des serveurs DNS seront alors mis à jour dans le tableau et afficheront les nouvelles informations que vous venez de fournir.

> [!primary]
>
> En cliquant sur le bouton `Réinitialiser les serveurs DNS`{.action}, vous pouvez modifier les serveurs DNS actuels en les réinitialisant automatiquement sur les serveurs DNS OVHcloud d'origine. Nous vous conseillons d’utiliser cette option uniquement si vous souhaitez réutiliser les serveurs DNS d’OVHcloud. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Étape 3 : patienter durant la propagation des modifications

Une fois les modifications requises effectuées, vous devez attendre qu'elles soient pleinement effectives. Deux périodes successives doivent être prises en compte :

- la modification apportée côté OVHcloud doit être prise en compte par le registre qui gère votre extension de nom de domaine. Vous pouvez suivre la progression de cette opération dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} de configuration OVHcloud en accédant à la section `Domaines`{.action} de la barre de services située à gauche, puis `Opérations en cours`{.action} ;
- une fois que la modification a été prise en compte par l'organisation qui gère votre extension de nom de domaine, vous devez attendre un maximum de 48 heures pour que les modifications que vous avez apportées soient entièrement propagées.

## Aller plus loin

[ Modification d'une zone](../editer-ma-zone-dns/){.external} DNS OVHcloud.


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
