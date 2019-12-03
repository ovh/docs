---
title: 'Gérer les sauvegardes'
slug: gerer-sauvegardes
excerpt: 'Gérez l''ensemble de vos sauvegardes et gardez le contrôle sur vos données avec l''interface client'
section: 'Démarrer avec votre cluster PostgreSQL'
---

## Sauvegardes incluses à l'offre
Votre cluster PostgreSQL est sauvegardé de manière journalière par OVHcloud.

Par défaut, nous conservons ces sauvegardes sur 3 mois glissants.

Cette fonctionnalité est incluse à votre offre et ne présente aucun coût additionnel.

Vous pouvez activer ou désactiver cette option depuis votre espace client dans la rubrique `Settings`{.action}.

## Sauvegardes manuelles

En complément des sauvegardes automatiques intégrées à votre offre, vous pouvez en réaliser manuellement et à tout moment.

Ces sauvegardes manuelles ne sont pas incluses dans le prix de votre cluster. Leur tarif est indiqué lors de la création.


## Interagir avec vos sauvegardes
L'ensemble de vos sauvegardes peut être géré de manière centralisée. Pour cela, rendez-vous dans l'onglet `Backups`{.action} de votre espace client.

Vous y trouverez toutes vos sauvegardes :

- celles automatiquement réalisées par OVHcloud.
- celles faites à la demande.

Utilisez le bouton `Actions`{.action} pour :

- lancer une sauvegarde manuelle.
- lancer une restauration à un temps donné.


- **Création d'une sauvegarde manuelle**

Depuis l'interface client, rendez-vous dans l'onglet `Sauvegardes`{.action} puis cliquez sur le bouton `Actions`{.action}.

Vous pouvez donner un nom à vos sauvegardes manuelles pour en faciliter la gestion.

> [!primary]
>
> Attention, les sauvegardes manuelles représentent un coût aditionnel détaillé dans l'espace client.
>

- **Restaurer une sauvegarde**

Sélectionnez la sauvegarde qui vous intéresse dans la liste et cliquez sur le bouton `...`{.action} puis `restore`{.action}.

> [!primary]
>
> Pour ne pas pertuber le fonctionnement de votre cluster, les données restaurées sont mises à disposition sur une instance dédiée.
>
> Cette instance vous sera facturée par heure et l'espace consommé par les données vous sera facturé par Go par heure.
>

- **Restauration à un instant précis (PITR, Point In Time Recovery)**

Cette fonctionnalité de PostgreSQL vous permet de revenir dans le temps, à la transaction près. Vous trouverez davantages d'informations sur le fonctionnement en consultant [la documentation officielle](https://docs.postgresql.fr/10/continuous-archiving.html){.external} de PostgreSQL.

Cliquez sur le bouton `Actions`{.action} puis `Launch a point in time recovery`{.action}. Une fenêtre de dialogue vous demandera alors de rentrer la date et l'heure à laquelle vous souhaitez retrouver vos données.

> [!primary]
>
> Pour ne pas pertuber le fonctionnement de votre cluster, les données restaurées sont mises à disposition sur une instance dédiée en lecture seule.
>
> Cette instance vous sera facturée par heure et l'espace consommé par les données vous sera facturé par Go par heure.
>


- **Suppression**

Sélectionnez la sauvegarde qui vous intéresse dans la liste et cliquez sur le bouton `...`{.action} puis `delete`{.action}.
