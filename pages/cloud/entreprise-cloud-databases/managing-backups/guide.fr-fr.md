---
title: 'Sauvegardes et restaurations'
slug: gerer-sauvegardes
excerpt: 'Gérez l''ensemble de vos sauvegardes et restaurations'
section: 'Démarrer avec votre cluster PostgreSQL'
---

**Dernière mise à jour le 26/12/2019**

## Objectif

Votre cluster Enterprise Cloud Databases est sauvegardé de manière journalière par OVHcloud.
Par défaut, nous conservons ces sauvegardes sur 3 mois glissants, et ne présente aucun coût additionnel.
Ce guide vous détaille comment intéragir avec ces sauvegardes et comment les restaurer.


## Pré-requis
- Disposer d'un compte client OVHcloud.
- Pouvoir établir une connexion depuis le réseau public (Internet).
- Avoir un client PostgreSQL installé sur le poste depuis lequel vous souhaitez vous connecter à votre base de données.


## Présentation des sauvegardes

**Sauvegarde complète**

Afin de ne pas perturber vos applicatifs en production, OVHcloud utilise un nœud de sauvegarde isolé (sans trafic client) et procède sur celui-ci à un snapshot ZFS à froid (service PostgreSQL arrêté).
Ce procédé permet d'obtenir des performances constantes sur votre cluster en production, cela même lors des sauvegardes.

Les snapshots sont ensuite envoyés pour archivage sur un ensemble de serveurs de stockage.


**Sauvegarde incrémentale**

La sauvegarde incrémentale se base sur le Write-Ahead Logging (fichiers de WAL) de PostgreSQL. Découvrez davantage d'informations sur la page de [documentation WAL PostgreSQL](https://docs.postgresql.fr/current/wal-intro.html){.external}.

Ces fichiers de WAL contiennent l'ensemble des changements apportés aux données. OVHcloud assure l'archivage des fichiers de WAL pour une durée de 3 mois glissants.

Les fichiers de WAL sont utilisés pour r"aliser du Point In Time Recovery (PITR). Ils se réfèrent toujours à une sauvegarde complète.

PostgreSQL, grâce à son système d'archivage automatique, permet à OVHcloud de chiffrer et d'envoyer ces fichiers vers un container Public Cloud Storage lié à votre cluster.


## En pratique

### Étape 1 : activater ou désactiver les sauvegardes automatiques
Par défaut, votre cluster est automatiquement sauvegardé, cela chaque jour sur 3 mois glissants (snapshot ZFS).
Vous pouvez activer ou désactiver cette option depuis votre espace client dans la rubrique `Paramètres > Sauvegardes automatiques journalières`{.action}.


### Étape 2 : lister et intéragir avec ses sauvegardes
L'ensemble de vos sauvegardes est géré de manière centralisée. Pour cela, rendez-vous dans l'onglet `Sauvegardes`{.action} dans votre espace client.

Vous y trouverez toutes vos sauvegardes :

- celles automatiquement réalisées par OVHcloud, journalièrement. 
- celles réalisées manuellement.

Chacune des sauvegardes dispose d'une date de création et d'une date d'expiration. Via le bouton `Actions`{.action} il est possible de :

- lancer une sauvegarde manuelle.
- lancer une restauration à un temps donné (PITR).

Il n'est pas possible de les télécharger depuis l'espace client.


### Étape 3 : créer une sauvegarde manuelle
Depuis l'interface client, rendez-vous dans l'onglet `Sauvegardes`{.action} puis cliquez sur le bouton `Actions`{.action}.

Vous pouvez donner un nom à vos sauvegardes manuelles pour en faciliter la gestion.

> [!primary]
>
> Attention, les sauvegardes manuelles représentent un coût aditionnel détaillé dans l'espace client.
>


### Étape 4 : restaurer une sauvegarde
Une sauvegarde peut être restaurée depuis l'espace client, suivant deux méthodes.


**Restaurer une sauvegarde précise**

Sélectionnez la sauvegarde qui vous intéresse dans la liste et cliquez sur le bouton `...`{.action} puis `restaurer`{.action}.

> [!primary]
>
> Pour ne pas pertuber le fonctionnement de votre cluster, les données restaurées sont mises à disposition sur une instance dédiée.
>
> Cette instance vous sera facturée par heure et l'espace consommé par les données vous sera facturé par Go par heure.
>


**Restaurer à un instant précis (PITR, Point In Time Recovery)**

Cette fonctionnalité de PostgreSQL vous permet de revenir dans le temps, à la minute près. Vous trouverez davantages d'informations sur le fonctionnement en consultant [la documentation officielle](https://docs.postgresql.fr/10/continuous-archiving.html){.external} de PostgreSQL.

Cliquez sur le bouton `Actions`{.action} puis `Restauration à une date spécifiée`{.action}. Une fenêtre de dialogue vous demandera alors de rentrer la date et l'heure à laquelle vous souhaitez retrouver vos données.

> [!primary]
>
> Pour ne pas pertuber le fonctionnement de votre cluster, les données restaurées sont mises à disposition sur une instance dédiée en lecture seule.
>
> Cette instance vous sera facturée par heure et l'espace consommé par les données vous sera facturé par Go par heure.
>


### Étape 5 : supprimer une sauvegarde
Sélectionnez la sauvegarde qui vous intéresse dans la liste et cliquez sur le bouton `...`{.action} puis `supprimer`{.action}.


## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.
