---
title : ML Serving - annonce de fin de vie (EOL)
slug : eol-notice
excerpt: Détails sur la fin de vie (EOL) des services ML Serving
section : Annonces
order : 1
---

**Dernière mise à jour le 17/08/2022**

## Résumé

OVHcloud a annoncé la fin de vie (*End Of Life* ou *EOL*) de sa solution ML Serving (inférence pour les modèles de machine learning "as a service").

Les services actifs seront pris en charge jusqu'au 1er décembre 2022, date de fin du support.
Toutes les opérations peuvent être suivies via [la page statut officielle](https://public-cloud.status-ovhcloud.com/incidents/w76csw7y52jf).

Une nouvelle solution d'inférence AI Deploy est disponible, consultez la section [solutions de remplacement](#workaround) de ce guide.

## Planification de fin de vie

En août 2022, les clients disposant d’un service actif recevront une notification par e-mail sur leur NIC-admin.

### Tableau de planification 

| Jalon                | Définition                                                                                                          | Date                |
|--------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------|
| Annonce de fin de vie | Date de la tâche travaux qui annonce la fin des ventes et de la fin du support.                                 | Août 2022         |
| Fin de vente             | Dernier jour pour l’achat d’un nouveau service sur OVHcloud.                                                                     | 04/10/2022 10h CEST |
| Fin de la croissance            | Dernier jour pour ajouter d'autres modèles aux espaces de noms ML Serving existants.                                                      | 01/12/2022 10h CEST |
| Fin du support           | Dernier jour d'utilisation des services. Passée cette date, tous les services et sauvegardes associés seront indisponibles (shutdown).      | 01/12/2022 10h CEST |

Toutes les opérations peuvent être suivies via [la page statut officielle](https://public-cloud.status-ovhcloud.com/incidents/w76csw7y52jf).

### Chronologie

![Timeline](images/timeline.png){.thumbnail}

## Périmètre de fin de vie

Cette fin de vie implique :

- Tous les services et solutions ML Serving (gratuits ou payants) dans le monde. 
- Les API endpoints OVHcloud /cloud/project/{serviceName}/ai/serving/* 

Cette fin de vie **ne concerne pas** :

- AI Notebooks
- AI Training
- AI Deploy (anciennement AI Apps)

## Solution de replacement <a name="workaround"></a>

OVHcloud n'a pas d'alternative à la migration automatique, mais au sein de notre univers Public Cloud, nous fournissons AI Deploy (anciennement AI Apps), une solution gérée pour l'inférence.

Alors que le service ML Serving se concentrait sur le déploiement des fichiers de modèles ML exportés, nécessitant des workflows intensifs et complexes, la nouvelle solution AI Deploy est beaucoup plus agnostique et pérenne.
AI Deploy prend en charge l'inférence à partir d'images Docker, ce qui permet aux clients de déployer n'importe quel modèle mais également des applications web. 

Une documentation complète est disponible sur <https://docs.ovh.com/fr/publiccloud/ai/>.

Voici une matrice comparative :

| Fonctionnalité                                | ML Serving                       | AI Deploy (nouveau)  |
|----------------------------------------|----------------------------------|-------------------------------|
| Services managés                       | Oui                              | Oui                           |
| Inférence de haute disponibilité            | Oui                              | Oui                           |
| Ressources de calcul CPU ou GPU           | Non                               | Oui                           |
| Sérialisation de modèle                    | Oui                              | Non                            |
| Inférence de modèle via des images Docker      | Non                               | Oui                           |
| Inférence WebApp via des images Docker     | Non                               | Oui                           |
| Outils d’observabilité (metrics et logs) | Partiellement                        | Oui                           |
| Réseau public                         | Oui                              | Oui                           |
| Réseau privé                        | Non                               | Non                            |
| Modèle de facturation                          | Facturation à la minute               | Facturation à la minute            |


Découvrez les offres et tarifs Public Cloud :

- Français (Euros) : <https://www.ovhcloud.com/fr/public-cloud/ai-machine-learning/>.
- Anglais (Euros) : <https://www.ovhcloud.com/en-ie/public-cloud/ai-machine-learning/>.

## Options de migration

Il n'existe pas encore d'option de migration automatique. 

Vous pouvez migrer vers AI Deploy en conteneurisant votre application.

Consultez [nos guides AI Deploy (anciennement AI Apps) ici](https://docs.ovh.com/fr/publiccloud/ai/).

Si vous avez besoin d'aide, merci de contacter directement notre support. Nous vous proposons également un catalogue de services professionnels.