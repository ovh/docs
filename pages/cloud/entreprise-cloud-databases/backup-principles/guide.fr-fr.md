---
title: Fonctionnement des sauvegardes et des restaurations 
slug: fonctionnement-sauvegardes-restaurations
excerpt: Pour en savoir plus sur le fonctionnement des sauvegardes et des restaurations
section: Informations techniques
---

## Sauvegarde

- **Sauvegarde complète**

OVH utilise un noeud de sauvegarde isolé (sans trafic client) et procède à un snapshot ZFS à froid (service PostgreSQL arreté).

Les snapshots sont ensuite envoyées pour archivage sur un ensemble de serveurs de stockage.

- **Sauvegarde incrémentale**

La sauvegarde incrémentale se base sur le Write-Ahead Logging (fichiers de WAL) de PostgreSQL. Découvrez davantage d'informations sur la page de [documentation PostgreSQL](https://docs.postgresql.fr/current/wal-intro.html){.external}.

Ces fichiers de WAL contiennent l'ensemble des changements apportés aux données. OVH assure l'archivage des fichiers de WAL pour une durée de 3 mois glissants.

Les fichiers de WAL sont utilisés pour faire du Point In Time Recovery. Ils se referent toujours à une sauvegarde complète.

PostgreSQL, grâce à son systeme d'archivage automatique, permet à OVH de chiffrer et d'envoyer ces fichiers vers un container Public Cloud Storage lié à votre cluster.



## Restauration

Pour réaliser un PITR, OVH procède en deux étapes :

- transfert d'une sauvegarde complète depuis les serveurs de stockage vers une instance Public Cloud.

- utilisation du système de restauration inclu à PostgreSQL permettant de télécharger les fichiers de WAL depuis le container Public Cloud Storage lié à votre cluster, de les déchiffrer et de les appliquer.
