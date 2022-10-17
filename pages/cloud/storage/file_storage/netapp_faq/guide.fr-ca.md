---
title: Enterprise File Storage - FAQ
excerpt: 'FAQ sur la solution Entreprise File Storage'
slug: netapp/faq
section: Enterprise File Storage
order: 7
---

**Dernière mise à jour le 21/03/2022**

## Objectif

Voici les questions les plus fréquemment posées concernant l'offre Enterprise File Storage d'OVHcloud.

## Questions générales

### Qu'est ce que la solution Enterprise File Storage d'OVHcloud ?

Enterprise File Storage d'OVHcloud est une solution de stockage fichier à hautes performances et haute disponibilité. Elle repose sur la solution de stockage software-defined ONTAP Select, de NetApp&#174;, et est entièrement managée par OVHcloud.

### Que puis-je faire avec Enterprise File Storage ?

Enterprise File Storage permet de répondre à de nombreux cas pratiques pour moderniser votre infrastructure de stockage de données d’entreprise, et ce grâce notamment à l’intégration du protocole NFS.<br>
Il permet par exemple d’externaliser le stockage partagé de vos machines virtuelles ou serveurs basés sur Linux pour diverses charges de travail (applicatifs critiques, bases de données d’entreprises, CRM, ERP...) afin d’augmenter la résilience globale de votre infrastructure et la qualité de service (QoS).<br>
Enterprise File Storage permet de répondre aux cas d'usage simples de serveurs de fichiers partagés pour lesquels le service doit offrir des performances élevées, une haute disponibilité et une bande passante garantie et inclue.

Cette solution permet également de répondre à des cas pratiques plus complexes, que ce soit les cas de débordement de charges de travail on-premise ou de migration vers le cloud. Mais aussi les exemples de sauvegarde de données dans le cloud dans le cadre de plans de résilience, à la fois comme une bonne pratique du marché pour la gestion et la pérennité des données mais aussi afin d'optimiser les coûts opérationnels (données chaudes on-premise et données tièdes/froides dans le cloud).

### Peut-on gérer Enterprise File Storage depuis l’espace client ?

Oui, ce service est directement accessible depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), dans la rubrique `Bare Metal Cloud`{.action} puis `Storage et Backup`{.action}.

## Disponibilité

### Quel niveau de fiabilité et de redondance puis-je atteindre avec Enterprise File Storage ?

Enterprise File Storage est un service de stockage hautement disponible, redondé de par sa conception. Son architecture active/active sécurise cette redondance en alimentant deux serveurs de fichiers différents dans deux baies d’un même datacentre. En cas de défaillance du premier, le service réplique automatiquement vos données sur les deux serveurs. Le basculement se produit généralement en cas de panne du serveur actif ou lors d'une maintenance planifiée.

### Quel SLA est fourni avec Enterprise File Storage ?

Enterprise File Storage est fourni avec un taux de disponibilité de 99,99%.

## Réseau et sécurité

### Quels protocoles de transfert de fichiers sont actuellement supportés sur la solution Enterprise File Storage ?

Enterprise File Storage supporte le transfert de fichiers via NFS (NFSv3).

### Depuis quels services OVHcloud puis-je pousser des données ?

Enterprise File Storage est un service qui peut recevoir des données depuis l’ensemble des services existants OVHcloud : Bare-Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### Est-ce que le service peut être connecté avec un Microsoft Active Directory (AD) ?

Non.

### Quelles sont les certifications associées à Enterprise File Storage ?

Notre solution Enterprise File Storage est conforme à plusieurs normes de pointe du secteur, dont ISO27001, le RGPD et les politiques de plusieurs pays en matière de données de santé.

### Peut-on accéder à Enterprise File Storage depuis un réseau privé de type vRack ?

Pas pour le moment, mais cette fonctionnalité sera bientôt disponible (vRack endpoint).

## Accès *On-premises*

### Est-il possible d'accéder à Enterprise File Storage depuis l'extérieur du réseau OVHcloud ?

Par définition, Enterprise File Storage n’est disponible que sur le réseau OVHcloud.<br>
Cependant, il est possible de monter une architecture permettant une liaison avec une infrastructure extérieure à ce réseau.<br>
Nous vous invitons à joindre notre service commercial ou notre support technique afin de concevoir une infrastructure adaptée à votre écosystème et votre solution. 

## Capacité et Performances

### Quelles sont les capacités de stockage disponibles ?

La taille minimum d’un service est de 1TiB et la taille maximum est de 58TiB. La granularité est de 1TiB.

### Combien de services Enterprise File Storage puis-je créer depuis mon compte client ?

Il n’y a pas de limite de nombre de services par compte client.

### Quel est le nombre de volumes maximum par service ?

Il est possible de créer jusqu’à 10 volumes maximum par service. La taille minimum est de 100GiB et la taille maximum est de 29TiB.

### Quel niveau de performance est disponible avec Enterprise File Storage ?

Enteprise File Storage est fourni avec un débit garanti de 64Mo/s par TiB et de 4000 IOPS par TiB.

Par exemple, lors de la livraison d'un pool de 10 TiB, vous bénéficiez d'une bande passante de 640Mo/s et de 40000 IOPS.

## Snapshots et sauvegardes

### Comment peut-on restaurer les fichiers d'une précédente version ?

Les snapshots sont disponibles dans un répertoire prévu à cet effet (.snapshots).

### Quelle politique de sauvegarde est associée à Enterprise File Storage ?

Les utilisateurs sont responsables de la gestion de leurs sauvegardes (outil et règles). Cependant, pour des raisons de sécurité et de résilience de l'infrastructure, OVHcloud opère une sauvegarde quotidienne du service dans un serveur distant. En cas de panne ou d'attaque, OVHcloud peut restaurer les données du jour précédent. Cette action s'effectue sur demande et est un service optionnel facturé.

### Les snapshots sont-ils compris dans la capacité d’un service ?

Un minimum de 5% de l’espace de stockage est attribué aux snapshots. Par exemple, sur un service de 5TiB, 250GiB sont réservés pour les snapshots.

### Quel est le nombre maximum de snapshots par service ?

200

### Quel est le nombre maximum de snapshots par volume ?

200

### Combien de politiques de snapshot puis-je créer par volume ?

1

### Combien de règles puis-je créer par politique de snapshot ?

4

### Où sont stockés les snapshots ?

Vos snapshots sont stockés au même niveau que votre service. Les snapshots sont ainsi répliqués sur deux serveurs distincts, dans deux racks différents. En parallèle, OVHcloud effectue un snapshot quotidien sur un site distant.

### Comment suivre l’utilisation des pools et des volumes ?

Il n’existe pas encore de métriques intégrées pour suivre l’utilisation des pools et des volumes. 

## Tarification

### Quel type de tarification est lié au service ?

Enterprise File Storage est un service facturé mensuellement au volume (de 1 à 58 To par paliers de 1 To). Il est également possible, optionnellement, de s'engager sur une durée d'utilisation du service (12, 24 ou 36 mois).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
