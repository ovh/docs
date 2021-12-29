---
title : Enterprise Cloud Databases - annonce de fin de vie (EOL)
slug : eol-notice
excerpt : Détails sur la fin de vie (EOL) des solutions Enterprise Cloud Databases
section : Annonces
order : 1
---

**Dernière mise à jour le 20/12/2021**

## Résumé

OVHcloud a annoncé la fin de vie (*End Of Life* ou *EOL*) de sa solution Enterprise Cloud Databases (clusters PostgreSQL managés, exploités sur des serveurs bare metal).

Les services actifs bénéficieront de support jusqu'au 13 juin 2022, date de fin du support.
Toutes les opérations peuvent être suivies via [la page statut officielle](https://public-cloud.status-ovhcloud.com/incidents/961szlvn03b1).

De nouvelles offres de bases de données managées sont disponibles, consultez la section [solutions de remplacement](#workaround) de ce guide.

## Planification de fin de vie

En janvier 2022, les clients disposant d’un service actif recevront une notification par e-mail sur leur NIC-admin.

### Tableau de planification

| Jalon                | Definition                                                                                                          | Date                |
|--------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------|
| Annonce de fin de vie | Date de la tâche travaux qui annonce la fin des ventes et de la fin du support.                               | 20/12/2021 10h CEST |
| Fin de vente             | Dernier jour pour l’achat d’un nouveau service sur le site OVHcloud.                                                                     | 17/01/2022 10h CEST |
| Fin de la croissance            | Dernier jour pour ajouter des replicas nodes aux clusters existants.                                                                | 16/05/2022 10h CEST |
| Indisponibilité prévue         | Indisponibilité ponctuelle programmée 2 heures pour prévenir les clients impactés.                                                      | 10/06/2021 10h CEST |
| Fin du support          | Dernier jour d'utilisation des services. Passée cette date, tous les services et sauvegardes associées seront indisponibles.                 | 13/06/2021 10h CEST |

Toutes les opérations peuvent être suivies via [la page statut officielle](https://public-cloud.status-ovhcloud.com/incidents/961szlvn03b1).

### Chronologie

![Timeline](images/timeline.png){.thumbnail}

## Périmètre de fin de vie

Cette fin de vie implique :

- Tous les services et solutions Enterprise Cloud databases (gratuits ou payants) dans le monde. 
- Les  API endpoints OVHcloud /cloudDB/enterprise/*

Cette fin de vie **ne concerne pas** :

- les bases de données d’hébergement web;
- les bases de données Public Cloud Databases.

## Solutions de remplacement <a name="workaround"></a>

OVHcloud propose des alternatives de remplacement.
Au sein notre univers Public Cloud, nous fournissons des clusters PostgreSQL managés compatibles avec vos services.

Une documentation complète est disponible sur <https://docs.ovh.com/ca/en/publiccloud/databases/>.

Voici une matrice comparative :

| Feature                                | Enterprise Cloud Databases (EOL) | Public Cloud Databases (new)  |
|----------------------------------------|----------------------------------|-------------------------------|
| Services managés | Oui | Oui |
| Versions disponibles de PostgreSQL | PostgreSQL 9.6, 10, 11 | PostgreSQL 10, 11, 12, 13, 14 |
| Plateforme d'infrastructure | Serveurs Baremetal | Machines virtuelles Public Cloud |
| Ressources dédiées | Oui | Oui |
| Haute disponibilité (clustering) | Oui. minimum 3 nodes | Oui. minimum 3 nodes |
| Sauvegardes automatiques quotidiennes | Oui | Oui |
| Outils d’observabilité (métriques et logs) | Partiellement | Oui |
| Réseau public | Oui | Oui |
| Réseau privé | Non | Oui |
| Statistiques des dernières requêtes | Non | Oui |
| Analyseur de requêtes lentes | Non | Oui |
| Modèle de facturation | Facturation mensuelle | Facturation à l'heure |

Découvrez les offres et tarifs Public Cloud :

- Français (Euros) : <https://www.ovhcloud.com/fr-ca/public-cloud/databases/>.
- Anglais (Euros) : <https://www.ovhcloud.com/en-ca/public-cloud/databases/>.

## Options de migration

Il n'existe pas encore d'option de migration automatique.

Vous pouvez migrer vers d'autres services PostgreSQL avec les commandes PostgreSQL natives, comme **pg_dump** et **pg_restore**.

Des guides spécifiques sont en cours de rédaction afin de fournir un processus pas à pas. Nous les renseignerons ici et sur la documentation officielle de Public Cloud Databases.

Si vous avez besoin d'aide, merci de contacter directement notre support. Nous vous proposons également un catalogue de services professionnels.
