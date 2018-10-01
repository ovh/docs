---
title: 'Découvrir les API OVH Prescience'
slug: premiers-pas-avec-ovh-prescience-api
excerpt: 'Découvrez comment gérer les API OVH Prescience'
section: 'Premiers pas'
---

**Dernière mise à jour le 26/09/2018**

## Objectif

La plateforme Prescience est un outil d'apprentissage automatique, pilotable via API. Ce guide vous présentera les détails des API afin de vous permettre de piloter la plateforme OVH Prescience.

## Introduction

La plateforme Prescience d'OVH dispose de plusieurs API accessibles  à l'utilisateur pour automatiser une multitude d'action.

|API|URL|Description
|---|---|---|
Prescience API|https://prescience-api.ai.ovh.net| API Permettant de manipuler les `Source` / `Dataset` / `Model` de Prescience.
Prescience Serving|https://prescience-serving.ai.ovh.net| API Permettant d'évaluer un model généré par Prescience.

### Authentification

L'utilisation de Prescience nécessite un token d'authentification.

Voici un exemple d'appel sur l'API

```sh
curl -X GET "https://prescience-api.ai.ovh.net/project" -H "Authorization: Bearer ${TOKEN}"
```

## OVH Prescience API

### Sources

L'objet `Source` est le résultat d'une tâche de `parsing`.
Lors de l'appel à l'api, l'objet retourné inclut les éléments suivants:

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`source_id`| Identifiant de la source | `String` | Oui | Non
`input_url`| URL Interne du fichier pre-parsing | `String` | Non | Non
`source_url`| URL Interne de fichier post-parsing | `String` | Non | Non
`input_type`| Type du fichier source  | `String` | Oui | Non
`headers`| Fichier pre-parsing contient les headers  | `Boolean` | Oui | Non
`separator`| Séparateur du fichier pre-parsing si CSV  | `String` | Non | Non
`schema`| Chaîne de caractères représentant le schéma en JSON | `String` | Non | Non
`status`| Statut de la source | `Status` | Oui | Non
`last_update`| Date de dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de `parse` | `Integer` | Non | Non
`current_step`| Etape courante du processus de `parse` | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de `parse` | `String` | Non | Non

- Liste des sources

`GET https://prescience-api.ai.ovh.net/source`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|page|`Integer`|query|Non|`1`| Numéro de la page| `2`
|size|`Integer`|query|Non|`100`| Nombre d'éléments par page| `50`
|sort_column|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|sort_direction|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|

- Récupération d'une source

`GET https://prescience-api.ai.ovh.net/source/{id_source}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_source`|`String`|path|Oui|| Identifiant de la source| `ma_source`

- Suppression d'une source

`DELETE https://prescience-api.ai.ovh.net/source/{id_source}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_source`|`String`|path|Oui|| Identifiant de la source| `ma_source`



### Datasets

L'objet `Dataset` est le résultat d'une tâche de `preprocessing`.
Lors de l'appel à l'api, l'objet retourné aura les éléments suivants:

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`dataset_id`| Identifiant du dataset | `String` | Oui | Oui
`source`| Objet `Source` ayant généré le dataset | `Source` | Non | Oui
`dataset_url`| URL Interne de fichier résultant du preprocess | `String` | Non | Non
`transformation_url`| URL Interne de fichier PMML de transformation | `String` | Non | Non
`label_id`| Identifiant de la colonne label | `String` | Oui | Non
`problem_type`| Type du problème de machine learning (`Classification` / `Regression`) | `String` | Oui | Non
`nb_fold`| Nombre de découpages réalisés par le preprocess | `Boolean` | Oui | Non
`selected_columns`| Liste des colonnes choisies dans la source  | `String[]` | Non | Non
`schema`| Chaîne de caractère représentant le schéma en JSON | `String` | Non | Non
`status`| Statut du dataset | `Status` | Oui | Non
`last_update`| Date de dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de `preprocess` | `Integer` | Non | Non
`current_step`| Etape courante du processus de `preprocess` | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de `preprocess` | `String` | Non | Non

- Liste des datasets

`GET https://prescience-api.ai.ovh.net/dataset/`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|page|`Integer`|query|Non|`1`| Numéro de la page| `2`
|size|`Integer`|query|Non|`100`| Nombre d'éléments par page| `50`
|sort_column|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|sort_direction|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|dataset_id|`String`|query|Non|| Champ de filtrage sur le nom du dataset (Recherche en mode LIKE)| `dataset`|
|source_id|`String`|query|Non|| Champ de filtrage sur le nom de la source du dataset (Recherche en mode LIKE)| `source`|

