---
title: Enterprise File Storage - Performances
excerpt: 'Performances pour Entreprise File Storage'
slug: netapp-performances
section: Enterprise File Storage
order: 8
---

**Dernière mise à jour le 10/11/2022**

## Objectif

Dans ce guide, découvrez les concepts liés au provisionnement, au suivi ainsi qu'au test des performances de la solution «[Enterprise File Storage](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/)».

### Suivi des performances

La notion de “niveau de service” est un élément important dans l’offre Enterprise File Storage. Elle définit les niveaux de performances atteignables pour chaque service provisionné. Les performances d’un système de fichiers sont généralement définies par plusieurs éléments, le débit, les IOPS (ou nombre d’opération d’entrée-sortie par seconde), la taille de bloc ou encore le modèle d’accès séquentiel ou aléatoire.

A ce jour, Enterprise File Storage fournit et garantit des objectifs de performances de **64 Mo/s par To et 4000 IOPS par To**.  Les capacités provisionnées des services ont donc un impact direct sur les performances disponibles pour votre service.

Cette information est importante lorsque vous concevez votre architecture de stockage. Prenons trois exemples pour l’illustrer :
1)	Dans cet exemple, votre application nécessite un débit théorique d’environ **430 Mo/s**. Pour cela, vous devez provisionner au moins **7 To** de stockage, en effet un rapide calcul : **450/64 = 6,72** permet d’estimer la capacité minimale nécessaire pour atteindre ce débit.
2)	Dans un second exemple, votre infrastructure nécessite **4500 IOPS** et un volume de données de **1 To**. Pour cela, vous devez provisionner **2 To** pour obtenir les **4500 IOPS nécessaires**. Plus spécifiquement dans ce cas vous bénéficierez de **8000 IOPS** sur la capacité provisionnée. Il s’agit donc de sur-provisionner votre service afin d’assurer le niveau de performances souhaité. 
3)	Dans un dernier exemple, votre application ne nécessite pas de performance en particulier mais un volume de stockage de plus de **60 To**. Dans ce cas, il est préférable de s’orienter vers le service de stockage «[NAS-HA](https://www.ovhcloud.com/fr/storage-solutions/nas-ha/)», plus économique et permettant d’atteindre des capacités supérieures à 58 To par service.


### Volumes et qualité de services (QoS)

Pour rappel, un volume est une partition du service (aussi appelé pool ou pool de capacité). Lors de votre commande, vous provisionnez une capacité pour votre service. Une fois le service livré, vous êtes amené à créer vos volumes en mettant à disposition un quota allant de 100 Go à 29 To par volume. 

Retrouvez ci-dessous la hiérarchie d’un service de stockage Enterprise File Storage :

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png)

Enterprise File Storage ne permet pas encore la modification de la QoS de manière manuelle, en effet la QoS est définie au niveau du service (pool).

### Considérations pour maximiser les performances de votre système de fichiers

Afin de maximiser les performances de votre Enterprise File Storage, certains éléments sont importants à prendre en considération :
1)	Penser à réserver votre Enterprise File Storage dans le même datacenter que vos charges de travail. Les latences entre les datacenters peuvent être élevées et impactées les performances globales de votre application.
2)	Favoriser les serveurs de dernières générations pour une meilleure fiabilité et une bande passante maximisée grâce aux nouvelles interfaces réseau.
3)	Identifier la bande passante publique disponible sur les serveurs clients et ainsi s’assurer de la compatibilité avec les performances provisionnées pour ainsi maximiser les débits.


### Test des performances

Afin d’effectuer vos propres tests de performances et pour vous familiariser avec les niveaux de service d’Enterprise File Storage, nous recommandons l’utilisation d’outils comme FIO – un outil d’évaluation très populaire. Il fournit de nombreuses options réglables pour simuler la charge de travail souhaitée et fournit des statistiques détaillées sur le comportement du stockage sous charge. Il est également disponible gratuitement sur un large éventail de systèmes d’exploitation.

Il est important de tester les performances de votre Enterprise File Storage dans le même datacenter que vos charges de travail. Les latences entre les datacenters sont trop élevées durant le fonctionnement pour une telle évaluation.

Avant de démarrer le test, il est nécessaire de vérifier que le client utilisé pour ce benchmark a accès à votre service Enterprise File Storage et à un volume de test. Si ce n’est pas encore fait, vous pouvez suivre le guide «[Gestion depuis l’espace client OVHcloud](https://docs.ovh.com/fr/storage/netapp-control-panel/)»

## Banc de test

L’outil FIO vous permet de tester plusieurs scénarios et de modifier de nombreux paramètres de test : nombre d’images, leur taille, la taille de bloc, la durée du test, le nombre de FIO workers, le modèle d’accès (lecture/écriture/séquentiel/aléatoire)…





