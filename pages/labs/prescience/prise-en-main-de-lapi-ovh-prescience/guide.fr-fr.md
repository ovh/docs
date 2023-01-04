---
title: 'Découvrir les API OVH Prescience'
slug: premiers-pas-avec-ovh-prescience-api
excerpt: 'Découvrez comment gérer les API OVH Prescience'
section: 'Premiers pas'
---

**Dernière mise à jour le 26/09/2018**

## Objectif

Prescience est un outil d'apprentissage automatique, pilotable via plusieurs API, celles-ci étant accessibles à l'utilisateur pour automatiser de multiples actions. 

**Ce guide vous présente ces API en détail afin de vous permettre de piloter votre propre plateforme OVH Prescience.**


|API|URL|Description
|---|---|---|
Prescience API|https://prescience-api.ai.ovh.net| API permettant de manipuler les « sources »,« datasets » et « modèles » de Prescience.
Prescience Serving|https://prescience-serving.ai.ovh.net| API permettant d'évaluer un modèle généré par Prescience.

### Authentification

L'utilisation de Prescience nécessite un jeton d'authentification.

Voici un exemple d'appel API :

```sh
curl -X GET "https://prescience-api.ai.ovh.net/project" -H "Authorization: Bearer ${TOKEN}"
```

## API OVH Prescience

### Sources

L'objet « source » est le résultat d'une tâche de parsing (analyse). Lors de l'appel API, l'objet retourné inclut les éléments suivants :

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`source_id`| Identifiant de la source | `String` | Oui | Non
`input_url`| URL interne du fichier pré-parsing | `String` | Non | Non
`source_url`| URL interne du fichier post-parsing | `String` | Non | Non
`input_type`| Type du fichier source | `String` | Oui | Non
`headers`| Le fichier pré-parsing contient les headers | `Boolean` | Oui | Non
`separator`| Séparateur du fichier pré-parsing si CSV | `String` | Non | Non
`schema`| Chaîne de caractères représentant le schéma en JSON | `String` | Non | Non
`status`| Statut de la source | `Status` | Oui | Non
`last_update`| Date de la dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de parsing | `Integer` | Non | Non
`current_step`| Étape courante du processus de parsing | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de parsing | `String` | Non | Non

- Liste des sources :

`GET https://prescience-api.ai.ovh.net/source`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|Page|`Integer`|Query|Non|`1`| Numéro de la page| `2`
|Size|`Integer`|Query|Non|`100`| Nombre d'éléments par page| `50`
|Sort_column|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|Sort_direction|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|

- Récupération d'une source :

`GET https://prescience-api.ai.ovh.net/source/{id_source}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_source`|`String`|Path|Oui|| Identifiant de la source| `ma_source`

- Suppression d'une source :

`DELETE https://prescience-api.ai.ovh.net/source/{id_source}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_source`|`String`|Path|Oui|| Identifiant de la source| `ma_source`



### Datasets

L'objet « dataset » est le résultat d'une tâche de « preprocessing ».
Lors de l'appel API, l'objet retourné contiendra les éléments suivants :

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`dataset_id`| Identifiant du dataset | `String` | Oui | Oui
`source`| Objet « source » ayant généré le dataset | `Source` | Non | Oui
`dataset_url`| URL interne du fichier résultant du pré-process | `String` | Non | Non
`transformation_url`| URL interne du fichier PMML de transformation | `String` | Non | Non
`label_id`| Identifiant de la colonne « label » | `String` | Oui | Non
`problem_type`| Type du problème de machine learning (« Classification »/« Regression ») | `String` | Oui | Non
`nb_fold`| Nombre de découpages réalisés par le pré-process | `Boolean` | Oui | Non
`selected_columns`| Liste des colonnes choisies dans la source | `String[]` | Non | Non
`schema`| Chaîne de caractères représentant le schéma en JSON | `String` | Non | Non
`status`| Statut du dataset | `Status` | Oui | Non
`last_update`| Date de la dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de preprocess | `Integer` | Non | Non
`current_step`| Étape courante du processus de preprocess | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de preprocess | `String` | Non | Non

- Liste des datasets :

`GET https://prescience-api.ai.ovh.net/dataset/`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|Page|`Integer`|Query|Non|`1`| Numéro de la page| `2`
|Size|`Integer`|Query|Non|`100`| Nombre d'éléments par page| `50`
|Sort_column|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|Sort_direction|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|Dataset_id|`String`|Query|Non|| Champ de filtrage sur le nom du dataset (recherche en mode LIKE)| `dataset`|
|Source_id|`String`|Query|Non|| Champ de filtrage sur le nom de la source du dataset (recherche en mode LIKE)| `source`|

- Récupération d'un dataset :

`GET https://prescience-api.ai.ovh.net/dataset/{id_dataset}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_dataset`|`String`|Path|Oui||Identifiant du dataset| `mon_dataset`

- Suppression d'un dataset :

`DELETE https://prescience-api.ai.ovh.net/dataset/{id_dataset}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_dataset`|`String`|Path|Oui| | Identifiant du dataset| `mon_dataset`