- Récupération d'un dataset

`GET https://prescience-api.ai.ovh.net/dataset/{id_dataset}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_dataset`|`String`|path|Oui|| Identifiant du dataset| `mon_dataset`

- Suppression d'un dataset

`DELETE https://prescience-api.ai.ovh.net/dataset/{id_dataset}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_dataset`|`String`|path|Oui|| Identifiant du dataset| `mon_dataset`



### Models

L'objet `Model` est le résultat d'une tâche de `train`.
Lors de l'appel à l'api, l'objet retourné aura les éléments suivants:

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`model_id`| Identifiant du model | `String` | Oui | Non
`dataset`| Objet `Dataset` ayant généré le model | `Dataset` | Non | Oui
`label_id`| Identifiant de la colonne label | `String` | Oui | Non
`config`| Objet `Config` ayant généré le model | `Config` | Non | Non
`status`| Statut du dataset | `Status` | Oui | Non
`last_update`| Date de dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de `train` | `Integer` | Non | Non
`current_step`| Etape courante du processus de `train` | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de `train` | `String` | Non | Non

L'objet `Config` décrit la configuration utilisé pour générer le modèle de machine learning

|Champ|Description|Type
|---|---|---|
`name`| Nom de l'algorithme utilisé | `String`
`class_identifier`| Identifiant interne | `String`
`kwargs`| Hyperparametres du model | `Dictonnaire`

- Liste des models

`GET https://prescience-api.ai.ovh.net/model`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|page|`Integer`|query|Non|`1`| Numéro de la page souhaitée| `2`
|size|`Integer`|query|Non|`100`| Nombre d'éléments souhaités par page| `50`
|sort_column|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `model_id`|
|sort_direction|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `model_id`|
|dataset_id|`String`|query|Non|| Champ de filtrage sur le nom du dataset (Recherche en mode LIKE)| `dataset`|

- Récupération d'un model

`GET https://prescience-api.ai.ovh.net/model/{id_model}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_model`|`String`|path|Oui|| Identifiant du model| `mon_model`

- Suppression d'un model

`DELETE https://prescience-api.ai.ovh.net/model/{id_model}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_model`|`String`|path|Oui|| Identifiant du model| `mon_model`



### Parsing

Pour créer une `Source`, il faut lancer une tâche de parsing.

`POST https://prescience-api.ai.ovh.net/ml/upload/source`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`parse.source_id`|`String`|multipart `parse` json|Oui|| Nom de la source| `ma-source`
|`parse.input_type`|`String`|multipart `parse` json|Oui|| Type de fichier. `csv` ou `parquet` uniquement| `csv`
|`parse.separator`|`String`|multipart `parse` json|Non|`,`| Séparateur dans le cas d'un fichier csv| `;`
|`files`|`Files`|multipart `input-file-file-index` name |Non|| Fichier à uploader(peut en contenir plusieurs) | `input-file-0`

Exemple:

En partant du principe que les fichiers csv `data-1.csv` & `data-2.csv` sont dans un même repertoire:

- fichier `parse.json`
```json
{
    "source_id": "ma-source",
    "input_type": "csv",
    "separator": ","
}
```

```sh
curl -H "Authorization: Bearer ${TOKEN}" -v \
    -F parse='@parse.json;type=application/json' \
    -F input-file-1=@data-1.csv \
    -F input-file-2=@data-2.csv \
    https://prescience-api.ai.ovh.net/ml/upload/source
```

> [!warning]
>
> La source renvoyé dans la réponse est incomplète.
> En effet, la tâche étant asynchrone, elle sera complétée au fur et à mesure de son avancement.
>

### Preprocess

Pour créer un `Dataset`, il faut au préalable avoir généré une `Source` et ensuite créer une tâche de preprocess.

`POST https://prescience-api.ai.ovh.net/ml/preprocess/{source_id}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`source_id`|`String`|query|Oui|| Nom de la source à parser| `ma-source`
|`dataset_id`|`String`|body json|Oui|| Nom du futur Dataset| `mon-gros-dataset`
|`label_id`|`String`|body json|Oui|| identifiant de la colonne à labelliser du Dataset`| `mon-label`
|`nb_fold`|`String`|body json|Non|10| Nombre de fold a créer pendant le parsing| `6`
|`problem_type`|`String`|body json|Oui|| Type du problème de machine learning (`classification` / `regression`)| `regression`
|`selected_columns`|`String[]`|body json|Non|`[]`| Choix des colonnes pour le dataset. Par défaut, l'ensemble des colonnes sont selectionnées| `["colonne_1", "colonne_2"]`

