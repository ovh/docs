---
title: 'Éditer une zone DNS OVHcloud'
slug: editer-ma-zone-dns
excerpt: 'Apprenez à éditer une zone DNS OVHcloud via votre espace client'
section: 'DNS et zone DNS'
order: 3
---

**Dernière mise à jour le 05/05/2020**

## Objectif

La zone Domain Name System (DNS) d'un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d'informations techniques, appelées enregistrements. Dans une utilisation classique, ces enregistrements permettent de faire le lien entre votre nom de domaine et le ou les serveurs qui hébergent votre site internet et vos adresses e-mail.

**Apprenez à éditer simplement votre zone DNS OVHcloud via votre espace client.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Utiliser la configuration OVHcloud (ses serveurs DNS) pour le nom de domaine concerné.

> [!warning]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
> 
> - Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration. Pour cela, rendez-vous dans votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external}, onglet `Serveurs DNS`{.action} une fois positionné sur le domaine concerné.
>

## En pratique

**L'édition d'une zone DNS est une manipulation sensible** : réaliser un changement inopportun pourrait, par exemple, rendre impossible l'accès à votre site internet ou la réception de nouveaux messages sur vos adresses e-mail.

Comprendre ces différents enregistrements vous permettra de mieux appréhender les changements que vous allez effectuer si vous éditez la zone DNS de votre nom de domaine. Nous vous invitons vivement à consulter le tableau ci-dessous. Il reprend les spécificités de chaque enregistrement.

