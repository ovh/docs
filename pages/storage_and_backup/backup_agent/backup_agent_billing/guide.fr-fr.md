---
title: "Backup Agent - Facturation"
excerpt: "Facturation du produit Backup Agent"
updated: 2026-01-09
---

## Objectif

Cette page détaille les modalités de facturation du produit Backup Agent.

## La facturation

Le produit se base sur deux éléments pour proposer son service :

- Le Backup Agent installé sur vos serveurs Bare Metal.
- L'[OVHcloud Object Storage](/links/public-cloud/object-storage).

Nous ne facturons pas Le Backup Agent sur vos serveurs, c'est-à-dire que vous pouvez en déployer sur un ou plusieurs serveurs Bare Metal, cela ne vous coûtera rien.

Cependant, l'utilisation de l'OVHcloud Object Storage vous est facturé, à l'échelle du Go par mois. Vous serez donc facturé au début de chaque mois pour votre utilisation du mois précédent.

Vous retrouverez le prix du GB par mois sur notre [site web](/links/public-cloud/prices-object-storage).

Vous avez à votre disposition un teableau de bord `Facturation` dans votre [espace client OVHcloud](/links/manager) pour visualiser votre consommation actuelle, et ainsi prédire la facture finale en fin de mois.

- Exemple 1 : Vous avez déployé Le Backup Agent sur 3 serveurs Bare Metal et ceux-ci envoient leurs données vers leurs Vaults respectifs. La totalité des capacités utilisées par vos données de sauvegarde sur les Vaults est de 600 Go. Vous serez donc facturé à la fin du mois pour 600 Go.

- Exemple 2 : Vous avez déployé Le Backup Agent sur 10 serveurs Bare Metal et ceux-ci envoient leurs données vers leurs Vaults respectifs. La totalité des capacités utilisées par vos données de sauvegarde sur les Vaults est de 600 Go. Après quelques sauvegardes, vous retirez Le Backup Agent de 4 serveurs, supprimant les données après 14 jours. L'utilisation totale des Vaults tombe à 400GB. Vous serez facturé à la fin du mois pour 600 Go.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).