Exemple:

- fichier `preprocess.json`
```json
{
    "dataset_id": "mon-dataset",
    "label_id": "mon-label",
    "problem_type": "classification"
}
```

```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-api.ai.ovh.net/ml/preprocess/ma-source \
     --data-binary "@preprocess.json"
```

> [!warning]
>
> Le dataset renvoyé dans la réponse est incomplet.
> En effet, la tâche étant asynchrone, elle sera complétée au fur et à mesure de son avancement.
>



### Optimization

Une fois le `Dataset` créé, on peut commencer à l'optimiser.
`POST https://prescience-api.ai.ovh.net/ml/optimize/{dataset_id}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`dataset_id`|`String`|query|Oui|| Nom du dataset à optimizer| `mon-gros-dataset`
|`scoring_metric`|`String`|body json|Oui|| Métrique d'optimization (Regression: `mae` / `mse` / `  `, Classification: `accuracy`, `f1`, `roc_auc`)| `ma-source`
|`budget`|`Integer`|body json|Non|6| Budget alloué à l'optimization| 10

Exemple:
- fichier `optimize.json`
```json
{
    "scoring_metric": "roc_auc",
    "budget": 6
}
```

```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-api.ai.ovh.net/ml/optimize/mon-gros-dataset \
     --data-binary "@optiumize.json"
```

> [!warning]
>
> La tâche d'optimization renvoie un objet `Optimization`.
> Une fois l'optimization terminée, il sera possible de requêter les objets `Evaluation-Result` pour obtenir la meilleure configuration
>



## Evaluation Result

L'objet `Evaluation-Result` est le résultat d'une tâche d' `optimization`.
Lors de l'appel à l'api, l'objet retourné aura les éléments suivants:

|Champ|Description|Type
|---|---|---|
`uuid`| Unique uuid de l'évaluation | `Integer`
`spent_time`| Temps passé à évaluer la configuration | `Integer`
`costs`| Dictonnaire contenant les métriques associées à la configuration | `Dict{}`
`config`| Configuration testée | `Config`
`status`| Statut du dataset | `Status`
`last_update`| Date de dernière mise à jour| `Timestamp`
`created_at`| Date de création | `Timestamp`
`total_step`| Nombre total d'étapes du processus d' `optimization` | `Integer`
`current_step`| Etape courante du processus d' `optimization` | `Integer`
`current_step_description`| Description de l'étape courante du processus d' `optimization` | `String`

- Liste des évaluations

`GET https://prescience-api.ai.ovh.net/evaluation-result`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|dataset_id|`String`|query|Oui||Filtrage des évaluations sur le dataset| `mon-gros-dataset`
|page|`Integer`|query|Non|`1`| Numéro de la page souhaitée| `2`
|size|`Integer`|query|Non|`100`| Nombre d'éléments souhaités par page| `50`
|sort_column|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|sort_direction|`String`|query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|status|`String`|query|Non|| Filtre les données selon le statut| `BUILT`|

## Entrainement

Après avoir choisi la meilleure configuration dans la liste des `Evaluation-Result` nous pouvons entraîner un `Model`

`POST https://jedison.ai.ovh.net/ml/train`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`model_id`|`String`|query|Oui|| Nom du futur `Model`| `mon-model`
|`evaluation_uuid`|`String`|query|Oui|| Identifiant de l'`Evaluation-Result` | `bcaef619-4bf3-4c15-b49f-bc325f98d891`
|`dataset_id`|`String`|query|Non|dataset_id lié à l'`Evaluation-Result`| A renseigner pour entraîner sur un dataset différent de celui de l'`Evaluation-Result`| `mon-dataset-alternatif`

Exemple:
```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-api.ai.ovh.net/ml/train/?model_id=mon-model&evaluation_uuid=bcaef619-4bf3-4c15-b49f-bc325f98d891 \
```

> [!warning]
>
> La tâche d'entraînement renvoie un objet `Model` incomplet.
> En effet, la tâche étant asynchrone, elle sera complétée au fur et à mesure de son avancement.
>