### Modèles

L'objet « modèle » est le résultat d'une tâche de « train ».
Lors de l'appel API, l'objet retourné comportera les éléments suivants :

|Champ|Description|Type|Ordonnable|Filtrable
|---|---|---|---|---|
`model_id`| Identifiant du modèle | `String` | Oui | Non
`dataset`| Objet « dataset » ayant généré le modèle | `Dataset` | Non | Oui
`label_id`| Identifiant de la colonne « label » | `String` | Oui | Non
`config`| Objet « config » ayant généré le modèle | `Config` | Non | Non
`status`| Statut du dataset | `Status` | Oui | Non
`last_update`| Date de la dernière mise à jour| `Timestamp` | Oui | Non
`created_at`| Date de création | `Timestamp` | Oui | Non
`total_step`| Nombre total d'étapes du processus de « train » | `Integer` | Non | Non
`current_step`| Étape courante du processus de « train » | `Integer` | Non | Non
`current_step_description`| Description de l'étape courante du processus de « train » | `String` | Non | Non

L'objet « config » décrit la configuration utilisée pour générer le modèle de machine learning.

|Champ|Description|Type
|---|---|---|
`name`| Nom de l'algorithme utilisé | `String`
`class_identifier`| Identifiant interne | `String`
`kwargs`| Hyperparamètres du modèle | `Dictonnaire`

- Liste des modèles :

`GET https://prescience-api.ai.ovh.net/model`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|Page|`Integer`|Query|Non|`1`| Numéro de la page souhaitée| `2`
|Size|`Integer`|Query|Non|`100`| Nombre d'éléments souhaités par page| `50`
|Sort_column|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `model_id`|
|Sort_direction|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `model_id`|
|Dataset_id|`String`|Query|Non|| Champ de filtrage sur le nom du dataset (recherche en mode LIKE)| `dataset`|

- Récupération d'un modèle :

`GET https://prescience-api.ai.ovh.net/model/{id_model}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_model`|`String`|Path|Oui|| Identifiant du modèle| `mon_model`

- Suppression d'un modèle :

`DELETE https://prescience-api.ai.ovh.net/model/{id_model}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`id_model`|`String`|Path|Oui|| Identifiant du modèle| `mon_model`



### Parsing

Pour créer une « source », il faut lancer une tâche de parsing.

`POST https://prescience-api.ai.ovh.net/ml/upload/source`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`parse.source_id`|`String`|Multipart `parse` JSON|Oui|| Nom de la source| `ma-source`
|`parse.input_type`|`String`|Multipart `parse` JSON|Oui|| Type de fichier `CSV` ou `parquet` uniquement| `CSV`
|`parse.separator`|`String`|Multipart `parse` JSON|Non|`,`| Séparateur dans le cas d'un fichier CSV| `;`
|`files`|`Files`|Multipart `input-file-file-index` name |Non|| Fichier à uploader (peut en contenir plusieurs) | `input-file-0`

Exemple :

En partant du principe que les fichiers CSV « data-1.csv » et « data-2.csv » sont dans un même répertoire :

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
> La source renvoyée dans la réponse est incomplète.
> En effet, la tâche étant asynchrone, elle sera complétée au fur et à mesure de son avancement.
>

### Preprocess

Pour créer un « dataset », il faut au préalable avoir généré une « source » et avoir ensuite créé une tâche de preprocess.

`POST https://prescience-api.ai.ovh.net/ml/preprocess/{source_id}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`source_id`|`String`|Query|Oui|| Nom de la source à parser| `ma-source`
|`dataset_id`|`String`|Body JSON|Oui|| Nom du futur dataset| `mon-gros-dataset`
|`label_id`|`String`|Body JSON|Oui|| Identifiant de la colonne du dataset à labelliser | `mon-label`
|`nb_fold`|`String`|Body JSON|Non|10| Nombre de folds à créer pendant le parsing| `6`
|`problem_type`|`String`|Body JSON|Oui|| Type du problème de machine learning (`classification`/`regression`)| `regression`
|`selected_columns`|`String[]`|Body JSON|Non|`[]`| Choix des colonnes pour le dataset. Par défaut, l'ensemble des colonnes sont selectionnées| `["colonne_1", "colonne_2"]`

Exemple :

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



### Optimisation

Une fois le « dataset » créé, il est possible de commencer à l'optimiser.
`POST https://prescience-api.ai.ovh.net/ml/optimize/{dataset_id}`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`dataset_id`|`String`|Query|Oui|| Nom du dataset à optimiser| `mon-gros-dataset`
|`scoring_metric`|`String`|Body JSON|Oui|| Métrique d'optimisation (Régression : `mae`/`mse` / ` R2 `, Classification : `accuracy`, `f1`, `roc_auc`)| `ma-source`
|`budget`|`Integer`|Body JSON|6| Budget alloué à l'optimisation| 10