|Type d'enregistrement|Description|  
|---|---|
|A|Permet de relier un nom de domaine à une adresse IP (IPv4). Par exemple, l'adresse IP du serveur où est hébergé votre site internet.|
|AAAA|Permet de relier un nom de domaine à une adresse IP (IPv6). Par exemple, l'adresse IP du serveur où est hébergé votre site internet.|
|CNAME|Permet à un nom de domaine d'utiliser la ou les adresses IP d'un autre nom de domaine en les reliant ensemble, selon le principe de l'alias. Par exemple, si *www.mypersonaldomain.ovh* est un alias de *mypersonaldomain.ovh*, cela indique que *www.mypersonaldomain.ovh* utilisera la ou les adresses IP de *mypersonaldomain.ovh*.|
|MX|Permet de relier un nom de domaine à un serveur e-mail. Par exemple, l'adresse du serveur où est hébergé votre solution e-mail. Il est probable que le fournisseur dispose de plusieurs serveurs e-mail : plusieurs champs MX doivent donc être créés.|
|SRV|Permet d'indiquer l'adresse d'un serveur gérant un service. Par exemple, cet enregistrement peut indiquer l'adresse d'un serveur SIP ou celle d'un serveur permettant à un logiciel de messagerie de se configurer automatiquement, selon le principe de l'autodiscover.|
|TXT|Permet d'ajouter la valeur de votre choix (en format texte) aux paramètres DNS de votre nom de domaine. Cet enregistrement est souvent utilisé lors de processus de vérification.|
|SPF|Permet d'éviter les potentielles usurpations d’identité avec les adresses e-mail utilisant votre nom de domaine. Par exemple, cet enregistrement peut indiquer que seul le serveur de votre fournisseur de solution e-mail doit être identifié comme étant une source légitime d'envoi. Apprenez-en plus grâce à notre [documentation sur l'enregistrement SPF](../le-champ-spf/){.external}.|
|CAA|Permet de lister les autorités de certification autorisées à délivrer des certificats SSL pour un nom de domaine.|

> [!warning]
>
> Un enregistrement CNAME ne peut pas coexister avec un autre type d'enregistrement du même domaine ou sous-domaine. 
>

### Étape 1 : accéder à la gestion de la zone DNS OVHcloud de votre domaine

Pour démarrer cette manipulation, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Domaines`{.action} dans la barre de services à gauche, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

Le tableau qui apparaît affiche la configuration de votre nom de domaine chez OVHcloud. Elle est constituée de plusieurs enregistrements DNS, tous symbolisés par une ligne du tableau. Vous avez la possibilité d'en filtrer le contenu par type d'enregistrement ou par domaine.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Étape 2 : éditer la zone DNS OVHcloud de votre domaine

Vous pouvez éditer la zone DNS OVHcloud de votre nom de domaine en ajoutant, modifiant ou en supprimant un enregistrement DNS. Pour cela, deux possibilités s'offrent à vous :

- **modifier manuellement la zone en mode textuel** : pour les utilisateurs avertis uniquement. Depuis l'onglet `Zone DNS`{.action}, cliquez sur `Modifier en mode textuel`{.action}, puis suivez les étapes qui s'afficheront ;

- **utiliser nos assistants de configuration**.

À partir de ce point, cette documentation abordera uniquement la configuration via nos assistants.

> [!primary]
>
> Munissez-vous des informations à modifier dans votre zone DNS OVHcloud. Si vous effectuez cette modification à la demande d'un fournisseur de service, ce dernier a dû vous communiquer la liste des éléments à modifier.
>

- **Ajouter un nouvel enregistrement DNS**

Pour ajouter un nouvel enregistrement DNS, toujours positionné sur l'onglet `Zone DNS`{.action} de votre espace client, cliquez sur le bouton `Ajouter une entrée`{.action} à droite du tableau. Sélectionnez le type de champ DNS, puis suivez les étapes.

Nous vous invitons toutefois à vérifier si cet enregistrement n'existe pas déjà et ne pointe pas vers une cible différente. Pour cela, filtrez le contenu du tableau par type d'enregistrement ou par domaine. Si ce dernier existe déjà, nous vous invitons à le modifier grâce à la manipulation décrite juste après.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modifier un enregistrement DNS existant**

Pour modifier un enregistrement DNS, toujours positionné sur l'onglet `Zone DNS`{.action} de votre espace client, cliquez sur le pictogramme en forme de roue dentée dans le tableau à droite de l'entrée choisie. Cliquez ensuite sur `Modifier l'entrée`{.action} puis suivez les étapes qui s'afficheront.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Supprimer un enregistrement DNS**

Pour supprimer un enregistrement DNS, toujours positionné sur l'onglet `Zone DNS`{.action} de votre espace client, cliquez sur le pictogramme en forme de roue dentée dans le tableau à droite de l'entrée choisie. Cliquez ensuite sur `Supprimer l'entrée`{.action}, puis suivez les étapes.

Vous pouvez supprimer plusieurs entrées en une seule fois en les cochant depuis la partie gauche du tableau, puis en appuyant sur le bouton `Supprimer`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Étape 3 : patienter durant le temps de propagation

Une fois la zone DNS OVHcloud de votre nom de domaine modifiée, un temps de propagation de 24 heures maximum est nécessaire afin que les modifications soient effectives.

Si vous souhaitez réduire ce délai pour les prochaines éditions de votre zone DNS OVHcloud, il est possible, dans une certaine mesure, de le modifier en ajustant le TTL (*Time To Live*) qui s'appliquera à tous les enregistrements de la zone DNS. 
Pour ce faire, positionnez-vous sur l'onglet `Zone DNS`{.action} de votre espace client, cliquez sur le bouton `TTL par défaut`{.action}, puis suivez les étapes qui s'afficheront. 

Il est également possible de modifier le TTL d'un enregistrement DNS. Cette manipulation ne peut cependant être effectuée qu'enregistrement par enregistrement, en les modifiant ou lors d'un ajout.

## Aller plus loin

[Généralités sur les serveurs DNS](../generalites-serveurs-dns/){.external}.

[Ajouter un champ SPF à la configuration de son nom de domaine](../le-champ-spf/){.external}.

[Protégez votre domaine contre le Cache Poisoning avec le DNSSEC](https://www.ovh.com/ca/fr/domaines/service_dnssec.xml){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