## OVH Prescience Serving API

### Description d'un Model

Une fois qu'un `Model` est entraîné, il est possible de l'utiliser pour réaliser des inférences.

> [!warning]
>
> Les deux API ont un objet `Model` n'ayant pas la même structure. Seul l'identifiant `model_id` est commun.
>

- Description d'un `Model`

`POST https://prescience-serving.ai.ovh.net/model/{model_id}`

L'objet retourné décrit l'objet `Model` selon Prescience Serving.

Exemple de résultat:
```json
{
	"id": "model",
	"properties": {
		"created.timestamp": 1537170170985,
		"accessed.timestamp": null,
		"file.size": 3737,
		"file.md5sum": "a13e6e482bb2e62d1376b502f8cbc8a2"
	},
	"schema": {
		"argumentsFields": [{
			"id": "hours-per-week",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "capital-gain",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "education-num",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "age",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "fnlwgt",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "capital-loss",
			"dataType": "integer",
			"opType": "ordinal"
		}],
		"transformFields": [{
			"id": "imputed_hours-per-week",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "imputed_capital-gain",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "imputed_education-num",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "imputed_age",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "imputed_fnlwgt",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "imputed_capital-loss",
			"dataType": "integer",
			"opType": "ordinal"
		}, {
			"id": "scaled_imputed_hours-per-week",
			"dataType": "double",
			"opType": "continuous"
		}, {
			"id": "scaled_imputed_capital-gain",
			"dataType": "double",
			"opType": "continuous"
		}, {
			"id": "scaled_imputed_education-num",
			"dataType": "double",
			"opType": "continuous"
		}, {
			"id": "scaled_imputed_age",
			"dataType": "double",
			"opType": "continuous"
		}, {
			"id": "scaled_imputed_fnlwgt",
			"dataType": "double",
			"opType": "continuous"
		}, {
			"id": "scaled_imputed_capital-loss",
			"dataType": "double",
			"opType": "continuous"
		}]
	}
}
```

### Evaluation d'un Model

> [!warning]
>
> Lors de l'étape de preprocessing, une transformation des données est effectuée.
> Le model se bqse sur la sortie de cette transformation, il est impératif de transformer la donnée avant d'utiliser le model.
> Prescience Serving fournit des méthodes permettant d'effectuer à la fois cette transformation et l'inférence.

La plateforme de serving permet d'effectuer:
 - Transformation + Evaluation
 - Evaluation uniquement
 - Transformation uniquement


|Method|URL|Description
|---|---|---|
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model | Inférence unitaire
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model/batch/csv | Inférence par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model/batch/json | Inférence par lot depuis un tableau JSON
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform | Transformation unitaire
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform/batch/csv | Transformation par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform/batch/json | Transformation par lot depuis un tableau JSON
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model | Transformation associée au modèle et inférence unitaire.
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model/batch/csv | Transformation associée au modèle et inférence par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model/batch/json | Transformation associée au modèle et inférence par lot depuis un tqblequ Json


|Paramètres|Type|In|Requis|Défaut|Signification
|---|---|---|---|---|---|
|`id`|`String`|json|Non|| Id de la requête
|`arguments`|`Dict`|json|Oui|| Arguments de la requête


- Exemple d'une inférence unitaire

Fichier `exemple.json`:
```json
{
	"arguments": {
		"hours-per-week": 1,
		"capital-gain": 1,
		"education-num": 1,
		"age": 1,
		"fnlwgt": 1,
		"capital-loss": 1
	}
}
```
Requête
```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-serving.ai.ovh.net/eval/mon-model/transform-model \
     --data-binary "@exemple.json"
```

- Exemple d'une évaluation batch json

Fichier `exemple.json`:
```json
[
    {
        "id": "eval-1",
        "arguments": {
            "hours-per-week": 1,
            "capital-gain": 1,
            "education-num": 1,
            "age": 1,
            "fnlwgt": 1,
            "capital-loss": 1
        }
    },
    {
        "id": "eval-2",
        "arguments": {
            "hours-per-week": 1,
            "capital-gain": 1,
            "education-num": 1,
            "age": 1,
            "fnlwgt": 1,
            "capital-loss": 1
        }
    }
]
```
Requête
```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-serving.ai.ovh.net/eval/mon-model/transform-model/batch/json \
     --data-binary "@exemple.json"
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.