Exemple :

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
> La tâche d'optimisation renvoie un objet intitulé « Optimisation ».
> Une fois l'optimisation terminée, il sera possible de lancer une requête sur les objets « Evaluation-Result » pour obtenir la meilleure configuration possible.
>



## Evaluation Result

L'objet « Evaluation-Result » est le résultat d'une tâche d'optimisation.
Lors de l'appel API, l'objet retourné contiendra les éléments suivants :

|Champ|Description|Type
|---|---|---|
`uuid`| Unique uuid de l'évaluation | `Integer`
`spent_time`| Temps passé à évaluer la configuration | `Integer`
`costs`| Dictonnaire contenant les métriques associées à la configuration | `Dict{}`
`config`| Configuration testée | `Config`
`status`| Statut du dataset | `Status`
`last_update`| Date de la dernière mise à jour| `Timestamp`
`created_at`| Date de création | `Timestamp`
`total_step`| Nombre total d'étapes du processus d'optimisation | `Integer`
`current_step`| Étape courante du processus d'optimisation | `Integer`
`current_step_description`| Description de l'étape courante du processus d'optimisation | `String`

- Liste des évaluations :

`GET https://prescience-api.ai.ovh.net/evaluation-result`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|Dataset_id|`String`|Query|Oui||Filtrage des évaluations sur le dataset| `mon-gros-dataset`
|Page|`Integer`|Query|Non|`1`| Numéro de la page souhaitée| `2`
|Size|`Integer`|Query|Non|`100`| Nombre d'éléments souhaités par page| `50`
|Sort_column|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|Sort_direction|`String`|Query|Non|`created_at`| Champ selon lequel les résultats sont ordonnés| `source_id`|
|Status|`String`|Query|Non|| Filtre les données selon le statut| `BUILT`|

## Entraînement

Après avoir choisi la meilleure configuration dans la liste des « Evaluation-Result » nous pouvons entraîner un modèle :

`POST https://jedison.ai.ovh.net/ml/train`

|Paramètres|Type|In|Requis|Défaut|Signification|Exemple
|---|---|---|---|---|---|---|
|`model_id`|`String`|Query|Oui|| Nom du futur modèle| `mon-model`
|`evaluation_uuid`|`String`|Query|Oui|| Identifiant de l'« Evaluation-Result » | `bcaef619-4bf3-4c15-b49f-bc325f98d891`
|`dataset_id`|`String`|Query|Non|`dataset_id` lié à l'« Evaluation-Result »| À renseigner pour entraîner sur un dataset différent de celui de l'« Evaluation-Result »| `mon-dataset-alternatif`

Exemple :
```sh
curl -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type:application/json" \
     -X POST https://prescience-api.ai.ovh.net/ml/train/?model_id=mon-model&evaluation_uuid=bcaef619-4bf3-4c15-b49f-bc325f98d891 \
```

> [!warning]
>
> La tâche d'entraînement renvoie un objet modèle incomplet.
> En effet, la tâche étant asynchrone, elle sera complétée au fur et à mesure de son avancement.
>

## OVH Prescience Serving API

### Description d'un modèle

Une fois qu'un modèle est entraîné, il est possible de l'utiliser pour réaliser des inférences.

> [!warning]
>
> Les deux API ont un objet « modèle » ne possédant pas la même structure. Seul l'identifiant `model_id` est commun.
>

- Description d'un modèle :

`POST https://prescience-serving.ai.ovh.net/model/{model_id}`

L'objet retourné décrit l'objet « modèle » selon Prescience Serving.

Exemple de résultat :
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

### Évaluation d'un modèle

> [!warning]
>
> Lors de l'étape de preprocessing, une transformation des données est effectuée.
> Le modèle se basant sur la sortie de cette transformation, il est impératif de transformer la donnée avant d'utiliser le modèle.
> Prescience Serving fournit des méthodes permettant d'effectuer à la fois cette transformation et l'inférence.

La plateforme de serving permet d'effectuer :
 - la transformation et l'évaluation ;
 - l'évaluation uniquement ;
 - la transformation uniquement.


|Méthode|URL|Description
|---|---|---|
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model | Inférence unitaire
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model/batch/csv | Inférence par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{model_id}/model/batch/json | Inférence par lot depuis un tableau JSON
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform | Transformation unitaire
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform/batch/csv | Transformation par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{transform_id}/transform/batch/json | Transformation par lot depuis un tableau JSON
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model | Transformation associée au modèle et inférence unitaire.
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model/batch/csv | Transformation associée au modèle et inférence par lot depuis un fichier CSV
POST | https://prescience-serving.ai.ovh.net/eval/{transform_model_id}/transform-model/batch/json | Transformation associée au modèle et inférence par lot depuis un tableau JSON


|Paramètres|Type|In|Requis|Défaut|Signification
|---|---|---|---|---|---|
|`id`|`String`|JSON|Non|| ID de la requête
|`arguments`|`Dict`|JSON|Oui|| Arguments de la requête


- Exemple d'une inférence unitaire :

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

- Exemple de l'évaluation d'un batch JSON :

Fichier `exemple.json` :
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